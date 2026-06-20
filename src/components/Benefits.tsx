import { motion } from "motion/react";
import { Leaf, Award, Heart } from "lucide-react";
import { BENEFITS } from "../data";

export default function Benefits() {
  const icons = [
    <Leaf className="w-5 h-5 text-accent-lime" />,
    <Award className="w-5 h-5 text-accent-light" />,
    <Heart className="w-5 h-5 text-accent-gold" />
  ];

  return (
    <section id="benefits" className="relative bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24">
      {/* Dynamic Header container */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#8FA542] uppercase block">
            🌿 WHY KEM'S DRINK
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-brand-black leading-none">
            Fuel your day naturally.
          </h2>
          <p className="text-base md:text-lg text-brand-black/70 max-w-xl">
            We operate on a zero-compromise formula. Pure living botanicals, pressed under cold hydraulic pressure and delivered fresh. No flash pasteurization, no shortcuts.
          </p>
        </div>
      </div>

      {/* Grid of Benefit Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
        {BENEFITS.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="group relative flex flex-col justify-between bg-white overflow-hidden border border-gray-100 hover:border-brand-black/20 transition-all duration-300 rounded-3xl"
            style={{ boxShadow: "0 15px 45px rgba(0,0,0,0.02)" }}
          >
            {/* Visual Media Showcase with Product Quality Photography */}
            <div className="relative h-64 md:h-72 w-full overflow-hidden bg-gray-50">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Soft visual tint overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-65" />
              
              {/* Dynamic Badge Icon */}
              <div className="absolute top-6 left-6 h-10 w-10 bg-white/95 backdrop-blur-xs rounded-full flex items-center justify-center shadow-md border border-gray-100 z-10">
                {icons[index % icons.length]}
              </div>
            </div>

            {/* Typography Description container */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-start">
              <h3 className="font-display text-xl md:text-2xl font-bold text-brand-black mb-3 group-hover:text-accent-lime transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-brand-black/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
            
            {/* Bottom Accent line bar */}
            <div className="h-1.5 w-full bg-gray-100 group-hover:bg-accent-lime transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
