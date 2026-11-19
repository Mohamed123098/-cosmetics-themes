(function () {
  const CONTACT_EMAIL = ""; /* TODO: put the brand email here (the content document still says "[brand email address]") */
  const P = window.NORINA_PRODUCTS, C = window.NORINA_COPY;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  let lang = localStorage.getItem("norina-lang") || "en";
  const t = () => C.ui[lang];
  const L = (o) => (o && (o[lang] || o.en)) || "";
  const page = document.body.dataset.page;
  const byId = (id) => P.find(p => p.id === id);
  const img = (p, i) => `assets/img/products/${p.dir}/${Math.min(i, p.images - 1)}.webp`;
  const li = (a) => a.map(x => `<li>${x}</li>`).join("");
  const KO = () => lang === "ko";
  const BRAND = () => (KO() ? "노리나" : "Norina");
  const altOf = (p) => (KO() ? `${L(p.name)} ${p.size}` : p.alt);
  const boldTitle = (x) => { const m = x.match(/^([^:：]{2,48})[:：]\s*(.+)$/); return m ? `<b>${m[1]}:</b> ${m[2]}` : x; };

  /* ---------- header / footer ---------- */
  function chrome() {
    const nav = [["shop.html", "shop", "shop"], ["brand.html", "brand", "brand"], ["ingredients.html", "ingredients", "ingredients"], ["contact.html", "contact", "contact"]];
    const links = nav.map(([h, k, p]) => `<a href="${h}" class="${page === p ? "on" : ""}">${t()[k]}</a>`).join("");
    $("#site-header").innerHTML = `
      <div class="notice">${t().notice}</div>
      <header class="header"><div class="wrap">
        <nav class="nav">${links}</nav>
        <button class="burger" aria-label="${KO() ? "메뉴" : "Menu"}"><i></i></button>
        <a href="index.html" class="logo" aria-label="${BRAND()}"><img class="m" src="assets/logo/norina-mark.png" alt=""><img class="w" src="assets/logo/norina-word.png" alt="${KO() ? "노리나" : "norina"}"></a>
        <div class="tools"><div class="lang"><button data-l="en" class="${lang === "en" ? "on" : ""}">EN</button><button data-l="ko" class="${lang === "ko" ? "on" : ""}">한국어</button></div></div>
      </div><div class="drawer">${links}</div></header>`;
    $("#site-footer").innerHTML = `
      <footer class="footer"><div class="wrap">
        <div class="cols">
          <div><a href="index.html" class="logo"><img class="fl" src="assets/logo/norina-logo-white.png" alt="${KO() ? "노리나" : "norina"}"></a><p class="about">${t().footAbout}</p></div>
          <div><h5>${t().shopCol}</h5><ul>${P.map(p => `<li><a href="product.html?id=${p.id}">${L(p.name).replace(/^Norina |^노리나 /, "")}</a></li>`).join("")}</ul></div>
          <div><h5>${t().company}</h5><ul><li><a href="brand.html">${t().brand}</a></li><li><a href="ingredients.html">${t().ingredients}</a></li><li><a href="contact.html">${t().contact}</a></li></ul></div>
          <div><h5>${t().follow}</h5><ul>${(KO() ? ["인스타그램", "틱톡", "유튜브"] : ["Instagram", "TikTok", "YouTube"]).map(x => `<li><a href="#">${x}</a></li>`).join("")}</ul></div>
        </div>
        <div class="copy"><span>© ${new Date().getFullYear()} ${BRAND()}. ${t().rights}</span><span>${t().notice}</span></div>
      </div></footer>`;
    $$(".lang button").forEach(b => b.onclick = () => { lang = b.dataset.l; localStorage.setItem("norina-lang", lang); render(); });
    $(".burger").onclick = () => $(".drawer").classList.toggle("open");
    $$(".drawer a").forEach(a => a.addEventListener("click", () => $(".drawer").classList.remove("open")));
    window.addEventListener("resize", () => { if (innerWidth > 860) $(".drawer").classList.remove("open"); });
  }

  /* ---------- helpers ---------- */
  const card = (p) => `
    <a class="card rv" href="product.html?id=${p.id}" style="--tint:${p.tint}">
      <div class="ph">${L(p.tag) ? `<span class="tag">${L(p.tag)}</span>` : ""}
        <img class="a" src="${img(p, 1)}" alt="${L(p.name)}" loading="lazy"><img class="b" src="${img(p, 0)}" alt="" loading="lazy"></div>
      <div class="meta"><h3>${L(p.name).replace(/^Norina |^노리나 /, "")}</h3><p>${L(p.short)}</p><div class="size">${p.size}</div></div>
    </a>`;
  const reveal = () => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 });
    $$(".rv").forEach(el => io.observe(el));
  };
  const ingGrid = () => t().heroIngs.map(([h, s, p]) => `<div class="ing rv"><div class="sm">${s}</div><h4>${h}</h4><p>${p}</p></div>`).join("");

  /* ---------- pages ---------- */
  const pages = {
    home() {
      const hp = C.ui.en.heroProducts;
      const slides = hp.map(pair => pair.map(byId));
      let i = 0;
      const wrap = $("#hero");
      const draw = () => {
        const [a, b] = slides[i];
        wrap.innerHTML = `
          <div class="copy">
            <div class="eyebrow">${t().heroEyebrow[i]}</div>
            <h1>${t().heroTitles[i]}</h1>
            <p>${t().heroTexts[i]}</p>
            <a class="btn solid" href="${t().heroLinks[i]}">${t().heroCta[i]} <span>→</span></a>
            <div class="seal">노<br>리<br>나</div>
          </div>
          <div class="art" style="background:linear-gradient(135deg,${a.tint},${b.tint})">
            <img class="a" src="${img(a, 0)}" alt="${L(a.name)}"><img class="b" src="${img(b, 1)}" alt="${L(b.name)}">
            <div class="vert">전통 × 현대 과학</div>
          </div>
          <div class="dots">${slides.map((_, k) => `<button class="${k === i ? "on" : ""}" data-i="${k}" aria-label="${KO() ? "슬라이드" : "slide"} ${k + 1}"></button>`).join("")}</div>`;
        $$(".dots button", wrap).forEach(x => x.onclick = () => { i = +x.dataset.i; draw(); restart(); });
      };
      const restart = () => { clearInterval(window.__ht); window.__ht = setInterval(() => { i = (i + 1) % slides.length; draw(); }, 7000); };
      draw(); restart();

      $("#mq").innerHTML = `<div>${[0, 1].map(() => t().marquee.map(w => `<span>${w}</span>`).join("")).join("")}</div>`;

      $("#best-h").textContent = t().heroProductsTitle; $("#best-more").textContent = t().more;
      $("#best").innerHTML = ["pdrn-serum", "peptide-7-serum", "soothing-essence", "luminous-dew-cream"].map(id => card(byId(id))).join("");

      $("#res").innerHTML = `<div class="wrap"><div class="sub">${t().resultsSub}</div><h2 class="h2">${t().resultsTitle}</h2>
        <div class="stats">${t().stats.map(([n, d, p]) => `<div class="stat rv"><b>${n}</b><span>${d}</span><small>${p}</small></div>`).join("")}</div>
        <p class="res-note">${t().resultsNote}</p></div>`;

      $("#concern-h").textContent = t().concernTitle;
      $("#concerns").innerHTML = C.concerns.map(c => `<a class="concern rv" href="shop.html?concern=${c.id}">${L(c)}<small>${c.p.length} ${lang === "ko" ? "제품" : "products"}</small></a>`).join("");

      const e = byId("soothing-essence"), s = byId("soothing-cream");
      $("#sci").innerHTML = `
        <div class="pic"><img class="p1" src="${img(e, 1)}" alt=""><img class="p2" src="${img(s, 1)}" alt=""></div>
        <div class="txt"><div class="sub">${t().sciSub}</div><h2 class="h2">${t().sciTitle}</h2><p>${t().sciText}</p><a class="btn" href="ingredients.html">${t().sciCta} →</a></div>`;

      $("#values-h").textContent = t().valuesTitle;
      $("#values").innerHTML = t().values.map(([h, p], k) => `<div class="value rv"><small>0${k + 1}</small><h4>${h}</h4><p>${p}</p></div>`).join("");

      $("#all-h").textContent = t().allProducts; $("#all-more").textContent = t().viewAll;
      $("#grid2").innerHTML = P.map(card).join("");

      $("#partner").innerHTML = `<div class="wrap"><h2 class="h2">${t().partnerTitle}</h2><p>${t().partnerText}</p><a class="btn light" href="contact.html">${t().partnerCta} →</a></div>`;
    },

    shop() {
      const q = new URLSearchParams(location.search);
      let cat = q.get("cat") || "all", concern = q.get("concern") || "";
      $("#ph-t").textContent = t().shopTitle; $("#ph-p").textContent = t().shopLead;
      const cats = ["all", "calm", "repair", "glow"];
      $("#filters").innerHTML = cats.map(c => `<button data-c="${c}">${c === "all" ? t().catAll : t().cats[c]}</button>`).join("");
      $("#cf").innerHTML = `<select aria-label="${t().concernTitle}"><option value="">${t().concernAll}</option>${C.concerns.map(c => `<option value="${c.id}" ${c.id === concern ? "selected" : ""}>${L(c)}</option>`).join("")}</select>`;
      const draw = () => {
        let list = P.filter(p => cat === "all" || p.cat === cat);
        if (concern) { const c = C.concerns.find(x => x.id === concern); list = list.filter(p => c.p.includes(p.id)); }
        $$("#filters button").forEach(b => b.classList.toggle("on", b.dataset.c === cat));
        $("#list").innerHTML = list.length ? list.map(card).join("") : `<p class="empty">—</p>`;
        reveal();
      };
      $$("#filters button").forEach(b => b.onclick = () => { cat = b.dataset.c; draw(); });
      $("#cf select").onchange = (e) => { concern = e.target.value; draw(); };
      draw();
    },

    product() {
      const id = new URLSearchParams(location.search).get("id");
      const p = byId(id) || P[0];
      document.title = L(p.name) + " | " + BRAND();
      const setMeta = (n, v) => { let e = document.querySelector(`meta[name="${n}"]`); if (!e) { e = document.createElement("meta"); e.name = n; document.head.appendChild(e); } e.content = v; };
      setMeta("keywords", p.seo.join(", ")); setMeta("description", L(p.short) + " " + L(p.main));
      let ld = document.getElementById("ld"); if (!ld) { ld = document.createElement("script"); ld.id = "ld"; ld.type = "application/ld+json"; document.head.appendChild(ld); }
      ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: p.name.en, alternateName: p.name.ko, description: p.desc.en, brand: { "@type": "Brand", name: "Norina" }, gtin13: p.gtin, image: location.origin.startsWith("http") ? new URL(img(p, 0), location.href).href : img(p, 0) });
      const other = lang === "en" ? p.name.ko : "";
      const thumbs = Array.from({ length: p.images }, (_, k) => `<button data-i="${k}" class="${k === 0 ? "on" : ""}"><img src="${img(p, k)}" alt="${altOf(p)}"></button>`).join("");
      let clin = "";
      if (p.clinical) {
        const lines = L(p.clinical); let h = "", tiles = "";
        lines.forEach(x => {
          const m = x.match(/(\d+)%/);
          if (m) tiles += `<div><b>${m[1]}%</b><span>${x}</span></div>`;
          else { if (tiles) { clin += `<div class="clin">${tiles}</div>`; tiles = ""; } clin += `<div class="clin-h">${x}</div>`; }
        });
        if (tiles) clin += `<div class="clin">${tiles}</div>`;
        clin = `<details><summary>${t().clinical}</summary>${clin}</details>`;
      }
      $("#pd").innerHTML = `
        <div class="gal" style="--tint:${p.tint}"><div class="main"><img id="gm" src="${img(p, 0)}" alt="${altOf(p)}"></div><div class="thumbs">${thumbs}</div></div>
        <div>
          <div class="crumb"><a href="index.html">${t().home}</a> / <a href="shop.html">${t().shop}</a> / ${t().cats[p.cat]}</div>
          <span class="size-pill">${p.size}</span>
          <div class="sub">${t().cats[p.cat]}</div>
          <h1>${L(p.name)}</h1>
          ${other ? `<div class="alt">${other}</div>` : ""}
          <p class="desc">${L(p.desc)}</p>
          <div class="mainbox"><b>${t().mainIng}</b>${L(p.main)}</div>
          <a class="btn solid" style="margin-top:0" href="contact.html?p=${encodeURIComponent(L(p.name))}">${t().enquire} →</a>
          <div class="acc">
            <details open><summary>${t().benefits}</summary><ul>${L(p.benefits).map(x => `<li>${boldTitle(x)}</li>`).join("")}</ul></details>
            <details><summary>${t().uses}</summary><ul>${li(L(p.uses))}</ul></details>
            <details><summary>${t().usage}</summary><ol>${li(L(p.usage))}</ol></details>
            ${clin}
            <details><summary>${t().fullIng}</summary><p class="inci">${L(p.inci)}</p></details>
            <details><summary>${t().warn}</summary><ul>${li(L(p.warn))}</ul></details>
          </div>
        </div>`;
      $$(".thumbs button").forEach(b => b.onclick = () => { $("#gm").src = img(p, +b.dataset.i); $$(".thumbs button").forEach(x => x.classList.toggle("on", x === b)); });
      const rel = new Set(); C.concerns.forEach(c => { if (c.p.includes(p.id)) c.p.forEach(x => x !== p.id && rel.add(x)); });
      P.forEach(x => x.id !== p.id && rel.add(x.id));
      $("#rel-h").textContent = t().related;
      $("#rel").innerHTML = [...rel].slice(0, 4).map(x => card(byId(x))).join("");
    },

    brand() {
      $("#story-h").innerHTML = t().brandHero;
      $("#story").innerHTML = `<div class="sub">${t().brandSub}</div><div class="prose">${t().story.map(x => `<p>${x}</p>`).join("")}</div>`;
      $("#who").innerHTML = `<div><div class="sub">${t().whoTitle}</div><h2 class="h2">${lang === "ko" ? "발견하는 것이 아니라, <em>개발합니다.</em>" : "We don't gather. <em>We develop.</em>"}</h2></div><div class="prose">${t().who.map(x => `<p style="font-family:inherit;font-size:17px">${x}</p>`).join("")}</div>`;
      $("#vm").innerHTML = `<div class="card-box rv"><h3>${t().visionT}</h3><p>${t().vision}</p></div><div class="card-box rv"><h3>${t().missionT}</h3><p>${t().mission}</p></div>`;
      $("#quote").innerHTML = `<div class="wrap"><p>${t().emoT}</p></div>`;
      $("#heritage").innerHTML = `<div><div class="sub">${t().heritageT}</div><h2 class="h2">${lang === "ko" ? "한 겹 한 겹, <em>자연을 발전시키다.</em>" : "Layer by layer, <em>nature refined.</em>"}</h2></div><div class="prose"><p style="font-family:inherit;font-size:17px">${t().heritage}</p><p style="font-family:inherit;font-size:17px">${t().korProp}</p></div>`;
      $("#values-h").textContent = t().valuesTitle;
      $("#values").innerHTML = t().values.map(([h, p], k) => `<div class="value rv"><small>0${k + 1}</small><h4>${h}</h4><p>${p}</p></div>`).join("");
      $("#pers").innerHTML = `<div class="wrap"><div class="sec-head"><h2>${t().pillT}</h2></div><div class="values four" style="margin-bottom:70px">${t().pill.map(([h, x], k) => `<div class="value rv"><small>0${k + 1}</small><h4>${h}</h4><p>${x}</p></div>`).join("")}</div><div class="sec-head"><h2>${t().persT}</h2></div><div class="values">${t().pers.map((x, k) => `<div class="value rv"><small>0${k + 1}</small><h4 style="font-size:22px">${x}</h4></div>`).join("")}</div>
        <div class="sec-head" style="margin-top:70px"><h2>${t().tagsT}</h2></div><div class="concerns">${t().tags.map(([a, b]) => `<div class="concern rv" style="cursor:default">${b}<small>${a}</small></div>`).join("")}</div></div>`;
      $("#promise").innerHTML = `<div class="wrap" style="max-width:860px;text-align:center"><div class="sub">${t().promiseT}</div><h2 class="h2" style="font-size:clamp(26px,3vw,42px)">${t().promise}</h2></div>`;
    },

    ingredients() {
      $("#ph-t").innerHTML = t().ingPageTitle; $("#ph-p").textContent = "";
      $("#phil").innerHTML = `<div class="sub">${t().ingPhilT}</div><p class="lead" style="margin:0 auto;text-align:center">${t().ingPhil}</p>`;
      $("#ing-h").textContent = t().ingTitle;
      $("#ings").innerHTML = ingGrid();
      $("#patent").innerHTML = `<div><div class="sub">CeBiNES™</div><h2 class="h2">${t().patentT}</h2></div><div class="prose">${t().patent.map(x => `<p style="font-family:inherit;font-size:17px">${x}</p>`).join("")}</div>`;
      $("#fer").innerHTML = `<div class="card-box rv"><h3>${t().whyFermT}</h3>${t().whyFerm.map(x => `<p style="margin-bottom:10px">${x}</p>`).join("")}</div>
        <div class="card-box rv"><h3>${t().resultT}</h3><p style="margin-bottom:14px">${t().resultLead}</p>${t().stats.map(([n, d, p]) => `<p style="margin-bottom:6px"><b style="font-family:var(--serif);font-size:26px;color:var(--burg);font-weight:500">${n}</b> ${d} <small style="color:var(--soft)">(${p})</small></p>`).join("")}</div>`;
      $("#how-h").textContent = t().howT;
      $("#how").innerHTML = t().how.map(([h, p]) => `<li class="rv"><b>${h}</b><span>${p}</span></li>`).join("");
    },

    contact() {
      $("#ph-t").textContent = t().contactTitle; $("#ph-p").textContent = t().contactLead;
      const pre = new URLSearchParams(location.search).get("p") || "";
      $("#form").innerHTML = `
        <div><label>${t().fName}</label><input name="n" required></div>
        <div><label>${t().fEmail}</label><input name="e" type="email" required></div>
        <div><label>${t().fTopic}</label><select name="t">${t().topics.map(x => `<option>${x}</option>`).join("")}</select></div>
        <div><label>${t().fMsg}</label><textarea name="m" required>${pre ? (lang === "ko" ? "문의 제품: " : "Product: ") + pre + "\n" : ""}</textarea></div>
        <button class="btn solid" type="submit" style="margin-top:6px">${t().send} →</button>`;
      $("#cinfo").innerHTML = `<div class="sub">${BRAND()}</div><h2 class="h2">${t().notice}</h2><p class="lead" style="margin-top:16px">${t().contactSub}</p>
        <dl><dt>${t().fEmail}</dt><dd>${CONTACT_EMAIL || (KO() ? "[브랜드 이메일 주소]" : "[brand email address]")}</dd></dl>`;
      $("#form").onsubmit = (e) => {
        e.preventDefault();
        const f = new FormData(e.target);
        const body = encodeURIComponent(`${f.get("m")}\n\n${f.get("n")} <${f.get("e")}>`);
        const tt = $(".toast"); tt.textContent = t().sent; tt.classList.add("show"); setTimeout(() => tt.classList.remove("show"), 3200);
        location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(f.get("t"))}&body=${body}`;
      };
    }
  };

  const TITLES = {
    home: ["Norina | Proven By Results, Chosen By Experts", "노리나 | 결과로 입증되고, 전문가들이 선택합니다"],
    shop: ["Shop | Norina", "제품 | 노리나"], brand: ["Brand | Norina", "브랜드 | 노리나"],
    ingredients: ["Ingredients | Norina", "성분 | 노리나"], contact: ["Contact | Norina", "문의 | 노리나"]
  };
  function render() {
    document.documentElement.lang = lang;
    if (TITLES[page]) document.title = TITLES[page][KO() ? 1 : 0];
    chrome();
    (pages[page] || (() => {}))();
    reveal();
  }
  render();
})();
