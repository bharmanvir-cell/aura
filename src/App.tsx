import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useSpring, useMotionValue } from "motion/react";
import { Menu, X, Paintbrush, Home as HomeIcon, Ruler, Shield, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";

import PageTransition from "./components/PageTransition";

// Pages - Lazy Loaded
const Home = lazy(() => import("./pages/home"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const About = lazy(() => import("./pages/about"));
const Success = lazy(() => import("./pages/success"));
const NotFound = lazy(() => import("./pages/not-found"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Gallery", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Finishes", path: "/#finishes" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-[background-color,padding,backdrop-filter] duration-500 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" aria-label="Aura Plasters Home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
            <span className="font-serif text-xl group-hover:text-obsidian transition-colors">A</span>
          </div>
          <span className="font-serif text-2xl tracking-widest uppercase text-gradient">Aura Plasters</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              aria-label={`Go to ${link.name} page`}
              className={cn(
                "font-sans text-xs uppercase tracking-[0.2em] transition-colors relative group",
                location.pathname === link.path ? "text-gold" : "text-bone/70 hover:text-bone"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold via-terracotta to-emerald group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
          <Link 
            to="/#contact" 
            aria-label="Book a free consultation"
            className="px-6 py-2 border border-gold/30 hover:border-emerald text-xs uppercase tracking-widest transition-all hover:bg-emerald/10 hover:text-emerald"
          >
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl text-bone hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 192);
      mouseY.set(e.clientY - 192);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor-glow pointer-events-none"
      style={{
        x,
        y,
        willChange: "transform",
      }}
    />
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="min-h-screen bg-obsidian" />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/success" element={<PageTransition><Success /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
