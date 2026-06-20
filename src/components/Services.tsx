import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Services({ onScrollToSection }: ServicesProps) {
  return (
    <section id="services" className="relative bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32 space-y-4 max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-black/40 uppercase block">
            🛎️ WHAT WE OFFER
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-brand-black leading-none">
            Wellness made refreshingly simple.
          </h2>
          <p className="text-base md:text-lg text-brand-black/70">
            From targeted single-day reboots to scheduled custom office pantries, we deliver nutrition exactly when, where, and how you need it.
          </p>
        </div>

        {/* Alternating Layout Blocks */}
        <div className="space-y-24 md:space-y-40">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center justify-between gap-12 md:gap-20`}
              >
                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full md:w-1/2 aspect-video md:aspect-4/3 rounded-3xl overflow-hidden shadow-xs relative group bg-gray-50 bg-cover bg-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity duration-500" />
                </motion.div>

                {/* Content Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="w-full md:w-1/2 space-y-6"
                >

                  
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-brand-black leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-brand-black/70 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="pt-4">
                    <button
                      onClick={() => onScrollToSection(service.id === "weekly-subscription" ? "pricing" : "products")}
                      className="inline-flex items-center gap-2 group text-xs font-mono font-bold tracking-widest uppercase text-brand-black border-b-2 border-brand-black pb-1.5 hover:text-accent-lime hover:border-accent-lime transition-all duration-300 cursor-pointer"
                    >
                      {service.id === "weekly-subscription" ? "View Plans" : "Shop Cold Press"}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
