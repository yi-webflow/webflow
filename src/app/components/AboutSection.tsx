import { motion } from "motion/react";

function WorkflowIllustration() {
  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto" fill="none">
      {/* Flow blocks — opacity + translateY only (composite) */}
      {[
        { x: 60, y: 80, w: 120, h: 50, label: "Source", delay: 0.2 },
        { x: 220, y: 80, w: 120, h: 50, label: "License", delay: 0.4 },
        { x: 140, y: 180, w: 120, h: 50, label: "Integrate", delay: 0.6 },
        { x: 60, y: 280, w: 120, h: 50, label: "Deploy", delay: 0.8 },
        { x: 220, y: 280, w: 120, h: 50, label: "Support", delay: 1.0 },
      ].map((block, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: block.delay, duration: 0.5 }}
        >
          <rect
            x={block.x}
            y={block.y}
            width={block.w}
            height={block.h}
            rx="8"
            fill="#0F172A"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <text
            x={block.x + block.w / 2}
            y={block.y + block.h / 2 + 4}
            textAnchor="middle"
            fill="#94a3b8"
            style={{ fontSize: "12px", fontFamily: "Inter, sans-serif" }}
          >
            {block.label}
          </text>
        </motion.g>
      ))}

      {/* Connecting arrows — pathLength + opacity only */}
      {[
        "M180 105 L220 105",
        "M180 105 L200 180",
        "M200 230 L120 280",
        "M200 230 L280 280",
      ].map((d, i) => (
        <motion.path
          key={`arrow-${i}`}
          d={d}
          stroke="#2563EB"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.3, duration: 0.8 }}
        />
      ))}

      {/* Decorative circles — opacity only */}
      <motion.circle
        cx="200"
        cy="200"
        r="160"
        stroke="#1e293b"
        strokeWidth="0.5"
        strokeDasharray="2 8"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-[#F8FAFC] dark:bg-[#1e293b] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text — translateX + opacity only */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="transform-gpu backface-hidden"
          >
            <span
              className="text-[#2563EB] dark:text-[#3b82f6] uppercase tracking-[0.15em] mb-4 block"
              style={{ fontSize: "0.75rem", fontWeight: 600 }}
            >
              About Us
            </span>
            <h2
              className="text-[#0F172A] dark:text-white mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.25, fontFamily: "'Sora', sans-serif" }}
            >
              Software Distribution Meets{" "}
              <span className="text-[#2563EB] dark:text-[#3b82f6]">Operational Execution</span>
            </h2>
            <p
              className="text-[#475569] dark:text-[#94a3b8] mb-5"
              style={{ fontSize: "1rem", lineHeight: 1.8 }}
            >
              Eltanin Solutions Limited is a B2B technology services company
              operating at the intersection of software distribution and
              operational execution.
            </p>
            <p
              className="text-[#475569] dark:text-[#94a3b8] mb-5"
              style={{ fontSize: "1rem", lineHeight: 1.8 }}
            >
              We act as a commercial software reseller, connecting proven digital
              solutions with licensed business clients. But we go further than
              distribution alone.
            </p>
            <p
              className="text-[#475569] dark:text-[#94a3b8] mb-8"
              style={{ fontSize: "1rem", lineHeight: 1.8 }}
            >
              From licensing coordination and documentation structuring to
              integration support, software adjustments, and ongoing technical
              oversight — we ensure that digital products are not only delivered,
              but successfully implemented and maintained.
            </p>
            <div className="border-l-2 border-[#2563EB] dark:border-[#3b82f6] pl-5">
              <p
                className="text-[#0F172A] dark:text-white italic"
                style={{ fontSize: "1.0625rem", fontWeight: 500, lineHeight: 1.6 }}
              >
                "Our mission is simple: make software distribution structured,
                efficient, and friction-free."
              </p>
            </div>
          </motion.div>

          {/* Right: Illustration — translateX + opacity only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0F172A] dark:bg-[#0F172A] rounded-2xl p-8 transform-gpu backface-hidden"
          >
            <WorkflowIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}