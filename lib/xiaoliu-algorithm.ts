/**
 * 小六壬算内裤颜色核心算法
 * 基于传统小六壬六神：大安、留连、速喜、赤口、小吉、空亡
 * 支持两种算法：1.姓名生辰算今日运势 2.投骰子算内裤颜色
 */

// 小六壬六神枚举
export enum LiuRenGod {
  DA_AN = '大安',      // 大安 - 五行属木
  LIU_LIAN = '留连',   // 留连 - 五行属水  
  SU_XI = '速喜',      // 速喜 - 五行属火
  CHI_KOU = '赤口',    // 赤口 - 五行属金
  XIAO_JI = '小吉',    // 小吉 - 五行属木
  KONG_WANG = '空亡'   // 空亡 - 五行属土
}

// 五行对应颜色映射（用于姓名生辰算法）
export const WuXingColors = {
  木: { primary: '#22c55e', name: '绿色系', colors: ['翠绿', '嫩绿', '墨绿'] },
  火: { primary: '#ef4444', name: '红色系', colors: ['大红', '玫红', '橘红'] },
  土: { primary: '#eab308', name: '黄色系', colors: ['土黄', '金黄', '米黄'] },
  金: { primary: '#f8fafc', name: '白色系', colors: ['纯白', '银白', '乳白'] },
  水: { primary: '#3b82f6', name: '蓝色系', colors: ['深蓝', '湖蓝', '天蓝'] }
};

// 六神内裤颜色映射（用于投骰子算法）
export const UnderwearColors = {
  [LiuRenGod.DA_AN]: {
    name: '青绿',
    rgb: [0, 150, 100],    // 青绿色
    hex: '#009664',
    description: '如青山般清新的绿意'
  },
  [LiuRenGod.LIU_LIAN]: {
    name: '黄棕',
    rgb: [200, 150, 80],   // 黄棕色
    hex: '#c89650',
    description: '大地般温暖的黄棕'
  },
  [LiuRenGod.SU_XI]: {
    name: '红紫',
    rgb: [180, 50, 120],   // 红紫色
    hex: '#b43278',
    description: '热情如火的红紫'
  },
  [LiuRenGod.CHI_KOU]: {
    name: '白金',
    rgb: [240, 240, 240],  // 白金色
    hex: '#f0f0f0',
    description: '纯净如雪的白金'
  },
  [LiuRenGod.XIAO_JI]: {
    name: '黑蓝',
    rgb: [30, 30, 100],    // 黑蓝色
    hex: '#1e1e64',
    description: '深邃如夜的黑蓝'
  },
  [LiuRenGod.KONG_WANG]: {
    name: '黄白',
    rgb: [250, 250, 200],  // 黄白色
    hex: '#fafac8',
    description: '温润如玉的黄白'
  }
};

// 六神顺时针排列（根据小六壬掌图）
export const LiuRenClockwiseOrder: LiuRenGod[] = [
  LiuRenGod.DA_AN,      // 1. 大安
  LiuRenGod.LIU_LIAN,   // 2. 留连
  LiuRenGod.SU_XI,      // 3. 速喜
  LiuRenGod.CHI_KOU,    // 4. 赤口
  LiuRenGod.XIAO_JI,    // 5. 小吉
  LiuRenGod.KONG_WANG   // 6. 空亡
];

// 六神属性配置
export const LiuRenGodConfig = {
  [LiuRenGod.DA_AN]: {
    element: '木',
    meaning: '静止、安稳',
    fortune: '平安吉祥',
    personality: '沉稳内敛'
  },
  [LiuRenGod.LIU_LIAN]: {
    element: '水',
    meaning: '流动、纠缠',
    fortune: '感情丰富',
    personality: '温柔如水'
  },
  [LiuRenGod.SU_XI]: {
    element: '火',
    meaning: '快速、喜悦',
    fortune: '好运连连',
    personality: '热情活泼'
  },
  [LiuRenGod.CHI_KOU]: {
    element: '金',
    meaning: '口舌、争执',
    fortune: '需要谨慎',
    personality: '理性冷静'
  },
  [LiuRenGod.XIAO_JI]: {
    element: '木',
    meaning: '小利、和谐',
    fortune: '小有收获',
    personality: '温和友善'
  },
  [LiuRenGod.KONG_WANG]: {
    element: '土',
    meaning: '空虚、等待',
    fortune: '需要耐心',
    personality: '踏实稳重'
  }
};

