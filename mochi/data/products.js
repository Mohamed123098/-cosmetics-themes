/* Your catalogue. Edit products, prices and copy here — every page reads from this file.
   Images: assets/products/<id>-1.webp (card + first photo), -2 (texture), -3 (detail). */
window.STORE = {
  "brand": "Mochi",
  "brandId": "mochi",
  "currency": "USD",
  "locale": "en-US",
  "freeShippingOver": 40,
  "shippingFlat": 5,
  "categories": [
    {
      "id": "cleanse",
      "name": "Cleanse"
    },
    {
      "id": "tone",
      "name": "Tone"
    },
    {
      "id": "treat",
      "name": "Treat"
    },
    {
      "id": "moisturize",
      "name": "Moisturize"
    },
    {
      "id": "eyes",
      "name": "Eyes"
    },
    {
      "id": "protect",
      "name": "Protect"
    },
    {
      "id": "lips",
      "name": "Lips"
    }
  ],
  "concerns": [
    {
      "id": "dryness",
      "name": "Dryness"
    },
    {
      "id": "dullness",
      "name": "Dullness"
    },
    {
      "id": "fine-lines",
      "name": "Fine lines"
    },
    {
      "id": "sensitivity",
      "name": "Sensitivity"
    },
    {
      "id": "breakouts",
      "name": "Breakouts"
    },
    {
      "id": "dark-spots",
      "name": "Dark spots"
    }
  ],
  "products": [
    {
      "id": "bubble-jelly-cleanser",
      "no": 1,
      "name": "Bubble Jelly Cleanser",
      "type": "Gel cleanser",
      "category": "cleanse",
      "concerns": [
        "sensitivity",
        "breakouts"
      ],
      "texture": "gel",
      "price": 18,
      "sizes": [
        {
          "label": "150 ml",
          "price": 18
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Wobbly jelly, squeaky-clean skin minus the squeak.",
      "description": "A bouncy jelly cleanser that melts into a soft lather. Clears sunscreen and gunk while keeping skin comfy.",
      "benefits": [
        "Removes sunscreen and daily grime without a tight feeling",
        "Low-foam gel that keeps the skin barrier comfortable",
        "Fragrance-free and suitable for sensitive skin"
      ],
      "how": [
        "Massage a pea-sized amount onto damp skin for 30 seconds.",
        "Rinse with lukewarm water.",
        "Use morning and evening."
      ],
      "key": [
        {
          "name": "Glycerin",
          "amount": "",
          "note": "draws water into the skin"
        },
        {
          "name": "Panthenol",
          "amount": "2%",
          "note": "calms and softens"
        },
        {
          "name": "Green tea extract",
          "amount": "",
          "note": "antioxidant support"
        }
      ],
      "inci": "Aqua, Glycerin, Sodium Cocoyl Glycinate, Coco-Betaine, Panthenol, Camellia Sinensis Leaf Extract, Allantoin, Sodium Chloride, Citric Acid, Sodium Benzoate, Potassium Sorbate.",
      "reviews": [
        {
          "name": "Laila M.",
          "rating": 5,
          "text": "Gentle enough for my reactive skin and still takes off sunscreen."
        },
        {
          "name": "Mariam A.",
          "rating": 5,
          "text": "No tight feeling after rinsing. I'm on my second tube."
        },
        {
          "name": "Yuna P.",
          "rating": 4,
          "text": "Nice gel, lasts ages."
        }
      ],
      "images": [
        "assets/products/bubble-jelly-cleanser-1.webp",
        "assets/products/bubble-jelly-cleanser-2.webp",
        "assets/products/bubble-jelly-cleanser-3.webp"
      ]
    },
    {
      "id": "dewy-drop-toner",
      "no": 2,
      "name": "Dewy Drop Toner",
      "type": "Hydrating toner",
      "category": "tone",
      "concerns": [
        "dryness",
        "dullness"
      ],
      "texture": "water",
      "price": 22,
      "sizes": [
        {
          "label": "200 ml",
          "price": 22
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "A big drink of water for thirsty skin.",
      "description": "Five kinds of hyaluronic acid plus rice ferment for skin that looks bouncy and dewy all day.",
      "benefits": [
        "Floods skin with water-binding hyaluronic acid in five weights",
        "Preps skin so serums spread further",
        "Leaves a fresh, non-sticky finish"
      ],
      "how": [
        "Pour a few drops into your palms after cleansing.",
        "Press into face and neck.",
        "Layer twice on dry days."
      ],
      "key": [
        {
          "name": "Hyaluronic acid",
          "amount": "5 weights",
          "note": "deep and surface hydration"
        },
        {
          "name": "Betaine",
          "amount": "",
          "note": "keeps water in"
        },
        {
          "name": "Rice ferment",
          "amount": "",
          "note": "smooths and brightens"
        }
      ],
      "inci": "Aqua, Butylene Glycol, Glycerin, Betaine, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Acetylated Hyaluronate, Saccharomyces/Rice Ferment Filtrate, Panthenol, 1,2-Hexanediol, Ethylhexylglycerin.",
      "reviews": [
        {
          "name": "Sofia R.",
          "rating": 5,
          "text": "My serums sink in so much better now."
        },
        {
          "name": "Chloe T.",
          "rating": 5,
          "text": "Feels like a drink of water for my face."
        },
        {
          "name": "Amira H.",
          "rating": 4,
          "text": "Not sticky at all, layers well."
        }
      ],
      "images": [
        "assets/products/dewy-drop-toner-1.webp",
        "assets/products/dewy-drop-toner-2.webp",
        "assets/products/dewy-drop-toner-3.webp"
      ]
    },
    {
      "id": "juicy-c-serum",
      "no": 3,
      "name": "Juicy C Serum",
      "type": "Vitamin C serum",
      "category": "treat",
      "concerns": [
        "dullness",
        "dark-spots"
      ],
      "texture": "serum",
      "price": 28,
      "sizes": [
        {
          "label": "30 ml",
          "price": 28
        }
      ],
      "badge": "Bestseller",
      "rating": 4.9,
      "reviewsCount": 880,
      "short": "Glow juice with stable 10% vitamin C.",
      "description": "A juicy serum with vitamin C that stays fresh. Brightens dull days and fades leftover marks.",
      "benefits": [
        "Evens tone and fades the look of dark spots",
        "Stable vitamin C that doesn't oxidise in a week",
        "Defends against daily environmental stress"
      ],
      "how": [
        "Apply 3–4 drops each morning after toner.",
        "Follow with moisturiser and SPF.",
        "Start every other day if your skin is reactive."
      ],
      "key": [
        {
          "name": "Ethyl ascorbic acid",
          "amount": "10%",
          "note": "stable vitamin C for brightness"
        },
        {
          "name": "Ferulic acid",
          "amount": "0.5%",
          "note": "boosts antioxidant action"
        },
        {
          "name": "Vitamin E",
          "amount": "",
          "note": "protects and softens"
        }
      ],
      "inci": "Aqua, Propanediol, 3-O-Ethyl Ascorbic Acid, Glycerin, Niacinamide, Ferulic Acid, Tocopherol, Sodium Hyaluronate, Hydroxyethylcellulose, Phenoxyethanol, Ethylhexylglycerin.",
      "reviews": [
        {
          "name": "Hana K.",
          "rating": 5,
          "text": "My dark spots are visibly lighter after six weeks."
        },
        {
          "name": "Nour S.",
          "rating": 5,
          "text": "Doesn't turn orange like my old vitamin C."
        },
        {
          "name": "Emma D.",
          "rating": 4,
          "text": "Glow is real. Slight tingle the first few days."
        }
      ],
      "images": [
        "assets/products/juicy-c-serum-1.webp",
        "assets/products/juicy-c-serum-2.webp",
        "assets/products/juicy-c-serum-3.webp"
      ]
    },
    {
      "id": "sleepy-retinal-serum",
      "no": 4,
      "name": "Sleepy Retinal Serum",
      "type": "Night serum",
      "category": "treat",
      "concerns": [
        "fine-lines",
        "breakouts"
      ],
      "texture": "serum",
      "price": 32,
      "sizes": [
        {
          "label": "30 ml",
          "price": 32
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Beauty sleep in a pump.",
      "description": "Gentle 0.1% retinal with bakuchiol and squalane. Smoother skin while you snooze.",
      "benefits": [
        "Retinal works faster than retinol with less irritation",
        "Softens fine lines and refines texture over 8–12 weeks",
        "Squalane cushions the skin overnight"
      ],
      "how": [
        "Use one pump at night on dry skin, avoiding the eye area.",
        "Start twice a week and build up to nightly.",
        "Always wear SPF the next morning."
      ],
      "key": [
        {
          "name": "Retinal",
          "amount": "0.1%",
          "note": "vitamin A for renewal"
        },
        {
          "name": "Bakuchiol",
          "amount": "1%",
          "note": "plant-based support for firmness"
        },
        {
          "name": "Squalane",
          "amount": "",
          "note": "light, skin-identical oil"
        }
      ],
      "inci": "Aqua, Squalane, Caprylic/Capric Triglyceride, Glycerin, Bakuchiol, Retinal, Tocopherol, Ceramide NP, Cetearyl Alcohol, Sodium Polyacrylate, Phenoxyethanol, Ethylhexylglycerin.",
      "reviews": [
        {
          "name": "Mariam A.",
          "rating": 5,
          "text": "Smoother texture within a month and no peeling."
        },
        {
          "name": "Yuna P.",
          "rating": 5,
          "text": "Easiest retinoid I've used so far."
        },
        {
          "name": "Laila M.",
          "rating": 4,
          "text": "Started twice a week, now nightly. Love it."
        }
      ],
      "images": [
        "assets/products/sleepy-retinal-serum-1.webp",
        "assets/products/sleepy-retinal-serum-2.webp",
        "assets/products/sleepy-retinal-serum-3.webp"
      ]
    },
    {
      "id": "cloud-barrier-cream",
      "no": 5,
      "name": "Cloud Barrier Cream",
      "type": "Moisturiser",
      "category": "moisturize",
      "concerns": [
        "dryness",
        "sensitivity"
      ],
      "texture": "cream",
      "price": 26,
      "sizes": [
        {
          "label": "50 ml",
          "price": 26
        }
      ],
      "badge": "New",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Fluffy cream, happy barrier.",
      "description": "A whipped ceramide cream that feels like a cloud and keeps dry patches away.",
      "benefits": [
        "Rebuilds the skin barrier with ceramides, cholesterol and fatty acids",
        "Niacinamide helps calm redness",
        "Rich but absorbs within a minute"
      ],
      "how": [
        "Warm a small scoop between fingertips.",
        "Press over face and neck as the last step of the evening, or before SPF in the morning.",
        "Add a second layer on cheeks in cold weather."
      ],
      "key": [
        {
          "name": "Ceramide complex",
          "amount": "3%",
          "note": "repairs the barrier"
        },
        {
          "name": "Niacinamide",
          "amount": "4%",
          "note": "calms and evens tone"
        },
        {
          "name": "Shea butter",
          "amount": "",
          "note": "lasting comfort"
        }
      ],
      "inci": "Aqua, Glycerin, Caprylic/Capric Triglyceride, Butyrospermum Parkii Butter, Niacinamide, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Cholesterol, Phytosphingosine, Panthenol, Xanthan Gum, Phenoxyethanol.",
      "reviews": [
        {
          "name": "Chloe T.",
          "rating": 5,
          "text": "Fixed my winter dry patches in days."
        },
        {
          "name": "Amira H.",
          "rating": 5,
          "text": "Rich but not greasy, exactly what I wanted."
        },
        {
          "name": "Sofia R.",
          "rating": 4,
          "text": "My redness has calmed down a lot."
        }
      ],
      "images": [
        "assets/products/cloud-barrier-cream-1.webp",
        "assets/products/cloud-barrier-cream-2.webp",
        "assets/products/cloud-barrier-cream-3.webp"
      ]
    },
    {
      "id": "wide-awake-eye-gel",
      "no": 6,
      "name": "Wide Awake Eye Gel",
      "type": "Eye gel",
      "category": "eyes",
      "concerns": [
        "fine-lines",
        "dullness"
      ],
      "texture": "cream",
      "price": 22,
      "sizes": [
        {
          "label": "15 ml",
          "price": 22
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Cool tip, de-puffed eyes.",
      "description": "Caffeine and peptides in a cooling gel. One swipe and you look like you slept eight hours.",
      "benefits": [
        "Caffeine helps reduce morning puffiness",
        "Peptides smooth the look of fine lines",
        "Cooling metal tip for a quick de-puff"
      ],
      "how": [
        "Glide the tip along the orbital bone, morning and night.",
        "Pat in with your ring finger.",
        "Keep in the fridge for extra cooling."
      ],
      "key": [
        {
          "name": "Caffeine",
          "amount": "3%",
          "note": "de-puffs"
        },
        {
          "name": "Palmitoyl tripeptide-1",
          "amount": "",
          "note": "supports firmness"
        },
        {
          "name": "Cucumber water",
          "amount": "",
          "note": "soothes"
        }
      ],
      "inci": "Cucumis Sativus Fruit Water, Glycerin, Caffeine, Squalane, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Sodium Hyaluronate, Carbomer, Tromethamine, Phenoxyethanol.",
      "reviews": [
        {
          "name": "Nour S.",
          "rating": 5,
          "text": "The cold tip is so nice in the morning."
        },
        {
          "name": "Emma D.",
          "rating": 5,
          "text": "Puffiness goes down noticeably."
        },
        {
          "name": "Hana K.",
          "rating": 4,
          "text": "Light texture, no milia for me."
        }
      ],
      "images": [
        "assets/products/wide-awake-eye-gel-1.webp",
        "assets/products/wide-awake-eye-gel-2.webp",
        "assets/products/wide-awake-eye-gel-3.webp"
      ]
    },
    {
      "id": "sun-mochi-spf50",
      "no": 7,
      "name": "Sun Mochi SPF 50",
      "type": "Sunscreen",
      "category": "protect",
      "concerns": [
        "dark-spots",
        "sensitivity"
      ],
      "texture": "fluid",
      "price": 24,
      "sizes": [
        {
          "label": "50 ml",
          "price": 24
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Invisible SPF you'll actually reapply.",
      "description": "A lightweight mineral fluid with no white cast and no eye sting. Daily SPF 50 that plays nice with makeup.",
      "benefits": [
        "Broad-spectrum SPF 50 with no white cast",
        "Weightless fluid that sits well under makeup",
        "Fragrance-free and eye-friendly"
      ],
      "how": [
        "Apply two finger-lengths as the last step of your morning routine.",
        "Reapply every two hours outdoors.",
        "Shake well before use."
      ],
      "key": [
        {
          "name": "Zinc oxide",
          "amount": "15%",
          "note": "broad-spectrum mineral filter"
        },
        {
          "name": "Niacinamide",
          "amount": "2%",
          "note": "evens tone"
        },
        {
          "name": "Vitamin E",
          "amount": "",
          "note": "antioxidant"
        }
      ],
      "inci": "Zinc Oxide, Aqua, Caprylic/Capric Triglyceride, Propanediol, Niacinamide, Polyglyceryl-3 Polyricinoleate, Tocopherol, Silica, Magnesium Sulfate, Ethylhexylglycerin.",
      "reviews": [
        {
          "name": "Yuna P.",
          "rating": 5,
          "text": "Finally an SPF that doesn't leave me grey."
        },
        {
          "name": "Laila M.",
          "rating": 5,
          "text": "Works under foundation without pilling."
        },
        {
          "name": "Mariam A.",
          "rating": 4,
          "text": "Doesn't sting my eyes."
        }
      ],
      "images": [
        "assets/products/sun-mochi-spf50-1.webp",
        "assets/products/sun-mochi-spf50-2.webp",
        "assets/products/sun-mochi-spf50-3.webp"
      ]
    },
    {
      "id": "gummy-lip-balm",
      "no": 8,
      "name": "Gummy Lip Balm",
      "type": "Lip balm",
      "category": "lips",
      "concerns": [
        "dryness"
      ],
      "texture": "balm",
      "price": 12,
      "sizes": [
        {
          "label": "4 g",
          "price": 12
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Squishy lips on demand.",
      "description": "A soft balm that makes dry lips smooth and glossy. Smells faintly of vanilla.",
      "benefits": [
        "Softens dry, flaky lips overnight",
        "Sheer tint-free finish",
        "Light vanilla scent from natural extract"
      ],
      "how": [
        "Swipe on as often as needed.",
        "Apply a thick layer before bed.",
        "Use over lipstick for a soft sheen."
      ],
      "key": [
        {
          "name": "Shea butter",
          "amount": "",
          "note": "deep nourishment"
        },
        {
          "name": "Squalane",
          "amount": "",
          "note": "lightweight comfort"
        },
        {
          "name": "Vitamin E",
          "amount": "",
          "note": "protects"
        }
      ],
      "inci": "Butyrospermum Parkii Butter, Ricinus Communis Seed Oil, Squalane, Cera Alba, Tocopherol, Vanilla Planifolia Fruit Extract.",
      "reviews": [
        {
          "name": "Amira H.",
          "rating": 5,
          "text": "Lives in my bag now."
        },
        {
          "name": "Sofia R.",
          "rating": 5,
          "text": "Overnight it fixes my flaky lips."
        },
        {
          "name": "Chloe T.",
          "rating": 4,
          "text": "Smells lovely, very subtle."
        }
      ],
      "images": [
        "assets/products/gummy-lip-balm-1.webp",
        "assets/products/gummy-lip-balm-2.webp",
        "assets/products/gummy-lip-balm-3.webp"
      ]
    }
  ],
  "text": {
    "cart": "Your bag",
    "checkout": "Check out",
    "added": "In the bag!",
    "empty": "Your bag is empty. Let's fix that.",
    "emptyCta": "Shop bestsellers",
    "freeLeft": "Add {x} more for free shipping.",
    "freeOk": "Free shipping is yours."
  }
};
