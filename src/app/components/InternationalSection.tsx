import { motion } from "motion/react";
import { Globe } from "lucide-react";

function WorldMapSVG() {
  return (
    <svg
      viewBox="0 0 1000 500"
      className="absolute inset-0 w-full h-full opacity-[0.04]"
      fill="none"
    >
      {/* North America */}
      {[
        [180, 120], [200, 110], [220, 115], [240, 120], [200, 140],
        [220, 135], [240, 140], [260, 145], [210, 160], [230, 155],
        [250, 165], [220, 180], [240, 175], [260, 170], [280, 160],
        [190, 130], [210, 125], [230, 130], [250, 135], [270, 130],
      ].map(([cx, cy], i) => (
        <circle key={`na-${i}`} cx={cx} cy={cy} r="4" fill="#2563EB" />
      ))}
      {/* Europe */}
      {[
        [470, 110], [490, 105], [510, 110], [530, 115], [480, 130],
        [500, 125], [520, 130], [540, 135], [490, 150], [510, 145],
        [530, 155], [470, 140], [500, 155], [520, 160], [510, 170],
      ].map(([cx, cy], i) => (
        <circle key={`eu-${i}`} cx={cx} cy={cy} r="4" fill="#2563EB" />
      ))}
      {/* Africa */}
      {[
        [490, 220], [510, 215], [500, 240], [520, 235], [510, 260],
        [500, 280], [510, 295], [495, 250], [515, 250], [505, 270],
        [490, 200], [510, 200], [520, 210], [500, 310], [510, 320],
      ].map(([cx, cy], i) => (
        <circle key={`af-${i}`} cx={cx} cy={cy} r="4" fill="#2563EB" />
      ))}
      {/* Asia */}
      {[
        [580, 120], [600, 115], [620, 120], [640, 130], [660, 125],
        [680, 130], [700, 135], [720, 140], [600, 140], [620, 145],
        [640, 150], [660, 155], [680, 160], [640, 170], [660, 175],
        [680, 180], [620, 165], [700, 170], [720, 160], [740, 150],
        [590, 135], [610, 130], [630, 135], [650, 140], [670, 145],
      ].map(([cx, cy], i) => (
        <circle key={`as-${i}`} cx={cx} cy={cy} r="4" fill="#2563EB" />
      ))}
      {/* South America */}
      {[
        [280, 250], [300, 245], [290, 270], [300, 285], [295, 305],
        [285, 320], [280, 340], [275, 360], [290, 260], [295, 290],
        [288, 330], [270, 350], [282, 375],
      ].map(([cx, cy], i) => (
        <circle key={`sa-${i}`} cx={cx} cy={cy} r="4" fill="#2563EB" />
      ))}
      {/* Australia */}
      {[
        [750, 310], [770, 305], [790, 310], [760, 325], [780, 320],
        [800, 325], [770, 340], [790, 335], [810, 315],
      ].map(([cx, cy], i) => (
        <circle key={`au-${i}`} cx={cx} cy={cy} r="4" fill="#2563EB" />
      ))}
      {/* Connection arcs */}
      <path
        d="M240 150 Q 360 50 490 130"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.3"
      />
      <path
        d="M510 145 Q 580 120 640 140"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.3"
      />
      <path
        d="M640 170 Q 700 250 770 310"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.3"
      />
    </svg>
  );
}

export function InternationalSection() {
  return (
    <section className="relative bg-[#F8FAFC] dark:bg-[#1e293b] py-24 lg:py-32 overflow-hidden">
      <WorldMapSVG />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="transform-gpu backface-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/10 dark:bg-[#2563EB]/15 flex items-center justify-center mx-auto mb-6">
            <Globe className="w-7 h-7 text-[#2563EB] dark:text-[#3b82f6]" />
          </div>

          <span
            className="text-[#2563EB] dark:text-[#3b82f6] uppercase tracking-[0.15em] mb-4 block"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            International Focus
          </span>
          <h2
            className="text-[#0F172A] dark:text-white mb-6"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.25, fontFamily: "'Sora', sans-serif" }}
          >
            Cross-Border Operations, Structured Delivery
          </h2>
          <p
            className="text-[#475569] dark:text-[#94a3b8] max-w-2xl mx-auto"
            style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}
          >
            We support cross-border digital operations and structured software
            deployment across multiple jurisdictions, helping businesses scale
            into new markets with operational clarity and technical consistency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}