// 天干地支 (暂时保留供将来扩展使用)
// const TianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
// const DiZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

/**
 * 计算小六壬结果
 */
export function calculateXiaoLiuRen(
  name: string,
  birthDate: Date,
  currentTime?: Date
): {
  god: LiuRenGod;
  element: string;
  colors: string[];
  primaryColor: string;
  meaning: string;
  fortune: string;
  personality: string;
  advice: string;
} {
  const now = currentTime || new Date();
  
  // 1. 计算姓名笔画数
  const nameStrokes = calculateNameStrokes(name);
  
  // 2. 计算生辰数值
  const birthValue = calculateBirthValue(birthDate);
  
  // 3. 计算当前时辰
  const currentHour = calculateCurrentHour(now);
  
  // 4. 小六壬起卦算法
  const godIndex = (nameStrokes + birthValue + currentHour - 3) % 6;
  const gods: LiuRenGod[] = [
    LiuRenGod.DA_AN,
    LiuRenGod.LIU_LIAN,
    LiuRenGod.SU_XI,
    LiuRenGod.CHI_KOU,
    LiuRenGod.XIAO_JI,
    LiuRenGod.KONG_WANG
  ];
  const resultGod = gods[godIndex];
  
  // 5. 获取对应属性
  const config = LiuRenGodConfig[resultGod];
  const colorInfo = WuXingColors[config.element as keyof typeof WuXingColors];
  
  // 6. 生成个性化建议
  const advice = generateAdvice(resultGod, name);
  
  return {
    god: resultGod,
    element: config.element,
    colors: colorInfo.colors,
    primaryColor: colorInfo.primary,
    meaning: config.meaning,
    fortune: config.fortune,
    personality: config.personality,
    advice
  };
}

/**
 * 计算姓名笔画数（简化版）
 */
function calculateNameStrokes(name: string): number {
  // 简化算法：使用字符编码求和
  return name.split('').reduce((sum, char) => {
    return sum + char.charCodeAt(0) % 20 + 1;
  }, 0);
}

/**
 * 计算生辰数值
 */
function calculateBirthValue(birthDate: Date): number {
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  
  return (year % 100) + month + day;
}

/**
 * 计算当前时辰（十二时辰制）
 */
function calculateCurrentHour(now: Date): number {
  const hour = now.getHours();
  // 转换为十二时辰，每个时辰2小时
  return Math.floor((hour + 1) / 2) % 12 + 1;
}

/**
 * 生成个性化建议
 */
function generateAdvice(god: LiuRenGod, name: string): string {
  const adviceTemplates = {
    [LiuRenGod.DA_AN]: `${name}，今日宜静不宜动，选择温和色彩可助运势稳定。`,
    [LiuRenGod.LIU_LIAN]: `${name}，今日感情运旺盛，深色系能增强你的魅力。`,
    [LiuRenGod.SU_XI]: `${name}，今日宜动不宜静，明亮色彩助你好运连连。`,
    [LiuRenGod.CHI_KOU]: `${name}，今日需谨言慎行，淡雅色彩助你化解口舌。`,
    [LiuRenGod.XIAO_JI]: `${name}，今日小有收获，清新色彩助你把握机会。`,
    [LiuRenGod.KONG_WANG]: `${name}，今日宜等待时机，大地色系助你积蓄能量。`
  };
  
  return adviceTemplates[god];
}

/**
 * 获取今日幸运色推荐
 */
