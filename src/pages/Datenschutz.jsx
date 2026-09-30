import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n";

export default function Datenschutz() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-36 sm:px-6">
        <span className="eyebrow">{t.legal.legalLabel}</span>
        <h1 className="mt-4 text-4xl font-semibold text-crema">{t.legal.privacyTitle}</h1>
        <div className="prose-dnx mt-10">
          {t.legal.privacy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
