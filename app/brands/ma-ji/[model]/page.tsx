import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { majiModels } from "@/data/maji";
import { siteConfig } from "@/lib/site";

type Props = { params: { model: string } };

export function generateStaticParams() {
  return majiModels.map((item) => ({ model: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = majiModels.find((model) => model.slug === params.model);
  if (!item) return {};
  const url = `${siteConfig.url}/brands/ma-ji/${item.slug}`;
  return {
    title: `MA-JI MASATOMO ${item.model}｜eyesbook`,
    description: item.description,
    alternates: { canonical: url },
    openGraph: {
      title: `MA-JI MASATOMO ${item.model}`,
      description: item.description,
      url,
      images: item.photos[0] ? [{ url: item.photos[0].src, alt: item.photos[0].alt }] : []
    }
  };
}

export default function MajiModelPage({ params }: Props) {
  const item = majiModels.find((model) => model.slug === params.model);
  if (!item) notFound();

  return (
    <article className="section-shell py-12 sm:py-16">
      <nav aria-label="麵包屑" className="flex flex-wrap gap-3 text-sm text-stone">
        <Link href="/brands" className="focus-ring hover:underline">鏡框品牌</Link>
        <span aria-hidden="true">/</span>
        <Link href="/brands/ma-ji" className="focus-ring hover:underline">MA-JI MASATOMO</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{item.model}</span>
      </nav>
      <p className="mt-10 text-sm text-stone">MA-JI MASATOMO</p>
      <h1 className="mt-3 break-words font-serif text-4xl font-semibold text-ink">{item.model}</h1>
      <p className="mt-6 max-w-3xl leading-8 text-stone">{item.description}</p>
      <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5 border-y border-line py-6 text-sm">
        {item.material ? <div><dt className="text-stone">材質</dt><dd className="mt-2 text-ink">{item.material}</dd></div> : null}
        {item.size ? <div><dt className="text-stone">尺寸</dt><dd className="mt-2 text-ink">{item.size}</dd></div> : null}
        {item.colors.length ? <div><dt className="text-stone">顏色／色號</dt><dd className="mt-2 text-ink">{item.colors.join("、")}</dd></div> : null}
      </dl>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {item.photos.map((photo) => (
          <figure key={photo.src}>
            <div className="relative aspect-[4/3] bg-paper">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
            </div>
            {photo.color || photo.caption ? <figcaption className="mt-3 text-sm leading-7 text-stone">{[photo.color, photo.caption].filter(Boolean).join("｜")}</figcaption> : null}
          </figure>
        ))}
      </div>
      <p className="mt-10 text-sm leading-7 text-stone">現貨款式與顏色請洽門市確認。</p>
      <Link href="/contact" className="focus-ring mt-5 inline-flex min-h-11 items-center bg-ink px-6 text-sm font-medium text-paper">預約試戴</Link>
    </article>
  );
}
