import type { Metadata } from "next";
import { KnowledgeCard } from "@/components/KnowledgeCard";
import { KnowledgeQuestionForm } from "@/components/KnowledgeQuestionForm";
import { PageHero } from "@/components/PageHero";
import {
  getAllTags,
  knowledgeArticles,
  searchKnowledgeArticles
} from "@/data/knowledge";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "專業知識充電站｜eyesbook",
  description:
    "eyesbook 專業知識充電站，整理驗光、鏡片、鏡框、夜間駕駛、不等視、兒童視力與眼鏡保養文章。",
  alternates: {
    canonical: `${siteConfig.url}/knowledge`
  },
  openGraph: {
    title: "專業知識充電站｜eyesbook",
    description: "累積眼鏡、驗光與鏡片選配的專業文章。",
    url: `${siteConfig.url}/knowledge`
  }
};

type KnowledgePageProps = {
  searchParams?: {
    q?: string;
    tag?: string;
  };
};

export default function KnowledgePage({ searchParams }: KnowledgePageProps) {
  const query = searchParams?.q || "";
  const selectedTag = searchParams?.tag || "";
  const searchedArticles = searchKnowledgeArticles(query);
  const filteredArticles = selectedTag
    ? searchedArticles.filter((article) => article.tags.includes(selectedTag))
    : searchedArticles;
  const latestArticles = [...knowledgeArticles].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  const popularArticles = knowledgeArticles.filter((article) => article.popular);
  const featuredArticles = knowledgeArticles.filter((article) => article.featured);
  const tags = getAllTags();

  return (
    <>
      <PageHero
        eyebrow="knowledge"
        title="專業知識充電站"
        description="累積眼鏡、驗光、鏡片、鏡框與眼睛健康知識，幫助你在到店前先建立清楚判斷。"
      />

      <section className="border-y border-line bg-[#fbf8f2] py-16">
        <div className="section-shell">
          <form action="/knowledge" className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="knowledge-search">
              輸入問題
            </label>
            <input
              id="knowledge-search"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="輸入問題"
              className="min-h-14 w-full border border-line bg-paper px-5 text-base text-ink outline-none transition placeholder:text-stone/70 focus:border-ink"
            />
            <button
              type="submit"
              className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-ink px-7 text-sm font-medium text-paper transition hover:bg-stone"
            >
              搜尋文章
            </button>
          </form>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">tags</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">分類 Tag</h2>
            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href="/knowledge"
                className="focus-ring border border-line bg-paper px-4 py-2 text-sm text-ink"
              >
                全部
              </a>
              {tags.map((tag) => (
                <a
                  key={tag}
                  href={`/knowledge?tag=${encodeURIComponent(tag)}`}
                  className="focus-ring border border-line bg-paper px-4 py-2 text-sm text-stone transition hover:border-ink hover:text-ink"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">results</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">
              {query || selectedTag ? "搜尋結果" : "推薦文章"}
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone">
              {query || selectedTag
                ? `目前找到 ${filteredArticles.length} 篇相關文章。`
                : "從常見需求開始閱讀，逐步理解自己的眼鏡選配方向。"}
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {(query || selectedTag ? filteredArticles : featuredArticles).map((article) => (
                <KnowledgeCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[#fbf8f2] py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">latest</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">最新文章</h2>
            <div className="mt-8 grid gap-5">
              {latestArticles.slice(0, 4).map((article) => (
                <KnowledgeCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">popular</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">熱門文章</h2>
            <div className="mt-8 grid gap-5">
              {popularArticles.map((article) => (
                <KnowledgeCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">ask us</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              想讓我們整理哪個主題？
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone">
              客人的提問會寄到 eyesbook 信箱，我們可以整理成未來的知識文章或文章中的 FAQ。
            </p>
          </div>
          <KnowledgeQuestionForm />
        </div>
      </section>
    </>
  );
}
