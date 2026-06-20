export interface Product {
  id: string;
  name: string;
  tagline: string;
  highlight: string;
  price: number;
  bottleImage: string;
  fruitImage: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  nutrition: {
    calories: number;
    vitaminC: string;
    antioxidants: string;
    energy: string;
  };
  ingredients: string[];
  volume?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  delivery: string;
  features: string[];
  bottlesCount: number;
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
