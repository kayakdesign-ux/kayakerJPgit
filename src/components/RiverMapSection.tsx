import React, { useState } from "react";
import { RiverSpot, WhitewaterClass } from "../types/kayak";
import { CLASS_DEFINITIONS } from "../data/riverData";
import { Compass, Plus, Search, ArrowUpRight, Eye } from "lucide-react";

interface RiverMapSectionProps {
  rivers: RiverSpot[];
  onSelectSpot: (spot: RiverSpot) => void;
  onOpenAddRiver: () => void;
}

export const RiverMapSection: React.FC<RiverMapSectionProps> = ({
  rivers,
  onSelectSpot,
  onOpenAddRiver,
}) => {
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeView, setActiveView] = useState<"grid" | "map">("grid");
  const [activeClassTab, setActiveClassTab] = useState<WhitewaterClass>("Class III");

  // Filter logic
  const filteredRivers = rivers.filter((spot) => {
    const matchesClass = selectedClass === "all" || spot.difficulty === selectedClass;
    const matchesRegion = selectedRegion === "all" || spot.region === selectedRegion;
    const matchesSearch =
      searchQuery === "" ||
      spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.riverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.prefecture.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClass && matchesRegion && matchesSearch;
  });

  const selectedClassDef =
    CLASS_DEFINITIONS.find((c) => c.classLevel === activeClassTab) || CLASS_DEFINITIONS[2];

  return (
    <section
      id="river-map"
      className="py-20 lg:py-28 bg-muted border-b border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 contour-lines-subtle pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2 uppercase tracking-wider">
              <span className="px-2 py-0.5 bg-accent rounded text-primary">Section 04</span>
              <span aria-hidden="true">·</span>
              <span>River Difficulty & Spots Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              川の難易度マップ ＆ 激流ゲレンデ案内
            </h2>
            <p className="text-foreground/80 text-base mt-2 max-w-2xl leading-relaxed">
              国際ホワイトウォーター難易度基準（Class
              I〜VI）の客観的解説と、日本各地の代表的な川のエントリー（プットイン）、危険箇所、ベスト水量を網羅。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAddRiver}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-foreground bg-card hover:bg-secondary border-2 border-border rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shadow-xs"
            >
              <Plus className="w-4 h-4 text-primary" />
              <span>スポットを新規追加</span>
            </button>
          </div>
        </div>

        {/* Feature 1: International Whitewater Classification Matrix */}
        <div className="bg-card rounded-2xl border-2 border-border p-6 lg:p-10 mb-14 shadow-md">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
              <Compass className="w-6 h-6 text-primary" />
              <span>国際ホワイトウォーター難易度（Class I〜VI）の基準</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              川のグレーディングは水量や天候によって常に変動します。必ず最新情報を確認してください。
            </p>
          </div>

          {/* Grade Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 mb-6">
            {CLASS_DEFINITIONS.map((def) => {
              const isActive = activeClassTab === def.classLevel;
              return (
                <button
                  key={def.classLevel}
                  onClick={() => setActiveClassTab(def.classLevel)}
                  className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                    isActive
                      ? "bg-accent border-primary text-foreground shadow-md ring-2 ring-primary/20"
                      : "bg-secondary border-border text-foreground/80 hover:border-border hover:bg-card"
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-primary">{def.classLevel}</div>
                  <div className="text-sm font-bold truncate mt-1">{def.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Grade Content */}
          <div className="bg-secondary rounded-xl p-6 border border-border grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xs">
            <div>
              <div className="text-xs font-bold text-primary font-mono mb-1.5 uppercase">
                {selectedClassDef.classLevel} · {selectedClassDef.enTitle}
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{selectedClassDef.title}</h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {selectedClassDef.waterCharacteristics}
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-muted-foreground mb-1.5">
                要求されるパドリング技術
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {selectedClassDef.skillRequired}
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-amber-800 mb-1.5">自己脱出・救助難易度</div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {selectedClassDef.rescueDifficulty}
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2: River Directory Controls */}
        <div className="bg-card rounded-xl p-5 border-2 border-border mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          {/* Search */}
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-muted-foreground/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="河川名・スポット名・地域で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg pl-10 pr-3 py-2.5 text-sm text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card shadow-xs"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Class filter */}
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              aria-label="難易度クラスで絞り込み"
              className="bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-foreground font-medium focus:outline-none focus:border-primary shadow-xs"
            >
              <option value="all">全難易度クラス</option>
              <option value="Class I">Class I</option>
              <option value="Class II">Class II</option>
              <option value="Class III">Class III</option>
              <option value="Class IV">Class IV</option>
              <option value="Class V">Class V</option>
            </select>

            {/* Region filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              aria-label="地域で絞り込み"
              className="bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-foreground font-medium focus:outline-none focus:border-primary shadow-xs"
            >
              <option value="all">全地域</option>
              <option value="関東">関東</option>
              <option value="中部・甲信越">中部・甲信越</option>
              <option value="近畿">近畿</option>
              <option value="中国・四国">中国・四国</option>
              <option value="九州">九州</option>
            </select>

            {/* View mode toggle */}
            <div className="flex items-center p-1 bg-muted rounded-lg border border-border">
              <button
                onClick={() => setActiveView("grid")}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-colors ${
                  activeView === "grid"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                カード一覧 ({filteredRivers.length})
              </button>
              <button
                onClick={() => setActiveView("map")}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-colors ${
                  activeView === "map"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                全国俯瞰マップ
              </button>
            </div>
          </div>
        </div>

        {/* View Mode: Map vs Grid */}
        {activeView === "map" ? (
          <div className="bg-card rounded-2xl border-2 border-border p-6 relative overflow-hidden mb-8 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-bold text-foreground">
                  日本列島 ホワイトウォーターマップ
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  ピンをクリックすると各河川の詳細データと瀬の情報を確認できます
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-foreground/80 font-mono font-bold">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-chart-3" />
                  <span>Class II</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-chart-4" />
                  <span>Class III</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-chart-1" />
                  <span>Class IV</span>
                </span>
              </div>
            </div>

            {/* Schematic Map Container */}
            <div className="relative w-full h-[450px] bg-muted rounded-xl border border-border overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

              <svg
                viewBox="0 0 100 100"
                className="w-full h-full max-w-3xl opacity-25 text-muted-foreground/70 pointer-events-none"
                fill="currentColor"
              >
                <path d="M 75 20 Q 85 15 90 25 Q 85 35 75 30 Z" />
                <path d="M 60 38 Q 78 40 82 55 Q 70 65 55 58 Q 45 65 35 72 Q 22 85 18 78 Q 28 65 42 55 Q 52 45 60 38 Z" />
                <path d="M 35 68 Q 48 66 46 75 Q 36 78 35 68 Z" />
                <path d="M 22 75 Q 32 75 28 88 Q 18 86 22 75 Z" />
              </svg>

              {/* River Pins */}
              {filteredRivers.map((spot) => {
                const colorClass =
                  spot.difficulty === "Class II"
                    ? "bg-chart-3 text-primary-foreground border-card"
                    : spot.difficulty === "Class III"
                      ? "bg-chart-4 text-primary-foreground border-card"
                      : "bg-chart-1 text-primary-foreground border-card";

                return (
                  <button
                    key={spot.id}
                    onClick={() => onSelectSpot(spot)}
                    style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-10"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-md group-hover:scale-125 transition-transform ${colorClass}`}
                      >
                        <Compass className="w-4 h-4" />
                      </div>
                      <div className="mt-1 px-2.5 py-0.5 bg-card border border-border rounded text-[11px] text-foreground font-bold whitespace-nowrap shadow-sm group-hover:border-primary group-hover:text-primary">
                        {spot.name} · {spot.difficulty}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Spot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRivers.map((spot) => (
            <div
              key={spot.id}
              onClick={() => onSelectSpot(spot)}
              className="bg-card rounded-xl border-2 border-border p-6 flex flex-col justify-between hover:border-primary hover:shadow-md transition-all cursor-pointer group shadow-xs"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs mb-3 text-muted-foreground border-b border-border/60 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground">{spot.region}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-muted-foreground">{spot.prefecture}</span>
                  </div>
                  <span className="font-mono font-bold text-primary px-2 py-0.5 bg-accent rounded">
                    {spot.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1 flex items-center justify-between">
                  <span>{spot.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors shrink-0" />
                </h3>
                <div className="text-xs text-muted-foreground mb-3">
                  河川名: <span className="text-foreground font-bold">{spot.riverName}</span>{" "}
                  (全長約{spot.distanceKm}km)
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3 mb-4">
                  {spot.description}
                </p>

                {/* Key Rapids teaser */}
                <div className="space-y-1.5 mb-4 bg-secondary p-3 rounded-lg border border-border">
                  <div className="text-xs font-bold text-foreground">名物瀬・ポイント：</div>
                  <div className="flex flex-wrap gap-1.5">
                    {spot.keyRapids.map((rapid, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-0.5 bg-card rounded border border-border text-foreground font-medium"
                      >
                        {rapid.name} ({rapid.classLevel})
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer */}
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span className="truncate max-w-[180px]">普: {spot.putIn}</span>
                <span className="text-primary font-bold group-hover:underline flex items-center gap-1">
                  詳細を見る <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}

          {filteredRivers.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-xl border border-border">
              <p className="text-base">条件に一致するスポットが見つかりませんでした。</p>
              <button
                onClick={() => {
                  setSelectedClass("all");
                  setSelectedRegion("all");
                  setSearchQuery("");
                }}
                className="mt-3 px-4 py-2 text-xs font-bold text-primary bg-muted border border-border rounded-md hover:bg-muted"
              >
                フィルターをリセット
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
