export interface RiverSignItem {
  id: string;
  title: string;
  enTitle: string;
  importance: "最重要" | "重要" | "誘導・集合";
  importanceColor: string;
  gesture: string;
  paddleGesture: string;
  whistleCode: string;
  meaning: string;
  actionGuidance: string;
  visualType: "sos" | "first-aid" | "go" | "stop" | "eddy" | "eddy-point" | "gather";
}

export interface HazardItem {
  id: string;
  number: string;
  name: string;
  enName: string;
  hazardType: "river" | "body";
  dangerLevel: "致命的・即死トラップ" | "高危険度・要警戒" | "進行性重症化";
  dangerColor: string;
  summary: string;
  mechanism: string;
  escapeProtocol: string[];
  prevention: string;
  visualTag: string;
}

export interface RescueGearItem {
  id: string;
  name: string;
  enName: string;
  role: string;
  mechanismTitle: string;
  mechanismDesc: string;
  doAndDont: {
    do: string;
    dont: string;
  };
  criticalCheck: string;
  recommendedSpec: string;
}

export interface FlowRescueProtocol {
  flowRate:
    | "緩流（Pool / Flat / Class I）"
    | "急流（Swift / Class II〜III）"
    | "激流（Whitewater / Class IV〜V）";
  flowType: "slow" | "swift" | "violent";
  boatHandling: string;
  paddleHandling: string;
  swimmerAction: string;
  teamAction: string;
  goldenRule: string;
  steps: string[];
}

export interface TeamRescueTier {
  tierNumber: number;
  tierName: string;
  enName: string;
  role: string;
  mechanismTitle?: string;
  procedure: string[];
  keyRisk: string;
  requiredGear: string;
}

