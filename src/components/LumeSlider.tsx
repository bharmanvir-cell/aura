import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function LumeSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <section className="py-24 px-6 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold mb-4 block">Interactive Comparison</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8">The Lume <br />Effect.</h2>
            <p className="font-sans text-bone/60 leading-relaxed max-w-md uppercase tracking-widest text-xs">
              Experience the transformation from raw substrate to the luminous depth of authentic Venetian Plaster. 
              Slide to reveal the light-reflective simulation.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-2">
              <span className="font-serif text-4xl italic text-gold">92%</span>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone/40">Light Reflection</p>
            </div>
            <div className="space-y-2">
              <span className="font-serif text-4xl italic text-gold">0.5mm</span>
              <p className="font-mono text-[10px] uppercase tracking-widest text-bone/40">Layer Precision</p>
            </div>
          </div>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden cursor-ew-resize group shadow-2xl border border-white/5"
        >
          {/* Before: Raw Drywall */}
          <div className="absolute inset-0">
            <img 
              src="/assets/img_666.webp" 
              alt="Raw Drywall" 
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-obsidian/40" />
            <div className="absolute top-8 left-8 glass px-4 py-2 rounded-full">
              <span className="font-mono text-[10px] uppercase tracking-widest">Substrate</span>
            </div>
          </div>

          {/* After: Polished Plaster */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="/assets/IMG_5566.webp" 
              alt="Polished Venetian Plaster" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Light Simulation Overlay */}
            <motion.div 
              animate={{
                opacity: [0.2, 0.4, 0.2],
                x: ["-10%", "10%", "-10%"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
            />
            <div className="absolute top-8 right-8 glass px-4 py-2 rounded-full border-gold/30">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold">Polished Aura</span>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-gold z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center border-gold/50 shadow-2xl">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-gold/50 rounded-full" />
                <div className="w-1 h-4 bg-gold rounded-full" />
                <div className="w-1 h-4 bg-gold/50 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
