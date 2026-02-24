import { motion } from "motion/react";
import { Check } from "lucide-react";

const benefits = [
  "Structured software distribution",
  "Clear commercial frameworks",
  "Hands-on technical coordination",
  "Reduced administrative friction",
  "Cross-border operational alignment",
  "Ongoing post-deployment support",
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white dark:bg-[#0F172A] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="transform-gpu backface-hidden"
        >
          <span
            className="text-[#2563EB] dark:text-[#3b82f6] uppercase tracking-[0.15em] mb-4 block"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            Why Partner With Us
          </span>
          <h2
            className="text-[#0F172A] dark:text-white mb-12"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.25, fontFamily: "'Sora', sans-serif" }}
          >
            Built for Reliable Software Delivery
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              className="flex items-start gap-3 transform-gpu backface-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/15 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3b82f6]" />
              </div>
              <span
                className="text-[#334155] dark:text-[#cbd5e1]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
              >
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-[#64748b] dark:text-[#94a3b8] max-w-xl mx-auto"
          style={{ fontSize: "1rem", lineHeight: 1.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          We combine commercial distribution capability with technical execution
          support — so software delivery becomes predictable, efficient, and
          scalable.
        </motion.p>
      </div>
    </section>
  );
}