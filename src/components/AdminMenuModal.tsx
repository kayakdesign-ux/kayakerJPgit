import React, { useEffect, useState } from "react";
import { X, Lock, SlidersHorizontal, Building2 } from "lucide-react";

const ADMIN_PASSWORD = "galbanzp1234";

interface AdminMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAffiliate: () => void;
  onOpenSponsor: () => void;
}

export const AdminMenuModal: React.FC<AdminMenuModalProps> = ({
  isOpen,
  onClose,
  onOpenAffiliate,
  onOpenSponsor,
}) => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPassword("");
      setPasswordError(false);
    } else {
      setUnlocked(false);
    }
  }, [isOpen]);

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl border border-border bg-card shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" />
            管理者メニュー
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
          <div className="p-6 space-y-3">
            <p className="text-sm text-muted-foreground mb-4">開きたい管理画面を選んでください。</p>
            <button
              onClick={onOpenAffiliate}
              className="w-full flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3.5 text-left hover:border-primary transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 text-primary shrink-0" />
              <span>
                <span className="block text-sm font-bold text-foreground">
                  アフィリエイト収益管理
                </span>
                <span className="block text-xs text-muted-foreground">
                  商品リンク・トラッキングID・クリック履歴の管理
                </span>
              </span>
            </button>
            <button
              onClick={onOpenSponsor}
              className="w-full flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3.5 text-left hover:border-primary transition-colors"
            >
              <Building2 className="w-5 h-5 text-primary shrink-0" />
              <span>
                <span className="block text-sm font-bold text-foreground">
                  企業リンク・アフィリエイト管理
                </span>
                <span className="block text-xs text-muted-foreground">
                  企業リンク4枠・アフィリエイト枠4枠・フッターバナーの管理
                </span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
