import React from "react";
import {
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import kayakerProfileImg from "../assets/images/kayaker_profile_portrait_1792156658714.jpg";

export const RollPracticeBoatGuide: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50/90 via-white to-teal-50/70 rounded-2xl border-2 border-amber-300 p-6 lg:p-8 mb-12 shadow-md">
      {/* Header Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-amber-200 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 text-xs font-bold mb-2">
            <RotateCcw
              className="w-3.5 h-3.5 text-amber-700 animate-spin"
              style={{ animationDuration: "6s" }}
            />
            <span>ロール習得の最重要メソッド</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            ロールをおぼえるには、乗りたいボートではなく「ロールしやすい薄いボート」で練習しよう！
          </h4>
          <p className="text-xs sm:text-sm text-foreground/80 mt-1 leading-relaxed">
            「憧れの最新クリーカーを買ったのに、何度練習してもロールが起き上がらない…」その原因はあなたの筋力ではなく、
            <span className="font-bold text-amber-900 bg-amber-100 px-1 rounded">ボートの厚み</span>
            にあります。
          </p>
        </div>
      </div>

      {/* SVG Comparative Diagram: Thick Deck vs Thin Deck */}
      <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 mb-8 border border-slate-800 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono mb-4 text-slate-300">
          <span className="font-bold text-amber-400">
            [DIAGRAM] 前傾姿勢の限界テスト：分厚いボート vs 厚みの薄いボート
          </span>
          <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded border border-slate-700">
            地上・水面比較
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Thick Boat (Failure pattern) */}
          <div className="bg-slate-900/90 rounded-xl p-4 border border-rose-800/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />❌
                  分厚いボート（大型クリーカー等）
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-700/60">
                  練習には不向き
                </span>
              </div>

              {/* SVG Graphic Thick Boat */}
              <svg
                viewBox="0 0 320 170"
                className="w-full h-auto max-h-44 bg-slate-950 rounded-lg border border-slate-800 mb-3"
              >
                {/* Ground / Water surface line */}
                <line
                  x1="10"
                  y1="130"
                  x2="310"
                  y2="130"
                  stroke="#475569"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                <text x="20" y="145" fill="#64748b" fontSize="10" fontFamily="monospace">
                  地面・水面ライン
                </text>

                {/* Bulky High-Volume Kayak Profile */}
                <path
                  d="M 30 130 Q 30 50 160 50 Q 290 50 290 130 Z"
                  fill="#1e293b"
                  stroke="#ef4444"
                  strokeWidth="3.5"
                />
                {/* High deck bulge indicator */}
                <path
                  d="M 110 50 Q 160 30 210 50"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="2.5"
                  strokeDasharray="2,2"
                />
                <text
                  x="160"
                  y="40"
                  fill="#fca5a5"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  ▲ 分厚い巨大デッキ（300L超）
                </text>

                {/* Paddler bent forward but blocked by deck */}
                {/* Cockpit rim */}
                <ellipse
                  cx="160"
                  cy="55"
                  rx="35"
                  ry="10"
                  fill="#0f172a"
                  stroke="#64748b"
                  strokeWidth="2"
                />
                {/* Torso blocked */}
                <path
                  d="M 160 55 L 195 80"
                  stroke="#f87171"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Head */}
                <circle cx="205" cy="75" r="9" fill="#fca5a5" />
                {/* Arm reaching down */}
                <line
                  x1="195"
                  y1="80"
                  x2="225"
                  y2="105"
                  stroke="#f87171"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Hand position floating above ground */}
                <circle cx="225" cy="105" r="4" fill="#ef4444" />

                {/* Gap measurement */}
                <line
                  x1="225"
                  y1="105"
                  x2="225"
                  y2="130"
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                  strokeDasharray="2,2"
                />
                <text x="245" y="120" fill="#fbbf24" fontSize="10" fontWeight="bold">
                  手が届かない！
                </text>
              </svg>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="text-rose-300 font-bold">【前傾姿勢で手が地面につかない】</div>
                <p className="text-[11px] text-muted-foreground/70 leading-snug">
                  デッキの厚みが邪魔をして、上体を完全に前に倒しきれません。水中でパドルが水面から遠く離れ、ヒップスナップを利かせられず何度練習しても起き上がれません。
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-rose-400 font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>「前傾して手が届かないボートは練習しても上手くいかない」</span>
            </div>
          </div>

          {/* Right: Thin Boat (Success pattern) */}
          <div className="bg-slate-900/90 rounded-xl p-4 border border-emerald-600/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  ⭕️ 厚みの薄いボート（スライス・プレイボート等）
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/60">
                  ロール練習に最適！
                </span>
              </div>

              {/* SVG Graphic Thin Boat */}
              <svg
                viewBox="0 0 320 170"
                className="w-full h-auto max-h-44 bg-slate-950 rounded-lg border border-slate-800 mb-3"
              >
                {/* Ground / Water surface line */}
                <line
                  x1="10"
                  y1="130"
                  x2="310"
                  y2="130"
                  stroke="#475569"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                <text x="20" y="145" fill="#64748b" fontSize="10" fontFamily="monospace">
                  地面・水面ライン
                </text>

                {/* Thin Low-Profile Kayak Profile */}
                <path
                  d="M 30 130 Q 30 85 160 85 Q 290 85 290 130 Z"
                  fill="#1e293b"
                  stroke="#10b981"
                  strokeWidth="3.5"
                />
                <text
                  x="160"
                  y="75"
                  fill="#a7f3d0"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  ▼ 薄くフラットなローデッキ
                </text>

                {/* Paddler bent fully forward touching ground */}
                {/* Cockpit rim */}
                <ellipse
                  cx="160"
                  cy="88"
                  rx="35"
                  ry="8"
                  fill="#0f172a"
                  stroke="#64748b"
                  strokeWidth="2"
                />
                {/* Torso hugging deck */}
                <path
                  d="M 160 88 L 220 115"
                  stroke="#34d399"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Head low */}
                <circle cx="232" cy="112" r="9" fill="#a7f3d0" />
                {/* Arm reaching ground */}
                <line
                  x1="220"
                  y1="115"
                  x2="250"
                  y2="130"
                  stroke="#34d399"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Hand touching ground firmly */}
                <circle cx="250" cy="130" r="5" fill="#10b981" />
                <path d="M 245 130 L 255 130" stroke="#ffffff" strokeWidth="2" />

                <text
                  x="245"
                  y="148"
                  fill="#34d399"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  手のひらがベタッと着く！
                </text>
              </svg>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="text-emerald-300 font-bold">
                  【前傾姿勢で手が地面にベタッとつく】
                </div>
                <p className="text-[11px] text-muted-foreground/70 leading-snug">
                  デッキが薄いため、お腹をボートに密着させて限界まで低く倒れ込めます。水面近くにパドルを構えられ、腰の小さなひねり（ヒップスナップ）だけでスルリと起き上がれます。
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>「厚みの薄いボートで練習すれば身体の連動が即座に身につく」</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Step Practical Ground Check & Reasoning */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-card p-4 rounded-xl border border-amber-200 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
            <span className="w-5 h-5 rounded-full bg-amber-600 text-primary-foreground font-mono flex items-center justify-center text-xs">
              1
            </span>
            <span>芝生の上の「手つきテスト」</span>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed">
            陸上の平らな芝生の上でボートに座り、前傾姿勢をとって両手を左右の地面に下ろします。
            <span className="font-bold text-foreground">
              手のひらが地面に届かなければ、そのボートはロール練習用には分厚すぎます。
            </span>
          </p>
        </div>

        <div className="bg-card p-4 rounded-xl border border-amber-200 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
            <span className="w-5 h-5 rounded-full bg-amber-600 text-primary-foreground font-mono flex items-center justify-center text-xs">
              2
            </span>
            <span>「薄いボート」で身体を覚える</span>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed">
            中古のハーフスライス、フルスライス、あるいはスクール用のローボリューム艇を借りて練習しましょう。
            <span className="font-bold text-foreground">
              薄いボートなら力を使わず、腰の反りと首の倒し方だけで起き上がる感覚
            </span>
            が掴めます。
          </p>
        </div>

        <div className="bg-card p-4 rounded-xl border border-amber-200 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
            <span className="w-5 h-5 rounded-full bg-amber-600 text-primary-foreground font-mono flex items-center justify-center text-xs">
              3
            </span>
            <span>覚えてから「憧れのボート」へ</span>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed">
            薄いボートで一度ロールのコツを脳と身体に叩き込めば、
            <span className="font-bold text-foreground">
              後から憧れの分厚いクリークボートに乗っても、同じヒップスナップで自然と起き上がれる
            </span>
            ようになります。
          </p>
        </div>
      </div>

      {/* Kayaker Voice Speech Bubble Callout */}
      <div className="bg-card/95 rounded-xl border-2 border-primary/50 p-4 sm:p-5 shadow-sm">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-xs bg-slate-800 ring-2 ring-teal-100">
              <img
                src={kayakerProfileImg}
                alt="kayaker（カヤッカー）"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[10px] font-black text-foreground font-mono mt-1">kayaker</span>
            <span className="text-[8px] text-primary font-bold bg-accent px-1 rounded border border-teal-200">
              25年パドラー
            </span>
          </div>

          <div className="flex-1 text-xs sm:text-sm text-foreground space-y-1.5 leading-relaxed">
            <div className="text-xs font-bold text-primary flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>kayakerの生の声：形から入って挫折するパドラーを救いたい</span>
            </div>
            <p className="font-medium text-foreground">
              「『いつか大激流を下りたいから』と、初心者がいきなり最新の300L超えクリーカーを買ってプールで何十回もロール練習し、上がらなくてカヤックをやめてしまう…そんな悲しい光景を25年間で山ほど見てきました。
              <br />
              <strong className="text-amber-900 bg-amber-100 px-1 rounded">
                前傾して手が地面につかない分厚いボートは、人間工学的に初心者のロール練習には不向き
              </strong>
              なんです。まずは中古でも良いので厚みの薄いボートで練習してください。驚くほど簡単にクルッと起き上がれるようになりますよ！」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
