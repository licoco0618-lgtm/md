/**
 * 商業概論一段複習測驗 - 資處一仁專屬練習網
 * Full Question Database, Responsive Mobile Interactivity & Audio Engine
 */

// ============================================================================
// 1. QUESTION DATABASE (完整 20 題試卷題庫)
// ============================================================================
const QUESTIONS_DB = [
  // 一、是非題 (1 - 3)
  {
    id: 1,
    type: '是非題',
    typeCode: 'tf',
    category: '商業保險',
    question: '煤礦工人罹患塵肺症，屬於「職業災害保險」的理賠範圍。',
    options: [
      { key: 'O', text: '○ 正確' },
      { key: 'X', text: '╳ 錯誤' }
    ],
    answer: 'O',
    explanation: '【正確】塵肺症為煤礦工人因長期暴露於高粉塵工作環境中所引發之嚴重職業病，依法屬於「職業災害保險」的法定給付與理賠保障範圍。',
    tags: ['保險種類', '職業災害保險'],
    isOrigMistake: false
  },
  {
    id: 2,
    type: '是非題',
    typeCode: 'tf',
    category: '商業保險',
    question: '保險契約中的保險人，是指負有繳交保險費義務的人。',
    options: [
      { key: 'O', text: '○ 正確' },
      { key: 'X', text: '╳ 錯誤' }
    ],
    answer: 'X',
    explanation: '【錯誤】負有繳交保險費義務的人是「要保人」；「保險人」是指經營保險事業並在事故發生時負責理賠保險金的組織（即保險公司）。',
    tags: ['保險關係人', '易混淆概念'],
    isOrigMistake: false
  },
  {
    id: 3,
    type: '是非題',
    typeCode: 'tf',
    category: '商業保險',
    question: '營養食品廠商保證其產品有助於排便順暢，若消費者食用後排便困難的狀況沒有明顯改善，則此符合「產品責任險」的理賠範圍。',
    options: [
      { key: 'O', text: '○ 正確' },
      { key: 'X', text: '╳ 錯誤' }
    ],
    answer: 'X',
    explanation: '【錯誤（原卷常錯陷阱題）】\n「產品責任險」承保的是產品因設計、製造或標示瑕疵，造成第三人受有「身體傷害、死亡或財物損失」的法律賠償責任。\n若產品僅是「效果不如預期（如排便沒有明顯改善）」，屬於商業效能或品質保證問題，並「不屬於」產品責任險的理賠範圍！',
    tags: ['產品責任險', '試卷標記錯題'],
    isOrigMistake: true
  },

  // 二、選擇題 (4 - 20)
  {
    id: 4,
    type: '選擇題',
    typeCode: 'mc',
    category: '企業倫理',
    question: '某企業制定了「重視市場反應，立即改善問題，提高客戶滿意度」的倫理規範，其所涉及的對象是',
    options: [
      { key: 'A', text: '股東' },
      { key: 'B', text: '供應商' },
      { key: 'C', text: '競爭者' },
      { key: 'D', text: '消費者' }
    ],
    answer: 'D',
    explanation: '【答案解析 (D)】\n「重視市場反應、改善產品質量、提高客戶滿意度」皆是企業對購買與使用其商品之「消費者（顧客）」所實踐的倫理規範與服務承諾。',
    tags: ['企業倫理', '利害關係人'],
    isOrigMistake: false
  },
  {
    id: 5,
    type: '選擇題',
    typeCode: 'mc',
    category: '企業社會責任',
    question: '某企業老闆說：「經營公司，只要讓員工有薪水、股東有錢賺，不違法不亂搞，符合社會期待，這樣就夠了」。上述中，該企業老闆並未提及',
    options: [
      { key: 'A', text: '自由裁量責任' },
      { key: 'B', text: '經濟責任' },
      { key: 'C', text: '倫理責任' },
      { key: 'D', text: '法律責任' }
    ],
    answer: 'A',
    explanation: '【答案解析 (A)】\n依卡羅（Carroll）企業社會責任（CSR）金字塔四大責任：\n• 員工有薪水、股東有錢賺 ➔ 經濟責任\n• 不違法不亂搞 ➔ 法律責任\n• 符合社會期待 ➔ 倫理責任\n題目中的老闆未提到任何自發性參與公益慈善或社會回饋的「自由裁量責任（慈善責任）」。',
    tags: ['Carroll金字塔', '必考重點'],
    isOrigMistake: false
  },
  {
    id: 6,
    type: '選擇題',
    typeCode: 'mc',
    category: '商業組織',
    question: '下列有關各種商業組織的敘述，何者有誤？',
    options: [
      { key: 'A', text: '合夥企業不具法人資格，有限合夥企業則具有法人資格' },
      { key: 'B', text: '有限公司由兩人以上股東組成' },
      { key: 'C', text: '獨資企業出資人對企業債務負無限責任' },
      { key: 'D', text: '成立股份有限公司必須依照公司法的規定' }
    ],
    answer: 'B',
    explanation: '【答案解析 (B)】\n依現行《公司法》修正後規定，有限公司由「一人以上」股東即可組織設立（故 B 稱兩人以上有誤）。\n補充：\n• (A) 正確：民法合夥無法人資格，有限合夥依法具有法人資格。\n• (C) 正確：獨資經營者對債務負無限清償責任。\n• (D) 正確：股份有限公司必須嚴格遵循公司法各項設立要件。',
    tags: ['商業組織', '公司法'],
    isOrigMistake: false
  },
  {
    id: 7,
    type: '選擇題',
    typeCode: 'mc',
    category: '企業社會責任',
    question: '諾貝爾經濟學獎得主傅立德曼(Milton Friedman)曾提出：「企業唯一的社會責任是在競爭環境下，為股東賺取最大的利潤」，試問其對社會責任的觀點與下列哪一時期的企業經理人對社會責任的觀點最為接近？',
    options: [
      { key: 'A', text: '商業責任時期' },
      { key: 'B', text: '管理者責任時期' },
      { key: 'C', text: '廠商責任時期' },
      { key: 'D', text: '個人責任時期' }
    ],
    answer: 'C',
    explanation: '【答案解析 (C)】\n企業社會責任發展階段：\n1. 個人責任時期：早期資本主義，強調個人良知與自利即公利。\n2. 廠商責任時期：古典觀點，代表人物即為傅立德曼，強調企業唯一職責是為股東謀取最大利潤。\n3. 管理者責任時期：經理人崛起，兼顧員工、顧客等多方利害關係人利益。\n4. 商業責任時期：當代全方位重視 ESG、社會福利與生態永續。',
    tags: ['CSR演進時期', '傅立德曼'],
    isOrigMistake: false
  },
  {
    id: 8,
    type: '選擇題',
    typeCode: 'mc',
    category: '企業社會責任',
    question: '下列敘述何者有誤？',
    options: [
      { key: 'A', text: '社會的問題，往往是企業發展的新機會' },
      { key: 'B', text: '消費者同樣應負有社會責任' },
      { key: 'C', text: '承擔責任須出於企業的自覺，企業應承擔無限的社會責任' },
      { key: 'D', text: '企業與社會之間存在共存共榮的關係' }
    ],
    answer: 'C',
    explanation: '【答案解析 (C)】\n企業並非慈善機關，資源與能力皆有限度，不能要求企業承擔「無限」的社會責任，否則會損及本業競爭力與股東生存權益。',
    tags: ['社會責任觀念'],
    isOrigMistake: false
  },
  {
    id: 9,
    type: '選擇題',
    typeCode: 'mc',
    category: '商業保險',
    question: '牛魔王開設一間牛排餐廳，某日悟空到此餐廳吃飯時，因地板油膩濕滑，不慎滑倒跌傷，悟空一氣之下告上法院，牛魔王也因此須賠償悟空100萬元。根據上述，請問牛魔王除了改善餐廳地板油膩濕滑的情況以外，並應投保下列何種保險，以降低風險？',
    options: [
      { key: 'A', text: '產品責任險' },
      { key: 'B', text: '公共意外責任險' },
      { key: 'C', text: '人壽保險' },
      { key: 'D', text: '職業災害保險' }
    ],
    answer: 'B',
    explanation: '【答案解析 (B)】\n顧客因餐廳（營業處所）內部設施不良或地板濕滑發生意外受傷，店家依法所負之賠償責任，屬於「公共意外責任險」的承保範圍。',
    tags: ['公共意外責任險', '情境實例'],
    isOrigMistake: false
  },
  {
    id: 10,
    type: '選擇題',
    typeCode: 'mc',
    category: '企業危機管理',
    question: '下列哪一項不屬於危機爆發期之危機處理作業？',
    options: [
      { key: 'A', text: '企業聲譽再造' },
      { key: 'B', text: '成立危機處理小組' },
      { key: 'C', text: '適時與媒體溝通' },
      { key: 'D', text: '有效與受害者進行協調談判' }
    ],
    answer: 'A',
    explanation: '【答案解析 (A)】\n危機處理三階段區分：\n• 爆發前（預防規劃）：弱點評估、應變計畫。\n• 爆發期（應變處理）：成立危機小組、即時媒體溝通、與受害者協調談判、控制損害。\n• 解決後（復原評估）：「企業聲譽再造」、檢討改善與制度重整。故 (A) 屬於事後復原階段。',
    tags: ['危機管理三階段', '聲譽再造'],
    isOrigMistake: false
  },
  {
    id: 11,
    type: '選擇題',
    typeCode: 'mc',
    category: '企業危機管理',
    question: '下列何者不是危機發生前的重要工作項目？',
    options: [
      { key: 'A', text: '補強弱點預防危機發生' },
      { key: 'B', text: '認知與評估企業的弱點' },
      { key: 'C', text: '事先擬妥危機應變計畫' },
      { key: 'D', text: '建立危機處理連絡通報系統' }
    ],
    answer: 'D',
    explanation: '【答案解析 (D)（原卷標記錯題）】\n在高中職商業概論課本中，危機發生前的工作重點在於「自我評估弱點、擬定危機劇本與預防補強措施」；而「建立與啟動危機處理連絡通報系統」在教學分類上被歸為危機發生時/爆發時應變的作業架構。原試卷標準答案為 (D)。',
    tags: ['危機預防', '試卷標記錯題'],
    isOrigMistake: true
  },
  {
    id: 12,
    type: '選擇題',
    typeCode: 'mc',
    category: '商業保險',
    question: '在保險契約中，保險人通常是指',
    options: [
      { key: 'A', text: '經營保險事業的組織' },
      { key: 'B', text: '付保費的人' },
      { key: 'C', text: '買保險的人' },
      { key: 'D', text: '領保險金的受益者' }
    ],
    answer: 'A',
    explanation: '【答案解析 (A)】\n重要保險法律角色辨析：\n• 保險人：經營保險事業，收取保費並承擔危險賠償責任的組織（如國泰人壽、富邦產險）。\n• 要保人：向保險人申請投保並負有「繳付保費」義務的人。\n• 被保險人：受保險保障，保險事故發生時享有理賠請求權的人。\n• 受益人：享有領取保險金權利的人。',
    tags: ['保險關係人', '名詞定義'],
    isOrigMistake: false
  },
  {
    id: 13,
    type: '選擇題',
    typeCode: 'mc',
    category: '商業發展史',
    question: '在經濟發達的北宋時期，由於人們在交易時攜帶大量銅錢極為不便，因此，此時期出現了中國歷史上最早的紙幣，稱為',
    options: [
      { key: 'A', text: '寶鈔' },
      { key: 'B', text: '交子' },
      { key: 'C', text: '開金券' },
      { key: 'D', text: '至元鈔' }
    ],
    answer: 'B',
    explanation: '【答案解析 (B)】\n北宋初年在四川成都地區出現的「交子」，是中國也是世界上最早發行的紙幣。',
    tags: ['商業史', '紙幣起源'],
    isOrigMistake: false
  },
  {
    id: 14,
    type: '選擇題',
    typeCode: 'mc',
    category: '商業保險',
    question: '花田一路的媽媽吃了某藥廠生產的減肥藥之後，引發輕微的中風，試問上例是符合哪一種保險的理賠範圍？',
    options: [
      { key: 'A', text: '陸空保險' },
      { key: 'B', text: '公共意外責任險' },
      { key: 'C', text: '職業災害保險' },
      { key: 'D', text: '產品責任險' }
    ],
    answer: 'D',
    explanation: '【答案解析 (D)】\n減肥藥（產品）因為缺陷或不良副作用，導致消費者身體遭受中風（體傷），依法藥廠應負賠償責任，屬於「產品責任險」之理賠範圍。',
    tags: ['產品責任險', '情境實例'],
    isOrigMistake: false
  },
  {
    id: 15,
    type: '選擇題',
    typeCode: 'mc',
    category: '企業社會責任',
    question: '中華電信因應新興業務發展，提供了 1,600 個就業機會，部分職缺起薪為 3.5 萬元，吸引不少應屆畢業生前往應徵。請問中華電信在上述情形中，善盡了哪一種社會責任？',
    options: [
      { key: 'A', text: '經濟責任' },
      { key: 'B', text: '倫理責任' },
      { key: 'C', text: '法律責任' },
      { key: 'D', text: '自由裁量責任' }
    ],
    answer: 'A',
    explanation: '【答案解析 (A)】\n企業透過提供商品、開創工作機會、發放薪資以創造商業價值，是企業立足最基礎、最底層的「經濟責任」。',
    tags: ['Carroll金字塔', '經濟責任'],
    isOrigMistake: false
  },
  {
    id: 16,
    type: '選擇題',
    typeCode: 'mc',
    category: '企業危機管理',
    question: '日本豐田汽車公司因油門踏板零件設計與油電車煞車系統出現瑕疵問題，但未在黃金時間處理，經媒體揭發後才宣布召回上百萬輛汽車，此舉不僅造成該公司市值跌近六千億台幣，也導致該公司形象與聲譽嚴重受損。以上敘述顯示該企業在進行危機處理時，忽略了哪一項原則？',
    options: [
      { key: 'A', text: '靈活性原則' },
      { key: 'B', text: '統一性原則' },
      { key: 'C', text: '真實性原則' },
      { key: 'D', text: '即時性原則' }
    ],
    answer: 'D',
    explanation: '【答案解析 (D)】\n豐田汽車未在事故爆發初期的「黃金時間」主動迅速應對，延誤時機，違反了危機處理中的「即時性原則（迅速處理原則）」。',
    tags: ['危機處理原則', '即時性原則'],
    isOrigMistake: false
  },
  {
    id: 17,
    type: '選擇題',
    typeCode: 'mc',
    category: '商業保險',
    question: '假設某公共場所業主投保公共意外責任險的內容為：每一個人身體傷亡 300 萬元、每一意外事故傷亡 1,500 萬元、每一意外事故財物損失 100 萬元、保險期間最高賠償金額 4,000 萬元。請問有關於此公共場所投保之公共意外責任險的賠償金額，下列敘述何者正確？',
    options: [
      { key: 'A', text: '賠償給單一受害人的保險金額上限為 4,000 萬元' },
      { key: 'B', text: '賠償給所有受害人的保險金額加總上限為 1,800 萬元' },
      { key: 'C', text: '賠償所有財物損失的保險金額加總上限為 100 萬元' },
      { key: 'D', text: '保險期間內賠償所有意外事故的保險金額加總上限為 4,900 萬元' }
    ],
    answer: 'C',
    explanation: '【答案解析 (C)】\n保險契約保額判讀：\n• (A) 錯誤：單一受害人身亡上限為 300 萬元。\n• (B) 錯誤：單一意外事故所有受害人傷亡上限為 1,500 萬元。\n• (C) 正確：每一事故財損加總上限為 100 萬元。\n• (D) 錯誤：保險期間全部累積最高賠償上限為 4,000 萬元。',
    tags: ['公共意外責任險', '保險金額計算'],
    isOrigMistake: false
  },
  {
    id: 18,
    type: '選擇題',
    typeCode: 'mc',
    category: '現代商業特質',
    question: '震日集團在公司網站上刊登「我們提供良好的工作環境，讓同仁發揮所長，同時用心照顧同仁，讓同仁無後顧之憂。」以上敘述主要是在強調該公司的經營具有哪一項現代商業的特質？',
    options: [
      { key: 'A', text: '經營多元化' },
      { key: 'B', text: '管理人性化' },
      { key: 'C', text: '經營領域國際化' },
      { key: 'D', text: '資本大眾化' }
    ],
    answer: 'B',
    explanation: '【答案解析 (B)】\n照顧同仁福祉、打造友善互信的工作環境，使同仁盡展所長，體現現代商業講求尊重員工、激勵潛能的「管理人性化」特質。',
    tags: ['現代商業特質', '管理人性化'],
    isOrigMistake: false
  },
  {
    id: 19,
    type: '選擇題',
    typeCode: 'mc',
    category: '商業經營要素',
    question: '手搖飲料店珍煮丹的黑糖珍珠鮮奶、博士倫公司的隱形眼鏡，屬於商業經營中的何項基本要素？',
    options: [
      { key: 'A', text: '商品' },
      { key: 'B', text: '商業信用' },
      { key: 'C', text: '資本' },
      { key: 'D', text: '努力' }
    ],
    answer: 'A',
    explanation: '【答案解析 (A)】\n商業經營四大要素為：商品、商業信用、資本、努力（人力）。\n黑糖珍珠鮮奶與隱形眼鏡均為供買賣以滿足消費者實質需求的具體「商品」。',
    tags: ['商業經營四要素', '商品'],
    isOrigMistake: false
  },
  {
    id: 20,
    type: '選擇題',
    typeCode: 'mc',
    category: '商業經營要素',
    question: '鴻海等企業在研發新技術之後會申請專利權，以保障其在法律上的權益，試問專利權屬於商業經營中的何項基本要素？',
    options: [
      { key: 'A', text: '商品' },
      { key: 'B', text: '商業信用' },
      { key: 'C', text: '努力' },
      { key: 'D', text: '資本' }
    ],
    answer: 'D',
    explanation: '【答案解析 (D)】\n專利權、商標權等為企業研發投資形成之智慧財產與無形資產，在商業經營四大基本要素中歸屬於「資本」（無形資本）。',
    tags: ['商業經營四要素', '資本'],
    isOrigMistake: false
  }
];

