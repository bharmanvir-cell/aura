import Hero from "../../components/Hero";
import FinishesGrid from "../../components/FinishesGrid";
import LumeSlider from "../../components/LumeSlider";
import LeadForm from "../../components/LeadForm";
import FloatingCallButton from "../../components/FloatingCallButton";
import HalfScrollCTA from "../../components/HalfScrollCTA";
import ExitIntentCTA from "../../components/ExitIntentCTA";
import SEO from "../../components/SEO";
import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Star, ShieldCheck, Award } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Link } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    setError("");
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="bg-obsidian relative overflow-hidden">
      <SEO 
        title="Aura Plasters | Luxury Venetian Plaster Toronto"
        description="Aura Plasters is Toronto's premier studio for luxury Venetian Plaster and artisanal mineral finishes. Hand-crafted wall art for exclusive residences."
      />
      {/* Global Pigment Clouds */}
      <div className="pigment-cloud bg-emerald -top-40 -left-40 opacity-10" />
      <div className="pigment-cloud bg-lapis top-1/4 -right-40 opacity-10" />
      <div className="pigment-cloud bg-terracotta bottom-1/4 -left-40 opacity-10" />
      <div className="pigment-cloud bg-rose -bottom-40 -right-40 opacity-10" />

      <Hero />
      
      {/* Toronto Trust Section */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Toronto Projects", value: "150+", icon: MapPin, color: "text-emerald", bg: "bg-emerald/10" },
            { label: "Client Rating", value: "5.0", icon: Star, color: "text-gold", bg: "bg-gold/10" },
            { label: "Years Experience", value: "12", icon: Award, color: "text-lapis", bg: "bg-lapis/10" },
            { label: "Warranty", value: "10Y", icon: ShieldCheck, color: "text-rose", bg: "bg-rose/10" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4 group"
            >
              <div className={cn("w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110", stat.bg, stat.color)}>
                <stat.icon size={20} />
              </div>
              <div>
                <h3 className="font-serif text-4xl italic text-bone">{stat.value}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone/40">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FinishesGrid />
      <LumeSlider />
      
      {/* Studio Section */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold">The Studio</span>
              <h2 className="text-5xl md:text-7xl font-serif italic text-bone leading-tight">
                A Legacy of <br /> <span className="text-gradient">Hand-Crafted</span> Walls.
              </h2>
              <p className="text-bone/60 leading-relaxed max-w-lg">
                Founded in Toronto, Aura Plasters is a boutique studio dedicated to the revival of ancient Venetian techniques. Our artisans blend traditional lime-based recipes with modern mineral pigments to create surfaces that breathe, age, and inspire.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <Link to="/about" className="px-8 py-4 border border-gold/30 text-gold font-sans text-xs uppercase tracking-[0.3em] hover:bg-gold/5 transition-all">
                Our Philosophy
              </Link>
              <Link to="/#contact" className="px-8 py-4 bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.3em] font-bold hover:bg-emerald hover:text-bone transition-all">
                Visit Studio
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass border-white/10">
            <img 
              src="public/assets/IMG_5562.webp" 
              alt="Artisan Studio"
              className="w-full h-full object-cover opacity-70"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold block">The Gallery</span>
              <h2 className="text-5xl md:text-7xl font-serif italic text-bone">Featured <br /> <span className="text-platinum/50">Creations.</span></h2>
            </div>
            <Link to="/portfolio" className="group flex items-center gap-4 font-sans text-[10px] uppercase tracking-[0.3em] text-gold hover:text-bone transition-colors">
              View Full Archive
              <div className="w-8 h-px bg-gold group-hover:bg-bone transition-all group-hover:w-12" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Modernist TV Suite", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
              { title: "Lapis & Gold Mural", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
              { title: "Verde Antique Study", image: "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
              { title: "Celestial Hall", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
              { title: "Copper Lounge", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
              { title: "Yorkville Penthouse", image: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={cn("relative aspect-square overflow-hidden rounded-2xl group", item.span)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-gold mb-1">Featured Project</p>
                  <h4 className="font-serif text-xl italic text-bone">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=2000" 
            alt="Background Texture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold mb-4 block">Recognition</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-bone">Client Stories.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Elena V.",
                role: "Interior Designer",
                text: "Aura Plasters transformed our Bridle Path residence into a living gallery. The depth of the Marmorino finish is unlike anything we've seen in Toronto.",
              },
              {
                name: "Marcus Chen",
                role: "Architect",
                text: "Their attention to detail and understanding of mineral pigments is unparalleled. They don't just apply plaster; they sculpt light.",
              },
              {
                name: "Sarah T.",
                role: "Homeowner",
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
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <p className="font-serif text-lg italic text-bone/70 leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold">{review.name}</h4>
                  <p className="font-mono text-[8px] uppercase tracking-widest text-bone/40">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
      
      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <h3 className="font-serif text-3xl italic text-gradient">Aura Plasters</h3>
            <p className="text-xs text-bone/50 uppercase tracking-widest leading-relaxed">
              Artisanal wall finishes for the modern era. Hand-applied in Toronto, Ontario.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Pinterest", "LinkedIn"].map(s => (
                <a key={s} href="#" className="text-[10px] uppercase tracking-widest text-gold hover:text-bone transition-colors">{s}</a>
              ))}
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
              <li>Studio: 1200 Bay St, Toronto</li>
              <li>Phone: +1 (416) 555-0192</li>
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

      <FloatingCallButton />
      <HalfScrollCTA />
      <ExitIntentCTA />
    </div>
  );
}
