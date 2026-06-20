import { useState } from "react";
import { Plus, Check, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "../types";
import { PRODUCTS } from "../data";

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  onOpenIngredients: (product: Product) => void;
}

export default function FeaturedProducts({ onAddToCart, onOpenIngredients }: FeaturedProductsProps) {
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product);
    setAddedItemIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="products" className="relative bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#8FA542] bg-[#F5F8EC] px-3.5 py-1.5 rounded-md uppercase inline-block">
            🛒 OUR COLD PRESSED COLLECTION
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-none">
            Choose your elixir.
          </h2>
          <p className="text-sm md:text-base text-brand-black/60 max-w-lg mx-auto">
            Our signature blends are botanically extracted to capture peak living vitality. Raw, unrefined, and organic active ingredients.
          </p>
        </div>

        {/* 4 Cards Displayed Horizontally */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {PRODUCTS.map((prod) => {
            const isAdded = addedItemIds[prod.id];
            
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative flex flex-col bg-white rounded-3xl border border-gray-100 p-6 md:p-8 justify-between transition-all duration-500 hover:border-brand-black/10 hover:shadow-[0_24px_60px_rgba(0,0,0,0.04)]"
              >
                
                {/* Visual Canvas - Bottle and Fruit beneath */}
                <div className="relative h-64 md:h-72 w-full flex items-center justify-center mb-8 overflow-hidden rounded-2xl bg-slate-50/50">
                  
                  {/* Subtle Background Colored Shape */}
                  <div
                    className="absolute inset-0 opacity-20 filter blur-3xl rounded-full transition-transform duration-700 group-hover:scale-130"
                    style={{ backgroundColor: prod.accentColor }}
                  />

                  {/* Botanical Fruit Image Beneath (Subtly overlaps and scales) */}
                  <motion.div
                    className="absolute bottom-4 left-6 w-24 h-24 md:w-28 md:h-28 rounded-full border border-white overflow-hidden pointer-events-none drop-shadow-md z-1"
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.15, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  >
                    <img
                      src={prod.fruitImage}
                      alt={`${prod.name} fruit raw source`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* Bottle Image (Lifts & shadow grows on hover) */}
                  <motion.div
                    className="relative w-28 md:w-36 h-48 md:h-56 z-10 transition-transform duration-500 ease-out group-hover:-translate-y-4 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.05)] group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] select-none"
                  >
                    <img
                      src={prod.bottleImage}
                      alt={prod.name}
                      className="w-full h-full object-contain rounded-2xl border-2 border-white/60 bg-white/20"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                </div>

                {/* Info and Metadata area */}
                <div className="space-y-4">
                  
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      {/* Name */}
                      <h3 className="font-display text-2xl md:text-3xl font-extrabold text-brand-black tracking-tight leading-tight">
                        {prod.name}
                      </h3>
                      {/* Nutrition highlight */}
                      <span className="text-[11px] uppercase font-mono tracking-wide text-brand-black font-extrabold flex items-center gap-1 mt-1.5">
                        <span className="text-amber-500 font-bold">⚡</span> {prod.highlight}
                      </span>
                    </div>

                    {/* Price Tag */}
                    <div className="text-right flex flex-col items-end shrink-0 justify-start">
                      <span className="font-display text-lg md:text-xl font-extrabold text-brand-black bg-[#A4D233]/15 px-2.5 py-1 rounded-sm border border-[#A4D233]/20">
                        ₦{prod.price.toLocaleString()}
                      </span>
                      {prod.volume && (
                        <span className="text-[10px] font-mono font-black text-brand-black/75 uppercase tracking-widest mt-1.5">
                          {prod.volume}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description brief tagline */}
                  <p className="text-sm text-brand-black/90 font-semibold leading-relaxed font-sans">
                    {prod.tagline}
                  </p>

                  {/* Button interactions */}
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-gray-100">
                    
                    {/* Ingredients query modal button */}
                    <button
                      onClick={() => onOpenIngredients(prod)}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider uppercase text-brand-black/85 hover:text-brand-black border-b border-brand-black/30 hover:border-brand-black pb-0.5 transition-all cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 stroke-[2.5]" />
                      Nutrition Facts
                    </button>

                    {/* Quick Add button */}
                    <button
                      onClick={() => handleQuickAdd(prod)}
                      id={`add-to-cart-${prod.id}`}
                      className={`h-9 items-center justify-center flex px-4 rounded-full font-mono text-[11px] font-extrabold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                        isAdded
                          ? "bg-accent-lime text-brand-black border-2 border-accent-lime"
                          : "bg-brand-black text-white hover:bg-accent-lime hover:text-brand-black border-2 border-brand-black/95"
                      }`}
                    >
                      {isAdded ? (
                        <span className="flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Added
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Plus className="w-3.5 h-3.5 stroke-[2.5]" /> Quick Add
                        </span>
                      )}
                    </button>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