/* ========================================================================= */
/* CHAPTER 01: 7大必須リバーサイン（手話・パドル・ホイッスル） */
/* ========================================================================= */
export const RIVER_SIGNS: RiverSignItem[] = [
  {
    id: "sign-sos",
    title: "SOS（緊急救助要請）",
    enTitle: "Emergency / SOS",
    importance: "最重要",
    importanceColor: "bg-rose-500 text-white border-rose-600",
    gesture: "両腕を頭上高く上げ、大きく「×」を描くように交差して左右に激しく振る",
    paddleGesture: "パドルを水平（横向き）にし、頭上高く掲げて激しく上下にポンピングする",
    whistleCode: "長音3吹「ピーーーッ！ ピーーーッ！ ピーーーッ！」（3連打）",
    meaning:
      "生命の危機、または自力脱出不可能な事故が発生した。全艇直ちに前進を停止し救助へ急行せよ。",
    actionGuidance:
      "合図を確認したパドラーは直ちにホイッスルを鳴らして周囲へ連鎖（エコー）させ、下流の安全なエディへ艇を寄せてスローバッグ・救助用具をスタンバイする。",
    visualType: "sos",
  },
  {
    id: "sign-first-aid",
    title: "ファーストエイド（負傷・救護要請）",
    enTitle: "Medical / First Aid Needed",
    importance: "最重要",
    importanceColor: "bg-rose-500 text-white border-rose-600",
    gesture: "片手の手のひらを自分の頭頂部に置き、もう一方の手で負傷部位または救急キットを指差す",
    paddleGesture: "パドルを縦に持ち、ブレードの先端で自分の頭を軽くポンポンと触れる",
    whistleCode: "短音2吹＋長音1吹「ピッ！ ピッ！ ピーーーッ！」",
    meaning:
      "パドラーまたはスイマーが怪我・脱臼・低体温症・意識混濁などの人的負傷を負った。陸上救護体制を要請。",
    actionGuidance:
      "最寄りのエディへ速やかに引き揚げ、陸路アクセスの可否・携帯電波の有無・ファーストエイドキット保有者を確認する。",
    visualType: "first-aid",
  },
  {
    id: "sign-go",
    title: "GO オールクリアー（前進・流心通過よし）",
    enTitle: "All Clear / Safe to Proceed",
    importance: "重要",
    importanceColor: "bg-emerald-600 text-white border-emerald-700",
    gesture: "片腕（または両腕）を頭上へ真っ直ぐ垂直に天に向かって突き上げる",
    paddleGesture: "パドルを完全に垂直に立て、ブレードを真上に向けて不動で掲げる",
    whistleCode: "短音2吹「ピッ！ ピッ！」（合図・準備完了）",
    meaning:
      "流心の安全を確認完了。障害物なし。合図を出しているパドラーのラインに沿って後続艇は順次出撃せよ。",
    actionGuidance:
      "先頭のスカウトがエディから流心を観察し、安全を確認した時のみ出す。後続は前艇との車間距離（ボート3艇分以上）を空けて突入する。",
    visualType: "go",
  },
  {
    id: "sign-stop",
    title: "ストップ（一時停止・エディで待機せよ）",
    enTitle: "Stop / Hold in Eddy",
    importance: "重要",
    importanceColor: "bg-amber-500 text-white border-amber-600",
    gesture: "両腕を肩の高さで真横にピンと水平に伸ばし、十字架のように静止する",
    paddleGesture: "パドルを両手で胸〜頭の高さで水平に横倒しにし、動かさずにホールドする",
    whistleCode: "長音1吹「ピーーーーーッ！」（注目・全停止）",
    meaning:
      "前方に未確認の危険（倒木・ピン留め・他艇の沈没等）あり。絶対に下るな。直近のエディに入って待機せよ。",
    actionGuidance:
      "下流でこのサインを見たら、惰性で下らず即座に左右どちらかの反流域（エディ）へフェリーして静止する。",
    visualType: "stop",
  },
  {
    id: "sign-eddy",
    title: "エディ（反流・淀みへ入れ）",
    enTitle: "Catch the Eddy",
    importance: "誘導・集合",
    importanceColor: "bg-teal-600 text-white border-teal-700",
    gesture:
      "片腕を斜め45度上方へ差し出し、人差し指で頭上に大きな円（渦巻き）を描くようにぐるぐる回す",
    paddleGesture: "パドルの片側ブレードを斜め上に向け、小さな円運動を描いて見せる",
    whistleCode: "短音1吹「ピッ！」＋ジェスチャー",
    meaning: "激流の本流から外れ、安全な減速・反流スポット（エディ）へ待避せよ。",
    actionGuidance:
      "激流の中間休憩や、次なるドロップの確認前に隊列を整えるための最も頻出するコマンド。",
    visualType: "eddy",
  },
  {
    id: "sign-eddy-point",
    title: "あのエディに入れ（特定エディへの明確指示）",
    enTitle: "Catch That Specific Eddy",
    importance: "誘導・集合",
    importanceColor: "bg-teal-600 text-white border-teal-700",
    gesture:
      "片腕で特定のエディ（岩裏や岸壁）を力強く一本指で指差し、もう一方の手で「エディ円運動」を行う",
    paddleGesture: "パドルのブレード先を目標のエディへ向け、槍のように真っ直ぐ突き出して指し示す",
    whistleCode: "短音1吹「ピッ！」",
    meaning:
      "「右岸のあのボルダー裏のエディ」など、指定の1箇所に全員が入る必要がある（その先が致命的瀬のため）。",
    actionGuidance:
      "先行者が安全な足場・エディを確保した上で、後続艇がミスラインを取らないようピンポイントで誘導するサイン。",
    visualType: "eddy-point",
  },
  {
    id: "sign-gather",
    title: "集合（全員集まれ・作戦会議）",
    enTitle: "Rally / Gather Together",
    importance: "誘導・集合",
    importanceColor: "bg-sky-600 text-white border-sky-700",
    gesture: "両腕を頭上で丸め、両手の指先を合わせて大きな「○（サークル）」を作る",
    paddleGesture: "パドルを水平に持ち、胸の前で円を描くように抱え込む",
    whistleCode: "短音3吹「ピッ！ ピッ！ ピッ！」（集合合図）",
    meaning:
      "パーティー全員でミーティングを行う。指定の岸辺または巨大エディに艇を寄せ、全員集合せよ。",
    actionGuidance:
      "瀬の突破前スカウティング、昼食・休憩、またはルート変更の相談を行う際に使用。取り残されたメンバーがいないか点呼する。",
    visualType: "gather",
  },
];

