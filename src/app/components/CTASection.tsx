import { motion } from "motion/react";

const CTA_GRADIENT = "linear-gradient(90deg, #707CFF 0%, #002BFF 99.99%)";

export function CTASection() {
  return (
    <section className="relative bg-[#0F172A] dark:bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      {/* Background glow — static, no animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563EB]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="transform-gpu backface-hidden"
        >
          <h2
            className="text-white dark:text-white mb-6"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.2, fontFamily: "'Sora', sans-serif" }}
          >
            Software Delivered{" "}
            <span className="bg-gradient-to-r from-[#707CFF] to-[#002BFF] bg-clip-text text-transparent">
              Properly
            </span>
            .
          </h2>
          <p
            className="text-[#94a3b8] dark:text-[#94a3b8] max-w-xl mx-auto mb-4"
            style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            Not just sold. Not just integrated. Structured, supported, and
            sustained.
          </p>
          <p
            className="text-[#64748b] dark:text-[#64748b] max-w-lg mx-auto mb-10"
            style={{ fontSize: "1rem", lineHeight: 1.7 }}
          >
            If you need a partner who understands both distribution and technical
            execution — we are ready to collaborate.
          </p>
          {/* CTA — gradient background, hover via opacity + scale (composite only) */}
          <a
            href="mailto:compliance@eltaninsolutions.org"
            className="inline-flex items-center text-white dark:text-white no-underline border border-transparent px-8 py-4 rounded-lg hover:opacity-90 hover:scale-[1.03] transition-[opacity,transform] duration-200 transform-gpu backface-hidden"
            style={{ fontSize: "1rem", fontWeight: 500, background: CTA_GRADIENT }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
