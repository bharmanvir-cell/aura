import { useState, useEffect, useRef, Suspense } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { cn } from "@/src/lib/utils";
import MaterialViewer from "./MaterialViewer";

import { Link } from "react-router-dom";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const veinOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);
  const veinPathLength = useTransform(scrollYProgress, [0, 0.8], [0.2, 1]);
  const veinScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian pt-20"
    >
      {/* Marble Veins SVG Overlay */}
      <motion.div 
        style={{ opacity: veinOpacity, scale: veinScale }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <svg className="w-full h-full opacity-40" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Vein 1 */}
          <motion.path
            d="M-100 300 Q 200 100, 400 400 T 900 200 T 1100 500"
            stroke="url(#veinGradient1)"
            strokeWidth="2"
            style={{ pathLength: veinPathLength }}
          />
          {/* Main Vein 2 */}
          <motion.path
            d="M1100 700 Q 800 900, 500 600 T 100 800 T -100 600"
            stroke="url(#veinGradient2)"
            strokeWidth="2"
            style={{ pathLength: veinPathLength }}
          />
          {/* Branching Vein 1 */}
          <motion.path
            d="M300 -100 Q 400 200, 200 500 T 400 900 T 600 1100"
            stroke="url(#veinGradient1)"
            strokeWidth="1"
            style={{ pathLength: veinPathLength }}
          />
          {/* Branching Vein 2 */}
          <motion.path
            d="M700 1100 Q 600 800, 800 500 T 600 100 T 400 -100"
            stroke="url(#veinGradient2)"
            strokeWidth="1"
            style={{ pathLength: veinPathLength }}
          />
          
          <defs>
            <linearGradient id="veinGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="veinGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#064E3B" stopOpacity="0" />
              <stop offset="50%" stopColor="#064E3B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Pigment Clouds */}
      <div className="pigment-cloud bg-emerald -top-20 -left-20 opacity-20 animate-pulse" />
      <div className="pigment-cloud bg-lapis top-1/2 -right-40 opacity-20" />
      <div className="pigment-cloud bg-terracotta -bottom-40 left-1/2 opacity-10" />

      {/* Background Texture - Parallax */}
      <motion.div
        style={{
          x: mousePos.x * -50,
          y: mousePos.y * -50,
        }}
        className="absolute inset-0 opacity-30 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&q=80&w=2000"
          alt="Verde Antique Texture"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left: Typography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-sans text-xs uppercase tracking-[0.5em] text-gold mb-6 block"
          >
            Toronto | Ontario
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-serif italic leading-[0.85] mb-8">
            The Art <br />
            <span className="text-gradient">of the</span> <br />
            Wall.
          </h1>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-bone/60 max-w-md mb-12 leading-relaxed">
            Master Venetian Plaster and vibrant mineral finishes for Toronto's most exclusive residences.
          </p>
          <div className="flex flex-wrap gap-8">
            <Link to="/#finishes" className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gold to-terracotta text-obsidian font-sans text-xs uppercase tracking-[0.3em] font-bold hover:from-emerald hover:to-lapis hover:text-bone transition-all duration-700">
              View Gallery <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/#contact" className="flex items-center gap-4 px-8 py-4 border border-lapis/30 text-lapis font-sans text-xs uppercase tracking-[0.3em] hover:border-lapis hover:bg-lapis/5 transition-all duration-500">
              Request Swatch
            </Link>
          </div>
        </motion.div>

        {/* Right: Interactive 3D Model Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          <div className="w-full h-full glass rounded-3xl overflow-hidden relative group">
            <MaterialViewer />
            
            <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest block mb-2">Spec: 001-V</span>
              <h3 className="font-serif text-3xl italic mb-2">Polished Marmorino</h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-bone/50">High-Gloss | Carrara Marble Dust</p>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full flex items-center justify-center p-4 text-center z-20"
          >
            <span className="font-serif text-[10px] italic text-gold">Hand-Applied in Toronto</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] rotate-90 mb-8">Scroll</span>
        <div className="w-px h-12 bg-gold" />
      </motion.div>
    </section>
  );
}
