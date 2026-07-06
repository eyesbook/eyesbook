"use client";

export function FaqQuestionForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const question = String(formData.get("question") || "").trim();

    const body = [
      "您好，我想詢問 eyesbook 官網 FAQ 未收錄的問題。",
      "",
      `姓名：${name}`,
      `Email：${email}`,
      "",
      "問題內容：",
      question,
      "",
      "謝謝。"
    ].join("\n");

    const mailtoUrl = `mailto:eyesbook@hotmail.com?subject=${encodeURIComponent(
      "eyesbook FAQ 提問"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
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
          Email
          <input
            className="mt-2 min-h-12 w-full border border-line bg-[#fbf8f2] px-4 text-base outline-none focus:border-ink"
            type="email"
            name="email"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium text-ink">
        想詢問的問題
        <textarea
          className="mt-2 min-h-36 w-full resize-none border border-line bg-[#fbf8f2] px-4 py-3 text-base outline-none focus:border-ink"
          name="question"
          placeholder="例如：某個品牌是否有現貨、驗光前需要準備什麼、是否能調整舊眼鏡"
          required
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-ink px-7 text-sm font-medium text-paper transition hover:bg-stone sm:w-auto"
      >
        送出提問
      </button>
    </form>
  );
}
