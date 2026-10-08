import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";

type Brand = {
  name: string;
  origin: string;
  note: string;
  website: string;
  href?: string;
  images?: { src: string; alt: string; width: number; height: number; caption: string }[];
};

const brandGroups: Brand[] = [
  {
    name: "999.9",
    origin: "Japan",
    note: "強調穩定配戴與舒適支撐，適合長時間使用。",
    website: "https://www.fournines.co.jp"
  },
  {
    name: "PROJEKT PRODUKT",
    origin: "Korea",
    note: "俐落輪廓與現代比例，兼具設計感與日常搭配性。",
    website: "https://en.projektprodukt.co.kr"
  },
  {
    name: "MARKUS T",
    origin: "Germany",
    note: "輕量結構與極簡線條，適合重視舒適與純粹設計的人。",
    website: "https://www.markus-t.com"
  },
  {
    name: "WOLFGANG PROKSCH",
    origin: "Germany",
    note: "細緻線條與鮮明輪廓並重，呈現成熟、俐落且有個性的配戴印象。",
    website: "https://wolfgangproksch.com"
  },
  {
    name: "FRANK CUSTOM",
    origin: "Korea",
    note: "以復古比例結合現代設計語彙，適合喜歡低調但有辨識度的人。",
    website: "https://www.frankcustom.com"
  },
  {
    name: "annu",
    origin: "Germany",
    note: "德國製造的輕量眼鏡品牌，以 3D 列印製程、精密結構與低浪費理念打造耐用舒適的鏡框。",
    website: "https://weareannu.com/"
  },
  {
    name: "ENALLOID",
    origin: "Japan",
    note: "以膠框工藝與溫潤色彩見長，兼具復古氣質與生活感。",
    website: "https://ena-gf.jp"
  },
  {
    name: "720",
    origin: "Taiwan",
    note: "注重配戴機能與日常實用性，提供清爽、易搭配的鏡框選擇。",
    website: "https://www.720armour.com.tw"
  },
  {
    name: "COACH",
    origin: "United States",
    note: "以美式經典風格結合日常穿搭感，提供沉穩、容易搭配的鏡框選擇。",
    website: ""
  },
  {
    name: "RayBan",
    origin: "Italy",
    note: "經典太陽眼鏡與光學鏡框品牌，輪廓鮮明，適合喜歡俐落、耐看風格的人。",
    website: "https://www.ray-ban.com"
  },
  {
    name: "MA-JI MASATOMO",
    origin: "Japan",
    note: "源自日本時裝設計，融合現代而優雅的復古風格、生活哲學與工藝美學。",
    website: "",
    href: "/brands/ma-ji"
  },
  {
    name: "MATSUDA",
    origin: "Japan",
    note: "融合日系工藝與細膩雕刻細節，適合追求質感與個性的人。",
    website: "https://www.matsuda.com"
  },
  {
    name: "MASUNAGA",
    origin: "Japan",
    note: "經典工藝與紮實做工，適合追求長久耐看的鏡框。",
    website: "https://www.masunaga1905.com"
  },
  {
    name: "BLACKFIN",
    origin: "Italy",
    note: "鈦金屬結構與俐落設計，適合追求輕量、耐用與現代感的人。",
    website: "https://www.blackfin.eu"
  },
  {
    name: "S7 ILUVU",
    origin: "Eyewear",
    note: "款式、顏色與現貨資訊，歡迎洽門市了解並預約試戴。",
    website: "",
    images: [
      {
        src: "/images/brands/s7-iluvu/brand-image.jpg",
        alt: "S7 ILUVU 灰底品牌形象照，展示鏡框彎折與品牌標誌",
        width: 782,
        height: 1280,
        caption: "S7 ILUVU 品牌形象"
      },
      {
        src: "/images/brands/s7-iluvu/kids-image.jpg",
        alt: "S7 ILUVU PLAY KIDS 兒童系列形象照，粉色背景上的藍色鏡框",
        width: 1280,
        height: 853,
        caption: "PLAY KIDS 兒童系列"
      }
    ]
  },
  {    name: "Selected European Frames",
    origin: "Europe",
    note: "補足不同臉型與穿搭需求，提供更多材質與色彩選擇。",
    website: ""
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
            <article key={brand.name} className={`bg-paper p-8 ${brand.images ? "md:col-span-2 lg:col-span-3" : ""}`}>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-brass">
                {brand.origin}
              </p>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-ink">
                {brand.name}
              </h2>
              <p className="mt-5 text-sm leading-7 text-stone">{brand.note}</p>
              {brand.images ? (
                <div className="mt-8 grid items-start gap-8 sm:grid-cols-2">
                  {brand.images.map((photo) => (
                    <figure key={photo.src} className="min-w-0">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="mx-auto h-auto max-h-[640px] w-auto max-w-full"
                      />
                      <figcaption className="mt-4 text-center text-sm text-stone">{photo.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
              {brand.href ? (
                <Link href={brand.href} className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center rounded-sm border border-line px-5 text-sm font-medium text-ink transition hover:border-ink hover:bg-[#fbf8f2]">
                  查看品牌與款式
                </Link>
              ) : brand.website ? (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center rounded-sm border border-line px-5 text-sm font-medium text-ink transition hover:border-ink hover:bg-[#fbf8f2]"
                >
                  品牌官網
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
