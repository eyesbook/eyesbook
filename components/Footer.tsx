import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1fr_1.2fr_0.8fr]">
        <div>
          <Link href="/" className="font-serif text-3xl font-semibold tracking-wide">
            <img
              src="/images/eyesbook-logo.jpg"
              alt="eyesbook"
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-paper/72">
            一間重視配戴感、臉型比例與生活節奏的眼鏡店。用安靜而仔細的方式，陪你找到真正適合的那一副。
          </p>
        </div>
        <div className="text-sm text-paper/72">
          <p className="font-medium text-paper">門市資訊</p>
          <div className="mt-4 space-y-5">
            <div>
              <p className="font-medium text-paper">土城店</p>
              <p className="mt-2 leading-7">新北市土城區中央路二段61巷13號1F</p>
              <p className="leading-7">02-8273-3768</p>
              <p className="leading-7">週一~週日 11:00~21:00</p>
              <a
                href="https://www.facebook.com/eyesbooktuchang"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-paper underline underline-offset-4"
              >
                土城店 Facebook
              </a>
            </div>
            <div>
              <p className="font-medium text-paper">中和倉庫</p>
              <p className="mt-2 leading-7">新北市中和區民享街93巷1號1F</p>
              <p className="leading-7">02-2221-3837</p>
              <p className="leading-7">週一~週五 09:00~18:00</p>
              <p className="leading-7">週六 10:00~17:00</p>
              <p className="leading-7">週日及國定假日休息</p>
              <a
                href="https://www.facebook.com/eyesbook.eyewear/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-paper underline underline-offset-4"
              >
                中和倉庫 Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="text-sm text-paper/72">
          <p className="font-medium text-paper">預約聯絡</p>
          <p className="mt-4 leading-7">eyesbook@hotmail.com</p>
          <a
            href="https://www.instagram.com/eyesbook_tw/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex text-paper underline underline-offset-4"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
