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
  coverImageAlt?: string;
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
    title: "如何預防小朋友度數加深？兒童近視控制重點",
    tldr: "孩子近視不一定只是看太多手機，近距離用眼、缺乏戶外日照與作息不規律都可能增加近視風險。",
    summary:
      "整理兒童近視加深的原因、眼軸變長的概念，以及日常生活中可以建立的護眼習慣。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    seoDescription:
      "如何預防小朋友度數加深？eyesbook 整理兒童近視控制、戶外日照、20-20-20護眼法則、眼軸追蹤與離焦鏡片重點。",
    coverImage: "/images/knowledge/children-myopia-prevention.jpg",
    coverImageAlt:
      "預防兒童近視守則，包含控管看近時間、增加戶外日照、定期視力檢查與規律睡眠",
    tags: ["兒童視力", "驗光", "鏡框", "眼睛健康"],
    sections: {
      intro: [
        "孩子近視，不一定只是「看太多手機」。長時間近距離用眼、缺乏戶外日照、作息不規律，都可能增加近視風險。",
        "兒童時期是眼睛發育的重要階段，越早建立良好的用眼習慣，越有機會降低近視快速增加的風險。"
      ],
      principle: [
        "近視不只是度數增加，更代表眼軸正在慢慢變長。眼軸變長後，光線聚焦位置改變，就會造成看遠不清楚。",
        "長時間看近會讓睫狀肌持續緊繃，增加眼睛負擔。戶外自然光則可能幫助刺激視網膜分泌多巴胺，對降低近視風險與抑制眼軸過度增長有幫助。",
        "環境照度可作為參考：一般室內約300~500勒克斯，教室或辦公室約500~1000勒克斯，陰天戶外約1000~5000勒克斯，樹蔭戶外約5000~10000勒克斯，晴天戶外甚至可超過50000勒克斯。"
      ],
      solutions: [
        "控管看近時間：建議使用20-20-20護眼法則，每20~30分鐘休息一下，看看遠方20秒以上。",
        "增加戶外活動與日照時間：建議每天至少戶外活動2小時，讓眼睛有足夠的遠距離視覺與自然光刺激。",
        "定期視力檢查：建議定期檢查視力與眼軸長度，及早發現、及早控制近視發展。",
        "維持規律睡眠與作息：不規律作息與長時間晚睡可能增加近視風險。學齡兒童建議每天睡滿9~11小時。",
        "積極治療與預防：點散瞳劑及配戴離焦鏡片，是目前普遍用來控制與預防度數加深的方法，可依專業評估選擇。"
      ],
      myths: [
        "迷思一：孩子近視都是手機造成。其實近距離用眼時間、戶外日照不足、睡眠與作息都會影響。",
        "迷思二：只要戴眼鏡就會越戴越深。真正需要關注的是近視控制、眼軸變化與生活習慣。",
        "迷思三：看得清楚就不用追蹤。兒童近視可能持續發展，定期追蹤視力與眼軸更能掌握變化。"
      ]
    },
    faqs: [
      {
        question: "如何預防小朋友度數加深？",
        answer:
          "可以從日常生活開始：控管看近時間、增加戶外活動與日照、定期視力與眼軸檢查、維持規律睡眠與作息。若近視已經開始進展，也可依專業評估討論散瞳劑或離焦鏡片等控制方式。"
      },
      {
        question: "兒童多久需要檢查一次視力？",
        answer:
          "依年齡、度數與眼軸變化不同，建議依專業人員建議定期追蹤。若孩子常瞇眼、歪頭、靠近看東西，應提早檢查。"
      },
      {
        question: "每天戶外活動多久比較好？",
        answer:
          "建議每天至少戶外活動2小時。戶外自然光亮度遠高於一般室內環境，對兒童近視風險控制有幫助。"
      }
    ],
    furtherReading: ["blue-light", "lens-coating"],
    related: ["anisometropia"]
  },
  {
    slug: "visual-acuity-arc-minute",
    title: "視力表上的 E 字怎麼看？從 1 分角理解視力檢查",
    tldr: "視力檢查測的不是單純看得到，而是眼睛能不能把非常接近的細節分開辨認。",
    summary:
      "用 Snellen E 視力表與兩顆星星的例子，理解視力 1.0、20/20 與 1 分角代表什麼。",
    author: siteConfig.author,
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    seoDescription:
      "視力表上的 E 字為什麼是 5×5？1 分角是什麼？eyesbook 用 Snellen E 與星星圖解說明視力 1.0、20/20 與視覺解析能力。",
    coverImage: "/images/knowledge/visual-acuity-stars.jpg",
    coverImageAlt:
      "星星與視力檢查的關係，說明 Snellen E、1 分角與視力 1.0 的圖解",
    tags: ["驗光", "眼睛健康"],
    featured: true,
    popular: true,
    sections: {
      intro: [
        "很多人做視力檢查時，只知道要判斷 E 字開口方向，卻不一定知道 E 字背後其實有精密的比例設計。",
        "標準視力表使用的 Snellen E，是為了測量眼睛能不能辨識細小細節。這也是為什麼視力檢查看的不是單純有沒有看到，而是能不能分辨方向與細節。"
      ],
      principle: [
        "標準 Snellen E 採用 5×5 比例設計，整個 E 字高度與寬度都是 5 個單位，每條黑線厚度與中間空隙都是 1 個單位。",
        "在視力檢查中，E 字最細線條的厚度會對應到 1 分角。1 分角是眼睛看到兩個點之間的最小夾角，也就是眼睛能分開辨認多細微細節的標準。",
        "因此，視力 1.0 或 20/20 代表在標準距離下，眼睛可以分辨相隔 1 分角的兩個細節。"
      ],
      solutions: [
        "如果視力下降，代表眼睛需要更大的細節才能辨認。例如視力 0.5 約需要 2 分角，視力 0.2 約需要 5 分角，視力 0.1 約需要 10 分角。",
        "視力檢查能幫助判斷遠方細節辨識能力，但若有模糊、重影、眩光或容易疲勞，也需要搭配完整驗光與雙眼視覺評估。",
        "定期視力檢查可以幫助追蹤度數變化、散光狀況與配鏡需求，尤其兒童、學生、長時間用眼工作者更應留意。"
      ],
      myths: [
        "迷思一：看得到就代表視力正常。真正的視力重點是能不能把接近的細節分開辨認。",
        "迷思二：視力 1.0 就完全沒有問題。視力 1.0 代表標準解析能力，但不代表沒有疲勞、散光、雙眼協調或夜間眩光問題。",
        "迷思三：視力表只是測遠方清楚不清楚。視力表其實是在測量視覺解析能力，也就是分辨細節的能力。"
      ]
    },
    faqs: [
      {
        question: "為什麼視力表上的 E 字都是由 5 個單位組成？",
        answer:
          "標準視力表 Snellen E 是以 5×5 比例製作。整個 E 字的高度與寬度都是 5 個單位，每一條黑線厚度是 1 個單位，中間空隙也是 1 個單位。這樣的設計可以讓醫師利用最細的線條來測量眼睛能辨識多小的細節。"
      },
      {
        question: "什麼是 1 分角（1 arc minute）？",
        answer:
          "1 分角是眼睛看到兩個點之間的最小夾角。簡單來說，就是兩個細節之間有多靠近，眼睛還能不能分開辨認。在視力檢查中，E 字最細的線條厚度就是設計成 1 分角。"
      },
      {
        question: "為什麼視力表要用 1 分角當標準？",
        answer:
          "因為人的視力本質上是能分辨多細小的細節。世界各國使用角度來定義視力，而不是直接使用公分或毫米，這樣無論觀看距離是多少，都能用同一個標準比較視力。"
      },
      {
        question: "視力 1.0（20/20）代表什麼？",
        answer:
          "視力 1.0（20/20）表示在 5 公尺的測試距離下，眼睛可以清楚分辨相隔 1 分角的兩個細節，也就是一般所說的正常標準視力。"
      },
      {
        question: "視力越差，代表什麼？",
        answer:
          "視力越差，不代表眼睛完全看不到，而是需要更大的細節才能辨認。例如視力 1.0 可分辨 1 分角，視力 0.5 需要約 2 分角，視力 0.2 需要約 5 分角，視力 0.1 需要約 10 分角。"
      },
      {
        question: "為什麼圖片用兩顆星星來表示視力？",
        answer:
          "兩顆星星代表兩個獨立的細節。如果眼睛可以把兩顆星星清楚分開，就表示具有足夠的解析能力。如果兩顆星星開始重疊，看起來像一團，就代表兩個細節之間的角度已經小於眼睛的解析能力。"
      },
      {
        question: "E 字和兩顆星星有什麼關係？",
        answer:
          "兩者測量的是同一件事情：眼睛辨識細節的能力。E 字測量能不能分辨開口方向，兩顆星星測量能不能分辨兩個非常接近的細節，雖然呈現方式不同，但都與 1 分角判定標準有關。"
      },
      {
        question: "為什麼醫師不是直接測看得到，而是測分得開？",
        answer:
          "真正的視力不是有沒有看到物體，而是能不能把兩個非常接近的細節區分開。例如遠方兩個人、路上的兩條白線、小字之間的筆畫，都需要解析能力才能分辨。"
      }
    ],
    furtherReading: ["anisometropia", "night-driving-glare", "children-vision"],
    related: ["progressive-lens", "blue-light"]
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
