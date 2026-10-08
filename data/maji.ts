export type MajiPhoto = {
  src: string;
  alt: string;
  color?: string;
  caption?: string;
};

export type MajiModel = {
  slug: string;
  model: string;
  description: string;
  material?: string;
  size?: string;
  colors: string[];
  photos: MajiPhoto[];
};

// Add one entry per model; keep its colors and photo angles together.
export const majiModels: MajiModel[] = [
  {
    slug: "pmj-124",
    model: "PMJ-124",
    description: "俐落方形輪廓搭配細緻鏡框線條，呈現沉穩而優雅的日常風格。透過款式實拍、配戴照片與鉸鏈近照，欣賞 PMJ-124 的造型與細節。",
    colors: [],
    photos: [
      {
        src: "/images/brands/ma-ji/pmj-124/overview.jpg",
        alt: "MA-JI MASATOMO PMJ-124 兩副鏡框的款式總覽實拍",
        caption: "款式總覽"
      },
      {
        src: "/images/brands/ma-ji/pmj-124/wearing.png",
        alt: "MA-JI MASATOMO PMJ-124 正面配戴示範",
        caption: "配戴示範"
      },
      {
        src: "/images/brands/ma-ji/pmj-124/frame-detail.jpg",
        alt: "MA-JI MASATOMO PMJ-124 鏡框輪廓與鏡腳接合處近照",
        caption: "鏡框近照"
      },
      {
        src: "/images/brands/ma-ji/pmj-124/hinge-detail.jpg",
        alt: "MA-JI MASATOMO PMJ-124 鏡框鉸鏈與螺絲細節實拍",
        caption: "鉸鏈細節"
      }
    ]
  }
];

export const majiIntroduction = {
  origin: "MA-JI MASATOMO 源自日本設計師山地正倫周的男裝品牌，品牌創立於 1985 年。時裝系列於 2010 年更名為 RYNSHU，並於同年在巴黎時裝展發表；眼鏡系列則持續沿用 MA-JI MASATOMO 的名稱。",
  style: "MA-JI MASATOMO 延續現代而優雅的復古風格，將生活哲學、藝術時尚與日本工藝融入眼鏡設計，轉化為與眾不同的現代新時尚。復古與現代交織的造型，呈現洗鍊的仿舊情懷；透過獨創設計與日本職人工藝，展現日式經典的深沉品味。"
};
