import React, { useEffect, useState } from "react";
import { X, Lock, Save, Building2, Megaphone } from "lucide-react";
import { SponsorData, DEFAULT_SPONSOR_DATA } from "@/data/sponsorData";

const ADMIN_PASSWORD = "galbanzp1234";

interface SponsorAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: SponsorData;
  onSave: (data: SponsorData) => void;
}

export const SponsorAdminModal: React.FC<SponsorAdminModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
}) => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [draft, setDraft] = useState<SponsorData>(DEFAULT_SPONSOR_DATA);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDraft(data);
      setSaved(false);
      setPasswordError(false);
      setPassword("");
    } else {
      setUnlocked(false);
    }
  }, [isOpen, data]);

  if (!isOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setUnlocked(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const setAffiliateSlot = (index: number, value: string) => {
    setDraft((prev) => {
      const slots = [...prev.affiliateSlots];
      slots[index] = value;
      return { ...prev, affiliateSlots: slots };
    });
    setSaved(false);
  };

  const setCorporateLink = (index: number, field: "label" | "url", value: string) => {
    setDraft((prev) => {
      const links = prev.corporateLinks.map((l, i) => (i === index ? { ...l, [field]: value } : l));
      return { ...prev, corporateLinks: links };
    });
    setSaved(false);
  };

  const setFooterBanner = (value: string) => {
    setDraft((prev) => ({ ...prev, footerBannerHtml: value }));
    setSaved(false);
  };

  const handleSave = () => {
    onSave(draft);
    setSaved(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border border-border bg-card shadow-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card px-5 py-4">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" />
            企業リンク・アフィリエイト管理
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!unlocked ? (
          <form onSubmit={handleUnlock} className="p-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              管理画面を開くにはパスワードを入力してください。
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              placeholder="パスワード"
              autoFocus
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {passwordError && (
              <p className="text-sm text-destructive">パスワードが正しくありません。</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              ロック解除
            </button>
          </form>
        ) : (
          <div className="p-6 space-y-8">
            {/* Corporate links */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-foreground">企業リンク（4枠）</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                「表示文字」と「URL」を入力してください。両方入力された枠だけがサイトに表示されます。
              </p>
              <div className="space-y-3">
                {draft.corporateLinks.map((link, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-2 rounded-lg border border-border bg-background p-3"
                  >
                    <input
                      type="text"
                      value={link.label}
                      onChange={(e) => setCorporateLink(i, "label", e.target.value)}
                      placeholder={`表示文字（例：○○アウトドア）`}
                      className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    <input
                      type="url"
                      value={link.url}
                      onChange={(e) => setCorporateLink(i, "url", e.target.value)}
                      placeholder="https://example.com"
                      className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliate slots */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Megaphone className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-foreground">アフィリエイト枠（4枠）</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                ASPやモールから発行されたバナータグ・HTMLコードをそのまま貼り付けてください。空の枠は表示されません。
              </p>
              <div className="space-y-3">
                {draft.affiliateSlots.map((slot, i) => (
                  <div key={i}>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      アフィリエイト枠 {i + 1}
                    </label>
                    <textarea
                      value={slot}
                      onChange={(e) => setAffiliateSlot(i, e.target.value)}
                      placeholder='<a href="..."><img src="..." /></a>'
                      rows={3}
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer banner slot */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Megaphone className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-foreground">フッター 協賛バナー広告枠</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                フッター左下の「協賛企業のバナー広告募集」スペースに表示するバナータグ・HTMLコードを貼り付けてください。空の場合はプレースホルダーが表示されます。
              </p>
              <textarea
                value={draft.footerBannerHtml}
                onChange={(e) => setFooterBanner(e.target.value)}
                placeholder='<a href="..."><img src="..." /></a>'
                rows={3}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleSave}
                className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                保存する
              </button>
              {saved && <span className="text-sm text-primary font-semibold">保存しました</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
