import { articles, getArticleUrl, type ArticleEntry } from "@/data/articles";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export function FaqSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }}
    />
  );
}

type ArticleSchemaProps = {
  article: ArticleEntry;
};

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const url = `${siteConfig.url}${getArticleUrl(article)}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        author: {
          "@type": "Organization",
          name: article.author
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url
        },
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        about: article.topic,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url
        }
      }}
    />
  );
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
