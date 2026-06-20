import React, { useState } from "react";
import { ArrowRight, Instagram, Twitter, Compass } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-24 pb-12 border-t border-gray-100 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Main Footer Layout grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Logo & Certifications Area */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-display text-4xl font-black tracking-tight text-brand-black">
                KEM'S DRINK<span className="text-accent-lime">.</span>
              </span>
              <p className="text-xs sm:text-sm text-brand-black/60 max-w-sm leading-relaxed">
                Premium cold-pressed living nutrition designed for high performance and intentional daily rituals. Purely plants, bottled in organic conscious circle glass.
              </p>
            </div>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <span className="border border-brand-black/20 px-3.5 py-1.5 text-[8px] font-mono tracking-widest text-brand-black/60 rounded-sm uppercase font-semibold">
                🟢 USDA ORGANIC
              </span>
              <span className="border border-brand-black/20 px-3.5 py-1.5 text-[8px] font-mono tracking-widest text-brand-black/60 rounded-sm uppercase font-semibold">
                🌿 NON-GMO VERIFIED
              </span>
              <span className="border border-brand-black/20 px-3.5 py-1.5 text-[8px] font-mono tracking-widest text-brand-black/60 rounded-sm uppercase font-semibold">
                🧊 RAW & LIVING
              </span>
              <span className="border border-brand-black/20 px-3.5 py-1.5 text-[8px] font-mono tracking-widest text-brand-black/60 rounded-sm uppercase font-semibold">
                ♻️ 100% GLASS return program
              </span>
            </div>
          </div>

          {/* Quick Links Indices */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="space-y-5">
              <h5 className="text-[10px] font-mono tracking-widest text-brand-black/40 uppercase font-bold">
                EXPLORE
              </h5>
              <div className="space-y-3.5 flex flex-col items-start">
                <button
                  onClick={() => onScrollToSection("products")}
                  className="text-xs text-brand-black/70 hover:text-brand-black transition-colors"
                >
                  Drinks Store
                </button>
                <button
                  onClick={() => onScrollToSection("benefits")}
                  className="text-xs text-brand-black/70 hover:text-brand-black transition-colors"
                >
                  Our Philosophy
                </button>
                <button
                  onClick={() => onScrollToSection("nutrition")}
                  className="text-xs text-brand-black/70 hover:text-brand-black transition-colors"
                >
                  Bioactive Research
                </button>
                <button
                  onClick={() => onScrollToSection("pricing")}
                  className="text-xs text-brand-black/70 hover:text-brand-black transition-colors"
                >
                  Weekly Plans
                </button>
              </div>
            </div>

            <div className="space-y-5">
              <h5 className="text-[10px] font-mono tracking-widest text-brand-black/40 uppercase font-bold">
                COMMUNITY
              </h5>
              <div className="space-y-3.5 flex flex-col items-start text-xs text-brand-black/70">
                <a href="#instagram" className="hover:text-brand-black flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5" /> Instagram
                </a>
                <a href="#twitter" className="hover:text-brand-black flex items-center gap-1.5">
                  <Twitter className="w-3.5 h-3.5" /> Twitter/X
                </a>
                <a href="#editorial" className="hover:text-brand-black flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" /> Wellness Journal
                </a>
              </div>
            </div>
          </div>

          {/* Luxury Newsletter Signup */}
          <div className="lg:col-span-4 space-y-5">
            <h5 className="text-[10px] font-mono tracking-widest text-brand-black/40 uppercase font-bold">
              MONTHLY WELLNESS ALMANAC
            </h5>
            <p className="text-xs text-brand-black/60 leading-relaxed max-w-sm">
              Subscribe to receive clean biohacking articles, priority early launch access, and limited batch invite codes. No spam. Simply botany.
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-sm pt-2">
              <div className="flex items-center border-b border-brand-black/30 hover:border-brand-black focus-within:border-brand-black pb-2 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your lifestyle email"
                  required
                  className="w-full text-xs font-mono bg-transparent py-1 text-brand-black placeholder-gray-400"
                />
                <button
                  type="submit"
                  aria-label="Submit email newsletter registration"
                  className="p-1 text-brand-black hover:text-accent-lime transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {isSubscribed && (
                <span className="absolute left-0 bottom-[-24px] text-[10px] font-mono text-[#8FA542] uppercase font-bold">
                  ✓ Joined. Prepare for organic wisdom.
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Credits & Legal bar */}
        <div className="pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-brand-black/40 uppercase">
            © {currentYear} Kem's Drink Inc. • Designed with meticulous intent.
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-mono text-brand-black/40 uppercase">
            <a href="#terms" className="hover:text-brand-black transition-colors">Terms of Ritual</a>
            <a href="#privacy" className="hover:text-brand-black transition-colors">Privacy Circle</a>
            <a href="#transparency" className="hover:text-brand-black transition-colors">Sourcing Map</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
