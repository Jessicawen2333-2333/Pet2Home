"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/translations";
import { withLang } from "@/lib/translations";

type HeroProps = {
  lang: Lang;
};

export default function Hero({ lang }: HeroProps) {
  const isZh = lang === "zh";
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const countryLabelMap: Record<
    "china" | "canada" | "usa" | "australia" | "new-zealand",
    { zh: string; en: string }
  > = {
    china: { zh: "中国", en: "China" },
    canada: { zh: "加拿大", en: "Canada" },
    usa: { zh: "美国", en: "United States" },
    australia: { zh: "澳洲", en: "Australia" },
    "new-zealand": { zh: "新西兰", en: "New Zealand" },
  };

  const fromOptions: Array<"china" | "canada" | "usa" | "australia"> = [
    "china",
    "canada",
    "usa",
    "australia",
  ];

  const destinationMap: Record<string, Array<keyof typeof countryLabelMap>> = {
    china: ["canada", "usa", "australia", "new-zealand"],
    canada: ["china", "usa", "australia", "new-zealand"],
    usa: ["canada", "new-zealand", "australia", "china"],
    australia: ["new-zealand"],
  };

  const destinationOptions = from ? destinationMap[from] ?? [] : [];

  useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      if (!formRef.current) return;
      if (!formRef.current.contains(event.target as Node)) {
        setIsFromOpen(false);
        setIsToOpen(false);
      }
    };

    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] h-[92vh] min-h-[760px] w-screen overflow-hidden bg-white">
      {/* Hero section - aspiration */}
      <Image
        src="/Hero.png"
        alt={isZh ? "宠物跨境迁移背景图" : "Pet relocation hero background"}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDE2IDEwIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4="
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl -translate-y-10 md:-translate-y-14">
          <div className="pet2home-signature-wrap -mb-1 flex justify-center">
            <svg
              className="pet2home-signature w-[min(72vw,540px)]"
              viewBox="0 0 920 220"
              aria-label="Pet2Home"
              role="img"
            >
              <defs>
                <linearGradient id="pet2home-signature-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3f2f26" />
                  <stop offset="50%" stopColor="#5b4435" />
                  <stop offset="100%" stopColor="#6b4f3e" />
                </linearGradient>
                <filter id="pet2home-signature-glow">
                  <feGaussianBlur stdDeviation="2.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="pet2home-signature__stroke"
              >
                Pet2Home
              </text>
              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="pet2home-signature__fill"
                style={{ filter: "url(#pet2home-signature-glow)" }}
              >
                Pet2Home
              </text>
            </svg>
          </div>
          <h1 className="text-5xl font-semibold leading-[1.08] text-black md:text-6xl">
            {isZh ? (
              "让您的宠物安全跨越国界"
            ) : (
              "Move Your Pet Safely Across Borders"
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-black/85">
            {isZh
              ? "专业的宠物移民咨询服务，为您的爱宠提供全程无忧的跨国搬迁解决方案。"
              : "Professional pet relocation consulting for a smooth, worry-free cross-border move."}
          </p>

          {/* Quick route input for high-intent visitors */}
          <form
            action="/guides"
            method="get"
            ref={formRef}
            className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-3 rounded-2xl border border-black/10 bg-white/88 p-2.5 shadow-[0_12px_34px_rgba(28,45,66,0.18)] backdrop-blur-sm sm:flex-row sm:items-center"
          >
            <input type="hidden" name="lang" value={lang} />
            <input type="hidden" name="from" value={from} />
            <input type="hidden" name="to" value={to} />
            <div className="relative flex-1">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isFromOpen}
                onClick={() => {
                  setIsFromOpen((prev) => !prev);
                  setIsToOpen(false);
                }}
                className="h-12 w-full rounded-xl border border-transparent bg-white/90 px-4 pr-10 text-left text-sm text-foreground outline-none transition hover:bg-white focus:border-black/15 focus:bg-white"
              >
                {from
                  ? isZh
                    ? countryLabelMap[from as keyof typeof countryLabelMap].zh
                    : countryLabelMap[from as keyof typeof countryLabelMap].en
                  : isZh
                    ? "出发地"
                    : "From"}
              </button>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-black/45">
                {isFromOpen ? "▴" : "▾"}
              </span>
              {isFromOpen ? (
                <div className="absolute z-30 mt-2 w-full rounded-xl border border-black/10 bg-white p-1.5 shadow-[0_14px_30px_rgba(15,31,33,0.18)]">
                  {fromOptions.map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setFrom(code);
                        const nextOptions = destinationMap[code] ?? [];
                        if (to && !nextOptions.includes(to as keyof typeof countryLabelMap)) {
                          setTo("");
                        }
                        setIsFromOpen(false);
                      }}
                      className="w-full rounded-lg px-3 py-2 text-left text-sm text-foreground transition hover:bg-black/5"
                    >
                      {isZh ? countryLabelMap[code].zh : countryLabelMap[code].en}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="relative flex-1">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isToOpen}
                disabled={!from}
                onClick={() => {
                  if (!from) return;
                  setIsToOpen((prev) => !prev);
                  setIsFromOpen(false);
                }}
                className="h-12 w-full rounded-xl border border-transparent bg-white/90 px-4 pr-10 text-left text-sm text-foreground outline-none transition hover:bg-white focus:border-black/15 focus:bg-white disabled:cursor-not-allowed disabled:bg-white/60 disabled:text-muted"
              >
                {to
                  ? isZh
                    ? countryLabelMap[to as keyof typeof countryLabelMap].zh
                    : countryLabelMap[to as keyof typeof countryLabelMap].en
                  : isZh
                    ? "目的地"
                    : "Destination"}
              </button>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-black/45">
                {isToOpen ? "▴" : "▾"}
              </span>
              {isToOpen ? (
                <div className="absolute z-30 mt-2 w-full rounded-xl border border-black/10 bg-white p-1.5 shadow-[0_14px_30px_rgba(15,31,33,0.18)]">
                  {destinationOptions.map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setTo(code);
                        setIsToOpen(false);
                      }}
                      className="w-full rounded-lg px-3 py-2 text-left text-sm text-foreground transition hover:bg-black/5"
                    >
                      {isZh ? countryLabelMap[code].zh : countryLabelMap[code].en}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={!from || !to}
              className="h-12 rounded-xl bg-[#0f1f21] px-7 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-black/40"
            >
              {isZh ? "获取最新信息" : "Get Latest Info"}
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[#1c2d42]/70">
            <span className="rounded-full bg-white/60 px-3 py-1.5 backdrop-blur-sm">
              {isZh ? "真实案例驱动" : "Real-case driven"}
            </span>
            <span className="rounded-full bg-white/60 px-3 py-1.5 backdrop-blur-sm">
              {isZh ? "时间线可执行" : "Executable timeline"}
            </span>
            <span className="rounded-full bg-white/60 px-3 py-1.5 backdrop-blur-sm">
              {isZh ? "24小时内回复" : "Reply in 24 hours"}
            </span>
          </div>

          <div className="mt-8">
            <Link
              href={withLang("/contact", lang)}
              className="inline-block text-sm font-semibold text-black underline-offset-4 hover:underline"
            >
              {isZh ? "需要一对一咨询？点击预约" : "Need 1-on-1 consulting? Book now"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
