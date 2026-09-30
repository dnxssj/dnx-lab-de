import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Braces, Cpu, Home, Network, Settings2 } from "lucide-react";
import { useLanguage } from "../i18n";

const icons = [Braces, Cpu, Home, Settings2, Network];

export default function Services() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.15 });
  const { t } = useLanguage();

  return (
    <section id="services" ref={ref} className="section-shell scroll-mt-24">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="section-title">{t.services.title}</h2>
        </div>
        <p className="section-intro">{t.services.intro}</p>
      </div>

      <motion.div
        initial="hidden"
        animate={visible ? "show" : "hidden"}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
      >
        {t.services.items.map((service, index) => {
          const Icon = icons[index];
          const wide = index === 0 || index === 4;
          const number = String(index + 1).padStart(2, "0");

          return (
            <motion.article
              key={service.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className={`${wide ? "lg:col-span-2" : ""} service-card group`}
            >
              <div className="flex items-start justify-between">
                <div className="icon-box">
                  <Icon size={20} strokeWidth={1.7} />
                </div>
                <span className="font-mono text-xs text-crema/20">{number}</span>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold tracking-tight text-crema">{service.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-crema/50">{service.description}</p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => <span key={tag} className="tech-pill">{tag}</span>)}
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-turquesa transition-all duration-500 group-hover:w-full" />
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
