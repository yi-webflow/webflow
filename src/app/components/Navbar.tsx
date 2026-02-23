import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#benefits" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white tracking-tight" style={{ fontWeight: 700, fontSize: "1.125rem" }}>
          Eltanin<span className="text-[#2563EB]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              style={{ fontSize: "0.875rem", fontWeight: 400 }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:compliance@eltaninsolutions.org"
            className="bg-[#2563EB] text-white px-5 py-2 rounded-lg hover:bg-[#1d4ed8] transition-colors"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                  style={{ fontSize: "0.875rem" }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:compliance@eltaninsolutions.org"
                className="bg-[#2563EB] text-white px-5 py-2.5 rounded-lg text-center hover:bg-[#1d4ed8] transition-colors"
                style={{ fontSize: "0.875rem", fontWeight: 500 }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
