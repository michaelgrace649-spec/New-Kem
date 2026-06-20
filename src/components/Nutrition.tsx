import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const intervalTime = 30; // 30ms step spacing
    const totalSteps = totalMiliseconds / intervalTime;
    const increment = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Nutrition() {
  const items = [
    {
      id: "vit-c",
      label: "Vitamin C Active Defense",
      target: 230,
      suffix: "%",
      description: "Naturally active ascorbic levels extracted from premium raw Valencia Oranges to optimize dynamic immune responses.",
      color: "text-accent-gold"
    },
    {
      id: "enzymes",
      label: "Raw Botanical Enzymes",
      target: 140,
      suffix: "+",
      description: "Preserved living digestive agents to assist full structural biome, metabolic rates, and cellular vitamin uptake.",
      color: "text-accent-lime"
    },
    {
      id: "organic-purity",
      label: "Organic Ingredients",
      target: 100,
      suffix: "%",
      description: "Absolutely certified organic, local soil fruits, roots, and herbs. Zero pesticides or synthetic chemical traces.",
      color: "text-[#8FA542]"
    },
    {
      id: "zero-additives",
      label: "Stabilizers or Sugars",
      target: 0,
      suffix: "%",
      description: "No artificial flavoring, added white sugar, concentrates, or shelf extenders. Just pure living plants in every glass.",
      color: "text-gray-400"
    }
  ];

  return (
    <section id="nutrition" className="relative bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-20 md:mb-28 max-w-2xl space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#8FA542] bg-[#F5F8EC] px-3.5 py-1.5 rounded-md uppercase inline-block">
            🧬 LAB CERTIFIED NUTRITION
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-brand-black leading-none">
            Everything your body needs. <br />
            Nothing it doesn't.
          </h2>
          <p className="text-base text-brand-black/70 max-w-xl">
            We list every single ingredient on the front of our labels. Raw, organic, cold-pressed daily, and never micro-heated. Drink the structural truth.
          </p>
        </div>

        {/* Infographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Mini editorial showcase list */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <div className="border-l-2 border-accent-lime pl-6 py-2">
              <h4 className="font-display font-bold text-lg text-brand-black mb-2">Unpasteurized Freshness</h4>
              <p className="text-sm text-brand-black/60 leading-relaxed">
                Most market juices undergo Heat Pasteurization or High Pressure Processing (HPP). They lose organic enzymes and color longevity. Kem's Drink retains 100% active compounds.
              </p>
            </div>
            <div className="border-l-2 border-brand-black pl-6 py-2">
              <h4 className="font-display font-bold text-lg text-brand-black mb-2">Hydraulic Squeeze Power</h4>
              <p className="text-sm text-brand-black/60 leading-relaxed">
                Our bespoke slow press leaves the pulp completely dry, channeling every trace of trace minerals, bioflavonoids, and vitamin molecules into raw suspension.
              </p>
            </div>
          </div>

          {/* CENTER: Clean Interactive Infographic representation of Bottle elements */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative w-72 h-[450px] rounded-3xl bg-linear-to-b from-gray-50 to-gray-100/50 border border-gray-100 flex flex-col justify-between p-8 shadow-xs">
              
              <div className="text-center space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-brand-black/40 uppercase">KEM'S DRINK BIOME RESEARCH</span>
                <h5 className="font-display font-bold text-sm text-brand-black">Bottle Composition</h5>
              </div>

              {/* Minimal Layers Breakdown with custom animations */}
              <div className="space-y-3.5 my-8 relative">
                
                {/* Dynamic floating circles */}
                <div className="absolute -left-4 top-10 w-3 h-3 bg-accent-lime rounded-full animate-float" />
                <div className="absolute -right-2 bottom-8 w-4 h-4 bg-accent-gold rounded-full animate-float-reverse" />

                <div className="bg-white p-4 border border-gray-100 rounded-2xl shadow-xs hover:-translate-y-0.5 transition-transform">
                  <span className="text-[9px] font-mono tracking-widest text-accent-lime font-bold">75% BOTANICAL EXTRACT</span>
                  <p className="text-[11px] text-brand-black/70">Bioactive minerals & raw juices</p>
                </div>

                <div className="bg-white p-4 border border-gray-100 rounded-2xl shadow-xs hover:-translate-y-0.5 transition-transform">
                  <span className="text-[9px] font-mono tracking-widest text-accent-gold font-bold">15% ROOT NECTARS</span>
                  <p className="text-[11px] text-brand-black/70">Anti-inflammatory ginger & turmeric</p>
                </div>

                <div className="bg-white p-4 border border-gray-100 rounded-2xl shadow-xs hover:-translate-y-0.5 transition-transform">
                  <span className="text-[9px] font-mono tracking-widest text-brand-black font-bold">10% PURE SEED ENZYMES</span>
                  <p className="text-[11px] text-brand-black/70 font-mono">Organic active digestives</p>
                </div>
              </div>

              <div className="text-center">
                <span className="text-[10px] font-mono text-[#8FA542] font-semibold uppercase tracking-wider block">100% UNPASTEURIZED</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Grid of premium numbers (Animated Counters) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 order-3">
            {items.map((it) => (
              <div key={it.id} className="space-y-2 border-b border-gray-100 pb-6 last:border-none">
                <h4 className="text-[10px] font-mono tracking-widest text-brand-black/50 uppercase font-semibold">
                  {it.label}
                </h4>
                <div className={`text-4xl md:text-5xl lg:text-6xl ${it.color} block`}>
                  <AnimatedNumber value={it.target} suffix={it.suffix} />
                </div>
                <p className="text-xs text-brand-black/60 leading-relaxed">
                  {it.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
