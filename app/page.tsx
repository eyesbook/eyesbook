import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    title: "專業驗光",
    body: "以清楚的問診、精準檢測與試戴調整，建立舒服穩定的視覺基準。"
  },
  {
    title: "鏡框選配",
    body: "從臉型比例、鼻橋高度到日常穿搭，挑選耐看且配戴穩定的鏡框。"
  },
  {
    title: "鏡片建議",
    body: "依工作距離、螢幕時間、駕車與閱讀習慣，建議合適的鏡片設計。"
  }
];

const brands = [
  "999.9",
  "PROJEKT PRODUKT",
  "MARKUS T",
  "WOLFGANG PROKSCH",
  "FRANK CUSTOM",
  "annu",
  "ENALLOID",
  "720",
  "COACH",
  "RayBan",
  "MATSUDA",
  "MASUNAGA",
  "BLACKFIN"
];

export default function Home() {
  return (
    <>
      <section className="section-shell grid min-h-[calc(100vh-5rem)] gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
        <div className="max-w-xl">
          <p className="eyebrow">premium eyewear & eyecare</p>
          <h1 className="mt-6">
            <img
              src="/images/eyesbook-logo.jpg"
              alt="eyesbook"
              className="h-auto w-full max-w-[430px] mix-blend-multiply"
            />
          </h1>
          <p className="mt-7 text-lg leading-9 text-stone">
            選優質眼鏡與專業驗光服務，從視覺需求、配戴習慣到鏡片選擇，為你打造更舒適、更清晰的日常視界。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-ink px-7 text-sm font-medium text-paper transition hover:bg-stone"
            >
              預約到店
            </Link>
            <Link
              href="/services"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-line px-7 text-sm font-medium text-ink transition hover:border-ink"
            >
              了解驗光服務
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-sm shadow-soft lg:min-h-[640px]">
          <Image
            src="/images/eyesbook-hero.png"
            alt="eyesbook 日系簡約眼鏡店室內與鏡框展示"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 56vw, 100vw"
          />
        </div>
      </section>

      <section className="border-y border-line bg-paper py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow">faq search</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              有問題想先了解？
            </h2>
          </div>
          <form action="/knowledge" className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="home-faq-search">
              輸入問題
            </label>
            <input
              id="home-faq-search"
              name="q"
              type="search"
              placeholder="輸入問題"
              className="min-h-14 w-full border border-line bg-[#fbf8f2] px-5 text-base text-ink outline-none transition placeholder:text-stone/70 focus:border-ink"
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

      <section className="border-y border-line bg-[#fbf8f2] py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="service"
            title="從驗光到選框，留下足夠時間給每個細節。"
            description="eyesbook 採預約制服務，讓每位客人都能被仔細理解。不是快速成交，而是找到能長久配戴的答案。"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="border border-line bg-paper p-8">
                <h3 className="font-serif text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-stone">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-paper">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-brass">
              featured
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              RayBan × Star Wars 聯名系列
            </h2>
            <p className="mt-5 text-sm leading-7 text-paper/72">
              官方形象影片同步曝光。歡迎預約到店，了解 RayBan 聯名系列與店內可試戴款式。
            </p>
            <Link
              href="/contact"
              className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-paper px-7 text-sm font-medium text-ink transition hover:bg-warm"
            >
              預約到店試戴
            </Link>
          </div>
          <div className="aspect-[9/16] max-h-[680px] w-full overflow-hidden rounded-sm bg-black shadow-soft sm:aspect-video lg:aspect-[9/16] lg:justify-self-end">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/PMgiCfvZ0K0"
              title="RayBan × Star Wars official video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="brands"
            title="精選日本與國際設計品牌。"
            description="我們重視鏡框結構、材質觸感與長期維修性，也在意一副眼鏡放在臉上是否自然。"
          />
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {brands.map((brand) => (
              <div key={brand} className="bg-paper px-7 py-8">
                <p className="font-serif text-2xl font-semibold text-ink">{brand}</p>
                <p className="mt-3 text-sm leading-7 text-stone">
                  輕量結構、細緻線條與耐看比例，適合日常長時間配戴。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
