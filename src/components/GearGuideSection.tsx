import React, { useState } from "react";
import { BOAT_TYPES, GEAR_ITEMS } from "../data/gearData";
import { AffiliateGlobalConfig, AffiliateProductLink, AffiliatePlatform } from "../types/affiliate";
import { buildAffiliateUrl } from "../data/defaultAffiliates";
import {
  Sparkles,
  AlertOctagon,
  CheckCircle2,
  Anchor,
  ShoppingCart,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import kayakTypesImg from "../assets/images/kayak_types_guide_1792152930624.jpg";
import { RollPracticeBoatGuide } from "./RollPracticeBoatGuide";
import { BoatHullSection } from "./BoatHullSection";

interface GearGuideProps {
  onOpenQuiz: () => void;
  affiliateConfig: AffiliateGlobalConfig;
  affiliateProducts: AffiliateProductLink[];
  onTrackClick: (gearId: string, gearTitle: string, platform: AffiliatePlatform) => void;
}

export const GearGuideSection: React.FC<GearGuideProps> = ({
  onOpenQuiz,
  affiliateConfig,
  affiliateProducts,
  onTrackClick,
}) => {
  const [selectedBoatId, setSelectedBoatId] = useState<string>("river-runner");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const activeBoat = BOAT_TYPES.find((b) => b.id === selectedBoatId) || BOAT_TYPES[0];

  const filteredGear =
    selectedCategory === "all"
      ? GEAR_ITEMS
      : GEAR_ITEMS.filter(
          (g) => g.categoryGroup === selectedCategory || g.category === selectedCategory,
        );

  const handleLinkClick = (
    gearId: string,
    gearTitle: string,
    platform: AffiliatePlatform,
    url: string,
  ) => {
    onTrackClick(gearId, gearTitle, platform);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="gear-guide" className="py-20 lg:py-28 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2 uppercase tracking-wider">
              <span className="px-2 py-0.5 bg-accent rounded text-primary">Section 01</span>
              <span aria-hidden="true">·</span>
              <span>Equipment Guide & Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-foreground tracking-tight">
              初心者向けボート・ギア選びの指針
            </h2>
            <p className="text-foreground/80 text-base mt-2 max-w-2xl leading-relaxed">
              ホワイトウォーターカヤックは用途（川下り・波乗り・大激流）によって艇の形状が劇的に異なります。
              失敗しない最初の一艇と、命を守る安全装備の選び方を詳しく解説します。
            </p>
          </div>

          <button
            onClick={onOpenQuiz}
            className="self-start md:self-auto px-6 py-3 text-sm font-bold text-primary-foreground bg-primary rounded-lg hover:bg-primary transition-colors whitespace-nowrap flex items-center gap-2 shadow-sm shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>自分に合うギアを3分で診断</span>
          </button>
        </div>

        {/* Feature 1: Boat Categories Interactive Selector */}
        <div className="bg-secondary/80 rounded-2xl border-2 border-border p-6 lg:p-10 mb-16 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                ホワイトウォーターボートの4大種別
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                形状と浮力配分の違いを知り、目指すパドリングスタイルに最適な艇を選びましょう
              </p>
            </div>

            {/* Functional segmented controls */}
            <div className="flex items-center p-1.5 bg-muted/80 rounded-xl border border-border overflow-x-auto">
              {BOAT_TYPES.map((boat) => (
                <button
                  key={boat.id}
                  onClick={() => setSelectedBoatId(boat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    selectedBoatId === boat.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/80 hover:text-foreground hover:bg-border/50"
                  }`}
                >
                  {boat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Boat Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-start">
            {/* Visual Photo & Quick Specs */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden border-2 border-border bg-card aspect-[4/3] shadow-md">
                {!imgError ? (
                  <img
                    src={kayakTypesImg || "/images/kayak_types_guide_1792152930624.jpg"}
                    alt="クリークボート、ハーフスライス、プレイボートの比較写真"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imgLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                  />
                ) : null}

                {(!imgLoaded || imgError) && (
                  <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center p-4">
                    <Anchor className="w-10 h-10 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">Boat Gallery</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-xs text-primary-foreground">
                  <span className="text-teal-300 font-bold text-sm">{activeBoat.name}</span>
                  <span className="text-slate-200 ml-1.5">({activeBoat.enName})</span>
                </div>
              </div>

              {/* Specs Box */}
              <div className="bg-card rounded-xl p-5 border border-border space-y-3 text-xs sm:text-sm shadow-xs">
                <div className="flex justify-between items-center text-foreground/80 border-b border-border/60 pb-2">
                  <span className="text-muted-foreground font-medium">標準浮力（Volume）</span>
                  <span className="font-mono font-bold text-foreground text-sm">
                    {activeBoat.volumeRange}
                  </span>
                </div>
                <div className="flex justify-between items-center text-foreground/80 border-b border-border/60 pb-2">
                  <span className="text-muted-foreground font-medium">全長レンジ（Length）</span>
                  <span className="font-mono font-bold text-foreground text-sm">
                    {activeBoat.lengthRange}
                  </span>
                </div>
                <div className="pt-1 text-foreground/80">
                  <span className="text-foreground font-bold">代表モデル：</span>{" "}
                  <span className="text-foreground">{activeBoat.popularModels.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Detailed Explanations */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
                  <span>{activeBoat.name}</span>
                  <span className="text-base font-normal text-muted-foreground">
                    / {activeBoat.enName}
                  </span>
                </h4>
                <p className="text-sm sm:text-base text-foreground/80 mt-2.5 leading-relaxed font-normal">
                  {activeBoat.shortDesc}
                </p>
              </div>

              {/* Suitability */}
              <div className="bg-accent border-2 border-teal-200 rounded-xl p-5 text-sm text-teal-950 leading-relaxed shadow-xs">
                <span className="font-bold text-primary block mb-1">こんな人・シーンに最適：</span>
                {activeBoat.suitability}
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-5 shadow-xs">
                  <h5 className="text-sm font-bold text-emerald-900 mb-2.5 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>メリット・強み</span>
                  </h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                    {activeBoat.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold leading-none mt-1">•</span>
                        <span className="leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 shadow-xs">
                  <h5 className="text-sm font-bold text-amber-900 mb-2.5 flex items-center gap-2">
                    <AlertOctagon className="w-5 h-5 text-amber-600" />
                    <span>弱点・注意すべき点</span>
                  </h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                    {activeBoat.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold leading-none mt-1">•</span>
                        <span className="leading-snug">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features List */}
              <div className="border-t border-border pt-4">
                <h5 className="text-sm font-bold text-foreground mb-3">構造的特徴：</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-foreground">
                  {activeBoat.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 1-B: Roll Practice Boat Selection Guide */}
        <RollPracticeBoatGuide />

        {/* Feature 1-C: Boat Hull Bottom Comparison */}
        <BoatHullSection />

        {/* Feature 2: Essential Gear Catalog with Categorized Navigation */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-foreground">
                  命を守るホワイトウォーター ギアカタログ
                </h3>
                {affiliateConfig.showPrNotice && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-muted text-foreground/80 rounded">
                    PR
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                基本必須ギア4点・レスキュー装備4点・ウエア3点・冬季防寒1点（計12品）の安全基準と実売比較
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {[
                { id: "all", label: "すべて (全12品)" },
                { id: "basic", label: "🛡️ 基本必須ギア (4)" },
                { id: "rescue", label: "🛟 レスキュー装備 (4)" },
                { id: "wear", label: "👕 ウエア (3)" },
                { id: "winter", label: "❄️ 冬に漕ぐとき (1)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === tab.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/80 hover:text-foreground bg-muted border border-border hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal PR Notice banner if enabled */}
          {affiliateConfig.showPrNotice && (
            <div className="bg-muted border border-border rounded-lg px-4 py-2 text-xs text-muted-foreground flex items-center gap-2">
              <span className="font-bold text-foreground">【PR表記】</span>
              <span>{affiliateConfig.prNoticeText}</span>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGear.map((item) => {
              const affProduct = affiliateProducts.find((p) => p.gearId === item.id);
              const isEnabled =
                affiliateConfig.isAffiliateActive && (affProduct?.isEnabled ?? true);

              // Distinct category styles
              const groupStyle =
                item.categoryGroup === "basic"
                  ? "bg-accent text-primary border-teal-300"
                  : item.categoryGroup === "rescue"
                    ? "bg-rose-100 text-rose-900 border-rose-300"
                    : item.categoryGroup === "wear"
                      ? "bg-sky-100 text-sky-900 border-sky-300"
                      : "bg-indigo-100 text-indigo-900 border-indigo-300";

              return (
                <div
                  key={item.id}
                  className="bg-card rounded-xl border-2 border-border p-6 flex flex-col justify-between hover:border-primary hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3 text-muted-foreground border-b border-border/60 pb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span
                          className={`font-bold text-[11px] px-2 py-0.5 rounded border ${groupStyle}`}
                        >
                          {item.categoryGroupName}
                        </span>
                        <span className="font-semibold text-muted-foreground text-[11px] bg-muted px-1.5 py-0.5 rounded">
                          {item.essentialLevel}
                        </span>
                      </div>
                      <span className="font-mono font-semibold text-foreground/80 whitespace-nowrap">
                        {item.priceRange}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-foreground mb-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground font-mono mb-3">{item.enName}</p>

                    <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tips */}
                    <div className="space-y-2 mb-4 bg-secondary p-3 rounded-lg border border-border">
                      <div className="text-xs font-bold text-foreground">選び方・安全基準:</div>
                      {item.selectionTips.slice(0, 3).map((tip, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-foreground/80"
                        >
                          <span className="text-primary font-bold leading-none mt-0.5">›</span>
                          <span className="leading-snug">{tip}</span>
                        </div>
                      ))}
                    </div>

                    {/* Recommended Model info if present */}
                    {affProduct?.recommendedBrandModel && (
                      <div className="mb-4 text-xs text-foreground/80 bg-accent/50 p-2.5 rounded-lg border border-teal-200">
                        <span className="font-bold text-primary block mb-0.5">推奨モデル例：</span>
                        <span>{affProduct.recommendedBrandModel}</span>
                      </div>
                    )}

                    {item.id === "gear-paddle" && (
                      <a
                        href="#paddle-guide"
                        className="mb-4 text-xs font-bold text-primary bg-accent hover:bg-accent border border-teal-300 rounded-lg p-2.5 flex items-center justify-between transition-colors group"
                      >
                        <span>📐 パドルの選び方・長さ診断はこちら</span>
                        <span className="text-primary group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </a>
                    )}
                  </div>

                  {/* Danger note */}
                  <div>
                    {item.dangerWarnings.length > 0 && (
                      <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 mb-4 text-xs text-amber-950 leading-relaxed">
                        <span className="font-bold text-amber-900 block mb-0.5">⚠️ 危険注意：</span>
                        {item.dangerWarnings[0]}
                      </div>
                    )}

                    {/* Affiliate Buy & Compare Buttons */}
                    {isEnabled && affProduct && (
                      <div className="pt-3 border-t border-border space-y-2">
                        <div className="text-[11px] font-bold text-muted-foreground flex items-center justify-between">
                          <span>価格・在庫をチェック</span>
                          <span className="text-[10px] text-muted-foreground/70">※広告リンク</span>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5">
                          {/* Amazon Button */}
                          <button
                            type="button"
                            onClick={() =>
                              handleLinkClick(
                                item.id,
                                item.name,
                                "amazon",
                                buildAffiliateUrl(affProduct, "amazon", affiliateConfig),
                              )
                            }
                            className="px-2 py-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                          >
                            <span>Amazon</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>

                          {/* Rakuten Button */}
                          <button
                            type="button"
                            onClick={() =>
                              handleLinkClick(
                                item.id,
                                item.name,
                                "rakuten",
                                buildAffiliateUrl(affProduct, "rakuten", affiliateConfig),
                              )
                            }
                            className="px-2 py-2 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-primary-foreground rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                          >
                            <span>楽天市場</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>

                          {/* Yahoo Button */}
                          <button
                            type="button"
                            onClick={() =>
                              handleLinkClick(
                                item.id,
                                item.name,
                                "yahoo",
                                buildAffiliateUrl(affProduct, "yahoo", affiliateConfig),
                              )
                            }
                            className="px-2 py-2 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-primary-foreground rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                          >
                            <span>Yahoo!</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
