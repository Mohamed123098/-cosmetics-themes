# Moss & Mineral — cosmetics store theme

Botanical apothecary. Plain HTML, CSS and JavaScript: no framework, no build step, no dependencies.

## Pages
| File | What it is |
|---|---|
| `index.html` | Home page |
| `shop.html` | All products with step / concern filters and sorting (`shop.html?category=treat`, `shop.html?concern=dryness`) |
| `product.html` | Product page, filled from the data file (`product.html?id=<product-id>`) |
| `about.html` | Brand story |
| `contact.html` | Contact form and FAQ |
| `checkout.html` | Checkout form and order summary (demo, see below) |

A slide-in cart works on every page and is saved in the browser (localStorage).

## Edit your products
Everything about the catalogue lives in **`data/products.js`**: brand name, currency, free-shipping threshold,
categories, concerns and every product (name, sizes and prices, description, benefits, how to use,
key ingredients with percentages, full INCI list, reviews). Every page reads from this file, so you never
edit product text inside the HTML.

Images for each product: `assets/products/<id>-1.webp` (card and first photo), `-2.webp` (texture),
`-3.webp` (detail). Square, 1200×1200 recommended. `assets/cutouts/<id>.webp` are transparent packshots
used in small places. Replace them with your own photos using the same file names.

## Change the look
Colours and fonts are tokens at the top of `css/style.css` (--moss, --limestone, --paper, --lichen).
Fonts (Fraunces + Instrument Sans) are self-hosted in `assets/fonts` and declared in `css/fonts.css`.

## Before going live
- **Payments:** the checkout is a front-end demo. Connect Stripe, PayPal, Paymob or your provider's hosted
  checkout where the "Payment form goes here" box is. The template never collects card details.
- **Forms:** newsletter and contact forms validate in the browser only. Connect them to your email service
  (Mailchimp, Formspree, Netlify Forms, etc.).
- **Content:** the brand, products, reviews and addresses are sample content. Replace them with your own.

## Publish
Upload the whole folder to any static host (Netlify drag-and-drop, Cloudflare Pages, GitHub Pages, Vercel).
Open `index.html` through a web server, not by double-clicking, so fonts load correctly.

---

## بالعربي باختصار
- **المنتجات:** كلها في ملف `data/products.js` (الأسماء والأسعار والأحجام والمكونات والتقييمات). عدّل الملف ده بس، وكل الصفحات هتتحدث لوحدها.
- **الصور:** في `assets/products` بنفس أسماء الملفات (مقاس مربع 1200×1200).
- **الألوان والخطوط:** في أول ملف `css/style.css`.
- **الدفع:** صفحة الدفع تجريبية. اربطها ببوابة دفع (Stripe أو Paymob أو PayPal) قبل ما تبيع فعليًا.
- **الرفع:** ارفع الفولدر كله على Netlify أو Cloudflare Pages أو أي استضافة ثابتة.
