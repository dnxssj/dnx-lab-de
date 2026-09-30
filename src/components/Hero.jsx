
import React, { useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const { t } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMouseMove = (event) => {
    setMouse({
      x: (event.clientX / window.innerWidth) * 100,
      y: (event.clientY / window.innerHeight) * 100,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[760px] items-center overflow-hidden border-b border-white/[0.06] pt-24 sm:min-h-screen"
    >
      <div className="absolute inset-0 bg-[#050505]" />

      <motion.div
        className="pointer-events-none absolute z-0 h-[720px] w-[720px] rounded-full bg-turquesa/[0.07] blur-[170px]"
        animate={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
        transition={{ type: "spring", stiffness: 18, damping: 28 }}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquesa/[0.14] blur-[125px]"
        animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.11]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(46,233,164,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(46,233,164,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      <div className="absolute inset-x-0 top-1/2 z-10 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-turquesa/20 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-turquesa/20 bg-turquesa/[0.06] px-3 py-1.5 text-xs font-medium tracking-wide text-turquesa">
            <span className="h-1.5 w-1.5 rounded-full bg-turquesa shadow-[0_0_10px_rgba(46,233,164,0.9)]" />
            {t.hero.eyebrow}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-crema sm:text-7xl lg:text-8xl">
            {t.hero.title1}
            <br />
            <span className="text-turquesa">{t.hero.title2}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-crema/60 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 rounded-xl bg-turquesa px-5 py-3 text-sm font-semibold text-fondo transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(46,233,164,0.28)]"
            >
              {t.hero.cta}
              <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-crema/75 transition hover:border-turquesa/30 hover:bg-turquesa/[0.05] hover:text-crema"
            >
              {t.hero.secondary}
              <ArrowDownRight size={17} />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2 text-xs text-crema/45">
            {t.hero.trust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
          {t.hero.cards.map((label, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
            <div key={number} className="bg-[#080a0a]/80 p-4 sm:p-5">
              <div className="text-[10px] font-mono text-turquesa/60">{number}</div>
              <div className="mt-2 text-xs font-medium text-crema/65 sm:text-sm">{label}</div>
            </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 right-5 z-20 hidden items-center gap-3 text-xs text-crema/35 transition hover:text-turquesa sm:flex"
      >
        <span>{t.hero.discover}</span>
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/10 pt-2">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-turquesa" />
        </span>
      </button>
    </section>
  );
}
