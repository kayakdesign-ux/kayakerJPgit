import React from "react";
import { Building2, ExternalLink, Megaphone } from "lucide-react";
import { SponsorData } from "@/data/sponsorData";

interface SponsorSectionProps {
  data: SponsorData;
}

export const SponsorSection: React.FC<SponsorSectionProps> = ({ data }) => {
  const activeLinks = data.corporateLinks.filter((l) => l.label.trim() && l.url.trim());
  const activeAffiliates = data.affiliateSlots.filter((s) => s.trim());

  if (activeLinks.length === 0 && activeAffiliates.length === 0) return null;

  return (
    <section className="border-t border-border bg-card/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {activeLinks.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Building2 className="w-4 h-4 text-primary" />
              <h2 className="text-base font-bold tracking-wide text-foreground">企業リンク</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors shadow-xs"
                >
                  <span className="truncate">{link.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        )}

        {activeAffiliates.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Megaphone className="w-4 h-4 text-primary" />
              <h2 className="text-base font-bold tracking-wide text-foreground">PR・おすすめ</h2>
              <span className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
                PR
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeAffiliates.map((html, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-background p-3 flex items-center justify-center overflow-hidden shadow-xs"
                  // 管理者が管理画面から貼り付けたアフィリエイトタグを表示する
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
