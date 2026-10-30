export type WhitewaterClass =
  "Class I" | "Class II" | "Class III" | "Class IV" | "Class V" | "Class VI";

export type RiverRegion = "北海道・東北" | "関東" | "中部・甲信越" | "近畿" | "中国・四国" | "九州";

export type FlowLevel = "低水 (テクニカル)" | "適水 (ベスト)" | "多水 (ハイウォーター・要警戒)";

export interface RiverRapid {
  name: string;
  classLevel: WhitewaterClass;
  description: string;
  hazardNote?: string;
}

export interface RiverSpot {
  id: string;
  name: string;
  riverName: string;
  prefecture: string;
  region: RiverRegion;
  difficulty: WhitewaterClass;
  flowLevel: FlowLevel;
  distanceKm: number;
  putIn: string;
  takeOut: string;
  coordinates: { x: number; y: number }; // Relative position on schematic map (0-100%)
  description: string;
  keyRapids: RiverRapid[];
  hazards: string[];
  recommendedBoats: string[];
  scoutingAdvice: string;
  gaugeStationUrl?: string;
  bestSeason: string;
  isUserAdded?: boolean;
}

export interface BoatTypeInfo {
  id: string;
  name: string;
  enName: string;
  shortDesc: string;
  volumeRange: string;
  lengthRange: string;
  features: string[];
  pros: string[];
  cons: string[];
  suitability: string;
  popularModels: string[];
}

export type GearCategoryGroup = "basic" | "rescue" | "wear" | "winter";

export interface GearItem {
  id: string;
  category: string;
  categoryGroup: GearCategoryGroup;
  categoryGroupName: string;
  name: string;
  enName: string;
  essentialLevel: "必須" | "推奨" | "ステップアップ" | "冬季必須" | "レスキュー必須" | "基本装備";
  description: string;
  selectionTips: string[];
  dangerWarnings: string[];
  priceRange: string;
  keySpecs: string[];
}

export interface SafetyTopic {
  id: string;
  title: string;
  enTitle: string;
  category: "hazard" | "self-rescue" | "group-rescue" | "communication";
  severity: "高リスク・致命的" | "基本自己脱出" | "必須チームワーク" | "合図・ルール";
  summary: string;
  detailedPoints: string[];
  actionProtocol: string[];
  preventativeAdvice: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  kana: string;
  enTerm: string;
  category: "flow" | "technique" | "hazard" | "gear" | "slang";
  shortDef: string;
  fullDef: string;
  contextUsage: string;
  relatedTerms: string[];
  isUserAdded?: boolean;
}

export interface ChecklistItem {
  id: string;
  category: "personal-gear" | "boat-check" | "team-scout" | "emergency-kit";
  title: string;
  detail: string;
}
