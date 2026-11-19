/* ALBA — page rendering. Markup here, behaviour in core.js, content in data/products.js */
(function () {
  "use strict";
  const { S, $, $$, esc, money, byId, catName, qs, query, related, stars, cart, summaryHTML } = window.Shop;
  const page = document.body.dataset.page;

  /* product card: image on a plate, name, type, price */
  const card = (p) => `
    <article class="card">
      <a class="card-link" href="product.html?id=${p.id}">
        <div class="card-img"><img src="${p.images[0]}" alt="${esc(p.name)}" width="600" height="600" loading="lazy"></div>
        ${p.badge ? `<span class="card-badge">${esc(p.badge)}</span>` : ""}
        <h3 class="card-name">${esc(p.name)}</h3>
      </a>
      <p class="card-meta">${esc(p.type)} <span>${esc(p.sizes[0].label)}</span></p>
      <div class="card-foot"><span class="card-price">${p.sizes.length > 1 ? "From " : ""}${money(p.price)}</span>
        <button type="button" class="card-add" data-add="${p.id}">Add to bag<span class="sr">: ${esc(p.name)}</span></button></div>
    </article>`;

  /* ---------- home ---------- */
  function home() {
    const steps = [["cleanse", "Cleanse", "Lift the day without stripping."], ["tone", "Prepare", "Flood skin with water."],
                   ["treat", "Treat", "Target tone, lines or texture."], ["protect", "Protect", "Mineral SPF, every morning."]];
    $("[data-ritual]").innerHTML = steps.map(([cat, name, txt]) => {
      const p = S.products.find((x) => x.category === cat);
      return `<li><a href="product.html?id=${p.id}">
        <span class="ring"><img src="assets/cutouts/${p.id}.webp" alt="" loading="lazy"></span>
        <span class="step-name">${name}</span><span class="step-txt">${txt}</span><span class="step-prod">${esc(p.name)}</span></a></li>`;
    }).join("");
    $("[data-rail=best]").innerHTML = S.products.slice().sort((a, b) => b.reviewsCount - a.reviewsCount).slice(0, 4).map(card).join("");
    const f = $("[data-feature]"), p = byId(f.dataset.feature);
    f.innerHTML = `
      <figure class="feature-img"><img src="${p.images[2]}" alt="${esc(p.name)} close up" width="1200" height="1200" loading="lazy"></figure>
      <div class="feature-txt">
        <h2>${esc(p.name)}</h2>
        <p class="lead">${esc(p.description)}</p>
        <dl class="actives">${p.key.map((k) => `<div><dt>${esc(k.name)}</dt><dd>${esc(k.amount || "—")}</dd><dd class="note">${esc(k.note)}</dd></div>`).join("")}</dl>
        <div class="feature-buy"><span class="price">${money(p.price)}</span><button class="btn btn-solid" type="button" data-add="${p.id}" data-open>Add to bag</button>
        <a class="link" href="product.html?id=${p.id}">Full details</a></div>
      </div>`;
  }

  /* ---------- shop ---------- */
  function shop() {
    const state = { category: qs("category") || "", concern: qs("concern") || "", sort: "featured" };
    const cats = [{ id: "", name: "All" }, ...S.categories];
    $("[data-cats]").innerHTML = cats.map((c) => `<button type="button" data-cat="${c.id}">${esc(c.name)}</button>`).join("");
    $("[data-concern]").insertAdjacentHTML("beforeend", S.concerns.map((c) => `<option value="${c.id}">${esc(c.name)}</option>`).join(""));
    $("[data-concern]").value = state.concern;
    const draw = () => {
      const list = query(state);
      $$("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === state.category)));
      $("[data-count]").textContent = `${list.length} ${list.length === 1 ? "product" : "products"}`;
      $("[data-list]").innerHTML = list.length ? list.map(card).join("") : `<p class="empty">Nothing matches yet. <button type="button" class="link" data-reset>Clear filters</button></p>`;
      const u = new URLSearchParams(); if (state.category) u.set("category", state.category); if (state.concern) u.set("concern", state.concern);
      history.replaceState(null, "", u.toString() ? "?" + u : location.pathname);
    };
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-cat]"); if (b) { state.category = b.dataset.cat; draw(); }
      if (e.target.closest("[data-reset]")) { state.category = state.concern = ""; $("[data-concern]").value = ""; draw(); }
    });
    $("[data-concern]").onchange = (e) => { state.concern = e.target.value; draw(); };
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
    $("#pdp").innerHTML = `
      <div class="gallery">
        <div class="g-main"><img id="g-main" src="${p.images[0]}" alt="${esc(p.name)}" width="1200" height="1200"></div>
        <div class="g-thumbs" role="group" aria-label="Product photos">${p.images.map((src, i) => `<button type="button" data-g="${i}" aria-pressed="${i === 0}"><img src="${src}" alt="Photo ${i + 1}" width="120" height="120" loading="lazy"></button>`).join("")}</div>
      </div>
      <div class="buy">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="shop.html">Shop</a> / <a href="shop.html?category=${p.category}">${esc(catName(p.category))}</a></nav>
        <h1>${esc(p.name)}</h1>
        <p class="buy-type">${esc(p.type)}</p>
        <a class="buy-rating" href="#reviews">${stars(p.rating)} <span>${p.rating} from ${p.reviewsCount} reviews</span></a>
        <p class="buy-price" data-live-price>${money(p.price)}</p>
        <p class="buy-short">${esc(p.short)}</p>
        <fieldset class="sizes"><legend>Size</legend>
          ${p.sizes.map((s, i) => `<label><input type="radio" name="size-${p.id}" value="${i}" ${i === 0 ? "checked" : ""}><span>${esc(s.label)} <b>${money(s.price)}</b></span></label>`).join("")}
        </fieldset>
        <div class="buy-row">
          <label class="qty-in"><span class="sr">Quantity</span><input type="number" min="1" max="20" value="1" data-qty-for="${p.id}"></label>
          <button type="button" class="btn btn-solid btn-wide" data-add="${p.id}" data-open>Add to bag</button>
        </div>
        <p class="buy-note">Free shipping over ${money(S.freeShippingOver)}. Free returns for 30 days.</p>
        <div class="acc">
          <details open><summary>What it does</summary><p>${esc(p.description)}</p><ul>${p.benefits.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></details>
          <details><summary>Key actives</summary><dl class="actives">${p.key.map((k) => `<div><dt>${esc(k.name)}</dt><dd>${esc(k.amount || "—")}</dd><dd class="note">${esc(k.note)}</dd></div>`).join("")}</dl></details>
          <details><summary>How to use</summary><ol>${p.how.map((h) => `<li>${esc(h)}</li>`).join("")}</ol></details>
          <details><summary>Full ingredients</summary><p class="inci">${esc(p.inci)}</p></details>
        </div>
      </div>`;
    $$("[data-g]").forEach((b) => b.onclick = () => {
      $("#g-main").src = p.images[+b.dataset.g];
      $$("[data-g]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    });
    $$(`[name="size-${p.id}"]`).forEach((r) => r.onchange = () => { $("[data-live-price]").textContent = money(p.sizes[+r.value].price); });
    $("#reviews").innerHTML = `
      <div class="sec-head"><h2 id="rev-h">Reviews</h2><p>${stars(p.rating)} ${p.rating} average from ${p.reviewsCount} reviews</p></div>
      <div class="rev-list">${p.reviews.map((r) => `<blockquote><p>${esc(r.text)}</p><footer>${stars(r.rating)} <cite>${esc(r.name)}</cite></footer></blockquote>`).join("")}</div>`;
    $("[data-related]").innerHTML = related(p).map(card).join("");
  }

  /* ---------- checkout ---------- */
  function checkout() {
    const box = $("[data-summary]");
    const draw = () => {
      const s = summaryHTML();
      box.innerHTML = s.empty ? `<p class="empty">Your bag is empty. <a class="link" href="shop.html">Shop the collection</a></p>` : s.html;
    };
    draw(); document.addEventListener("cart:change", draw);
    $("#co-form").addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = !!cart.count();
      $$("[required]", e.target).forEach((el) => { const bad = !el.value.trim(); el.setAttribute("aria-invalid", String(bad)); if (bad) ok = false; });
      const msg = $(".form-msg", e.target);
      if (!cart.count()) { msg.textContent = "Add something to your bag first."; return; }
      if (!ok) { msg.textContent = "Fill in the highlighted fields."; return; }
      cart.clear();
      $("[data-checkout]").innerHTML = `<div class="done"><h2>Thank you, your order is placed</h2><p>This is a demo checkout. Connect your payment provider to take real orders.</p><a class="btn btn-solid" href="index.html">Back to Alba</a></div>`;
    });
  }

  ({ index: home, shop, product, checkout }[page] || (() => {}))();
})();
