import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, MessageSquare, Search, Wrench, Send } from "lucide-react";
import { useLanguage } from "../i18n";

const icons = [MessageSquare, Search, Wrench, Send];

export default function Process() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.15 });
  const { t } = useLanguage();

  return (
    <section id="process" ref={ref} className="section-shell scroll-mt-24">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2 className="section-title">{t.process.title}</h2>
        </div>
        <p className="section-intro">{t.process.intro}</p>
      </div>

      <motion.div
        initial="hidden"
        animate={visible ? "show" : "hidden"}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="relative grid gap-3 md:grid-cols-4"
      >
        <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-gradient-to-r from-transparent via-turquesa/20 to-transparent md:block" />

        {t.process.steps.map((step, index) => {
          const Icon = icons[index];
          const number = String(index + 1).padStart(2, "0");

          return (
            <motion.div
              key={step.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
            >
              <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-turquesa/30 bg-[#080a0a] text-turquesa">
                <Icon size={13} />
              </div>
              <div className="mt-8 font-mono text-[10px] text-turquesa/50">{number}</div>
              <h3 className="mt-2 text-lg font-semibold text-crema">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-crema/45">{step.text}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-turquesa/10 bg-turquesa/[0.035] px-5 py-4 text-sm text-crema/55">
        <ArrowRight size={17} className="shrink-0 text-turquesa" />
        <span>{t.process.note}</span>
      </div>
    </section>
  );
}
