import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { majiIntroduction, majiModels } from "@/data/maji";
import { siteConfig } from "@/lib/site";

const description = "認識 MA-JI MASATOMO 的日本時裝背景、現代復古風格與工藝美學，瀏覽 eyesbook 整理的鏡框型號與實拍照片。";

export const metadata: Metadata = {
  title: "MA-JI MASATOMO 品牌與鏡框款式｜eyesbook",
  description,
  alternates: { canonical: `${siteConfig.url}/brands/ma-ji` },
  openGraph: { title: "MA-JI MASATOMO｜eyesbook", description, url: `${siteConfig.url}/brands/ma-ji` }
};

export default function MajiPage() {
  return (
    <>
      <nav aria-label="麵包屑" className="section-shell pt-8 text-sm text-stone">
        <Link href="/brands" className="focus-ring hover:underline">鏡框品牌</Link>
        <span className="mx-3" aria-hidden="true">/</span>
        <span aria-current="page">MA-JI MASATOMO</span>
      </nav>
      <PageHero eyebrow="Japan · eyewear" title="MA-JI MASATOMO" description="現代而優雅的日式風格，交織時裝設計與復古工藝。" />
      <section className="border-y border-line bg-paper py-16">
        <div className="section-shell grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">品牌起源</h2>
            <p className="mt-5 leading-8 text-stone">{majiIntroduction.origin}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">現代而優雅的日式風格</h2>
            <p className="mt-5 leading-8 text-stone">{majiIntroduction.style}</p>
          </div>
        </div>
      </section>
      <section className="section-shell py-16">
        <h2 className="font-serif text-3xl font-semibold text-ink">鏡框款式</h2>
        {majiModels.length ? (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {majiModels.map((item) => (
              <Link key={item.slug} href={`/brands/ma-ji/${item.slug}`} className="focus-ring group border border-line bg-paper">
                {item.photos[0] ? (
                  <div className="relative aspect-[4/3]">
                    <Image src={item.photos[0].src} alt={item.photos[0].alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain" />
                  </div>
                ) : null}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-ink group-hover:underline">{item.model}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-6 leading-8 text-stone">款式照片陸續上架中，歡迎聯絡門市詢問 MA-JI MASATOMO 鏡框與預約試戴。</p>
        )}
        <Link href="/contact" className="focus-ring mt-8 inline-flex min-h-11 items-center border border-ink bg-ink px-6 text-sm font-medium text-paper">預約試戴</Link>
      </section>
      <CtaBand />
    </>
  );
}
