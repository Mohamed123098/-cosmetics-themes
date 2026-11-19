/* =========================================================
   Store engine — shared by every page of the theme.
   Cart, cart drawer, filters, forms, small helpers.
   Product data lives in data/products.js (window.STORE).
   No dependencies, no build step.
   ========================================================= */
(function () {
  "use strict";
  const S = window.STORE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- formatting ---------- */
  const fmt = new Intl.NumberFormat(S.locale || "en-US", { style: "currency", currency: S.currency || "USD", maximumFractionDigits: 0 });
  const money = (n) => fmt.format(n);

  /* ---------- catalogue ---------- */
  const byId = (id) => S.products.find((p) => p.id === id);
  const catName = (id) => (S.categories.find((c) => c.id === id) || {}).name || id;
  const concernName = (id) => (S.concerns.find((c) => c.id === id) || {}).name || id;
  const qs = (k) => new URLSearchParams(location.search).get(k);

  function query({ category = "", concern = "", sort = "featured" } = {}) {
    let list = S.products.filter((p) => (!category || p.category === category) && (!concern || p.concerns.includes(concern)));
    const by = {
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      "rating": (a, b) => b.rating - a.rating,
      "featured": (a, b) => a.no - b.no
    }[sort] || ((a, b) => a.no - b.no);
    return list.slice().sort(by);
  }

  function related(p, n = 4) {
    const score = (q) => (q.category === p.category ? 2 : 0) + q.concerns.filter((c) => p.concerns.includes(c)).length;
    return S.products.filter((q) => q.id !== p.id).sort((a, b) => score(b) - score(a) || a.no - b.no).slice(0, n);
  }

  /* stars: returns an inline SVG row; colour comes from CSS currentColor */
  function stars(r) {
    const full = Math.round(r * 2) / 2;
    let out = "";
    for (let i = 1; i <= 5; i++) {
      const fill = full >= i ? 1 : full >= i - 0.5 ? 0.5 : 0;
      out += `<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><defs><linearGradient id="st${i}${fill}"><stop offset="${fill * 100}%" stop-color="currentColor"/><stop offset="${fill * 100}%" stop-color="currentColor" stop-opacity=".22"/></linearGradient></defs><path fill="url(#st${i}${fill})" d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7z"/></svg>`;
    }
    return `<span class="stars" role="img" aria-label="${r} out of 5 stars">${out}</span>`;
  }

  /* ---------- storage (falls back to memory if blocked) ---------- */
  const KEY = (S.brandId || "store") + "-cart";
  let memory = [];
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return memory; } };
  const save = (items) => { memory = items; try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* private mode */ } };

  /* ---------- cart ---------- */
  const cart = {
    items() { return load().filter((i) => byId(i.id)); },
    lines() {
      return this.items().map((i) => {
        const p = byId(i.id), size = p.sizes[i.size] || p.sizes[0];
        return { key: i.id + "|" + i.size, p, size, qty: i.qty, total: size.price * i.qty };
      });
    },
    count() { return this.items().reduce((n, i) => n + i.qty, 0); },
    subtotal() { return this.lines().reduce((n, l) => n + l.total, 0); },
    add(id, size = 0, qty = 1) {
      const items = this.items();
      const hit = items.find((i) => i.id === id && i.size === size);
      if (hit) hit.qty = Math.min(hit.qty + qty, 20); else items.push({ id, size, qty });
      save(items); changed();
    },
    set(key, qty) {
      const [id, size] = key.split("|");
      let items = this.items();
      items = qty <= 0 ? items.filter((i) => !(i.id === id && String(i.size) === size))
                       : items.map((i) => (i.id === id && String(i.size) === size ? { ...i, qty: Math.min(qty, 20) } : i));
      save(items); changed();
    },
    clear() { save([]); changed(); }
  };

  function changed() {
    $$("[data-cart-count]").forEach((el) => {
      const n = cart.count();
      el.textContent = n;
      el.hidden = n === 0;
    });
    renderDrawer();
    document.dispatchEvent(new CustomEvent("cart:change"));
  }

  /* ---------- cart drawer ---------- */
  const T = Object.assign({
    cart: "Your bag", close: "Close", empty: "Your bag is empty.", emptyCta: "Shop all products",
    subtotal: "Subtotal", checkout: "Checkout", shippingNote: "Shipping and taxes are calculated at checkout.",
    freeLeft: "You're {x} away from free shipping.", freeOk: "Free shipping unlocked.",
    remove: "Remove", added: "Added to your bag", decrease: "Decrease quantity", increase: "Increase quantity"
  }, S.text || {});

  function shippingLine(sub) {
    if (!S.freeShippingOver) return "";
    const left = S.freeShippingOver - sub;
    const pct = Math.min(100, (sub / S.freeShippingOver) * 100);
    const msg = left > 0 ? T.freeLeft.replace("{x}", money(left)) : T.freeOk;
    return `<div class="ship"><p>${msg}</p><div class="ship-bar" aria-hidden="true"><span style="width:${pct}%"></span></div></div>`;
  }

  function lineHTML(l) {
    return `<li class="ci">
      <a class="ci-img" href="product.html?id=${l.p.id}"><img src="${l.p.images[0]}" alt="" width="96" height="96" loading="lazy"></a>
      <div class="ci-body">
        <a class="ci-name" href="product.html?id=${l.p.id}">${esc(l.p.name)}</a>
        <span class="ci-size">${esc(l.size.label)}</span>
        <div class="qty" data-key="${l.key}">
          <button type="button" data-step="-1" aria-label="${T.decrease}">−</button>
          <span aria-live="polite">${l.qty}</span>
          <button type="button" data-step="1" aria-label="${T.increase}">+</button>
        </div>
      </div>
      <div class="ci-side"><span class="ci-price">${money(l.total)}</span>
        <button type="button" class="ci-remove" data-remove="${l.key}">${T.remove}</button></div>
    </li>`;
  }

  function renderDrawer() {
    const d = $("#cart-drawer");
    if (!d) return;
    const lines = cart.lines(), sub = cart.subtotal();
    $(".cd-body", d).innerHTML = lines.length
      ? shippingLine(sub) + `<ul class="ci-list">${lines.map(lineHTML).join("")}</ul>`
      : `<div class="cd-empty"><p>${T.empty}</p><a class="btn" href="shop.html">${T.emptyCta}</a></div>`;
    $(".cd-foot", d).hidden = !lines.length;
    $(".cd-sub", d).textContent = money(sub);
  }

  function buildDrawer() {
    if ($("#cart-drawer")) return;
    const d = document.createElement("div");
    d.innerHTML = `
      <div class="cd-scrim" data-cart-close hidden></div>
      <aside id="cart-drawer" class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cd-title" hidden>
        <header class="cd-head"><h2 id="cd-title">${T.cart}</h2>
          <button type="button" class="cd-close" data-cart-close aria-label="${T.close}"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="1.6"/></svg></button></header>
        <div class="cd-body"></div>
        <footer class="cd-foot"><div class="cd-row"><span>${T.subtotal}</span><strong class="cd-sub"></strong></div>
          <p class="cd-note">${T.shippingNote}</p><a class="btn btn-solid cd-checkout" href="checkout.html">${T.checkout}</a></footer>
      </aside>
      <div class="toast" role="status" aria-live="polite"></div>`;
    while (d.firstChild) document.body.appendChild(d.firstChild);
  }

  let lastFocus = null;
  function openDrawer() {
    const d = $("#cart-drawer"), s = $(".cd-scrim");
    lastFocus = document.activeElement;
    d.hidden = s.hidden = false;
    requestAnimationFrame(() => { d.classList.add("open"); s.classList.add("open"); });
    document.documentElement.classList.add("no-scroll");
    $(".cd-close", d).focus();
  }
  function closeDrawer() {
    const d = $("#cart-drawer"), s = $(".cd-scrim");
    if (!d || d.hidden) return;
    d.classList.remove("open"); s.classList.remove("open");
    document.documentElement.classList.remove("no-scroll");
    setTimeout(() => { d.hidden = s.hidden = true; }, 320);
    if (lastFocus) lastFocus.focus();
  }

  let toastTimer;
  function toast(msg) {
    const t = $(".toast"); if (!t) return;
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  /* ---------- global events ---------- */
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.closest("[data-cart-open]")) { e.preventDefault(); openDrawer(); return; }
    if (t.closest("[data-cart-close]")) { closeDrawer(); return; }
    const step = t.closest(".qty [data-step]");
    if (step) {
      const box = step.closest(".qty"), cur = cart.lines().find((l) => l.key === box.dataset.key);
      if (cur) cart.set(box.dataset.key, cur.qty + Number(step.dataset.step));
      return;
    }
    const rm = t.closest("[data-remove]");
    if (rm) { cart.set(rm.dataset.remove, 0); return; }
    const add = t.closest("[data-add]");
    if (add) {
      const sizeSel = document.querySelector(`[name="size-${add.dataset.add}"]:checked`);
      const qtyIn = document.querySelector(`[data-qty-for="${add.dataset.add}"]`);
      cart.add(add.dataset.add, sizeSel ? Number(sizeSel.value) : 0, qtyIn ? Math.max(1, Number(qtyIn.value) || 1) : 1);
      if (add.hasAttribute("data-open")) openDrawer(); else toast(T.added);
      return;
    }
    const nav = t.closest("[data-nav-toggle]");
    if (nav) {
      const open = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", open);
      nav.setAttribute("aria-expanded", String(open));
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeDrawer(); document.body.classList.remove("nav-open"); }
    if (e.key === "Tab") {  // keep focus inside the open drawer
      const d = $("#cart-drawer");
      if (!d || d.hidden) return;
      const f = $$("a,button,input,select", d).filter((x) => !x.disabled && x.offsetParent);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  /* ---------- forms (front-end only: connect to your email / CRM) ---------- */
  function wireForms() {
    $$("form[data-newsletter]").forEach((f) => f.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = f.querySelector("input[type=email]");
      const msg = f.querySelector(".form-msg");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { msg.textContent = S.text?.emailBad || "Enter a valid email address."; email.setAttribute("aria-invalid", "true"); return; }
      email.removeAttribute("aria-invalid"); msg.textContent = S.text?.subscribed || "You're on the list. Check your inbox to confirm.";
      f.reset();
    }));
    $$("form[data-contact]").forEach((f) => f.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      $$("[required]", f).forEach((el) => {
        const bad = !el.value.trim() || (el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
        el.setAttribute("aria-invalid", String(bad)); if (bad) ok = false;
      });
      const msg = f.querySelector(".form-msg");
      msg.textContent = ok ? (S.text?.sent || "Thanks — we'll reply within one working day.") : (S.text?.fixFields || "Fill in the highlighted fields.");
      if (ok) f.reset();
    }));
  }

  /* ---------- checkout summary (demo: connect a payment provider) ---------- */
  function summaryHTML() {
    const lines = cart.lines(), sub = cart.subtotal();
    const ship = !lines.length ? 0 : (S.freeShippingOver && sub >= S.freeShippingOver ? 0 : (S.shippingFlat || 0));
    return {
      empty: !lines.length,
      html: `<ul class="sum-list">${lines.map((l) => `<li><img src="${l.p.images[0]}" alt="" width="64" height="64"><span><b>${esc(l.p.name)}</b><small>${esc(l.size.label)} × ${l.qty}</small></span><span>${money(l.total)}</span></li>`).join("")}</ul>
        <dl class="sum-tot"><div><dt>${T.subtotal}</dt><dd>${money(sub)}</dd></div>
        <div><dt>${S.text?.shipping || "Shipping"}</dt><dd>${ship ? money(ship) : (S.text?.free || "Free")}</dd></div>
        <div class="grand"><dt>${S.text?.total || "Total"}</dt><dd>${money(sub + ship)}</dd></div></dl>`
    };
  }

  function boot() {
    buildDrawer(); changed(); wireForms();
    // highlight current nav link
    const here = location.pathname.split("/").pop() || "index.html";
    $$("[data-nav] a").forEach((a) => { if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page"); });
  }

  window.Shop = { S, $, $$, esc, money, byId, catName, concernName, qs, query, related, stars, cart, openDrawer, closeDrawer, toast, summaryHTML, T };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