// ============================================================================
// 2. AUDIO SYNTHESIS & SOUND EFFECTS ENGINE (Web Audio API)
// ============================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('sound_enabled') !== 'false';
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('sound_enabled', this.enabled);
    return this.enabled;
  }

  playTone(freq, duration, type = 'sine', delay = 0) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const startTime = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.05);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  playCorrect() {
    // Joyful ascending chime (C5 -> E5 -> G5)
    this.playTone(523.25, 0.12, 'sine', 0);
    this.playTone(659.25, 0.15, 'sine', 0.08);
    this.playTone(783.99, 0.25, 'triangle', 0.16);
  }

  playWrong() {
    // Gentle low double boop
    this.playTone(220, 0.12, 'sawtooth', 0);
    this.playTone(180, 0.2, 'sawtooth', 0.1);
  }

  playFanfare() {
    // Victory fanfare chords
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, idx) => {
      this.playTone(f, 0.25, 'triangle', idx * 0.1);
    });
    setTimeout(() => {
      this.playTone(1046.5, 0.5, 'sine', 0);
      this.playTone(1318.5, 0.6, 'sine', 0.05);
    }, 450);
  }
}

const sounds = new SoundEffects();

// Haptic feedback helper
function vibratePhone(pattern = 35) {
  if (navigator && navigator.vibrate) {
    try {
      navigator.vibrate(pattern);
    } catch (e) {
      // Ignored if not permitted
    }
  }
}