/* ========================================================================= */
/* CHAPTER 02: 川の５つの危険 ＆ ３つの体の危険 */
/* ========================================================================= */
export const RIVER_HAZARDS: HazardItem[] = [
  {
    id: "hazard-manmade",
    number: "01",
    name: "人工物（マンメイド：堰堤・テトラ・橋脚・金網）",
    enName: "Man-made Structures & Low-Head Dams",
    hazardType: "river",
    dangerLevel: "致命的・即死トラップ",
    dangerColor: "text-rose-600 bg-rose-50 border-rose-200",
    summary:
      "川の全幅にわたって落差を作る堰堤や、消波ブロック、水没フェンス。自然の瀬と異なり「脱出口が存在しない」水難死亡率トップの構造物。",
    mechanism:
      "堰堤直下には全幅にわたる完全なバックウォッシュ（逆流循環水）が生じ、水中の泡（気泡混入）によりPFD浮力が半減。テトラポットは内部に水流が吸い込まれる巨大なシーブとなり、艇も人間も内部へ圧着され脱出不能になる。",
    escapeProtocol: [
      "【最優先対策】堰堤やテトラ帯は絶対に漕ぎ下らない。手前100mのエディで確実に上陸し、必ずポーテージ（陸路運搬）する",
      "万一堰堤ホールに巻き込まれた場合、水面でもがくのではなく、膝を抱えて丸まり、川底へ向かう潜流（下流へ吐き出す底流）に乗って外へ押し出されるのを待つ",
    ],
    prevention:
      "事前のトポ（河川図）調査で堰堤記号・工事用人工物を特定し、現場では橋脚やテトラ帯の直上を避けて大回りの流心ラインを取る。",
    visualTag: "低頭ダム・コンクリートテトラ",
  },
  {
    id: "hazard-holes",
    number: "02",
    name: "ホール・ハイドロリック（抑留波・リサーキュレーション）",
    enName: "Hydraulics & Keeper Holes",
    hazardType: "river",
    dangerLevel: "致命的・即死トラップ",
    dangerColor: "text-rose-600 bg-rose-50 border-rose-200",
    summary:
      "落差の直下に生じる強力な逆流循環波。ボートやスイマーを洗濯機のように回転させ、水中に引きずり込み続ける。",
    mechanism:
      "落差を越えた水が川底に潜り、下流の静水とぶつかって水面で上流側（落ち込み側）へと猛烈に逆流する。両端が塞がれた「逆U字型（フローマウント）」のホールは自力脱出が極めて困難。",
    escapeProtocol: [
      "【カヤック乗艇時】スピードに乗った強力な前進漕ぎで突き抜ける。捕まったらサイドサーフィンで側面の吐き出し口（ショルダー）へ脱出する",
      "【スイム時】浮こうとせず「ボール姿勢」で丸くなり、水深の深い下層の底流に乗って下流へ吐き出される",
      "岸からのスローバッグ投擲を受ける際は、ロープを肩に掛けて胸で抱き込み、救助者の引き揚げテンションでホールから引き剥がしてもらう",
    ],
    prevention:
      "落差の落ち込み形状を観察し、両端が開いている「スマイリーホール」以外は突入せず、エッジの浅いルートを通過する。",
    visualTag: "循環水流・リバースウェーブ",
  },
  {
    id: "hazard-strainers",
    number: "03",
    name: "ストレーナー・シーブ（水中倒木・岩のスリット）",
    enName: "Strainers & Rock Sieves",
    hazardType: "river",
    dangerLevel: "致命的・即死トラップ",
    dangerColor: "text-rose-600 bg-rose-50 border-rose-200",
    summary:
      "水は通過するが、人やカヤックを通さない「川のザル」。水圧で枝や岩の隙間に押し付けられ、数十秒で溺水する。",
    mechanism:
      "岸から倒れ込んだ柳の木、流木、巨岩同士の狭い割れ目（スリット）。時速20kmの水圧は1平米あたり数百kg〜数トンに達し、人間の力では枝から腕一本引き剥がせない。",
    escapeProtocol: [
      "【ボート乗艇時】早期に発見し、全力のフェリーグライドで対岸の安全な水流へ逃げる",
      "【衝突不可避】ボートを倒木に向けて前傾し、倒木を両手で抱え込んでボートが下流へ巻き込まれるのを防ぐ",
      "【スイム時】足から流されると股の間に木が挟まり即死する。直前でアグレッシブクロールで前進し、倒木の上へ胸から跳躍して乗り上げる（飛び越える）",
    ],
    prevention:
      "増水期・台風直後は川岸のブッシュ（柳や流木）に絶対に近づかない。見通しの利かないブラインドベンドは手前で減速。",
    visualTag: "倒木・流木・岩のスリット",
  },
  {
    id: "hazard-undercut",
    number: "04",
    name: "アンダーカットロック（水中洞窟・サイフォン）",
    enName: "Undercut Rocks & Siphons",
    hazardType: "river",
    dangerLevel: "致命的・即死トラップ",
    dangerColor: "text-rose-600 bg-rose-50 border-rose-200",
    summary:
      "水面下で岩盤が深くえぐれ、水流が岩の下へと潜り込んでいるトラップ。吸い込まれると暗黒の水中洞窟に閉じ込められる。",
    mechanism:
      "岩の表面にはクッション（反発波・ピロー）がなく、激流がそのまま岩壁の下へ吸い込まれて消える。ボートやスイマーが吸い込まれると、岩の下の空洞に押し込まれて脱出不能となる。",
    escapeProtocol: [
      "クッションのない不気味な岩盤を見たら、全力で距離を取る",
      "岩に激突する場合は、岩から逃げようと下流側へ艇を傾けると即座に水圧でひっくり返されて吸い込まれる。必ず「岩に向かって艇を傾ける（ハグ・ザ・ロック）」",
      "パドルで岩を強く突いて船首を下流へ回し、反発力で離脱する",
    ],
    prevention:
      "クッション波（Pillow）が立っていない岩はアンダーカットと断定し、1艇分以上の余裕を持って大きく迂回する。",
    visualTag: "えぐれ岩・水中吸い込み穴",
  },
  {
    id: "hazard-entrapment",
    number: "05",
    name: "フットエントラップメント / コールドウォーターショック",
    enName: "Foot Entrapment & Cold Water Gasp Reflex",
    hazardType: "river",
    dangerLevel: "高危険度・要警戒",
    dangerColor: "text-rose-600 bg-rose-50 border-rose-200",
    summary:
      "川底に足をつこうとして岩に挟まれ水圧でうつ伏せに倒される罠。および冷水転落時の不随意な急激吸気反射。",
    mechanism:
      "膝〜腰程度の浅瀬であっても激流の水圧は人間の脚力に勝る。足先が岩の割れ目に挟まると、水圧で身体が下流に倒され、顔が水中に押し付けられる。また水温15℃以下では転落時に肺に水を一気に吸い込む「あえぎ反射」が起きる。",
    escapeProtocol: [
      "【鉄則】激流の瀬の中では「絶対に立ち上がろうとしない（DO NOT STAND UP）」",
      "必ずフローティングポジション（足先を水面に出して仰向けで下流を向く）を維持する",
      "足をつくのは水深が膝下で、流れが完全に止まった岸辺のエディに入ってからにする",
    ],
    prevention:
      "出艇前に「転落したら足を浮かす」を合言葉にし、ドライスーツ・ネオプレンで冷水ショックを遮断する。",
    visualTag: "川底岩挟まり・冷水反射",
  },
];

