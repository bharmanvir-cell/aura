import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ArrowUpRight, Star } from "lucide-react";
import { cn } from "@/src/lib/utils";
import SEO from "../../components/SEO";

const PROJECTS = [
  { id: 1, title: "Bridle Path Estate", category: "Residential", finish: "Polished Marmorino", image: "/assets/IMG_5562.webp" },
  { id: 2, title: "Yorkville Penthouse", category: "Residential", finish: "Stucco Veneziano", image: "/assets/IMG_5563.webp" },
  { id: 3, title: "Forest Hill Manor", category: "Residential", finish: "Gold Leaf Accents", image: "/assets/IMG_5567.webp" },
  { id: 4, title: "The Ritz-Carlton Suite", category: "Commercial", finish: "Grassello", image: "/assets/IMG_5566.webp" },
  { id: 5, title: "Oakville Waterfront", category: "Residential", finish: "Microcement", image: "/assets/IMG_5581.webp" },
  { id: 6, title: "King St. Design Studio", category: "Commercial", finish: "Industrial Concrete", image: "/assets/IMG_5572.webp" },
  { id: 7, title: "The Arched Hallway", category: "Residential", finish: "Classic Venetian", image: "/assets/IMG_5576.webp" },
  { id: 8, title: "Modernist TV Suite", category: "Residential", finish: "Deep Obsidian Marble", image: "/assets/IMG_5573.webp" },
  { id: 9, title: "Lapis & Gold Mural", category: "Gold Leaf", finish: "Mineral Pigment Mural", image: "/assets/IMG_5574.webp" },
  { id: 10, title: "Verde Antique Study", category: "Residential", finish: "Green Marble Texture", image: "/assets/IMG_5575.webp" },
  { id: 11, title: "Celestial Hall", category: "Gold Leaf", finish: "Copper & Cobalt Mural", image: "/assets/IMG_5580.webp" },
  { id: 12, title: "Copper Lounge", category: "Residential", finish: "Oxidized Earth Marble", image: "/assets/IMG_5575.webp" },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Gold Leaf"];

import { Link } from "react-router-dom";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => 
    filter === "All" || p.category === filter || (filter === "Gold Leaf" && p.finish.includes("Gold"))
  );

  return (
    <div className="min-h-screen bg-obsidian pt-32 pb-24 px-6">
      <SEO 
        title="Portfolio | Aura Plasters"
        description="Explore our archive of selected works. From Bridle Path estates to Yorkville penthouses, see how Aura Plasters transforms Toronto's most exclusive spaces."
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold mb-4 block"
          >
            The Archive
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic mb-12"
          >
            Selected <br />
            <span className="text-platinum/50">Works.</span>
          </motion.h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest transition-all",
                  filter === cat 
                    ? cn(
                        "text-obsidian font-bold",
                        cat === "All" && "bg-gold",
                        cat === "Residential" && "bg-emerald",
                        cat === "Commercial" && "bg-lapis text-bone",
                        cat === "Gold Leaf" && "bg-terracotta text-bone"
                      )
                    : "bg-white/5 text-bone/50 hover:bg-white/10"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass border-white/5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-gold mb-2 block">{project.category}</span>
                      <h3 className="font-serif text-2xl italic mb-1 group-hover:text-gold transition-colors">{project.title}</h3>
                      <p className="text-[10px] text-bone/50 uppercase tracking-widest">{project.finish}</p>
                    </div>
                    <Link to="/#contact" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Reviews Section */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold mb-4 block">Recognition</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-bone">Client Words.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "David Miller",
                role: "Luxury Developer",
                text: "For our high-end builds, Aura is the only choice. Their finishes add a layer of sophistication that standard paint simply cannot achieve.",
              },
              {
                name: "Sarah Thompson",
                role: "Homeowner | Rosedale",
                text: "The team was professional, clean, and incredibly talented. Our feature wall is the first thing guests notice. It feels like a piece of history.",
              }
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border-white/5 space-y-6"
              >
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" className="text-gold" />)}
                </div>
                <p className="font-serif text-lg italic text-bone/70 leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold">{review.name}</h4>
                  <p className="font-mono text-[8px] uppercase tracking-widest text-bone/40">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 glass rounded-3xl text-center border-gold/10"
        >
          <h2 className="text-4xl font-serif italic mb-6">Have a project in mind?</h2>
          <p className="font-sans text-bone/50 text-xs uppercase tracking-widest mb-12 max-w-md mx-auto leading-relaxed">
            From Forest Hill mansions to Yorkville boutiques, we bring the art of the wall to Toronto's most prestigious spaces.
          </p>
          <Link to="/#contact" className="inline-block px-12 py-5 bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.4em] font-bold hover:bg-bone transition-all duration-500">
            Start Your Transformation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
{/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <h3 className="font-serif text-3xl italic text-gradient">Aura Plasters</h3>
            <p className="text-xs text-bone/50 uppercase tracking-widest leading-relaxed">
              Artisanal wall finishes for the modern era. Hand-applied in Greater Toronto Area, Ontario.
            </p>
            <div className="flex gap-4">
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold">Studio</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-bone/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/#finishes" className="hover:text-gold transition-colors">Finishes</Link></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold">Contact</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-bone/70">
              <li>Studio: Greater Toronto Area</li>
              <li>Phone: +1 (437) 367-0727</li>
              <li>Email: studio@auraplasters.ca</li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="text" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder={subscribed ? "THANK YOU" : "EMAIL ADDRESS"} 
                disabled={subscribed}
                className={cn(
                  "w-full bg-transparent border-b py-4 text-[10px] uppercase tracking-widest focus:outline-none transition-colors",
                  subscribed ? "text-emerald border-emerald" : error ? "border-rose text-rose" : "border-white/20 focus:border-gold"
                )}
              />
              {error && <p className="absolute top-full mt-1 text-[8px] text-rose uppercase tracking-widest">{error}</p>}
              <button 
                type="submit"
                disabled={subscribed}
                className="absolute right-0 bottom-4 text-gold hover:text-bone transition-colors disabled:opacity-0"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[8px] uppercase tracking-widest text-bone/30">© 2026 Aura Plasters Studio. All Rights Reserved.</span>
          <div className="flex gap-8 font-mono text-[8px] uppercase tracking-widest text-bone/30">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

