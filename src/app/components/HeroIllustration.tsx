import { motion } from "motion/react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px] transform-gpu backface-hidden">
      <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
        {/* Grid dots — opacity-only animation (composite) */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <motion.circle
              key={`dot-${row}-${col}`}
              cx={80 + col * 50}
              cy={80 + row * 50}
              r="1.5"
              fill="#334155"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 3,
                delay: (row + col) * 0.15,
                repeat: Infinity,
              }}
            />
          ))
        )}

        {/* Connection lines — opacity + pathLength only */}
        <motion.path
          d="M230 130 L130 230 L180 330 L280 330 L330 230 Z"
          stroke="#2563EB"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M130 230 L330 230 L180 330"
          stroke="#6366F1"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Main nodes — scale + opacity only (composite) */}
        {[
          { cx: 230, cy: 130, r: 28, delay: 0.2 },
          { cx: 130, cy: 230, r: 22, delay: 0.4 },
          { cx: 330, cy: 230, r: 22, delay: 0.6 },
          { cx: 180, cy: 330, r: 22, delay: 0.8 },
          { cx: 280, cy: 330, r: 22, delay: 1.0 },
        ].map((node, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="#0F172A"
              stroke="#2563EB"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: node.delay }}
            />
            {/* Pulsing ring — scale + opacity only, with will-change for continuous anim */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r + 8}
              fill="none"
              stroke="#2563EB"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{
                duration: 3,
                delay: node.delay + 1,
                repeat: Infinity,
              }}
              style={{ willChange: "transform, opacity" }}
            />
          </g>
        ))}

        {/* Inner node icons */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <text
            x="230"
            y="135"
            textAnchor="middle"
            fill="#2563EB"
            style={{ fontSize: "14px", fontFamily: "monospace" }}
          >
            {"</>"}
          </text>
          <text
            x="130"
            y="235"
            textAnchor="middle"
            fill="#6366F1"
            style={{ fontSize: "12px", fontFamily: "monospace" }}
          >
            API
          </text>
          <text
            x="330"
            y="235"
            textAnchor="middle"
            fill="#6366F1"
            style={{ fontSize: "12px", fontFamily: "monospace" }}
          >
            SYS
          </text>
          <text
            x="180"
            y="335"
            textAnchor="middle"
            fill="#6366F1"
            style={{ fontSize: "12px", fontFamily: "monospace" }}
          >
            OPS
          </text>
          <text
            x="280"
            y="335"
            textAnchor="middle"
            fill="#6366F1"
            style={{ fontSize: "12px", fontFamily: "monospace" }}
          >
            SLA
          </text>
        </motion.g>

        {/* Flowing data particles — translate + opacity only (composite) */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`particle-${i}`}
            r="3"
            fill="#2563EB"
            initial={{ opacity: 0 }}
            animate={{
              cx: [130, 230, 330, 280, 180, 130],
              cy: [230, 130, 230, 330, 330, 230],
              opacity: [0, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ willChange: "transform, opacity" }}
          />
        ))}

        {/* Outer ring — rotate only (composite), with will-change for continuous */}
        <motion.circle
          cx="230"
          cy="230"
          r="180"
          fill="none"
          stroke="#1e293b"
          strokeWidth="0.5"
          strokeDasharray="2 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "230px 230px", willChange: "transform" }}
        />
      </svg>
    </div>
  );
}