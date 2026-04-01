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
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Celestial Hall Project"
              loading="lazy"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* The Artisans */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold block">The Team</span>
            <h2 className="text-5xl font-serif italic text-bone">Master Hands.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {artisans.map((artisan, i) => (
              <motion.div
                key={artisan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group space-y-6"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden glass border-white/5 relative">
                  <img 
                    src={`${artisan.image}&fm=webp`} 
                    srcSet={`${artisan.image.replace('w=400', 'w=200&fm=webp')} 200w, ${artisan.image}&fm=webp 400w`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={artisan.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl italic text-bone">{artisan.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold">{artisan.role}</p>
                  <p className="text-xs text-bone/40 leading-relaxed">{artisan.bio}</p>
                </div>
              </motion.div>
            ))}
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

      <LeadForm />
    </div>
  );
}
