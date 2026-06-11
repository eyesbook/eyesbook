import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

const values = [
  "預約制接待，保留安靜完整的選配時間。",
  "依臉型、度數、生活習慣與工作距離整合建議。",
  "重視鏡框維修、調整與長期配戴穩定度。"
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="about eyesbook"
        title="像讀一本書一樣，慢慢理解你的眼睛。"
        description="eyesbook 相信眼鏡不只是造型配件，也是一種每天都會接觸身體的工具。我們以日系簡約美學為基礎，提供安靜、細緻、可信任的眼鏡選配體驗。"
      />
      <section className="border-y border-line bg-[#fbf8f2] py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">philosophy</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              好的眼鏡，應該自然地留在生活裡。
            </h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-stone">
            <p>
              我們不急著讓你做決定，而是從你的視覺需求開始：是否長時間看螢幕、閱讀距離、通勤型態、是否需要多焦點，或只是想找一副更舒服的日常眼鏡。
            </p>
            <p>
              店內選品以細緻做工、低調輪廓與可長期維護為核心，讓鏡框不只第一眼好看，也能在每天配戴後仍然覺得剛剛好。
            </p>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="section-shell">
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="bg-paper p-8 text-sm leading-7 text-stone">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
