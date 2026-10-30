import React, { useState } from "react";
import {
  KAYAKER_TIPS,
  KAYAKER_HARMONY_BANNER,
  KAYAKER_ESSENCES,
  PADDLER_ANOMALY,
  PaddlerTipItem,
} from "../data/paddlerTipsData";
import jaziKayakerImg from "../assets/images/jazi_elderly_sit_1792339050098.jpg";
import {
  Compass,
  Waves,
  LifeBuoy,
  ShieldAlert,
  AlertTriangle,
  Volume2,
  Smartphone,
  Tag,
  PhoneCall,
  UserCheck,
  RotateCcw,
  HeartHandshake,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowDown,
  Anchor,
  ArrowRight,
  ShieldCheck,
  Flame,
  MessageSquareQuote,
  Pencil,
  Undo2,
} from "lucide-react";

export const PaddlerTipsSection: React.FC = () => {
  // Custom comments state with localStorage persistence
  const [customComments, setCustomComments] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem("rapidpulse_kayaker_tip_comments");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [editingTipId, setEditingTipId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleStartEdit = (id: string, currentText: string) => {
    setEditingTipId(id);
    setEditText(currentText);
  };

  const handleCancelEdit = () => {
    setEditingTipId(null);
    setEditText("");
  };

  const handleSaveComment = (id: string) => {
    if (!editText.trim()) return;
    const updated = { ...customComments, [id]: editText.trim() };
    setCustomComments(updated);
    try {
      localStorage.setItem("rapidpulse_kayaker_tip_comments", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setEditingTipId(null);
    setEditText("");
  };

  const handleResetComment = (id: string) => {
    const updated = { ...customComments };
    delete updated[id];
    setCustomComments(updated);
    try {
      localStorage.setItem("rapidpulse_kayaker_tip_comments", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    if (editingTipId === id) {
      setEditingTipId(null);
      setEditText("");
    }
  };
  // Render illustration helper based on item's illustrationType
  const renderIllustration = (type: PaddlerTipItem["illustrationType"]) => {
    switch (type) {
      case "river-bank":
        return (
          <div className="bg-slate-900 text-primary-foreground rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden border border-slate-700 min-h-[140px]">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-950/40 to-slate-950/80 pointer-events-none" />
            <div className="relative z-10 w-full max-w-xs space-y-2">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-700 pb-1.5 text-slate-300">
                <span className="font-bold text-teal-400">【左岸】Left Bank</span>
                <span className="text-[10px] text-muted-foreground/70">川の流れ ↓</span>
                <span className="font-bold text-amber-400">【右岸】Right Bank</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-1">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-teal-400 flex items-center justify-center text-teal-300 font-bold text-xs">
                  左
                </div>
                <div className="flex flex-col items-center text-teal-300">
                  <ArrowDown className="w-5 h-5 animate-bounce text-teal-400" />
                  <span className="text-[10px] font-mono tracking-wider">下流を向く視点</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 font-bold text-xs">
                  右
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                下流（水が流れていく先）を向いたときの手の向きで決定！
              </p>
            </div>
          </div>
        );

      case "pfd-buoyancy":
        return (
          <div className="bg-slate-900 text-primary-foreground rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden border border-slate-700 min-h-[140px]">
            <div className="w-full grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 space-y-1">
                <span className="text-sky-300 font-bold block text-[11px]">
                  🌊 海水（塩分あり）
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  比重1.025。塩分で身体が浮きやすい。
                </p>
              </div>
              <div className="bg-rose-950/40 p-2.5 rounded-lg border border-rose-700/60 space-y-1">
                <span className="text-rose-400 font-bold block text-[11px]">💧 川の真水 ＋ 泡</span>
                <p className="text-[10px] text-slate-200 leading-snug font-medium">
                  淡水は比重1.0。白波は空気混入で比重0.6〜0.8に急減！
                </p>
              </div>
            </div>
            <div className="mt-2 text-center text-[11px] text-amber-300 font-bold flex items-center gap-1.5 justify-center">
              <LifeBuoy className="w-3.5 h-3.5 text-amber-400" />
              <span>だからPFDを着ていないと石のように水底へ沈む！</span>
            </div>
          </div>
        );

      case "no-standing":
        return (
          <div className="bg-rose-950/80 text-primary-foreground rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden border border-rose-600/60 min-h-[140px]">
            <div className="flex items-center gap-2 mb-2 text-rose-300 text-xs font-bold">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>フットエントラップメントの物理トラップ</span>
            </div>
            <div className="w-full bg-slate-900/90 rounded-lg p-3 text-xs space-y-1 border border-rose-500/40">
              <div className="flex justify-between text-[11px] font-mono text-rose-300">
                <span>足が岩に挟まる</span>
                <span>→</span>
                <span>水圧で倒される</span>
                <span>→</span>
                <span className="text-primary-foreground font-bold">自力脱出不可</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug pt-1">
                水深数十cmでも激流の水圧は数百kg。立とうとせず必ず「足先を浮かせた仰向け」をキープ！
              </p>
            </div>
          </div>
        );

      case "whistle":
        return (
          <div className="bg-slate-900 text-primary-foreground rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden border border-slate-700 min-h-[140px]">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>川の音響コード（FOX40 玉なしホイッスル）</span>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full text-[11px]">
              <div className="bg-slate-800 p-2 rounded border border-slate-700 text-left">
                <span className="text-teal-300 font-bold block">短音1吹「ピッ！」</span>
                <span className="text-slate-300 text-[10px]">注目・停止・見よ</span>
              </div>
              <div className="bg-rose-900/40 p-2 rounded border border-rose-600 text-left">
                <span className="text-rose-300 font-bold block">長音3吹「ピーッ×3」</span>
                <span className="text-rose-200 text-[10px] font-bold">最重要SOS・緊急救助</span>
              </div>
            </div>
          </div>
        );

      case "first-step":
        return (
          <div className="bg-teal-950 text-primary-foreground rounded-xl p-4 flex flex-col justify-center border border-teal-700/60 min-h-[140px]">
            <span className="text-[11px] font-mono font-bold text-teal-300 mb-2 block text-center">
              セルフレスキュー最初の5ステップ
            </span>
            <div className="flex items-center justify-between text-[10px] font-mono text-center gap-1">
              <div className="bg-teal-900/80 p-1.5 rounded flex-1 border border-primary">
                <span className="block font-bold text-teal-300">①転覆</span>
              </div>
              <span className="text-teal-500">→</span>
              <div className="bg-teal-900/80 p-1.5 rounded flex-1 border border-primary">
                <span className="block font-bold text-teal-300">②スカート脱</span>
              </div>
              <span className="text-teal-500">→</span>
              <div className="bg-teal-900/80 p-1.5 rounded flex-1 border border-primary">
                <span className="block font-bold text-teal-300">③艇起こす</span>
              </div>
              <span className="text-teal-500">→</span>
              <div className="bg-teal-900/80 p-1.5 rounded flex-1 border border-primary">
                <span className="block font-bold text-teal-300">④パドル差込</span>
              </div>
              <span className="text-teal-500">→</span>
              <div className="bg-teal-900/80 p-1.5 rounded flex-1 border border-primary">
                <span className="block font-bold text-teal-300">⑤泳ぐ</span>
              </div>
            </div>
          </div>
        );

      case "never-tether":
        return (
          <div className="bg-rose-950 text-primary-foreground rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden border border-rose-600 min-h-[140px]">
            <div className="flex items-center gap-2 mb-1.5 text-rose-300 text-xs font-bold">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
              <span>自縄自縛の即死リスク</span>
            </div>
            <p className="text-xs text-rose-100 leading-snug">
              「サーフィン用リーシュ」やロープで身体とボートを繋ぐのは絶対に厳禁！
              激流でロープが足や首に絡みつくと、数百kgの水圧で水底に引きずり込まれ即死します。
            </p>
          </div>
        );

      case "parallel-forward":
        return (
          <div className="bg-slate-900 text-primary-foreground rounded-xl p-4 flex flex-col justify-center border border-indigo-600/70 min-h-[140px]">
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-700">
              <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <span>🚲 斜面の物理法則：自転車の坂道ウイリー vs 前傾平行</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-200 border border-indigo-500/40">
                斜面姿勢
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/60 space-y-1">
                <span className="text-rose-400 font-bold block text-[11px]">
                  ❌ 後傾（ウイリー状態）
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  バウが浮きスターン沈没。「後ろコントロール」で舵が利かず曲がれない！
                </p>
              </div>
              <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/60 space-y-1">
                <span className="text-emerald-400 font-bold block text-[11px]">
                  ⭕️ 前傾（水面と平行）
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  川の斜度に合わせて胸を前へ。ハル全面で水流を掴みライン通りに旋回！
                </p>
              </div>
            </div>
            <p className="text-[11px] text-amber-300 text-center font-bold mt-2 pt-1 border-t border-slate-800">
              「自転車で坂道降りる時にウイリーしてたら難しいだろ！」
            </p>
          </div>
        );

      case "falling-sport":
        return (
          <div className="bg-slate-900 text-primary-foreground rounded-xl p-4 flex flex-col justify-center border border-emerald-600/70 min-h-[140px]">
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-700">
              <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <span>⛷️ 落下スポーツの真理：スキーやダウンヒルと同じ！</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-500/40">
                重力落下
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/60 space-y-1">
                <span className="text-rose-400 font-bold block text-[11px]">
                  ❌ 瀬で一所懸命漕ぎ狂う
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  落下中は水が掴めず空振り。無理に漕ぐと自らバランスを崩して沈！
                </p>
              </div>
              <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/60 space-y-1">
                <span className="text-emerald-400 font-bold block text-[11px]">
                  ⭕️ バランス重視で構える
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  重心を低くしブレイスで水圧を受け流す。落ちきった後の出口で漕ぎ出す！
                </p>
              </div>
            </div>
            <p className="text-[11px] text-emerald-300 text-center font-bold mt-2 pt-1 border-t border-slate-800">
              「どうせ落下している最中はろくなことはできない。バランスに集中せよ！」
            </p>
          </div>
        );

      case "roll-is-recovery":
        return (
          <div className="bg-slate-900 text-primary-foreground rounded-xl p-4 flex flex-col justify-center border border-primary/70 min-h-[140px]">
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-700">
              <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                <span>🛡️ パドラーの美学：ロールはリカバリー ＆ ポーテージの誇り</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-200 border border-primary/40">
                COOL PADDLER
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-teal-950/40 p-2.5 rounded-lg border border-teal-800/60 space-y-1">
                <span className="text-teal-300 font-bold block text-[11px] flex items-center gap-1">
                  <span>✨ ロールしないで下るのがクール！</span>
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  ロールに頼らず、リバーリーディング・ブレイス・エッジワークで水流をいなしクリーンに下る。水面下の隠れ岩に頭を打つリスクをゼロにする！
                </p>
              </div>
              <div className="bg-amber-950/40 p-2.5 rounded-lg border border-amber-800/60 space-y-1">
                <span className="text-amber-300 font-bold block text-[11px] flex items-center gap-1">
                  <span>🚶‍♂️ ダメな時は迷わずポーテージ！</span>
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  「少しでも危ない・怖い」と感じた時にボートを担ぐ判断力。初心者も上級者も全く同じ心で誇るべき、最高のパドラーシップ！
                </p>
              </div>
            </div>
            <p className="text-[11px] text-teal-300 text-center font-bold mt-2 pt-1 border-t border-slate-800">
              「ロールはあくまでリカバリー。ロールしないで下るのがクール。ダメな時のポーテージは最高の英断！」
            </p>
          </div>
        );

      case "shared-river":
        return (
          <div className="bg-slate-900 text-primary-foreground rounded-xl p-4 flex flex-col justify-center border border-emerald-500/70 min-h-[140px]">
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-700">
              <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <span>🏞️ 川の共有財産とマナー：ダム200m管理区域 ＆ 釣り人・地域への配慮</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-500/40">
                SHARED RIVER
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/60 space-y-1">
                <span className="text-rose-300 font-bold block text-[11px] flex items-center gap-1">
                  <span>⚠️ ダム・堰堤の上流200mは管理区域</span>
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  強い吸い込みや急激な放流リスクあり。進入禁止看板やブイを遵守し、進入時は管理事務所へ事前確認・許可申請を徹底！
                </p>
              </div>
              <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/60 space-y-1">
                <span className="text-emerald-300 font-bold block text-[11px] flex items-center gap-1">
                  <span>🤝 私有地・河川敷アクセス ＆ 釣り人への配慮</span>
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  川原への通路が私有地や農道の場合は事前確認と挨拶。路上駐車や騒音は厳禁。釣り人の仕掛けを避けて対岸を静かに通過！
                </p>
              </div>
            </div>
            <p className="text-[11px] text-emerald-300 text-center font-bold mt-2 pt-1 border-t border-slate-800">
              「川はみんなの共有財産。管理区域の厳守と、地元住民・釣り人への譲り合いが真のカヤッカーの品格！」
            </p>
          </div>
        );

      case "pfd-certified-rescue":
        return (
          <div className="bg-slate-900 text-primary-foreground rounded-xl p-4 flex flex-col justify-center border border-rose-500/70 min-h-[140px]">
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-700">
              <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                <span>🦺 認定PFD ＆ クイックリリースの鉄則</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-200 border border-rose-500/40">
                USCG TYPE III & QUICK RELEASE
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/60 space-y-1">
                <span className="text-rose-300 font-bold block text-[11px] flex items-center gap-1">
                  <span>🛡️ USCG認定（Type III）</span>
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  単なる浮力だけでなく、激流の強烈な水圧や引き上げに耐える「縫製・引き裂き強度試験」済み！安物とは命の強度が違う！
                </p>
              </div>
              <div className="bg-teal-950/40 p-2.5 rounded-lg border border-teal-800/60 space-y-1">
                <span className="text-teal-300 font-bold block text-[11px] flex items-center gap-1">
                  <span>⚓️ クイックリリースベルト</span>
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  流されたボートの牽引（トウイング）や、ロープで自身を確保し激流へ飛び込む「ライブベイトレスキュー」など救助の選択肢が倍増！
                </p>
              </div>
              <div className="bg-amber-950/40 p-2.5 rounded-lg border border-amber-800/60 space-y-1">
                <span className="text-amber-300 font-bold block text-[11px] flex items-center gap-1">
                  <span>⚠️ 出艇前の作動テスト必須</span>
                </span>
                <p className="text-[10px] text-slate-300 leading-snug">
                  砂噛みやバックル通しミスで外れないと水中ストレーナーで命取り！出艇前にトグルを引いてスムーズに外れるか必ずテスト！
                </p>
              </div>
            </div>
            <p className="text-[11px] text-amber-300 text-center font-bold mt-2 pt-1 border-t border-slate-800">
              「認定品は命の強度。クイックリリースは救助の武器。出艇前のリリーステストを絶対に怠るな！」
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const renderTipCard = (tip: PaddlerTipItem) => {
    const currentComment = customComments[tip.id] || tip.kayakerComment;
    const isEdited = Boolean(customComments[tip.id]);

    return (
      <div
        key={tip.id}
        className="bg-card rounded-2xl border-2 border-border hover:border-teal-400 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-5"
      >
        {/* Header Row: Number + Category Badge + Title */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-border pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="h-8 px-2.5 rounded-xl bg-primary text-primary-foreground font-mono font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-xs">
                {tip.number}
              </span>
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${tip.categoryColor}`}
              >
                {tip.categoryLabel}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-foreground pt-1 leading-snug">
              {tip.title}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-primary">{tip.subtitle}</p>
          </div>
        </div>

        {/* Key Rule Highlight Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-950 font-bold flex items-start gap-2.5 shadow-2xs">
          <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-snug">
            <span className="text-amber-800 text-xs block mb-0.5">鉄則ルール：</span>
            <span>{tip.keyRule}</span>
          </div>
        </div>

        {/* Illustration / Visual Diagram if present */}
        {renderIllustration(tip.illustrationType)}

        {/* Explanation Text */}
        <div className="text-xs sm:text-sm text-foreground/80 leading-relaxed space-y-2">
          <p>{tip.explanation}</p>
        </div>

        {/* Action Protocol Checklist */}
        <div className="bg-secondary border border-border rounded-xl p-4 space-y-2">
          <span className="text-xs font-bold text-foreground block flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
            現場での実践プロトコル:
          </span>
          <ul className="space-y-1.5 text-xs text-foreground/80">
            {tip.actionProtocol.map((act, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-primary font-bold shrink-0 mt-0.5">・</span>
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Warning Note if exists */}
        {tip.warningNote && (
          <div className="bg-rose-50 border border-rose-300 text-rose-950 rounded-lg p-3 text-xs flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span className="leading-snug font-medium">{tip.warningNote}</span>
          </div>
        )}

        {/* Jazi-kayaker Circular Face & Speech Bubble Comment */}
        <div className="pt-4 border-t border-border mt-2">
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Avatar Circle */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-primary shadow-md bg-slate-800 ring-2 ring-teal-100">
                <img
                  src={jaziKayakerImg}
                  alt="Jazi-kayaker（ジャジー）の顔写真"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] font-black text-foreground font-mono mt-1">
                Jazi-kayaker
              </span>
              <span className="text-[9px] text-primary font-bold bg-accent px-1 rounded border border-teal-200">
                土佐のいごっそう
              </span>
            </div>

            {/* Speech Bubble Container */}
            <div className="flex-1 relative min-w-0">
              {/* Triangle Tail */}
              <div className="hidden sm:block absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-teal-100/90" />

              <div className="bg-accent/80 border border-teal-200 rounded-2xl p-4 text-xs sm:text-sm text-foreground shadow-xs relative">
                {/* Bubble Top Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-teal-200/60 text-xs font-bold text-primary">
                  <span className="flex items-center gap-1.5">
                    <MessageSquareQuote className="w-4 h-4 text-primary shrink-0" />
                    <span>Jazi（ジャジー）の現場の生の声</span>
                  </span>

                  <div className="flex items-center gap-2">
                    {isEdited && (
                      <button
                        type="button"
                        onClick={() => handleResetComment(tip.id)}
                        className="text-[10px] text-muted-foreground hover:text-rose-600 underline flex items-center gap-1 transition-colors"
                        title="初期コメントに戻す"
                      >
                        <Undo2 className="w-2.5 h-2.5" />
                        <span>初期値に戻す</span>
                      </button>
                    )}

                    {editingTipId !== tip.id ? (
                      <button
                        type="button"
                        onClick={() => handleStartEdit(tip.id, currentComment)}
                        className="text-[11px] font-semibold text-primary hover:text-teal-950 bg-card hover:bg-accent px-2 py-0.5 rounded-md border border-teal-300 shadow-2xs transition-colors flex items-center gap-1"
                      >
                        <Pencil className="w-3 h-3 text-primary" />
                        <span>編集</span>
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* Speech Content / Editable Form */}
                {editingTipId === tip.id ? (
                  <div className="space-y-2.5 mt-2">
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      rows={3}
                      className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-teal-400 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner"
                      placeholder="Jazi（ジャジー）のコメントを自由に入力..."
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="px-3 py-1 text-xs text-muted-foreground hover:text-foreground bg-card rounded border border-border transition-colors"
                      >
                        キャンセル
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveComment(tip.id)}
                        className="px-3.5 py-1 text-xs font-bold text-primary-foreground bg-primary hover:bg-primary rounded shadow-xs transition-colors"
                      >
                        保存する
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="leading-relaxed text-foreground font-medium">
                    「{currentComment}」
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="paddler-tips" className="py-20 lg:py-28 bg-secondary border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ========================================================================= */}
        {/* CHAPTER 1: カヤッカーなら知っててTips 16選（実践Tips 13選） */}
        {/* ========================================================================= */}
        <div className="space-y-10">
          <div className="border-b border-border pb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2 uppercase tracking-wider">
              <span className="px-2 py-0.5 bg-accent rounded text-primary">Section 01-C</span>
              <span aria-hidden="true">·</span>
              <span>Essential River Tips</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-foreground tracking-tight">
              カヤッカーなら知っててTips 16選
            </h2>
            <p className="text-foreground/80 text-base mt-2 max-w-3xl leading-relaxed">
              教科書には小さくしか書かれていないけれど、ベテランが命を守るために身体で覚えている「川の実践知恵袋
              14選」。 事故を未然に防ぎ、一生涯楽しく安全にパドリングを続けるための必読Tipsです。
            </p>
          </div>

          {/* 13 Tips: Sequential Vertical List Flow */}
          <div className="space-y-8">{KAYAKER_TIPS.map(renderTipCard)}</div>

          {/* ========================================================================= */}
          {/* HARMONY BANNER: 「カヤックは川と調和する。他人にも迷惑かけない」 */}
          {/* ========================================================================= */}
          <div className="bg-slate-950 text-primary-foreground rounded-3xl p-8 sm:p-12 border-2 border-teal-400/40 shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-400 text-slate-950 flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {KAYAKER_HARMONY_BANNER.title}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-teal-300 tracking-tight leading-tight">
                {KAYAKER_HARMONY_BANNER.catchphrase}
              </h3>

              <p className="text-base sm:text-lg font-bold text-slate-200">
                {KAYAKER_HARMONY_BANNER.subphrase}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                {KAYAKER_HARMONY_BANNER.message}
              </p>

              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>川を愛し、川に敬意を払い、周囲と調和して下るのがカヤッカーの誇り</span>
                </div>

                <a
                  href="#kayaker-essence"
                  className="px-6 py-3 rounded-xl bg-primary hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-teal-500/20 whitespace-nowrap"
                >
                  <span>続いて新章：カヤッカーなら知っててEssenceへ</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER 2: カヤッカーなら知っててEssence（新章） */}
        {/* ========================================================================= */}
        <div id="kayaker-essence" className="pt-16 border-t-2 border-border space-y-10">
          <div className="border-b border-border pb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-800 font-bold mb-2 uppercase tracking-wider">
              <span className="px-2 py-0.5 bg-amber-100 rounded text-amber-900">Section 01-D</span>
              <span aria-hidden="true">·</span>
              <span>Core River Essence & Body Dynamics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-foreground tracking-tight">
              カヤッカーなら知っててEssence
            </h2>
            <p className="text-foreground/80 text-base mt-2 max-w-3xl leading-relaxed">
              激流の物理法則と命のギアに身体を委ねる「4大エッセンス（真理・力学・パドラー精神・認定ギア）」。
              無理に抗わず、流れと一体になって難所を攻略するための身体感覚と不変の哲学です。
            </p>
          </div>

          {/* 4 Essence Cards */}
          <div className="space-y-8">{KAYAKER_ESSENCES.map(renderTipCard)}</div>

          {/* ========================================================================= */}
          {/* MOVED ANOMALY BANNER: 「知識に学ぶ賢者であれ！」 */}
          {/* ========================================================================= */}
          <div className="bg-slate-950 text-primary-foreground rounded-3xl p-8 sm:p-12 border-2 border-amber-400/40 shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400 text-slate-950 flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {PADDLER_ANOMALY.title}
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black text-amber-300 tracking-tight leading-tight">
                {PADDLER_ANOMALY.catchphrase}
              </h3>

              <p className="text-base sm:text-lg font-bold text-slate-200">
                {PADDLER_ANOMALY.subphrase}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                {PADDLER_ANOMALY.message}
              </p>

              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>愚者は己の経験に学び、賢者は先人の知識（歴史）に学ぶ</span>
                </div>

                <a
                  href="#river-flow-tips"
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20 whitespace-nowrap"
                >
                  <span>次へ：川の読み方 ＆ リバーフローTips（Section 02）へ</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
