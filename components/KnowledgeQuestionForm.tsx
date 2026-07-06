"use client";

export function KnowledgeQuestionForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const question = String(formData.get("question") || "").trim();

    const body = [
      "您好，我想提供 eyesbook 專業知識充電站一個問題。",
      "",
      `姓名：${name}`,
      `Email：${email}`,
      "",
      "提問內容：",
      question,
      "",
      "謝謝。"
    ].join("\n");

    const mailtoUrl = `mailto:eyesbook@hotmail.com?subject=${encodeURIComponent(
      "eyesbook 專業知識充電站提問"
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
        想詢問或建議收錄的主題
        <textarea
          className="mt-2 min-h-36 w-full resize-none border border-line bg-[#fbf8f2] px-4 py-3 text-base outline-none focus:border-ink"
          name="question"
          placeholder="例如：兒童配鏡、夜間開車眩光、多焦點適應、鏡片保養"
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
