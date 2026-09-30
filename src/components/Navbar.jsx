import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { language, setLanguage, t } = useLanguage();

  const sections = [
    ["services", t.nav.services],
    ["process", t.nav.process],
    ["contact", t.nav.contact],
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + 140;
      let current = "";

      sections.forEach(([id]) => {
        const element = document.getElementById(id);
        if (element && marker >= element.offsetTop) current = id;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [language]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#080a0a]/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 text-left"
          aria-label={t.nav.home}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-turquesa/30 bg-turquesa/10 text-sm font-black tracking-tight text-turquesa transition group-hover:border-turquesa/60 group-hover:bg-turquesa/15">
            DX
          </span>
          <span className="text-sm font-semibold tracking-[0.16em] text-crema">
            DNX <span className="text-crema/45">LAB</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`rounded-lg px-3 py-2 text-sm transition ${
                active === id
                  ? "bg-white/[0.06] text-turquesa"
                  : "text-crema/60 hover:bg-white/[0.04] hover:text-crema"
              }`}
            >
              {label}
            </button>
          ))}

          <div className="ml-3 flex items-center rounded-lg border border-white/10 bg-white/[0.025] p-0.5">
            {["en", "de", "es"].map((code) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide transition ${
                  language === code
                    ? "bg-turquesa text-fondo"
                    : "text-crema/45 hover:text-crema"
                }`}
                aria-pressed={language === code}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="ml-2 rounded-lg bg-turquesa px-4 py-2 text-sm font-semibold text-fondo transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(46,233,164,0.25)]"
          >
            {t.nav.cta}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.025] p-0.5">
            {["en", "de", "es"].map((code) => (
              <button
                key={code}
                onClick={() => setLanguage(code)}
                className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide transition ${
                  language === code ? "bg-turquesa text-fondo" : "text-crema/45"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border border-white/10 p-2 text-crema/70"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-3 mt-2 rounded-2xl border border-white/10 bg-[#080a0a]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          {sections.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm text-crema/70 transition hover:bg-white/[0.05] hover:text-turquesa"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-2 w-full rounded-xl bg-turquesa px-4 py-3 text-sm font-semibold text-fondo"
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
}
