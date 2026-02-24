import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CTA_GRADIENT = "linear-gradient(90deg, #707CFF 0%, #002BFF 99.99%)";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 dark:bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-white dark:text-white no-underline bg-transparent border-0 transform-gpu backface-hidden"
          style={{ fontWeight: 700, fontSize: "1.125rem", fontFamily: "'Sora', sans-serif" }}
        >
          Eltanin<span className="text-[#2563EB] dark:text-[#2563EB]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[#94a3b8] dark:text-[#94a3b8] bg-transparent border-0 no-underline hover:text-white dark:hover:text-white transition-[color] duration-200 cursor-pointer transform-gpu backface-hidden"
              style={{ fontSize: "0.875rem", fontWeight: 400 }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:compliance@eltaninsolutions.org"
            className="text-white dark:text-white no-underline border border-transparent px-5 py-2 rounded-lg hover:opacity-90 transition-[opacity,transform] duration-200 hover:scale-[1.02] transform-gpu backface-hidden"
            style={{ fontSize: "0.875rem", fontWeight: 500, background: CTA_GRADIENT }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden text-white dark:text-white bg-transparent border-0 cursor-pointer transform-gpu backface-hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu — animate with opacity + translateY only (composite props) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0F172A] dark:bg-[#0F172A] border-b border-white/5 dark:border-white/5 overflow-hidden transform-gpu backface-hidden will-change-transform"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[#94a3b8] dark:text-[#94a3b8] bg-transparent border-0 no-underline hover:text-white dark:hover:text-white transition-[color] duration-200 text-left cursor-pointer transform-gpu backface-hidden"
                  style={{ fontSize: "0.875rem", fontWeight: 400 }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:compliance@eltaninsolutions.org"
                className="text-white dark:text-white no-underline border border-transparent px-5 py-2.5 rounded-lg text-center hover:opacity-90 transition-[opacity] duration-200 transform-gpu backface-hidden"
                style={{ fontSize: "0.875rem", fontWeight: 500, background: CTA_GRADIENT }}
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
