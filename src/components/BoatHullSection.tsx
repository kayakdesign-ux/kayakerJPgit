import React, { useState } from "react";
import { BOAT_HULL_TYPES, HULL_COMPARISON_MATRIX, BoatHullType } from "../data/boatHullData";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Compass,
  RotateCcw,
} from "lucide-react";

export const BoatHullSection: React.FC = () => {
  const [selectedHullId, setSelectedHullId] = useState<string>("round");

  const activeHull = BOAT_HULL_TYPES.find((h) => h.id === selectedHullId) || BOAT_HULL_TYPES[0];

  return (
    <div className="bg-card rounded-2xl border-2 border-border p-6 lg:p-10 mb-16 shadow-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-border gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-1.5 uppercase tracking-wider">
            <span className="px-2 py-0.5 bg-accent rounded text-primary">Feature 1-C</span>
            <span aria-hidden="true">·</span>
            <span>Hull Design Dynamics</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            ボートの底（ハル形状）の違い比較
          </h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-3xl leading-relaxed">
            ホワイトウォーターカヤックの乗り味・安定性・ロールのしやすさは「船底の形（ハル形状）」で決定づけられます。
            昔ながらの<span className="font-bold text-foreground">ラウンド</span>から、現代の定番
            <span className="font-bold text-foreground">ボックス</span>、そして最新の
            <span className="font-bold text-foreground">ミックスラウンド＆ミックスフラット</span>
            まで4大形状を徹底比較！
          </p>
        </div>

        {/* Quick Shape Selector */}
        <div className="flex items-center p-1.5 bg-muted rounded-xl border border-border overflow-x-auto">
          {BOAT_HULL_TYPES.map((hull) => (
            <button
              key={hull.id}
              onClick={() => setSelectedHullId(hull.id)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedHullId === hull.id
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {hull.name}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Cross-Section SVG Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {BOAT_HULL_TYPES.map((hull) => {
          const isSelected = hull.id === selectedHullId;
          return (
            <div
              key={hull.id}
              onClick={() => setSelectedHullId(hull.id)}
              className={`rounded-xl border-2 p-5 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-accent/50 border-primary shadow-md ring-2 ring-teal-200"
                  : "bg-secondary/60 border-border hover:border-slate-400 hover:bg-card"
              }`}
            >
              <div>
                {/* Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${hull.eraBadgeColor}`}
                  >
                    {hull.era}
                  </span>
                  {isSelected && (
                    <span className="text-[10px] font-bold text-primary bg-accent px-1.5 py-0.5 rounded">
                      選択中
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-black text-foreground mb-0.5">{hull.name}</h4>
                <div className="text-[11px] font-mono text-muted-foreground mb-3">
                  {hull.enName}
                </div>

                {/* SVG Cross Section Diagram */}
                <div className="bg-slate-900 rounded-lg p-3 mb-4 border border-slate-800">
                  <HullCrossSectionSvg hullId={hull.id} />
                </div>

                {/* Key Feel Callout */}
                <div className="bg-card rounded-lg p-2.5 border border-border mb-3 shadow-2xs">
                  <span className="text-[10px] text-muted-foreground font-bold block mb-0.5">
                    乗った感覚：
                  </span>
                  <span className="text-xs sm:text-sm font-black text-primary block">
                    {hull.feel}
                  </span>
                </div>

                {/* Quick Rating Grid */}
                <div className="space-y-1.5 text-xs text-foreground/80">
                  <div className="flex justify-between border-b border-border/60 pb-1">
                    <span className="text-muted-foreground">一次安定性</span>
                    <span className="font-bold text-foreground text-right">
                      {hull.primaryStability.split("（")[0]}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-1">
                    <span className="text-muted-foreground">リーンの効き</span>
                    <span className="font-bold text-foreground text-right">
                      {hull.leanEffectiveness.split("（")[0]}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-1">
                    <span className="text-muted-foreground">2次復元力</span>
                    <span className="font-bold text-foreground text-right">
                      {hull.secondaryStability.split("（")[0]}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ロール性</span>
                    <span className="font-bold text-foreground text-right">
                      {hull.rollEase.split("（")[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/80 text-[11px] text-muted-foreground flex items-center justify-between">
                <span>詳細を見る</span>
                <ChevronRight className="w-3.5 h-3.5 text-primary" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Hull Detail Focus Card */}
      <div className="bg-slate-900 text-primary-foreground rounded-2xl p-6 sm:p-8 mb-12 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                  Detailed Analysis
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${activeHull.eraBadgeColor}`}
                >
                  {activeHull.era}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-black text-primary-foreground">
                {activeHull.name} の構造と水上挙動
              </h4>
            </div>

            <div className="px-4 py-2 rounded-xl bg-teal-950/80 border border-primary/50 text-teal-300 font-bold text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>乗艇感覚：{activeHull.feel}</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {activeHull.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Characteristics Checklist */}
            <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-3">
              <h5 className="text-xs font-bold font-mono uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                主な特徴 ＆ 操船の感覚
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {activeHull.detailedCharacteristics.map((char, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suitability & Boats */}
            <div className="space-y-4">
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400 block mb-1">
                  🎯 最も向いている用途・スタイル
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  {activeHull.bestSuitedFor}
                </p>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-teal-400 block mb-1">
                  🛶 代表的なボート例
                </span>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  {activeHull.representativeBoats}
                </p>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span>
                  直進性：
                  <span className="font-bold text-primary-foreground">{activeHull.tracking}</span>
                </span>
                <span>
                  2次復元力：
                  <span className="font-bold text-teal-300">{activeHull.secondaryStability}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Comparison Matrix Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          <h4 className="text-lg sm:text-xl font-bold text-foreground">
            ハル形状 4大特性マトリクス比較表
          </h4>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-muted text-foreground border-b border-border font-bold">
                <th className="p-3.5 sm:p-4 min-w-[140px]">比較項目</th>
                <th className="p-3.5 sm:p-4 min-w-[150px] bg-slate-150">① ラウンド</th>
                <th className="p-3.5 sm:p-4 min-w-[150px]">② ボックス</th>
                <th className="p-3.5 sm:p-4 min-w-[160px] bg-emerald-50/70 text-emerald-950">
                  ③ ミックスラウンド
                </th>
                <th className="p-3.5 sm:p-4 min-w-[160px] bg-purple-50/70 text-purple-950">
                  ④ ミックスフラット
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-foreground/80">
              {HULL_COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-secondary/70"}>
                  <td className="p-3.5 sm:p-4 font-bold text-foreground whitespace-nowrap bg-secondary/50">
                    {row.label}
                  </td>
                  <td className="p-3.5 sm:p-4 font-medium text-foreground">{row.round}</td>
                  <td className="p-3.5 sm:p-4 font-medium text-foreground">{row.box}</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-emerald-900 bg-emerald-50/30">
                    {row.mixRound}
                  </td>
                  <td className="p-3.5 sm:p-4 font-semibold text-purple-900 bg-purple-50/30">
                    {row.mixFlat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Kayaker Expert Tip Box */}
      <div className="mt-8 bg-accent border border-teal-200 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-foreground">
        <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-teal-950 block">kayakerのハル選びアドバイス：</span>
          <p className="text-foreground/80 leading-relaxed">
            「初心者が『ロールを最速でマスターしたい』なら、引っかかりが一切ない
            <span className="font-bold text-foreground">ラウンド</span>
            が一番楽です。しかし、現代の急流で『水流に乗って思い通りにラインを曲げたい』ならエッジの利く
            <span className="font-bold text-foreground">ミックスフラット</span>や
            <span className="font-bold text-foreground">ミックスラウンド</span>
            が圧倒的に有利。自分のパドリング目的（サーフィンしたいのか、大激流を突破したいのか）に合わせてボートの底を選んでみてください！」
          </p>
        </div>
      </div>
    </div>
  );
};

const HullCrossSectionSvg: React.FC<{ hullId: string }> = ({ hullId }) => {
  switch (hullId) {
    case "round":
      return (
        <svg viewBox="0 0 240 100" className="w-full h-16">
          {/* Waterline */}
          <line
            x1="10"
            y1="35"
            x2="230"
            y2="35"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <text x="15" y="28" fill="#38bdf8" fontSize="9" fontFamily="monospace">
            水面
          </text>

          {/* Round Hull Cross Section */}
          <path
            d="M 30 35 Q 30 85 120 85 Q 210 85 210 35 Z"
            fill="#334155"
            stroke="#10b981"
            strokeWidth="3"
          />
          {/* Smooth flow curve */}
          <path
            d="M 40 93 Q 120 95 200 93"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="1.5"
            strokeDasharray="3,3"
          />
          <text x="120" y="65" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
            丸底（円弧・角なし）
          </text>
        </svg>
      );

    case "box":
      return (
        <svg viewBox="0 0 240 100" className="w-full h-16">
          {/* Waterline */}
          <line
            x1="10"
            y1="35"
            x2="230"
            y2="35"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <text x="15" y="28" fill="#38bdf8" fontSize="9" fontFamily="monospace">
            水面
          </text>

          {/* Box Flat Hull Cross Section with sharp 90 deg chines */}
          <path
            d="M 35 35 L 45 78 L 195 78 L 205 35 Z"
            fill="#334155"
            stroke="#38bdf8"
            strokeWidth="3"
          />
          {/* Edge dots */}
          <circle cx="45" cy="78" r="3.5" fill="#ef4444" />
          <circle cx="195" cy="78" r="3.5" fill="#ef4444" />
          <text x="120" y="65" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
            平底 ＋ 角張りエッジ
          </text>
        </svg>
      );

    case "mix-round":
      return (
        <svg viewBox="0 0 240 100" className="w-full h-16">
          {/* Waterline */}
          <line
            x1="10"
            y1="35"
            x2="230"
            y2="35"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <text x="15" y="28" fill="#38bdf8" fontSize="9" fontFamily="monospace">
            水面
          </text>

          {/* Mix Round: Rounded Center with subtle soft chine */}
          <path
            d="M 32 35 Q 38 68 52 75 Q 120 85 188 75 Q 202 68 208 35 Z"
            fill="#334155"
            stroke="#34d399"
            strokeWidth="3"
          />
          {/* Soft edge marker */}
          <circle cx="52" cy="75" r="3" fill="#34d399" />
          <circle cx="188" cy="75" r="3" fill="#34d399" />
          <text x="120" y="65" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
            丸底 ＋ ソフトエッジ
          </text>
        </svg>
      );

    case "mix-flat":
      return (
        <svg viewBox="0 0 240 100" className="w-full h-16">
          {/* Waterline */}
          <line
            x1="10"
            y1="35"
            x2="230"
            y2="35"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />
          <text x="15" y="28" fill="#38bdf8" fontSize="9" fontFamily="monospace">
            水面
          </text>

          {/* Mix Flat: Flat bottom with chamfered beveled chine */}
          <path
            d="M 35 35 L 42 66 L 58 78 L 182 78 L 198 66 L 205 35 Z"
            fill="#334155"
            stroke="#c084fc"
            strokeWidth="3"
          />
          {/* Chamfered edge marker */}
          <circle cx="58" cy="78" r="3" fill="#c084fc" />
          <circle cx="182" cy="78" r="3" fill="#c084fc" />
          <text x="120" y="65" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
            平底 ＋ 面取りエッジ
          </text>
        </svg>
      );

    default:
      return null;
  }
};
