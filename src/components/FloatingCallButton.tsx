import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.a
        href="tel:+14165550192"
        aria-label="Call Aura Plasters"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-16 h-16 rounded-full bg-gold text-obsidian flex items-center justify-center shadow-2xl relative group"
      >
        <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20 group-hover:opacity-40" />
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
