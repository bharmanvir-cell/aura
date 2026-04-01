import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function HalfScrollCTA() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.5 && !hasBeenClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollYProgress, hasBeenClosed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-8 left-8 z-[100] max-w-sm w-full"
        >
          <div className="glass p-6 rounded-2xl border border-gold/30 shadow-2xl relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 blur-3xl rounded-full group-hover:bg-gold/20 transition-colors" />
            
            <button 
              onClick={() => {
                setIsVisible(false);
                setHasBeenClosed(true);
              }}
              className="absolute top-4 right-4 text-bone/40 hover:text-rose transition-colors"
            >
              <X size={16} />
            </button>

            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Limited Availability</span>
              <h3 className="font-serif text-2xl italic text-bone leading-tight">
                Transform your space with master-grade finishes.
              </h3>
              <p className="text-[10px] text-bone/60 uppercase tracking-widest leading-relaxed">
                Our Spring 2026 schedule is filling fast. Secure your consultation today.
              </p>
              <Link
                to="/#contact"
                onClick={() => setIsVisible(false)}
                className="flex items-center justify-between w-full px-6 py-4 bg-gold text-obsidian font-sans text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-bone transition-colors"
              >
                Book Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
