import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/seo";
import { getLangFromSearchParams, translations } from "@/lib/translations";

type StoriesPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  searchParams,
}: StoriesPageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const t = translations[lang];

  return createPageMetadata({
    title: t.seo.storiesTitle,
    description: t.seo.storiesDescription,
    lang,
    path: "/stories",
  });
}

export default async function StoriesPage({ searchParams }: StoriesPageProps) {
  const params = await searchParams;
  const lang = getLangFromSearchParams(params);
  const t = translations[lang];
  const isZh = lang === "zh";

  const stories = isZh
    ? [
        {
          title: "猫案例：上海 → 温哥华 → 奥克兰",
          route: "中国（上海）→ 加拿大（温哥华）→ 新西兰（奥克兰）",
          timeline: "约 6.5 个月（疫苗、抗体检测、等待期、入境申请）",
          documents: "芯片记录、狂犬疫苗、抗体检测报告、健康证、进口许可材料",
          mistakesAvoided: "避免了抗体检测日期错位与临飞前文件补交。",
        },
        {
          title: "狗案例：广州 → 多伦多 → 奥克兰",
          route: "中国（广州）→ 加拿大（多伦多）→ 新西兰（奥克兰）",
          timeline: "约 7 个月（含第三国停留与航线衔接准备）",
          documents: "兽医免疫证明、血检报告、出口检疫资料、第三国停留文件",
          mistakesAvoided: "避免了等待期计算错误和航班衔接失败。",
        },
      ]
    : [
        {
          title: "Cat Case: Shanghai -> Vancouver -> Auckland",
          route: "China (Shanghai) -> Canada (Vancouver) -> New Zealand (Auckland)",
          timeline: "About 6.5 months from vaccine to entry",
          documents:
            "Microchip records, rabies vaccine proof, titer report, health certificates, import paperwork",
          mistakesAvoided:
            "Avoided misaligned titer dates and last-minute document re-submission.",
        },
        {
          title: "Dog Case: Guangzhou -> Toronto -> Auckland",
          route: "China (Guangzhou) -> Canada (Toronto) -> New Zealand (Auckland)",
          timeline: "About 7 months including third-country waiting",
          documents:
            "Vet vaccination records, blood test reports, export certificates, third-country documents",
          mistakesAvoided:
            "Avoided waiting-period miscalculation and flight transfer risk.",
        },
      ];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} currentPath="/stories" />
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Stories page header to position this page as proof-based trust content */}
        <section>
          <h1 className="text-4xl font-semibold text-foreground">{t.nav.stories}</h1>
          <p className="mt-4 max-w-3xl text-muted">
            {isZh
              ? "每个案例都展示路线、时间线、文件和避坑点，帮助你快速判断自己的准备策略。"
              : "Each case includes route, timeline, documents, and mistakes avoided."}
          </p>
        </section>

        {/* Case detail section to demonstrate execution capability and transparency */}
        <section className="mt-12 grid gap-7 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.title}
              className="rounded-2xl bg-card p-7 shadow-[0_10px_30px_rgba(43,43,43,0.08)]"
            >
              <h2 className="text-xl font-semibold text-foreground">{story.title}</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                <p>
                  <span className="font-semibold text-foreground">
                    {isZh ? "路线：" : "Route: "}
                  </span>
                  {story.route}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    {isZh ? "时间线：" : "Timeline: "}
                  </span>
                  {story.timeline}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    {isZh ? "文件：" : "Documents: "}
                  </span>
                  {story.documents}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    {isZh ? "避开的错误：" : "Mistakes Avoided: "}
                  </span>
                  {story.mistakesAvoided}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
