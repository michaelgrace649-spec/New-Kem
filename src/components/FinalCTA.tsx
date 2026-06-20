import { motion } from "motion/react";

interface FinalCTAProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function FinalCTA({ onScrollToSection }: FinalCTAProps) {
  return (
    <section className="relative bg-white pt-24 pb-48 md:pt-36 md:pb-[440px] px-6 md:px-12 lg:px-24 overflow-hidden border-t border-gray-100 flex flex-col items-center text-center">
      
      {/* Background soft botanical glowing indicators */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent-lime/10 rounded-full filter blur-3xl opacity-80 -z-1 pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 z-10">
        
        {/* Label */}
        <span className="text-xs font-mono font-bold tracking-widest text-[#8FA542] uppercase block">
          🛒 GET STARTED WITH KEM'S DRINK
        </span>

        {/* Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-black leading-none max-w-3xl mx-auto"
        >
          Your healthiest habit <br className="hidden sm:inline" /> starts today.
        </motion.h2>

        {/* Supporting bullet line text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center space-x-6 sm:space-x-8 text-xs sm:text-sm font-mono tracking-widest text-brand-black/60 uppercase font-bold"
        >
          <span>Fresh</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
          <span>Organic</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
          <span>Cold Pressed</span>
        </motion.div>

        {/* Main CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4"
        >
          <button
            id="final-cta-grab-pack-btn"
            onClick={() => onScrollToSection("products")}
            className="bg-brand-black text-white hover:bg-[#8FA542] hover:text-white border border-brand-black hover:border-[#8FA542] text-xs font-mono font-bold tracking-widest uppercase px-10 py-5 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            Grab Your First Pack
          </button>
        </motion.div>

      </div>

      {/* Layered Bottle slowly rising into view from below */}
      <motion.div
        initial={{ y: 250, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute bottom-[-100px] sm:bottom-[-200px] left-1/2 -translate-x-1/2 w-64 sm:w-80 h-[380px] sm:h-[480px] z-10 pointer-events-none drop-shadow-[0_-5px_30px_rgba(0,0,0,0.04)]"
      >
        <img
          src="/src/assets/images/kiwi_green_juice_1781528009331.jpg"
          alt="Kem's Drink flagship bottle rising"
          className="w-full h-full object-contain rounded-t-3xl border-t-4 border-l-2 border-r-2 border-white/60 bg-linear-to-b from-white/30 to-transparent"
          referrerPolicy="no-referrer"
        />
        
        {/* Absolute floating slice overlapping ascending bottle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-10 top-1/4 w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-white overflow-hidden drop-shadow-md"
        >
          <img
            src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=300"
            alt="Orange slice graphic"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}
