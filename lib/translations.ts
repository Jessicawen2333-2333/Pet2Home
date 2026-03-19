export type Lang = "zh" | "en";

type TranslationSchema = {
  brandTagline: string;
  nav: {
    home: string;
    stories: string;
    guides: string;
    blog: string;
    contact: string;
  };
  contact: {
    title: string;
    description: string;
    fields: {
      name: string;
      wechat: string;
      petType: string;
      destination: string;
      message: string;
    };
    submit: string;
  };
  footer: {
    copyright: string;
    description: string;
  };
  seo: {
    homeTitle: string;
    storiesTitle: string;
    guidesTitle: string;
    blogTitle: string;
    contactTitle: string;
    homeDescription: string;
    storiesDescription: string;
    guidesDescription: string;
    blogDescription: string;
    contactDescription: string;
  };
};

export const translations: Record<Lang, TranslationSchema> = {
  zh: {
    brandTagline: "中国宠物赴新西兰咨询",
    nav: {
      home: "Home",
      stories: "真实案例",
      guides: "时间线指南",
      blog: "博客",
      contact: "预约咨询",
    },
    contact: {
      title: "预约咨询",
      description: "填写信息后，我们会在 24 小时内通过微信联系你。",
      fields: {
        name: "姓名",
        wechat: "微信号",
        petType: "宠物类型",
        destination: "目的地",
        message: "你的问题 / 当前进度",
      },
      submit: "提交咨询",
    },
    footer: {
      copyright: "Pet2Home. 保留所有权利。",
      description: "基于真实跨境经验，帮助宠物安全回家。",
    },
    seo: {
      homeTitle: "中国宠物移民新西兰时间线与文件全流程指导",
      storiesTitle: "真实案例 | 猫狗赴新西兰路线与文件拆解",
      guidesTitle: "时间线指南 | 宠物赴新西兰完整流程",
      blogTitle: "Blog | 宠物移民新西兰知识库",
      contactTitle: "预约咨询 | Pet2Home",
      homeDescription:
        "基于中国→加拿大→新西兰真实经验，帮助中国宠物家庭避开时间线和文件错误。",
      storiesDescription:
        "查看真实猫狗案例，了解路线、时间线、文件准备与成功避坑点。",
      guidesDescription:
        "核心时间线指南：疫苗、抗体检测、等待期、入境文件与常见错误。",
      blogDescription:
        "面向中文用户的 SEO 文章：新西兰宠物移民时间线、抗体检测、第三国选择。",
      contactDescription:
        "预约一对一咨询，24 小时内回复，获得你的宠物迁移执行建议。",
    },
  },
  en: {
    brandTagline: "NZ Pet Relocation Consulting",
    nav: {
      home: "Home",
      stories: "Real Cases",
      guides: "Timeline Guide",
      blog: "Blog",
      contact: "Book Consultation",
    },
    contact: {
      title: "Book Consultation",
      description:
        "Share your plan and we will reply through WeChat within 24 hours.",
      fields: {
        name: "Name",
        wechat: "WeChat",
        petType: "Pet Type",
        destination: "Destination",
        message: "Question / Current Progress",
      },
      submit: "Submit",
    },
    footer: {
      copyright: "Pet2Home. All rights reserved.",
      description:
        "Built from real relocation experience to keep pets safe on the way home.",
    },
    seo: {
      homeTitle: "China to New Zealand Pet Relocation Timeline Consulting",
      storiesTitle: "Real Cases | Cat and Dog Relocation to New Zealand",
      guidesTitle: "Timeline Guide | Full NZ Pet Relocation Process",
      blogTitle: "Blog | NZ Pet Relocation Knowledge Base",
      contactTitle: "Book Consultation | Pet2Home",
      homeDescription:
        "Built from real China -> Canada -> New Zealand pet relocation experience.",
      storiesDescription:
        "See route, timeline, documents, and mistakes avoided from real cases.",
      guidesDescription:
        "The core timeline guide with vaccines, titer tests, eligibility, and entry.",
      blogDescription:
        "SEO articles for Chinese pet owners planning relocation to New Zealand.",
      contactDescription:
        "Book one-on-one consulting and receive a reply within 24 hours.",
    },
  },
};

export function getLangFromSearchParams(searchParams?: {
  lang?: string | string[];
}): Lang {
  const value = Array.isArray(searchParams?.lang)
    ? searchParams?.lang[0]
    : searchParams?.lang;
  return value === "en" ? "en" : "zh";
}

export function withLang(path: string, lang: Lang): string {
  return `${path}?lang=${lang}`;
}
