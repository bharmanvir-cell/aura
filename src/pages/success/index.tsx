import { motion } from "motion/react";
import { CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function Success() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-6 relative overflow-hidden">
      <SEO 
        title="Inquiry Received | Aura Plasters"
        description="Thank you for your inquiry. Aura Plasters will contact you shortly to discuss your luxury Venetian Plaster project in Toronto."
      />
      {/* Background Pigment Clouds */}
      <div className="pigment-cloud bg-emerald -top-40 -left-40 opacity-10" />
      <div className="pigment-cloud bg-gold -bottom-40 -right-40 opacity-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full glass p-12 rounded-3xl border-gold/20 text-center relative z-10"
      >
        <div className="w-20 h-20 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald">
          <CheckCircle size={40} />
        </div>
        
        <h1 className="font-serif text-5xl italic mb-6 text-bone">Inquiry Received.</h1>
        <p className="font-sans text-bone/60 text-sm uppercase tracking-widest leading-relaxed mb-12">
          Your request for an Aura Plasters consultation has been successfully submitted. Our Toronto studio will contact you within 24 hours.
        </p>

        <div className="space-y-6">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-4 w-full py-4 bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.3em] font-bold hover:bg-bone transition-all duration-500"
          >
            <ArrowLeft size={16} /> Return Home
          </Link>
          
          <div className="flex items-center justify-center gap-2 text-gold/50 font-mono text-[10px] uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Excellence in every layer</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
