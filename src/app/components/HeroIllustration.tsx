import { motion } from "motion/react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
        {/* Grid dots */}
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

        {/* Connection lines */}
        <motion.path
          d="M130 180 L230 130 L330 180 L280 280 L180 280 Z"
          stroke="#2563EB"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M180 130 L330 230 L230 330"
          stroke="#6366F1"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Main nodes */}
        {[
          { cx: 230, cy: 130, r: 28, delay: 0.2 },
          { cx: 130, cy: 230, r: 22, delay: 0.4 },
          { cx: 330, cy: 230, r: 22, delay: 0.6 },
          { cx: 180, cy: 330, r: 18, delay: 0.8 },
          { cx: 280, cy: 330, r: 18, delay: 1.0 },
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
            />
          </g>
        ))}

        {/* Inner node icons - simplified API/gear shapes */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {/* Top node - brackets */}
          <text
            x="230"
            y="135"
            textAnchor="middle"
            fill="#2563EB"
            style={{ fontSize: "14px", fontFamily: "monospace" }}
          >
            {"</>"}
          </text>
          {/* Left node - gear */}
          <text
            x="130"
            y="235"
            textAnchor="middle"
            fill="#6366F1"
            style={{ fontSize: "12px", fontFamily: "monospace" }}
          >
            API
          </text>
          {/* Right node */}
          <text
            x="330"
            y="235"
            textAnchor="middle"
            fill="#6366F1"
            style={{ fontSize: "12px", fontFamily: "monospace" }}
          >
            SYS
          </text>
        </motion.g>

        {/* Flowing data particles */}
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
          />
        ))}

        {/* Outer ring */}
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
          style={{ transformOrigin: "230px 230px" }}
        />
      </svg>
    </div>
  );
}
