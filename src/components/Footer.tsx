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
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-display text-4xl font-black tracking-tight text-brand-black">
                KEM'S DRINK<span className="text-accent-lime">.</span>
              </span>
              <p className="text-xs sm:text-sm text-brand-black/60 max-w-sm leading-relaxed">
                Premium cold-pressed living nutrition designed for high performance and intentional daily rituals. Purely plants, bottled in organic conscious circle glass.
              </p>
            </div>
          </div>

          {/* Quick Links Indices */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-5">
              <h5 className="text-[10px] font-mono tracking-widest text-brand-black/40 uppercase font-bold">
                EXPLORE
              </h5>
              <div className="space-y-3.5 flex flex-col items-start">
                <button
                  onClick={() => onScrollToSection("products")}
                  className="text-xs text-brand-black/70 hover:text-brand-black transition-colors cursor-pointer text-left"
                >
                  Products
                </button>
                <button
                  onClick={() => onScrollToSection("benefits")}
                  className="text-xs text-brand-black/70 hover:text-brand-black transition-colors cursor-pointer text-left"
                >
                  Benefits
                </button>
                <button
                  onClick={() => onScrollToSection("nutrition")}
                  className="text-xs text-brand-black/70 hover:text-brand-black transition-colors cursor-pointer text-left"
                >
                  Nutrition
                </button>
                <button
                  onClick={() => onScrollToSection("faq")}
                  className="text-xs text-brand-black/70 hover:text-brand-black transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </div>
            </div>

            <div className="space-y-5">
              <h5 className="text-[10px] font-mono tracking-widest text-brand-black/40 uppercase font-bold">
                SOCIALS
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

        </div>

        {/* Bottom Credits & Legal bar */}
        <div className="pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-brand-black/40 uppercase">
            © {currentYear} Kem's Drink Inc.
          </p>
        </div>

      </div>
    </footer>
  );
}
