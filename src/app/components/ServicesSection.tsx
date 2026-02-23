import { motion } from "motion/react";
import {
  PackageSearch,
  FileCheck2,
  Plug,
  RefreshCw,
  Users,
  HeadsetIcon,
} from "lucide-react";

const services = [
  {
    icon: PackageSearch,
    title: "Software Reselling & Distribution",
    text: "We commercially source and resell digital software solutions from developers and technology providers to licensed operators and business clients. We align product capabilities with business needs, structure distribution frameworks, and ensure each engagement is commercially and operationally clear.",
  },
  {
    icon: FileCheck2,
    title: "Licensing & Documentation Alignment",
    text: "We coordinate licensing workflows and required documentation to support structured and compliant deployment — including agreement coordination, scope of use alignment, documentation oversight, and deployment readiness support.",
  },
  {
    icon: Plug,
    title: "Technical Integration & Implementation",
    text: "We actively support integration and onboarding processes: API and system integration coordination, configuration and deployment assistance, testing and staging support, milestone tracking, and troubleshooting.",
  },
  {
    icon: RefreshCw,
    title: "Software Updates & Development Support",
    text: "Where needed, we assist with software configuration adjustments, feature refinements, upgrades and patch coordination, enhancement requests, and performance optimisation — collaborating with developers and client technical teams.",
  },
  {
    icon: Users,
    title: "Vendor & Stakeholder Coordination",
    text: "We act as a structured coordination layer between developers, service providers, technical teams, and licensed clients — reducing communication friction and improving accountability across the delivery chain.",
  },
  {
    icon: HeadsetIcon,
    title: "Post-Launch Operational & Technical Support",
    text: "Deployment is only the beginning. We remain involved to support troubleshooting, upgrade management, vendor communication, operational continuity, and performance oversight.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#0F172A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-[#2563EB] uppercase tracking-[0.15em] mb-4 block"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            What We Do
          </span>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.25 }}
          >
            End-to-End Software Delivery Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative bg-[#1e293b]/50 border border-slate-800 rounded-xl p-7 hover:border-[#2563EB]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563EB]/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/20 transition-colors">
                <service.icon className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3
                className="text-white mb-3"
                style={{ fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.4 }}
              >
                {service.title}
              </h3>
              <p
                className="text-slate-400"
                style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}
              >
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
