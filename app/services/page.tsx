import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

const steps = [
  {
    title: "需求訪談",
    body: "了解工作距離、用眼時間、舊眼鏡狀態與近期視覺困擾。"
  },
  {
    title: "專業檢測",
    body: "進行度數、雙眼平衡與視覺舒適度確認，避免只追求單一清晰度。"
  },
  {
    title: "試戴校準",
    body: "透過試戴與情境距離測試，確認鏡片方案是否符合日常。"
  },
  {
    title: "交件調整",
    body: "依鼻墊、耳勾、前傾角與配戴位置做細部調整。"
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="optometry service"
        title="清楚看見之前，先理解你怎麼使用眼睛。"
        description="eyesbook 的驗光服務重視舒適、穩定與長時間使用感。每次預約約 60 分鐘，包含問診、檢測、試戴與鏡片建議。"
      />
      <section className="border-y border-line bg-[#fbf8f2] py-24">
        <div className="section-shell">
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="bg-paper p-8">
                <p className="font-serif text-5xl font-semibold text-brass/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">lens guide</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              依照生活節奏，安排合適的鏡片選擇。
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["單焦點鏡片", "抗疲勞鏡片", "多焦點鏡片", "濾藍光與鍍膜"].map((item) => (
              <div key={item} className="border border-line bg-paper p-6 text-sm text-stone">
                <span className="font-medium text-ink">{item}</span>
                <p className="mt-3 leading-7">到店後由驗光結果與使用需求共同評估。</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
