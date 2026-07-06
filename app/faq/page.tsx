import { FaqQuestionForm } from "@/components/FaqQuestionForm";
import { PageHero } from "@/components/PageHero";
import { ArticleSchema, FaqSchema, getArticleBySlug } from "@/components/StructuredData";
import { faqs } from "@/data/faqs";

type FaqPageProps = {
  searchParams?: {
    q?: string;
  };
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export default function FaqPage({ searchParams }: FaqPageProps) {
  const query = normalize(searchParams?.q || "");
  const filteredFaqs = query
    ? faqs.filter((faq) =>
        normalize(`${faq.question} ${faq.answer}`).includes(query)
      )
    : faqs;

  return (
    <>
      <FaqSchema />
      {getArticleBySlug("faq") ? (
        <ArticleSchema article={getArticleBySlug("faq")!} />
      ) : null}
      <PageHero
        eyebrow="faq"
        title="常見問題"
        description="整理到店預約、驗光服務、品牌選配與鏡片諮詢常見問題。若沒有找到想問的內容，也可以直接留下問題給我們。"
      />

      <section className="border-y border-line bg-[#fbf8f2] py-16">
        <div className="section-shell">
          <form action="/faq" className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="faq-search">
              輸入問題
            </label>
            <input
              id="faq-search"
              name="q"
              type="search"
              defaultValue={searchParams?.q || ""}
              placeholder="輸入問題"
              className="min-h-14 w-full border border-line bg-paper px-5 text-base text-ink outline-none transition placeholder:text-stone/70 focus:border-ink"
            />
            <button
              type="submit"
              className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-ink px-7 text-sm font-medium text-paper transition hover:bg-stone"
            >
              搜尋
            </button>
          </form>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">answers</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {query ? "搜尋結果" : "預設問答"}
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone">
              {query
                ? `關鍵字「${searchParams?.q}」找到 ${filteredFaqs.length} 筆結果。`
                : "我們會持續把客人常問的內容整理到這裡。"}
            </p>
          </div>
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <details key={faq.question} className="group border border-line bg-paper p-6">
                  <summary className="cursor-pointer list-none font-serif text-xl font-semibold text-ink">
                    <span>{faq.question}</span>
                    <span className="float-right text-brass transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 text-sm leading-7 text-stone">{faq.answer}</p>
                </details>
              ))
            ) : (
              <div className="border border-line bg-paper p-8 text-sm leading-7 text-stone">
                目前沒有符合的 FAQ。可以在下方留下問題，我們會再回覆並整理常見內容。
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[#fbf8f2] py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">ask us</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              沒找到答案嗎？
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone">
              留下你的問題，我們會透過 Email 回覆。若是很多客人都會問的內容，也會整理進 FAQ。
            </p>
          </div>
          <FaqQuestionForm />
        </div>
      </section>
    </>
  );
}
