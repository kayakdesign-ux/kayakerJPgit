import { RiverSpot, WhitewaterClass } from "../types/kayak";

export interface ClassDefinition {
  classLevel: WhitewaterClass;
  title: string;
  enTitle: string;
  waterCharacteristics: string;
  skillRequired: string;
  rescueDifficulty: string;
  color: string;
}

export const CLASS_DEFINITIONS: ClassDefinition[] = [
  {
    classLevel: "Class I",
    title: "初級・イージー",
    enTitle: "Fast Moving Water / Riffles",
    waterCharacteristics: "穏やかな流れと小さな波。障害物はほとんどなく、明確な航路が見通せる。",
    skillRequired: "パドルの基本操作、方向転換、艇の乗り降りができれば航行可能。",
    rescueDifficulty: "セルフレスキューは容易。浅瀬への上陸も速やかに行える。",
    color: "emerald",
  },
  {
    classLevel: "Class II",
    title: "初中級・ノービス",
    enTitle: "Novice / Clear Channels",
    waterCharacteristics:
      "適度な波と広い水路。岩などの障害物があるが容易に回避可能。エディ（反流）がはっきり現れる。",
    skillRequired: "エディキャッチ、フェリーグライド、基本的なボートコントロール力。",
    rescueDifficulty: "スイムになっても危険は少なく、救助は比較的容易。仲間との相互フォロー推奨。",
    color: "sky",
  },
  {
    classLevel: "Class III",
    title: "中級・インターミディエイト",
    enTitle: "Intermediate / Irregular Waves",
    waterCharacteristics:
      "中規模で不規則な波、力強いストッパー（ホール）や狭い通過点が存在。スカウティングが有効。",
    skillRequired: "確実なエスキモーロール、波を突破する強い推進力、波面を素早く読む判断力。",
    rescueDifficulty: "スイム時の自力脱出は体力を要する。スローロープ等のグループ救助体制が必要。",
    color: "amber",
  },
  {
    classLevel: "Class IV",
    title: "上級・アドバンスド",
    enTitle: "Advanced / Powerful Whitewater",
    waterCharacteristics:
      "激しく予測不能な激流、強いホール、狭い落差（ドロップ）、危険なボイル。スカウティング必須。",
    skillRequired:
      "プレッシャー下での確実なロール、高精度なライン取り、急激なエディイン/アウト技術。",
    rescueDifficulty:
      "スイムは重大な事故につながる恐れあり。経験豊富なリーダーと綿密なレスキュー配置が必須。",
    color: "orange",
  },
  {
    classLevel: "Class V",
    title: "エキスパート・過酷",
    enTitle: "Expert / Violent & Hazardous",
    waterCharacteristics:
      "極めて激しく長い瀬、巨大なホール、滝状のドロップ、シーブやアンダーカット等の重大危険が連鎖。",
    skillRequired: "完璧なロールと体力、高度なクリーキング技術、精神力と長年の経験。",
    rescueDifficulty: "自力脱出は極めて困難。万一の失敗は生命の危機に直結する。",
    color: "rose",
  },
  {
    classLevel: "Class VI",
    title: "限界・極限（ナビゲート不能寸前）",
    enTitle: "Extreme & Exploratory Rapids",
    waterCharacteristics:
      "人命に関わる極限の激流。成功確率が極めて低く、ミス＝致命傷。水位のわずかな変化で致命化。",
    skillRequired: "世界最高峰のエクストリームカヤッカーのみ。一般のパドリング対象外。",
    rescueDifficulty: "救助自体が不可能な場合が多い。",
    color: "red",
  },
];

