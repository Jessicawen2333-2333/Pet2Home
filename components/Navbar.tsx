"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Lang } from "@/lib/translations";
import { translations, withLang } from "@/lib/translations";

type NavbarProps = {
  lang: Lang;
  currentPath: string;
};

export default function Navbar({ lang, currentPath }: NavbarProps) {
  const t = translations[lang];
  const [scrollProgress, setScrollProgress] = useState(0);
  const links = [
    { href: "/", label: t.nav.home },
    { href: "/stories", label: t.nav.stories },
    { href: "/guides", label: t.nav.guides },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / 180, 1);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle = useMemo(() => {
    const start = { r: 254, g: 249, b: 242 }; // #FEF9F2
    const end = { r: 255, g: 255, b: 255 }; // #FFFFFF
    const mix = (a: number, b: number) => Math.round(a + (b - a) * scrollProgress);

    return {
      backgroundColor: `rgb(${mix(start.r, end.r)} ${mix(start.g, end.g)} ${mix(start.b, end.b)})`,
      borderBottomColor: `rgba(0, 0, 0, ${0.08 + scrollProgress * 0.06})`,
    };
  }, [scrollProgress]);

  return (
    <header
      className="sticky top-0 z-50 border-b transition-colors duration-300"
      style={headerStyle}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href={withLang("/", lang)} className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-[#d7cdbf]">
            <Image
              src="/logo.png?v=20260319"
              alt="Pet2Home logo"
              fill
              className="object-cover"
              sizes="40px"
              unoptimized
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Pet2Home</p>
            <p className="text-xs text-black/70">{t.brandTagline}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-4 text-sm md:flex">
          {links.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={withLang(link.href, lang)}
                className={
                  isActive
                    ? "rounded-full bg-black/5 px-3.5 py-2 font-semibold text-black"
                    : "rounded-full px-3.5 py-2 text-black/70 hover:bg-black/5 hover:text-black"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <LanguageSwitcher lang={lang} path={currentPath} />
      </nav>
    </header>
  );
}
