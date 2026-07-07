import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FaqSchema
} from "@/components/StructuredData";
import {
  getKnowledgeArticle,
  getKnowledgeArticleUrl,
  knowledgeArticles
} from "@/data/knowledge";
import { siteConfig } from "@/lib/site";

type KnowledgeArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({
    slug: article.slug
  }));
}

export function generateMetadata({
  params
}: KnowledgeArticlePageProps): Metadata {
  const article = getKnowledgeArticle(params.slug);

  if (!article) {
    return {};
  }

  const url = `${siteConfig.url}${getKnowledgeArticleUrl(article)}`;

  return {
    title: `${article.title}｜eyesbook 專業知識充電站`,
    description: article.seoDescription,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: article.title,
      description: article.seoDescription,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags
    }
  };
}

function ArticleSection({
  title,
  id,
  paragraphs
}: {
  title: string;
  id: string;
  paragraphs: string[];
}) {
  return (
    <section id={id} className="border-t border-line pt-10">
      <h2 className="font-serif text-3xl font-semibold text-ink">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-stone">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default function KnowledgeArticlePage({
  params
}: KnowledgeArticlePageProps) {
  const article = getKnowledgeArticle(params.slug);

  if (!article) {
    notFound();
  }

  const furtherReading = article.furtherReading
    .map(getKnowledgeArticle)
    .filter(Boolean);
  const relatedArticles = article.related.map(getKnowledgeArticle).filter(Boolean);

  return (
    <>
      <ArticleSchema article={article} />
      <BreadcrumbSchema article={article} />
      <FaqSchema faqs={article.faqs} />

      <article>
        <header className="section-shell py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow">knowledge article</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-7 border-l-2 border-brass pl-5 text-lg leading-9 text-stone">
              {article.tldr}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/knowledge?tag=${encodeURIComponent(tag)}`}
                  className="focus-ring border border-line bg-paper px-3 py-1 text-xs text-stone transition hover:border-ink hover:text-ink"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone">
              作者：{article.author}｜發布：{article.publishedAt}｜更新：
              {article.updatedAt}
            </p>
            {article.coverImage ? (
              <div className="relative mt-10 overflow-hidden border border-line bg-paper shadow-soft">
                <Image
                  src={article.coverImage}
                  alt={article.coverImageAlt || article.title}
                  width={1200}
                  height={1200}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            ) : null}
          </div>
        </header>

        <div className="border-y border-line bg-[#fbf8f2]">
          <div className="section-shell grid gap-12 py-20 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">outline</p>
              <nav className="mt-5 grid gap-3 text-sm text-stone">
                {[
                  ["intro", "內容介紹"],
                  ["principle", "原理說明"],
                  ["solutions", "解決方法"],
                  ["myths", "常見迷思"],
                  ["faq", "FAQ"],
                  ["reading", "延伸閱讀"]
                ].map(([href, label]) => (
                    <a key={href} href={`#${href}`} className="hover:text-ink">
                      {label}
                    </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-12 bg-paper p-7 sm:p-10">
              <ArticleSection
                id="intro"
                title="內容介紹"
                paragraphs={article.sections.intro}
              />
              <ArticleSection
                id="principle"
                title="原理說明"
                paragraphs={article.sections.principle}
              />
              {article.contentImages?.map((image) => (
                <figure key={image.src} className="border border-line bg-[#fbf8f2] p-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1536}
                    height={1024}
                    className="h-auto w-full"
                  />
                  {image.caption ? (
                    <figcaption className="mt-3 text-sm leading-7 text-stone">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
              <ArticleSection
                id="solutions"
                title="解決方法"
                paragraphs={article.sections.solutions}
              />
              <ArticleSection
                id="myths"
                title="常見迷思"
                paragraphs={article.sections.myths}
              />

              <section id="faq" className="border-t border-line pt-10">
                <h2 className="font-serif text-3xl font-semibold text-ink">FAQ</h2>
                <div className="mt-6 space-y-4">
                  {article.faqs.map((faq) => (
                    <details key={faq.question} className="border border-line bg-[#fbf8f2] p-5">
                      <summary className="cursor-pointer font-medium text-ink">
                        {faq.question}
                      </summary>
                      <p className="mt-4 text-sm leading-7 text-stone">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section id="reading" className="border-t border-line pt-10">
                <h2 className="font-serif text-3xl font-semibold text-ink">延伸閱讀</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {furtherReading.map((item) =>
                    item ? (
                      <Link
                        key={item.slug}
                        href={getKnowledgeArticleUrl(item)}
                        className="focus-ring border border-line bg-[#fbf8f2] p-5 text-sm font-medium leading-7 text-ink transition hover:border-ink"
                      >
                        {item.title}
                      </Link>
                    ) : null
                  )}
                </div>
              </section>

              <section className="border-t border-line pt-10">
                <h2 className="font-serif text-3xl font-semibold text-ink">相關文章</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {relatedArticles.map((item) =>
                    item ? (
                      <Link
                        key={item.slug}
                        href={getKnowledgeArticleUrl(item)}
                        className="focus-ring border border-line bg-[#fbf8f2] p-5 text-sm font-medium leading-7 text-ink transition hover:border-ink"
                      >
                        {item.title}
                      </Link>
                    ) : null
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
