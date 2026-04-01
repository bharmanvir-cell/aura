import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export default function ExitIntentCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [errors, setErrors] = useState({ name: "", contact: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasBeenShown]);

  const validate = () => {
    const newErrors = { name: "", contact: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const contact = formData.contact.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    if (!contact) {
      newErrors.contact = "Email or Phone is required";
      isValid = false;
    } else if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
      newErrors.contact = "Please enter a valid email or phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsVisible(false);
    navigate("/success");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass p-12 rounded-3xl border border-gold/30 shadow-2xl overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald/20 blur-[100px] rounded-full" />
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-bone/40 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative space-y-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Sparkles size={32} />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl font-serif italic text-bone">Wait, before you go...</h2>
                <p className="text-xs text-bone/50 uppercase tracking-widest leading-relaxed max-w-xs mx-auto">
                  Get a free digital swatch kit and a personalized quote for your Toronto space.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className={cn(
                      "w-full bg-white/5 border py-4 px-6 rounded-xl text-sm focus:outline-none transition-all",
                      errors.name ? "border-rose/50 focus:border-rose" : "border-white/10 focus:border-gold/50"
                    )}
                  />
                  {errors.name && <p className="text-[10px] text-rose uppercase tracking-widest">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Email or Phone</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="john@example.com or 416-555-0192"
                    className={cn(
                      "w-full bg-white/5 border py-4 px-6 rounded-xl text-sm focus:outline-none transition-all",
                      errors.contact ? "border-rose/50 focus:border-rose" : "border-white/10 focus:border-gold/50"
                    )}
                  />
                  {errors.contact && <p className="text-[10px] text-rose uppercase tracking-widest">{errors.contact}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.4em] font-bold hover:bg-bone transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Get My Free Kit"} <ArrowRight size={16} />
                </button>
              </form>

              <p className="text-[8px] uppercase tracking-widest text-bone/30">
                No spam. Only elite finishes. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
