import { X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "../types";

interface NutritionModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function NutritionModal({ product, onClose }: NutritionModalProps) {
  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Scrim Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            id="nutrition-modal-scrim"
            className="fixed inset-0 bg-black z-102 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            id="nutrition-modal-sheet"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-md p-6 sm:p-8 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.18)] z-103 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Heading Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <h4 className="font-display font-extrabold text-xl text-brand-black">Nutrition Blueprint</h4>
                <p className="text-xs text-brand-black/55 font-mono uppercase tracking-wider">Formula for {product.name}</p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-brand-black hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inner Content Area */}
            <div className="space-y-6">
              
              {/* Product Card Miniature */}
              <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-100 flex items-center gap-4">
                <div className="h-20 w-12 rounded-xl border border-white overflow-hidden p-1.5 shrink-0 bg-white shadow-xs">
                  <img
                    src={product.bottleImage}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="font-display font-bold text-sm text-brand-black">{product.name}</h5>
                  <p className="text-xs text-brand-black/60 italic">{product.tagline}</p>
                  <span className="text-[9px] font-mono tracking-widest text-[#8FA542] font-semibold uppercase bg-[#F5F8EC] px-2 py-0.5 rounded">
                    {product.highlight}
                  </span>
                </div>
              </div>

              {/* Nutrition Facts Label - Authentic Classic Clean Layout */}
              <div className="border border-brand-black p-4 font-mono text-[11px] text-brand-black space-y-2.5">
                
                <h6 className="text-lg font-bold font-sans tracking-tight text-center border-b-4 border-brand-black pb-1 uppercase">
                  Nutrition Facts
                </h6>
                <p className="text-[10px] border-b border-gray-300 pb-1">Glass container (Serving Size: 320ml / 1 Bottle)</p>

                <div className="flex items-center justify-between border-b-2 border-brand-black pb-1.5 font-bold text-xs uppercase">
                  <span>Amount Per Serving</span>
                  <span>Calories: {product.nutrition.calories}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span><strong>Sodium</strong> 10mg</span>
                    <span>0% Daily Value*</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span><strong>Total Carbs</strong> 22g</span>
                    <span>7%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1 pl-4 text-[11px] text-brand-black/70">
                    <span>Dietary Fiber (2g)</span>
                    <span>8%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1 pl-4 text-[11px] text-brand-black/70">
                    <span>Sugars (14g, Natural Fructose from fruits)</span>
                    <span>0% Added Sugars</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span><strong>Protein</strong> 2g</span>
                    <span>3%</span>
                  </div>
                </div>

                <div className="border-t-4 border-brand-black pt-2 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span><strong>Vitamin C</strong> ({product.nutrition.vitaminC})</span>
                    <span>Daily Defence Check</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Bioactive Antioxidants</strong></span>
                    <span>{product.nutrition.antioxidants} Level</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Energy Delivery Index</strong></span>
                    <span>{product.nutrition.energy}</span>
                  </div>
                </div>

                <p className="text-[8px] text-gray-400 font-sans leading-tight border-t border-gray-200 pt-1.5 italic text-center">
                  *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. Raw cold pressed active components do not require heat preservation.
                </p>
              </div>

              {/* Sourced Ingredients Section */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono tracking-widest text-[#8FA542] uppercase font-bold block">
                  🍃 100% LIVING BOTANICAL INGREDIENTS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100/80 text-brand-black text-[11px] px-3 py-1 rounded-full font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
