import { useRef } from "react";
import { useInView } from "motion/react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="bg-white dark:bg-[#0F172A] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center" ref={sectionRef}>
        <div
          className="transition-[opacity,transform] duration-700 transform-gpu"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
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
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, i) => (
            <div
              key={benefit}
              className="flex items-start gap-3 transition-[opacity,transform] duration-500 transform-gpu"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(10px)",
                transitionDelay: isInView ? `${200 + i * 80}ms` : "0ms",
              }}
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
            </div>
          ))}
        </div>

        <p
          className="text-[#64748b] dark:text-[#94a3b8] max-w-xl mx-auto transition-opacity duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transitionDelay: isInView ? "700ms" : "0ms",
          }}
        >
          We combine commercial distribution capability with technical execution
          support — so software delivery becomes predictable, efficient, and
          scalable.
        </p>
      </div>
    </section>
  );
}
