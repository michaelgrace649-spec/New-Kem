import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ cartCount, onOpenCart, onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", target: "products" },
    { name: "Benefits", target: "benefits" },
    { name: "Nutrition", target: "nutrition" },
    { name: "FAQ", target: "faq" }
  ];

  const handleLinkClick = (target: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(target);
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div
            id="brand-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer group flex items-center gap-1.5"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-brand-black flex items-center gap-1">
              KEM'S DRINK
              <span className="h-2 w-2 rounded-full bg-accent-lime inline-block group-hover:scale-130 transition-transform duration-300"></span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.target)}
                className="text-xs font-mono font-medium tracking-widest text-brand-black/70 hover:text-brand-black uppercase transition-colors relative py-1 group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Trigger */}
            <button
              id="cart-trigger-btn"
              onClick={onOpenCart}
              className="relative p-2.5 hover:bg-gray-100 rounded-full transition-colors group cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 text-brand-black group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  id="cart-badge-count"
                  className="absolute top-0 right-0 bg-brand-black text-white text-[10px] font-mono h-4.5 w-4.5 rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Premium CTA Button */}
            <button
              id="nav-cta-shop-btn"
              onClick={() => onScrollToSection("products")}
              className="hidden sm:inline-block border border-brand-black bg-brand-black text-white hover:bg-white hover:text-brand-black text-[11px] font-mono font-semibold tracking-widest uppercase px-6 py-2.5 transition-all duration-300 cursor-pointer"
            >
              Shop Drinks
            </button>

            {/* Mobile Menu Icon */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-brand-black hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 pt-24 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-left font-display text-4xl font-semibold text-brand-black hover:text-accent-lime transition-colors py-2 block border-b border-gray-100 cursor-pointer"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleLinkClick("products")}
                className="w-full text-center bg-brand-black text-white py-4 text-xs font-mono tracking-widest font-semibold uppercase hover:bg-accent-lime hover:text-brand-black transition-colors cursor-pointer"
              >
                Launch Store Shop
              </button>
              <p className="text-center text-xs text-gray-400 font-mono">
                KEM'S DRINK COLD PRESSED • RAW WELLNESS
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
