import React, { useState } from "react";
import {
  Waves,
  Heart,
  ShieldCheck,
  Compass,
  Sparkles,
  MapPin,
  Anchor,
  Award,
  Quote,
  Flame,
  Zap,
} from "lucide-react";
import jaziKayakerImg from "../assets/images/jazi_elderly_sit_1792339050098.jpg";
import kaziPaddlerImg from "../assets/images/kazi_lime_indus_1792339050117.jpg";

export const AboutSection: React.FC = () => {
  const [jaziImgLoaded, setJaziImgLoaded] = useState(false);
  const [jaziImgError, setJaziImgError] = useState(false);

  const [kaziImgLoaded, setKaziImgLoaded] = useState(false);
  const [kaziImgError, setKaziImgError] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-border pb-8 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2 uppercase tracking-wider">
            <span className="px-2 py-0.5 bg-accent rounded text-primary">About Us</span>
            <span aria-hidden="true">·</span>
            <span>Concept & Navigators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-foreground tracking-tight">
            New to Kayaker.jp について
          </h2>
          <p className="text-foreground/80 text-base mt-2 max-w-3xl leading-relaxed">
            初めての激流を、一生の冒険に。ホワイトウォーターカヤックの最初の一歩を踏み出すパドラーのための総合案内ポータルです。
          </p>
        </div>

        {/* Part 1: Site Concept & Mission */}
        <div className="bg-secondary rounded-2xl border-2 border-border p-6 lg:p-10 mb-16 shadow-md">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
              なぜ、このサイトを立ち上げたのか？
            </h3>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-6">
              ホワイトウォーター（急流）カヤックは、透き通る清流や切り立った渓谷をパドル一本で切り拓き、大自然のパワーを全身で味わえる最高のアウトドアアクティビティです。
            </p>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-6">
              しかしその一方で、
              <strong>
                「ボートやパドルの種類が専門的すぎて何を選べばいいか分からない」「急流の危険や水難の知識がどこにもまとまっていない」「近くに相談できる仲間やスクールがない」
              </strong>
              という、初心者にとって極めて高い参入ハードルが存在していました。
            </p>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
              <strong>「New to Kayaker.jp」</strong>
              は、その不安を解消し、初心者が安全に、そして胸を躍らせながら激流の世界へ飛び込めるように、確かな道具選び・全国の川の難易度マップ・命を守るレスキュー手順・必須用語を網羅したワンストップポータルとして誕生しました。
            </p>
          </div>

          {/* 3 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
            <div className="bg-card p-5 rounded-xl border-2 border-border shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary mb-3 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-1.5">失敗しないギア選び</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                体格や志向（川下り・波乗り・大激流）に応じた最適なボート容量やパドル長を客観的に解説。
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border-2 border-border shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-3 font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-1.5">
                妥協なき安全とレスキュー
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                4大危険物（ストレーナー等）の回避法、ホワイトフラット姿勢、スローロープ実技の徹底普及。
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border-2 border-border shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3 font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-1.5">
                リバーカルチャーと自然への敬意
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Leave No
                Trace（ゴミの持ち帰り）と、川を愛するパドラー・地域住民との共生を大切にします。
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Navigator Duo (Jazi-kayaker & kazi-paddler) */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-primary bg-accent px-3 py-1 rounded-full uppercase tracking-wider">
              Site Navigators · ダブル監修体制
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-3 tracking-tight">
              案内人キャラクター紹介
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              現場のリアルを魂で伝える「土佐のいごっそう・Jazi」と、水流の力学を解き明かす「理論派パドラー・kazi」。二人の名コンビがあなたを激流の世界へ導きます。
            </p>
          </div>

          {/* Character 1: Jazi-kayaker (ジャジー) */}
          <div className="bg-card rounded-2xl border-2 border-border p-6 lg:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Portrait Photo (赤カヤック・グリーンジャケット風赤PFD・着座・柔らかな笑顔) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-border aspect-square shadow-md bg-muted group">
                  {!jaziImgError ? (
                    <img
                      src={jaziKayakerImg}
                      alt="Jazi-kayaker（ジャジー）のポートレート写真（川辺に着座・赤カヤック・アストラル社グリーンジャケット風赤PFD）"
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        jaziImgLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setJaziImgLoaded(true)}
                      onError={() => setJaziImgError(true)}
                    />
                  ) : null}

                  {(!jaziImgLoaded || jaziImgError) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/70 p-6 text-center">
                      <Waves className="w-12 h-12 text-primary mb-2" />
                      <span className="font-bold text-sm text-foreground/80">Jazi-kayaker</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <div className="text-lg font-bold">Jazi-kayaker（ジャジー）</div>
                  </div>
                </div>
              </div>

              {/* Profile Bio & Message */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-1">
                    <Flame className="w-3.5 h-3.5 text-rose-500" />
                    <span>現場実践 ＆ 激流アドバイザー</span>
                    <span aria-hidden="true">·</span>
                    <span>カヤック歴25年超（60代・土佐のいごっそう）</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                    Jazi-kayaker（ジャジー）
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">
                    カヤック歴25年以上 /
                    吉野川の激流と仁淀川を愛する土佐のいごっそう（温和な微笑みと揺るぎない覚悟）
                  </p>
                </div>

                {/* Quick Specs Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-secondary p-3 rounded-lg border border-border">
                    <span className="text-muted-foreground text-xs block font-bold mb-0.5">
                      モットー：
                    </span>
                    <span className="font-bold text-foreground">
                      「たっすいがは、いかん！」「川で絶対に死ぬな・死なせるな」
                    </span>
                  </div>
                  <div className="bg-secondary p-3 rounded-lg border border-border">
                    <span className="text-muted-foreground text-xs block font-bold mb-0.5">
                      トレードマーク：
                    </span>
                    <span className="font-bold text-foreground">
                      川辺の石に腰掛け微笑む姿、赤いボート ＆
                      アストラル社グリーンジャケット風の赤い一流PFD、グレーのヘルメット
                    </span>
                  </div>
                </div>

                {/* Message Quote */}
                <div className="bg-accent/70 border-2 border-teal-200 rounded-xl p-5 relative shadow-xs">
                  <Quote className="w-8 h-8 text-teal-400/40 absolute top-3 right-3" />
                  <h4 className="text-xs font-bold text-primary mb-2 font-mono uppercase tracking-wider">
                    MESSAGE FROM JAZI-KAYAKER
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-foreground leading-relaxed font-medium">
                    <p>
                      「おいおい、ボロいPFD着て、ボートの中でケツをスカスカ滑らせゆうやつはおらんか？
                      そんな『たっすい』準備じゃロールは上がらんぜよ！
                    </p>
                    <p>Gaziの言う難しい理屈を、ワシが現場のリアルな言葉で叩き込んでやるきな。</p>
                    <p>
                      川は舐めたらいかん。安全装備をビシッと固めて、基本から焦らず練習していきい！」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Character 2: Gazi-paddler (ガジー) */}
          <div className="bg-card rounded-2xl border-2 border-border p-6 lg:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Portrait Photo (ライムグリーンカヤック・アストラル社インダス風ライムPFD・つば大きめ耳出しヘルメット) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-border aspect-square shadow-md bg-muted group">
                  {!kaziImgError ? (
                    <img
                      src={kaziPaddlerImg}
                      alt="Gazi-paddler（ガジー）のポートレート写真（ライムグリーンボート・アストラル社インダス風ライムPFD・つば広め耳出しヘルメット）"
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        kaziImgLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setKaziImgLoaded(true)}
                      onError={() => setKaziImgError(true)}
                    />
                  ) : null}

                  {(!kaziImgLoaded || kaziImgError) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/70 p-6 text-center">
                      <Waves className="w-12 h-12 text-primary mb-2" />
                      <span className="font-bold text-sm text-foreground/80">Gazi-paddler</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <div className="text-lg font-bold">Gazi-paddler（ガジー）</div>
                  </div>
                </div>
              </div>

              {/* Profile Bio & Message */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-lime-800 font-bold mb-1">
                    <Zap className="w-3.5 h-3.5 text-lime-600" />
                    <span>リバーサイエンス ＆ 技術力学監修</span>
                    <span aria-hidden="true">·</span>
                    <span>理論派パドラー</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                    Gazi-paddler（ガジー）
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">
                    ホワイトウォーターパドラー ＆ リバーサイエンス・理論派ナビゲーター
                  </p>
                </div>

                {/* Quick Specs Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-secondary p-3 rounded-lg border border-border">
                    <span className="text-muted-foreground text-xs block font-bold mb-0.5">
                      モットー：
                    </span>
                    <span className="font-bold text-foreground">
                      「水流の物理を制する者が激流を制す」「レスキューは最後の保険、本質は回避にあり」
                    </span>
                  </div>
                  <div className="bg-secondary p-3 rounded-lg border border-border">
                    <span className="text-muted-foreground text-xs block font-bold mb-0.5">
                      トレードマーク：
                    </span>
                    <span className="font-bold text-foreground">
                      大好きなライムグリーンのボート ＆
                      アストラル社インダス風ライムPFD、つば広め耳出しヘルメット
                    </span>
                  </div>
                </div>

                {/* Message Quote */}
                <div className="bg-lime-50/70 border-2 border-lime-300 rounded-xl p-5 relative shadow-xs">
                  <Quote className="w-8 h-8 text-lime-500/40 absolute top-3 right-3" />
                  <h4 className="text-xs font-bold text-lime-900 mb-2 font-mono uppercase tracking-wider">
                    MESSAGE FROM GAZI-PADDLER
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-foreground leading-relaxed font-medium">
                    <p>
                      「激流は直感や度胸だけでは乗り越えられません。水流のベクトル、ハルの水深物理、流体力学を理解してこそ、安全で確実なライン取りが可能になります。
                    </p>
                    <p>
                      お気に入りのライムグリーンのボートとギアを相棒に、現場の荒波を知り尽くしたJaziさんとタッグを組んで、皆さんが一生涯安全にホワイトウォーターを楽しめるよう論理的にナビゲートします！」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
