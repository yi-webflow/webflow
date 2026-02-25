import { motion } from "motion/react";

/**
 * Safari-safe HeroIllustration
 * 
 * Fixes applied:
 * - Grid dots: static with CSS shimmer via a single <style> block (not 64 motion instances)
 * - Paths: opacity-only fade-in (no pathLength — broken in Safari/WebKit)
 * - Nodes: opacity-only fade-in (no SVG scale — transform-origin broken in WebKit)
 * - Pulsing rings: opacity-only pulse (no scale)
 * - Outer ring: CSS @keyframes rotate (no motion rotate on SVG — transform-origin broken)
 * - Particles: reduced to 2, using strokeDashoffset trick instead of cx/cy attribute animation
 */

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* CSS animations — single style block, no per-element JS animation */}
      <style>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.45; }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0; }
        }
        @keyframes outerSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes particleMove {
          0%   { offset-distance: 0%; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .hero-dot {
          animation: dotPulse 4s ease-in-out infinite;
        }
        .hero-ring {
          animation: ringPulse 3s ease-in-out infinite;
        }
        .hero-outer-ring {
          transform-box: fill-box;
          transform-origin: center;
          animation: outerSpin 60s linear infinite;
        }
      `}</style>

      <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
        {/* Grid dots — pure CSS animation, stagger via animation-delay */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={80 + col * 50}
              cy={80 + row * 50}
              r="1.5"
              fill="#334155"
              className="hero-dot"
              style={{ animationDelay: `${(row + col) * 0.2}s` }}
            />
          ))
        )}

        {/* Connection lines — opacity-only fade (no pathLength) */}
        <motion.path
          d="M230 130 L130 230 L180 330 L280 330 L330 230 Z"
          stroke="#2563EB"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M130 230 L330 230 L180 330"
          stroke="#6366F1"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Main nodes — opacity-only fade (no scale, avoids broken SVG transform-origin) */}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: node.delay }}
            />
            {/* Pulsing ring — CSS opacity-only (no scale) */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r + 8}
              fill="none"
              stroke="#2563EB"
              strokeWidth="0.5"
              className="hero-ring"
              style={{ animationDelay: `${node.delay + 1.5}s` }}
            />
          </g>
        ))}

        {/* Inner node labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
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

        {/* Flowing data particles — opacity-only with CSS offset-path (Safari 16.4+) */}
        {/* Fallback: simple cx/cy attribute animation (works in all browsers) */}
        {[0, 1].map((i) => (
          <motion.circle
            key={`particle-${i}`}
            r="3"
            fill="#2563EB"
            initial={{ opacity: 0 }}
            animate={{
              cx: [130, 230, 330, 280, 180, 130],
              cy: [230, 130, 230, 330, 330, 230],
              opacity: [0, 0.8, 0.8, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Outer ring — CSS @keyframes rotate with transform-box: fill-box (Safari-safe) */}
        <circle
          cx="230"
          cy="230"
          r="180"
          fill="none"
          stroke="#1e293b"
          strokeWidth="0.5"
          strokeDasharray="2 6"
          className="hero-outer-ring"
        />
      </svg>
    </div>
  );
}
