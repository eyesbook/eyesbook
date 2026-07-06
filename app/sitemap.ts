import type { MetadataRoute } from "next";
import { articles, getArticleUrl } from "@/data/articles";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/brands",
  "/services",
  "/contact",
  "/knowledge"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  })) satisfies MetadataRoute.Sitemap;

  const articleEntries = articles
    .filter((article) => !staticRoutes.includes(getArticleUrl(article)))
    .map((article) => ({
      url: `${siteConfig.url}${getArticleUrl(article)}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7
    })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...articleEntries];
}
