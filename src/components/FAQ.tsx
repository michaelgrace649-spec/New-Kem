import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-black/40 uppercase block">
            ❓ QUESTIONS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-none">
            Everything you want to know.
          </h2>
          <p className="text-sm md:text-base text-brand-black/60 max-w-lg mx-auto">
            Got curiosity about our raw organic process? Here's our transparent biochemical and operational breakdown.
          </p>
        </div>

        {/* Accordion Layout Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-brand-black/15 transition-all duration-300"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.01)" }}
              >
                {/* Accordion Header Target */}
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors cursor-pointer select-none"
                >
                  <span className="font-display font-bold text-base md:text-lg text-brand-black pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border border-gray-100 transition-all ${
                    isOpen ? "bg-brand-black border-brand-black text-white" : "bg-white text-brand-black hover:bg-gray-50"
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Animated Drawer Expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-50 pt-4 text-sm md:text-base text-brand-black/70 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
