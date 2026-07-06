import { siteConfig } from "@/lib/site";

export type ArticleEntry = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  topic: string;
};

export const articles: ArticleEntry[] = [
  {
    slug: "faq",
    title: "eyesbook 常見問題",
    description:
      "整理 eyesbook 到店預約、驗光服務、品牌選配與鏡片諮詢常見問題。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    topic: "眼鏡店常見問題、驗光服務、鏡框選配"
  }
];

export function getArticleUrl(article: ArticleEntry) {
  return article.slug === "faq" ? "/faq" : `/articles/${article.slug}`;
}
