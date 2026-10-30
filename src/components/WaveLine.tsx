import React, { useId } from "react";

interface WaveLineProps {
  /** Custom CSS classes for the container */
  className?: string;
  /** Stroke color for the wave line (default: vivid river blue #0050c8) */
  fillColor?: string;
  /** Stroke width in pixels (default: 2.5) */
  strokeWidth?: number;
  /** Optional opacity */
  opacity?: number;
  /** Height of the wave section in pixels (default: 72) */
  height?: number;
}

/**
 * WaveLine component:
 * - Line-only wave (stroke only, fill="none", no bottom baseline).
 * - Right-facing wave crests with organic, fluid roundness.
 * - Leftmost wave is ~4x larger in amplitude and period than subsequent waves.
 * - Seamlessly transitions into repeating right-facing waves spanning full width.
 */
export const WaveLine: React.FC<WaveLineProps> = ({
  className = "",
  fillColor = "#0050c8",
  strokeWidth = 2.5,
  opacity = 1,
  height = 72,
}) => {
  const patternId = useId();

  // Regular wave unit dimensions (period = 72px, amplitude = 14.5px, trough at y = 62)
  const tileWidth = 72;
  const tileHeight = 74;

  // Big wave unit on the far left (~4x regular wave: width 288px = 4 * 72, amplitude = 58px = 4 * 14.5)
  const bigWaveWidth = 288;

  // Regular wave path:
  // - Starts at trough (0, 62) with horizontal tangent
  // - Swells smoothly to the right, rounded crest curling rightwards (crest peak at y ~ 47.5)
  // - Smoothly scoops down under the crest back to trough at (72, 62)
  // - Overlaps by 1px on left and right (-1 to 73) to ensure zero seam gap when repeating
  const regWavePath = `
    M -1 62
    L 0 62
    C 24 62, 36 56, 46 50
    C 51.5 47, 58.5 47, 62 50
    C 65.5 53, 67 62, 72 62
    L 73 62
  `.trim();

  // Big wave path on the left (~4x scale):
  // - Starts at trough (0, 62) with horizontal tangent
  // - High sweeping swell rising to the right, rounded crest curling forward to the right (crest peak at y ~ 4)
  // - Gracefully scoops down into the trough at (288, 62) with matching horizontal tangent
  const bigWavePath = `
    M 0 62
    C 96 62, 144 38, 184 14
    C 206 2, 234 2, 248 14
    C 262 26, 268 62, 289 62
  `.trim();

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full block overflow-visible"
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

        {/* 1. Large 4x wave on the left (curling right with smooth roundness) */}
        <path
          d={bigWavePath}
          fill="none"
          stroke={fillColor}
          strokeWidth={strokeWidth + 0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 2. Repeating regular rounded waves continuing across the rest of the screen width */}
        <rect
          x={bigWaveWidth}
          y={0}
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  );
};

export default WaveLine;
