import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "eyesbook｜日系質感眼鏡店",
  description:
    "eyesbook 以日系簡約美學、專業驗光與精選鏡框，陪你找到舒服且耐看的日常眼鏡。",
  openGraph: {
    title: "eyesbook｜日系質感眼鏡店",
    description: "了解 eyesbook 的品牌、驗光服務與預約到店資訊。",
    images: ["/images/eyesbook-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
