import React from "react";
import { RIVER_FLOW_TIPS, RiverFlowTip } from "../data/riverFlowTipsData";
import {
  Compass,
  AlertTriangle,
  Volume2,
  HelpCircle,
  Eye,
  CheckCircle2,
  Waves,
  ArrowDownCircle,
  ShieldAlert,
  Flame,
} from "lucide-react";

export const RiverFlowTipsSection: React.FC = () => {
  return (
    <section
      id="river-flow-tips"
      className="py-20 bg-slate-900 text-primary-foreground relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_80%_at_50%_-20%] from-teal-900/30 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-teal-300 text-xs font-semibold tracking-wide uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>Section 02 · 水流判別 ＆ リバーリーディング</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-primary-foreground tracking-tight mb-4 leading-tight">
            川の読み方 ＆ リバーフローTips
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            激流を下るパドラーが現場の水面で一瞬のうちに判断を下すための
            <span className="text-teal-300 font-bold">「川Tips 10選」</span>。
            <br className="hidden sm:inline" />
            V字流路の正否、耳で聴く水音の周波数、ホライゾンラインによる落差判定、命を奪う岩の形、ホールの角度まで、上から順に読み進めて川の物理現象を完全攻略しましょう。
          </p>

          {/* Quick Summary Badge Row */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> 流路判定（V字の見極め）
            </span>
            <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> 音の周波数（ゴーゴー vs
              ザザザ）
            </span>
            <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400" /> 落差判定（ホライゾンライン）
            </span>
            <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" /> 危険地形（ピロー判定・堰堤）
            </span>
            <span className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> ホール幾何学（90度キープ力）
            </span>
          </div>
        </div>

        {/* Vertical Single-Column Card Flow */}
        <div className="space-y-10">
          {RIVER_FLOW_TIPS.map((tip) => (
            <RiverFlowCard key={tip.id} tip={tip} />
          ))}
        </div>

        {/* Bottom Epilogue Banner */}
        <div className="mt-16 bg-gradient-to-r from-teal-950/80 via-slate-800 to-teal-950/80 border border-primary/40 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
          <div className="inline-flex p-3 bg-primary/20 text-teal-400 rounded-xl mb-3">
            <Waves className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-2">
            「川は嘘をつかない。物理法則を読み解くパドラーであれ」
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            ダウンストリームVを探し、重低音を聞き逃さず、ホライゾンラインを見極め、ピローのない岩を警戒する。これら10の原則を頭に叩き込むだけで、あなたの生存率は劇的に跳ね上がります。続くSection
            03で万が一の救助プロトコルを身につけましょう。
          </p>
          <div className="mt-6">
            <a
              href="#safety-training"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:shadow-teal-500/25 transition-all text-sm"
            >
              次へ：安全講習 ＆ レスキューマニュアル（Section 03）を見る
              <ArrowDownCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface RiverFlowCardProps {
  tip: RiverFlowTip;
}

const RiverFlowCard: React.FC<RiverFlowCardProps> = ({ tip }) => {
  const getDangerBadge = (level: RiverFlowTip["dangerLevel"]) => {
    switch (level) {
      case "CRITICAL":
        return (
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-rose-900/90 text-rose-200 border border-rose-500/50 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            最重要・命に関わる危険
          </span>
        );
      case "HIGH":
        return (
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-amber-900/90 text-amber-200 border border-amber-500/50 flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            要注意・脱出困難リスク
          </span>
        );
      case "CAUTION":
        return (
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-blue-900/90 text-blue-200 border border-blue-500/50 flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-400" />
            警戒・船体破損/怪我リスク
          </span>
        );
      case "FUNDAMENTAL":
      default:
        return (
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-900/90 text-emerald-200 border border-emerald-500/50 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            基本鉄則・安全ルート
          </span>
        );
    }
  };

  return (
    <article
      id={tip.id}
      className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-xl hover:border-slate-600 transition-colors"
    >
      {/* Top Banner */}
      <div className="px-6 py-4 bg-slate-850/80 border-b border-slate-700/70 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black font-mono text-teal-400">{tip.number}</span>
          <span
            className={`px-2.5 py-0.5 text-xs font-semibold rounded-md border ${tip.categoryColor}`}
          >
            {tip.category}
          </span>
          <span className="text-xs text-muted-foreground/70 font-mono hidden sm:inline">
            {tip.enTitle}
          </span>
        </div>
        {getDangerBadge(tip.dangerLevel)}
      </div>

      {/* Main Body */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3">{tip.title}</h3>

        {/* Core Rule Callout */}
        <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-primary mb-6">
          <div className="flex items-start gap-2.5">
            <Eye className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-0.5">
                見極めの鉄則 (Core Rule)
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-100">{tip.coreRule}</p>
            </div>
          </div>
        </div>

        {/* Visual Graphic Representation */}
        <div className="mb-6 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-4 sm:p-6">
          <RenderVisualDiagram visualType={tip.visualType} />
        </div>

        {/* Detailed Explanation Paragraphs */}
        <div className="space-y-3 mb-6 text-sm text-slate-300 leading-relaxed">
          {tip.detailedExplanation.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Action Points Grid */}
        <div className="bg-slate-900/60 rounded-xl p-4 sm:p-5 border border-slate-800/80 mb-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            現場で実践すべきアクション
          </h4>
          <ul className="space-y-2">
            {tip.actionPoints.map((action, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-2" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Field Check Quote */}
        <div className="px-4 py-3 rounded-lg bg-teal-950/40 border border-primary/30 flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-teal-300 shrink-0" />
          <div className="text-xs sm:text-sm text-teal-200">
            <span className="font-bold text-teal-100">現場合言葉：</span> {tip.fieldCheck}
          </div>
        </div>
      </div>
    </article>
  );
};

const RenderVisualDiagram: React.FC<{ visualType: RiverFlowTip["visualType"] }> = ({
  visualType,
}) => {
  switch (visualType) {
    case "downstream_v":
      return (
        <div className="space-y-3">
          <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center justify-between">
            <span>[DIAGRAM] ダウンストリームV（正V字）＝ 安全なメイン流路</span>
            <span className="text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
              GO ROUTE
            </span>
          </div>
          <svg
            viewBox="0 0 600 240"
            className="w-full h-auto max-h-56 rounded-lg bg-slate-900 border border-slate-800"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* River Banks & Rocks */}
            <path d="M 0 0 L 180 0 L 220 120 L 160 240 L 0 240 Z" fill="#334155" />
            <path d="M 600 0 L 420 0 L 380 120 L 440 240 L 600 240 Z" fill="#334155" />

            {/* Rock Labels */}
            <text x="70" y="125" fill="#94a3b8" fontSize="13" fontWeight="bold">
              左岸側の岩礁
            </text>
            <text x="470" y="125" fill="#94a3b8" fontSize="13" fontWeight="bold">
              右岸側の岩礁
            </text>

            {/* Downstream V (Tongue) */}
            <polygon points="180,0 420,0 300,180" fill="url(#flowGrad)" />

            {/* Flow Vectors */}
            <line
              x1="220"
              y1="20"
              x2="280"
              y2="140"
              stroke="#a7f3d0"
              strokeWidth="2.5"
              strokeDasharray="6,4"
            />
            <line
              x1="380"
              y1="20"
              x2="320"
              y2="140"
              stroke="#a7f3d0"
              strokeWidth="2.5"
              strokeDasharray="6,4"
            />
            <line
              x1="300"
              y1="10"
              x2="300"
              y2="160"
              stroke="#ffffff"
              strokeWidth="3"
              markerEnd="url(#arrow)"
            />

            {/* Waves at bottom */}
            <path
              d="M 230 190 Q 260 170 300 190 T 370 190"
              fill="none"
              stroke="#67e8f9"
              strokeWidth="2.5"
            />
            <path
              d="M 210 215 Q 260 195 300 215 T 390 215"
              fill="none"
              stroke="#67e8f9"
              strokeWidth="2.5"
            />

            {/* Labels */}
            <text x="300" y="70" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">
              滑らかな鏡面（タング＝舌）
            </text>
            <text x="300" y="95" fill="#a7f3d0" fontSize="12" textAnchor="middle">
              本流の芯・障害物のない安全水路
            </text>
            <text
              x="300"
              y="230"
              fill="#38bdf8"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
            >
              V字出口のボトムウェーブ（前傾で突破）
            </text>
          </svg>
        </div>
      );

    case "upstream_v":
      return (
        <div className="space-y-3">
          <div className="text-xs font-mono text-rose-400 font-semibold flex items-center justify-between">
            <span>[DIAGRAM] アップストリームV（逆V字）＝ 隠れ岩・衝突危険</span>
            <span className="text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/40">
              DANGER - STOP
            </span>
          </div>
          <svg
            viewBox="0 0 600 240"
            className="w-full h-auto max-h-56 rounded-lg bg-slate-900 border border-slate-800"
          >
            {/* Background River Flow */}
            <rect x="0" y="0" width="600" height="240" fill="#0f172a" />
            <line
              x1="100"
              y1="20"
              x2="100"
              y2="220"
              stroke="#1e293b"
              strokeWidth="2"
              strokeDasharray="8,8"
            />
            <line
              x1="500"
              y1="20"
              x2="500"
              y2="220"
              stroke="#1e293b"
              strokeWidth="2"
              strokeDasharray="8,8"
            />

            {/* Submerged Rock */}
            <ellipse
              cx="300"
              cy="140"
              rx="55"
              ry="32"
              fill="#7f1d1d"
              stroke="#ef4444"
              strokeWidth="3"
            />
            <text
              x="300"
              y="145"
              fill="#fecaca"
              fontSize="13"
              fontWeight="bold"
              textAnchor="middle"
            >
              水面下の隠れ岩 (Rock)
            </text>

            {/* Upstream V breaking lines */}
            <path
              d="M 300 110 L 160 20"
              stroke="#f43f5e"
              strokeWidth="4"
              fill="none"
              strokeDasharray="6,4"
            />
            <path
              d="M 300 110 L 440 20"
              stroke="#f43f5e"
              strokeWidth="4"
              fill="none"
              strokeDasharray="6,4"
            />

            {/* Upstream V Apex label */}
            <circle cx="300" cy="110" r="7" fill="#ef4444" />
            <text x="300" y="90" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">
              ▲ 逆V字の頂点（衝突点）
            </text>

            {/* Diverging flows */}
            <path d="M 230 60 Q 200 120 180 200" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <path d="M 370 60 Q 400 120 420 200" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="140" y="180" fill="#38bdf8" fontSize="11">
              左右へ迂回
            </text>
            <text x="440" y="180" fill="#38bdf8" fontSize="11">
              左右へ迂回
            </text>

            {/* Direction Indicator */}
            <text x="300" y="225" fill="#cbd5e1" fontSize="12" textAnchor="middle">
              水流の向き：上から下へ（頂点に直進すると座礁・ピンニング）
            </text>
          </svg>
        </div>
      );

    case "sound_contrast":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Heavy Low Tone */}
          <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/40">
            <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-sm">
              <Volume2 className="w-4 h-4 animate-bounce" />
              <span>「ゴーゴー」「ゴオオ」重低音</span>
            </div>
            {/* Audio wave mockup */}
            <div className="flex items-center gap-1.5 h-12 py-2 px-3 bg-slate-950 rounded-lg border border-amber-900/40 mb-3">
              <span className="w-2 h-4 bg-amber-500 rounded-full" />
              <span className="w-2 h-7 bg-amber-500 rounded-full" />
              <span className="w-2 h-10 bg-amber-400 rounded-full" />
              <span className="w-2 h-9 bg-amber-400 rounded-full" />
              <span className="w-2 h-11 bg-amber-300 rounded-full" />
              <span className="w-2 h-8 bg-amber-500 rounded-full" />
              <span className="w-2 h-6 bg-amber-500 rounded-full" />
              <span className="w-2 h-10 bg-amber-400 rounded-full" />
              <span className="w-2 h-5 bg-amber-600 rounded-full" />
              <span className="ml-auto text-xs font-mono text-amber-300">50〜120Hz 重低音</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <span className="text-amber-300 font-bold">正体：落差（ドロップ）や巨大ホール</span>
              <br />
              大量の水深とエネルギーが落下して空気を巻き込む音。手前で必ず上陸しスカウティングせよ。
            </p>
          </div>

          {/* Light High Tone */}
          <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/40">
            <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold text-sm">
              <Volume2 className="w-4 h-4" />
              <span>「ザザザ」「サワサワ」高周波音</span>
            </div>
            {/* Audio wave mockup */}
            <div className="flex items-center gap-1.5 h-12 py-2 px-3 bg-slate-950 rounded-lg border border-blue-900/40 mb-3">
              <span className="w-1.5 h-3 bg-blue-500 rounded-full" />
              <span className="w-1.5 h-4 bg-blue-400 rounded-full" />
              <span className="w-1.5 h-3 bg-blue-300 rounded-full" />
              <span className="w-1.5 h-5 bg-blue-400 rounded-full" />
              <span className="w-1.5 h-4 bg-blue-500 rounded-full" />
              <span className="w-1.5 h-3 bg-blue-400 rounded-full" />
              <span className="w-1.5 h-5 bg-blue-300 rounded-full" />
              <span className="w-1.5 h-4 bg-blue-400 rounded-full" />
              <span className="w-1.5 h-3 bg-blue-500 rounded-full" />
              <span className="ml-auto text-xs font-mono text-blue-300">800〜2000Hz 高音</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <span className="text-blue-300 font-bold">正体：浅瀬の小石・連続ウェーブ</span>
              <br />
              水深が極めて浅くボトムヒットやパドル挟まりのリスク。沈脱時は絶対に立とうとせず流されろ。
            </p>
          </div>
        </div>
      );

    case "horizon_line":
      return (
        <div className="space-y-3">
          <div className="text-xs font-mono text-indigo-400 font-semibold flex items-center justify-between">
            <span>
              [DIAGRAM] ホライゾンライン（水平線）判定：瀬の出口が見える（落差 小） vs
              見えない（落差 大）
            </span>
            <span className="text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/40">
              DROP & HORIZON
            </span>
          </div>
          <svg
            viewBox="0 0 600 240"
            className="w-full h-auto max-h-56 rounded-lg bg-slate-900 border border-slate-800"
          >
            {/* Left Box: 瀬の終わりが見える（落差 小） */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="280" height="210" fill="#0f172a" rx="8" stroke="#334155" />
              <text
                x="140"
                y="24"
                fill="#34d399"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                【瀬の終わりが見える】落差 小（前進可能）
              </text>
              {/* River profile with gentle slope */}
              <path
                d="M 15 110 L 90 110 L 190 145 L 265 145"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
              />
              {/* Kayaker position */}
              <rect x="40" y="98" width="28" height="12" rx="3" fill="#0284c7" />
              <circle cx="54" cy="92" r="5" fill="#38bdf8" />
              {/* Sightline: clear line of sight to exit pool */}
              <line
                x1="56"
                y1="90"
                x2="240"
                y2="140"
                stroke="#34d399"
                strokeWidth="2"
                strokeDasharray="4,3"
                markerEnd="url(#arrow)"
              />
              <text
                x="145"
                y="105"
                fill="#a7f3d0"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                視線：出口プールが見通せる
              </text>
              {/* Exit pool label */}
              <text x="225" y="170" fill="#67e8f9" fontSize="11" textAnchor="middle">
                出口プール
              </text>
              <text
                x="140"
                y="195"
                fill="#a7f3d0"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                勾配が緩やかでルートを視認できる
              </text>
            </g>

            {/* Right Box: 瀬の終わりが見えない（落差 大 / ホライゾンライン） */}
            <g transform="translate(310, 10)">
              <rect
                x="0"
                y="0"
                width="280"
                height="210"
                fill="#0f172a"
                rx="8"
                stroke="#ef4444"
                strokeWidth="2"
              />
              <text
                x="140"
                y="24"
                fill="#f87171"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                【終わりが見えない】ホライゾンライン（落差 大）
              </text>
              {/* River profile with sharp drop */}
              <path
                d="M 15 110 L 130 110 L 135 185 L 265 185"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
              />
              {/* Horizon Line marker */}
              <line
                x1="130"
                y1="90"
                x2="130"
                y2="130"
                stroke="#fbbf24"
                strokeWidth="2"
                strokeDasharray="3,3"
              />
              <text
                x="130"
                y="85"
                fill="#fbbf24"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                ▲ ホライゾンライン
              </text>
              {/* Kayaker position */}
              <rect x="40" y="98" width="28" height="12" rx="3" fill="#0284c7" />
              <circle cx="54" cy="92" r="5" fill="#38bdf8" />
              {/* Sightline: cut off by water edge, looks only into sky */}
              <line
                x1="56"
                y1="90"
                x2="250"
                y2="70"
                stroke="#f87171"
                strokeWidth="2"
                strokeDasharray="4,3"
              />
              <text x="195" y="65" fill="#fca5a5" fontSize="11" fontWeight="bold">
                空しか見えない！
              </text>
              {/* Hidden Drop & Hole */}
              <ellipse cx="160" cy="180" rx="18" ry="8" fill="#7f1d1d" opacity="0.6" />
              <text x="200" y="165" fill="#f87171" fontSize="10">
                隠れた大落差＆ホール
              </text>
              <text
                x="140"
                y="200"
                fill="#ef4444"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                ※直ちにエディインして岸から下見！
              </text>
            </g>
          </svg>
        </div>
      );

    case "pillow_undercut":
      return (
        <div className="space-y-3">
          <div className="text-xs font-mono text-red-400 font-semibold flex items-center justify-between">
            <span>[DIAGRAM] ピロー（水枕）の有無でわかるアンダーカットロック判別</span>
            <span className="text-red-300 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40">
              CRITICAL CHECK
            </span>
          </div>
          <svg
            viewBox="0 0 600 240"
            className="w-full h-auto max-h-56 rounded-lg bg-slate-900 border border-slate-800"
          >
            {/* Left: With Pillow (Safe reflection) */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="280" height="210" fill="#0f172a" rx="8" stroke="#334155" />
              <text
                x="140"
                y="24"
                fill="#10b981"
                fontSize="13"
                fontWeight="bold"
                textAnchor="middle"
              >
                【ピローあり】安全側（反発クッション）
              </text>
              {/* Solid Rock */}
              <path
                d="M 170 40 L 270 40 L 270 190 L 170 190 Z"
                fill="#475569"
                stroke="#64748b"
                strokeWidth="2"
              />
              <text x="220" y="120" fill="#cbd5e1" fontSize="12" textAnchor="middle">
                頑丈な岩壁
              </text>

              {/* Water surface & Pillow mound */}
              <path
                d="M 10 110 L 130 110 Q 150 70 170 85"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
              />
              {/* White foam pillow */}
              <ellipse cx="160" cy="85" rx="18" ry="12" fill="#a7f3d0" opacity="0.6" />
              <text x="135" y="75" fill="#34d399" fontSize="11" fontWeight="bold">
                ピロー(水枕)
              </text>

              {/* Bouncing vector */}
              <path
                d="M 155 100 Q 120 130 80 150"
                fill="none"
                stroke="#34d399"
                strokeWidth="2.5"
                markerEnd="url(#arrow)"
              />
              <text x="100" y="170" fill="#a7f3d0" fontSize="10">
                水流が外へ跳ね返る
              </text>
            </g>

            {/* Right: Undercut Without Pillow (Death Trap) */}
            <g transform="translate(310, 10)">
              <rect
                x="0"
                y="0"
                width="280"
                height="210"
                fill="#0f172a"
                rx="8"
                stroke="#ef4444"
                strokeWidth="2"
              />
              <text
                x="140"
                y="24"
                fill="#ef4444"
                fontSize="13"
                fontWeight="bold"
                textAnchor="middle"
              >
                【ピローなし】アンダーカット（即死トラップ）
              </text>
              {/* Overhanging Undercut Rock */}
              <path
                d="M 170 40 L 270 40 L 270 190 L 230 190 Q 230 120 170 80 Z"
                fill="#7f1d1d"
                stroke="#ef4444"
                strokeWidth="2"
              />
              <text x="235" y="70" fill="#fca5a5" fontSize="11" textAnchor="middle">
                水面上の岩
              </text>
              <text
                x="210"
                y="160"
                fill="#f87171"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                えぐれた空洞
              </text>

              {/* Water surface without pillow (flatly sucked underneath) */}
              <path d="M 10 110 L 170 110 L 230 150" fill="none" stroke="#f43f5e" strokeWidth="3" />

              {/* Sucking vectors */}
              <line
                x1="80"
                y1="120"
                x2="210"
                y2="160"
                stroke="#fca5a5"
                strokeWidth="2.5"
                strokeDasharray="4,4"
              />
              <text x="100" y="145" fill="#f87171" fontSize="11" fontWeight="bold">
                水が岩下に吸い込まれる
              </text>
              <text
                x="140"
                y="195"
                fill="#ef4444"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                ※人間もボートも二度と浮上不可
              </text>
            </g>
          </svg>
        </div>
      );

    case "horizontal_hole":
      return (
        <div className="space-y-3">
          <div className="text-xs font-mono text-purple-400 font-semibold flex items-center justify-between">
            <span>[DIAGRAM] ホール形状比較：U字ホール（抜け道あり） vs 横一文字（抜け道なし）</span>
            <span className="text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/40">
              RETENTION RISK
            </span>
          </div>
          <svg
            viewBox="0 0 600 220"
            className="w-full h-auto max-h-56 rounded-lg bg-slate-900 border border-slate-800"
          >
            {/* Left: Crescent / U-shape (Shoulders) */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="280" height="195" fill="#0f172a" rx="8" stroke="#334155" />
              <text
                x="140"
                y="24"
                fill="#38bdf8"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                三日月型・U字ホール（脱出可能）
              </text>
              {/* U-shape curve */}
              <path d="M 30 70 Q 140 130 250 70" fill="none" stroke="#93c5fd" strokeWidth="4" />
              {/* Shoulders escape vectors */}
              <path
                d="M 35 65 Q 15 110 25 160"
                fill="none"
                stroke="#34d399"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
              <path
                d="M 245 65 Q 265 110 255 160"
                fill="none"
                stroke="#34d399"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
              <text x="45" y="140" fill="#34d399" fontSize="11" fontWeight="bold">
                ショルダー(肩)
              </text>
              <text x="235" y="140" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="end">
                ショルダー(肩)
              </text>
              <text x="140" y="170" fill="#94a3b8" fontSize="11" textAnchor="middle">
                左右の端から下流へ吐き出される
              </text>
            </g>

            {/* Right: Straight Linear Hole (No exit) */}
            <g transform="translate(310, 10)">
              <rect
                x="0"
                y="0"
                width="280"
                height="195"
                fill="#0f172a"
                rx="8"
                stroke="#a855f7"
                strokeWidth="2"
              />
              <text
                x="140"
                y="24"
                fill="#c084fc"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                横一文字ホール（脱出困難・高キープ力）
              </text>
              {/* Linear straight bar across width */}
              <line x1="15" y1="80" x2="265" y2="80" stroke="#c084fc" strokeWidth="6" />
              {/* Continuous recirculating arrows */}
              <path
                d="M 70 120 Q 70 85 95 85 Q 120 85 120 120"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2.5"
              />
              <path
                d="M 160 120 Q 160 85 185 85 Q 210 85 210 120"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2.5"
              />
              <text
                x="140"
                y="145"
                fill="#fca5a5"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                両端まで均一に水が逆流・循環
              </text>
              <text
                x="140"
                y="170"
                fill="#e879f9"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                ※サイドサーフィンで逃げられない
              </text>
            </g>
          </svg>
        </div>
      );

    case "drowning_machine":
      return (
        <div className="space-y-3">
          <div className="text-xs font-mono text-rose-400 font-semibold flex items-center justify-between">
            <span>[DIAGRAM] 堰堤直下の循環水流「ドローニングマシーン（死人製造機）」</span>
            <span className="text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/40">
              100% PORTAGE
            </span>
          </div>
          <svg
            viewBox="0 0 600 240"
            className="w-full h-auto max-h-56 rounded-lg bg-slate-900 border border-slate-800"
          >
            {/* Concrete Low-Head Dam */}
            <path
              d="M 0 0 L 160 0 L 160 110 L 0 110 Z"
              fill="#64748b"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            <text x="80" y="55" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">
              人工堰堤 (Dam Wall)
            </text>

            {/* Riverbed */}
            <rect x="0" y="210" width="600" height="30" fill="#334155" />
            <text x="80" y="228" fill="#94a3b8" fontSize="11">
              コンクリート河床
            </text>

            {/* Falling Water */}
            <path
              d="M 160 5 Q 180 50 190 120 L 220 180"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="6"
            />

            {/* Hydraulic Roller (The Machine) */}
            <ellipse cx="280" cy="150" rx="70" ry="45" fill="#7f1d1d" opacity="0.3" />
            <path
              d="M 230 180 Q 320 200 350 150 Q 350 110 260 115 Q 200 120 215 170"
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
              strokeDasharray="6,4"
            />

            {/* Trapped Boater Marker */}
            <circle cx="280" cy="130" r="10" fill="#ef4444" />
            <text
              x="280"
              y="134"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
            >
              ✕
            </text>
            <text
              x="280"
              y="105"
              fill="#fca5a5"
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
            >
              気泡水流で浮力喪失・無限循環
            </text>

            {/* Boiling surface */}
            <path
              d="M 330 120 Q 370 100 410 120 T 490 120"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <text x="410" y="95" fill="#94a3b8" fontSize="11" textAnchor="middle">
              ボイル線 (Boil Line)
            </text>

            {/* Only Escape Route: Riverbed Outflow */}
            <path
              d="M 260 200 L 550 200"
              stroke="#10b981"
              strokeWidth="3"
              markerEnd="url(#arrow)"
              strokeDasharray="4,4"
            />
            <text x="460" y="190" fill="#34d399" fontSize="11" fontWeight="bold">
              唯一の脱出路：川底の這い出し
            </text>
          </svg>
        </div>
      );

    case "water_spurt":
      return (
        <div className="space-y-3">
          <div className="text-xs font-mono text-rose-400 font-semibold flex items-center justify-between">
            <span>[DIAGRAM] 筋状の水噴き・極細アップストリームV（鉄筋・鋭利な杭）</span>
            <span className="text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/40">
              PINNING HAZARD
            </span>
          </div>
          <svg
            viewBox="0 0 600 220"
            className="w-full h-auto max-h-56 rounded-lg bg-slate-900 border border-slate-800"
          >
            {/* Water flow */}
            <rect x="0" y="0" width="600" height="220" fill="#0f172a" />

            {/* Water surface line */}
            <line
              x1="0"
              y1="120"
              x2="600"
              y2="120"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            <text x="50" y="110" fill="#38bdf8" fontSize="11">
              水面 (Water Line)
            </text>

            {/* Submerged Steel Rebar / Iron Spike */}
            <line
              x1="260"
              y1="210"
              x2="310"
              y2="105"
              stroke="#94a3b8"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="310" cy="105" r="5" fill="#ef4444" />
            <text x="360" y="140" fill="#fca5a5" fontSize="12" fontWeight="bold">
              水没した鉄筋・尖った岩
            </text>

            {/* Water Spurt plume */}
            <path
              d="M 310 105 Q 320 60 330 40 Q 335 30 330 20 Q 315 50 300 100"
              fill="#ffffff"
              opacity="0.8"
            />
            <text x="345" y="35" fill="#fbbf24" fontSize="12" fontWeight="bold">
              細くピュッと噴き上がる水しぶき
            </text>

            {/* Kayak silhouette hitting risk */}
            <path d="M 120 85 Q 170 95 240 85" stroke="#fb923c" strokeWidth="4" fill="none" />
            <text x="170" y="70" fill="#fdba74" fontSize="11" textAnchor="middle">
              カヤック艇底
            </text>
            <text x="210" y="170" fill="#ef4444" fontSize="12" fontWeight="bold">
              ※船体を貫通・ピンニングさせる凶器
            </text>
          </svg>
        </div>
      );

    case "hole_angle":
      return (
        <div className="space-y-3">
          <div className="text-xs font-mono text-amber-400 font-semibold flex items-center justify-between">
            <span>[DIAGRAM] ホール側面の落水角度とキープ力（30〜45° スロープ vs 90° 垂直）</span>
            <span className="text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/40">
              ANGLE DYNAMICS
            </span>
          </div>
          <svg
            viewBox="0 0 600 230"
            className="w-full h-auto max-h-56 rounded-lg bg-slate-900 border border-slate-800"
          >
            {/* Left: 45 Degree Ramp (Low Retention, Punchable) */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="280" height="205" fill="#0f172a" rx="8" stroke="#334155" />
              <text
                x="140"
                y="24"
                fill="#34d399"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                【落水角 30°〜45°】スロープ型ホール
              </text>
              {/* Ramp drop */}
              <path
                d="M 20 60 L 100 60 L 170 140 L 260 140"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4"
              />
              {/* Forward vector */}
              <line
                x1="80"
                y1="50"
                x2="220"
                y2="135"
                stroke="#34d399"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
              <text
                x="140"
                y="80"
                fill="#a7f3d0"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                下流への前進ベクトルが残存
              </text>
              {/* Small backwash */}
              <path d="M 200 135 Q 160 120 180 140" fill="none" stroke="#ffffff" strokeWidth="2" />
              <text
                x="140"
                y="180"
                fill="#34d399"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                強気のパドリング（ホールパンチ）で突破可能
              </text>
            </g>

            {/* Right: 90 Degree Vertical Drop (High Retention Trap) */}
            <g transform="translate(310, 10)">
              <rect
                x="0"
                y="0"
                width="280"
                height="205"
                fill="#0f172a"
                rx="8"
                stroke="#ef4444"
                strokeWidth="2"
              />
              <text
                x="140"
                y="24"
                fill="#f87171"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                【落水角 接近90°】垂直落下ホール
              </text>
              {/* Vertical cliff drop */}
              <path
                d="M 20 60 L 100 60 L 105 140 L 260 140"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
              />

              {/* Recirculating wall backwash */}
              <path d="M 170 140 Q 110 80 100 130" fill="none" stroke="#fca5a5" strokeWidth="3.5" />

              <text x="105" y="105" fill="#ef4444" fontSize="12" fontWeight="bold">
                90° 垂直
              </text>
              <text x="180" y="80" fill="#fca5a5" fontSize="11" fontWeight="bold">
                強烈な巻き戻り壁
              </text>
              <text
                x="140"
                y="170"
                fill="#ef4444"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                ※前進速度が相殺され完全に捕縛される
              </text>
              <text x="140" y="190" fill="#fca5a5" fontSize="10" textAnchor="middle">
                （正面突破は不可・必ず迂回）
              </text>
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
