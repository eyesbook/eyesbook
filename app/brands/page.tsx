import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

const brandGroups = [
  {
    name: "MATSUDA",
    origin: "Japan",
    note: "融合日系工藝與細膩雕刻細節，適合追求質感與個性的人。"
  },
  {
    name: "PROJEKT PRODUKT",
    origin: "Korea",
    note: "俐落輪廓與現代比例，兼具設計感與日常搭配性。"
  },
  {
    name: "999.9",
    origin: "Japan",
    note: "強調穩定配戴與舒適支撐，適合長時間使用。"
  },
  {
    name: "MARKUS T",
    origin: "Germany",
    note: "輕量結構與極簡線條，適合重視舒適與純粹設計的人。"
  },
  {
    name: "MASUNAGA",
    origin: "Japan",
    note: "經典工藝與紮實做工，適合追求長久耐看的鏡框。"
  },
  {
    name: "Selected European Frames",
    origin: "Europe",
    note: "補足不同臉型與穿搭需求，提供更多材質與色彩選擇。"
  }
];

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="brands"
        title="選品不是越多越好，而是每一副都有理由。"
        description="eyesbook 精選日本與國際鏡框品牌，從結構、材質、比例與售後調整性篩選，讓選框過程更清楚。"
      />
      <section className="border-y border-line bg-[#fbf8f2] py-24">
        <div className="section-shell grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {brandGroups.map((brand) => (
            <article key={brand.name} className="bg-paper p-8">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-brass">
                {brand.origin}
              </p>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-ink">
                {brand.name}
              </h2>
              <p className="mt-5 text-sm leading-7 text-stone">{brand.note}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
