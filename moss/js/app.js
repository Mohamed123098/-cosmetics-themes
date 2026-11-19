/* MOSS & MINERAL — page rendering. Markup here, behaviour in core.js, content in data/products.js */
(function () {
  "use strict";
  const { S, $, $$, esc, money, byId, catName, concernName, qs, query, related, stars, cart, summaryHTML } = window.Shop;
  const page = document.body.dataset.page;
  const no = (p) => "No. " + String(p.no).padStart(2, "0");
  const lead = (p) => p.key.find((k) => k.amount && /%/.test(k.amount)) || p.key[0];

  const card = (p) => `
    <article class="card">
      <a class="card-link" href="product.html?id=${p.id}">
        <div class="card-img"><img src="${p.images[0]}" alt="${esc(p.name)}" width="600" height="600" loading="lazy">${p.badge ? `<span class="card-badge">${esc(p.badge)}</span>` : ""}</div>
        <div class="card-label">
          <span class="card-no">${no(p)}</span>
          <h3>${esc(p.name)}</h3>
          <span class="card-spec">${esc(lead(p).name)}${lead(p).amount ? " " + esc(lead(p).amount) : ""}</span>
        </div>
      </a>
      <div class="card-foot"><span>${esc(p.sizes[0].label)}, ${money(p.price)}</span><button type="button" class="card-add" data-add="${p.id}">Add<span class="sr"> ${esc(p.name)} to basket</span></button></div>
    </article>`;

  /* ---------- home ---------- */
  function home() {
    $("[data-register]").innerHTML = `
      <div class="reg-row reg-head" role="row"><span role="columnheader">No.</span><span role="columnheader">Formula</span><span role="columnheader">Key active</span><span role="columnheader">Size</span><span role="columnheader">Price</span><span role="columnheader"><span class="sr">Add</span></span></div>
      ${S.products.map((p) => `<div class="reg-row" role="row">
        <span role="cell" class="reg-no">${String(p.no).padStart(2, "0")}</span>
        <span role="cell" class="reg-name"><a href="product.html?id=${p.id}"><img src="assets/cutouts/${p.id}.webp" alt="" loading="lazy"><b>${esc(p.name)}</b></a><small>${esc(p.type)}</small></span>
        <span role="cell" class="reg-act">${esc(lead(p).name)}${lead(p).amount ? ` <em>${esc(lead(p).amount)}</em>` : ""}</span>
        <span role="cell" class="reg-size">${esc(p.sizes[0].label)}</span>
        <span role="cell" class="reg-price">${money(p.price)}</span>
        <span role="cell"><button type="button" class="reg-add" data-add="${p.id}">Add<span class="sr"> ${esc(p.name)}</span></button></span>
      </div>`).join("")}`;
  }

  /* ---------- shop ---------- */
  function shop() {
    const state = { category: qs("category") || "", concern: qs("concern") || "", sort: "featured" };
    const opt = (attr, id, name, n) => `<button type="button" class="opt" ${attr}="${id}"><span>${esc(name)}</span><small>${n}</small></button>`;
    $("[data-cats]").innerHTML = opt("data-cat", "", "All formulas", S.products.length) + S.categories.map((c) => opt("data-cat", c.id, c.name, query({ category: c.id }).length)).join("");
    $("[data-concerns]").innerHTML = opt("data-con", "", "Any concern", S.products.length) + S.concerns.map((c) => opt("data-con", c.id, c.name, query({ concern: c.id }).length)).join("");
    const draw = () => {
      const list = query(state);
      $$("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === state.category)));
      $$("[data-con]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.con === state.concern)));
      const bits = [state.category && catName(state.category), state.concern && concernName(state.concern)].filter(Boolean).join(", ");
      $("[data-count]").textContent = `${list.length} ${list.length === 1 ? "formula" : "formulas"}${bits ? " for " + bits.toLowerCase() : ""}`;
      $("[data-list]").innerHTML = list.length ? list.map(card).join("") : `<div class="empty"><p>No formula matches both filters.</p><button type="button" class="btn" data-reset>Clear filters</button></div>`;
      const u = new URLSearchParams(); if (state.category) u.set("category", state.category); if (state.concern) u.set("concern", state.concern);
      history.replaceState(null, "", u.toString() ? "?" + u : location.pathname);
    };
    document.addEventListener("click", (e) => {
      const c = e.target.closest("[data-cat]"); if (c) { state.category = c.dataset.cat; draw(); }
      const k = e.target.closest("[data-con]"); if (k) { state.concern = k.dataset.con; draw(); }
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
    ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: p.name, sku: no(p), description: p.description, brand: { "@type": "Brand", name: S.brand },
      aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviewsCount },
      offers: { "@type": "Offer", price: p.price, priceCurrency: S.currency, availability: "https://schema.org/InStock" } });
    document.head.appendChild(ld);
    const L = lead(p);
    $("#pdp").innerHTML = `
      <div class="gallery">
        ${p.images.map((src, i) => `<figure class="${i === 0 ? "g-first" : ""}"><img src="${src}" alt="${esc(p.name)}, photo ${i + 1}" width="1200" height="1200" ${i ? 'loading="lazy"' : ""}></figure>`).join("")}
      </div>
      <div class="buy">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="shop.html">The register</a> / <a href="shop.html?category=${p.category}">${esc(catName(p.category))}</a></nav>
        <p class="buy-no">${no(p)}</p>
        <h1>${esc(p.name)}</h1>
        <p class="buy-short">${esc(p.description)}</p>
        <div class="label-card spec">
          <p class="lc-top">Specimen label</p>
          <dl>
            <div><dt>Type</dt><dd>${esc(p.type)}</dd></div>
            <div><dt>Key active</dt><dd>${esc(L.name)}${L.amount ? ", " + esc(L.amount) : ""}</dd></div>
            <div><dt>For</dt><dd>${p.concerns.map(concernName).join(", ")}</dd></div>
            <div><dt>Rating</dt><dd><a href="#reviews">${stars(p.rating)} ${p.rating} from ${p.reviewsCount}</a></dd></div>
          </dl>
        </div>
        <fieldset class="sizes"><legend>Size</legend>
          ${p.sizes.map((s, i) => `<label><input type="radio" name="size-${p.id}" value="${i}" ${i === 0 ? "checked" : ""}><span><b>${esc(s.label)}</b><em>${money(s.price)}</em></span></label>`).join("")}
        </fieldset>
        <div class="buy-row">
          <label class="qty-in"><span>Qty</span><input type="number" min="1" max="20" value="1" data-qty-for="${p.id}"></label>
          <button type="button" class="btn btn-solid btn-wide" data-add="${p.id}" data-open>Add to basket</button>
        </div>
        <p class="buy-note">Free UK delivery over ${money(S.freeShippingOver)}. Return five empties for a free refill.</p>
        <div class="acc">
          <details open><summary>What it does</summary><ul>${p.benefits.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></details>
          <details><summary>Key ingredients</summary><dl class="keys">${p.key.map((k) => `<div><dt>${esc(k.name)}</dt><dd>${esc(k.amount || "")}</dd><dd class="note">${esc(k.note)}</dd></div>`).join("")}</dl></details>
          <details><summary>How to use</summary><ol>${p.how.map((h) => `<li>${esc(h)}</li>`).join("")}</ol></details>
          <details><summary>Full ingredients</summary><p class="inci">${esc(p.inci)}</p></details>
        </div>
      </div>`;
    $$(`[name="size-${p.id}"]`).forEach((r) => r.onchange = () => {});
    $("#reviews").innerHTML = `
      <div class="sec-head"><h2 id="rev-h">From people who use it</h2><p>${stars(p.rating)} ${p.rating} average from ${p.reviewsCount} reviews</p></div>
      <ol class="rev-list">${p.reviews.map((r) => `<li><p>“${esc(r.text)}”</p><span>${stars(r.rating)} ${esc(r.name)}</span></li>`).join("")}</ol>`;
    $("[data-related]").innerHTML = related(p).map(card).join("");
  }

  /* ---------- checkout ---------- */
  function checkout() {
    const box = $("[data-summary]");
    const draw = () => { const s = summaryHTML(); box.innerHTML = s.empty ? `<p class="empty">Your basket is empty. <a class="link" href="shop.html">Browse the register</a></p>` : s.html; };
    draw(); document.addEventListener("cart:change", draw);
    $("#co-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = $(".form-msg", e.target);
      if (!cart.count()) { msg.textContent = "Your basket is empty."; return; }
      let ok = true;
      $$("[required]", e.target).forEach((el) => { const bad = !el.value.trim(); el.setAttribute("aria-invalid", String(bad)); if (bad) ok = false; });
      if (!ok) { msg.textContent = "Fill in the highlighted fields."; return; }
      cart.clear();
      $("[data-checkout]").innerHTML = `<div class="done"><h2>Thank you. Your order is in.</h2><p>This is a demo checkout. Connect your payment provider to take real orders.</p><a class="btn btn-solid" href="index.html">Back to the apothecary</a></div>`;
    });
  }

  ({ index: home, shop, product, checkout }[page] || (() => {}))();
})();
