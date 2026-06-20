import { ShoppingBag, X, Minus, Plus, Trash2, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CartItem } from "../types";

interface CartSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (pId: string, qty: number) => void;
  onRemove: (pId: string) => void;
  onCheckout: () => void;
  isOrdering: boolean;
  orderCompleted: boolean;
}

export default function CartSlideOver({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemove,
  onCheckout,
  isOrdering,
  orderCompleted
}: CartSlideOverProps) {
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const deliveryThreshold = 15000;
  const deliveryCost = subtotal > deliveryThreshold ? 0 : 2000;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark scrim backdrop */}
          <motion.div
            id="cart-mask-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-100 cursor-pointer"
          />

          {/* Drawer Slide-in Canvas */}
          <motion.div
            id="cart-drawer-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-[0_0_100px_rgba(0,0,0,0.15)] z-101 flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-brand-black" />
                <h4 className="font-display font-bold text-lg text-brand-black">Your Healthy Ritual Bag</h4>
                <span className="bg-gray-100 text-brand-black text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold">
                  {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                id="cart-close-btn"
                className="p-1 text-gray-400 hover:text-brand-black hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
                aria-label="Close Cart"
              >
                <X className="w-5.5 h-5.5" />
              </button>
            </div>

            {/* Middle Product Container list */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              
              {/* Order Placement Success Indicator animation */}
              {orderCompleted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  id="order-success-banner"
                  className="bg-[#F5F8EC] border border-[#A4D233]/40 p-8 rounded-3xl text-center space-y-4"
                >
                  <div className="h-16 w-16 bg-[#A4D233]/25 border border-[#A4D233]/40 rounded-full flex items-center justify-center mx-auto text-[#213502]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h5 className="font-display font-bold text-xl text-[#213502]">Ritual Registered!</h5>
                  <p className="text-xs text-[#213502]/85 leading-relaxed max-w-sm mx-auto">
                    Your hydraulic cold-pressed juice batch has been submitted for extraction. We schedule and ship fresh within 24 hours. Check your inbox for updates.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-brand-black text-white text-[10px] font-mono font-bold tracking-widest uppercase py-3 px-6 rounded-md hover:bg-[#8FA542] transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </motion.div>
              ) : cartItems.length === 0 ? (
                /* Empty Cart block */
                <div className="h-2/3 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-14 w-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <h5 className="font-display font-bold text-lg text-brand-black">Your bag is empty</h5>
                  <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                    Set up your daily wellness rhythm. Browse our catalog and add a fresh hydraulic product to start.
                  </p>
                  <button
                    onClick={onClose}
                    className="border border-brand-black bg-brand-black text-white hover:bg-white hover:text-brand-black font-mono text-[10px] font-bold tracking-widest uppercase px-6 py-3 transition-colors cursor-pointer"
                  >
                    Start Sourcing
                  </button>
                </div>
              ) : (
                /* Listed Products */
                cartItems.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layoutId={`cart-row-${item.product.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-between gap-4 pb-6 border-b border-gray-50"
                  >
                    {/* Bottle thumbnail */}
                    <div className="h-20 w-16 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 overflow-hidden shrink-0">
                      <img
                        src={item.product.bottleImage}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-start justify-between">
                        <h6 className="font-display font-bold text-sm text-brand-black">{item.product.name}</h6>
                        <span className="font-display text-sm font-bold text-brand-black flex flex-col items-end">
                          <span>₦{(item.product.price * item.quantity).toLocaleString()}</span>
                          {item.product.volume && (
                            <span className="text-[9px] font-mono text-brand-black/40 uppercase">{item.product.volume}</span>
                          )}
                        </span>
                      </div>
                      <p className="text-[10px] font-mono tracking-wide text-brand-black/55">{item.product.highlight}</p>

                      {/* Quantity Modifier */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-gray-200 bg-white rounded-full p-1 h-7">
                          <button
                            onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-150 rounded-full transition-colors text-brand-black/60 cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 font-mono text-xs font-bold text-brand-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-150 rounded-full transition-colors text-brand-black/60 cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Trash Button */}
                        <button
                          onClick={() => onRemove(item.product.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors p-1"
                          aria-label="Delete item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Bottom Calculations section */}
            {cartItems.length > 0 && !orderCompleted && (
              <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-100 space-y-6">
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-black/60 uppercase">
                    <span>Active Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-brand-black/60 uppercase">
                    <span>Isothermal Delivery ({subtotal > 15000 ? "Free Promotion" : "Flat Tier"})</span>
                    <span>{deliveryCost === 0 ? "Free" : `₦${deliveryCost.toLocaleString()}`}</span>
                  </div>
                  
                  {subtotal < 15000 && (
                    <p className="text-[10px] font-mono text-accent-lime bg-brand-black p-3.5 rounded text-center uppercase tracking-wide font-bold">
                      Add ₦{(15000 - subtotal).toLocaleString()} more for FREE Isothermal delivery!
                    </p>
                  )}

                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-base font-display font-bold text-brand-black">
                    <span>Total Sourced Balance</span>
                    <span>₦{(subtotal + deliveryCost).toLocaleString()}</span>
                  </div>
                </div>

                {/* Secure Checkout trigger button */}
                <button
                  onClick={onCheckout}
                  disabled={isOrdering}
                  id="checkout-finalize-btn"
                  className="w-full bg-brand-black hover:bg-[#8FA542] text-white py-4 px-6 text-xs font-mono font-bold tracking-widest uppercase items-center justify-center flex gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isOrdering ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-pulse">Formulating Juice...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 justify-center">
                      Finalize Organic Order <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </button>
                
                <p className="text-[9px] text-gray-400 font-mono text-center uppercase">
                  🔐 Cold extraction scheduled immediately upon safe transaction.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
