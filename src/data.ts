import { Product, Benefit, Service, PricingPlan, FAQItem } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "green-vitality",
    name: "Green Vitality",
    tagline: "Elixir of Celery, Kiwi, Green Apple & Mint",
    highlight: "Deep Alkalinity & Cellular Hydration",
    price: 2500,
    volume: "50cl Bottle",
    bottleImage: "/src/assets/images/kiwi_green_juice_1781528009331.jpg",
    fruitImage: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&q=80&w=400", // kiwi slice
    bgColor: "#F0F7E6",
    textColor: "#2E4A15",
    accentColor: "#A4D233",
    nutrition: {
      calories: 95,
      vitaminC: "140%",
      antioxidants: "High",
      energy: "Sustained"
    },
    ingredients: ["Organic Celery", "Organic Kiwi", "Crisp Green Apple", "Fresh Garden Mint", "Cold-Pressed Lime"]
  },
  {
    id: "citrus-sunrise",
    name: "Citrus Sunrise",
    tagline: "Orange, Lemon & Ginger",
    highlight: "Vitamin C Defense & Immunity Boost",
    price: 3000,
    volume: "50cl",
    bottleImage: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=800",
    fruitImage: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=400", // orange slice
    bgColor: "#FFF4E6",
    textColor: "#5C3E15",
    accentColor: "#F7D548",
    nutrition: {
      calories: 110,
      vitaminC: "230%",
      antioxidants: "Very High",
      energy: "Instant Vitality"
    },
    ingredients: ["Organic Valencia Orange", "Fresh Ginger Root", "Squeezed Lemon", "Wildflower Honey", "Turmeric Extract"]
  },
  {
    id: "ruby-glow",
    name: "Ruby Glow",
    tagline: "Pure Red Beetroot, Lemon & Ginger Juice",
    highlight: "Blood Oxygenation & Skin Radiance",
    price: 18000,
    volume: "Pack of 6 (60ml)",
    bottleImage: "/src/assets/images/ruby_glow_beetroot_lemon_ginger_1781634974099.jpg",
    fruitImage: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=400", // lemon slice
    bgColor: "#FBECEE",
    textColor: "#5E1724",
    accentColor: "#E04868",
    nutrition: {
      calories: 120,
      vitaminC: "95%",
      antioxidants: "Exceptional",
      energy: "Endurance Focus"
    },
    ingredients: ["Organic Red Beetroot", "Fresh Squeezed Lemon", "Fresh Pomegranate Juice", "Ginger Rhizome", "Fuji Apple"]
  },
  {
    id: "mango-breeze",
    name: "Kem's Special Ginger Drink",
    tagline: "Blend of Ginger, Turmeric, Lemon, Orange and Black Pepper",
    highlight: "Anti-Inflammatory Power & Daily Vitality",
    price: 18000,
    volume: "Pack of 12 (30ml)",
    bottleImage: "/src/assets/images/mango_breeze_bottles_1781636802789.jpg",
    fruitImage: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400", // ginger & turmeric roots close-up
    bgColor: "#FFFCE6",
    textColor: "#4B420C",
    accentColor: "#F7D548",
    nutrition: {
      calories: 85,
      vitaminC: "150%",
      antioxidants: "Robust Activity",
      energy: "Warm Fiery Vitality"
    },
    ingredients: ["Fresh Organic Ginger", "Cold-Pressed Turmeric Root", "Squeezed Lemon Juice", "Valencia Orange Juice", "Pinch of Cracked Black Pepper"]
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "organic-sourcing",
    title: "100% Organic Sourcing",
    description: "Every ingredient is handpicked from certified organic boutique farms, guaranteeing pure, pesticide-free nourishment from soil to glass.",
    image: "/src/assets/images/organic_sourcing_bottles_1781605756345.jpg"
  },
  {
    id: "cold-press-tech",
    title: "Hydraulic Cold Pressing",
    description: "Our state-of-the-art hydraulic cold press technology extracts juice under 8 tons of pressure, preventing oxidation and preserving raw enzymes.",
    image: "/src/assets/images/zobo.jpg"
  },
  {
    id: "unpasteurized-purity",
    title: "Zero Preservatives or Additives",
    description: "We never heat-pasteurize (HPP) or alter our juices, ensuring you drink living enzymes and vitamins just as nature intended.",
    image: "/src/assets/images/green_juice_zero_preservatives_1781614037739.jpg"
  }
];

