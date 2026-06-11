import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const contactRows = [
  ["電話", "02-8273-3768"],
  ["Email", "eyesbook@hotmail.com"],
  ["地址", "新北市土城區中央路二段61巷13號1F"],
  ["營業時間", "週一~週日 11:00~21:00"]
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="reservation"
        title="預約到店，留一段時間給你的眼睛。"
        description="請留下想預約的日期、需求與聯絡方式。我們會回覆可預約時段，並為你安排驗光與選框諮詢。"
      />
      <section className="border-y border-line bg-[#fbf8f2] py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-px overflow-hidden border border-line bg-line">
            {contactRows.map(([label, value]) => (
              <div key={label} className="grid gap-2 bg-paper p-6 sm:grid-cols-[7rem_1fr]">
                <p className="text-sm font-medium text-ink">{label}</p>
                <p className="text-sm leading-7 text-stone">{value}</p>
              </div>
            ))}
          </div>

          <form className="border border-line bg-paper p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-ink">
                姓名
                <input
                  className="mt-2 min-h-12 w-full border border-line bg-[#fbf8f2] px-4 text-base outline-none focus:border-ink"
                  type="text"
                  name="name"
                />
              </label>
              <label className="text-sm font-medium text-ink">
                電話
                <input
                  className="mt-2 min-h-12 w-full border border-line bg-[#fbf8f2] px-4 text-base outline-none focus:border-ink"
                  type="tel"
                  name="phone"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-ink">
              Email
              <input
                className="mt-2 min-h-12 w-full border border-line bg-[#fbf8f2] px-4 text-base outline-none focus:border-ink"
                type="email"
                name="email"
              />
            </label>
            <label className="mt-5 block text-sm font-medium text-ink">
              預約需求
              <textarea
                className="mt-2 min-h-36 w-full resize-none border border-line bg-[#fbf8f2] px-4 py-3 text-base outline-none focus:border-ink"
                name="message"
                placeholder="例如：想重新驗光、挑選日常鏡框、諮詢多焦點鏡片"
              />
            </label>
            <Link
              href="mailto:eyesbook@hotmail.com?subject=eyesbook%20%E9%A0%90%E7%B4%84%E5%88%B0%E5%BA%97"
              className="focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-ink px-7 text-sm font-medium text-paper transition hover:bg-stone sm:w-auto"
            >
              寄出預約信
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