export const BODY_HAZARDS: HazardItem[] = [
  {
    id: "body-dehydration",
    number: "01",
    name: "脱水症状（Dehydration：激流での大量発汗・熱疲労）",
    enName: "Dehydration & Heat Fatigue",
    hazardType: "body",
    dangerLevel: "進行性重症化",
    dangerColor: "text-amber-600 bg-amber-50 border-amber-200",
    summary:
      "水の上にいるため喉の渇きに気づきにくく、パドリングの重労働とウエア内の発汗で体液が急速に枯渇する。",
    mechanism:
      "カヤックは全身の筋肉（体幹・背筋・腕力）をフル稼働させる高負荷スポーツ。密閉性の高いパドリングジャケットやウェットスーツ内は高温多湿になり、毎時1リットル以上の汗が蒸発。血液粘度が上昇し筋痙攣や判断力低下を招く。",
    escapeProtocol: [
      "喉が渇く前に「1セクション（30分）ごとに100〜200ml」の電解質ドリンクを補給する",
      "足や指のつり、頭痛、集中力の乱れを感じたら即座にエディに入り、日陰で休息を取る",
    ],
    prevention:
      "PFDのポケットやカヤックのコーミング内にバイトバルブ付きのハイドレーションやボトルを常備し、即座に飲める環境を作る。",
    visualTag: "隠れ脱水・筋痙攣・判断低下",
  },
  {
    id: "body-hypothermia",
    number: "02",
    name: "ハイポーサミア（Hypothermia：低体温症・浸水限界）",
    enName: "Hypothermia & Cold Immersion Limits",
    hazardType: "body",
    dangerLevel: "致命的・即死トラップ",
    dangerColor: "text-rose-600 bg-rose-50 border-rose-200",
    summary:
      "深部体温が35℃以下に低下し、シバリング（震え）、言語障害、意識混濁を引き起こすホワイトウォーター最大の静かな殺人者。",
    mechanism:
      "水の熱伝導率は空気の25倍。冷水に浸かると体温は急速に奪われる。沈脱して冷水に数分漂流すると、手足の筋肉が麻痺してパドルを握れなくなり、スローバッグのロープも掴めなくなる。",
    escapeProtocol: [
      "シバリング（激しい震え）が止まらなくなったら、直ちにダウンリバーを中止して上陸する",
      "濡れたウエアを脱がせ、乾いた衣類やレスキューシートで全身をくるみ、脇の下や首元を温める",
      "意識がある場合は温かい甘い飲み物（ココア・生姜湯等）を少量ずつ摂取させる",
    ],
    prevention:
      "「水温＋気温が65℃以下」の日はドライスーツまたは厚手ウェットスーツを厳守。インナーは化繊・メリノウールのみ着用（綿は厳禁）。",
    visualTag: "低体温・シバリング・筋麻痺",
  },
  {
    id: "body-hyperthermia",
    number: "03",
    name: "ハイパーサミア（Hyperthermia：熱中症・高体温症・熱籠もり）",
    enName: "Hyperthermia & Thermal Trapping",
    hazardType: "body",
    dangerLevel: "進行性重症化",
    dangerColor: "text-amber-600 bg-amber-50 border-amber-200",
    summary:
      "夏場の炎天下で透湿性の低いウエアやドライスーツを着用し、体内に熱がこもり深部体温が異常上昇する熱中症。",
    mechanism:
      "直射日光、水面の照り返し、密閉ジャケットの三重苦により放熱が不能になる。体温が40℃を超えると脳・内臓の機能不全を招き、水上で意識を失ってロール不能・溺水につながる。",
    escapeProtocol: [
      "エディに入り、ヘルメットを脱いで冷たい川水を頭部・首筋・手首に浴びせて急速冷却する",
      "ジャケットの首元や袖を開放し、風を通す（沈脱の危険がない安全な静水域で実施）",
      "めまいや吐き気が続く場合は無理せずリタイヤし、涼しい日陰で水平に寝かせる",
    ],
    prevention:
      "夏場はショートスリーブジャケットや透湿性の高い夏用セパレートウエアを選択。川水を定期的に頭からかぶるルーティンを作る。",
    visualTag: "熱中症・ドライスーツ熱籠もり",
  },
];

