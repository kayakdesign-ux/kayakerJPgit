export interface PaddleModel {
  id: string;
  name: string;
  brand: string;
  bladeArea: string; // e.g. 720 cm²
  bladeMaterial:
    "グラスファイバー" | "カーボン" | "フォームコアカーボン" | "グラスファイバー / 強化ナイロン";
  shaftOptions: "ストレート / ベント" | "ストレートのみ" | "ベントのみ" | "4ピース分割";
  weight: string; // e.g. 960g
  priceRange: string;
  idealFor: string;
  description: string;
  features: string[];
  recommendedLengths: string;
  searchKeyword: string;
}

export interface PaddleShaftComparison {
  type: "straight" | "bent";
  title: string;
  enTitle: string;
  summary: string;
  pros: string[];
  cons: string[];
  wristAngleBenefit: string;
  targetPaddler: string;
  priceDiff: string;
}

export interface PaddleMaterialInfo {
  id: string;
  name: string;
  enName: string;
  stiffness: "最高 (ブレない)" | "高 (バランス)" | "超高剛性+高浮力" | "柔軟 (しなり)";
  durability: string;
  weightRating: "超軽量" | "軽量" | "中軽量" | "やや重い";
  catchFeeling: string;
  priceNote: string;
  bestFor: string;
}

export const SHAFT_COMPARISONS: PaddleShaftComparison[] = [
  {
    type: "straight",
    title: "ストレートシャフト",
    enTitle: "Straight Shaft",
    summary:
      "一直線のクラシックなシャフト。握り位置の自由度が高く、ダイレクトな入力感とリーズナブルな価格が魅力。",
    pros: [
      "価格がベントシャフトより1.5万〜2.5万円ほど手頃",
      "シャフト上で手の位置を自由にスライドでき、ローリング時のセットアップが直感的",
      "手首の筋肉と腱を鍛えるベーシックな構造",
    ],
    cons: [
      "手首が自然な角度より折れ曲がった状態で力を入れるため、長時間の激流漕行で手首痛・腱鞘炎になりやすい",
      "強い水圧を受けた際、シャフトのねじれを抑えるために強く握りしめる傾向がある",
    ],
    wristAngleBenefit: "手首が外側に約15〜25°屈曲した状態でホールドする",
    targetPaddler:
      "予算を抑えたいエントリー層、手首の腱に不安のない方、手の位置を頻繁に変えたいパドラー。",
    priceDiff: "¥30,000 〜 ¥50,000 前後",
  },
  {
    type: "bent",
    title: "エルゴ・ベント（クランク）シャフト",
    enTitle: "Bent / Neutral Crank Shaft",
    summary:
      "人間の解剖学に基づき、グリップ部分がクランク状に湾曲した設計。手首が最も自然で負担の少ないニュートラル角を保持。",
    pros: [
      "手首と前腕の腱が直線状に整うため、腱鞘炎（テニス肘・手首痛）のリスクが激減",
      "握り込まなくても手のひらと指に自動的にフィットし、無駄な握力消費を抑える",
      "激流の強いキャッチでもブレード面が水中でねじれず安定する",
    ],
    cons: [
      "高精度の成形工程が必要なため、ストレートより1.5万〜2.5万円高価",
      "クランクのくぼみ位置に手が固定されるため、握り幅の微調整には慣れが必要",
    ],
    wristAngleBenefit: "手首が自然なニュートラル角（0〜5°の直進アライメント）に保たれる",
    targetPaddler:
      "週末に何時間も漕ぐ方、過去に手首や肘を痛めた経験がある方、激流で最大限のパワーを伝えたい本気パドラー。",
    priceDiff: "¥55,000 〜 ¥85,000 前後",
  },
];

