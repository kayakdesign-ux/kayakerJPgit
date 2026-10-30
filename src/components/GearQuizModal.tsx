import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, RotateCcw, ArrowRight, ExternalLink } from "lucide-react";
import { AffiliateGlobalConfig, AffiliateProductLink, AffiliatePlatform } from "../types/affiliate";
import { buildAffiliateUrl } from "../data/defaultAffiliates";

interface GearQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  affiliateConfig: AffiliateGlobalConfig;
  affiliateProducts: AffiliateProductLink[];
  onTrackClick: (gearId: string, gearTitle: string, platform: AffiliatePlatform) => void;
}

export const GearQuizModal: React.FC<GearQuizModalProps> = ({
  isOpen,
  onClose,
  affiliateConfig,
  affiliateProducts,
  onTrackClick,
}) => {
  const [step, setStep] = useState<number>(1);
  const [experience, setExperience] = useState<string>("beginner");
  const [goal, setGoal] = useState<string>("river-run");
  const [weight, setWeight] = useState<string>("mid");
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setIsCalculated(false);
  };

  const getRecommendation = () => {
    let boat = "リバーランナー (River Runner)";
    let boatDesc =
      "転覆しにくく直進性に優れた王道カヤック。初心者の一艇目としてロール習得やフェリーグライドの基礎に最も適しています。";
    let volume = "260〜280 L (Mサイズ)";
    let paddleLen = "197 cm (ストレートシャフト・45度フェザー)";
    const helmet = "フルカット（耳・側頭部まで保護するモデル）";
    let pfd = "Type III スタンダード・ホワイトウォーターPFD（浮力7.5kg以上）";

    if (goal === "play" || experience === "roll") {
      if (goal === "play") {
        boat = "プレイボート (Playboat) または ハーフスライス";
        boatDesc =
          "波に乗ってスピンやサーフィンを楽しむための艇。まずはハーフスライスで川下りとテール沈めを両立するのが現代の最も楽しい選択です。";
        volume = "220〜250 L";
        paddleLen = "191〜194 cm (小回りの利くショートパドル)";
      } else {
        boat = "ハーフスライス (Half Slice)";
        boatDesc =
          "前方は大浮力で激流を突破しつつ、薄いテールを使ってエディで遊べる現代一番人気のハイブリッド艇。";
        volume = "245〜270 L";
      }
    } else if (goal === "creek") {
      boat = "クリークボート (Creek Boat)";
      boatDesc =
        "300L以上の高浮力と大きなロッカーで、強いホールや落差でも絶対に潜らない最強の安全設計。";
      volume = "290〜320 L (Lサイズ)";
      paddleLen = "197〜200 cm (高耐久カーボン/グラスファイバー)";
      pfd = "Type V レスキューハーネス付きPFD（講習受講推奨）";
    }

    if (weight === "light") {
      volume = "230〜255 L (Sサイズ)";
      paddleLen = "194 cm";
    } else if (weight === "heavy") {
      volume = "290〜330 L (Lサイズ)";
      paddleLen = "200 cm";
    }

    return { boat, boatDesc, volume, paddleLen, helmet, pfd };
  };

  const result = getRecommendation();

  const handleLinkClick = (gearId: string, gearTitle: string, platform: AffiliatePlatform) => {
    const prod = affiliateProducts.find((p) => p.gearId === gearId);
    if (!prod) return;
    const url = buildAffiliateUrl(prod, platform, affiliateConfig);
    onTrackClick(gearId, gearTitle, platform);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-card border-2 border-border rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">初心者向けギア診断アシスタント</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted-foreground/70 hover:text-foreground/80 rounded-lg hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isCalculated ? (
          <div className="space-y-6 text-xs sm:text-sm">
            {/* Step 1: Experience */}
            <div>
              <label className="block text-foreground font-bold mb-2">
                1. 現在のカヤック経験レベルは？
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    id: "beginner",
                    label: "全くの未経験・初心者",
                    desc: "これから始める、または体験ツアーのみ",
                  },
                  {
                    id: "flatwater",
                    label: "静水ツーリング経験あり",
                    desc: "湖や海、緩やかな川なら漕いだことがある",
                  },
                  {
                    id: "rapids",
                    label: "Class II等の急流体験あり",
                    desc: "御岳や長良川などの瀬を下ったことがある",
                  },
                  {
                    id: "roll",
                    label: "エスキモーロール習得中・可能",
                    desc: "転覆しても自己復元できる、または練習中",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setExperience(item.id)}
                    className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                      experience === item.id
                        ? "bg-accent border-primary shadow-sm ring-2 ring-primary/20"
                        : "bg-secondary border-border hover:border-border hover:bg-card"
                    }`}
                  >
                    <div className="font-bold text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Goal */}
            <div>
              <label className="block text-foreground font-bold mb-2">
                2. 主にやってみたいスタイル・目標は？
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    id: "river-run",
                    label: "安全に川下り（ダウンリバー）",
                    desc: "安定したボートで色々な川を旅したい",
                  },
                  {
                    id: "play",
                    label: "波に乗って遊ぶ（サーフィン/小技）",
                    desc: "波やホールでスピンや立体技を決めたい",
                  },
                  {
                    id: "creek",
                    label: "大激流・落差（滝）に挑戦",
                    desc: "水上や吉野川などのハードな激流を目指す",
                  },
                  {
                    id: "allround",
                    label: "まずは万能に楽しみたい",
                    desc: "下りも波乗りもバランスよく体験したい",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id)}
                    className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                      goal === item.id
                        ? "bg-accent border-primary shadow-sm ring-2 ring-primary/20"
                        : "bg-secondary border-border hover:border-border hover:bg-card"
                    }`}
                  >
                    <div className="font-bold text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Weight */}
            <div>
              <label className="block text-foreground font-bold mb-2">
                3. ご自身の体重レンジ（ボート浮力サイジング用）
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: "light", label: "〜55kg", desc: "Sサイズ相当" },
                  { id: "mid", label: "55〜75kg", desc: "Mサイズ相当" },
                  { id: "heavy", label: "75〜90kg", desc: "Lサイズ相当" },
                  { id: "xheavy", label: "90kg〜", desc: "XLサイズ相当" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setWeight(item.id)}
                    className={`p-2.5 rounded-xl border-2 text-center transition-all ${
                      weight === item.id
                        ? "bg-accent border-primary text-primary shadow-sm ring-1 ring-teal-500"
                        : "bg-secondary border-border hover:border-border hover:bg-card"
                    }`}
                  >
                    <div className="font-bold text-foreground">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-border flex justify-end">
              <button
                type="button"
                onClick={() => setIsCalculated(true)}
                className="px-6 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground bg-primary rounded-lg hover:bg-primary transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>診断結果を表示する</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Diagnosis Result Screen */
          <div className="space-y-6 text-xs sm:text-sm">
            <div className="bg-accent border-2 border-teal-300 rounded-xl p-5 shadow-xs">
              <div className="text-primary font-mono text-xs font-bold mb-1 uppercase">
                RECOMMENDED SETUP FOR YOU
              </div>
              <h4 className="text-xl font-extrabold text-foreground mb-1">{result.boat}</h4>
              <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                {result.boatDesc}
              </p>
            </div>

            {/* Spec Matrix with Quick Affiliate Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-secondary p-4 rounded-xl border-2 border-border">
                <div className="text-muted-foreground text-xs font-medium">
                  推奨ボート容量（Volume）
                </div>
                <div className="text-base font-bold text-foreground font-mono mt-0.5">
                  {result.volume}
                </div>
              </div>

              <div className="bg-secondary p-4 rounded-xl border-2 border-border flex flex-col justify-between">
                <div>
                  <div className="text-muted-foreground text-xs font-medium">
                    推奨パドルスペック
                  </div>
                  <div className="text-sm font-bold text-foreground font-mono mt-0.5">
                    {result.paddleLen}
                  </div>
                </div>
                {affiliateConfig.isAffiliateActive && (
                  <div className="pt-2 mt-2 border-t border-border flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleLinkClick("gear-paddle", "ホワイトウォーターパドル", "amazon")
                      }
                      className="px-2 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded text-[10px] flex items-center gap-1"
                    >
                      <span>Amazonで探す</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleLinkClick("gear-paddle", "ホワイトウォーターパドル", "rakuten")
                      }
                      className="px-2 py-1 bg-rose-600 hover:bg-rose-500 text-primary-foreground font-bold rounded text-[10px] flex items-center gap-1"
                    >
                      <span>楽天で探す</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-secondary p-4 rounded-xl border-2 border-border flex flex-col justify-between">
                <div>
                  <div className="text-muted-foreground text-xs font-medium">推奨ヘルメット</div>
                  <div className="text-xs font-bold text-foreground mt-0.5">{result.helmet}</div>
                </div>
                {affiliateConfig.isAffiliateActive && (
                  <div className="pt-2 mt-2 border-t border-border flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleLinkClick("gear-helmet", "ヘルメット", "amazon")}
                      className="px-2 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded text-[10px] flex items-center gap-1"
                    >
                      <span>Amazon</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLinkClick("gear-helmet", "ヘルメット", "rakuten")}
                      className="px-2 py-1 bg-rose-600 hover:bg-rose-500 text-primary-foreground font-bold rounded text-[10px] flex items-center gap-1"
                    >
                      <span>楽天</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-secondary p-4 rounded-xl border-2 border-border flex flex-col justify-between">
                <div>
                  <div className="text-muted-foreground text-xs font-medium">
                    推奨PFD（救命胴衣）
                  </div>
                  <div className="text-xs font-bold text-foreground mt-0.5">{result.pfd}</div>
                </div>
                {affiliateConfig.isAffiliateActive && (
                  <div className="pt-2 mt-2 border-t border-border flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleLinkClick("gear-pfd", "PFD", "amazon")}
                      className="px-2 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded text-[10px] flex items-center gap-1"
                    >
                      <span>Amazon</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLinkClick("gear-pfd", "PFD", "rakuten")}
                      className="px-2 py-1 bg-rose-600 hover:bg-rose-500 text-primary-foreground font-bold rounded text-[10px] flex items-center gap-1"
                    >
                      <span>楽天</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Advice */}
            <div className="bg-secondary p-4 rounded-xl border-2 border-border space-y-2">
              <div className="flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>初心者が最初にやるべき3ステップ</span>
              </div>
              <ol className="space-y-1.5 text-foreground/80 text-xs sm:text-sm pl-5 list-decimal leading-relaxed">
                <li>
                  公認インストラクターのいるリバースクールで「ウェットエグジット」と「フェリーグライド」を体験する
                </li>
                <li>プールや静水講習で「エスキモーロール」の基礎を身体に叩き込む</li>
                <li>
                  最初は御岳渓谷や長良川などのClass II（初中級）ゲレンデで熟練者パーティーと同伴する
                </li>
              </ol>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs font-bold text-muted-foreground hover:text-foreground rounded-lg border border-border flex items-center gap-1.5 hover:bg-secondary"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>条件を変えて再診断</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-bold text-primary-foreground bg-primary rounded-lg hover:bg-primary shadow-xs"
              >
                閉じる
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