/* ========================================================================= */
/* CHAPTER 03: 命を守るレスキュー用具 */
/* ========================================================================= */
export const RESCUE_GEARS: RescueGearItem[] = [
  {
    id: "gear-harness",
    name: "PFDレスキューハーネス（クイックリリースOリング＆カムバックル）",
    enName: "Quick-Release Rescue Harness System",
    role: "レスキュアー自身をロープに連結し、危険時に瞬時にワンアクションで命綱を切り離す機構",
    mechanismTitle: "摩擦カムバックル ＋ ステンレスOリングの物理構造",
    mechanismDesc:
      "PFDの胴回りを1周する高強度ウェビングベルトが、胸元のカムバックル（トグルボール付き）で固定されています。下流へ流されそうになったり水没の危機に陥った際、胸元のボールを引くだけでバックルが開き、テンションのかかったロープがOリングごと一瞬で背中から外れます。",
    doAndDont: {
      do: "出艇前に「トグルを引いてスムーズにベルトが抜けるか」を毎回手動テストする",
      dont: "ハーネスのベルト端末を玉結びしたり、バックルの摩擦歯に逆通しする（緊急時に抜けなくなる）",
    },
    criticalCheck:
      "胸元のリリーストグルがPFDのポケットやジッパーに引っかからず、目視なしで即座に手探りで掴めるか。",
    recommendedSpec: "胸部クイックリリースベルト標準装備のType V（ホワイトウォーター専用PFD）",
  },
  {
    id: "gear-throwbag",
    name: "スローバッグ（アンダーハンド投擲・ロープ輪っか厳禁・コイリング）",
    enName: "Rescue Throw Bag & Throwing Techniques",
    role: "岸から激流を流されるスイマーへ高強度浮遊ロープを正確に届ける最強のレスキューツール",
    mechanismTitle: "バッグ自重による空中繰り出し ＋ アンダーハンド投擲",
    mechanismDesc:
      "ロープ端末を手元で握り、バッグ本体を下手投げでスイマーの進行方向の胸元へ放ちます。バッグが飛翔する力で内部のロープが空中で自動的に繰り出されます。1投目を外した場合は、ロープを手繰り寄せて二重ループ（バタフライコイル）を作り、素早く第2投を行います。",
    doAndDont: {
      do: "ロープの端は手のひらでしっかり握り、低重心スタンスで岩に体重を預けて耐える",
      dont: "ロープの端や輪っかに手首や身体を絶対に巻き付けない！（激流の水圧で腕が切断・引きずり込まれる）",
    },
    criticalCheck:
      "ロープは編み込み・結び目がない状態でバッグに丁寧に押し込まれ、スムーズに引き出せるか。",
    recommendedSpec:
      "浮遊性ポリプロピレンまたはSpectra/Dyneeema芯ロープ（15〜20m、破断強度10kN以上）",
  },
  {
    id: "gear-knife",
    name: "レスキューナイフ（PFD胸部装着位置・緊急片手抜刀・先丸セレーション刃）",
    enName: "River Rescue Knife (Blunt Tip & Serrated)",
    role: "絡まったスローロープ、ストレーナーの釣り糸、スプレースカートのグラブループ切断",
    mechanismTitle: "先丸（ブラントチップ） ＆ 片手ワンタッチロックシース",
    mechanismDesc:
      "先端が平ら（先丸）になっているため、波に揺れる水中で使用しても自分や仲間の身体、PFD、ボートを誤って突き刺す事故を防ぎます。刃の半分以上が波刃（セレーション）になっており、濡れて強靭になった高強度ロープを一撃で切断できます。",
    doAndDont: {
      do: "PFD胸部の専用ラッシュタブに「利き手でノールックで引き抜ける向き」で装着する",
      dont: "折りたたみ式ナイフをポケットの奥底に入れる（片手が塞がった激流の中では絶対に開けない）",
    },
    criticalCheck: "鞘（シース）からの脱着ロックが確実に作動し、激流の水圧で脱落しないか。",
    recommendedSpec:
      "防錆チタンまたは高耐食ステンレス（NRS Titanium Pilot, Gerber River Shorty等）",
  },
  {
    id: "gear-whistle-float",
    name: "玉なし救助笛（FOX40） ＆ 艇内浮力体（バウ・スターン用）",
    enName: "Pealess Whistle (FOX40) & Kayak Float Bags",
    role: "激流の爆音を貫く確実な音響伝達、および沈脱艇の浸水水没・水圧破損の完全防止",
    mechanismTitle: "無可動部チャンバー構造 ＋ 艇内空間置換浮力",
    mechanismDesc:
      "通常のコルク玉入り笛は水に濡れると玉が貼り付いて鳴らなくなります。FOX40等の玉なし（ピーレス）ホイッスルは水没直後でも息を吹き込むだけで115dB以上の爆音を轟かせます。また艇内浮力体は、沈脱時にボート内部に入る水の量を激減させ、ボートのピンニング（岩への水圧圧着）を防ぎます。",
    doAndDont: {
      do: "ホイッスルはPFDの肩ストラップに短くタイトに固定し、口元へ即座に運べるようにする",
      dont: "浮力体を入れずにホワイトウォーターへ出撃する（浸水したカヤックは200kg超の鉄塊になり回収不能）",
    },
    criticalCheck:
      "浮力体のエア漏れがないか、出艇前の気温変化（冷水で空気が収縮する）を考慮してパンパンに膨らませたか。",
    recommendedSpec: "FOX40 Classic（115dB無球ホイッスル） ＋ 頑丈なウレタンコーティング浮力バッグ",
  },
];