export const SERVICES: Service[] = [
  {
    id: "daily-packs",
    title: "Daily Juice Packs",
    description: "Custom-curated wellness packages tailored specifically to your body's energy and antioxidant targets. Ready to grab and go for active schedules.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800",
    badge: "DAILY WELLNESS"
  },
  {
    id: "weekly-subscription",
    title: "Subscription Delivery",
    description: "Enjoy effortless nutrition. Experience hyper-fresh, temperature-controlled doorstep deliveries scheduled once or twice a week.",
    image: "/src/assets/images/subscription_raw_fruits_1781884139845.jpg",
    badge: "WEEKLY CONVENIENCE"
  },
  {
    id: "corporate-tier",
    title: "Corporate Wellness",
    description: "Transform your workplace culture with customizable office setups, bespoke wellness workshops, and chilled healthy coolers loaded for high performers.",
    image: "/src/assets/images/corporate_wellness_bar_1781883077831.jpg",
    badge: "ENTERPRISE ENERGY"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Ritual",
    price: 7500,
    delivery: "Delivered once weekly",
    features: [
      "3 Premium cold-pressed juices/week",
      "Eco-friendly cold insulated delivery",
      "Pause, modify or cancel anytime",
      "Access to nutrition specialists chat",
      "100% recyclable glass bottles returns"
    ],
    bottlesCount: 3
  },
  {
    id: "essential",
    name: "Essential Wellness",
    price: 15000,
    delivery: "Delivered twice weekly",
    features: [
      "7 Premium cold-pressed juices/week",
      "Free premium thermal tote bag",
      "Personalized wellness flavor selection",
      "Priority delivery times slots",
      "Eco-conscious cycle container collection",
      "10% discount on boutique custom packs"
    ],
    bottlesCount: 7,
    isPopular: true
  },
  {
    id: "premium",
    name: "Premium Longevity",
    price: 28000,
    delivery: "Delivered twice weekly",
    features: [
      "14 Premium cold-pressed juices/week",
      "Custom physical consultation with our MD",
      "Unlimited active flavor adjustments",
      "Dedicated concierge support setup",
      "Complimentary organic functional shots (Ginger/Wheatgrass)",
      "VVIP early access brand launches"
    ],
    bottlesCount: 14
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long do Kem's Drink cold-pressed juices stay fresh?",
    answer: "Our juices are raw, unpasteurized, and full of living nutrients. Kept refrigerated under 4°C, they stay fully vibrant and fresh for up to 5 days. We print a precise 'drink-by' timestamp on each bottle glass seal."
  },
  {
    question: "Do you use High Pressure Processing (HPP)?",
    answer: "No. While HPP extends shelf life up to 45 days, it also diminishes the pure organic flavor profile and reduces raw delicate enzymes. Kem's Drink believes in absolute purity, yielding 100% living juice delivered directly within 24 hours of hydraulic pressing."
  },
  {
    question: "Can I customize the juice varieties in my subscription?",
    answer: "Absolutely. Once subscribed to our Essential or Premium tier, you can log into your clean personal portal and manually swap bottle targets for the upcoming cycle with just a simple single-click select."
  },
  {
    question: "What is your glass bottle recycling circle program?",
    answer: "Sustainability is part of our design. Every delivery comes with a return slot inside our custom insulated tote bag. Simply rinse your previous week's empty glass bottles, place them in the bag, and our driver will swap them upon dropping your fresh batch."
  },
  {
    question: "Are all Kem's Drink cold-pressed juices 100% vegan and gluten-free?",
    answer: "Yes, every single drop is naturally 100% vegan, gluten-free, soy-free, and contains no dairy, artificial sugars, or synthetic colorings. They are purely the botanical essence of ultra-premium organic fruit, roots, and herbs."
  }
];
