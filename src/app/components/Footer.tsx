export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1120] dark:bg-[#0b1120] border-t border-white/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <span
              className="text-white dark:text-white block mb-3"
              style={{ fontSize: "1.0625rem", fontWeight: 700, fontFamily: "'Sora', sans-serif" }}
            >
              Eltanin Solutions<span className="text-[#2563EB] dark:text-[#3b82f6]">.</span>
            </span>
            <p
              className="text-[#64748b] dark:text-[#64748b]"
              style={{ fontSize: "0.875rem", lineHeight: 1.7 }}
            >
              7/F, MW Tower, 111 Bonham Strand,
              <br />
              Sheung Wan, Hong Kong
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span
              className="text-[#94a3b8] dark:text-[#94a3b8] block mb-3"
              style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}
            >
              NAVIGATION
            </span>
            <div className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Process", href: "#process" },
                { label: "Why Us", href: "#benefits" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-[#64748b] dark:text-[#64748b] bg-transparent border-0 no-underline hover:text-[#cbd5e1] dark:hover:text-[#cbd5e1] transition-[color] duration-200 cursor-pointer"
                  style={{ fontSize: "0.875rem", fontWeight: 400 }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span
              className="text-[#94a3b8] dark:text-[#94a3b8] block mb-3"
              style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}
            >
              CONTACT
            </span>
            <a
              href="mailto:compliance@eltaninsolutions.org"
              className="text-[#2563EB] dark:text-[#3b82f6] no-underline bg-transparent border-0 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition-[color] duration-200"
              style={{ fontSize: "0.875rem", fontWeight: 400 }}
            >
              compliance@eltaninsolutions.org
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] dark:text-[#475569]" style={{ fontSize: "0.8125rem" }}>
            &copy; {new Date().getFullYear()} Eltanin Solutions Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}