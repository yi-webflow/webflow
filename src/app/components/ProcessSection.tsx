import { motion } from "motion/react";
import { Search, GitMerge, Rocket, Shield } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Assess & Structure",
    text: "We evaluate requirements and define a clear commercial and technical framework.",
  },
  {
    icon: GitMerge,
    number: "02",
    title: "Align & Coordinate",
    text: "We synchronise stakeholders, documentation, and timelines.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Integrate & Deploy",
    text: "We support structured technical implementation and onboarding.",
  },
  {
    icon: Shield,
    number: "04",
    title: "Support & Optimise",
    text: "We remain engaged to ensure stability, performance, and scalability.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#F8FAFC] dark:bg-[#1e293b] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16 transform-gpu backface-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-[#2563EB] dark:text-[#3b82f6] uppercase tracking-[0.15em] mb-4 block"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            How We Work
          </span>
          <h2
            className="text-[#0F172A] dark:text-white"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.25, fontFamily: "'Sora', sans-serif" }}
          >
            A Structured Approach to Delivery
          </h2>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline base line — static */}
            <div className="absolute top-12 left-0 right-0 h-px bg-[#e2e8f0] dark:bg-[#334155]" />
            {/* Animated timeline — uses scaleX (composite) instead of width */}
            <motion.div
              className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-[#2563EB] to-[#6366F1] origin-left transform-gpu backface-hidden"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative text-center transform-gpu backface-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                >
                  {/* Node — static shadow only (no animated shadow) */}
                  <div className="relative mx-auto w-24 h-24 mb-6">
                    <div className="absolute inset-0 rounded-full bg-white dark:bg-[#0F172A] border-2 border-[#e2e8f0] dark:border-[#334155] flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-[#2563EB] dark:text-[#3b82f6]" />
                    </div>
                  </div>

                  <span
                    className="text-[#2563EB] dark:text-[#3b82f6] block mb-2"
                    style={{ fontSize: "0.75rem", fontWeight: 600 }}
                  >
                    Step {step.number}
                  </span>
                  <h3
                    className="text-[#0F172A] dark:text-white mb-2"
                    style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.4, fontFamily: "'Sora', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#64748b] dark:text-[#94a3b8] max-w-[200px] mx-auto"
                    style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
                  >
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Steps */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-5 transform-gpu backface-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#0F172A] border-2 border-[#e2e8f0] dark:border-[#334155] flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#2563EB] dark:text-[#3b82f6]" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-[#e2e8f0] dark:bg-[#334155] mx-auto mt-2" />
                )}
              </div>
              <div className="pt-1">
                <span
                  className="text-[#2563EB] dark:text-[#3b82f6] block mb-1"
                  style={{ fontSize: "0.75rem", fontWeight: 600 }}
                >
                  Step {step.number}
                </span>
                <h3
                  className="text-[#0F172A] dark:text-white mb-1"
                  style={{ fontSize: "1.0625rem", fontWeight: 600, fontFamily: "'Sora', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#64748b] dark:text-[#94a3b8]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
                >
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}