/* ========================================================================= */
/* CHAPTER 04: 実践レスキューマニュアル（流速別プロトコル ＆ チーム救助） */
/* ========================================================================= */
export const FLOW_PROTOCOLS: FlowRescueProtocol[] = [
  {
    flowRate: "緩流（Pool / Flat / Class I）",
    flowType: "slow",
    boatHandling: "ひっくり返ったボートを速やかに正立（裏返しを元に戻す）させる",
    paddleHandling: "パドルをボートのコーミング（コックピット縁）へ差し込んで固定する",
    swimmerAction: "ボートのグラブループ（端の取っ手）を片手で掴み、キックして岸のエディへ泳ぎ着く",
    teamAction:
      "周囲のパドラーはスイマーとボートの間に割って入り、バウ（船首）を押して岸へアシストする",
    goldenRule: "「ボート戻す → パドルをコーミングへ → グラブループを掴んで泳ぐ」",
    steps: [
      "1. 沈脱後、パドルを手放さずボートに素早く近寄る",
      "2. ボートの縁を持って勢いよく正立させ、船内へのこれ以上の浸水を防ぐ",
      "3. パドルブレードをコックピット内（コーミング下）に滑り込ませて脱落防止",
      "4. スターン（船尾）のトグル／グラブループを握り、ディフェンシブキックで岸のエディへ向かう",
    ],
  },
  {
    flowRate: "急流（Swift / Class II〜III）",
    flowType: "swift",
    boatHandling: "ボートの回収は諦めて潔く下流へ流す（ボートと自分の間に挟まれるのを防ぐ）",
    paddleHandling: "パドルのシャフトを握り、自分の身体の保護・推進力として保持して泳ぐ",
    swimmerAction:
      "フローティングポジション（足上げ下流向き）を取り、下流の安全なエディを見定めてアグレッシブスイムで脱出する",
    teamAction:
      "後続・他艇のパドラーが沈没艇を追いかけ、バウプッシュまたはブルドッグ（ロープ牽引）でエディへ回収する",
    goldenRule: "「ボート流す → パドルを持って泳ぐ → 他の人にボート回収を委ねる」",
    steps: [
      "1. ボートの回収にしがみつかず、即座に手を離してボートを下流へ先行させる",
      "2. パドルだけは保持し、水面からブレードを突き出して岩や波の衝撃から胸を守る",
      "3. 足先を水面に浮かせ、岩は足裏で蹴ってやり過ごす",
      "4. 岸側の大きなエディが見えたら、パドルを持ったまま全力でクロールしエディラインを突破する",
      "5. 仲間が下流でボートを安全にキャッチしてくれるのを信頼して待つ",
    ],
  },
  {
    flowRate: "激流（Whitewater / Class IV〜V）",
    flowType: "violent",
    boatHandling: "ボート即座に放棄・完全流下。人命以外の物体には一切構わない",
    paddleHandling: "パドルも即座に手放して流す。両手を完全に自由にして自己生存に100%集中する",
    swimmerAction:
      "両手を自由に使い、呼吸のタイミングをコントロール。陸上チームからのスローロープ救助を受ける",
    teamAction:
      "岸でスタンバイしているレスキューチームがスローバッグを正確に投擲し、ペンデュラムスイングで即座に引き揚げる",
    goldenRule: "「ボート流す → パドル流す（命最優先） → 他の人のロープレスキューを受ける」",
    steps: [
      "1. パドルへの未練を完全に捨てて即座に手放す（両手が使えないと大波を泳ぎ切れない）",
      "2. 大波が迫ったら息を大きく吸い、波の頂点を越えた瞬間に次の呼吸をする",
      "3. 岸辺のレスキュー隊員を視界に捉え、「ロープ！」の声またはホイッスルを注視",
      "4. 飛んできたスローロープを両手で掴み、背中越しに肩の上へ回して胸元で強く抱き込む",
      "5. 救助者の固定テンションと川の水流を利用し、弧を描くペンデュラムスイングで安全なエディへ滑り込む",
    ],
  },
];