export const PADDLE_MATERIALS: PaddleMaterialInfo[] = [
  {
    id: "fiberglass",
    name: "グラスファイバー（半透明/カラー）",
    enName: "Translucent Fiberglass Blade",
    stiffness: "高 (バランス)",
    durability: "岩への耐衝撃性に最も優れ、欠けや割れに強い",
    weightRating: "軽量",
    catchFeeling: "適度なしなりがあり、肩や肘の関節に優しいクッション性のあるキャッチ感",
    priceNote: "¥35,000 〜 ¥58,000（コスパと耐久性の世界標準）",
    bestFor: "日本の浅い川や岩の多いホワイトウォーター、最初の一本として最もおすすめ。",
  },
  {
    id: "carbon",
    name: "カーボンファイバー（炭素繊維）",
    enName: "Full Carbon Composite",
    stiffness: "最高 (ブレない)",
    durability: "高強度だが、鋭利な岩への強打・挟み込みには注意が必要",
    weightRating: "超軽量",
    catchFeeling:
      "しなりが一切なく、パドルを入れた瞬間にボートが飛び出す究極のダイレクトレスポンス",
    priceNote: "¥60,000 〜 ¥88,000（最高峰のレーシング・ハイエンド）",
    bestFor: "長時間のツーリングでの疲労軽減、瞬時の加速が求められる大激流・フリースタイル競技。",
  },
  {
    id: "foamcore",
    name: "フォームコア・カーボン",
    enName: "Foam Core Carbon Blade",
    stiffness: "超高剛性+高浮力",
    durability: "エッジはケブラー/ダイニーマ補強で保護されているが大切に扱う必要あり",
    weightRating: "超軽量",
    catchFeeling:
      "ブレード自体が水中で浮き上がるため、ロールやスラップブレイスの復元力が爆発的に向上",
    priceNote: "¥75,000 〜 ¥98,000（プロ・エキスパート仕様）",
    bestFor: "ロールを確実に決めたいクリーカー、水面で立体的な技を繰り出すプレイボーター。",
  },
  {
    id: "nylon-plastic",
    name: "強化ナイロン・樹脂ブレード",
    enName: "Reinforced Plastic / Nylon Blade",
    stiffness: "柔軟 (しなり)",
    durability: "岩でガンガン叩いても割れない圧倒的なタフネス",
    weightRating: "やや重い",
    catchFeeling: "水圧がかかるとブレードが大きくしなり、推進力が逃げやすい",
    priceNote: "¥15,000 〜 ¥25,000（入門・スクール練習用）",
    bestFor: "カヤックスクールの練習用、ラフティングのガイドパドル、超低予算の予備。",
  },
];

