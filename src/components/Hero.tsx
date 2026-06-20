import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { Product } from "../types";

interface HeroProps {
  products: Product[];
  onScrollToSection: (sectionId: string) => void;
  onAddToCart: (prod: Product) => void;
}

export default function Hero({ products, onScrollToSection, onAddToCart }: HeroProps) {
  // Use first 2 products for the carousel
  const carouselProducts = products.slice(0, 2);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll parallax using framer-motion's useScroll
  const { scrollY } = useScroll();
  const yFruit1 = useTransform(scrollY, [0, 800], [0, -120]);
  const yFruit2 = useTransform(scrollY, [0, 800], [0, 100]);
  const yFruit3 = useTransform(scrollY, [0, 800], [0, -40]);
  const rFruit1 = useTransform(scrollY, [0, 800], [0, 45]);
  const rFruit2 = useTransform(scrollY, [0, 800], [0, -60]);

  // Smoothen the spring animation
  const springY1 = useSpring(yFruit1, { stiffness: 60, damping: 20 });
  const springY2 = useSpring(yFruit2, { stiffness: 60, damping: 20 });
  const springY3 = useSpring(yFruit3, { stiffness: 60, damping: 20 });
  const springR1 = useSpring(rFruit1, { stiffness: 60, damping: 20 });
  const springR2 = useSpring(rFruit2, { stiffness: 60, damping: 20 });

  const activeProduct = carouselProducts[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 1 ? 0 : 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-white"
    >
      {/* Background accents - subtle shadows and minimal circles */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-accent-lime/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-accent-gold/15 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      {/* LEFT SIDE: Product Imagery (takes exactly 50% width and full height with no padding on top, bottom, and left hand side) */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative order-2 md:order-1 overflow-hidden">
        
        {/* Carousel Container */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex flex-col items-stretch justify-center"
            >
              {activeIndex === 0 ? (
                /* ================= SLIDE 0: IMMUNE BARRIER ORANGE GLASS ================= */
                <div className="relative w-full h-full select-none">
                  {/* Central Portrait Card with no rounded corners and full height/width */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src="/src/assets/images/immune_barrier_1781366933712.jpg"
                      alt="Immune Barrier glass"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Embedded Pill Label inside card */}
                    <span className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xs text-[10px] font-mono tracking-widest text-brand-black px-4 py-1.5 rounded-none border border-gray-100 flex items-center gap-1.5 shadow-xs whitespace-nowrap z-10">
                      <span className="h-2 w-2 bg-[#8FA542] rounded-full animate-pulse"></span>
                      IMMUNE BARRIER
                    </span>

                    {/* EMBEDDED SUBTLE CAROUSEL INDICATORS FOR SLIDE 0 */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(0);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === 0 ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white"
                        }`}
                        aria-label="Go to slide 1"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(1);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === 1 ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white"
                        }`}
                        aria-label="Go to slide 2"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* ================= SLIDE 1: KEM GINGER BOTTLE FULL-BLEED ================= */
                <div className="relative w-full h-full select-none">
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src="/src/assets/images/ginger_drink_1781366950462.jpg"
                      alt="Kem Ginger Drink"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Embedded Pill Label inside card */}
                    <span className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xs text-[10px] font-mono tracking-widest text-brand-black px-4 py-1.5 rounded-none border border-gray-100 flex items-center gap-1.5 shadow-xs whitespace-nowrap z-10">
                      <span className="h-2 w-2 bg-[#D19A2E] rounded-full animate-pulse"></span>
                      CITRUS SUNRISE
                    </span>

                    {/* EMBEDDED SUBTLE CAROUSEL INDICATORS FOR SLIDE 1 */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(0);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === 0 ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white"
                        }`}
                        aria-label="Go to slide 1"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(1);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === 1 ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white"
                        }`}
                        aria-label="Go to slide 2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT SIDE: Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start pt-28 pb-16 px-6 sm:px-12 md:py-24 md:pl-16 md:pr-12 lg:pl-24 lg:pr-24 z-20 order-1 md:order-2 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 max-w-xl"
        >


          {/* Headline - Editorial scale */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[76px] font-bold text-brand-black tracking-tight leading-[0.95] drop-shadow-2xs">
            Healthy living <br />
            starts with what <br />
            you <span className="text-accent-lime relative inline-block">drink<span className="absolute bottom-1 left-0 w-full h-[3px] bg-accent-lime"></span></span>.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-brand-black/70 leading-relaxed max-w-lg">
            Freshly crafted juices packed with essential vitamins, raw botanical antioxidants, and sustained natural energy. 
            <span className="font-medium text-brand-black"> No preservatives. No shortcuts.</span> Just living nutrition on tap.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            {/* Primary Button */}
            <button
              id="hero-primary-cta"
              onClick={() => onScrollToSection("products")}
              className="bg-brand-black text-white border border-brand-black hover:bg-white hover:text-brand-black text-xs font-mono font-bold tracking-widest uppercase px-8 py-4 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Shop Drinks
            </button>

            {/* Secondary Button */}
            <button
              id="hero-secondary-cta"
              onClick={() => onScrollToSection("benefits")}
              className="bg-white text-brand-black border border-gray-200 hover:border-brand-black text-xs font-mono font-bold tracking-widest uppercase px-8 py-4 transition-all duration-300 cursor-pointer"
            >
              Explore Benefits
            </button>
          </div>

          {/* Micro Trust Badge */}
          <div className="pt-6 grid grid-cols-2 gap-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent-lime shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-black/70">Certified Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-gold shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-black/70">Raw & Unrefined</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