export const TEAM_RESCUE_TIERS: TeamRescueTier[] = [
  {
    tierNumber: 1,
    tierName: "レスキュアー ロープthrow ＆ バックアップ（基本投擲 ＆ 下流待機）",
    enName: "Tier 1: Primary Thrower & Downstream Backup",
    role: "最も安全かつ標準的な岸からのスローバッグ救助体制",
    procedure: [
      "【プライマリー投擲役】足場が平らで、下流に回収用エディがある岩盤上に低重心スタンスで位置取り",
      "「ロープ！」と大声またはホイッスルで叫び、スイマーの胸元〜進行方向先へアンダーハンド投擲",
      "【バックアップ役】第1投が外れた場合に備え、15〜20m下流で第2スローバッグを構えて待機し、確実に仕留める",
    ],
    keyRisk: "投擲者が滑落しない足場の確保、およびロープを手首に巻き付けないこと。",
    requiredGear: "スローバッグ（2個以上）、PFD、ホイッスル",
  },
  {
    tierNumber: 2,
    tierName: "Go to throw（中州・岩盤からの接近投擲アプローチ）",
    enName: "Tier 2: Wading / Island Advance & Go-to Throw",
    role: "川幅が広くて岸からのロープが届かない場合の高度アプローチ",
    procedure: [
      "浅瀬をウェーディング（徒渉）またはカヤックで中州・川中央の巨大ボルダー（岩盤）へ迅速に上陸",
      "スイマーの通過ラインの至近距離（5〜10m以内）に陣取り、短距離でピンポイント投擲",
      "スイマーをキャッチしたら、中州の安全な淀みへ引き寄せて確保する",
    ],
    keyRisk: "救助者自身が中州へ渡る際に流される二次災害リスク。必ず2名以上のチームで実施。",
    requiredGear: "レスキューPFD、スローバッグ、頑丈なカヤックシューズ",
  },
  {
    tierNumber: 3,
    tierName: "ライブベイトレスキュー（ハーネス装着隊員による水没救助・直接確保）",
    enName: "Tier 3: Live-Bait Rescue with Quick-Release Harness",
    role: "意識を失ったスイマーや、ホール・ストレーナーに引っかかりロープを掴めない被救助者の直接救出",
    mechanismTitle: "クイックリリースPFDによる生体突入救助",
    procedure: [
      "救助隊員のPFDクイックリリースハーネスのOリングにスローロープ端末をカラビナで固定",
      "岸壁に2〜3名の屈強なビレイヤー（ロープ保持係）が低重心でバックアップアンカーを組む",
      "救助隊員がスイマーめがけて激流へ跳躍ダイブ。スイマーの背後から両腕で胸を羽交い締めにロック",
      "岸のビレイヤーが一斉にロープを固定・牽引し、隊員と被救助者の2名を水流のペンデュラムでエディへ引き揚げる",
      "万一隊員がストレーナー等に巻き込まれた場合は、隊員自身が胸元のトグルを引いて瞬時に命綱を切り離す",
    ],
    keyRisk: "最高難度の救助技術。十分な訓練を受けたレスキュー有資格者のみが実行可能。",
    requiredGear: "クイックリリース付きType V PFD、ロッキングカラビナ、高強度ロープ、ビレイチーム",
  },
];
