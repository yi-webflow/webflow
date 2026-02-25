import { useRef } from "react";
import { useInView } from "motion/react";
import { SearchIcon } from "./icons/SearchIcon";
import { PeopleIcon } from "./icons/PeopleIcon";
import { RocketIcon } from "./icons/RocketIcon";
import { HeadsetIcon } from "./icons/HeadsetIcon";

const steps = [
  {
    icon: SearchIcon,
    number: "01",
    title: "Assess & Structure",
    text: "We evaluate requirements and define a clear commercial and technical framework.",
  },
  {
    icon: PeopleIcon,
    number: "02",
    title: "Align & Coordinate",
    text: "We synchronise stakeholders, documentation, and timelines.",
  },
  {
    icon: RocketIcon,
    number: "03",
    title: "Integrate & Deploy",
    text: "We support structured technical implementation and onboarding.",
  },
  {
    icon: HeadsetIcon,
    number: "04",
    title: "Support & Optimise",
    text: "We remain engaged to ensure stability, performance, and scalability.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-[#F8FAFC] dark:bg-[#1e293b] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>
        {/* Section heading */}
        <div
          className="text-center mb-16 transition-[opacity,transform] duration-700 transform-gpu"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
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
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline base line — static */}
            <div className="absolute top-12 left-0 right-0 h-px bg-[#e2e8f0] dark:bg-[#334155]" />
            {/* Animated timeline — CSS scaleX transition */}
            <div
              className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-[#2563EB] to-[#6366F1] origin-left transition-transform duration-[1500ms] ease-out transform-gpu"
              style={{
                transform: isInView ? "scaleX(1)" : "scaleX(0)",
              }}
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative text-center transition-[opacity,transform] duration-500 transform-gpu"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: isInView ? `${300 + i * 200}ms` : "0ms",
                  }}
                >
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Steps */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex gap-5 transition-[opacity,transform] duration-500 transform-gpu"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-20px)",
                transitionDelay: isInView ? `${i * 150}ms` : "0ms",
              }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
