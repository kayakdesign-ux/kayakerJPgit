import React, { useState } from "react";
import { RiverSpot, WhitewaterClass, RiverRegion, FlowLevel } from "../types/kayak";
import { X, Plus, Compass } from "lucide-react";

interface AddRiverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRiver: (river: RiverSpot) => void;
}

export const AddRiverModal: React.FC<AddRiverModalProps> = ({ isOpen, onClose, onAddRiver }) => {
  const [name, setName] = useState("");
  const [riverName, setRiverName] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [region, setRegion] = useState<RiverRegion>("関東");
  const [difficulty, setDifficulty] = useState<WhitewaterClass>("Class II");
  const [flowLevel, setFlowLevel] = useState<FlowLevel>("適水 (ベスト)");
  const [distanceKm, setDistanceKm] = useState("5.0");
  const [putIn, setPutIn] = useState("");
  const [takeOut, setTakeOut] = useState("");
  const [description, setDescription] = useState("");
  const [hazardsInput, setHazardsInput] = useState("");
  const [scoutingAdvice, setScoutingAdvice] = useState("");
  const [bestSeason, setBestSeason] = useState("5月〜10月");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !riverName.trim()) return;

    const newSpot: RiverSpot = {
      id: `user-river-${Date.now()}`,
      name: name.trim(),
      riverName: riverName.trim(),
      prefecture: prefecture.trim() || "未設定",
      region,
      difficulty,
      flowLevel,
      distanceKm: parseFloat(distanceKm) || 5.0,
      putIn: putIn.trim() || "要現地確認",
      takeOut: takeOut.trim() || "要現地確認",
      coordinates: { x: 50 + (Math.random() * 20 - 10), y: 50 + (Math.random() * 20 - 10) },
      description: description.trim() || "ユーザーによって記録されたリバースポットです。",
      keyRapids: [
        { name: "メインの瀬", classLevel: difficulty, description: "この区間の主要な難所。" },
      ],
      hazards: hazardsInput
        .split(/[,、\n]/)
        .map((h) => h.trim())
        .filter(Boolean),
      recommendedBoats: ["River Runner", "Creek Boat"],
      scoutingAdvice:
        scoutingAdvice.trim() || "出艇前に必ず現地または道路からスカウティングしてください。",
      bestSeason: bestSeason.trim(),
      isUserAdded: true,
    };

    onAddRiver(newSpot);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-card border border-border rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6">
        <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-5">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">川のスポット・ゲレンデを登録</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted-foreground/70 hover:text-foreground/80 rounded-lg hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-foreground/80 font-medium mb-1">
                区間名・スポット名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="例: 長良川・洲原〜美濃"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card"
              />
            </div>

            <div>
              <label className="block text-foreground/80 font-medium mb-1">
                河川名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="例: 長良川、多摩川"
                value={riverName}
                onChange={(e) => setRiverName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-foreground/80 font-medium mb-1">地域</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as RiverRegion)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:border-primary focus:bg-card"
              >
                <option value="関東">関東</option>
                <option value="中部・甲信越">中部・甲信越</option>
                <option value="近畿">近畿</option>
                <option value="中国・四国">中国・四国</option>
                <option value="九州">九州</option>
                <option value="北海道・東北">北海道・東北</option>
              </select>
            </div>

            <div>
              <label className="block text-foreground/80 font-medium mb-1">都道府県</label>
              <input
                type="text"
                placeholder="例: 岐阜県、東京都"
                value={prefecture}
                onChange={(e) => setPrefecture(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card"
              />
            </div>

            <div>
              <label className="block text-foreground/80 font-medium mb-1">難易度クラス</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as WhitewaterClass)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:border-primary focus:bg-card"
              >
                <option value="Class I">Class I (初級)</option>
                <option value="Class II">Class II (初中級)</option>
                <option value="Class III">Class III (中級)</option>
                <option value="Class IV">Class IV (上級)</option>
                <option value="Class V">Class V (エキスパート)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-foreground/80 font-medium mb-1">
                エントリー（プットイン）
              </label>
              <input
                type="text"
                placeholder="例: ○○橋上流右岸"
                value={putIn}
                onChange={(e) => setPutIn(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card"
              />
            </div>

            <div>
              <label className="block text-foreground/80 font-medium mb-1">
                イグジット（テイクアウト）
              </label>
              <input
                type="text"
                placeholder="例: ○○河原公園"
                value={takeOut}
                onChange={(e) => setTakeOut(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card"
              />
            </div>

            <div>
              <label className="block text-foreground/80 font-medium mb-1">区間距離 (km)</label>
              <input
                type="number"
                step="0.5"
                placeholder="5.0"
                value={distanceKm}
                onChange={(e) => setDistanceKm(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card"
              />
            </div>
          </div>

          <div>
            <label className="block text-foreground/80 font-medium mb-1">コース概要・特徴</label>
            <textarea
              rows={2}
              placeholder="瀬の様子、波立ち、練習に適したポイントなどを記載"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card"
            />
          </div>

          <div>
            <label className="block text-foreground/80 font-medium mb-1">
              危険箇所・注意点（カンマ区切り）
            </label>
            <input
              type="text"
              placeholder="例: 橋脚のアンダーカット, 倒木ストレーナー, 釣り人配慮"
              value={hazardsInput}
              onChange={(e) => setHazardsInput(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-card"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/60">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-muted-foreground hover:text-foreground rounded-lg border border-border hover:bg-secondary"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>マップに追加</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
