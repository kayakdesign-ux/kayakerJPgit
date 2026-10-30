import React, { useState } from "react";
import { ShieldCheck, Compass, ArrowDownRight, Sparkles, AlertTriangle } from "lucide-react";
import heroKayakImg from "../assets/images/hero_whitewater_kayak_1792152930540.jpg";

interface HeroProps {
  onOpenQuiz: () => void;
  onExploreMap: () => void;
  onExploreSafety: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onExploreMap, onExploreSafety }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative border-b border-border bg-background overflow-hidden">
      {/* Contour line motif — topographic map feel */}
      <div className="absolute inset-0 contour-lines opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,oklch(0.5_0.06_155/0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Value Prop, CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Context line with no pills */}
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold mb-4 tracking-wider uppercase">
              <span>Whitewater Kayak Portal</span>
              <span aria-hidden="true">·</span>
              <span>Japan & Global Rivers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2] text-balance mb-6 font-display">
              激流を切り拓く、
              <br />
              <span className="text-primary border-b-4 border-primary/30 pb-1">
                確かな知恵と装備。
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              艇の種別やパドル選びの初心者向け診断から、全国主要河川の難易度（Class
              I〜VI）マップ、命を守る安全講習・セルフレスキュー、そして30以上の必須用語事典までを網羅した急流カヤック総合ポータル。
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onOpenQuiz}
                className="px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary active:bg-primary transition-colors whitespace-nowrap shadow-sm shadow-teal-700/20 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>3分でわかる初心者ギア診断</span>
              </button>

              <button
                onClick={onExploreSafety}
                className="px-6 py-3 text-sm font-semibold text-foreground/80 bg-card hover:bg-secondary rounded-lg border border-border transition-colors whitespace-nowrap flex items-center gap-2 shadow-xs"
              >
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>安全講習＆救助マニュアル</span>
              </button>

              <button
                onClick={onExploreMap}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4 text-primary" />
                <span>川の難易度マップを見る</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro metadata row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-muted-foreground border-t border-border/80 pt-4">
              <span>国際基準 Class I〜VI 完全対応</span>
              <span aria-hidden="true">·</span>
              <span>御岳・利根川・長良川・吉野川等 収録</span>
              <span aria-hidden="true">·</span>
              <span>セルフレスキュー＆用語追加機能完備</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Zero-Broken Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-xl group aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3]">
              {!imgError ? (
                <img
                  src={heroKayakImg || "/images/hero_whitewater_kayak_1792152930540.jpg"}
                  alt="激流の中をパドリングで突き抜けるホワイトウォーターカヤッカー"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                />
              ) : null}

              {/* Styled Fallback Container if image fails or before load */}
              {(!imgLoaded || imgError) && (
                <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center p-6 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mb-3 animate-pulse" />
                  <p className="text-sm font-semibold text-foreground">New to Kayaker.jp</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    ホワイトウォーターカヤック総合ナビゲーション
                  </p>
                </div>
              )}

              {/* Gradient scrim overlay for editorial text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 pointer-events-none text-primary-foreground">
                <p className="text-xs font-semibold text-chart-4 font-mono tracking-widest">
                  ACTION SPOTLIGHT
                </p>
                <p className="text-sm font-medium">
                  激流（ホワイトウォーター）の波とホールを突破する
                </p>
                <div className="flex items-center gap-2 text-xs text-primary-foreground/80 mt-0.5">
                  <span>Class IV Rapid Run</span>
                  <span aria-hidden="true">·</span>
                  <span>High Water Season</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Quick Strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-foreground font-mono tabular-nums">
              Class I〜VI
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              国際激流グレード詳細解説
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary font-mono tabular-nums">
              7 大主要水系
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              日本全国の代表的ゲレンデ
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-foreground font-mono tabular-nums">
              4 大危険物
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              ストレーナー/シーブ等安全講習
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary font-mono tabular-nums">
              30+ 専門用語
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              自由追加＆ブックマーク機能
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
