import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../i18n";

export default function Contact() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.15 });
  const [status, setStatus] = useState("idle");
  const { t } = useLanguage();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xwvylkzk", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error();
      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="section-shell scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080a0a]"
      >
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden border-b border-white/[0.07] p-7 sm:p-10 lg:border-b-0 lg:border-r">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-turquesa/10 blur-[90px]" />
            <span className="eyebrow relative">{t.contact.eyebrow}</span>
            <h2 className="relative mt-5 max-w-md text-4xl font-semibold tracking-[-0.035em] text-crema sm:text-5xl">
              {t.contact.title1}
              <br />
              <span className="text-turquesa">{t.contact.title2}</span>
            </h2>
            <p className="relative mt-5 max-w-md text-sm leading-6 text-crema/50">{t.contact.description}</p>

            <div className="relative mt-10 space-y-4 text-sm">
              <a href="mailto:contact@dnxlab.de" className="flex items-center gap-3 text-crema/65 transition hover:text-turquesa">
                <Mail size={17} className="text-turquesa" />
                contact@dnxlab.de
              </a>
              <div className="flex items-center gap-3 text-crema/45">
                <MapPin size={17} className="text-turquesa" />
                Wald-Michelbach, Deutschland
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-7 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label={t.contact.name} placeholder={t.contact.namePlaceholder} required />
              <Field name="email" label={t.contact.email} type="email" placeholder={t.contact.emailPlaceholder} required />
            </div>

            <div className="mt-4">
              <label className="field-label" htmlFor="service">{t.contact.topic}</label>
              <select id="service" name="service" required className="field">
                <option value="">{t.contact.topicPlaceholder}</option>
                {t.contact.topics.map((topic) => <option key={topic}>{topic}</option>)}
              </select>
            </div>

            <div className="mt-4">
              <label className="field-label" htmlFor="message">{t.contact.message}</label>
              <textarea id="message" name="message" rows="6" required placeholder={t.contact.messagePlaceholder} className="field resize-none" />
            </div>

            <input type="hidden" name="_subject" value="Neue Anfrage über dnxlab.de" />
            <input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-turquesa px-5 py-3 text-sm font-semibold text-fondo transition hover:shadow-[0_0_30px_rgba(46,233,164,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? t.contact.sending : t.contact.submit}
              {status !== "sending" && <ArrowUpRight size={17} />}
            </button>

            {status === "success" && <p className="mt-3 text-center text-xs text-turquesa">{t.contact.success}</p>}
            {status === "error" && <p className="mt-3 text-center text-xs text-red-400">{t.contact.error}</p>}
            <p className="mt-4 text-center text-[11px] text-crema/30">{t.contact.note}</p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, required }) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className="field" />
    </div>
  );
}
