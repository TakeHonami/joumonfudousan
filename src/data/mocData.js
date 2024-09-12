import image from "../assets/image.png";
import image2 from "../assets/image2.png";

// 入居者特典
// const KeyLocation = Object.freeze({
//   1: "豊田地区",
//   2: "足助・藤岡地区",
//   3: "下山地区",
// });

export const locations = [
  {
    id: 1,
    name: "秋葉遺跡",
    describe: "長興寺近くのコンロ付き一軒家",
    location: "森町3丁目",
    size: 8,
    acreage: "4.2m	×	3.3m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川右岸・舌状台地",
    outstanding: [
      "★ 近くで見つかったナイフ形石器は、「長興寺遺跡」として紹介されている！",
    ],
    image: image,
    comment: [
      "この家には石囲炉が設置され、調理がより便利になっています。また、近くで見つかったナイフ形石器もこの地域の特色を表しており、食事の支度に役立つでしょう！",
    ],
    time: "",
    keyLocation: 1,
    fridge: "",
    benefit: "",
  },
  {
    id: 2,
    name: "栃原遺跡",
    describe: "東山町の四角いコンロ付き一軒家",
    location: "東山町2丁目",
    size: 10,
    acreage: " 4.0m	×	4.0m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "豊田市盆地の斜面上",
    outstanding: ["★ お庭に野外炉あり！"],
    image: image2,
    comment: [
      "栃原遺跡は、東山町に位置する広々とした一戸建ての住居です。特に注目すべきは、その四角いコンロと庭の野外炉で、料理を楽しみながら自然を感じられる設計がされています。家の内外で自然と調和した生活を送りたい方にとって、理想的な住環境です。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 3,
    name: "曽根遺跡",
    describe: "豊田スタジアム徒歩5分の一軒家",
    location: "森町3丁目",
    size: 19,
    acreage: "5.7m	×	5.6m（方形）",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川中流左岸",
    outstanding: [
      "★ 神明式土器学べます！",
      "★ お部屋に有難い石棒あります！",
      "★ 玄関に有難い埋甕あります！",
    ],
    image: image2,
    comment: [
      "縄文時代の魅力満載！玄関にはありがたい埋甕やお部屋にはパワーを感じる石棒、さらに豊田スタジアムまで歩いて5分！歴史を感じつつ、スポーツ観戦も楽しめる生活を始めてみませんか？",
      "豊田スタジアムのすぐそばに位置しているため、スポーツやイベントが楽しめる環境です。また、矢作川が近くに流れており、川沿いを散歩するのが日課です。公園も整備されており、家族でのんびりと過ごすには最適な場所です。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 4,
    name: "牛寺遺跡",
    describe: "豊田スタジアムが見える平野の一軒家",
    location: "御立町9丁目、野見町4丁目",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（地床炉）",
    scene: "段丘低位面",
    outstanding: ["★土器敷あり！"],
    image: image2,
    comment: [
      "低い立地にありながら、豊田スタジアムからの絶好の眺望を誇ります。炉が備わっていることで、冷え込む季節も温かく過ごすことができ、土器敷が敷かれた部屋は、ユニークなポイントです。",
      "低い立地に位置するが、周辺は開けた景色で、特に豊田スタジアムが見えるのが魅力的です。イベントの日には活気があふれ、地域の文化を感じられます。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 5,
    name: "水入遺跡",
    describe: "渡刈町の広大な家",
    location: "渡刈町下糟目",
    size: 12,
    acreage: "4.5m	×	4.3m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（地床炉）",
    scene: "矢作川右岸の埋没段丘",
    outstanding: [
      "★ 竪穴住居4つ見つかる！",
      "★ 広大な遺跡！",
      "★ 深鉢プレゼント！",
    ],
    image: image2,
    comment: [
      "渡刈町の広大な土地に位置しており、広々とした居住スペースが特徴の一つです。地床炉が備わったキッチンは日々の生活に便利さをもたらし、自然環境と調和した生活が可能です。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 6,
    name: "神明遺跡",
    describe: "鴛鴨の四角い家",
    location: "鴛鴨町神明ほか",
    size: 12,
    acreage: "4.5m	×	4.3m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "-",
    outstanding: ["★炉内土器敷あり！"],
    image: image2,
    comment: [
      "東名高速道路の建設をきっかけに発掘調査されました。炉内土器敷がユニークなポイントです。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 7,
    name: "万加田遺跡",
    describe: "籠川と矢作川ちかく平野のお家",
    location: "荒井町万加田",
    size: 17,
    acreage: "4.1m	×	3.9m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川中流左岸",
    outstanding: ["★ 珍しい勾玉プレゼント！", "★ 石器プレゼント！"],
    image: image2,
    comment: [
      "矢作川と籠川に挟まれた豊かな自然環境に恵まれた地域に位置します。勾玉や石器が多くあり、文化の豊かさを感じられます。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 8,
    name: "船塚遺跡",
    describe: "越戸駅すぐの土偶と暮らせるお家",
    location: "越戸町下能田",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "-",
    scene: "矢作川中流左岸",
    outstanding: [
      "★ ありがたい土偶と暮らせます！",
      "★ 便利な黒曜石プレゼント！",
    ],
    image: image2,
    comment: [
      "越戸駅から西に500mの距離に位置するこの地域は、アクセスが良好で、周辺は自然が豊かです。公共の交通機関の利便性と自然環境のバランスが取れた理想的な立地条件を持っています。家の中にはありがたい土偶が安置されており、古代からの力を感じることができます。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 9,
    name: "水汲遺跡",
    describe: "信州からお婿さんが来る！異文化に触れられるお家",
    location: "下川口水汲ほか",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川上流",
    outstanding: [
      "★ 信州からお婿さん来ます！",
      "★ 新しい土器の模様が学べます！",
      "★ 石を並べて何か表現できます！",
      "★ 45252点 243kgの豪華な道具付き",
    ],
    image: image2,
    comment: [
      "矢作川上流の激流近くに位置し、山々に囲まれた豊かな自然環境です。季節の移ろいを感じることができる生活が魅力です。",
      "信州から来たお婿さんが持ち込んだ新しい土器の模様があってね、それがまた文化的な深みを加えているんですよ。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 10,
    name: "西樫尾町大麦田遺跡",
    describe: "冷蔵庫付き！切山川沿いのお家",
    location: "西樫尾町大麦田",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "-",
    scene: "切山川近く山並みに挟まれた谷底地形",
    outstanding: [
      "★ 冷蔵庫（貯蔵穴）付き！",
      "★ 珍しい耳飾りあり！",
      "★ 84点の石器などをプレゼント！",
    ],
    image: image2,
    comment: [
      "切山川の近くにあり、山並みに囲まれた谷底地形で、静かで秘密めいた感じがする場所です。自然の恵みが豊かで、周囲の環境からは季節ごとの変化を感じ取ることができます。",
      "豊田スタジアムのすぐそばに位置しているため、スポーツやイベントが楽しめる環境です。また、矢作川が近くに流れており、川沿いを散歩するのが日課です。公園も整備されており、家族でのんびりと過ごすには最適な場所です。",
    ],
    time: "",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 11,
    name: "日陰田遺跡",
    describe: "山並みに囲まれた谷底の貯蔵穴付き住居",
    location: "中立町日陰田ほか",
    size: 8,
    acreage: "3.9m	×	3.4m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "山並みに挟まれた谷底地形の東向き傾斜地",
    outstanding: [
      "★ 貴重な冷蔵庫付き！",
      "★入居者特典：数百のトチやドングリをプレゼント！",
    ],
    image: image2,
    comment: [
      "今回紹介する日陰田遺跡は、山並みに囲まれた谷底に位置する静かな住居です。東向きの傾斜地にあるため、朝日をしっかりと浴びることができます。竪穴住居には貯蔵穴があり、トチやドングリなどの食糧を長期保存することが可能です。自然の恵みを享受しながら、ゆったりとした生活をお楽しみいただけます",
      "竪穴住居であるため、夏は涼しく冬は暖かく過ごせます。住居内には貯蔵穴があり、トチやドングリをたくさん保存できるので、長期的に食糧の心配がありません。住まいの中には、どっしりとした安定感があり、家族全員が安心して生活できます。",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 12,
    name: "沢尻遺跡",
    describe: "緩やかな台地上に立つ一軒家",
    location: "塩ノ沢町沢尻ほか",
    size: 14,
    acreage: "4.9m	×	4.6m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川中流左岸",
    outstanding: ["★ 台地上で風通り抜群！", "★ 豆の栽培体験ができるかも？"],
    image: image2,
    comment: [
      "台地上の緩やかな傾斜に位置しているため、自然の風通しが良く、常に心地よい風が吹き抜けています。狭い谷間の地形に囲まれているので、静かで穏やかな環境が広がっています。",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 13,
    name: "宮ノ後遺跡",
    describe: "巴川と足助川の合流地点に佇む住居",
    location: "足助町宮ノ後",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "-",
    scene: "巴川と足助川の合流地点",
    outstanding: ["★ 足助八幡宮からすぐ！"],
    image: image2,
    comment: [
      "水のせせらぎが常に心地よく響いています。近くには足助八幡宮があり、日々の生活に安らぎをもたらしてくれます。季節ごとに変わる川沿いの風景が美しく、自然との調和を感じられる場所です。",
    ],
    time: "足助八幡宮近く",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 14,
    name: "今朝平遺跡",
    describe: "足助地区の中心街すぐの一軒家",
    location: "足助町久井戸町ほか",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "-",
    scene: "足助地区の中心街近く、足助川下流の右岸",
    outstanding: [
      "★ 足助地区の中心街すぐ！",
      "★ ありがたい縄文のビーナスと暮らせます！",
      "★ 土偶が多数（22つ）",
    ],
    image: image2,
    comment: [
      "足助川の下流に位置しており、川の流れが穏やかで美しいです。中心街にも近く、自然の中にいながらも便利な生活を送ることができます。縄文のビーナスや多数の土偶、耳飾りが発見された場所であり、歴史と文化が息づく特別な住まいです。",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 15,
    name: "大屋敷遺跡",
    describe: "古代からのエネルギーを感じる巴川近くの一軒家",
    location: "川面町大屋敷ほか",
    size: 0,
    acreage: "-",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "大きくカーブする巴川の支流",
    outstanding: ["★ たくさん石が並んでます！（配石遺構）"],
    image: image2,
    comment: [
      "住居は大きくカーブする巴川の支流沿いに位置しており、水辺の景色がとても美しいです。大きな配石遺構があり、特にこぶしの石が80cmもあるので、力強い存在感があります。これらの石は古代からのエネルギーを感じさせ、生活に活力を与えてくれます。",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 16,
    name: "上万場遺跡",
    describe: "珍しいコンロ付き一軒家",
    location: "浅谷町上万場ほか",
    size: 13,
    acreage: "4.8m	×	4.5m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（土器埋設炉）",
    scene: "?",
    outstanding: ["★ 珍しいコンロあり！"],
    image: image2,
    comment: [
      "珍しい土器埋設炉があります。古代の技術を感じさせるこの炉は、家全体に安定した温かさをもたらし、快適な生活をサポートします。",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 17,
    name: "大砂遺跡",
    describe: "神秘的なマムシの取手と古代装飾が魅力の住居",
    location: "下切町大砂",
    size: 12,
    acreage: "4.8m	×	4.0m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "矢作川右岸",
    outstanding: [
      "★ 在地の神明式という土器が学べます！",
      "★ 長野の文化（つり手、取手、装飾）を体験できます！",
      "★ 伊奈地方の唐草文も学べます！",
      "★ 土偶8つ、耳飾り3つをプレゼント！",
    ],
    image: image2,
    comment: [
      "神明式土器や唐草模様の装飾が施された土器があり、古代の思いを身近に感じられます。特に、マムシの顔の取手が付いた土器は珍しく神秘的です。自然豊かな環境で、歴史を感じながらのびのびと暮らせます。",
      "在地の縄文を学びながら、長野の文化にも触れられて楽しい毎日です！",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 18,
    name: "万場垣内遺跡",
    describe: "黒曜石が輝く三河山地の一軒家",
    location: "牛地町万場垣内ほか",
    size: 15,
    acreage: "5.0m	×	4.8m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "三河山地の矢作川の左岸",
    outstanding: ["★ 美しい黒曜石プレゼント！"],
    image: image2,
    comment: [
      "特に特徴的なのは、黒曜石が多く見られることです。星糞峠からの黒曜石は、光を受けてキラキラと輝く様子が美しいです。",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 19,
    name: "久保田遺跡",
    describe: "ダム湖近くの住吉の森に佇む竪穴住居",
    location: "牛地町久保田ほか",
    size: 8,
    acreage: " 4.0m	×	3.4m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（地床炉）",
    scene: "-",
    outstanding: ["★ ダムのすぐ近く！"],
    image: image2,
    comment: [
      "住吉の森に隣接しており、周囲は緑豊かな自然に囲まれています。近くにはダム湖があり、水辺の美しい風景を楽しむことができます。",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
  {
    id: 20,
    name: "ヒロノ遺跡",
    describe: "野入川を見渡す丘の上に佇む大型住居群",
    location: "大野瀬町ヒロノ",
    size: 8,
    acreage: " 4.0m	×	3.4m",
    home: "一戸建て・1K・1階",
    material: "木造、土ぶき",
    heater: "コンロあり（石囲炉）",
    scene: "野入川左岸の丘の上",
    outstanding: ["★ ありがたい石棒あり！"],
    image: image2,
    comment: [
      "野入川左岸の丘の上に位置する大型住居群です。竪穴住居が8つ並んでおり、広々とした空間で快適な生活を送ることができます。特に、この住居には大型の石棒が存在し、古代の力強いエネルギーを感じることができます。川沿いの美しい風景と古代の文化を感じながら、心豊かな生活を楽しむことができるこの物件で、新たな生活を始めてみませんか。",
    ],
    time: "アクセスxxx分",
    keyLocation: "",
    fridge: "",
    benefit: "",
  },
];
