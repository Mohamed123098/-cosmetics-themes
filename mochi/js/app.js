/* MOCHI — page rendering. Markup here, behaviour in core.js, content in data/products.js */
(function () {
  "use strict";
  const { S, $, $$, esc, money, byId, catName, qs, query, related, stars, cart, summaryHTML, toast } = window.Shop;
  const page = document.body.dataset.page;
  const TONES = ["lilac", "peach", "mint", "butter", "sky", "pink"];
  const tone = (p) => TONES[(p.no - 1) % TONES.length];
  const TEX = { gel: "Wobbly jelly", water: "Splashy water", serum: "Juicy drops", cream: "Whipped cloud", fluid: "Silky fluid", balm: "Melty balm" };

  const card = (p) => `
    <article class="card tone-${tone(p)}">
      <a class="card-link" href="product.html?id=${p.id}">
        <div class="card-img blob-${p.no % 4}"><img src="${p.images[0]}" alt="${esc(p.name)}" width="600" height="600" loading="lazy"></div>
        <h3 class="card-name">${esc(p.name)}</h3>
      </a>
      ${p.badge ? `<span class="sticker-badge">${esc(p.badge)}</span>` : ""}
      <p class="card-short">${esc(p.short)}</p>
      <div class="card-foot"><span class="card-price">${money(p.price)}</span><span class="card-rate">${stars(p.rating)}<span>${p.reviewsCount}</span></span>
        <button type="button" class="card-add" data-add="${p.id}" aria-label="Add ${esc(p.name)} to bag"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button></div>
    </article>`;

  /* ---------- home ---------- */
  function home() {
    $("[data-moods]").innerHTML = S.concerns.map((c, i) => `<a class="mood tone-${TONES[i % TONES.length]}" href="shop.html?concern=${c.id}">${esc(c.name)}<span>${query({ concern: c.id }).length}</span></a>`).join("");
    $("[data-rail=best]").innerHTML = S.products.slice().sort((a, b) => b.reviewsCount - a.reviewsCount).slice(0, 4).map(card).join("");
    $("[data-textures]").innerHTML = ["bubble-jelly-cleanser", "juicy-c-serum", "cloud-barrier-cream", "dewy-drop-toner"].map(byId).filter(Boolean).map((p, i) => `
      <a class="tex tex-${i}" href="product.html?id=${p.id}"><img src="${p.images[1]}" alt="${esc(TEX[p.texture])} texture of ${esc(p.name)}" width="600" height="600" loading="lazy">
        <span><b>${TEX[p.texture]}</b>${esc(p.name)}</span></a>`).join("");
    // routine tabs (a real order of steps)
    const R = { am: ["cleanse", "tone", "vitc", "moisturize", "protect"], pm: ["cleanse", "tone", "retinal", "eyes", "moisturize"] };
    const pick = (k) => k === "vitc" ? S.products.find((p) => p.category === "treat" && /c serum/i.test(p.name)) :
                        k === "retinal" ? S.products.find((p) => p.category === "treat" && /retinal/i.test(p.name)) :
                        S.products.find((p) => p.category === k);
    let which = "am";
    const draw = () => {
      const list = R[which].map(pick).filter(Boolean);
      $("[data-routine]").innerHTML = list.map((p) => `<li class="tone-${tone(p)}"><a href="product.html?id=${p.id}"><img src="assets/cutouts/${p.id}.webp" alt="" loading="lazy"><b>${esc(catName(p.category))}</b><span>${esc(p.name)}</span></a></li>`).join("");
      $("[data-rt-total]").innerHTML = `${list.length} products, <b>${money(list.reduce((n, p) => n + p.price, 0))}</b>`;
      $("[data-add-routine]").onclick = () => { list.forEach((p) => cart.add(p.id, 0, 1)); window.Shop.openDrawer(); };
      $$("[data-rt]").forEach((b) => { const on = b.dataset.rt === which; b.setAttribute("aria-selected", String(on)); b.tabIndex = on ? 0 : -1; });
      $("#rt-panel").setAttribute("aria-labelledby", "tab-" + which);
    };
    $$("[data-rt]").forEach((b) => {
      b.onclick = () => { which = b.dataset.rt; draw(); };
      b.onkeydown = (e) => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { which = which === "am" ? "pm" : "am"; draw(); $(`[data-rt=${which}]`).focus(); } };
    });
    draw();
  }

  /* ---------- shop ---------- */
  function shop() {
    const state = { category: qs("category") || "", concern: qs("concern") || "", sort: "featured" };
    $("[data-cats]").innerHTML = [{ id: "", name: "Everything" }, ...S.categories].map((c) => `<button type="button" data-cat="${c.id}">${esc(c.name)}</button>`).join("");
    $("[data-concerns]").innerHTML = S.concerns.map((c, i) => `<button type="button" class="tone-${TONES[i % TONES.length]}" data-con="${c.id}">${esc(c.name)}</button>`).join("");
    const draw = () => {
      const list = query(state);
      $$("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === state.category)));
      $$("[data-con]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.con === state.concern)));
      $("[data-count]").textContent = `${list.length} ${list.length === 1 ? "product" : "products"}`;
      $("[data-list]").innerHTML = list.length ? list.map(card).join("") : `<div class="empty"><p>No matches for that combo.</p><button type="button" class="btn" data-reset>Clear filters</button></div>`;
      const u = new URLSearchParams(); if (state.category) u.set("category", state.category); if (state.concern) u.set("concern", state.concern);
      history.replaceState(null, "", u.toString() ? "?" + u : location.pathname);
    };
    document.addEventListener("click", (e) => {
      const c = e.target.closest("[data-cat]"); if (c) { state.category = c.dataset.cat; draw(); }
      const k = e.target.closest("[data-con]"); if (k) { state.concern = state.concern === k.dataset.con ? "" : k.dataset.con; draw(); }
      if (e.target.closest("[data-reset]")) { state.category = state.concern = ""; draw(); }
    });
    $("[data-sort]").onchange = (e) => { state.sort = e.target.value; draw(); };
    draw();
  }

  /* ---------- product ---------- */
  function product() {
    const p = byId(qs("id")) || S.products[0];
    document.title = `${p.name} — ${S.brand}`;
    $('meta[name="description"]').setAttribute("content", p.short);
    const ld = document.createElement("script"); ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.description, brand: { "@type": "Brand", name: S.brand },
      aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviewsCount },
      offers: { "@type": "Offer", price: p.price, priceCurrency: S.currency, availability: "https://schema.org/InStock" } });
    document.head.appendChild(ld);
    $("#pdp").className = "pdp tone-" + tone(p);
    $("#pdp").innerHTML = `
      <div class="gallery">
        <div class="g-main"><img id="g-main" src="${p.images[0]}" alt="${esc(p.name)}" width="1200" height="1200"></div>
        <div class="g-thumbs" role="group" aria-label="Product photos">${p.images.map((src, i) => `<button type="button" data-g="${i}" aria-pressed="${i === 0}"><img src="${src}" alt="Photo ${i + 1}" width="120" height="120" loading="lazy"></button>`).join("")}</div>
      </div>
      <div class="buy">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="shop.html">Shop</a><span aria-hidden="true">/</span><a href="shop.html?category=${p.category}">${esc(catName(p.category))}</a></nav>
        <h1>${esc(p.name)}</h1>
        <ul class="tags"><li>${esc(p.type)}</li><li>${TEX[p.texture]}</li>${p.badge ? `<li class="hot">${esc(p.badge)}</li>` : ""}</ul>
        <a class="buy-rating" href="#reviews">${stars(p.rating)} <span>${p.rating} (${p.reviewsCount} reviews)</span></a>
        <p class="buy-short">${esc(p.description)}</p>
        ${p.sizes.length > 1 ? `<fieldset class="sizes"><legend>Size</legend>${p.sizes.map((s, i) => `<label><input type="radio" name="size-${p.id}" value="${i}" ${i === 0 ? "checked" : ""}><span>${esc(s.label)}</span></label>`).join("")}</fieldset>` : `<input type="radio" name="size-${p.id}" value="0" checked hidden>`}
        <div class="buy-row">
          <div class="stepper"><button type="button" data-qs="-1" aria-label="Decrease quantity">−</button><input type="number" min="1" max="20" value="1" data-qty-for="${p.id}" aria-label="Quantity"><button type="button" data-qs="1" aria-label="Increase quantity">+</button></div>
          <button type="button" class="btn btn-solid btn-big" data-add="${p.id}" data-open>Add to bag <span class="pill-price" data-live-price>${money(p.price)}</span></button>
        </div>
        <p class="buy-note">Free shipping over ${money(S.freeShippingOver)} and free returns, even if it's opened.</p>
        <div class="panels">
          <details open><summary>Why you'll love it</summary><ul class="ticks">${p.benefits.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></details>
          <details><summary>The good stuff inside</summary><ul class="keys">${p.key.map((k) => `<li><b>${esc(k.name)}${k.amount ? ` <em>${esc(k.amount)}</em>` : ""}</b><span>${esc(k.note)}</span></li>`).join("")}</ul></details>
          <details><summary>How to use</summary><ol>${p.how.map((h) => `<li>${esc(h)}</li>`).join("")}</ol></details>
          <details><summary>Full ingredient list</summary><p class="inci">${esc(p.inci)}</p></details>
        </div>
      </div>`;
    $$("[data-g]").forEach((b) => b.onclick = () => { $("#g-main").src = p.images[+b.dataset.g]; $$("[data-g]").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); });
    $$("[data-qs]").forEach((b) => b.onclick = () => { const i = $(`[data-qty-for="${p.id}"]`); i.value = Math.min(20, Math.max(1, (+i.value || 1) + +b.dataset.qs)); });
    $$(`[name="size-${p.id}"]`).forEach((r) => r.onchange = () => { $("[data-live-price]").textContent = money(p.sizes[+r.value].price); });
    $("#reviews").innerHTML = `
      <div class="sec-head"><h2 id="rev-h">${p.rating} out of 5</h2><p>${stars(p.rating)} from ${p.reviewsCount} reviews</p></div>
      <div class="rev-list">${p.reviews.map((r, i) => `<blockquote class="tone-${TONES[(p.no + i) % TONES.length]}"><p>${esc(r.text)}</p><footer>${stars(r.rating)}<cite>${esc(r.name)}</cite></footer></blockquote>`).join("")}</div>`;
    $("[data-related]").innerHTML = related(p).map(card).join("");
  }

  /* ---------- checkout ---------- */
  function checkout() {
    const box = $("[data-summary]");
    const draw = () => { const s = summaryHTML(); box.innerHTML = s.empty ? `<p class="empty">Your bag is empty. <a href="shop.html">Go shopping</a></p>` : s.html; };
    draw(); document.addEventListener("cart:change", draw);
    $("#co-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = $(".form-msg", e.target);
      if (!cart.count()) { msg.textContent = "Your bag is empty. Add something first."; return; }
      let ok = true;
      $$("[required]", e.target).forEach((el) => { const bad = !el.value.trim(); el.setAttribute("aria-invalid", String(bad)); if (bad) ok = false; });
      if (!ok) { msg.textContent = "Fill in the highlighted fields."; return; }
      cart.clear();
      $("[data-checkout]").innerHTML = `<div class="done"><h2>Order placed!</h2><p>This is a demo checkout. Connect your payment provider to take real orders.</p><a class="btn btn-solid" href="index.html">Back to the shop</a></div>`;
    });
  }

  ({ index: home, shop, product, checkout }[page] || (() => {}))();
})();