// ============================================================================
// 3. CONFETTI EFFECT ENGINE
// ============================================================================
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(duration = 2500) {
    this.resize();
    const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#8b5cf6'];
    const count = 75;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height * 0.4,
        w: Math.random() * 9 + 4,
        h: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 4 + 2,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        opacity: 1
      });
    }

    if (!this.animId) this.animate();
    setTimeout(() => {
      this.particles = [];
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }, duration);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rot * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      this.ctx.restore();
    });

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.animate());
    }
  }
}

let confetti = null;

// ============================================================================
// 4. MAIN APP STATE & CONTROLLER
// ============================================================================
class ExamApp {
  constructor() {
    this.questions = [...QUESTIONS_DB];
    this.currentIndex = 0;
    this.userAnswers = {}; // { qId: { chosen: 'A', isCorrect: true } }
    this.bookmarkedIds = new Set(JSON.parse(localStorage.getItem('bookmarks') || '[]'));
    this.userMistakes = new Set(JSON.parse(localStorage.getItem('user_mistakes') || '[]'));

    // Exam Mode State
    this.examActive = false;
    this.examTimer = null;
    this.examSecondsLeft = 20 * 60; // 20 minutes
    this.examAnswers = {}; // { qId: chosenKey }
    this.examStartTime = null;

    this.initDOM();
    this.bindEvents();
    this.renderPracticeCard();
    this.updateMistakeBadge();
  }

