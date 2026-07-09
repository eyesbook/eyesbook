"use client";

import { PageHero } from "@/components/PageHero";
import { SocialIcon } from "@/components/SocialIcon";

const locations = [
  {
    name: "土城店",
    phone: "02-8273-3768",
    address: "新北市土城區中央路二段61巷13號1F",
    hours: ["週一~週日 11:00~21:00"],
    facebook: "https://www.facebook.com/eyesbooktuchang"
  },
  {
    name: "中和倉庫",
    phone: "02-2221-3837",
    address: "新北市中和區民享街93巷1號1F",
    hours: ["週一~週五 09:00~18:00", "週六 10:00~17:00", "週日及國定假日休息"],
    facebook: "https://www.facebook.com/eyesbook.eyewear/"
  }
];

export default function ContactPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const body = [
      "您好，我想預約 eyesbook 到店服務。",
      "",
      `姓名：${name}`,
      `電話：${phone}`,
      `Email：${email}`,
      "",
      "預約需求：",
      message,
      "",
      "謝謝。"
    ].join("\n");

    const mailtoUrl = `mailto:eyesbook@hotmail.com?subject=${encodeURIComponent(
      "eyesbook 預約到店"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <>
      <PageHero
        eyebrow="reservation"
        title="預約到店，留一段時間給你的眼睛。"
        description="請留下想預約的日期、需求與聯絡方式。我們會回覆可預約時段，並為你安排驗光與選框諮詢。"
      />
      <section className="border-y border-line bg-[#fbf8f2] py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {locations.map((location) => (
              <article key={location.name} className="border border-line bg-paper p-7">
                <p className="font-serif text-2xl font-semibold text-ink">{location.name}</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-stone">
                  <div>
                    <p className="font-medium text-ink">地址</p>
                    <p>{location.address}</p>
                  </div>
                  <div>
                    <p className="font-medium text-ink">電話</p>
                    <p>{location.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium text-ink">營業時間</p>
                    {location.hours.map((hour) => (
                      <p key={hour}>{hour}</p>
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-ink">社群</p>
                    <a
                      href={location.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 underline underline-offset-4 transition hover:text-ink"
                    >
                      <SocialIcon type="facebook" />
                      Facebook
                    </a>
                  </div>
                </div>
              </article>
            ))}
            <div className="border border-line bg-paper p-7 text-sm leading-7 text-stone">
              <p className="font-medium text-ink">Email</p>
              <p className="mt-2">eyesbook@hotmail.com</p>
              <p className="mt-5 font-medium text-ink">Instagram</p>
              <a
                href="https://www.instagram.com/eyesbook_tw/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 underline underline-offset-4 transition hover:text-ink"
              >
                <SocialIcon type="instagram" />
                @eyesbook_tw
              </a>
            </div>
          </div>

          <form className="border border-line bg-paper p-7 sm:p-9" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-ink px-7 text-sm font-medium text-paper transition hover:bg-stone sm:w-auto"
            >
              寄出預約信
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