export function getTodayLuckyColor(name: string): {
  color: string;
  hex: string;
  reason: string;
} {
  const result = calculateXiaoLiuRen(name, new Date());
  const randomColor = result.colors[Math.floor(Math.random() * result.colors.length)];
  
  return {
    color: randomColor,
    hex: result.primaryColor,
    reason: `根据${result.god}卦象，${randomColor}最适合今日的你`
  };
}

// ==================== 投骰子算内裤颜色算法 ====================

/**
 * 投骰子算内裤颜色
 * @param dice1 第一个骰子点数 (1-6)
 * @param dice2 第二个骰子点数 (1-6)  
 * @param dice3 第三个骰子点数 (1-6)
 * @returns 内裤颜色预测结果
 */
export function calculateUnderwearColorByDice(
  dice1: number,
  dice2: number, 
  dice3: number
): {
  finalColor: {
    name: string;
    hex: string;
    rgb: [number, number, number];
    description: string;
  };
  threeGods: {
    god: LiuRenGod;
    position: number;
    color: string;
    hex: string;
    description: string;
  }[];
  interpretation: string;
  confidence: string;
} {
  // 1. 验证骰子输入
  if (!isValidDice(dice1) || !isValidDice(dice2) || !isValidDice(dice3)) {
    throw new Error('骰子点数必须在1-6之间');
  }

  // 2. 根据骰子起卦得到三个宫位
  const threePositions = getDicePositions(dice1, dice2, dice3);
  
  // 3. 获取三个宫位对应的六神和颜色
  const threeGods = threePositions.map((position, _index) => {
    const god = LiuRenClockwiseOrder[position - 1];
    const colorInfo = UnderwearColors[god];
    return {
      god,
      position,
      color: colorInfo.name,
      hex: colorInfo.hex,
      description: colorInfo.description
    };
  });

  // 4. 混合三个颜色得到最终颜色
  const finalColor = mixThreeColors(threeGods.map(g => {
    const colorInfo = UnderwearColors[g.god];
    return {
      ...colorInfo,
      rgb: colorInfo.rgb as [number, number, number]
    };
  }));
  
  // 5. 生成解读
  const interpretation = generateUnderwearInterpretation(threeGods, dice1, dice2, dice3);
  
  // 6. 计算可信度
  const confidence = calculateConfidence(dice1, dice2, dice3);

  return {
    finalColor,
    threeGods,
    interpretation,
    confidence
  };
}

/**
 * 验证骰子点数是否有效
 */
function isValidDice(dice: number): boolean {
  return dice >= 1 && dice <= 6 && Number.isInteger(dice);
}

/**
 * 根据三个骰子确定三个宫位
 * @param dice1 第一个骰子
 * @param dice2 第二个骰子  
 * @param dice3 第三个骰子
 * @returns 三个宫位的位置 [1-6]
 */
function getDicePositions(dice1: number, dice2: number, dice3: number): [number, number, number] {
  // 从大安(位置1)开始顺时针数
  // 第一个骰子确定第一宫
  const firstPosition = dice1;
  
  // 从第一宫开始，第二个骰子确定第二宫
  const secondPosition = ((firstPosition - 1) + dice2 - 1) % 6 + 1;
  
  // 从第二宫开始，第三个骰子确定第三宫
  const thirdPosition = ((secondPosition - 1) + dice3 - 1) % 6 + 1;
  
  return [firstPosition, secondPosition, thirdPosition];
}

/**
 * 混合三个颜色
 */