export const POPULAR_PADDLES: PaddleModel[] = [
  {
    id: "werner-sherpa",
    brand: "Werner Paddles (ワーナー)",
    name: "Sherpa (シェルパ)",
    bladeArea: "680 cm²",
    bladeMaterial: "グラスファイバー",
    shaftOptions: "ストレート / ベント",
    weight: "約 990g (ストレート) / 1030g (ベント)",
    priceRange: "¥48,000 〜 ¥72,000",
    idealFor: "川下りオールラウンド・中級者・小柄〜中柄なパドラー",
    description:
      "世界中のホワイトウォーターパドラーが愛用する大定番モデル。適度なブレードサイズで長時間のパドリングでも肩が疲れず、確実なキャッチ力を発揮します。",
    features: [
      "最も支持されているミディアムサイズ・プレミアムグラスブレード",
      "水切れの良いバックフェースリブ構造でブレないキャッチ",
      "手首に優しいニュートラルクランクベントシャフト選択可",
      "鮮やかな半透明ブレードで川面での視認性抜群",
    ],
    recommendedLengths: "194cm / 197cm / 200cm",
    searchKeyword: "ワーナー パドル シェルパ カヤック Werner Sherpa",
  },
  {
    id: "werner-powerhouse",
    brand: "Werner Paddles (ワーナー)",
    name: "Powerhouse (パワーハウス)",
    bladeArea: "720 cm²",
    bladeMaterial: "グラスファイバー",
    shaftOptions: "ストレート / ベント",
    weight: "約 1010g (ストレート) / 1050g (ベント)",
    priceRange: "¥48,000 〜 ¥74,000",
    idealFor: "クリークボート・大激流・体格の良い男性パドラー",
    description:
      "ワーナー最大のブレード面積を誇るフラッグシップ。一撃のフォワードストロークでボートを巨大な波の奥から押し出す、圧倒的推進力を誇ります。",
    features: [
      "大型ブレードによる爆発的な推進力とホール脱出力",
      "クリーキング・ビッグウォーターでの頼れるグリップ力",
      "手首への負荷を考慮しベントシャフトとの組み合わせが特に人気",
    ],
    recommendedLengths: "197cm / 200cm / 203cm",
    searchKeyword: "ワーナー パドル パワーハウス Werner Powerhouse",
  },
  {
    id: "werner-player",
    brand: "Werner Paddles (ワーナー)",
    name: "Player (プレイヤー)",
    bladeArea: "675 cm²",
    bladeMaterial: "グラスファイバー",
    shaftOptions: "ストレート / ベント",
    weight: "約 980g (ストレート) / 1020g (ベント)",
    priceRange: "¥48,000 〜 ¥72,000",
    idealFor: "プレイボート・フリースタイル・サーフィン",
    description:
      "ダウンリバーよりもウェーブサーフィンや回転技（スピン・カートホイール）に特化したショートブレード。水面近くでの素早いフェザーワークが可能。",
    features: [
      "水離れが良く小回りが利くダウンチルト形状のブレード",
      "波の上での素早い左右の切り返しとロールの容易さ",
      "短めのレングス（191〜194cm）設定が標準",
    ],
    recommendedLengths: "191cm / 194cm",
    searchKeyword: "ワーナー プレイヤー パドル Werner Player",
  },
  {
    id: "werner-odachi",
    brand: "Werner Paddles (ワーナー)",
    name: "Odachi (大太刀) / Foam Core",
    bladeArea: "735 cm²",
    bladeMaterial: "フォームコアカーボン",
    shaftOptions: "ベントのみ",
    weight: "約 935g",
    priceRange: "¥88,000 〜 ¥98,000",
    idealFor: "激流レース・エクストリームスラローム・トップエキスパート",
    description:
      "カヌースラロームの技術をホワイトウォーターに投入した前方オフセットブレード。水にブレードが吸い付くように刺さり、初速の立ち上がりが別次元。",
    features: [
      "ブレードがシャフト軸より前方にオフセットされた攻撃的設計",
      "超高浮力フォームコアによる驚異的なローリング浮力",
      "最高峰のプリプレグカーボン構造",
    ],
    recommendedLengths: "197cm / 200cm",
    searchKeyword: "Werner Odachi カヤック パドル",
  },
  {
    id: "breakdown-spare",
    brand: "Werner / NRS / TNP",
    name: "4ピース・ブレイクダウン予備パドル",
    bladeArea: "650〜680 cm²",
    bladeMaterial: "グラスファイバー / 強化ナイロン",
    shaftOptions: "4ピース分割",
    weight: "約 1100g",
    priceRange: "¥22,000 〜 ¥45,000",
    idealFor: "全ホワイトウォーターパドラーの船内常備（セルフレスキュー）",
    description:
      "激流の中でパドルを岩に挟んで折ってしまった、あるいは流失した際に、谷底から生還するための命綱。分解してカヤックのリアハッチ奥に常時積載します。",
    features: [
      "プッシュピンで4分割でき、どんなカヤックの船尾内部にも収納可能",
      "緊急時でも左右のフェザー角を自由に変更可能",
      "リーダーまたはグループに最低1本は必携の救助アイテム",
    ],
    recommendedLengths: "197cm (万能レングス)",
    searchKeyword: "カヤック 4ピース パドル ブレイクダウン 分割パドル",
  },
];

