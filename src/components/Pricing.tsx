import { Check, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { PRICING_PLANS } from "../data";
import { PricingPlan } from "../types";

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="relative bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28 space-y-4">

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-none">
            Choose your daily wellness journey
          </h2>
          <p className="text-sm md:text-base text-brand-black/60 max-w-md mx-auto">
            Commit to clean hydration. Cold pressed organic enzymes shipped fresh to your doorstep every week on auto-pilot. Cancel or pause anytime with one tap.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`relative bg-white border rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "border-brand-black shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:-translate-y-4"
                  : "border-gray-200 hover:border-brand-black/30 shadow-xs"
              }`}
            >
              
              {/* Popular Badge */}
              {plan.isPopular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-black text-white text-[9px] font-mono tracking-widest uppercase font-bold py-1.5 px-4 rounded-full border border-brand-black">
                  ⭐ DESIGNED SELECTION
                </span>
              )}

              {/* Top Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-brand-black">{plan.name}</h3>
                  <div className="mt-2.5 flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-display font-bold text-brand-black">
                      ₦{plan.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-mono text-brand-black/60 font-medium">/ week</span>
                  </div>
                  <p className="mt-1.5 text-xs text-brand-black/55 font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-lime shrink-0" />
                    {plan.delivery}
                  </p>
                </div>

                {/* Bottles Counts Visualization */}
                <div className="bg-gray-50/50 p-4 rounded-2xl flex items-center justify-between border border-gray-100">
                  <span className="text-xs font-mono font-semibold text-brand-black/80">Weekly Supply:</span>
                  <span className="text-xs font-mono font-bold text-accent-lime bg-brand-black px-3 py-1 rounded-full text-white">
                    {plan.bottlesCount} Organic Bottles
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-4 pt-4 border-t border-gray-50">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-accent-lime/15 border border-accent-lime/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#5A7E14]" />
                      </div>
                      <span className="text-sm text-brand-black/75 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Select CTA Button */}
              <div className="pt-8">
                <button
                  id={`select-pricing-${plan.id}`}
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    plan.isPopular
                      ? "bg-brand-black text-white hover:bg-accent-lime hover:text-brand-black border border-brand-black"
                      : "bg-white text-brand-black border border-gray-200 hover:border-brand-black"
                  }`}
                >
                  Subscribe Routine
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
