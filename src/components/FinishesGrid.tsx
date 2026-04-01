import { motion } from "motion/react";
import { Search, MapPin, Star, ArrowUpRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const FINISHES = [
  {
    title: "Verde Antique",
    desc: "Deep mineral green with golden veins. A majestic statement for sophisticated interiors.",
    image: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&q=80&w=800",
    tags: ["Deep Green", "Gold Veins"],
    color: "emerald"
  },
  {
    title: "Classic Marmorino",
    desc: "Warm, hand-polished earth tones that capture the essence of Italian heritage.",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800",
    tags: ["Warm", "Polished"],
    color: "terracotta"
  },
  {
    title: "Lapis & Gold",
    desc: "A celestial blend of deep cobalt and hand-applied gold leaf. Pure artisanal luxury.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
    tags: ["Cobalt", "Gold Leaf"],
    color: "lapis"
  },
  {
    title: "Mineral Grey",
    desc: "Subtle, multi-tonal grey with a silk-like sheen. Perfect for modern minimalist spaces.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800",
    tags: ["Grey", "Silk"],
    color: "rose"
  },
  {
    title: "Obsidian Marble",
    desc: "Deep, reflective black with striking white veins. The height of contemporary drama.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    tags: ["Black", "Reflective"],
    color: "gold"
  }
];

import { Link } from "react-router-dom";

export default function FinishesGrid() {
  return (
    <section id="finishes" className="py-24 px-6 bg-obsidian relative overflow-hidden">
      {/* Pigment Clouds */}
      <div className="pigment-cloud bg-emerald -top-40 -left-40 opacity-10" />
      <div className="pigment-cloud bg-terracotta -bottom-40 -right-40 opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold mb-4 block">The Collection</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-6">Vibrant <br />Pigments.</h2>
            <p className="font-sans text-bone/50 text-xs uppercase tracking-widest leading-relaxed">
              We've expanded our palette with rare mineral pigments, bringing a new dimension of color to the traditional art of Venetian Plaster.
            </p>
          </div>
          <Link 
            to="/#contact" 
            aria-label="View all material specifications"
            className="group flex items-center gap-4 text-gold font-sans text-xs uppercase tracking-widest hover:text-bone transition-colors"
          >
            View All Specs <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FINISHES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl glass border-white/5"
            >
              <img
                src={f.image}
                srcSet={`${f.image.replace('w=800', 'w=400')} 400w, ${f.image} 800w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={f.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60",
                f.color === "emerald" && "from-emerald",
                f.color === "terracotta" && "from-terracotta",
                f.color === "lapis" && "from-lapis",
                f.color === "rose" && "from-rose",
                f.color === "gold" && "from-gold/40"
              )} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {f.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[8px] uppercase tracking-widest text-bone/70">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-3xl italic mb-4 group-hover:text-gold transition-colors">{f.title}</h3>
                <p className="text-[10px] text-bone/60 uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
