import React from "react";
import { Waves, PhoneCall, SlidersHorizontal, Image } from "lucide-react";

interface FooterProps {
  onOpenAdminMenu?: () => void;
  bannerHtml?: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminMenu, bannerHtml }) => {
  const hasBanner = !!bannerHtml && bannerHtml.trim().length > 0;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-muted-foreground/70 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Wordmark & Statement */}
          <div className="space-y-3 md:col-span-1">
            <a
              href="#"
              className="text-base font-bold tracking-tight text-primary-foreground flex items-center gap-2 font-mono"
            >
              <Waves className="w-4 h-4 text-teal-400" />
              <span>New to Kayaker.jp</span>
            </a>
            <p className="text-muted-foreground/70 text-xs leading-relaxed">
              激流（ホワイトウォーター）の世界へ踏み出す、すべての初心者とパドラーへ。確かな知識とギア選びで、より自由で安全な川旅を。
            </p>
            {onOpenAdminMenu && (
              <button
                onClick={onOpenAdminMenu}
                className="mt-2 text-muted-foreground hover:text-teal-400 transition-colors flex items-center gap-1.5 text-[11px]"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>管理者メニュー（収益・企業リンク）</span>
              </button>
            )}

            {/* 協賛企業バナー広告スペース */}
            <div className="pt-4 mt-4 border-t border-slate-800">
              <div className="text-slate-200 font-semibold mb-2 text-[11px]">
                協賛企業のバナー広告募集
              </div>
              {hasBanner ? (
                <div
                  className="rounded-lg border border-slate-800 bg-slate-950/40 p-2 overflow-hidden flex items-center justify-center"
                  // 管理者が管理画面から貼り付けたバナータグを表示する
                  dangerouslySetInnerHTML={{ __html: bannerHtml! }}
                />
              ) : (
                <div className="rounded-lg border border-dashed border-slate-700 bg-slate-950/30 px-3 py-6 flex flex-col items-center justify-center gap-1.5 text-center">
                  <Image className="w-4 h-4 text-muted-foreground/60" />
                  <span className="text-[10px] text-muted-foreground/60 leading-relaxed">
                    バナー広告スペース
                    <br />
                    （管理者メニューから設定）
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Site Navigation */}
          <div>
            <div className="text-slate-200 font-semibold mb-3">ナビゲーション</div>
            <ul className="space-y-2">
              <li>
                <a href="#gear-guide" className="hover:text-teal-400 transition-colors">
                  ギア・ボート選び
                </a>
              </li>
              <li>
                <a href="#paddle-guide" className="hover:text-teal-400 transition-colors">
                  パドル選び徹底ガイド
                </a>
              </li>
              <li>
                <a href="#paddler-tips" className="hover:text-teal-400 transition-colors">
                  カヤッカーなら知っててTips 16選
                </a>
              </li>
              <li>
                <a href="#kayaker-essence" className="hover:text-teal-400 transition-colors">
                  カヤッカーなら知っててEssence
                </a>
              </li>
              <li>
                <a href="#river-flow-tips" className="hover:text-teal-400 transition-colors">
                  川の読み方・リバーフローTips
                </a>
              </li>
              <li>
                <a href="#safety-training" className="hover:text-teal-400 transition-colors">
                  安全講習・レスキューマニュアル
                </a>
              </li>
              <li>
                <a href="#river-map" className="hover:text-teal-400 transition-colors">
                  全国難易度マップ
                </a>
              </li>
              <li>
                <a href="#glossary" className="hover:text-teal-400 transition-colors">
                  カヤック用語事典
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">
                  About（サイト紹介・プロフィール）
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: River Safety Disclaimer */}
          <div>
            <div className="text-slate-200 font-semibold mb-3">河川安全免責 ＆ PR表記</div>
            <p className="text-muted-foreground/70 leading-relaxed text-[11px] mb-2">
              自然河川は水量・天候により刻一刻と変化します。当サイトの情報は参考値であり、現地での最終判断、水量確認、およびスカウティングはパドラー個人の自己責任において実施してください。
            </p>
            <p className="text-muted-foreground text-[10px] leading-relaxed">
              ※当サイトはAmazonアソシエイト・楽天等の各種アフィリエイトプログラムに参加しており、適格販売により紹介手数料を得ています。
            </p>
          </div>

          {/* Col 4: Emergency Contacts */}
          <div>
            <div className="text-slate-200 font-semibold mb-3 flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>緊急連絡先ダイヤル</span>
            </div>
            <div className="space-y-2 text-slate-300 text-[11px]">
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-muted-foreground/70">水難・救難（消防）:</span>
                <span className="font-mono font-bold text-primary-foreground">119番</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-muted-foreground/70">緊急通報（警察）:</span>
                <span className="font-mono font-bold text-primary-foreground">110番</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-muted-foreground/70">河川感潮域・海上:</span>
                <span className="font-mono font-bold text-primary-foreground">118番</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground gap-4">
          <div>
            © {new Date().getFullYear()} New to Kayaker.jp. All rights reserved. Whitewater Kayak
            Portal.
          </div>
          <div className="flex items-center gap-4">
            <span>Leave No Trace（自然保護とゴミ持ち帰り）</span>
            <span aria-hidden="true">·</span>
            <span>Always Paddle with a Buddy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
