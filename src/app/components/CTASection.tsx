import { motion } from "motion/react";

export function CTASection() {
  return (
    <section className="relative bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563EB]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-white mb-6"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Software Delivered{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#6366F1] bg-clip-text text-transparent">
              Properly
            </span>
            .
          </h2>
          <p
            className="text-slate-400 max-w-xl mx-auto mb-4"
            style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            Not just sold. Not just integrated. Structured, supported, and
            sustained.
          </p>
          <p
            className="text-slate-500 max-w-lg mx-auto mb-10"
            style={{ fontSize: "1rem", lineHeight: 1.7 }}
          >
            If you need a partner who understands both distribution and technical
            execution — we are ready to collaborate.
          </p>
          <a
            href="mailto:compliance@eltaninsolutions.org"
            className="inline-flex items-center bg-[#2563EB] text-white px-8 py-4 rounded-lg hover:bg-[#1d4ed8] transition-all hover:shadow-lg hover:shadow-[#2563EB]/25"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
