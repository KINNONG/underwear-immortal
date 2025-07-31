'use client';

import DiceForm from '@/components/DiceForm';
import DiceResult from '@/components/DiceResult';
import DivinationForm from '@/components/DivinationForm';
import DivinationResult from '@/components/DivinationResult';
import ModeSelector, { DivinationMode } from '@/components/ModeSelector';
import { calculateUnderwearColorByDice, calculateXiaoLiuRen } from '@/lib/xiaoliu-algorithm';
import { useState } from 'react';

// 姓名生辰算法的数据类型
interface DivinationData {
  name: string;
  birthDate: Date;
}

interface DivinationResultData {
  god: string;
  element: string;
  colors: string[];
  primaryColor: string;
  meaning: string;
  fortune: string;
  personality: string;
  advice: string;
}

// 投骰子算法的数据类型
interface DiceResultData {
  finalColor: {
    name: string;
    hex: string;
    rgb: [number, number, number];
    description: string;
  };
  threeGods: {
    god: string;
    position: number;
    color: string;
    hex: string;
    description: string;
  }[];
  interpretation: string;
  confidence: string;
}

export default function HomePage() {
  // 状态管理
  const [currentMode, setCurrentMode] = useState<DivinationMode | null>(null);
  const [currentStep, setCurrentStep] = useState<'mode' | 'form' | 'result'>('mode');
  const [loading, setLoading] = useState(false);

  // 姓名生辰算法状态
  const [divinationData, setDivinationData] = useState<DivinationData | null>(null);
  const [divinationResult, setDivinationResult] = useState<DivinationResultData | null>(null);

  // 投骰子算法状态
  const [dice, setDice] = useState<[number, number, number] | null>(null);
  const [diceResult, setDiceResult] = useState<DiceResultData | null>(null);

  // 选择模式
  const handleModeSelect = (mode: DivinationMode) => {
    setCurrentMode(mode);
    setCurrentStep('form');
  };

  // 处理姓名生辰表单提交
  const handleDivinationSubmit = async (data: DivinationData) => {
    setLoading(true);
    setDivinationData(data);

    try {
      // 模拟计算时间，增加神秘感
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 调用小六壬算法
      const calculationResult = calculateXiaoLiuRen(data.name, data.birthDate);
      
      setDivinationResult(calculationResult);
      setCurrentStep('result');
    } catch (error) {
      console.error('计算出错:', error);
      alert('算命出现问题，请重试');
    } finally {
      setLoading(false);
    }
  };

  // 处理投骰子表单提交
  const handleDiceSubmit = async (diceValues: [number, number, number]) => {
    setLoading(true);
    setDice(diceValues);

    try {
      // 模拟计算时间，增加神秘感
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 调用投骰子算法
      const calculationResult = calculateUnderwearColorByDice(
        diceValues[0], 
        diceValues[1], 
        diceValues[2]
      );
      
      setDiceResult(calculationResult);
      setCurrentStep('result');
    } catch (error) {
      console.error('计算出错:', error);
      alert('算命出现问题，请重试');
    } finally {
      setLoading(false);
    }
  };

  // 重置到模式选择
  const handleReset = () => {
    setCurrentStep('mode');
    setCurrentMode(null);
    setDivinationData(null);
    setDivinationResult(null);
    setDice(null);
    setDiceResult(null);
  };

  // 重新开始当前模式
  const handleRestart = () => {
    setCurrentStep('form');
    if (currentMode === 'fortune') {
      setDivinationData(null);
      setDivinationResult(null);
    } else {
      setDice(null);
      setDiceResult(null);
    }
  };

  return (
    <main className="min-h-screen">
      {/* 模式选择页面 */}
      {currentStep === 'mode' && (
        <ModeSelector onSelectMode={handleModeSelect} />
      )}

      {/* 姓名生辰算法表单 */}
      {currentStep === 'form' && currentMode === 'fortune' && (
        <DivinationForm 
          onSubmit={handleDivinationSubmit}
          loading={loading}
        />
      )}

      {/* 投骰子算法表单 */}
      {currentStep === 'form' && currentMode === 'dice' && (
        <DiceForm 
          onSubmit={handleDiceSubmit}
          loading={loading}
        />
      )}

      {/* 姓名生辰算法结果 */}
      {currentStep === 'result' && currentMode === 'fortune' && divinationResult && divinationData && (
        <DivinationResult
          result={divinationResult}
          userName={divinationData.name}
          onReset={handleRestart}
          onBackToHome={handleReset}
        />
      )}

      {/* 投骰子算法结果 */}
      {currentStep === 'result' && currentMode === 'dice' && diceResult && dice && (
        <DiceResult
          result={diceResult}
          dice={dice}
          onReset={handleRestart}
          onBackToHome={handleReset}
        />
      )}
    </main>
  );
}