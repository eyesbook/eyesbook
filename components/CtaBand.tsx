import Link from "next/link";

export function CtaBand() {
  return (
    <section className="bg-ink py-20 text-paper">
      <div className="section-shell grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-brass">
            reservation
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            想換一副更適合自己的眼鏡，從一次安靜的諮詢開始。
          </h2>
          <p className="mt-5 text-sm leading-7 text-paper/72">
            歡迎預約到店。我們會保留充足時間，了解你的使用習慣、度數狀況與配戴偏好。
          </p>
        </div>
        <Link
          href="/contact"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-paper px-7 text-sm font-medium text-ink transition hover:bg-warm"
        >
          預約驗光與選框
        </Link>
      </div>
    </section>
  );
}
