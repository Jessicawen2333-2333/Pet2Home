import Link from "next/link";
import type { Lang } from "@/lib/translations";
import { translations, withLang } from "@/lib/translations";

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="mt-20 border-t border-[#ded4c9] bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-foreground">Pet2Home</p>
          <p className="mt-1 text-sm text-muted">{t.footer.description}</p>
        </div>
        <div className="flex gap-4 text-sm text-muted">
          <Link href={withLang("/", lang)} className="hover:text-brand">
            {t.nav.home}
          </Link>
          <Link href={withLang("/stories", lang)} className="hover:text-brand">
            {t.nav.stories}
          </Link>
          <Link href={withLang("/guides", lang)} className="hover:text-brand">
            {t.nav.guides}
          </Link>
          <Link href={withLang("/blog", lang)} className="hover:text-brand">
            {t.nav.blog}
          </Link>
          <Link href={withLang("/contact", lang)} className="hover:text-brand">
            {t.nav.contact}
          </Link>
        </div>
      </div>
      <p className="border-t border-[#e7ddd2] py-4 text-center text-xs text-muted">
        {new Date().getFullYear()} {t.footer.copyright}
      </p>
    </footer>
  );
}
