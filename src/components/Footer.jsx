import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-turquesa/25 bg-turquesa/10 text-[10px] font-black text-turquesa">DX</span>
            <span className="text-sm font-semibold tracking-[0.15em] text-crema">DNX <span className="text-crema/35">LAB</span></span>
          </div>
          <p className="mt-3 text-xs text-crema/35">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs text-crema/40">
          <a href="mailto:contact@dnxlab.de" className="transition hover:text-turquesa">contact@dnxlab.de</a>
          <Link to="/impressum" className="transition hover:text-crema">{t.footer.legal}</Link>
          <Link to="/datenschutz" className="transition hover:text-crema">{t.footer.privacy}</Link>
        </div>
      </div>

      <div className="border-t border-white/[0.04] px-5 py-4 text-center text-[10px] text-crema/20">© {new Date().getFullYear()} DNX Lab</div>
    </footer>
  );
}
