import React, { useId, useState } from "react";

interface WaveLineProps {
  /** Custom CSS classes for the container */
  className?: string;
  /** Stroke color for the wave lines (default: vivid river blue #0050c8) */
  fillColor?: string;
  /** Primary stroke width (default: 2.5) */
  strokeWidth?: number;
  /** Optional overall opacity */
  opacity?: number;
  /** Height in pixels of the wave container (default: 110) */
  height?: number;
  /** Whether to allow toggling the reference illustration backdrop */
  allowArtToggle?: boolean;
}

/**
 * WaveLine component:
 * - Leftmost wave is the iconic Hokusai "The Great Wave off Kanagawa" (富嶽三十六景 神奈川沖浪裏)
 *   surging toweringly on the far left, curling rightward with signature foam claws and flow lines.
 * - Seamlessly transitions into right-facing, rounded, line-only waves across the full screen width.
 * - Line-only (stroke only, fill="none", no bottom baseline).
 */
export const WaveLine: React.FC<WaveLineProps> = ({
  className = "",
  fillColor = "#0050c8",
  strokeWidth = 2.5,
  opacity = 1,
  height = 110,
  allowArtToggle = true,
}) => {
  const patternId = useId();
  const [showIllustration, setShowIllustration] = useState(false);

  // Geometry parameters
  // Regular wave: tile width 64px, amplitude 14px (crest peak at y = 82, trough at y = 96)
  const tileWidth = 64;
  const tileHeight = 110;
  const troughY = 96;

  // Big Hokusai wave: width 320px (5 * 64 = 320), amplitude 86px (crest peak at y = 10)
  // ~6x taller amplitude than regular waves, soaring majestically on the left
  const bigWaveWidth = 320;

  // Regular wave path (line-only, smooth right-facing curl):
  const regWavePath = `
    M -1 ${troughY}
    L 0 ${troughY}
    C 22 ${troughY}, 32 ${troughY - 6}, 40 ${troughY - 11}
    C 45 ${troughY - 14}, 51 ${troughY - 14}, 55 ${troughY - 11}
    C 58 ${troughY - 8}, 60 ${troughY}, 64 ${troughY}
    L 65 ${troughY}
  `.trim();

  // Hokusai Great Wave vector paths (referenced faithfully from the attached print):
  // 1. Towering outer crest soaring from (0, 96) to summit (235, 10), curling over into the barrel (290, 74)
  const outerCrestPath = `
    M 0 96
    C 60 96, 110 78, 150 48
    C 180 26, 210 10, 235 10
    C 260 10, 285 20, 298 38
    C 305 50, 302 65, 290 74
    C 280 80, 264 76, 258 64
    C 254 54, 260 44, 270 42
  `.trim();

  // 2. Iconic foam spray claws (波頭の飛沫爪)
  const claw1 = "M 212 16 C 220 8, 234 6, 242 14 C 236 18, 228 18, 220 22";
  const claw2 = "M 256 14 C 268 12, 280 20, 284 32 C 276 30, 268 26, 262 24";
  const claw3 = "M 292 34 C 302 42, 306 54, 298 64 C 294 56, 288 50, 282 46";
  const claw4 = "M 290 68 C 284 76, 270 78, 264 70 C 268 64, 276 64, 282 66";

  // 3. Lower foreground wave crest in front of the barrel
  const foregroundWavePath = `
    M 80 96
    C 120 96, 150 78, 180 62
    C 196 54, 208 54, 218 60
    C 226 66, 228 80, 238 96
    L 320 96
  `.trim();

  // 4. Concentric water-flow lines inside the surging body
  const flowLine1 = "M 40 96 C 90 92, 140 68, 180 38 C 205 20, 230 20, 248 30";
  const flowLine2 = "M 110 96 C 145 88, 175 70, 205 48 C 222 36, 238 38, 250 50";

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none relative group ${className}`}
      style={{ height: `${height}px` }}
      aria-label="北斎風大波と急流波線"
    >
      {/* Optional reference illustration backdrop on the left */}
      {showIllustration && (
        <div
          className="absolute left-0 bottom-0 pointer-events-none transition-opacity duration-300 opacity-25 z-0"
          style={{ width: `${bigWaveWidth}px`, height: `${height}px` }}
        >
          <img
            src="/assets/aistudio/__________2026-10-30_20.29.12_bee62a8e.png"
            alt="葛飾北斎 神奈川沖浪裏 モチーフ"
            className="w-full h-full object-contain object-left-bottom"
          />
        </div>
      )}

      <svg
        className="w-full h-full block overflow-visible relative z-10"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id={patternId}
            width={tileWidth}
            height={tileHeight}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={regWavePath}
              fill="none"
              stroke={fillColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
        </defs>

        {/* --- HOKUSAI BIG WAVE (Far Left: ~6x height, iconic curling crest & foam claws) --- */}
        <g
          fill="none"
          stroke={fillColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Main towering surging wave outline */}
          <path d={outerCrestPath} strokeWidth={strokeWidth + 0.8} />

          {/* Grasping foam claw fingers (神奈川沖浪裏 特有の白波の爪) */}
          <path d={claw1} strokeWidth={strokeWidth} />
          <path d={claw2} strokeWidth={strokeWidth} />
          <path d={claw3} strokeWidth={strokeWidth} />
          <path d={claw4} strokeWidth={strokeWidth} />

          {/* Foreground secondary crest */}
          <path d={foregroundWavePath} strokeWidth={strokeWidth} />

          {/* Dynamic water flow lines inside the wave surge */}
          <path
            d={flowLine1}
            strokeWidth={Math.max(1.5, strokeWidth - 0.7)}
            strokeDasharray="5 3"
            opacity={0.8}
          />
          <path
            d={flowLine2}
            strokeWidth={Math.max(1.5, strokeWidth - 0.7)}
            strokeDasharray="5 3"
            opacity={0.8}
          />
        </g>

        {/* Spray droplets around the barrel opening */}
        <g fill={fillColor} opacity={0.85}>
          <circle cx="238" cy="6" r="1.5" />
          <circle cx="254" cy="5" r="1.6" />
          <circle cx="272" cy="12" r="2" />
          <circle cx="290" cy="22" r="1.6" />
          <circle cx="308" cy="36" r="2.2" />
          <circle cx="314" cy="52" r="1.8" />
          <circle cx="302" cy="74" r="1.5" />
          <circle cx="284" cy="86" r="1.5" />
        </g>

        {/* --- REPEATING REGULAR WAVES (Spanning across the rest of the screen width) --- */}
        <rect
          x={bigWaveWidth}
          y={0}
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>

      {/* Subtle floating badge / art toggle in corner */}
      {allowArtToggle && (
        <div className="absolute right-4 bottom-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowIllustration((v) => !v)}
            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-tight bg-background/80 hover:bg-background border border-border text-muted-foreground hover:text-foreground backdrop-blur-xs transition-colors shadow-2xs"
            title="葛飾北斎『神奈川沖浪裏』の原画プレビュー切り替え"
          >
            {showIllustration ? "原画非表示" : "北斎原画表示"}
          </button>
        </div>
      )}
    </div>
  );
};

export default WaveLine;
