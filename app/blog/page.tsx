import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/seo";
import { getLangFromSearchParams, translations, withLang } from "@/lib/translations";

type BlogPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const t = translations[lang];

  return createPageMetadata({
    title: t.seo.blogTitle,
    description: t.seo.blogDescription,
    lang,
    path: "/blog",
  });
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const t = translations[lang];
  const isZh = lang === "zh";

  const articles = isZh
    ? [
        {
          title: "中国宠物移民新西兰时间线",
          excerpt: "从 Month 0 到 Month 6，如何按节点推进而不返工。",
        },
        {
          title: "狂犬抗体检测详解",
          excerpt: "什么时候做、报告怎么看、常见误解有哪些。",
        },
        {
          title: "第三国选择：加拿大 vs 其他方案",
          excerpt: "不同方案的时间、风险与文件难度对比。",
        },
      ]
    : [
        {
          title: "China to New Zealand Pet Relocation Timeline",
          excerpt: "How to plan from Month 0 to Month 6 without rework.",
        },
        {
          title: "Rabies Titer Test Explained",
          excerpt: "Timing, report interpretation, and common mistakes.",
        },
        {
          title: "Choosing a Third Country for Relocation",
          excerpt: "Compare timeline, compliance risk, and document complexity.",
        },
      ];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} currentPath="/blog" />
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Blog page header for SEO-focused educational content */}
        <section>
          <h1 className="text-4xl font-semibold text-foreground">{t.nav.blog}</h1>
          <p className="mt-4 max-w-3xl text-muted">
            {isZh
              ? "围绕时间线、文件和第三国策略的 SEO 内容，帮助你在咨询前先建立基础判断。"
              : "SEO-focused articles around timeline, documents, and third-country planning."}
          </p>
        </section>

        {/* SEO article list section showing blog card previews */}
        <section className="mt-12 grid gap-7 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-2xl bg-card p-7 shadow-[0_10px_30px_rgba(43,43,43,0.08)]"
            >
              <p className="text-xs uppercase tracking-widest text-brand">SEO Article</p>
              <h2 className="mt-3 text-xl font-semibold text-foreground">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{article.excerpt}</p>
              <Link
                href={withLang("/contact", lang)}
                className="mt-5 inline-block text-sm font-medium text-brand"
              >
                {isZh ? "获取咨询支持" : "Get consulting support"}
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
