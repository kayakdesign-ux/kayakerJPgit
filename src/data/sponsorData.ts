export interface CorporateLink {
  label: string;
  url: string;
}

export interface SponsorData {
  affiliateSlots: string[]; // HTML snippets (max 4)
  corporateLinks: CorporateLink[]; // max 4
  footerBannerHtml: string; // フッター左カラムの協賛バナー広告スペース
}

export const DEFAULT_SPONSOR_DATA: SponsorData = {
  affiliateSlots: ["", "", "", ""],
  corporateLinks: [
    { label: "", url: "" },
    { label: "", url: "" },
    { label: "", url: "" },
    { label: "", url: "" },
  ],
  footerBannerHtml: "",
};

export const SPONSOR_STORAGE_KEY = "rapidpulse_sponsor_data";
