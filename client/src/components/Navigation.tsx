import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  scrolled: boolean;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Innovation", href: "#innovation" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <span
                className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-navy" : "text-ivory"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pennington
              </span>
              <span
                className={`text-lg md:text-xl font-light tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-gold" : "text-gold"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hennessy
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:text-gold ${
                    scrolled ? "text-charcoal/70" : "text-ivory/80"
                  }`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  mobileOpen
                    ? `rotate-45 translate-y-[3.5px] ${scrolled ? "bg-navy" : "bg-ivory"}`
                    : scrolled
                    ? "bg-navy"
                    : "bg-ivory"
                }`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  mobileOpen
                    ? `opacity-0 ${scrolled ? "bg-navy" : "bg-ivory"}`
                    : scrolled
                    ? "bg-navy"
                    : "bg-ivory"
                }`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  mobileOpen
                    ? `-rotate-45 -translate-y-[3.5px] ${scrolled ? "bg-navy" : "bg-ivory"}`
                    : scrolled
                    ? "bg-navy"
                    : "bg-ivory"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy pt-20"
          >
            <nav className="container flex flex-col gap-6 pt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl font-bold text-ivory hover:text-gold transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-8 pt-8 border-t border-ivory/20">
                <p className="text-ivory/60 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  jamie@penningtonhennessy.com
                </p>
                <p className="text-ivory/60 text-sm mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  07887 536309
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
