import Link from "next/link";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我們" },
  { href: "/brands", label: "品牌介紹" },
  { href: "/services", label: "驗光服務" },
  { href: "/contact", label: "預約聯絡" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/88 backdrop-blur-xl">
      <div className="section-shell py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="focus-ring group inline-flex items-baseline gap-2 rounded-sm">
            <img
              src="/images/eyesbook-logo.jpg"
              alt="eyesbook"
              className="h-10 w-auto mix-blend-multiply"
            />
            <span className="hidden text-xs uppercase tracking-[0.24em] text-stone sm:inline">
              optical store
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-stone lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-sm transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-ink px-5 text-sm font-medium text-paper transition hover:bg-stone"
          >
            預約到店
          </Link>
        </div>

        <nav className="mt-4 flex gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-stone lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
