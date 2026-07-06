import { FaqQuestionForm } from "@/components/FaqQuestionForm";
import { PageHero } from "@/components/PageHero";

const faqs = [
  {
    question: "需要先預約嗎？",
    answer:
      "建議先預約。eyesbook 採預約優先服務，能保留較完整的驗光、選框與鏡片諮詢時間。"
  },
  {
    question: "驗光大約需要多久？",
    answer:
      "完整驗光與諮詢約 40 到 60 分鐘，實際時間會依度數狀況、鏡片需求與試戴討論而調整。"
  },
  {
    question: "到店需要帶舊眼鏡嗎？",
    answer:
      "建議攜帶目前常用的眼鏡或隱形眼鏡資訊，我們可以一起評估舊度數、配戴習慣與新眼鏡需求。"
  },
  {
    question: "有哪些品牌可以選？",
    answer:
      "目前收錄 999.9、PROJEKT PRODUKT、MARKUS T、WOLFGANG PROKSCH、FRANK CUSTOM、annu、ENALLOID、720、COACH、RayBan、MATSUDA、MASUNAGA、BLACKFIN 等品牌。"
  },
  {
    question: "可以只驗光不配鏡嗎？",
    answer:
      "可以先預約諮詢與驗光服務。若有特殊需求，建議在預約需求中先說明，方便我們安排時間。"
  },
  {
    question: "多久可以拿到眼鏡？",
    answer:
      "一般鏡片與庫存狀況不同，交件時間會依鏡片種類、度數與加工安排確認。到店選配後會提供較準確的時間。"
  },
  {
    question: "可以調整舊眼鏡嗎？",
    answer:
      "可協助評估與簡單調整。若鏡框材質老化、零件損傷或非本店購買，會依現場狀況判斷是否適合處理。"
  },
  {
    question: "RayBan × Star Wars 聯名系列可以試戴嗎？",
    answer:
      "可先預約到店了解店內可試戴款式。聯名系列到貨與庫存狀況會依現場為準。"
  },
  {
    question: "營業時間是什麼時候？",
    answer: "營業時間為週一到週日 11:00 到 21:00。"
  },
  {
    question: "店在哪裡？",
    answer: "eyesbook 位於新北市土城區中央路二段61巷13號1F。"
  }
];

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