export const PADDLE_MISTAKES = [
  {
    title: "ツーリング・海用（220cm〜230cm）の長すぎるパドルを使う",
    risk: "急流でボートのエッジにパドルが引っかかって転覆する原因になり、狭い岩の間を通せません。",
    solution: "ホワイトウォーター専用は必ず191cm〜200cm前後の短めを選びましょう。",
  },
  {
    title: "レクリエーション用のアルミシャフト＋薄手プラブレードで急流に入る",
    risk: "強い水圧や岩への接触でシャフトがポッキリ折れるか曲がり、激流のど真ん中で自力航行不能に陥ります。",
    solution:
      "必ずグラスファイバーまたはカーボン製のホワイトウォーター認証パドルを使用してください。",
  },
  {
    title: "昔の主流だった「フェザー角90度」のパドルを使い続ける",
    risk: "反対側のストロークを行うたびに手首を直角に大きくひねる必要があり、現代の急流では手首を痛めます。",
    solution: "現在世界の標準は「30度〜45度」（または0度）。手首のひねりを最小限に抑えられます。",
  },
  {
    title: "インデックス（シャフト断面の楕円形状）の向きを確認せず握る",
    risk: "水中でブレードがどちらを向いているか手触りで判断できず、ロールやブレイスで面がずれて失敗します。",
    solution:
      "右手（または利き手）側に突起・楕円があるインデックスグリップを指の付け根で正しく感知しましょう。",
  },
  {
    title: "パーティー内に「4ピース予備パドル」を持たずに大激流へ入る",
    risk: "Class III以上の渓谷（キャニオン）でパドルを紛失・破損すると、崖を登って脱出できない致命的遭難になります。",
    solution: "グループ内に最低1本、できれば各艇に4分割パドルを船尾スペースに積載しましょう。",
  },
];

/* ========================================================================= */
/* アンフェザー VS フェザー ＆ 角度別向き不向きガイド */
/* ========================================================================= */
export interface FeatherComparison {
  type: "unfeather" | "feather";
  name: string;
  enName: string;
  angleRange: string;
  summary: string;
  pros: string[];
  cons: string[];
  wristLoad: string;
  windResistance: string;
  recommendedFor: string;
}

export interface FeatherAngleZone {
  angle: string;
  name: string;
  bestDiscipline: string;
  suitability: "フリースタイル向き" | "リバーランニング向き" | "スラローム向き" | "万能・手首保護";
  wristMovement: string;
  windEffect: string;
  characteristics: string;
  keyAdvice: string;
}

export const FEATHER_COMPARISON: FeatherComparison[] = [
  {
    type: "unfeather",
    name: "アンフェザー（0度）",
    enName: "Unfeathered (0° Offset)",
    angleRange: "0°（左右ブレードが完全平行）",
    summary:
      "左右のブレードがまったく同じ平面（角度差ゼロ）に配置されたパドル。左右対称で手首の回転が不要。",
    pros: [
      "手首のひねり（回転操作）が一切不要で、手首痛・腱鞘炎のリスクを最小化できる",
      "オフハンド（非利き手側）のフォワード、バック、ブレイス、ロールが左右まったく同じ感覚・力加減で打てる",
      "水中でブレードの面がどちらを向いているか直感的に把握でき、初心者やロール練習に最適",
      "左右均等なパドリング筋力バランスを維持しやすい",
    ],
    cons: [
      "【最大の欠点】空中にある反対側ブレードが風を真正面から受けるため、「向かい風（アゲインスト）に極めて弱い」",
      "開けた川原や湖での向かい風・突風でパドルを取られやすい",
    ],
    wristLoad: "手首のひねり角度：0度（手首への回転ストレス皆無）",
    windResistance: "向かい風の影響大（風を面で受けるため失速しやすい）",
    recommendedFor:
      "フリースタイル愛好者、手首に痛み・違和感がある方、直感的に左右対称で漕ぎたい初心者。",
  },
  {
    type: "feather",
    name: "フェザー（角度付き：30°〜90°）",
    enName: "Feathered (Offset Blades)",
    angleRange: "30° 〜 90°（現代の主流は30°〜45°）",
    summary:
      "左右のブレードに意図的な角度差をつけたパドル。空中を進むブレードが風をナイフのように切り裂く。",
    pros: [
      "空中のブレードが斜めに風を切るため、強風や向かい風での空気抵抗を大幅に削減できる",
      "人間の骨格運動（肘の引きと押し出しの連動）に合わせたスピーディーで力強いキャッチが可能",
      "伝統的なスラローム競技や高速ダウンリバーでの高出力パドリングに対応",
    ],
    cons: [
      "反対側を漕ぐたびに利き手側でシャフトをひねる（ツイスト）必要があるため、手首への負担が増す",
      "非利き手側のロールやブレイスで面の角度感覚に慣れが必要",
    ],
    wristLoad: "手首のひねり角度：30°〜90°（角度が大きいほど手首腱への負荷大）",
    windResistance: "向かい風を斜めにスライス（風の抵抗を劇的に軽減）",
    recommendedFor:
      "リバーランニング、クリーキング、スラローム競技、風のある広い河川を漕ぐパドラー。",
  },
];

