import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/seo";
import { getLangFromSearchParams, translations } from "@/lib/translations";

type GuidesPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  searchParams,
}: GuidesPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const t = translations[lang];

  return createPageMetadata({
    title: t.seo.guidesTitle,
    description: t.seo.guidesDescription,
    lang,
    path: "/guides",
  });
}

export default async function GuidesPage({ searchParams }: GuidesPageProps) {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const isZh = lang === "zh";
  const t = translations[lang];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} currentPath="/guides" />
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Guide header section framing this page as the core product value */}
        <section>
          <h1 className="text-4xl font-semibold text-foreground">{t.nav.guides}</h1>
          <p className="mt-4 max-w-3xl text-muted">
            {isZh
              ? "这是 Pet2Home 的核心内容：把完整流程、关键时间线和常见错误一次讲清楚。"
              : "This is the core value page: full process, timeline breakdown, and common mistakes."}
          </p>
        </section>

        {/* Full process section showing end-to-end relocation sequence */}
        <section className="mt-12 rounded-2xl bg-card p-9 shadow-[0_10px_30px_rgba(43,43,43,0.08)]">
          <h2 className="text-2xl font-semibold text-foreground">
            {isZh ? "完整流程（中国宠物赴新西兰）" : "Full Process (China to New Zealand)"}
          </h2>
          <p className="mt-4 leading-8 text-muted">
            {isZh
              ? "从中国出发通常需要第三国方案，流程包含：芯片与疫苗准备、抗体检测、等待期管理、文件核验、航线安排、最终入境。任何一个节点日期错位，都可能导致重做。"
              : "Relocation usually requires a third-country route. Key steps include vaccine preparation, titer testing, waiting period, document checks, route booking, and final entry."}
          </p>
        </section>

        {/* Timeline breakdown section to help users map calendar milestones */}
        <section className="mt-7 rounded-2xl bg-card p-9 shadow-[0_10px_30px_rgba(43,43,43,0.08)]">
          <h2 className="text-2xl font-semibold text-foreground">
            {isZh ? "时间线拆解" : "Timeline Breakdown"}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              {
                label: "Month 0",
                zh: "接种狂犬疫苗并建立基础文件",
                en: "Rabies vaccine and baseline records",
              },
              {
                label: "Month 1",
                zh: "进行抗体血检并保留官方报告",
                en: "Run titer blood test and collect report",
              },
              {
                label: "Month 4",
                zh: "满足阶段性等待条件，推进入境材料",
                en: "Reach eligibility and advance paperwork",
              },
              {
                label: "Month 6",
                zh: "完成出境与入境安排，执行入境",
                en: "Finalize route and complete entry",
              },
            ].map((step) => (
              <article key={step.label} className="rounded-xl bg-background p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {step.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {isZh ? step.zh : step.en}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Common mistakes section to convert fear into actionable prevention */}
        <section className="mt-7 rounded-2xl bg-card p-9 shadow-[0_10px_30px_rgba(43,43,43,0.08)]">
          <h2 className="text-2xl font-semibold text-foreground">
            {isZh ? "常见错误与后果" : "Common Mistakes and Impact"}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>
              {isZh
                ? "按“网传模板”准备文件，忽略自己路线差异。"
                : "Using generic internet templates that do not match your route."}
            </li>
            <li>
              {isZh
                ? "抗体检测和等待期计算错误，导致时间线整体后移。"
                : "Miscalculating titer and waiting windows, forcing timeline reset."}
            </li>
            <li>
              {isZh
                ? "临近出发才核对材料，来不及补齐。"
                : "Checking documents too late and missing correction windows."}
            </li>
            <li>
              {isZh
                ? "过度依赖过时的 AI 或论坛信息。"
                : "Relying on outdated AI/forum advice without verification."}
            </li>
          </ul>
        </section>

        {/* Conversion section encouraging users to request one-on-one help */}
        <section className="mt-7 rounded-2xl bg-card p-9 shadow-[0_10px_30px_rgba(43,43,43,0.08)]">
          <h2 className="text-2xl font-semibold text-foreground">
            {isZh ? "想拿到你的专属时间线？" : "Need a custom timeline for your case?"}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            {isZh
              ? "提交宠物信息后，我们会先判断你当前所处阶段，并给出下一步优先级。"
              : "Share your case and we will identify your current stage and immediate priorities."}
          </p>
          <a
            href={`/contact?lang=${lang}`}
            className="mt-6 inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            {isZh ? "预约咨询" : "Book Consultation"}
          </a>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
