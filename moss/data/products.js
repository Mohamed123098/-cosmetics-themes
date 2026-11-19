/* Your catalogue. Edit products, prices and copy here — every page reads from this file.
   Images: assets/products/<id>-1.webp (card + first photo), -2 (texture), -3 (detail). */
window.STORE = {
  "brand": "Moss & Mineral",
  "brandId": "moss",
  "currency": "USD",
  "locale": "en-US",
  "freeShippingOver": 60,
  "shippingFlat": 6,
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
      "id": "fennel-gel-cleanser",
      "no": 1,
      "name": "Fennel Gel Cleanser",
      "type": "Gel cleanser",
      "category": "cleanse",
      "concerns": [
        "sensitivity",
        "breakouts"
      ],
      "texture": "gel",
      "price": 26,
      "sizes": [
        {
          "label": "120 ml",
          "price": 26
        },
        {
          "label": "250 ml",
          "price": 44
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Green tea and fennel, rinsed clean.",
      "description": "A clear gel cleanser with fennel seed and green tea. Removes the day while respecting a delicate barrier.",
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
        "assets/products/fennel-gel-cleanser-1.webp",
        "assets/products/fennel-gel-cleanser-2.webp",
        "assets/products/fennel-gel-cleanser-3.webp"
      ]
    },
    {
      "id": "birch-sap-essence",
      "no": 2,
      "name": "Birch Sap Essence",
      "type": "Hydrating essence",
      "category": "tone",
      "concerns": [
        "dryness",
        "dullness"
      ],
      "texture": "water",
      "price": 34,
      "sizes": [
        {
          "label": "150 ml",
          "price": 34
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Spring birch sap with five hyaluronic acids.",
      "description": "Tapped birch sap meets hyaluronic acid in five weights. Skin drinks it in and stays supple.",
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
        "assets/products/birch-sap-essence-1.webp",
        "assets/products/birch-sap-essence-2.webp",
        "assets/products/birch-sap-essence-3.webp"
      ]
    },
    {
      "id": "sea-buckthorn-c-serum",
      "no": 3,
      "name": "Sea Buckthorn C Serum",
      "type": "Vitamin C serum",
      "category": "treat",
      "concerns": [
        "dullness",
        "dark-spots"
      ],
      "texture": "serum",
      "price": 48,
      "sizes": [
        {
          "label": "30 ml",
          "price": 48
        }
      ],
      "badge": "Bestseller",
      "rating": 4.9,
      "reviewsCount": 516,
      "short": "Vitamin C and buckthorn for a brighter, even tone.",
      "description": "10% stable vitamin C balanced with sea buckthorn and ferulic acid. Fades marks and restores warmth to tired skin.",
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
        "assets/products/sea-buckthorn-c-serum-1.webp",
        "assets/products/sea-buckthorn-c-serum-2.webp",
        "assets/products/sea-buckthorn-c-serum-3.webp"
      ]
    },
    {
      "id": "rosehip-retinal-serum",
      "no": 4,
      "name": "Rosehip Retinal Serum",
      "type": "Night serum",
      "category": "treat",
      "concerns": [
        "fine-lines",
        "breakouts"
      ],
      "texture": "serum",
      "price": 58,
      "sizes": [
        {
          "label": "30 ml",
          "price": 58
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Retinal in a rosehip and squalane base.",
      "description": "A gentle 0.1% retinal serum cushioned with cold-pressed rosehip and squalane. Smoother texture, softer lines.",
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
        "assets/products/rosehip-retinal-serum-1.webp",
        "assets/products/rosehip-retinal-serum-2.webp",
        "assets/products/rosehip-retinal-serum-3.webp"
      ]
    },
    {
      "id": "oat-ceramide-cream",
      "no": 5,
      "name": "Oat & Ceramide Cream",
      "type": "Barrier cream",
      "category": "moisturize",
      "concerns": [
        "dryness",
        "sensitivity"
      ],
      "texture": "cream",
      "price": 42,
      "sizes": [
        {
          "label": "60 ml",
          "price": 42
        }
      ],
      "badge": "New",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Colloidal oat and ceramides for stressed skin.",
      "description": "A rich, calming cream with colloidal oat, ceramides and niacinamide. Comforts dry, reactive skin.",
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
        "assets/products/oat-ceramide-cream-1.webp",
        "assets/products/oat-ceramide-cream-2.webp",
        "assets/products/oat-ceramide-cream-3.webp"
      ]
    },
    {
      "id": "cucumber-eye-balm",
      "no": 6,
      "name": "Cucumber Eye Balm",
      "type": "Eye balm",
      "category": "eyes",
      "concerns": [
        "fine-lines",
        "dullness"
      ],
      "texture": "cream",
      "price": 32,
      "sizes": [
        {
          "label": "15 ml",
          "price": 32
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Cooling cucumber, caffeine and peptides.",
      "description": "A soft eye balm with cucumber water and caffeine. Applied with a chilled steel tip to calm morning puffiness.",
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
        "assets/products/cucumber-eye-balm-1.webp",
        "assets/products/cucumber-eye-balm-2.webp",
        "assets/products/cucumber-eye-balm-3.webp"
      ]
    },
    {
      "id": "mineral-shield-spf50",
      "no": 7,
      "name": "Mineral Shield SPF 50",
      "type": "Mineral sunscreen",
      "category": "protect",
      "concerns": [
        "dark-spots",
        "sensitivity"
      ],
      "texture": "fluid",
      "price": 30,
      "sizes": [
        {
          "label": "50 ml",
          "price": 30
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Zinc protection with a sheer finish.",
      "description": "A zinc-oxide sunscreen with a sheer, natural finish. Broad-spectrum SPF 50 for every day.",
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
        "assets/products/mineral-shield-spf50-1.webp",
        "assets/products/mineral-shield-spf50-2.webp",
        "assets/products/mineral-shield-spf50-3.webp"
      ]
    },
    {
      "id": "beeswax-lip-salve",
      "no": 8,
      "name": "Beeswax Lip Salve",
      "type": "Lip salve",
      "category": "lips",
      "concerns": [
        "dryness"
      ],
      "texture": "balm",
      "price": 14,
      "sizes": [
        {
          "label": "4 g",
          "price": 14
        }
      ],
      "badge": "",
      "rating": 4.8,
      "reviewsCount": 120,
      "short": "Beeswax, shea and vanilla.",
      "description": "An old-fashioned salve with beeswax, shea and a hint of vanilla. Heals chapped lips overnight.",
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
        "assets/products/beeswax-lip-salve-1.webp",
        "assets/products/beeswax-lip-salve-2.webp",
        "assets/products/beeswax-lip-salve-3.webp"
      ]
    }
  ],
  "text": {
    "cart": "Your basket",
    "checkout": "Go to checkout",
    "added": "Added to your basket",
    "empty": "Your basket is empty.",
    "emptyCta": "Browse the register",
    "freeLeft": "{x} more for free delivery.",
    "freeOk": "Free delivery on this order."
  }
};
