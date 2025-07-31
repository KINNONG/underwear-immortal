'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Shuffle, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface DiceFormProps {
  onSubmit: (dice: [number, number, number]) => void;
  loading?: boolean;
}

// 骰子图标映射
const DiceIcons = {
  1: Dice1,
  2: Dice2,
  3: Dice3,
  4: Dice4,
  5: Dice5,
  6: Dice6,
} as const;

export default function DiceForm({ onSubmit, loading = false }: DiceFormProps) {
  const [dice1, setDice1] = useState<number>(1);
  const [dice2, setDice2] = useState<number>(1);
  const [dice3, setDice3] = useState<number>(1);
  const [isRolling, setIsRolling] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit([dice1, dice2, dice3]);
  };

  const rollRandomDice = () => {
    setIsRolling(true);
    
    // 模拟骰子滚动动画
    const rollInterval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
      setDice3(Math.floor(Math.random() * 6) + 1);
    }, 100);

    // 1.5秒后停止并确定最终结果
    setTimeout(() => {
      clearInterval(rollInterval);
      const finalDice1 = Math.floor(Math.random() * 6) + 1;
      const finalDice2 = Math.floor(Math.random() * 6) + 1;
      const finalDice3 = Math.floor(Math.random() * 6) + 1;
      
      setDice1(finalDice1);
      setDice2(finalDice2);
      setDice3(finalDice3);
      setIsRolling(false);
    }, 1500);
  };

  const DiceIcon1 = DiceIcons[dice1 as keyof typeof DiceIcons];
  const DiceIcon2 = DiceIcons[dice2 as keyof typeof DiceIcons];
  const DiceIcon3 = DiceIcons[dice3 as keyof typeof DiceIcons];

  return (
    <div className="px-4 py-12 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* 装饰性背景 */}
      <div className="overflow-hidden absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute right-20 top-40 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-2xl">
        {/* 网站标题 */}
        <div className="mb-12 text-center">
          <div className="inline-flex justify-center items-center p-4 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 md:text-5xl">
            投骰算内裤
          </h1>
          <p className="mb-2 text-lg text-gray-600">
            小六壬神机测算，三骰定乾坤
          </p>
          <p className="text-sm text-gray-500">
            投掷三枚骰子，通过小六壬起卦算出您内裤的颜色
          </p>
        </div>

        {/* 投骰子表单 */}
        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-white/80">
          <CardHeader className="pb-6 text-center">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              请投掷三枚骰子
            </CardTitle>
            <p className="mt-2 text-sm text-gray-600">
              每个骰子1-6点，三个数字将决定您的内裤颜色
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 骰子显示区域 */}
              <div className="flex justify-center space-x-8">
                {/* 第一个骰子 */}
                <div className="text-center">
                  <Label className="block mb-2 text-base font-medium text-gray-700">第一枚</Label>
                  <div className={`w-20 h-20 bg-white rounded-lg shadow-lg border-2 border-blue-200 flex items-center justify-center transition-all duration-300 ${isRolling ? 'animate-bounce' : 'hover:scale-110'}`}>
                    <DiceIcon1 className="w-12 h-12 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="mt-2 text-blue-700 border-blue-200">
                    {dice1} 点
                  </Badge>
                </div>

                {/* 第二个骰子 */}
                <div className="text-center">
                  <Label className="block mb-2 text-base font-medium text-gray-700">第二枚</Label>
                  <div className={`w-20 h-20 bg-white rounded-lg shadow-lg border-2 border-indigo-200 flex items-center justify-center transition-all duration-300 ${isRolling ? 'animate-bounce' : 'hover:scale-110'}`}>
                    <DiceIcon2 className="w-12 h-12 text-indigo-600" />
                  </div>
                  <Badge variant="outline" className="mt-2 text-indigo-700 border-indigo-200">
                    {dice2} 点
                  </Badge>
                </div>

                {/* 第三个骰子 */}
                <div className="text-center">
                  <Label className="block mb-2 text-base font-medium text-gray-700">第三枚</Label>
                  <div className={`w-20 h-20 bg-white rounded-lg shadow-lg border-2 border-purple-200 flex items-center justify-center transition-all duration-300 ${isRolling ? 'animate-bounce' : 'hover:scale-110'}`}>
                    <DiceIcon3 className="w-12 h-12 text-purple-600" />
                  </div>
                  <Badge variant="outline" className="mt-2 text-purple-700 border-purple-200">
                    {dice3} 点
                  </Badge>
                </div>
              </div>

              {/* 手动输入区域 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dice1" className="text-sm font-medium text-gray-700">
                    第一枚骰子
                  </Label>
                  <Input
                    id="dice1"
                    type="number"
                    min="1"
                    max="6"
                    value={dice1}
                    onChange={(e) => setDice1(Math.max(1, Math.min(6, parseInt(e.target.value) || 1)))}
                    className="text-lg font-bold text-center border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dice2" className="text-sm font-medium text-gray-700">
                    第二枚骰子
                  </Label>
                  <Input
                    id="dice2"
                    type="number"
                    min="1"
                    max="6"
                    value={dice2}
                    onChange={(e) => setDice2(Math.max(1, Math.min(6, parseInt(e.target.value) || 1)))}
                    className="text-lg font-bold text-center border-indigo-200 focus:border-indigo-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dice3" className="text-sm font-medium text-gray-700">
                    第三枚骰子
                  </Label>
                  <Input
                    id="dice3"
                    type="number"
                    min="1"
                    max="6"
                    value={dice3}
                    onChange={(e) => setDice3(Math.max(1, Math.min(6, parseInt(e.target.value) || 1)))}
                    className="text-lg font-bold text-center border-purple-200 focus:border-purple-400"
                  />
                </div>
              </div>

              {/* 随机骰子按钮 */}
              <div className="text-center">
                <Button
                  type="button"
                  onClick={rollRandomDice}
                  disabled={isRolling}
                  variant="outline"
                  size="lg"
                  className="mr-4 border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                >
                  {isRolling ? (
                    <div className="flex gap-2 items-center">
                      <div className="w-4 h-4 rounded-full border-2 border-blue-600 animate-spin border-t-transparent"></div>
                      投掷中...
                    </div>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <Shuffle className="w-4 h-4" />
                      随机投掷
                    </div>
                  )}
                </Button>
              </div>

              {/* 提交按钮 */}
              <Button
                type="submit"
                disabled={loading || isRolling}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 transform hover:from-blue-700 hover:to-purple-700 hover:scale-105"
              >
                {loading ? (
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full border-2 border-white animate-spin border-t-transparent"></div>
                    正在起卦...
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <Sparkles className="w-4 h-4" />
                    开始算命
                  </div>
                )}
              </Button>
            </form>

            {/* 说明文字 */}
            <div className="p-4 mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <h3 className="flex gap-2 items-center mb-2 font-semibold text-gray-800">
                <Sparkles className="w-4 h-4 text-blue-600" />
                投骰算命原理
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                根据小六壬传统算法，三个骰子代表天、地、人三才。从大安开始顺时针数，
                第一个骰子确定初宫，第二个骰子从初宫起数得中宫，第三个骰子从中宫起数得终宫。
                三宫对应的颜色相融合，即可得出您内裤的颜色及其寓意。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 底部装饰 */}
        <div className="mt-8 text-sm text-center text-gray-500">
          <p>© 2025 小六壬算内裤 - 三骰定色，神机妙算</p>
        </div>
      </div>
    </div>
  );
}