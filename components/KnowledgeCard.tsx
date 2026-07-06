import Link from "next/link";
import { getKnowledgeArticleUrl, type KnowledgeArticle } from "@/data/knowledge";

type KnowledgeCardProps = {
  article: KnowledgeArticle;
};

export function KnowledgeCard({ article }: KnowledgeCardProps) {
  return (
    <article className="border border-line bg-paper p-7">
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="border border-line bg-[#fbf8f2] px-3 py-1 text-xs text-stone"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-ink">
        <Link href={getKnowledgeArticleUrl(article)} className="focus-ring rounded-sm">
          {article.title}
        </Link>
      </h3>
      <p className="mt-4 text-sm leading-7 text-stone">{article.summary}</p>
      <Link
        href={getKnowledgeArticleUrl(article)}
        className="focus-ring mt-6 inline-flex text-sm font-medium text-ink underline underline-offset-4"
      >
        閱讀文章
      </Link>
    </article>
  );
}
