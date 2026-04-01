import { useState } from "react";
import { motion } from "motion/react";
import { Send, User, Mail, Phone, MessageSquare, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export default function LeadForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    details: ""
  });

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", details: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone format (min 10 digits)";
      isValid = false;
    }

    if (!formData.details.trim()) {
      newErrors.details = "Project details are required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate("/success");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=2000" 
          alt="Mineral Texture"
          loading="lazy"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold block">Consultation</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-bone">Start Your <br />Transformation.</h2>
            <p className="font-sans text-bone/50 text-xs uppercase tracking-widest leading-relaxed max-w-md">
              Whether it's a residential feature wall or a full-scale commercial project, our artisans are ready to bring your vision to life with Toronto's finest mineral finishes.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 glass rounded-2xl border-white/5 group hover:border-gold/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center text-emerald">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="font-serif text-xl italic mb-1">Bespoke Design</h4>
                <p className="text-[10px] text-bone/40 uppercase tracking-widest">Custom color matching and texture sampling.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 glass rounded-2xl border-white/5 group hover:border-lapis/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-lapis/10 flex items-center justify-center text-lapis">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="font-serif text-xl italic mb-1">Artisan Execution</h4>
                <p className="text-[10px] text-bone/40 uppercase tracking-widest">Master-level application by Toronto's elite.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl border-gold/20 relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="full-name" className="font-mono text-[10px] uppercase tracking-widest text-gold/70">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-bone/30" size={16} />
                  <input 
                    id="full-name"
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className={cn(
                      "w-full bg-white/5 border rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-colors",
                      errors.name ? "border-rose/50 focus:border-rose" : "border-white/10 focus:border-gold"
                    )}
                  />
                </div>
                {errors.name && <p className="text-[8px] text-rose uppercase tracking-widest">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email-address" className="font-mono text-[10px] uppercase tracking-widest text-gold/70">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-bone/30" size={16} />
                  <input 
                    id="email-address"
                    type="text" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={cn(
                      "w-full bg-white/5 border rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-colors",
                      errors.email ? "border-rose/50 focus:border-rose" : "border-white/10 focus:border-gold"
                    )}
                  />
                </div>
                {errors.email && <p className="text-[8px] text-rose uppercase tracking-widest">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone-number" className="font-mono text-[10px] uppercase tracking-widest text-gold/70">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-bone/30" size={16} />
                <input 
                  id="phone-number"
                  type="text" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (416) 000-0000"
                  className={cn(
                    "w-full bg-white/5 border rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-colors",
                    errors.phone ? "border-rose/50 focus:border-rose" : "border-white/10 focus:border-gold"
                  )}
                />
              </div>
              {errors.phone && <p className="text-[8px] text-rose uppercase tracking-widest">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="project-details" className="font-mono text-[10px] uppercase tracking-widest text-gold/70">Project Details</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-bone/30" size={16} />
                <textarea 
                  id="project-details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about your space..."
                  className={cn(
                    "w-full bg-white/5 border rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-colors resize-none",
                    errors.details ? "border-rose/50 focus:border-rose" : "border-white/10 focus:border-gold"
                  )}
                />
              </div>
              {errors.details && <p className="text-[8px] text-rose uppercase tracking-widest">{errors.details}</p>}
            </div>

            <button 
              disabled={isSubmitting}
              className={cn(
                "w-full py-4 bg-gradient-to-r from-gold to-terracotta text-obsidian font-sans text-xs uppercase tracking-[0.3em] font-bold hover:from-emerald hover:to-lapis hover:text-bone transition-all duration-700 flex items-center justify-center gap-4",
                isSubmitting && "opacity-50 cursor-not-allowed"
              )}
            >
              {isSubmitting ? "Processing..." : "Submit Inquiry"}
              {!isSubmitting && <Send size={16} />}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
