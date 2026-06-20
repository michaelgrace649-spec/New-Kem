import { useState, useEffect } from "react";
import Lenis from "lenis";
import { PRODUCTS } from "./data";
import { Product, CartItem, PricingPlan } from "./types";

// Component imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";
import Nutrition from "./components/Nutrition";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import CartSlideOver from "./components/CartSlideOver";
import NutritionModal from "./components/NutritionModal";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Simulated ordering states
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setOrderCompleted(false);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQty = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Pricing Plan Subscription selection triggers adding simulated subscription package to active cart
  const handleSelectPlan = (plan: PricingPlan) => {
    setOrderCompleted(false);
    
    // Choose appropriate bottle illustration based on tier
    let sampleBottle = PRODUCTS[0]; // Green Vitality
    if (plan.id === "essential") sampleBottle = PRODUCTS[1]; // Citrus Sunrise
    if (plan.id === "premium") sampleBottle = PRODUCTS[2]; // Ruby Glow

    const planAsProduct: Product = {
      id: plan.id,
      name: `${plan.name} Subscription`,
      tagline: `Eco insulated pack of ${plan.bottlesCount} organic bottles delivered weekly`,
      highlight: `Fresh weekly auto-pilot`,
      price: plan.price,
      bottleImage: sampleBottle.bottleImage,
      fruitImage: sampleBottle.fruitImage,
      bgColor: sampleBottle.bgColor,
      textColor: sampleBottle.textColor,
      accentColor: sampleBottle.accentColor,
      nutrition: {
        calories: 110,
        vitaminC: "Var-Level",
        antioxidants: "Exceptional",
        energy: "Sustained Cycle"
      },
      ingredients: [
        `${plan.bottlesCount} Curated Cold Pressed Bottles`,
        "Returned Bottles Sanitation Circle",
        "Insulated Thermal Carry Tote Bag",
        "24/7 Nutrition Concierge Access"
      ]
    };

    // Add subscription item to cart state and slide over to checkout
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === planAsProduct.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === planAsProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product: planAsProduct, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  // Simulated secure checkout API submit hook
  const handleCheckout = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setOrderCompleted(true);
      handleClearCart();
    }, 2000);
  };

  const handleScrollToSection = (sectionId: string) => {
    // Find scroll target section anchor
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="relative min-h-screen bg-white text-brand-black selection:bg-accent-lime selection:text-brand-black">
      
      {/* 1. Header Navigation block */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* 2. Hero Section split presentation with 2 bottles carousel */}
      <Hero
        products={PRODUCTS}
        onScrollToSection={handleScrollToSection}
        onAddToCart={handleAddToCart}
      />

      {/* 3. Infinite loop banner - Custom luxury text tape */}
      <div className="bg-brand-black py-4 overflow-hidden border-y border-brand-black/90 flex select-none whitespace-nowrap">
        <div className="animate-[scroll_30s_linear_infinite] flex gap-16 min-w-full shrink-0 text-[10px] font-mono tracking-[0.25em] font-bold text-white uppercase justify-around">
          <span>🌿 LIVING BIOME ACTIVE ENZYMES</span>
          <span>•</span>
          <span>🚚 DOORSTEP INSULATED INSULATION SHIPPED COLD</span>
          <span>•</span>
          <span>🍋 RAW VELENCIA IMMUNITY BOOSTER</span>
          <span>•</span>
          <span>🧊 ZERO PASTEURIZATION (HPP)</span>
          <span>•</span>
          <span>🍍 METABOLIC STRUCTURAL NUTRITION</span>
          <span>•</span>
          <span>🌿 LIVING BIOME ACTIVE ENZYMES</span>
        </div>
        <div className="aria-hidden animate-[scroll_30s_linear_infinite] flex gap-16 min-w-full shrink-0 text-[10px] font-mono tracking-[0.25em] font-bold text-white uppercase justify-around">
          <span>🌿 LIVING BIOME ACTIVE ENZYMES</span>
          <span>•</span>
          <span>🚚 DOORSTEP INSULATED INSULATION SHIPPED COLD</span>
          <span>•</span>
          <span>🍋 RAW VELENCIA IMMUNITY BOOSTER</span>
          <span>•</span>
          <span>🧊 ZERO PASTEURIZATION (HPP)</span>
          <span>•</span>
          <span>🍍 METABOLIC STRUCTURAL NUTRITION</span>
          <span>•</span>
          <span>🌿 LIVING BIOME ACTIVE ENZYMES</span>
        </div>
      </div>

      {/* 4. Benefits Section ("WHY KEM'S DRINK") */}
      <Benefits />

      {/* 5. Services Section ("WHAT WE OFFER") with alternating layouts */}
      <Services onScrollToSection={handleScrollToSection} />

      {/* 6. Featured Products Catalog lists */}
      <FeaturedProducts
        onAddToCart={handleAddToCart}
        onOpenIngredients={(prod) => setSelectedProduct(prod)}
      />

      {/* 7. Nutrition Metrics & Fact Card with animated counters */}
      <Nutrition />

      {/* 8. Pricing Plan Ritual packages subscription */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* 9. Accordion-based FAQs panel */}
      <FAQ />

      {/* 10. High visual contrast Final CTA landing presentation */}
      <FinalCTA onScrollToSection={handleScrollToSection} />

      {/* 11. Luxury editorial Footer banner and links */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Shopping Cart Side drawer panel */}
      <CartSlideOver
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveItem}
        onCheckout={handleCheckout}
        isOrdering={isOrdering}
        orderCompleted={orderCompleted}
      />

      {/* Product Nutrition & IngredientFacts Label detail view modal */}
      <NutritionModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Keyframe animation injected inline for infinite text tape helper */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

    </div>
  );
}
