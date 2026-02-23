export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1120] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <span
              className="text-white block mb-3"
              style={{ fontSize: "1.0625rem", fontWeight: 700 }}
            >
              Eltanin Solutions<span className="text-[#2563EB]">.</span>
            </span>
            <p
              className="text-slate-500"
              style={{ fontSize: "0.875rem", lineHeight: 1.7 }}
            >
              B2B Software Resale & Technical Delivery Partner.
              <br />
              Structured. Reliable. Scalable.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span
              className="text-slate-400 block mb-3"
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
                  className="block text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                  style={{ fontSize: "0.875rem" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span
              className="text-slate-400 block mb-3"
              style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}
            >
              CONTACT
            </span>
            <a
              href="mailto:compliance@eltaninsolutions.org"
              className="text-[#2563EB] hover:text-[#3b82f6] transition-colors"
              style={{ fontSize: "0.875rem" }}
            >
              compliance@eltaninsolutions.org
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600" style={{ fontSize: "0.8125rem" }}>
            &copy; {new Date().getFullYear()} Eltanin Solutions Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
