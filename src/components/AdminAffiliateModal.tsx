import React, { useState } from "react";
import {
  AffiliateGlobalConfig,
  AffiliateProductLink,
  AffiliateClickRecord,
} from "../types/affiliate";
import {
  X,
  Settings,
  TrendingUp,
  Link as LinkIcon,
  Save,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  Shield,
  Eye,
  Trash2,
} from "lucide-react";

interface AdminAffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AffiliateGlobalConfig;
  onSaveConfig: (cfg: AffiliateGlobalConfig) => void;
  products: AffiliateProductLink[];
  onSaveProducts: (prods: AffiliateProductLink[]) => void;
  clicks: AffiliateClickRecord[];
  onClearClicks: () => void;
}

export const AdminAffiliateModal: React.FC<AdminAffiliateModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  products,
  onSaveProducts,
  clicks,
  onClearClicks,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "global" | "products">("overview");
  const [localConfig, setLocalConfig] = useState<AffiliateGlobalConfig>(config);
  const [localProducts, setLocalProducts] = useState<AffiliateProductLink[]>(products);
  const [isSavedToast, setIsSavedToast] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveConfig(localConfig);
    onSaveProducts(localProducts);
    setIsSavedToast(true);
    setTimeout(() => setIsSavedToast(false), 2500);
  };

  const handleProductChange = <K extends keyof AffiliateProductLink>(
    index: number,
    field: K,
    value: AffiliateProductLink[K],
  ) => {
    const updated = [...localProducts];
    updated[index] = { ...updated[index], [field]: value };
    setLocalProducts(updated);
  };

  // Clicks statistics
  const totalClicks = clicks.length;
  const amazonClicks = clicks.filter((c) => c.platform === "amazon").length;
  const rakutenClicks = clicks.filter((c) => c.platform === "rakuten").length;
  const yahooClicks = clicks.filter((c) => c.platform === "yahoo").length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-card border-2 border-border rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-primary-foreground border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-teal-400" />
            <div>
              <h3 className="text-base font-bold flex items-center gap-2">
                <span>アフィリエイト収益管理ダッシュボード</span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-teal-900/80 text-teal-300 border border-teal-700 rounded">
                  Admin Panel
                </span>
              </h3>
              <p className="text-xs text-muted-foreground/70">
                各モールのトラッキングID、個別商品リンク、PR表記、クリック数推移を一括管理
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-muted-foreground/70 hover:text-primary-foreground rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 bg-muted border-b border-border">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "overview"
                ? "border-primary text-primary bg-card rounded-t-lg shadow-xs"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>クリック分析・統計 ({totalClicks})</span>
          </button>

          <button
            onClick={() => setActiveTab("global")}
            className={`px-4 py-2 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "global"
                ? "border-primary text-primary bg-card rounded-t-lg shadow-xs"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Settings className="w-4 h-4 text-primary" />
            <span>基本設定・モールID・PR表記</span>
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "products"
                ? "border-primary text-primary bg-card rounded-t-lg shadow-xs"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <LinkIcon className="w-4 h-4 text-primary" />
            <span>個別商品アフィリエイトリンク管理 ({localProducts.length})</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 text-xs sm:text-sm space-y-6">
          {/* Tab 1: Overview & Analytics */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-secondary border-2 border-border p-4 rounded-xl">
                  <div className="text-xs text-muted-foreground font-medium">総クリック数</div>
                  <div className="text-2xl font-bold font-mono text-foreground mt-1 tabular-nums">
                    {totalClicks}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1">サイト内全リンク</div>
                </div>

                <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-xl">
                  <div className="text-xs text-amber-800 font-medium">Amazon経由</div>
                  <div className="text-2xl font-bold font-mono text-amber-900 mt-1 tabular-nums">
                    {amazonClicks}
                  </div>
                  <div className="text-[11px] text-amber-700 mt-1">アソシエイトリンク</div>
                </div>

                <div className="bg-red-50/60 border border-red-200 p-4 rounded-xl">
                  <div className="text-xs text-red-800 font-medium">楽天市場経由</div>
                  <div className="text-2xl font-bold font-mono text-red-900 mt-1 tabular-nums">
                    {rakutenClicks}
                  </div>
                  <div className="text-[11px] text-red-700 mt-1">楽天アフィリエイト</div>
                </div>

                <div className="bg-sky-50/60 border border-sky-200 p-4 rounded-xl">
                  <div className="text-xs text-sky-800 font-medium">Yahoo!経由</div>
                  <div className="text-2xl font-bold font-mono text-sky-900 mt-1 tabular-nums">
                    {yahooClicks}
                  </div>
                  <div className="text-[11px] text-sky-700 mt-1">PayPayモール/ヤフー</div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="bg-accent border border-teal-200 rounded-xl p-4 flex items-start gap-3 text-xs text-teal-950">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm text-primary mb-0.5">
                    アフィリエイトステータス：
                    {localConfig.isAffiliateActive ? "稼働中（有効）" : "停止中（無効）"}
                  </div>
                  <p className="text-primary leading-relaxed">
                    ユーザーが各ギアカタログや診断結果の「Amazon・楽天・Yahoo」ボタンをクリックすると、設定されたトラッキングIDまたはカスタムURLでアフィリエイト報酬が発生します。
                  </p>
                </div>
              </div>

              {/* Recent Click Logs Table */}
              <div className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-xs">
                <div className="px-4 py-3 bg-secondary border-b border-border flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-foreground">
                    直近のクリック履歴（リアルタイム記録）
                  </span>
                  {clicks.length > 0 && (
                    <button
                      onClick={onClearClicks}
                      className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>履歴クリア</span>
                    </button>
                  )}
                </div>

                {clicks.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground text-xs">
                    クリック履歴はまだありません。サイト上で商品リンクをクリックするとここに記録されます。
                  </div>
                ) : (
                  <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 text-xs">
                    {clicks.slice(0, 20).map((c) => (
                      <div
                        key={c.id}
                        className="px-4 py-2.5 flex items-center justify-between hover:bg-secondary"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              c.platform === "amazon"
                                ? "bg-amber-100 text-amber-900"
                                : c.platform === "rakuten"
                                  ? "bg-red-100 text-red-900"
                                  : "bg-sky-100 text-sky-900"
                            }`}
                          >
                            {c.platform.toUpperCase()}
                          </span>
                          <span className="font-semibold text-foreground">{c.gearTitle}</span>
                        </div>
                        <span className="text-muted-foreground/70 font-mono text-[11px]">
                          {c.timestamp}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Global Configuration */}
          {activeTab === "global" && (
            <div className="space-y-6">
              {/* Master toggle */}
              <div className="bg-secondary border-2 border-border rounded-xl p-5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-foreground">アフィリエイト機能 全体ON/OFF</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    OFFにするとサイト上のアフィリエイト購入ボタンが非表示になります
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localConfig.isAffiliateActive}
                    onChange={(e) =>
                      setLocalConfig({ ...localConfig, isAffiliateActive: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-card after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-card after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Mall Tracking IDs */}
              <div className="bg-card border-2 border-border rounded-xl p-5 space-y-4">
                <h4 className="font-bold text-foreground text-sm">
                  各モール アフィリエイトID / タグ設定
                </h4>
                <p className="text-xs text-muted-foreground">
                  各ASP・プログラムで取得したご自身のアカウントIDを入力してください。個別URLが未設定の場合、自動的にこのIDを付与した検索リンクが生成されます。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div>
                    <label className="block text-foreground/80 font-bold text-xs mb-1">
                      Amazon アソシエイト トラッキングID
                    </label>
                    <input
                      type="text"
                      placeholder="例: rapidpulse-22"
                      value={localConfig.amazonTrackingId}
                      onChange={(e) =>
                        setLocalConfig({ ...localConfig, amazonTrackingId: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:bg-card focus:border-primary focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground/80 font-bold text-xs mb-1">
                      楽天 アフィリエイトID
                    </label>
                    <input
                      type="text"
                      placeholder="例: rakuten-rapidpulse"
                      value={localConfig.rakutenAffiliateId}
                      onChange={(e) =>
                        setLocalConfig({ ...localConfig, rakutenAffiliateId: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:bg-card focus:border-primary focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground/80 font-bold text-xs mb-1">
                      Yahoo! ショッピング / VC ID
                    </label>
                    <input
                      type="text"
                      placeholder="例: yahoo-rapidpulse"
                      value={localConfig.yahooAffiliateId}
                      onChange={(e) =>
                        setLocalConfig({ ...localConfig, yahooAffiliateId: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:bg-card focus:border-primary focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* PR Notice / Legal */}
              <div className="bg-card border-2 border-border rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      景品表示法・ステマ規制対応 PR表記
                    </div>
                    <div className="text-xs text-muted-foreground">
                      消費者庁ガイドラインに基づく「広告である旨」の告知表示
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={localConfig.showPrNotice}
                      onChange={(e) =>
                        setLocalConfig({ ...localConfig, showPrNotice: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-card after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-card after:border-border after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <textarea
                  rows={2}
                  value={localConfig.prNoticeText}
                  onChange={(e) => setLocalConfig({ ...localConfig, prNoticeText: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg p-2.5 text-xs text-foreground focus:bg-card focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Tab 3: Individual Product Links */}
          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  各ギアのカードに表示する推奨モデル名、参考価格、カスタムアフィリエイトURL（特定商品への直リンク）を設定できます。
                </p>
              </div>

              <div className="space-y-4">
                {localProducts.map((prod, idx) => (
                  <div
                    key={prod.gearId}
                    className="bg-secondary border-2 border-border rounded-xl p-5 space-y-3 hover:border-border transition-colors"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                      <div>
                        <span className="text-xs font-mono font-bold text-primary uppercase px-2 py-0.5 bg-accent rounded mr-2">
                          {prod.category}
                        </span>
                        <span className="font-bold text-foreground text-sm">{prod.title}</span>
                      </div>

                      <label className="flex items-center gap-2 cursor-pointer text-xs">
                        <span className="text-muted-foreground">ボタン表示:</span>
                        <input
                          type="checkbox"
                          checked={prod.isEnabled}
                          onChange={(e) => handleProductChange(idx, "isEnabled", e.target.checked)}
                          className="rounded text-primary focus:ring-teal-500"
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="block text-foreground/80 font-semibold mb-1">
                          推奨代表モデル・ブランド名
                        </label>
                        <input
                          type="text"
                          value={prod.recommendedBrandModel}
                          onChange={(e) =>
                            handleProductChange(idx, "recommendedBrandModel", e.target.value)
                          }
                          className="w-full bg-card border border-border rounded-lg px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-foreground/80 font-semibold mb-1">
                          検索キーワード（自動検索リンク用）
                        </label>
                        <input
                          type="text"
                          value={prod.searchKeyword}
                          onChange={(e) =>
                            handleProductChange(idx, "searchKeyword", e.target.value)
                          }
                          className="w-full bg-card border border-border rounded-lg px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Direct Custom Affiliate URLs */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                      <div>
                        <label className="block text-muted-foreground mb-0.5">
                          Amazon 直リンクURL（空欄なら自動検索）
                        </label>
                        <input
                          type="url"
                          placeholder="https://amzn.to/..."
                          value={prod.customAmazonUrl || ""}
                          onChange={(e) =>
                            handleProductChange(idx, "customAmazonUrl", e.target.value)
                          }
                          className="w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-[11px] text-foreground focus:border-primary focus:outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-muted-foreground mb-0.5">
                          楽天 直リンクURL（空欄なら自動検索）
                        </label>
                        <input
                          type="url"
                          placeholder="https://a.r10.to/..."
                          value={prod.customRakutenUrl || ""}
                          onChange={(e) =>
                            handleProductChange(idx, "customRakutenUrl", e.target.value)
                          }
                          className="w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-[11px] text-foreground focus:border-primary focus:outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-muted-foreground mb-0.5">
                          Yahoo! 直リンクURL（空欄なら自動検索）
                        </label>
                        <input
                          type="url"
                          placeholder="https://ck.jp.ap.valuecommerce.com/..."
                          value={prod.customYahooUrl || ""}
                          onChange={(e) =>
                            handleProductChange(idx, "customYahooUrl", e.target.value)
                          }
                          className="w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-[11px] text-foreground focus:border-primary focus:outline-none font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer with Save Action */}
        <div className="px-6 py-4 bg-secondary border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isSavedToast && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-100 px-3 py-1 rounded-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>設定を保存しました</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-foreground/80 bg-card hover:bg-muted rounded-lg border border-border transition-colors"
            >
              閉じる
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 text-xs font-bold text-primary-foreground bg-primary hover:bg-primary active:bg-primary rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>設定を保存する</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
