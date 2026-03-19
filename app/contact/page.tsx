import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/seo";
import { getLangFromSearchParams, translations } from "@/lib/translations";

type ContactPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  searchParams,
}: ContactPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const t = translations[lang];

  return createPageMetadata({
    title: t.seo.contactTitle,
    description: t.seo.contactDescription,
    lang,
    path: "/contact",
  });
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const t = translations[lang];
  const isZh = lang === "zh";

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} currentPath="/contact" />
      <main className="mx-auto max-w-3xl px-6 py-12">
        {/* Contact page header encouraging consultation requests */}
        <section>
          <h1 className="text-4xl font-semibold text-foreground">{t.contact.title}</h1>
          <p className="mt-4 text-muted">{t.contact.description}</p>
          <p className="mt-2 text-sm text-muted">
            {isZh
              ? "主要通过微信沟通，表单越完整，回复越高效。"
              : "We mainly communicate via WeChat. More details help us reply faster."}
          </p>
        </section>

        {/* Contact form section collecting user relocation details */}
        <section className="mt-12 rounded-2xl bg-card p-9 shadow-[0_10px_30px_rgba(43,43,43,0.08)]">
          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder={t.contact.fields.name}
              className="w-full rounded-xl bg-background px-4 py-3.5 text-foreground outline-none ring-1 ring-[#ddd2c5] placeholder:text-muted focus:ring-2 focus:ring-brand"
            />
            <input
              type="text"
              name="wechat"
              placeholder={t.contact.fields.wechat}
              className="w-full rounded-xl bg-background px-4 py-3.5 text-foreground outline-none ring-1 ring-[#ddd2c5] placeholder:text-muted focus:ring-2 focus:ring-brand"
            />
            <input
              type="text"
              name="petType"
              placeholder={t.contact.fields.petType}
              className="w-full rounded-xl bg-background px-4 py-3.5 text-foreground outline-none ring-1 ring-[#ddd2c5] placeholder:text-muted focus:ring-2 focus:ring-brand"
            />
            <input
              type="text"
              name="destination"
              placeholder={t.contact.fields.destination}
              className="w-full rounded-xl bg-background px-4 py-3.5 text-foreground outline-none ring-1 ring-[#ddd2c5] placeholder:text-muted focus:ring-2 focus:ring-brand"
            />
            <textarea
              name="message"
              rows={5}
              placeholder={t.contact.fields.message}
              className="w-full rounded-xl bg-background px-4 py-3.5 text-foreground outline-none ring-1 ring-[#ddd2c5] placeholder:text-muted focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-7 py-3.5 font-medium text-white hover:bg-brand-dark"
            >
              {t.contact.submit}
            </button>
          </form>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
