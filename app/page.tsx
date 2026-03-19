import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/seo";
import { getLangFromSearchParams, translations } from "@/lib/translations";

type HomeProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  searchParams,
}: HomeProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const t = translations[lang];

  return createPageMetadata({
    title: t.seo.homeTitle,
    description: t.seo.homeDescription,
    lang,
    path: "/",
  });
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} currentPath="/" />
      <main className="pt-0">
        {/* Hero section for immediate trust and primary conversion action */}
        <Hero lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
