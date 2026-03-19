import type { Metadata } from "next";
import type { Lang } from "./translations";

type MetadataInput = {
  title: string;
  description: string;
  lang: Lang;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  lang,
  path,
}: MetadataInput): Metadata {
  const url = `https://pet2home.com${path}?lang=${lang}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "zh-CN": `https://pet2home.com${path}?lang=zh`,
        en: `https://pet2home.com${path}?lang=en`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Pet2Home",
      locale: lang === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
  };
}
