import Link from "next/link";
import type { Lang } from "@/lib/translations";

type LanguageSwitcherProps = {
  lang: Lang;
  path: string;
};

export default function LanguageSwitcher({ lang, path }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 px-1 text-sm">
      <Link
        href={`${path}?lang=zh`}
        className={lang === "zh" ? "font-semibold text-black" : "text-black/60 hover:text-black"}
      >
        CN
      </Link>
      <span className="text-black/35">|</span>
      <Link
        href={`${path}?lang=en`}
        className={lang === "en" ? "font-semibold text-black" : "text-black/60 hover:text-black"}
      >
        EN
      </Link>
    </div>
  );
}
