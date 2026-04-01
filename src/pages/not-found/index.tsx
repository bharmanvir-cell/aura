import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../../components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <SEO 
        title="Page Not Found | Aura Plasters"
        description="The page you are looking for does not exist. Return to Aura Plasters gallery to explore luxury Venetian Plaster finishes in Toronto."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[12vw] font-serif italic text-gold/20 leading-none mb-4">404</h1>
        <h2 className="text-4xl font-serif mb-6">Lost in the Dust</h2>
        <p className="text-bone/60 max-w-md mx-auto mb-12 font-sans uppercase tracking-widest text-sm">
          The finish you're looking for hasn't been applied yet. Let's return to the gallery.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-4 px-8 py-4 bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.3em] font-bold hover:bg-bone transition-colors"
        >
          Back to Gallery <ArrowRight size={16} />
        </Link>
      </motion.div>

      {/* Decorative Plaster Texture Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-platinum/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
