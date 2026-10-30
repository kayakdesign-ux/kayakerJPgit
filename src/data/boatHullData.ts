export interface BoatHullType {
  id: string;
  name: string;
  enName: string;
  era: string;
  eraBadgeColor: string;
  feel: string;
  primaryStability: string;
  primaryStabilityRating: "low" | "good" | "very-good" | "excellent";
  leanEffectiveness: string;
  secondaryStability: string;
  rollEase: string;
  rollEaseRating: "excellent" | "good" | "moderate" | "difficult";
  tracking: string;
  summary: string;
  detailedCharacteristics: string[];
  bestSuitedFor: string;
  representativeBoats: string;
}

export const BOAT_HULL_TYPES: BoatHullType[] = [
  {
    id: "round",
    name: "ラウンド",
    enName: "Round Hull (Displacement)",
    era: "古いタイプ（クラシック）",
    eraBadgeColor: "bg-slate-200 text-slate-800 border-slate-300",
    feel: "丸太に乗った感覚",
    primaryStability: "安定悪い（グラグラする）",
    primaryStabilityRating: "low",
    leanEffectiveness: "ききにくい（水を受け流してエッジが噛まない）",
    secondaryStability: "少ない（傾けるとそのままコロリと回転）",
    rollEase: "極めてしやすい（◎・円弧で水圧抵抗ゼロ）",
    rollEaseRating: "excellent",
    tracking: "直進性良い（水の抜けがスムーズで素直に進む）",
    summary:
      "底面が丸い半円形を描く昔ながらの形状。水流の衝撃を受け流しやすく激流で弾かれない反面、エッジがないため板のような踏ん張り感はありません。",
    detailedCharacteristics: [
      "断面が丸いため、平水で静止している時は「丸太の上に乗っている」ようにグラグラする",
      "エッジ（角）が存在しないため、艇を傾けても水がスルッと逃げてリーンが効きにくい",
      "2次復元力が少なく、ある角度を超えて傾くとそのままクルッと回転して沈脱しやすい",
      "一方で、ひっくり返った時は船底が円弧のため水圧の引っ掛かりがなく、最もロールで起き上がりやすい",
      "水の抵抗が少なく素直に真っ直ぐ進むため直進性に優れる",
    ],
    bestSuitedFor: "スラローム競技艇、旧世代クリーカー、水流を受け流して突破するクラシックスタイル",
    representativeBoats: "旧型スラローム艇、昔のクリークボート（Dagger Crossfire、Prijon等）",
  },
  {
    id: "box",
    name: "ボックス",
    enName: "Box Hull (Planing)",
    era: "近年？（現代の定番）",
    eraBadgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    feel: "板に乗った感覚",
    primaryStability: "安定良い（底が平らでどっしり安定）",
    primaryStabilityRating: "very-good",
    leanEffectiveness: "ききやすい（角のエッジでガッツリ水を掴む）",
    secondaryStability: "多い（傾けた角の面でグッと踏ん張る）",
    rollEase: "しにくい（△・角が水に引っかかり面で抵抗）",
    rollEaseRating: "difficult",
    tracking: "直進性良い（エッジによるカービングが可能）",
    summary:
      "底面が真っ平らでサイドと直角に近いエッジを持つ形状。サーフボードのように水面を滑り、エッジで鋭く旋回できますが、ロール時は角が水に引っかかります。",
    detailedCharacteristics: [
      "底面が平らなため、水面に乗せただけで「板やボードに乗っている」ような抜群の一次安定感がある",
      "明確な角（シャープエッジ）があり、体重を預けてリーンするとエッジが水にグサッと噛んで鋭く曲がれる",
      "2次復元力に優れ、艇を傾けた時に角の面が水圧を受け止めてグッと粘り強く踏ん張る",
      "ひっくり返った際、角張ったエッジが水に引っかかって大きな抵抗となり、ラウンドよりロールが重く難しくなる",
      "波の上でスピンしたりサーフィンするプレイボートの基盤となったハル",
    ],
    bestSuitedFor: "プレイボート、フリースタイル競技、ウェーブサーフィン、フラットスピン",
    representativeBoats: "Jackson Rockstar, Dagger Jember, Pyranha Jed等",
  },
  {
    id: "mix-round",
    name: "ミックスラウンド",
    enName: "Mix Round (Modern Semi-Displacement)",
    era: "最近（最新クリークの主流）",
    eraBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    feel: "丸太の抜け ＋ 適度な足場感",
    primaryStability: "良好（ラウンドのしなやかさと安定性を両立）",
    primaryStabilityRating: "good",
    leanEffectiveness: "必要な時だけきく（普段は流し、傾けると噛む）",
    secondaryStability: "中〜高（倒れ込みにくく粘り強い）",
    rollEase: "比較的しやすい（○・角の引っ掛かりがマイルド）",
    rollEaseRating: "good",
    tracking: "非常に高い（大水量の本流でもラインがブレない）",
    summary:
      "中央〜バウ（先端）はラウンド形状で水流のショックを逃し、スターンにかけて緩やかなサイドエッジを融合。大激流でも弾かれず、狙ったラインを高速で突っ切れます。",
    detailedCharacteristics: [
      "前方は丸みを帯びており、大激流の岩やホールに突っ込んでも水流に弾かれず衝撃を吸収して推進力を維持",
      "コックピット後方からスターンにかけてマイルドなエッジを配置し、リーンを掛けた時だけ水が噛んで曲がる",
      "純粋なラウンドよりも一次安定性が格段に向上し、不意のバランス崩れを防ぐ",
      "角が丸められているため、転覆時も水が抜けやすく比較的スムーズにロールが上がる",
      "現代の過激なクリーキングやビッグウォーターで最も信頼される最新ハル設計",
    ],
    bestSuitedFor: "本格的クリーキング、大水量リバーランニング、険しいドロップやキャニオン下り",
    representativeBoats: "Waka Steez/Stout, Pyranha Scorch, Dagger Code, Jackson Gnarvana",
  },
  {
    id: "mix-flat",
    name: "ミックスフラット",
    enName: "Mix Flat (Modern Chamfered Planing)",
    era: "最近（最新ハーフスライスの主流）",
    eraBadgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    feel: "サーフボード感覚",
    primaryStability: "極めて高い（板の抜群の安定性）",
    primaryStabilityRating: "excellent",
    leanEffectiveness: "抜群にききやすい（鋭いエッジカービング）",
    secondaryStability: "高い（エッジでしっかり止まりコントロール自在）",
    rollEase: "しやすい（○・面取りエッジで抵抗が大幅軽減）",
    rollEaseRating: "good",
    tracking: "極めて高い（スピードとスピン・スターン沈めが両立）",
    summary:
      "ボックス（平底）の圧倒的な安定性と滑走性能をベースに、角のエッジを斜めに「面取り（チャンファー）」して引っ掛かりを排除した最新ハーフスライスの標準形です。",
    detailedCharacteristics: [
      "底面全体がフラット基調のため、水面での初動安定性はサーフボードそのもの",
      "純粋なボックス形状にあった「エッジが不意に水流に食われて沈する」リスクを、面取りエッジで劇的に解消",
      "リーンを入れると面取りされたサイドレールが綺麗に水に食い込み、スキーのカービングターンのような切れ味を発揮",
      "角が斜めに削られているため、ボックスハル最大の弱点だった「ロールの重さ」が大幅に改善され起き上がりやすい",
      "下りながら波で遊び、スターンを水中に沈めて縦回転（スクワート）する現代のニュースタイルに最適",
    ],
    bestSuitedFor: "ハーフスライス、ダウンリバープレイ、ウェーブサーフィン、軽快なダウンリバー",
    representativeBoats: "Dagger Rewind, Pyranha Ripper 2/Firecracker, Jackson Antix 2.0",
  },
];

