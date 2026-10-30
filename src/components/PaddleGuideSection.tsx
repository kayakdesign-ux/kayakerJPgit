import React, { useState } from "react";
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
  Zap,
  Info,
  Maximize2,
  Sliders,
  Wind,
} from "lucide-react";
import paddleGuideImg from "../assets/images/whitewater_paddle_guide_1792159667405.jpg";
import {
  SHAFT_COMPARISONS,
  PADDLE_MATERIALS,
  POPULAR_PADDLES,
  PADDLE_MISTAKES,
  FEATHER_COMPARISON,
  FEATHER_ANGLE_ZONES,
} from "../data/paddleData";
import { AffiliateGlobalConfig, AffiliateProductLink, AffiliatePlatform } from "../types/affiliate";
import { buildAffiliateUrl } from "../data/defaultAffiliates";

interface PaddleGuideSectionProps {
  affiliateConfig: AffiliateGlobalConfig;
  affiliateProducts: AffiliateProductLink[];
  onTrackClick: (gearId: string, gearTitle: string, platform: AffiliatePlatform) => void;
}

export const PaddleGuideSection: React.FC<PaddleGuideSectionProps> = ({
  affiliateConfig,
  affiliateProducts,
  onTrackClick,
}) => {
  // State for image handling
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Active view tab: 'specs' | 'shaft' | 'materials' | 'models'
  const [activeTab, setActiveTab] = useState<"shaft" | "materials" | "models" | "mistakes">(
    "shaft",
  );

  // Interactive Calculator State
  const [heightRange, setHeightRange] = useState<"short" | "medium" | "tall" | "veryTall">(
    "medium",
  );
  const [paddleStyle, setPaddleStyle] = useState<"river" | "play" | "creek">("river");
  const [shaftPreference, setShaftPreference] = useState<"wristCare" | "budget">("wristCare");
  const [selectedFeatherAngle, setSelectedFeatherAngle] = useState<string>("30°〜45°");

  // Calculate recommendation
  const calculateRecommendation = () => {
    let length = "197 cm";
    let bladeSize = "ミディアム (約680 cm²)";
    let bladeModel = "Werner Sherpa または Player";

    if (paddleStyle === "play") {
      if (heightRange === "short") length = "191 cm";
      else if (heightRange === "medium") length = "191〜194 cm";
      else length = "194 cm";
      bladeSize = "ミディアム・ダウンチルト (約675 cm²)";
      bladeModel = "Werner Player / Sidekick";
    } else if (paddleStyle === "creek") {
      if (heightRange === "short") length = "194〜197 cm";
      else if (heightRange === "medium") length = "197〜200 cm";
      else length = "200〜203 cm";
      bladeSize = heightRange === "short" ? "ミディアム (約680 cm²)" : "ラージ (約720 cm²)";
      bladeModel = heightRange === "short" ? "Werner Sherpa" : "Werner Powerhouse";
    } else {
      // river runner
      if (heightRange === "short") length = "194 cm";
      else if (heightRange === "medium") length = "197 cm";
      else if (heightRange === "tall") length = "197〜200 cm";
      else length = "200 cm";
      bladeSize = heightRange === "veryTall" ? "ラージ (約720 cm²)" : "ミディアム (約680 cm²)";
      bladeModel = heightRange === "veryTall" ? "Werner Powerhouse" : "Werner Sherpa";
    }

    const shaft =
      shaftPreference === "wristCare"
        ? "エルゴ・ベントシャフト（クランク）推奨"
        : "ストレートシャフト（高コスパ・基本型）";

    return {
      length,
      bladeSize,
      shaft,
      feather: "30° または 45° (右利き基準 RHC)",
      bladeModel,
      reason:
        paddleStyle === "play"
          ? "ウェーブでの素早い回転と左右の切り返しのため、短めのレングスと小回りブレードが最適です。"
          : paddleStyle === "creek"
            ? "大波を突破する力強いキャッチ力と、高い座高・ボリュームのあるボートに対応するやや長めレングスです。"
            : "川下りの推進力、ロールのしやすさ、肩への負担軽減を高次元で両立する王道セッティングです。",
    };
  };

  const recommendation = calculateRecommendation();

  // Outbound affiliate link click handler
  const handleAffiliateSearch = (keyword: string, platform: AffiliatePlatform) => {
    onTrackClick("gear-paddle", `パドル検索: ${keyword}`, platform);
    let targetUrl = "#";
    if (platform === "amazon") {
      const tag = affiliateConfig.amazonTrackingId
        ? `&tag=${encodeURIComponent(affiliateConfig.amazonTrackingId)}`
        : "";
      targetUrl = `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}${tag}`;
    } else if (platform === "rakuten") {
      targetUrl = `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`;
    } else if (platform === "yahoo") {
      targetUrl = `https://shopping.yahoo.co.jp/search?p=${encodeURIComponent(keyword)}`;
    }
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="paddle-guide" className="py-20 lg:py-28 bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2 uppercase tracking-wider">
              <span className="px-2 py-0.5 bg-accent rounded text-primary">Section 01-B</span>
              <span aria-hidden="true">·</span>
              <span>Paddle Selection & Ergonomics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-foreground tracking-tight">
              パドルの選び方徹底ガイド
            </h2>
            <p className="text-foreground/80 text-base mt-2 max-w-2xl leading-relaxed">
              カヤックにおいてパドルは「水と身体をつなぐ唯一の推進エンジン」。
              長さ・シャフト形状（ベント/ストレート）・ブレード素材の違いで、疲れにくさやロールの成功率が劇的に変わります。
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card px-4 py-2.5 rounded-xl border border-border shadow-xs">
            <Shield className="w-4 h-4 text-primary shrink-0" />
            <span>手首の腱鞘炎防止 &amp; 激流走破の適正スペックを解説</span>
          </div>
        </div>

        {/* Feature Hero: Illustrated Visual Breakdown & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          {/* Image visual with annotations */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-border bg-slate-900 aspect-[16/9] shadow-lg group">
              {!imgError ? (
                <img
                  src={paddleGuideImg || "/images/whitewater_paddle_guide_1792159667405.jpg"}
                  alt="ホワイトウォーター用パドルのストレートシャフトとベントシャフト比較"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                />
              ) : null}

              {(!imgLoaded || imgError) && (
                <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-muted-foreground/70 p-6">
                  <Sliders className="w-10 h-10 text-teal-400 mb-2 animate-pulse" />
                  <span className="text-sm font-mono">
                    Loading Whitewater Paddle Architecture...
                  </span>
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom annotation labels */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-primary-foreground">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-amber-500/90 text-slate-950 font-bold rounded text-[11px]">
                    グラスファイバーブレード
                  </span>
                  <span className="px-2 py-0.5 bg-rose-600/90 text-primary-foreground font-bold rounded text-[11px]">
                    エルゴ・ベントシャフト
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-300 hidden sm:inline">
                  Carbon weave &amp; High-Angle Blade
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground px-1">
              <span>
                ▲ 左：ストレートシャフト（黄色ブレード） / 右：エルゴベントシャフト（赤色ブレード）
              </span>
              <span className="font-mono text-muted-foreground/70">Werner Style Guide</span>
            </div>
          </div>

          {/* Interactive Paddle Spec Calculator Widget */}
          <div className="lg:col-span-6 bg-card rounded-2xl border-2 border-border p-6 sm:p-7 shadow-md">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="p-2 bg-accent text-primary rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">あなたに最適なパドル自動診断</h3>
                <p className="text-xs text-muted-foreground">
                  身長・スタイル・手首の要望を選ぶだけで適正サイズを算出
                </p>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              {/* Height */}
              <div>
                <label className="text-xs font-bold text-foreground/80 block mb-1.5">
                  1. パドラーの身長
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: "short" as const, label: "〜165cm" },
                    { id: "medium" as const, label: "166〜174cm" },
                    { id: "tall" as const, label: "175〜182cm" },
                    { id: "veryTall" as const, label: "183cm〜" },
                  ].map((h) => (
                    <button
                      key={h.id}
                      onClick={() => setHeightRange(h.id)}
                      className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        heightRange === h.id
                          ? "bg-primary text-primary-foreground border-primary shadow-xs"
                          : "bg-secondary text-foreground/80 border-border hover:bg-muted"
                      }`}
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div>
                <label className="text-xs font-bold text-foreground/80 block mb-1.5">
                  2. 主なパドリングスタイル
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "river" as const, label: "川下り・リバーラン" },
                    { id: "play" as const, label: "プレイ・波乗り" },
                    { id: "creek" as const, label: "クリーク・大激流" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setPaddleStyle(s.id)}
                      className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        paddleStyle === s.id
                          ? "bg-primary text-primary-foreground border-primary shadow-xs"
                          : "bg-secondary text-foreground/80 border-border hover:bg-muted"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shaft Priority */}
              <div>
                <label className="text-xs font-bold text-foreground/80 block mb-1.5">
                  3. 重視するポイント
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setShaftPreference("wristCare")}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${
                      shaftPreference === "wristCare"
                        ? "bg-accent border-primary text-primary ring-1 ring-teal-500"
                        : "bg-secondary border-border text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    <span className="block font-bold">手首痛・疲労を予防（推奨）</span>
                    <span className="text-[10px] text-muted-foreground">エルゴベントを候補に</span>
                  </button>
                  <button
                    onClick={() => setShaftPreference("budget")}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${
                      shaftPreference === "budget"
                        ? "bg-accent border-primary text-primary ring-1 ring-teal-500"
                        : "bg-secondary border-border text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    <span className="block font-bold">コスト重視・ベーシック</span>
                    <span className="text-[10px] text-muted-foreground">
                      ストレートシャフトを候補に
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Diagnostic Result Box */}
            <div className="mt-5 p-4 bg-teal-900 text-primary-foreground rounded-xl space-y-2.5 shadow-inner">
              <div className="flex items-center justify-between text-xs text-teal-200 border-b border-teal-800 pb-2">
                <span className="font-mono uppercase tracking-wider font-bold">
                  Recommended Spec
                </span>
                <span className="text-[11px] text-teal-300">ホワイトウォーター推奨値</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-[11px] text-teal-300 block">推奨パドル全長:</span>
                  <span className="text-xl font-extrabold text-amber-300 font-mono">
                    {recommendation.length}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-teal-300 block">ブレード面積:</span>
                  <span className="text-sm font-bold text-primary-foreground">
                    {recommendation.bladeSize}
                  </span>
                </div>
              </div>

              <div className="text-xs pt-1 border-t border-teal-800/80 space-y-1">
                <div>
                  <span className="text-teal-300">推奨シャフト: </span>
                  <span className="font-semibold text-primary-foreground">
                    {recommendation.shaft}
                  </span>
                </div>
                <div>
                  <span className="text-teal-300">推奨フェザー角: </span>
                  <span className="font-semibold text-primary-foreground">
                    {recommendation.feather}
                  </span>
                </div>
                <div>
                  <span className="text-teal-300">代表適合モデル: </span>
                  <span className="font-semibold text-amber-200">{recommendation.bladeModel}</span>
                </div>
              </div>

              <p className="text-[11px] text-teal-200/90 leading-relaxed pt-1">
                💡 {recommendation.reason}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Tabs: 4-Core Knowledge Pillars */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-border pb-3 overflow-x-auto">
            {[
              { id: "shaft" as const, label: "① フェザー角 ＆ シャフト形状" },
              { id: "materials" as const, label: "② ブレード素材の比較" },
              { id: "models" as const, label: "③ 定番モデル名鑑 & 予備パドル" },
              { id: "mistakes" as const, label: "④ 初心者がやりがちな5大失敗" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card text-foreground/80 hover:text-foreground border border-border hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content 1: Feather Offset Angle & Shaft Comparison */}
          {activeTab === "shaft" && (
            <div className="mt-8 space-y-8">
              {/* ========================================================================= */}
              {/* NEW SUBSECTION: アンフェザー VS フェザー（ブレードオフセット角） */}
              {/* ========================================================================= */}
              <div className="bg-card rounded-2xl border-2 border-border p-6 sm:p-8 shadow-sm space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-1.5 uppercase tracking-wider">
                      <span className="px-2 py-0.5 bg-accent rounded text-primary">
                        Blade Offset Angle
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>フェザー角の徹底比較</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      アンフェザー（0度） vs フェザー（角度付き：30°〜90°）
                    </h3>
                    <p className="text-foreground/80 text-sm mt-1.5 leading-relaxed max-w-3xl">
                      パドルの「フェザー角」とは、左右のブレードがつくるねじれ角度のことです。
                      手首のひねりを無くす「0度（アンフェザー）」の利点・欠点と、角度による競技スタイル（フリースタイル・リバーラン・スラローム）別の向き不向きを徹底解説します。
                    </p>
                  </div>

                  <div className="bg-amber-50 border-2 border-amber-200 text-amber-950 p-3.5 rounded-xl text-xs shrink-0 max-w-sm shadow-xs">
                    <span className="font-bold text-amber-900 block mb-0.5 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      現代のホワイトウォーター基準
                    </span>
                    昔の90度主流から、現在は手首への負担が少ない
                    <strong className="text-amber-950">「30°〜45°」（または0°）</strong>
                    が世界のデファクトスタンダードです。
                  </div>
                </div>

                {/* 2-Column Comparison: アンフェザー (0度) vs フェザー (角度付き) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {FEATHER_COMPARISON.map((feather) => (
                    <div
                      key={feather.type}
                      className={`rounded-2xl border-2 p-6 flex flex-col justify-between ${
                        feather.type === "unfeather"
                          ? "border-teal-400 bg-accent/20"
                          : "border-border bg-card"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                          <div>
                            <span className="text-xs font-mono font-bold text-primary uppercase block">
                              {feather.enName}
                            </span>
                            <h4 className="text-xl font-bold text-foreground">{feather.name}</h4>
                          </div>
                          <span className="text-xs font-mono font-bold px-2.5 py-1 bg-muted text-foreground rounded-md border border-border">
                            {feather.angleRange}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed bg-secondary p-3 rounded-xl border border-border/80">
                          {feather.summary}
                        </p>

                        {/* Hand & Wind Specs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="bg-muted/80 rounded-lg p-2.5 text-foreground">
                            <span className="font-bold text-foreground block mb-0.5">
                              📐 手首の回転負荷:
                            </span>
                            <span className="text-[11px] leading-snug">{feather.wristLoad}</span>
                          </div>
                          <div
                            className={`rounded-lg p-2.5 ${feather.type === "unfeather" ? "bg-rose-50 border border-rose-200 text-rose-950" : "bg-emerald-50 border border-emerald-200 text-emerald-950"}`}
                          >
                            <span className="font-bold block mb-0.5 flex items-center gap-1">
                              <Wind className="w-3 h-3" />
                              風への耐性（向かい風）:
                            </span>
                            <span className="text-[11px] leading-snug font-medium">
                              {feather.windResistance}
                            </span>
                          </div>
                        </div>

                        {/* Pros */}
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>メリット（利点）</span>
                          </span>
                          <ul className="space-y-1.5 text-xs text-foreground/80">
                            {feather.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-1.5 leading-snug">
                                <span className="text-emerald-600 font-bold">•</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                            <span>デメリット（欠点・注意点）</span>
                          </span>
                          <ul className="space-y-1.5 text-xs text-foreground/80">
                            {feather.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-1.5 leading-snug">
                                <span className="text-amber-600 font-bold">•</span>
                                <span
                                  className={
                                    con.includes("向かい風")
                                      ? "font-bold text-rose-900 bg-rose-50 px-1 py-0.5 rounded"
                                      : ""
                                  }
                                >
                                  {con}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border text-xs mt-4">
                        <span className="font-bold text-foreground block mb-0.5">
                          おすすめの対象：
                        </span>
                        <p className="text-foreground/80 leading-snug">{feather.recommendedFor}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ========================================================================= */}
                {/* 角度による向き不向き（早見表 ＆ インタラクティブ角セレクター） */}
                {/* ========================================================================= */}
                <div className="bg-secondary border-2 border-border rounded-2xl p-5 sm:p-6 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                        Angle Selection Matrix
                      </span>
                      <h4 className="text-lg font-extrabold text-foreground">
                        フェザー角度による向き・不向き早見表
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        自分のやりたいスタイル（フリースタイル・リバーラン・スラローム）をクリックして詳細特性を確認できます。
                      </p>
                    </div>

                    <div className="text-xs font-mono font-bold text-primary bg-accent px-3 py-1.5 rounded-lg shrink-0">
                      アングル別 4区分
                    </div>
                  </div>

                  {/* Angle Select Tabs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {FEATHER_ANGLE_ZONES.map((zone) => (
                      <button
                        key={zone.angle}
                        onClick={() => setSelectedFeatherAngle(zone.angle)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedFeatherAngle === zone.angle
                            ? "bg-primary text-primary-foreground border-primary shadow-md ring-2 ring-teal-400/50"
                            : "bg-card text-foreground border-border hover:border-border hover:bg-muted/60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-black font-mono">{zone.angle}</span>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              selectedFeatherAngle === zone.angle
                                ? "bg-primary text-teal-100"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {zone.suitability}
                          </span>
                        </div>
                        <div
                          className={`text-xs font-bold leading-tight line-clamp-1 ${selectedFeatherAngle === zone.angle ? "text-primary-foreground" : "text-foreground"}`}
                        >
                          {zone.bestDiscipline}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Selected Angle Detailed Inspector Card */}
                  {(() => {
                    const activeZone =
                      FEATHER_ANGLE_ZONES.find((z) => z.angle === selectedFeatherAngle) ||
                      FEATHER_ANGLE_ZONES[1];
                    return (
                      <div className="bg-card rounded-xl border-2 border-teal-300 p-5 space-y-4 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-teal-900 text-primary-foreground flex items-center justify-center font-mono font-black text-lg shrink-0 shadow-sm">
                              {activeZone.angle}
                            </div>
                            <div>
                              <h5 className="text-base font-extrabold text-foreground">
                                {activeZone.name}
                              </h5>
                              <span className="text-xs font-bold text-primary">
                                主な用途：{activeZone.bestDiscipline}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent text-primary border border-teal-200">
                              🎯 {activeZone.suitability}
                            </span>
                          </div>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div className="bg-secondary p-3 rounded-lg border border-border space-y-1">
                            <span className="font-bold text-foreground block">
                              ✋ 手首のひねり動作:
                            </span>
                            <p className="text-foreground/80 leading-snug">
                              {activeZone.wristMovement}
                            </p>
                          </div>
                          <div className="bg-secondary p-3 rounded-lg border border-border space-y-1">
                            <span className="font-bold text-foreground block flex items-center gap-1">
                              <Wind className="w-3.5 h-3.5 text-primary" />
                              風の影響（アゲインスト耐性）:
                            </span>
                            <p className="text-foreground/80 leading-snug">
                              {activeZone.windEffect}
                            </p>
                          </div>
                        </div>

                        {/* Characteristics & Key Advice */}
                        <div className="space-y-2 text-xs">
                          <div className="bg-accent/50 p-3 rounded-lg border border-teal-100">
                            <span className="font-bold text-teal-950 block mb-0.5">
                              🔍 特徴 ＆ 運動特性:
                            </span>
                            <p className="text-foreground/80 leading-relaxed">
                              {activeZone.characteristics}
                            </p>
                          </div>
                          <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200 text-amber-950">
                            <span className="font-bold text-amber-900 block mb-0.5">
                              💡 プロのアドバイス:
                            </span>
                            <p className="leading-relaxed">{activeZone.keyAdvice}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SUBSECTION 2: ストレートシャフト vs エルゴ・ベントシャフト（クランク） */}
              {/* ========================================================================= */}
              <div className="bg-card rounded-2xl border-2 border-border p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">
                  ストレートシャフト vs エルゴ・ベントシャフト（クランク）
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-8">
                  ホワイトウォーターパドルのもうひとつの重要要素がシャフトの形状です。
                  ベントシャフトは人間工学に基づき、グリップ部分が絶妙な角度で湾曲しており、手首を痛めやすいパドラーの救世主となっています。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SHAFT_COMPARISONS.map((shaft) => (
                    <div
                      key={shaft.type}
                      className={`rounded-xl border-2 p-6 flex flex-col justify-between ${
                        shaft.type === "bent"
                          ? "border-primary bg-accent/30"
                          : "border-border bg-card"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3 border-b border-border pb-3">
                          <div>
                            <span className="text-xs font-mono font-bold text-primary uppercase block">
                              {shaft.enTitle}
                            </span>
                            <h4 className="text-xl font-bold text-foreground">{shaft.title}</h4>
                          </div>
                          <span className="text-xs font-mono font-bold px-2 py-1 bg-muted text-foreground rounded">
                            {shaft.priceDiff}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-foreground/80 mb-4 leading-relaxed">
                          {shaft.summary}
                        </p>

                        <div className="bg-muted/80 rounded-lg p-3 text-xs text-foreground mb-4">
                          <span className="font-bold text-foreground block mb-1">
                            📐 手首のアライメント（関節角）:
                          </span>
                          <span>{shaft.wristAngleBenefit}</span>
                        </div>

                        {/* Pros */}
                        <div className="space-y-2 mb-4">
                          <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>メリット</span>
                          </span>
                          <ul className="space-y-1.5 text-xs text-foreground/80">
                            {shaft.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">•</span>
                                <span className="leading-snug">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div className="space-y-2 mb-4">
                          <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                            <span>デメリット・注意点</span>
                          </span>
                          <ul className="space-y-1.5 text-xs text-foreground/80">
                            {shaft.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold">•</span>
                                <span className="leading-snug">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border text-xs">
                        <span className="font-bold text-foreground block mb-1">
                          こんな人におすすめ：
                        </span>
                        <p className="text-foreground/80 leading-snug">{shaft.targetPaddler}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Blade Materials */}
          {activeTab === "materials" && (
            <div className="mt-8 space-y-6">
              <div className="bg-card rounded-2xl border-2 border-border p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">
                  ブレード素材の剛性と水掴み特性
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  岩に強くぶつかる日本の川では、ただ軽いだけでなく「岩に対する粘り強さ」が極めて重要です。
                  グラスファイバー・カーボン・フォームコア・強化樹脂の4大素材を比較します。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {PADDLE_MATERIALS.map((mat) => (
                    <div
                      key={mat.id}
                      className="border border-border rounded-xl p-5 bg-secondary/70 hover:border-primary transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-border pb-2 mb-3">
                          <div>
                            <span className="text-[11px] font-mono text-muted-foreground block">
                              {mat.enName}
                            </span>
                            <h4 className="text-base font-bold text-foreground">{mat.name}</h4>
                          </div>
                          <span className="px-2 py-0.5 text-xs font-bold rounded bg-accent text-primary">
                            {mat.weightRating}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                          <div className="bg-card p-2 rounded border border-border">
                            <span className="text-muted-foreground block text-[10px]">
                              剛性レベル
                            </span>
                            <span className="font-bold text-foreground">{mat.stiffness}</span>
                          </div>
                          <div className="bg-card p-2 rounded border border-border">
                            <span className="text-muted-foreground block text-[10px]">
                              価格帯目安
                            </span>
                            <span className="font-bold text-foreground">
                              {mat.priceNote.split("（")[0]}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2 text-xs text-foreground/80 mb-4">
                          <div>
                            <span className="font-bold text-foreground block">
                              キャッチフィール（水掴み）：
                            </span>
                            <p className="leading-relaxed">{mat.catchFeeling}</p>
                          </div>
                          <div>
                            <span className="font-bold text-foreground block">
                              対衝撃・耐久性：
                            </span>
                            <p className="leading-relaxed">{mat.durability}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-card p-3 rounded-lg border border-border text-xs">
                        <span className="font-bold text-primary block mb-0.5">ベストな用途：</span>
                        <p className="text-foreground leading-snug">{mat.bestFor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 3: Models & Breakdown Paddle */}
          {activeTab === "models" && (
            <div className="mt-8 space-y-6">
              <div className="bg-card rounded-2xl border-2 border-border p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-border pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      世界中のパドラーが信頼する代表モデル名鑑
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                      国内取扱が多く、壊れにくさとスペアパーツの入手性に優れた王道パドル
                    </p>
                  </div>
                  {affiliateConfig.showPrNotice && (
                    <span className="text-[10px] font-bold px-2 py-1 bg-muted text-foreground/80 rounded border border-border">
                      各モールで価格比較可能（PR）
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {POPULAR_PADDLES.map((paddle) => (
                    <div
                      key={paddle.id}
                      className="border-2 border-border rounded-xl p-5 bg-card flex flex-col justify-between hover:border-primary hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="text-xs text-muted-foreground font-mono mb-1">
                          {paddle.brand}
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-1">{paddle.name}</h4>
                        <div className="text-xs font-bold text-primary bg-accent px-2 py-0.5 rounded inline-block mb-3">
                          {paddle.idealFor}
                        </div>

                        <p className="text-xs text-foreground/80 leading-relaxed mb-4">
                          {paddle.description}
                        </p>

                        <div className="space-y-1.5 bg-secondary p-3 rounded-lg border border-border text-xs mb-4">
                          <div className="flex justify-between text-muted-foreground">
                            <span>ブレード面積:</span>
                            <span className="font-bold text-foreground">{paddle.bladeArea}</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>ブレード素材:</span>
                            <span className="font-bold text-foreground">
                              {paddle.bladeMaterial}
                            </span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>重量目安:</span>
                            <span className="font-bold text-foreground">{paddle.weight}</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>推奨レングス:</span>
                            <span className="font-bold text-primary">
                              {paddle.recommendedLengths}
                            </span>
                          </div>
                        </div>

                        {/* Features list */}
                        <div className="space-y-1 text-xs text-foreground/80 mb-4">
                          {paddle.features.slice(0, 3).map((f, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <span className="text-primary font-bold">•</span>
                              <span className="leading-snug">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Buy & Search Buttons */}
                      <div className="pt-3 border-t border-border space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground font-bold">
                          <span>価格相場: {paddle.priceRange}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleAffiliateSearch(paddle.searchKeyword, "amazon")}
                            className="px-2 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-colors flex items-center justify-center gap-1 shadow-xs"
                          >
                            <span>Amazon</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAffiliateSearch(paddle.searchKeyword, "rakuten")}
                            className="px-2 py-1.5 bg-rose-600 hover:bg-rose-500 text-primary-foreground font-bold text-xs rounded transition-colors flex items-center justify-center gap-1 shadow-xs"
                          >
                            <span>楽天</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAffiliateSearch(paddle.searchKeyword, "yahoo")}
                            className="px-2 py-1.5 bg-sky-600 hover:bg-sky-500 text-primary-foreground font-bold text-xs rounded transition-colors flex items-center justify-center gap-1 shadow-xs"
                          >
                            <span>Yahoo</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Critical note on Breakdown 4-piece paddle */}
                <div className="mt-8 bg-amber-50 border-2 border-amber-300 rounded-xl p-5 sm:p-6 text-foreground shadow-xs">
                  <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base mb-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>激流遠征の命綱：「4ピース予備パドル」を携帯する理由</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                    Class
                    III以上の渓谷（キャニオン）で万が一パドルが岩に挟まって折れたり、転覆時に流失した場合、激流の中で手漕ぎで脱出することは不可能です。両岸が断崖絶壁のゴルジュでは徒歩脱出もできず、遭難に直結します。
                    そのためホワイトウォーターの世界では、
                    <strong>
                      プッシュピンで4分割してカヤックの船尾奥に積載できる「ブレイクダウンパドル」
                    </strong>
                    を最低でもパーティーに1本、可能なら全員が携帯することが安全の鉄則となっています。
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 4: Common Mistakes */}
          {activeTab === "mistakes" && (
            <div className="mt-8 space-y-6">
              <div className="bg-card rounded-2xl border-2 border-border p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">
                  初心者が陥りがちな「パドル選びの5大失敗」と解決法
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  安易に中古や適当なサイズを選んでしまうと、手首の怪我や上達の妨げになります。購入前に必ずチェックしてください。
                </p>

                <div className="space-y-4">
                  {PADDLE_MISTAKES.map((mistake, index) => (
                    <div
                      key={index}
                      className="border border-border rounded-xl p-4 sm:p-5 bg-secondary/60 flex flex-col sm:flex-row sm:items-start gap-4"
                    >
                      <div className="w-7 h-7 rounded-full bg-rose-600 text-primary-foreground font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>

                      <div className="flex-1 space-y-1.5">
                        <h4 className="text-sm sm:text-base font-bold text-foreground">
                          {mistake.title}
                        </h4>
                        <div className="text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded p-2.5 leading-relaxed">
                          <span className="font-bold">⚠️ 起こるリスク：</span> {mistake.risk}
                        </div>
                        <div className="text-xs text-emerald-900 bg-emerald-50 border border-emerald-200 rounded p-2.5 leading-relaxed">
                          <span className="font-bold">✅ 正しい対策：</span> {mistake.solution}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
