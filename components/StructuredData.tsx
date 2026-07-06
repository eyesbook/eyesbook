import {
  getKnowledgeArticleUrl,
  type KnowledgeArticle,
  type KnowledgeFaq
} from "@/data/knowledge";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "./JsonLd";

type FaqSchemaProps = {
  faqs: KnowledgeFaq[];
};

export function FaqSchema({ faqs }: FaqSchemaProps) {
  if (faqs.length === 0) {
    return null;
  }

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
  article: KnowledgeArticle;
};

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const url = `${siteConfig.url}${getKnowledgeArticleUrl(article)}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.seoDescription,
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
        about: article.tags,
        keywords: article.tags.join(", "),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url
        }
      }}
    />
  );
}

export function BreadcrumbSchema({ article }: ArticleSchemaProps) {
  const articleUrl = `${siteConfig.url}${getKnowledgeArticleUrl(article)}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首頁",
            item: siteConfig.url
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "專業知識充電站",
            item: `${siteConfig.url}/knowledge`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl
          }
        ]
      }}
    />
  );
}