export const HULL_COMPARISON_MATRIX = [
  {
    label: "時代背景",
    round: "古いタイプ（クラシック）",
    box: "近年？（現代の定番）",
    mixRound: "最近（最新クリークの主流）",
    mixFlat: "最近（最新ハーフスライスの主流）",
  },
  {
    label: "一次安定性（平水での安定感）",
    round: "安定悪い（グラグラする）",
    box: "安定良い（どっしり安定）",
    mixRound: "良好（しなやかさと安定の共存）",
    mixFlat: "極めて高い（抜群の安定感）",
  },
  {
    label: "乗った時の感覚",
    round: "「丸太に乗った感覚」",
    box: "「板に乗った感覚」",
    mixRound: "「丸太の抜け ＋ 足場感」",
    mixFlat: "「サーフボード感覚」",
  },
  {
    label: "リーンの効き（傾けた時の旋回）",
    round: "ききにくい（水を受け流す）",
    box: "ききやすい（角でガッツリ噛む）",
    mixRound: "必要な時だけきく（普段は流す）",
    mixFlat: "抜群にききやすい（鋭角カービング）",
  },
  {
    label: "2次復元力（傾斜での踏ん張り）",
    round: "少ない（傾くと回る）",
    box: "多い（角の面で踏ん張る）",
    mixRound: "中〜高（倒れ込みにくく粘る）",
    mixFlat: "高い（エッジでしっかり止まる）",
  },
  {
    label: "ロールのしやすさ（起き上がり）",
    round: "極めてしやすい（◎・円弧で抵抗ゼロ）",
    box: "しにくい（△・角が水に引っかかる）",
    mixRound: "比較的しやすい（○・抜けが良い）",
    mixFlat: "しやすい（○・面取りで抵抗減）",
  },
  {
    label: "直進性（スピード・走破力）",
    round: "直進良い（水の抜けがスムーズ）",
    box: "直進良い（エッジで直進）",
    mixRound: "非常に高い（激流でもブレない）",
    mixFlat: "極めて高い（スピード・加速抜群）",
  },
];
