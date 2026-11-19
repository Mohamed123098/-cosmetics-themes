/* Your catalogue. Edit products, prices and copy here — every page reads from this file.
   Images: assets/products/<id>-1.webp (card + first photo), -2 (texture), -3 (detail). */
window.STORE = {
  "brand": "Alba",
  "brandId": "alba",
  "currency": "USD",
  "locale": "en-US",
  "freeShippingOver": 100,
  "shippingFlat": 9,
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
      "id": "porcelain-gel-cleanser",
      "no": 1,
      "name": "Porcelain Gel Cleanser",
      "type": "Gel cleanser",
      "category": "cleanse",
      "concerns": [
        "sensitivity",
        "breakouts"
      ],
      "texture": "gel",
      "price": 58,
      "sizes": [
        {
          "label": "150 ml",
          "price": 58
        },
        {
          "label": "300 ml",
          "price": 92
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "A soft gel that clears the day away.",
      "description": "A low-foam gel cleanser that lifts sunscreen, makeup and city grime while leaving the skin calm and supple. The first step of every Alba ritual.",
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
        "assets/products/porcelain-gel-cleanser-1.webp",
        "assets/products/porcelain-gel-cleanser-2.webp",
        "assets/products/porcelain-gel-cleanser-3.webp"
      ]
    },
    {
      "id": "glaze-essence",
      "no": 2,
      "name": "Glaze Essence",
      "type": "Hydrating essence",
      "category": "tone",
      "concerns": [
        "dryness",
        "dullness"
      ],
      "texture": "water",
      "price": 72,
      "sizes": [
        {
          "label": "150 ml",
          "price": 72
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Five hyaluronic acids, one glassy finish.",
      "description": "A water-light essence that layers five weights of hyaluronic acid with rice ferment, leaving skin plumped and luminous like fired glaze.",
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
        "assets/products/glaze-essence-1.webp",
        "assets/products/glaze-essence-2.webp",
        "assets/products/glaze-essence-3.webp"
      ]
    },
    {
      "id": "lumiere-c-serum",
      "no": 3,
      "name": "Lumière C Serum",
      "type": "Vitamin C serum",
      "category": "treat",
      "concerns": [
        "dullness",
        "dark-spots"
      ],
      "texture": "serum",
      "price": 110,
      "sizes": [
        {
          "label": "30 ml",
          "price": 110
        },
        {
          "label": "50 ml",
          "price": 165
        }
      ],
      "badge": "Bestseller",
      "rating": 4.9,
      "reviewsCount": 342,
      "short": "Stable 10% vitamin C for an even, lit-from-within tone.",
      "description": "Our most-loved serum. Ethyl ascorbic acid stays potent from the first drop to the last, fading dark spots and restoring radiance without irritation.",
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
        "assets/products/lumiere-c-serum-1.webp",
        "assets/products/lumiere-c-serum-2.webp",
        "assets/products/lumiere-c-serum-3.webp"
      ]
    },
    {
      "id": "nuit-retinal-serum",
      "no": 4,
      "name": "Nuit Retinal Serum",
      "type": "Night serum",
      "category": "treat",
      "concerns": [
        "fine-lines",
        "breakouts"
      ],
      "texture": "serum",
      "price": 125,
      "sizes": [
        {
          "label": "30 ml",
          "price": 125
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Overnight renewal with 0.1% retinal.",
      "description": "A cushioning night serum pairing fast-acting retinal with bakuchiol and squalane. Skin looks smoother and more refined by morning, week after week.",
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
        "assets/products/nuit-retinal-serum-1.webp",
        "assets/products/nuit-retinal-serum-2.webp",
        "assets/products/nuit-retinal-serum-3.webp"
      ]
    },
    {
      "id": "barrier-creme",
      "no": 5,
      "name": "Barrière Crème",
      "type": "Barrier cream",
      "category": "moisturize",
      "concerns": [
        "dryness",
        "sensitivity"
      ],
      "texture": "cream",
      "price": 98,
      "sizes": [
        {
          "label": "50 ml",
          "price": 98
        },
        {
          "label": "100 ml",
          "price": 160
        }
      ],
      "badge": "New",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "A ceramide cream that rebuilds and comforts.",
      "description": "A velvet cream with a three-ceramide complex, cholesterol and niacinamide. Dry, tight skin feels restored for the whole day.",
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
        "assets/products/barrier-creme-1.webp",
        "assets/products/barrier-creme-2.webp",
        "assets/products/barrier-creme-3.webp"
      ]
    },
    {
      "id": "regard-eye-cream",
      "no": 6,
      "name": "Regard Eye Cream",
      "type": "Eye cream",
      "category": "eyes",
      "concerns": [
        "fine-lines",
        "dullness"
      ],
      "texture": "cream",
      "price": 85,
      "sizes": [
        {
          "label": "15 ml",
          "price": 85
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Caffeine and peptides for a rested look.",
      "description": "A light eye cream delivered through a cooling metal tip. Caffeine reduces puffiness while peptides smooth fine lines.",
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
        "assets/products/regard-eye-cream-1.webp",
        "assets/products/regard-eye-cream-2.webp",
        "assets/products/regard-eye-cream-3.webp"
      ]
    },
    {
      "id": "ecran-spf50",
      "no": 7,
      "name": "Écran SPF 50",
      "type": "Mineral sunscreen",
      "category": "protect",
      "concerns": [
        "dark-spots",
        "sensitivity"
      ],
      "texture": "fluid",
      "price": 64,
      "sizes": [
        {
          "label": "50 ml",
          "price": 64
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Invisible mineral protection, every day.",
      "description": "A sheer zinc-oxide fluid with no white cast. Broad-spectrum SPF 50 that wears beautifully under makeup.",
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
        "assets/products/ecran-spf50-1.webp",
        "assets/products/ecran-spf50-2.webp",
        "assets/products/ecran-spf50-3.webp"
      ]
    },
    {
      "id": "baume-levres",
      "no": 8,
      "name": "Baume Lèvres",
      "type": "Lip balm",
      "category": "lips",
      "concerns": [
        "dryness"
      ],
      "texture": "balm",
      "price": 38,
      "sizes": [
        {
          "label": "4 g",
          "price": 38
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "A rich balm for soft lips.",
      "description": "A shea and squalane balm in a weighted case. Dry lips are soft by morning.",
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
        "assets/products/baume-levres-1.webp",
        "assets/products/baume-levres-2.webp",
        "assets/products/baume-levres-3.webp"
      ]
    }
  ],
  "text": {
    "cart": "Your bag",
    "checkout": "Continue to checkout",
    "added": "Added to your bag"
  }
};