  initDOM() {
    // Theme setup
    const savedTheme = localStorage.getItem('app_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateSoundBtnUI();

    confetti = new ConfettiEngine('confetti-canvas');
  }

  updateSoundBtnUI() {
    const btn = document.getElementById('btn-sound-toggle');
    if (sounds.enabled) {
      btn.style.opacity = '1';
      btn.classList.add('sound-on');
    } else {
      btn.style.opacity = '0.4';
      btn.classList.remove('sound-on');
    }
  }

  bindEvents() {
    // Theme toggle
    document.getElementById('btn-theme-toggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('app_theme', next);
      vibratePhone(25);
    });

    // Sound toggle
    document.getElementById('btn-sound-toggle').addEventListener('click', () => {
      sounds.toggle();
      this.updateSoundBtnUI();
      if (sounds.enabled) sounds.playCorrect();
      vibratePhone(25);
    });

    // Tab Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.dataset.tab;
        this.switchTab(tab);
        vibratePhone(25);
      });
    });

    // Practice controls
    document.getElementById('btn-prev-q').addEventListener('click', () => this.navigateQuestion(-1));
    document.getElementById('btn-next-q').addEventListener('click', () => this.navigateQuestion(1));
    document.getElementById('btn-toggle-explain').addEventListener('click', () => {
      const box = document.getElementById('card-explanation');
      box.classList.toggle('hidden');
      vibratePhone(20);
    });

    document.getElementById('btn-shuffle-practice').addEventListener('click', () => {
      this.shuffleQuestions();
      vibratePhone(35);
    });

    document.getElementById('btn-bookmark-current').addEventListener('click', () => {
      this.toggleBookmarkCurrent();
    });

    // Drawer controls
    document.getElementById('btn-open-grid').addEventListener('click', () => this.openDrawer());
    document.getElementById('btn-close-drawer').addEventListener('click', () => this.closeDrawer());
    document.getElementById('drawer-backdrop').addEventListener('click', () => this.closeDrawer());

    // Exam Mode Buttons
    document.getElementById('btn-start-exam').addEventListener('click', () => this.startExam());
    document.getElementById('btn-submit-exam').addEventListener('click', () => this.confirmSubmitExam());
    document.getElementById('btn-submit-exam-bottom').addEventListener('click', () => this.confirmSubmitExam());
    document.getElementById('btn-retake-exam').addEventListener('click', () => this.startExam());
    document.getElementById('btn-review-exam-mistakes').addEventListener('click', () => this.filterExamReviewMistakes());

    // Mistakes Filter Buttons
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.renderMistakesList(chip.dataset.filter);
        vibratePhone(20);
      });
    });
  }

  switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');

    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`view-${tabName}`).classList.add('active');

    if (tabName === 'mistakes') {
      const activeFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
      this.renderMistakesList(activeFilter);
    }
  }

  // ==========================================================================
  // PRACTICE CARD MODE
  // ==========================================================================
  renderPracticeCard() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    // Update Progress bar & Numbers
    document.getElementById('current-q-num').textContent = this.currentIndex + 1;
    const progressPct = ((this.currentIndex + 1) / this.questions.length) * 100;
    document.getElementById('practice-progress-fill').style.width = `${progressPct}%`;

    // Accuracy
    const answeredCount = Object.keys(this.userAnswers).length;
    if (answeredCount > 0) {
      const correctCount = Object.values(this.userAnswers).filter(a => a.isCorrect).length;
      const acc = Math.round((correctCount / answeredCount) * 100);
      document.getElementById('practice-accuracy').textContent = `答對率: ${acc}%`;
    } else {
      document.getElementById('practice-accuracy').textContent = `尚未作答`;
    }

    // Card Meta
    document.getElementById('card-category').textContent = q.category;
    document.getElementById('card-type').textContent = q.type;
    document.getElementById('card-question-text').textContent = `${q.id}. ${q.question}`;

    // Bookmark status
    const isBookmarked = this.bookmarkedIds.has(q.id);
    const bmBtn = document.getElementById('btn-bookmark-current');
    const bmIcon = document.getElementById('bookmark-icon');
    if (isBookmarked) {
      bmIcon.textContent = '★';
      bmBtn.classList.add('active');
    } else {
      bmIcon.textContent = '☆';
      bmBtn.classList.remove('active');
    }

    // Render Options
    const optContainer = document.getElementById('card-options');
    optContainer.innerHTML = '';

    const answered = this.userAnswers[q.id];

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.dataset.key = opt.key;

      if (answered) {
        btn.classList.add('disabled');
        if (opt.key === q.answer) {
          btn.classList.add('correct');
        } else if (opt.key === answered.chosen) {
          btn.classList.add('wrong');
        }
      }

      btn.innerHTML = `
        <span class="opt-key">${opt.key}</span>
        <span class="opt-text">${opt.text}</span>
      `;

      btn.addEventListener('click', () => this.handlePracticeAnswer(opt.key));
      optContainer.appendChild(btn);
    });

    // Explanation Box
    const explainBox = document.getElementById('card-explanation');
    if (answered) {
      explainBox.classList.remove('hidden');
      const statusEl = document.getElementById('explain-status');
      if (answered.isCorrect) {
        statusEl.className = 'status-indicator pass';
        statusEl.textContent = '🎉 答對了！';
      } else {
        statusEl.className = 'status-indicator fail';
        statusEl.textContent = '❌ 答錯了，請看解析！';
      }
      document.getElementById('explain-correct-key').textContent = q.answer;
      document.getElementById('explain-body').textContent = q.explanation;
    } else {
      explainBox.classList.add('hidden');
      document.getElementById('explain-correct-key').textContent = q.answer;
      document.getElementById('explain-body').textContent = q.explanation;
    }

    // Nav controls
    document.getElementById('btn-prev-q').disabled = this.currentIndex === 0;
    const nextBtn = document.getElementById('btn-next-q');
    if (this.currentIndex === this.questions.length - 1) {
      nextBtn.innerHTML = `<span>完成測驗</span>`;
    } else {
      nextBtn.innerHTML = `<span>下一題</span> <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`;
    }
  }

  handlePracticeAnswer(chosenKey) {
    const q = this.questions[this.currentIndex];
    if (this.userAnswers[q.id]) return; // already answered

    const isCorrect = chosenKey === q.answer;
    this.userAnswers[q.id] = { chosen: chosenKey, isCorrect };

    if (isCorrect) {
      sounds.playCorrect();
      vibratePhone(40);
    } else {
      sounds.playWrong();
      vibratePhone([40, 60, 40]);
      this.userMistakes.add(q.id);
      localStorage.setItem('user_mistakes', JSON.stringify([...this.userMistakes]));
      this.updateMistakeBadge();
    }

    this.renderPracticeCard();
  }

  navigateQuestion(delta) {
    const newIdx = this.currentIndex + delta;
    if (newIdx >= 0 && newIdx < this.questions.length) {
      this.currentIndex = newIdx;
      this.renderPracticeCard();
      vibratePhone(20);
    } else if (newIdx >= this.questions.length) {
      // Completed last question
      confetti.fire(3000);
      sounds.playFanfare();
      alert('恭喜你完成了全部 20 題練習！可前往「全卷模考」挑戰 20 分鐘計時測驗！');
    }
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
    this.currentIndex = 0;
    this.renderPracticeCard();
    alert('題序已隨機打亂，可加強記憶防止死記題號順序！');
  }

  toggleBookmarkCurrent() {
    const q = this.questions[this.currentIndex];
    if (this.bookmarkedIds.has(q.id)) {
      this.bookmarkedIds.delete(q.id);
    } else {
      this.bookmarkedIds.add(q.id);
    }
    localStorage.setItem('bookmarks', JSON.stringify([...this.bookmarkedIds]));
    this.renderPracticeCard();
    vibratePhone(30);
  }

  // Question Grid Drawer
  openDrawer() {
    this.renderDrawerGrid();
    document.getElementById('question-drawer').classList.add('open');
    document.getElementById('drawer-backdrop').classList.remove('hidden');
  }

  closeDrawer() {
    document.getElementById('question-drawer').classList.remove('open');
    document.getElementById('drawer-backdrop').classList.add('hidden');
  }

  renderDrawerGrid() {
    const container = document.getElementById('drawer-grid-container');
    container.innerHTML = '';

    this.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'drawer-q-btn';
      btn.textContent = q.id;

      if (idx === this.currentIndex) btn.classList.add('current');

      const ans = this.userAnswers[q.id];
      if (ans) {
        if (ans.isCorrect) btn.classList.add('correct');
        else btn.classList.add('wrong');
      }

      btn.addEventListener('click', () => {
        this.currentIndex = idx;
        this.renderPracticeCard();
        this.closeDrawer();
        vibratePhone(20);
      });

      container.appendChild(btn);
    });
  }

  updateMistakeBadge() {
    const badge = document.getElementById('mistake-badge');
    const count = this.userMistakes.size;
    if (count > 0) {
      badge.textContent = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  // ==========================================================================
  // EXAM SIMULATION MODE
  // ==========================================================================
  startExam() {
    this.examActive = true;
    this.examSecondsLeft = 20 * 60;
    this.examAnswers = {};
    this.examStartTime = Date.now();

    document.getElementById('exam-start-banner').classList.add('hidden');
    document.getElementById('exam-result-area').classList.add('hidden');
    document.getElementById('exam-active-area').classList.remove('hidden');

    this.renderExamQuestionsList();
    this.startExamTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    vibratePhone(50);
  }

  startExamTimer() {
    if (this.examTimer) clearInterval(this.examTimer);

    const timerDisplay = document.getElementById('exam-timer-display');
    const timerWrap = timerDisplay.parentElement;

    const tick = () => {
      const min = Math.floor(this.examSecondsLeft / 60);
      const sec = this.examSecondsLeft % 60;
      timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

      if (this.examSecondsLeft <= 180) { // Last 3 minutes
        timerWrap.classList.add('warning');
      } else {
        timerWrap.classList.remove('warning');
      }

      if (this.examSecondsLeft <= 0) {
        clearInterval(this.examTimer);
        alert('時間結束！系統將為您自動交卷。');
        this.calculateAndShowExamResult();
      } else {
        this.examSecondsLeft--;
      }
    };

    tick();
    this.examTimer = setInterval(tick, 1000);
  }

  renderExamQuestionsList() {
    const listContainer = document.getElementById('exam-list-container');
    listContainer.innerHTML = '';

    QUESTIONS_DB.forEach((q, idx) => {
      const qBlock = document.createElement('div');
      qBlock.className = 'exam-q-block';
      qBlock.id = `exam-q-${q.id}`;

      let optionsHTML = '';
      q.options.forEach(opt => {
        optionsHTML += `
          <label class="exam-opt-label" data-qid="${q.id}" data-key="${opt.key}">
            <input type="radio" name="exam_q_${q.id}" value="${opt.key}" class="exam-opt-radio">
            <span class="exam-opt-key">(${opt.key})</span>
            <span class="exam-opt-text">${opt.text}</span>
          </label>
        `;
      });

      qBlock.innerHTML = `
        <div class="exam-q-header">
          <span class="exam-q-num">第 ${q.id} 題 (${q.type})</span>
          <span class="category-pill">${q.category}</span>
        </div>
        <div class="exam-q-text">${q.question}</div>
        <div class="exam-options-grid">${optionsHTML}</div>
      `;

      listContainer.appendChild(qBlock);
    });

    // Listen to option selection
    listContainer.querySelectorAll('.exam-opt-label').forEach(label => {
      label.addEventListener('click', (e) => {
        const qid = label.dataset.qid;
        const key = label.dataset.key;
        this.examAnswers[qid] = key;

        // update UI classes
        const parentGrid = label.parentElement;
        parentGrid.querySelectorAll('.exam-opt-label').forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
        label.querySelector('input').checked = true;

        // update count
        document.getElementById('exam-answered-count').textContent = Object.keys(this.examAnswers).length;
        vibratePhone(15);
      });
    });
  }

  confirmSubmitExam() {
    const answeredCount = Object.keys(this.examAnswers).length;
    const totalCount = QUESTIONS_DB.length;

    let confirmMsg = `您已作答 ${answeredCount} / ${totalCount} 題，確定要交卷評分嗎？`;
    if (answeredCount < totalCount) {
      confirmMsg = `⚠️ 尚有 ${totalCount - answeredCount} 題未作答！\n確定要現在交卷評分嗎？`;
    }

    if (confirm(confirmMsg)) {
      this.calculateAndShowExamResult();
    }
  }

  calculateAndShowExamResult() {
    if (this.examTimer) clearInterval(this.examTimer);
    this.examActive = false;

    const timeSpentSec = Math.floor((Date.now() - this.examStartTime) / 1000);
    const min = Math.floor(timeSpentSec / 60);
    const sec = timeSpentSec % 60;
    const timeFormatted = `${String(min).padStart(2, '0')}分${String(sec).padStart(2, '0')}秒`;

    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    QUESTIONS_DB.forEach(q => {
      const chosen = this.examAnswers[q.id];
      if (!chosen) {
        skippedCount++;
      } else if (chosen === q.answer) {
        score += 5; // 5 points per question
        correctCount++;
      } else {
        wrongCount++;
        this.userMistakes.add(q.id);
      }
    });

    localStorage.setItem('user_mistakes', JSON.stringify([...this.userMistakes]));
    this.updateMistakeBadge();

    // Render result card
    document.getElementById('exam-active-area').classList.add('hidden');
    document.getElementById('exam-result-area').classList.remove('hidden');

    document.getElementById('result-score').textContent = score;
    document.getElementById('result-correct-count').textContent = `${correctCount} 題`;
    document.getElementById('result-wrong-count').textContent = `${wrongCount} 題`;
    document.getElementById('result-skipped-count').textContent = `${skippedCount} 題`;
    document.getElementById('result-time-taken').textContent = timeFormatted;

    const titleEl = document.getElementById('result-title');
    const feedbackEl = document.getElementById('result-feedback');

    if (score === 100) {
      titleEl.textContent = '🏆 滿分！商概第一名！';
      feedbackEl.textContent = '恭喜你全對！對一段商業概論的核心概念已達爐火純青，段考必拿高分！';
      confetti.fire(4000);
      sounds.playFanfare();
    } else if (score >= 90) {
      titleEl.textContent = '🌟 實力頂尖！成績極佳！';
      feedbackEl.textContent = `你的得分是 ${score} 分！與資處一仁試卷同學（90分）平分秋色或更強，快針對錯題補強朝 100 滿分邁進！`;
      confetti.fire(2500);
      sounds.playCorrect();
    } else if (score >= 70) {
      titleEl.textContent = '👍 表現不錯！基礎穩固！';
      feedbackEl.textContent = `得分 ${score} 分！及格且表現良好，將錯題與考點速記多看兩遍就能更上一層樓！`;
      sounds.playCorrect();
    } else {
      titleEl.textContent = '💪 還需加把勁！多加練習！';
      feedbackEl.textContent = `得分 ${score} 分！建議先點選上方「考點速記」熟悉常考概念，再重新挑戰！`;
      sounds.playWrong();
    }

    this.renderExamReviewList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderExamReviewList(onlyMistakes = false) {
    const reviewContainer = document.getElementById('exam-review-container');
    reviewContainer.innerHTML = '';

    QUESTIONS_DB.forEach(q => {
      const chosen = this.examAnswers[q.id];
      const isCorrect = chosen === q.answer;

      if (onlyMistakes && isCorrect) return; // filter out correct

      const card = document.createElement('div');
      card.className = `mistake-card ${!isCorrect ? 'orig-mistake' : ''}`;

      let statusBadge = '';
      if (!chosen) {
        statusBadge = `<span class="orig-tag" style="background:#fee2e2;color:#991b1b">未作答</span>`;
      } else if (isCorrect) {
        statusBadge = `<span class="category-pill" style="background:#dcfce7;color:#166534">答對 (+5分)</span>`;
      } else {
        statusBadge = `<span class="orig-tag">答錯 (-5分)</span>`;
      }

      card.innerHTML = `
        <div class="mistake-badge-row">
          <span class="type-pill">${q.type} 第 ${q.id} 題</span>
          <span class="category-pill">${q.category}</span>
          ${statusBadge}
        </div>
        <div class="q-title" style="font-size:0.98rem;margin-bottom:10px;">${q.question}</div>
        <div style="font-size:0.88rem;margin-bottom:8px;">
          <span>你的選擇：<strong style="color:${isCorrect ? '#10b981' : '#f43f5e'}">${chosen || '未作答'}</strong></span>
          <span style="margin-left:16px;">正確解答：<strong style="color:#10b981">${q.answer}</strong></span>
        </div>
        <div class="note-callout" style="margin-top:8px;">
          ${q.explanation}
        </div>
      `;

      reviewContainer.appendChild(card);
    });
  }

  filterExamReviewMistakes() {
    this.renderExamReviewList(true);
    vibratePhone(25);
  }

  // ==========================================================================
  // MISTAKE NOTEBOOK VIEW
  // ==========================================================================
  renderMistakesList(filter = 'all') {
    const container = document.getElementById('mistakes-list');
    container.innerHTML = '';

    let list = [];

    if (filter === 'exam-original') {
      // Questions 3 & 11 (the original test paper mistakes)
      list = QUESTIONS_DB.filter(q => q.isOrigMistake);
    } else if (filter === 'bookmarked') {
      list = QUESTIONS_DB.filter(q => this.bookmarkedIds.has(q.id));
    } else {
      // All mistakes: original exam mistakes + user session mistakes
      const set = new Set([...this.userMistakes, 3, 11]);
      list = QUESTIONS_DB.filter(q => set.has(q.id));
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">✨</div>
          <h3>目前沒有任何錯題或收藏！</h3>
          <p>持續刷題，如果遇到答錯的題目會自動為您收入此處。</p>
        </div>
      `;
      return;
    }

    list.forEach(q => {
      const card = document.createElement('div');
      card.className = `mistake-card ${q.isOrigMistake ? 'orig-mistake' : ''}`;

      let tagsHTML = `<span class="category-pill">${q.category}</span>`;
      if (q.isOrigMistake) {
        tagsHTML += `<span class="orig-tag">試卷原標記錯題</span>`;
      }
      if (this.bookmarkedIds.has(q.id)) {
        tagsHTML += `<span class="banner-badge" style="background:#fef3c7;color:#b45309">已收藏</span>`;
      }

      let optionsListHTML = '';
      q.options.forEach(opt => {
        const isRight = opt.key === q.answer;
        optionsListHTML += `
          <div style="font-size:0.86rem;color:${isRight ? '#10b981' : 'var(--text-secondary)'};font-weight:${isRight ? '700' : 'normal'};">
            (${opt.key}) ${opt.text} ${isRight ? '✓ (正確答案)' : ''}
          </div>
        `;
      });

      card.innerHTML = `
        <div class="mistake-badge-row">
          <span class="type-pill">第 ${q.id} 題 (${q.type})</span>
          ${tagsHTML}
        </div>
        <div class="q-title" style="font-size:1rem;margin-bottom:10px;">${q.question}</div>
        <div style="margin-bottom:10px;display:flex;flex-direction:column;gap:3px;">
          ${optionsListHTML}
        </div>
        <div class="note-callout">
          <strong>📖 解析重點：</strong><br>
          ${q.explanation}
        </div>
      `;

      container.appendChild(card);
    });
  }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new ExamApp();
});