export const INITIAL_RIVER_SPOTS: RiverSpot[] = [
  {
    id: "river-mitake-tama",
    name: "多摩川・御岳渓谷",
    riverName: "多摩川",
    prefecture: "東京都",
    region: "関東",
    difficulty: "Class II",
    flowLevel: "適水 (ベスト)",
    distanceKm: 4.5,
    putIn: "御嶽駅下（杣の小橋付近）",
    takeOut: "軍畑大橋上流（軍畑河原）",
    coordinates: { x: 74, y: 52 },
    description:
      "首都圏カヤッカーの聖地。エディキャッチやフェリーグライド、サーフィンなどの基礎練習に最適。都心から電車でアクセス可能な日本屈指のトレーニングゲレンデ。",
    keyRapids: [
      {
        name: "三本松の瀬",
        classLevel: "Class II",
        description: "適度な落差と綺麗なエディが左右に並ぶ基本練習ポイント。",
      },
      {
        name: "寒山寺の瀬",
        classLevel: "Class II",
        description: "橋の直下にある波立ちの良い瀬。サーフィン練習ができる良質なウェーブあり。",
      },
      {
        name: "発電所の瀬（放水路）",
        classLevel: "Class III",
        description: "水量が多い時は力強いバックウォッシュとホールが立ち上がる、御岳最大の難所。",
      },
    ],
    hazards: [
      "週末のラフティングボート・SUPとの接触注意",
      "低水時の岩盤ヒット（特にアルミパドルや手首への衝撃）",
      "発電所放水に伴う突発的な水位変動",
    ],
    recommendedBoats: ["River Runner", "Half Slice", "Playboat"],
    scoutingAdvice:
      "御岳遊歩道から全行程を下見（スカウティング）可能。初めて下る際は発電所下の波立ちを遊歩道から確認すること。",
    bestSeason: "通年（水温が高い5月〜10月がベスト）",
  },
  {
    id: "river-tone-minakami",
    name: "利根川・水上セクション（諏訪峡〜紅葉峡）",
    riverName: "利根川",
    prefecture: "群馬県",
    region: "関東",
    difficulty: "Class IV",
    flowLevel: "多水 (ハイウォーター・要警戒)",
    distanceKm: 8.0,
    putIn: "水上温泉街裏（紅葉橋上流）",
    takeOut: "月夜野大橋下河原",
    coordinates: { x: 73, y: 46 },
    description:
      "春の雪解け水で激変する日本屈指のビッグウォーター。巨岩が織りなす激しいドロップと圧倒的水圧のスタンディングウェーブが続く、エキスパート憧れの舞台。",
    keyRapids: [
      {
        name: "竜ヶ瀬（諏訪峡）",
        classLevel: "Class IV",
        description: "切り立った峡谷内の落差と強烈なホール。ラインを外すと一瞬でフリップする。",
        hazardNote: "岩壁のアンダーカットに注意",
      },
      {
        name: "バンジー下の瀬",
        classLevel: "Class III",
        description: "水上大橋直下、大きな波が連続するジェットコースターセクション。",
      },
      {
        name: "月夜野キャニオン",
        classLevel: "Class III",
        description: "ゴール手前の連続したウェーブトレイン。",
      },
    ],
    hazards: [
      "春季融雪期の超高水圧と極度の冷水（ドライスーツ必須）",
      "諏訪峡の切り立った岩壁によるエスケープ困難",
      "水没ストレーナー（流木）",
    ],
    recommendedBoats: ["Creek Boat", "River Runner (大浮力)"],
    scoutingAdvice:
      "遊歩道から諏訪峡を見下ろせる。春の高水時は必ず地元ガイドや熟練者と同伴し、エントリー前に水量テレメーターを必ず確認。",
    bestSeason: "4月下旬〜6月（雪解けのハイシーズン）",
  },
  {
    id: "river-nagara-mino",
    name: "長良川・美濃〜郡上八幡セクション",
    riverName: "長良川",
    prefecture: "岐阜県",
    region: "中部・甲信越",
    difficulty: "Class III",
    flowLevel: "適水 (ベスト)",
    distanceKm: 11.5,
    putIn: "洲原神社前河原",
    takeOut: "美濃橋（美濃河原）",
    coordinates: { x: 59, y: 55 },
    description:
      "清流日本一と名高いエメラルドグリーンの水質。プレイボートのサーフィンスポットが点在し、初心者から上級者まで愛される中部屈指のリバーランコース。",
    keyRapids: [
      {
        name: "洲原の瀬",
        classLevel: "Class II",
        description: "スタート直後の開放的な瀬。ウォームアップに最適。",
      },
      {
        name: "前平の瀬",
        classLevel: "Class III",
        description: "川幅が狭まり大きなウェーブが連なる名物スポット。サーフィン可能。",
      },
      {
        name: "美濃橋直上のホール",
        classLevel: "Class III",
        description: "ゴール直前に待ち構える力強いホール。サイドサーフィンやループに最適。",
      },
    ],
    hazards: [
      "鮎釣りシーズン（6月〜10月）の釣り人（友釣り師）への配慮・挨拶とライン譲り",
      "増水時の橋脚周辺の渦とボイル",
    ],
    recommendedBoats: ["Playboat", "Half Slice", "River Runner"],
    scoutingAdvice:
      "国道156号線沿いに川が走っており、車窓からのスカウティングが極めて容易。美濃橋周辺は歩いて下見可能。",
    bestSeason: "5月〜11月",
  },
  {
    id: "river-yoshino-koboke",
    name: "吉野川・大歩危〜小歩危峡",
    riverName: "吉野川",
    prefecture: "徳島県・高知県",
    region: "中国・四国",
    difficulty: "Class IV",
    flowLevel: "適水 (ベスト)",
    distanceKm: 9.0,
    putIn: "大歩危リバーステーション付近",
    takeOut: "川口・吉野川合流点河原",
    coordinates: { x: 42, y: 69 },
    description:
      "世界選手権も開催された日本一激しいホワイトウォーターゲレンデ。結晶片岩の深い峡谷に怒涛のビッグウェーブと巨大ホールが炸裂する、究極のリバーラン。",
    keyRapids: [
      {
        name: "赤川の瀬",
        classLevel: "Class III",
        description: "小歩危エントリー直後の連続波。リズムを掴む重要なポイント。",
      },
      {
        name: "鉄橋下の瀬",
        classLevel: "Class IV",
        description: "JR土讃線の鉄橋下。中央の巨大なホールを避けてタイトに抜ける必要がある。",
      },
      {
        name: "大滝の瀬（小歩危屈指の難所）",
        classLevel: "Class IV",
        description: "落差と水圧が凄まじい大滝。正確なブーフ（Boof）ストロークが要求される。",
        hazardNote: "右岸シーブ・アンダーカット危険",
      },
      {
        name: "曲がり戸の瀬",
        classLevel: "Class IV",
        description: "激流がS字に蛇行し巨大な波が両岸から押し寄せる。",
      },
    ],
    hazards: [
      "峡谷深く側道への緊急脱出（エスケープ）が極めて困難",
      "ボイルラインによるカヤックの急激なスターン沈めと反転",
      "大滝下流のアンダーカットロック",
    ],
    recommendedBoats: ["Creek Boat", "River Runner"],
    scoutingAdvice:
      "国道32号線からの見下ろしは高低差があり難しいため、川の中でのエディホッピングと熟練リーダーの指示に従うこと。",
    bestSeason: "6月〜10月（台風後の増水時はClass V化するため出艇厳禁）",
  },
  {
    id: "river-hozu-kyoto",
    name: "保津川・亀岡〜嵐山渓谷",
    riverName: "保津川",
    prefecture: "京都府",
    region: "近畿",
    difficulty: "Class II",
    flowLevel: "適水 (ベスト)",
    distanceKm: 12.0,
    putIn: "JR亀岡駅北側河原（保津川下り乗船場付近）",
    takeOut: "嵐山・渡月橋上流右岸",
    coordinates: { x: 53, y: 60 },
    description:
      "関西を代表する景勝地を下るクラシックルート。巨岩と蛇行する渓谷美、適度な難易度の瀬が連続し、初心者〜中級者のステップアップに最適。",
    keyRapids: [
      {
        name: "小鮎の滝",
        classLevel: "Class II",
        description: "緩やかなスロープ状のドロップ。綺麗な水路をまっすぐ突き抜ける。",
      },
      {
        name: "高瀬",
        classLevel: "Class II",
        description: "長めのウェーブトレインが楽しめる爽快なセクション。",
      },
      {
        name: "獅子ヶ口の瀬",
        classLevel: "Class III",
        description: "巨岩が迫る難所。水圧で岩に張り付かないようエッジングを保つ。",
      },
    ],
    hazards: [
      "保津川下りの伝統観光和船・ラフティングボートの優先航路確保",
      "トロ場が長く強風時の向かい風対策が必要",
    ],
    recommendedBoats: ["River Runner", "Half Slice"],
    scoutingAdvice:
      "JR嵯峨野線トロッコ列車が並走。獅子ヶ口などの瀬は川岸の岩からスカウティング可能。",
    bestSeason: "4月〜11月（紅葉シーズンは絶景）",
  },
  {
    id: "river-sai-nagano",
    name: "犀川・安曇野〜白馬セクション",
    riverName: "犀川",
    prefecture: "長野県",
    region: "中部・甲信越",
    difficulty: "Class II",
    flowLevel: "適水 (ベスト)",
    distanceKm: 14.0,
    putIn: "安曇野市スイス村裏・犀川河川敷",
    takeOut: "山清路または大岡河原",
    coordinates: { x: 67, y: 49 },
    description:
      "北アルプスの雪解け水が注ぐ雄大なリバーラン。川幅が広く水量豊富で、初心者の川下りツーリングやスラローム練習に最適のオープンゲレンデ。",
    keyRapids: [
      {
        name: "三川合流の瀬",
        classLevel: "Class II",
        description: "梓川・高瀬川合流後の広大な瀬。波が高く視界が広い。",
      },
      {
        name: "山清路の狭窄部",
        classLevel: "Class II",
        description: "峡谷に入りエディラインが強まるスリリングなポイント。",
      },
    ],
    hazards: [
      "水温が非常に低いため春秋の防寒着（ドライスーツ等）必須",
      "倒木（ストレーナー）が岸際に点在",
    ],
    recommendedBoats: ["River Runner", "Creek Boat", "Inflatable Kayak"],
    scoutingAdvice: "国道19号線から広く見渡せる。水門の放流サイレンに注意。",
    bestSeason: "5月〜10月",
  },
  {
    id: "river-kuma-hitoyoshi",
    name: "球磨川・人吉〜球磨村",
    riverName: "球磨川",
    prefecture: "熊本県",
    region: "九州",
    difficulty: "Class III",
    flowLevel: "適水 (ベスト)",
    distanceKm: 10.0,
    putIn: "人吉城跡下河原",
    takeOut: "球磨村・一勝地河原",
    coordinates: { x: 28, y: 80 },
    description:
      "日本三大急流のひとつ。九州を代表するパワフルなホワイトウォーターで、大きなうねりと波立ち、迫力あるドロップが連続する。",
    keyRapids: [
      {
        name: "修理の瀬",
        classLevel: "Class III",
        description: "大きな波と強い流れ。中央を真っ直ぐ突き抜ける爽快感。",
      },
      {
        name: "天狗の瀬",
        classLevel: "Class III",
        description: "岩が点在するテクニカルなライン取りが求められるポイント。",
      },
    ],
    hazards: [
      "降雨時の急激な水位上昇（豪雨多発地帯）",
      "復旧工事箇所やテトラポッド等の人工構造物への接近厳禁",
    ],
    recommendedBoats: ["Creek Boat", "River Runner"],
    scoutingAdvice:
      "球磨川鉄道・国道219号線沿い。出艇前に必ず最新の河川工事情報を観光協会や消防で確認。",
    bestSeason: "5月〜10月",
  },
];
