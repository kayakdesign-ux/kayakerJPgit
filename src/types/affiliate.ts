export type AffiliatePlatform = "amazon" | "rakuten" | "yahoo";

export interface AffiliateGlobalConfig {
  amazonTrackingId: string;
  rakutenAffiliateId: string;
  yahooAffiliateId: string;
  isAffiliateActive: boolean;
  showPrNotice: boolean;
  prNoticeText: string;
}

export interface AffiliateProductLink {
  gearId: string;
  title: string;
  category: string;
  searchKeyword: string;
  customAmazonUrl?: string;
  customRakutenUrl?: string;
  customYahooUrl?: string;
  recommendedBrandModel: string;
  priceEstimate: string;
  isEnabled: boolean;
}

export interface AffiliateClickRecord {
  id: string;
  gearId: string;
  gearTitle: string;
  platform: AffiliatePlatform;
  timestamp: string;
}
