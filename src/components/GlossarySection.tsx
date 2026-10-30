import React, { useState } from "react";
import { GlossaryTerm } from "../types/kayak";
import { Search, Plus, Star, ChevronDown, ChevronUp } from "lucide-react";

interface GlossarySectionProps {
  terms: GlossaryTerm[];
  onOpenAddTerm: () => void;
}

export const GlossarySection: React.FC<GlossarySectionProps> = ({ terms, onOpenAddTerm }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedKanaGroup, setSelectedKanaGroup] = useState<string>("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [expandedTermId, setExpandedTermId] = useState<string | null>(null);

  // Favorites state persisted to localStorage
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("rapidpulse_glossary_favs");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavoriteIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      try {
        localStorage.setItem("rapidpulse_glossary_favs", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const categoryLabels: Record<string, string> = {
    all: "すべて",
    flow: "水流・地形",
    technique: "パドリング技術",
    hazard: "危険物・トラップ",
    gear: "ギア・装備",
    slang: "川言葉・スラング",
  };

  const kanaGroups = [
    { label: "すべて", value: "all" },
    { label: "あ", value: "^[あ-おア-オa-bA-B]" },
    { label: "か", value: "^[か-こカ-コc-eC-E]" },
    { label: "さ", value: "^[さ-そサ-ソf-hF-H]" },
    { label: "た", value: "^[た-とタ-トi-kI-K]" },
    { label: "な", value: "^[な-のナ-ノl-nL-N]" },
    { label: "は", value: "^[は-ほハ-ホo-qO-Q]" },
    { label: "ま", value: "^[ま-もマ-モr-tR-T]" },
    { label: "や・ら・わ", value: "^[や-んヤ-ンu-zU-Z]" },
  ];

  // Filtering
  const filteredTerms = terms.filter((item) => {
    // Favorites
    if (favoritesOnly && !favoriteIds.includes(item.id)) return false;

    // Category
    if (selectedCategory !== "all" && item.category !== selectedCategory) return false;

    // Kana Group
    if (selectedKanaGroup !== "all") {
      const regex = new RegExp(selectedKanaGroup);
      const testString = `${item.kana} ${item.term} ${item.enTerm}`;
      if (!regex.test(testString)) return false;
    }

    // Search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const match =
        item.term.toLowerCase().includes(q) ||
        item.kana.toLowerCase().includes(q) ||
        item.enTerm.toLowerCase().includes(q) ||
        item.shortDef.toLowerCase().includes(q) ||
        item.fullDef.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  return (
    <section id="glossary" className="py-20 lg:py-28 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2 uppercase tracking-wider">
              <span className="px-2 py-0.5 bg-accent rounded text-primary">Section 04</span>
              <span aria-hidden="true">·</span>
              <span>Whitewater Terminology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-foreground tracking-tight">
              急流カヤック用語事典
            </h2>
            <p className="text-foreground/80 text-base mt-2 max-w-2xl leading-relaxed">
              エディやボイルなどの水流現象から、ブーフやフェリーなどの操船技術、そして川独自の現場スラングまで。
              知っておくべき必須用語を体系的に検索・学習できます。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAddTerm}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground bg-primary hover:bg-primary rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shadow-sm shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>新しい用語を登録する</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Box */}
        <div className="bg-secondary rounded-2xl p-6 border-2 border-border mb-10 space-y-5 shadow-sm">
          {/* Top row: search + favorite toggle */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-muted-foreground/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="用語名・読みがな・英名・意味で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card border border-border rounded-lg pl-10 pr-3 py-2.5 text-sm text-foreground placeholder-slate-400 focus:outline-none focus:border-primary shadow-xs"
              />
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                onClick={() => setFavoritesOnly(!favoritesOnly)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg border-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                  favoritesOnly
                    ? "bg-amber-100 border-amber-400 text-amber-950 shadow-xs"
                    : "bg-card border-border text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                <Star
                  className={`w-4 h-4 ${favoritesOnly ? "fill-amber-500 text-amber-500" : "text-muted-foreground/70"}`}
                />
                <span>お気に入りのみ ({favoriteIds.length})</span>
              </button>

              <div className="text-xs text-muted-foreground font-mono font-medium">
                該当: <span className="text-primary font-bold text-sm">{filteredTerms.length}</span>{" "}
                件
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-3 border-t border-border">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/80 hover:text-foreground bg-card border border-border hover:bg-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* 50-on / Kana Jump Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs pt-1">
            <span className="text-muted-foreground font-bold mr-1 shrink-0">五十音順:</span>
            {kanaGroups.map((grp) => (
              <button
                key={grp.value}
                onClick={() => setSelectedKanaGroup(grp.value)}
                className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 font-medium ${
                  selectedKanaGroup === grp.value
                    ? "bg-teal-200 text-teal-950 font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Term Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTerms.map((term) => {
            const isFav = favoriteIds.includes(term.id);
            const isExpanded = expandedTermId === term.id;

            return (
              <div
                key={term.id}
                onClick={() => setExpandedTermId(isExpanded ? null : term.id)}
                className={`bg-card rounded-xl border-2 transition-all cursor-pointer p-6 flex flex-col justify-between shadow-xs ${
                  isExpanded
                    ? "border-primary ring-2 ring-primary/20 shadow-md"
                    : "border-border hover:border-teal-400 hover:shadow-sm"
                }`}
              >
                <div>
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-1">
                        <span className="font-medium text-foreground/80">{term.kana}</span>
                        <span aria-hidden="true">·</span>
                        <span className="px-1.5 py-0.5 bg-muted rounded text-foreground/80 font-medium">
                          {categoryLabels[term.category] || term.category}
                        </span>
                        {term.isUserAdded && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-primary font-bold">ユーザー追加</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{term.term}</h3>
                      <div className="text-xs text-muted-foreground font-mono mt-0.5">
                        {term.enTerm}
                      </div>
                    </div>

                    <button
                      onClick={(e) => toggleFavorite(e, term.id)}
                      className="p-1.5 text-muted-foreground/70 hover:text-amber-500 transition-colors shrink-0"
                      title={isFav ? "お気に入り解除" : "お気に入り登録"}
                    >
                      <Star className={`w-5 h-5 ${isFav ? "fill-amber-500 text-amber-500" : ""}`} />
                    </button>
                  </div>

                  {/* Short Def */}
                  <p className="text-sm text-foreground/80 leading-relaxed mt-2.5">
                    {term.shortDef}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-border space-y-3.5">
                      <div>
                        <div className="text-xs font-bold text-foreground mb-1">詳細解説:</div>
                        <p className="text-sm text-foreground/80 leading-relaxed">{term.fullDef}</p>
                      </div>

                      {term.contextUsage && (
                        <div className="bg-secondary rounded-lg p-3.5 border border-border text-sm text-foreground">
                          <span className="font-bold text-primary block mb-1 text-xs">
                            川での実際の使われ方：
                          </span>
                          <span className="italic text-foreground">“{term.contextUsage}”</span>
                        </div>
                      )}

                      {term.relatedTerms && term.relatedTerms.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-muted-foreground">
                          <span className="font-bold text-foreground/80">関連用語:</span>
                          {term.relatedTerms.map((rel, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-muted text-foreground rounded text-xs border border-border font-medium"
                            >
                              {rel}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer Toggle Cue */}
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <span>{isExpanded ? "クリックで折りたたむ" : "クリックで詳細を開く"}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-primary" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </div>
            );
          })}

          {filteredTerms.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-xl border border-border">
              <p className="text-base">条件に一致する用語が見つかりませんでした。</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedKanaGroup("all");
                  setFavoritesOnly(false);
                }}
                className="mt-3 px-4 py-2 text-xs font-bold text-primary bg-muted border border-border rounded-md hover:bg-muted"
              >
                検索フィルターをリセット
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
