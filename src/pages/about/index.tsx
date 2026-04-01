import { motion } from "motion/react";
import { Sparkles, History, Heart, Users, Quote, Star } from "lucide-react";
import LeadForm from "../../components/LeadForm";
import SEO from "../../components/SEO";

const reviews = [
  {
    name: "Elena V.",
    role: "Interior Designer | Yorkville",
    text: "Aura Plasters transformed our Bridle Path residence into a living gallery. The depth of the Marmorino finish is unlike anything we've seen in Toronto.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Architect | Forest Hill",
    text: "Their attention to detail and understanding of mineral pigments is unparalleled. They don't just apply plaster; they sculpt light and shadow.",
    rating: 5
  },
  {
    name: "Sarah Thompson",
    role: "Homeowner | Rosedale",
    text: "The team was professional, clean, and incredibly talented. Our feature wall is the first thing guests notice. It feels like a piece of history.",
    rating: 5
  },
  {
    name: "David Miller",
    role: "Luxury Developer",
    text: "For our high-end builds, Aura is the only choice. Their finishes add a layer of sophistication that standard paint simply cannot achieve.",
    rating: 5
  }
];


export default function About() {
  return (
    <div className="bg-obsidian pt-32">
      <SEO 
        title="About Our Studio | Aura Plasters"
        description="Learn about the history, philosophy, and master artisans behind Aura Plasters. Toronto's premier studio for traditional Venetian Plaster and mineral finishes."
      />
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic text-bone leading-tight"
          >
            Artisans of <br /> <span className="text-gradient">Mineral & Light.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm uppercase tracking-widest text-bone/50 max-w-2xl mx-auto leading-relaxed"
          >
            Founded in the heart of Toronto, Aura Plasters is a boutique studio dedicated to the revival of ancient Venetian techniques for the modern interior.
          </motion.p>
        </div>
      </section>

      {/* Philosophy & History */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gold">
                <History size={24} />
                <h2 className="font-serif text-3xl italic">A Legacy of Texture</h2>
              </div>
              <p className="text-bone/60 leading-relaxed">
                Our journey began with a simple observation: modern walls lacked soul. We looked back to the Renaissance, where lime-based plasters were used to create surfaces that breathed and aged with grace. Today, we blend these time-honored recipes with contemporary aesthetics.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-emerald">
                <Heart size={24} />
                <h2 className="font-serif text-3xl italic">The Philosophy</h2>
              </div>
              <p className="text-bone/60 leading-relaxed">
                We believe a wall is not a boundary, but a canvas. Our philosophy centers on "Slow Craft"—the idea that true beauty requires patience, hand-application, and a deep respect for natural materials like Carrara marble dust and slaked lime.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden glass border-gold/20">
            <img 
              src="/assets/IMG_5566.webp" 
              alt="Celestial Hall Project"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
          </div>
        </div>
      </section>

     
      {/* Reviews Grid */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold block">Recognition</span>
            <h2 className="text-5xl font-serif italic text-bone">Client Words.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border-white/5 space-y-6 hover:border-gold/20 transition-colors"
              >
                <div className="flex gap-1 text-gold">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="font-serif text-xl italic text-bone/80 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-serif italic">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest font-bold">{review.name}</h4>
                    <p className="font-mono text-[8px] uppercase tracking-widest text-bone/40">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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

      <LeadForm />
    </div>
  );
}
