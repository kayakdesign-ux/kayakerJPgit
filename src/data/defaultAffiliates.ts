import { AffiliateGlobalConfig, AffiliateProductLink } from "../types/affiliate";

export const DEFAULT_AFFILIATE_CONFIG: AffiliateGlobalConfig = {
  amazonTrackingId: "newtokayaker-22",
  rakutenAffiliateId: "rakuten-newtokayaker",
  yahooAffiliateId: "yahoo-newtokayaker",
  isAffiliateActive: true,
  showPrNotice: true,
  prNoticeText:
    "【PR】当サイト「New to Kayaker.jp」はAmazonアソシエイト、楽天アフィリエイト等のプログラムに参加しており、適格販売により収入を得ています。",
};

export const DEFAULT_AFFILIATE_PRODUCTS: AffiliateProductLink[] = [
  // 1. 基本必須ギア
  {
    gearId: "gear-pfd",
    title: "ホワイトウォーターPFD（ライフジャケット）",
    category: "basic",
    searchKeyword: "カヤック ライフジャケット ホワイトウォーター PFD",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "Palm Peyto / Astral GreenJacket / NRS Ninja",
    priceEstimate: "¥24,000 〜 ¥48,000",
    isEnabled: true,
  },
  {
    gearId: "gear-helmet",
    title: "ホワイトウォーター専用ヘルメット (CE EN 1385)",
    category: "basic",
    searchKeyword: "カヤック ヘルメット CE EN 1385",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "Sweet Protection Rocker / WRSI Current",
    priceEstimate: "¥16,000 〜 ¥42,000",
    isEnabled: true,
  },
  {
    gearId: "gear-paddle",
    title: "ホワイトウォーターパドル",
    category: "basic",
    searchKeyword: "ホワイトウォーター パドル カヤック ワーナー",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "Werner Player / Sherpa / Select W1",
    priceEstimate: "¥32,000 〜 ¥75,000",
    isEnabled: true,
  },
  {
    gearId: "gear-spraydeck",
    title: "ネオプレン スプレースカート（スプレーデッキ）",
    category: "basic",
    searchKeyword: "カヤック スプレースカート ネオプレン",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "Palm Orbit / Seals Shocker / IR Klingon",
    priceEstimate: "¥19,000 〜 ¥35,000",
    isEnabled: true,
  },

  // 2. レスキュー装備
  {
    gearId: "gear-floatbag",
    title: "カヤック浮力体（エアバッグ）",
    category: "rescue",
    searchKeyword: "カヤック 浮力体 エアバッグ フロートバッグ",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "NRS Split Float Bags / Palm River Float Bag",
    priceEstimate: "¥8,000 〜 ¥16,000",
    isEnabled: true,
  },
  {
    gearId: "gear-whistle",
    title: "リバーホイッスル（救助笛）",
    category: "rescue",
    searchKeyword: "FOX40 ホイッスル コルクなし 救助笛",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "FOX 40 Classic / FOX 40 Sonik Blast",
    priceEstimate: "¥1,500 〜 ¥3,000",
    isEnabled: true,
  },
  {
    gearId: "gear-throwbag",
    title: "スローバッグ（レスキューロープ）",
    category: "rescue",
    searchKeyword: "カヤック スローバッグ レスキューロープ 浮力ロープ",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "Palm Pro 18m / NRS NFPA / Salamander Retriever",
    priceEstimate: "¥12,000 〜 ¥26,000",
    isEnabled: true,
  },
  {
    gearId: "gear-knife",
    title: "リバーナイフ（先丸レスキューナイフ）",
    category: "rescue",
    searchKeyword: "リバーナイフ カヤック 先丸 セレーション PFD",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "NRS Pilot Knife / NRS Co-Pilot / Gerber River",
    priceEstimate: "¥8,000 〜 ¥18,000",
    isEnabled: true,
  },

  // 3. ウエア
  {
    gearId: "gear-paddle-jacket",
    title: "パドリングジャケット（長袖・半袖）",
    category: "wear",
    searchKeyword: "パドリングジャケット カヤック セミドライ 長袖 半袖",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "Palm Zenith / Level Six Duke / Kokatat Passage",
    priceEstimate: "¥18,000 〜 ¥42,000",
    isEnabled: true,
  },
  {
    gearId: "gear-thermal-inner",
    title: "インナー（吸汗速乾・保温サーマル）",
    category: "wear",
    searchKeyword: "パドリング インナー サーマル フリース フラッドラッシュ",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "finetrack フラッドラッシュ / NRS Hydroskin / Palm Tsangpo",
    priceEstimate: "¥6,000 〜 ¥16,000",
    isEnabled: true,
  },
  {
    gearId: "gear-wet-pants",
    title: "ウェットパンツ（長ズボン・半ズボン）",
    category: "wear",
    searchKeyword: "カヤック ネオプレンパンツ ウェットパンツ ショーツ",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "NRS HydroSkin Pants & Shorts / Palm Neoflex",
    priceEstimate: "¥9,000 〜 ¥22,000",
    isEnabled: true,
  },

  // 4. 冬に漕ぐとき
  {
    gearId: "gear-drysuit",
    title: "ドライスーツ / ドライトップ",
    category: "winter",
    searchKeyword: "パドリング ドライスーツ カヤック 完全防水 ラテックス",
    customAmazonUrl: "",
    customRakutenUrl: "",
    customYahooUrl: "",
    recommendedBrandModel: "Kokatat Hydrus 3L / Palm Cascade / Sweet Protection",
    priceEstimate: "¥88,000 〜 ¥198,000",
    isEnabled: true,
  },
];

/**
 * Helper to generate outbound affiliate URLs
 */
export function buildAffiliateUrl(
  product: AffiliateProductLink,
  platform: "amazon" | "rakuten" | "yahoo",
  config: AffiliateGlobalConfig,
): string {
  if (platform === "amazon") {
    if (product.customAmazonUrl) return product.customAmazonUrl;
    const tag = config.amazonTrackingId
      ? `&tag=${encodeURIComponent(config.amazonTrackingId)}`
      : "";
    return `https://www.amazon.co.jp/s?k=${encodeURIComponent(product.searchKeyword)}${tag}`;
  }

  if (platform === "rakuten") {
    if (product.customRakutenUrl) return product.customRakutenUrl;
    return `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(product.searchKeyword)}/`;
  }

  if (platform === "yahoo") {
    if (product.customYahooUrl) return product.customYahooUrl;
    return `https://shopping.yahoo.co.jp/search?p=${encodeURIComponent(product.searchKeyword)}`;
  }

  return "#";
}
