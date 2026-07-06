import { siteConfig } from "@/lib/site";

export type KnowledgeFaq = {
  question: string;
  answer: string;
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  tldr: string;
  summary: string;
  coverImage?: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  seoDescription: string;
  tags: string[];
  featured?: boolean;
  popular?: boolean;
  sections: {
    intro: string[];
    principle: string[];
    solutions: string[];
    myths: string[];
  };
  faqs: KnowledgeFaq[];
  furtherReading: string[];
  related: string[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "anisometropia",
    title: "兩眼度數差很多怎麼辦？不等視配鏡重點整理",
    tldr: "不等視不是只把兩眼度數配清楚，還要評估影像大小差、雙眼平衡與長時間舒適度。",
    summary:
      "了解不等視的常見困擾、驗光重點與鏡片選擇，協助你找到更穩定舒服的視覺方案。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    seoDescription:
      "兩眼度數差很多可能造成疲勞、距離感不穩或配戴不適。eyesbook 整理不等視配鏡、驗光與鏡片選擇重點。",
    tags: ["驗光", "鏡片", "不等視", "眼睛健康"],
    featured: true,
    popular: true,
    sections: {
      intro: [
        "不等視指的是兩眼度數差距較明顯，可能是近視、遠視、散光或兩者組合造成。",
        "有些人平常不一定覺得看不清楚，但長時間閱讀、看螢幕或開車時，容易出現疲勞、暈眩、距離感不穩等狀況。"
      ],
      principle: [
        "兩眼度數差距大時，鏡片會讓左右眼看到的影像大小略有不同，大腦需要花更多力氣把兩邊影像融合。",
        "因此不等視配鏡除了看清楚，也要注意影像大小差、雙眼平衡、鏡片厚度與配戴位置。"
      ],
      solutions: [
        "驗光時需要確認單眼清晰度、雙眼平衡與實際使用距離，不一定追求把兩眼度數都配到最高。",
        "鏡片可依需求評估非球面、薄型鏡片、適當框型與瞳距定位，降低厚度與視覺落差。",
        "若長期無法適應，也可討論隱形眼鏡或其他視覺矯正方式。"
      ],
      myths: [
        "迷思一：兩眼一定要配到一樣清楚。實際上更重要的是雙眼一起看時是否穩定舒服。",
        "迷思二：新眼鏡暈就是配錯。度數差較大時需要適應，但若持續不適，應回店檢查與調整。"
      ]
    },
    faqs: [
      {
        question: "不等視一定要配眼鏡嗎？",
        answer:
          "不一定，但若已經影響閱讀、開車、工作或容易疲勞，建議完整驗光評估。"
      },
      {
        question: "兩眼度數差很多，新眼鏡會很難適應嗎？",
        answer:
          "有可能需要適應期。配鏡時可透過度數安排、框型與鏡片設計降低不適。"
      }
    ],
    furtherReading: ["progressive-lens", "night-driving-glare", "lens-coating"],
    related: ["blue-light", "children-vision"]
  },
  {
    slug: "night-driving-glare",
    title: "夜間開車眩光怎麼辦？鏡片、鍍膜與驗光都要看",
    tldr: "夜間眩光不一定只靠濾光鏡片解決，度數、散光、鏡片刮痕與鍍膜狀態都會影響。",
    summary:
      "整理夜間駕駛眩光原因與改善方式，協助判斷是否需要重新驗光、換鏡片或調整配戴習慣。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    seoDescription:
      "夜間開車遇到車燈眩光、光暈或視線模糊？eyesbook 整理驗光、散光、鏡片鍍膜與夜間駕駛鏡片重點。",
    tags: ["夜間駕駛", "鏡片", "驗光", "眼睛健康"],
    featured: true,
    popular: true,
    sections: {
      intro: [
        "夜間開車時，對向車燈、路燈與雨天反光都可能讓視線變得刺眼或模糊。",
        "若最近覺得夜間視力變差，不一定是單純眼睛疲勞，也可能和度數、散光、鏡片狀況有關。"
      ],
      principle: [
        "夜間瞳孔放大後，未矯正的散光、鏡片刮痕或鍍膜老化更容易被放大成光暈與眩光。",
        "如果鏡片表面反射較多，或鏡框位置讓視線偏離鏡片最佳區域，也會增加干擾。"
      ],
      solutions: [
        "先確認度數與散光是否準確，尤其是夜間才明顯不舒服的人。",
        "檢查鏡片是否有刮痕、霧化、鍍膜剝落，必要時更換低反光鍍膜鏡片。",
        "若常夜間開車，可依需求討論適合的鍍膜、鏡片設計與框型穩定性。"
      ],
      myths: [
        "迷思一：黃色鏡片一定最適合夜間開車。實際效果因人而異，也可能降低整體亮度。",
        "迷思二：只要買抗藍光就能改善夜間眩光。夜間眩光更常和散光、鍍膜與刮痕有關。"
      ]
    },
    faqs: [
      {
        question: "夜間開車眩光一定是散光嗎？",
        answer:
          "不一定。散光、度數變化、鏡片刮痕、鍍膜老化與眼睛狀態都可能造成。"
      },
      {
        question: "低反光鍍膜對夜間開車有幫助嗎？",
        answer:
          "通常有幫助，尤其是減少鏡片表面反射，但仍需要搭配準確驗光與良好鏡片狀態。"
      }
    ],
    furtherReading: ["lens-coating", "blue-light", "progressive-lens"],
    related: ["anisometropia"]
  },
  {
    slug: "blue-light",
    title: "抗藍光鏡片有需要嗎？先看你的使用情境",
    tldr: "抗藍光不是人人必備，應依螢幕時間、光線環境、鏡片鍍膜與視覺疲勞原因評估。",
    summary:
      "用眼時間長不一定只靠抗藍光解決，也要看度數、工作距離、照明與鏡片設計。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    seoDescription:
      "抗藍光鏡片是否必要？eyesbook 從螢幕使用、視覺疲勞、鍍膜與驗光角度整理選擇重點。",
    tags: ["鏡片", "眼睛健康", "驗光"],
    popular: true,
    sections: {
      intro: [
        "長時間看手機與電腦後，很多人會想到抗藍光鏡片。",
        "但眼睛疲勞的原因很多，包含度數不準、工作距離不固定、眨眼變少、照明不佳或鏡片設計不適合。"
      ],
      principle: [
        "抗藍光鏡片主要降低部分短波藍光進入眼睛，不同產品的濾光比例與色偏不同。",
        "視覺疲勞並不完全等於藍光造成，因此需要一起評估日常用眼方式。"
      ],
      solutions: [
        "如果每天長時間看螢幕，可討論抗藍光或低反光鍍膜，但仍建議先確認度數與用眼距離。",
        "保持適當照明、定時休息、調整螢幕亮度，比單靠鏡片更完整。"
      ],
      myths: [
        "迷思一：抗藍光越黃越有效。顏色深不一定代表最適合你。",
        "迷思二：戴抗藍光就不會疲勞。若度數、姿勢或工作距離不合適，仍可能不舒服。"
      ]
    },
    faqs: [
      {
        question: "小朋友需要抗藍光鏡片嗎？",
        answer:
          "需依使用時間、年齡、戶外活動與度數狀況評估，不建議只因為有看螢幕就直接配。"
      },
      {
        question: "抗藍光鏡片會有色差嗎？",
        answer:
          "部分產品會有輕微底色或反光色，若工作需要準確看色，建議先試戴或討論替代方案。"
      }
    ],
    furtherReading: ["lens-coating", "children-vision", "progressive-lens"],
    related: ["night-driving-glare"]
  },
  {
    slug: "progressive-lens",
    title: "多焦點鏡片怎麼選？從生活距離開始評估",
    tldr: "多焦點不是只看年齡，而是看遠中近距離需求、工作型態與可接受的適應方式。",
    summary:
      "了解多焦點鏡片的視區、適應重點與配鏡前要討論的生活情境。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    seoDescription:
      "多焦點鏡片怎麼選？eyesbook 整理遠中近距離、工作需求、適應期與配鏡注意事項。",
    tags: ["鏡片", "驗光", "眼睛健康"],
    featured: true,
    sections: {
      intro: [
        "當看近開始吃力，或需要一直拿下眼鏡看手機，就可能會開始考慮多焦點鏡片。",
        "多焦點可以在同一副眼鏡中提供遠、中、近不同視區，但需要依生活方式設計。"
      ],
      principle: [
        "多焦點鏡片透過漸進度數變化，讓視線從上到下對應不同距離。",
        "視區配置、鏡框高度、配戴位置與用眼習慣都會影響適應感。"
      ],
      solutions: [
        "配鏡前先整理常用距離：開車、電腦、手機、閱讀、工作台面。",
        "選擇合適鏡框高度並精準量測配戴位置，可提升多焦點使用穩定度。",
        "初次配戴者建議保留適應期，並回店調整鼻墊、鏡框角度與配戴高度。"
      ],
      myths: [
        "迷思一：多焦點一定很難適應。合適設計與準確配戴位置能大幅降低不適。",
        "迷思二：多焦點越貴一定越好。重點是設計是否符合你的生活距離與需求。"
      ]
    },
    faqs: [
      {
        question: "第一次配多焦點需要多久適應？",
        answer:
          "每個人不同，通常需要幾天到數週。若持續不舒服，建議回店檢查配戴位置與度數。"
      },
      {
        question: "多焦點適合長時間看電腦嗎？",
        answer:
          "可依需求評估一般多焦點、辦公室鏡片或抗疲勞設計，不一定每個人都適合同一種。"
      }
    ],
    furtherReading: ["blue-light", "anisometropia", "lens-coating"],
    related: ["night-driving-glare"]
  },
  {
    slug: "lens-coating",
    title: "鏡片鍍膜差在哪？低反光、耐刮與保養重點",
    tldr: "好的鍍膜能降低反光、提升清晰度與保養便利性，但仍需要正確清潔避免提早老化。",
    summary:
      "整理鏡片鍍膜的功能差異，包含低反光、耐刮、防污與日常保養注意事項。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    seoDescription:
      "鏡片鍍膜怎麼選？eyesbook 說明低反光、耐刮、防污鍍膜與眼鏡保養方式。",
    tags: ["鏡片", "保養", "夜間駕駛"],
    sections: {
      intro: [
        "鏡片鍍膜會影響反光、清潔便利性與長期使用感。",
        "同樣度數的鏡片，鍍膜不同，實際清晰度與保養體驗也可能不同。"
      ],
      principle: [
        "低反光鍍膜可降低鏡片表面反射，讓他人看你的眼睛更清楚，也降低部分視覺干擾。",
        "耐刮、防污、防水鍍膜則影響日常清潔與使用壽命。"
      ],
      solutions: [
        "若常夜間開車、拍照、會議或長時間看螢幕，可優先討論低反光表現。",
        "清潔時先沖水，再用適合的拭鏡布與清潔液，避免乾擦灰塵造成細刮痕。"
      ],
      myths: [
        "迷思一：耐刮鍍膜代表不會刮。任何鏡片仍可能因乾擦或碰撞受損。",
        "迷思二：鍍膜剝落都能修復。多數鍍膜受損後無法單獨修補，通常需更換鏡片。"
      ]
    },
    faqs: [
      {
        question: "眼鏡可以用酒精擦嗎？",
        answer:
          "不建議常態使用酒精擦拭鏡片，可能影響部分鍍膜或框材。建議用清水與專用清潔用品。"
      },
      {
        question: "鏡片有刮痕會影響視力嗎？",
        answer:
          "輕微刮痕不一定立即影響度數，但可能造成反光、霧感與夜間眩光。"
      }
    ],
    furtherReading: ["night-driving-glare", "blue-light"],
    related: ["progressive-lens"]
  },
  {
    slug: "children-vision",
    title: "兒童配鏡要注意什麼？度數、鏡框與追蹤都重要",
    tldr: "兒童配鏡不只看度數，還要注意配戴穩定、鏡框安全與定期追蹤。",
    summary:
      "整理兒童視力檢查與配鏡重點，協助家長理解鏡框、鏡片與生活習慣如何搭配。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    seoDescription:
      "兒童配鏡有哪些注意事項？eyesbook 整理兒童驗光、鏡框穩定、鏡片安全與追蹤重點。",
    tags: ["兒童視力", "驗光", "鏡框", "眼睛健康"],
    sections: {
      intro: [
        "兒童視力變化較快，配鏡時需要考慮度數、使用習慣與是否能穩定配戴。",
        "一副適合孩子的眼鏡，應該安全、穩定、容易清潔，也能支撐日常活動。"
      ],
      principle: [
        "兒童臉型、鼻樑與耳位仍在變化，鏡框若滑動或歪斜，會影響鏡片光學中心對位。",
        "定期追蹤能掌握度數變化，也能檢查鏡框是否需要調整。"
      ],
      solutions: [
        "選框時優先考慮重量、鼻墊支撐、鏡腳穩定與材質安全。",
        "鏡片可依需求評估耐衝擊、抗污與合適鍍膜，並養成正確清潔習慣。",
        "若孩子常瞇眼、歪頭、靠近看東西，建議安排檢查。"
      ],
      myths: [
        "迷思一：小朋友不說看不清楚就沒問題。孩子可能不知道自己的視覺狀態已改變。",
        "迷思二：眼鏡越鬆越舒服。太鬆反而容易滑動，影響視線與安全。"
      ]
    },
    faqs: [
      {
        question: "兒童多久需要檢查一次視力？",
        answer:
          "依年齡與度數狀況不同，建議依專業人員建議定期追蹤，若近期看東西異常應提早檢查。"
      },
      {
        question: "兒童鏡框可以買大一點戴久一點嗎？",
        answer:
          "不建議過大。鏡框太大或太鬆會影響穩定度、光學位置與活動安全。"
      }
    ],
    furtherReading: ["blue-light", "lens-coating"],
    related: ["anisometropia"]
  }
];

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}

export function getKnowledgeArticleUrl(article: KnowledgeArticle) {
  return `/knowledge/${article.slug}`;
}

export function getAllTags() {
  return Array.from(new Set(knowledgeArticles.flatMap((article) => article.tags))).sort(
    (a, b) => a.localeCompare(b, "zh-Hant")
  );
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function searchKnowledgeArticles(query: string) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return knowledgeArticles;
  }

  return knowledgeArticles
    .map((article) => {
      const titleScore = normalize(article.title).includes(normalizedQuery) ? 10 : 0;
      const tagScore = article.tags.some((tag) => normalize(tag).includes(normalizedQuery))
        ? 7
        : 0;
      const faqScore = article.faqs.some((faq) =>
        normalize(`${faq.question} ${faq.answer}`).includes(normalizedQuery)
      )
        ? 5
        : 0;
      const contentScore = normalize(
        [
          article.tldr,
          article.summary,
          article.seoDescription,
          ...article.sections.intro,
          ...article.sections.principle,
          ...article.sections.solutions,
          ...article.sections.myths
        ].join(" ")
      ).includes(normalizedQuery)
        ? 3
        : 0;

      return {
        article,
        score: titleScore + tagScore + faqScore + contentScore
      };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.article);
}