function mixThreeColors(colors: Array<{rgb: [number, number, number], name: string, hex: string, description: string}>) {
  // 计算RGB平均值
  const avgR = Math.round(colors.reduce((sum, color) => sum + color.rgb[0], 0) / 3);
  const avgG = Math.round(colors.reduce((sum, color) => sum + color.rgb[1], 0) / 3);
  const avgB = Math.round(colors.reduce((sum, color) => sum + color.rgb[2], 0) / 3);
  
  // 调色：增强对比度和饱和度
  const enhancedR = Math.min(255, Math.max(0, avgR * 1.1));
  const enhancedG = Math.min(255, Math.max(0, avgG * 1.1));  
  const enhancedB = Math.min(255, Math.max(0, avgB * 1.1));
  
  const finalRgb: [number, number, number] = [
    Math.round(enhancedR),
    Math.round(enhancedG), 
    Math.round(enhancedB)
  ];
  
  // 转换为十六进制
  const hex = `#${finalRgb.map(c => c.toString(16).padStart(2, '0')).join('')}`;
  
  // 生成颜色名称
  const colorName = generateColorName(finalRgb, colors.map(c => c.name));
  
  // 生成描述
  const description = generateColorDescription(finalRgb, colors.map(c => c.name));
  
  return {
    name: colorName,
    hex,
    rgb: finalRgb,
    description
  };
}

/**
 * 根据RGB值生成颜色名称
 */
function generateColorName(rgb: [number, number, number], _sourceColors: string[]): string {
  const [r, g, b] = rgb;
  
  // 根据RGB值判断主要色调
  if (r > g && r > b) {
    if (b > g) return '紫红色';
    return '暖红色';
  } else if (g > r && g > b) {
    if (r > b) return '黄绿色';
    return '青绿色';
  } else if (b > r && b > g) {
    if (r > g) return '紫蓝色';
    return '深蓝色';
  } else if (r === g && r > b) {
    return '金黄色';
  } else if (r === b && r > g) {
    return '紫色';
  } else if (g === b && g > r) {
    return '青色';
  } else {
    return '混合色';
  }
}

/**
 * 生成颜色描述
 */
function generateColorDescription(rgb: [number, number, number], sourceColors: string[]): string {
  const colorNames = sourceColors.join('、');
  const [r, g, b] = rgb;
  const brightness = (r + g + b) / 3;
  
  let brightnessDesc = '';
  if (brightness > 200) {
    brightnessDesc = '明亮而清雅';
  } else if (brightness > 120) {
    brightnessDesc = '温和而舒适';
  } else {
    brightnessDesc = '深沉而神秘';
  }
  
  return `融合了${colorNames}的精华，呈现出${brightnessDesc}的独特魅力`;
}

/**
 * 生成内裤颜色解读
 */
function generateUnderwearInterpretation(
  threeGods: Array<{god: LiuRenGod, position: number, color: string}>,
  _dice1: number,
  _dice2: number, 
  _dice3: number
): string {
  const godNames = threeGods.map(g => g.god).join('、');
  const colors = threeGods.map(g => g.color).join('与');
  
  // 根据三个宫位的组合给出不同的解读
  const godSet = new Set(threeGods.map(g => g.god));
  
  if (godSet.size === 1) {
    // 三个宫位相同
    return `三宫皆得${threeGods[0].god}，${colors}之力纯粹而强烈，此乃大吉之象。今日穿此色内衣，能量纯净，运势亨通。`;
  } else if (godSet.size === 2) {
    // 有重复的宫位
    return `卦象显示${godNames}相互呼应，${colors}交融，阴阳调和。此色内衣能平衡身心，带来和谐运势。`;
  } else {
    // 三个宫位都不同
    return `三宫分别得${godNames}，${colors}三色汇聚，变化万千。此色内衣蕴含丰富能量，能应对各种挑战。`;
  }
}

/**
 * 计算可信度
 */
function calculateConfidence(dice1: number, dice2: number, dice3: number): string {
  const sum = dice1 + dice2 + dice3;
  const hasRepeats = new Set([dice1, dice2, dice3]).size < 3;
  
  if (sum === 18 || sum === 3) {
    return '极高 - 极数相逢，天意显现';
  } else if (hasRepeats) {
    return '很高 - 数字重复，卦象清晰';
  } else if (sum >= 15 || sum <= 6) {
    return '较高 - 数值偏极，指向明确';
  } else {
    return '中等 - 平衡之数，稳中求变';
  }
}