export const FEATHER_ANGLE_ZONES: FeatherAngleZone[] = [
  {
    angle: "0°",
    name: "0度（完全アンフェザー）",
    bestDiscipline: "フリースタイル・手首保護・初心者",
    suitability: "フリースタイル向き",
    wristMovement: "ひねり不要（左右完全に同じ手首角度でパドリング）",
    windEffect: "向かい風を正面から受ける（強風の日は風圧を受けやすい）",
    characteristics:
      "左右対称で直感的操作。手首の腱鞘炎を抱えるパドラーや、左右どちらでも同じトリックを繰り出したいプレイボートに絶大な支持。",
    keyAdvice:
      "「手首をひねるのが苦手」「左右で同じ感覚でロールしたい」人に最適。向かい風の強い湖や川原では要注意。",
  },
  {
    angle: "30°〜45°",
    name: "30度〜45度（モダン・フリースタイル＆リバー）",
    bestDiscipline: "フリースタイル・現代ホワイトウォーター標準",
    suitability: "フリースタイル向き",
    wristMovement: "わずかな手首のひねり（手首に優しい微小ツイスト）",
    windEffect: "風を適度に逃がし、向かい風でも快適",
    characteristics:
      "現代のホワイトウォーターシーンで「世界標準」となっている黄金アングル。手首への負担を最小限に抑えつつ、風の抵抗もしっかり低減。素早い左右の切り返しが可能。",
    keyAdvice:
      "Werner等の主要メーカーが標準採用。迷ったらまず「30°または45°」を選べば間違いありません。",
  },
  {
    angle: "45°〜60°",
    name: "45度〜60度（クラシック・リバーランニング）",
    bestDiscipline: "リバーランニング・クリーク・長距離ダウンリバー",
    suitability: "リバーランニング向き",
    wristMovement: "標準的な手首のローテーション",
    windEffect: "優れた耐風性（向かい風を効率よくスライス）",
    characteristics:
      "川下り（ダウンリバー）やクリークボートでの長い距離を漕ぐ際に優れた直進性と推進力を発揮。前進ストロークのパワー伝達と空気抵抗のバランスが極めて優れる。",
    keyAdvice:
      "長距離のダウンリバーを力強く漕ぎ抜けたい方、川原の吹き下ろし風が強いエリアで漕ぐパドラーに最適。",
  },
  {
    angle: "60°〜90°",
    name: "60度〜90度（スラローム・競技レーシング）",
    bestDiscipline: "カヌースラローム競技・ダウンリバーレース",
    suitability: "スラローム向き",
    wristMovement: "大きな手首のひねり（手首の柔軟性と筋力が必要）",
    windEffect: "究極の空気抵抗削減（空中ブレードがほぼ水平）",
    characteristics:
      "伝統的なスラローム競技で採用される急角度。激流のゲート間をコンマ1秒で通過するため、空気抵抗を極限まで削ぎ落とす。かつての主流（90度）だが、手首の腱鞘炎リスクが高いため現代の一般ホワイトウォーターでは減少。",
    keyAdvice:
      "スラローム専門選手やレーサー向け。手首が硬いパドラーや初心者は手首痛の原因になるため避けるのが賢明。",
  },
];
