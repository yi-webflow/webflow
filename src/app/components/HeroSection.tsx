import { motion } from "motion/react";
import { HeroIllustration } from "./HeroIllustration";

const CTA_GRADIENT = "linear-gradient(90deg, #707CFF 0%, #002BFF 99.99%)";

export function HeroSection() {
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0F172A] dark:bg-[#0F172A] min-h-screen flex items-center overflow-hidden">
      {/* Subtle background gradient — static, no animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content — opacity + translateY only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="transform-gpu backface-hidden"
          >
            <motion.span
              className="inline-block text-[#2563EB] dark:text-[#2563EB] tracking-[0.2em] uppercase mb-6"
              style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.2em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Structured. Reliable. Scalable.
            </motion.span>

            <h1
              className="text-white dark:text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, lineHeight: 1.15, fontFamily: "'Sora', sans-serif" }}
            >
              B2B Software Resale &{" "}
              <span className="bg-gradient-to-r from-[#707CFF] to-[#002BFF] bg-clip-text text-transparent">
                Technical Delivery
              </span>{" "}
              Partner
            </h1>

            <p
              className="text-[#94a3b8] dark:text-[#94a3b8] mb-4"
              style={{ fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.6 }}
            >
              From sourcing to deployment — and beyond.
            </p>

            <p
              className="text-[#64748b] dark:text-[#64748b] max-w-lg mb-10"
              style={{ fontSize: "1rem", lineHeight: 1.7 }}
            >
              We resell digital software solutions and provide the technical,
              operational, and licensing support required to deliver them smoothly
              across international markets.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Primary CTA — gradient background, no shadow animation */}
              <a
                href="mailto:compliance@eltaninsolutions.org"
                className="inline-flex items-center text-white dark:text-white no-underline border border-transparent px-7 py-3.5 rounded-lg hover:opacity-90 hover:scale-[1.02] transition-[opacity,transform] duration-200 transform-gpu backface-hidden"
                style={{ fontSize: "0.9375rem", fontWeight: 500, background: CTA_GRADIENT }}
              >
                Contact Us
              </a>
              {/* Secondary CTA — border-transparent base prevents jank, explicit colors */}
              <button
                onClick={scrollToServices}
                className="inline-flex items-center bg-transparent dark:bg-transparent border border-[#334155] dark:border-[#334155] text-[#cbd5e1] dark:text-[#cbd5e1] no-underline px-7 py-3.5 rounded-lg hover:border-[#64748b] dark:hover:border-[#64748b] hover:text-white dark:hover:text-white hover:scale-[1.02] transition-[border-color,color,transform] duration-200 cursor-pointer transform-gpu backface-hidden"
                style={{ fontSize: "0.9375rem", fontWeight: 500 }}
              >
                Explore Our Services
              </button>
            </div>
          </motion.div>

          {/* Right: Illustration — opacity + scale only */}
          <motion.div
            className="hidden lg:block transform-gpu backface-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
