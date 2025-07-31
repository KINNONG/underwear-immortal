'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Crown,
  Dice6,
  Eye,
  Palette,
  RotateCcw,
  Share2,
  Sparkles,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface DiceResultProps {
  result: {
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
  };
  dice: [number, number, number];
  onReset: () => void;
  onBackToHome?: () => void;
}

export default function DiceResult({ result, dice, onReset, onBackToHome }: DiceResultProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentGodIndex, setCurrentGodIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // 三个宫位轮播效果
    const interval = setInterval(() => {
      setCurrentGodIndex((prev) => (prev + 1) % result.threeGods.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [result.threeGods.length]);

  const shareResult = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '小六壬投骰算内裤 - 我的神秘颜色',
          text: `我投出了${dice.join('-')}，算出内裤颜色是${result.finalColor.name}！快来试试小六壬算内裤吧～`,
          url: window.location.href
        });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        console.log('分享被取消');
      }
    } else {
      // 复制到剪贴板
      navigator.clipboard.writeText(
        `小六壬投骰算内裤：我的内裤颜色是${result.finalColor.name}！骰子：${dice.join('-')} ${window.location.href}`
      );
      alert('结果已复制到剪贴板');
    }
  };

  return (
    <div className="px-4 py-12 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* 装饰性背景 */}
      <div className="overflow-hidden absolute inset-0 pointer-events-none">
        <div className="absolute right-10 top-20 w-32 h-32 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute left-20 bottom-40 w-24 h-24 bg-teal-200 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-200 rounded-full opacity-10 animate-ping"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl">
        {/* 结果标题 */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex justify-center items-center p-4 mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full">
            <Crown className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 md:text-4xl">
            您的内裤颜色
          </h1>
          <div className="flex gap-2 justify-center items-center mb-2">
            <Dice6 className="w-5 h-5 text-gray-600" />
            <span className="text-lg text-gray-600">骰子点数：{dice.join(' - ')}</span>
          </div>
          <p className="text-sm text-gray-500">
            三枚骰子已定乾坤，颜色玄机此中藏
          </p>
        </div>

        {/* 主要结果展示 */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* 最终颜色展示 */}
          <Card className="overflow-hidden border-0 shadow-2xl backdrop-blur-sm bg-white/80">
            <CardHeader className="text-white bg-gradient-to-r from-emerald-600 to-cyan-600">
              <CardTitle className="flex gap-2 items-center text-xl">
                <Palette className="w-5 h-5" />
                最终颜色
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              {/* 主颜色圆形展示 */}
              <div 
                className="mx-auto mb-6 w-40 h-40 rounded-full border-4 border-white shadow-2xl transition-all duration-500 transform hover:scale-110"
                style={{ backgroundColor: result.finalColor.hex }}
              ></div>
              
              <h2 className="mb-3 text-3xl font-bold text-gray-800">
                {result.finalColor.name}
              </h2>
              
              <div className="p-4 mb-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg">
                <p className="leading-relaxed text-gray-700">
                  {result.finalColor.description}
                </p>
              </div>

              {/* RGB 和 HEX 信息 */}
              <div className="flex gap-4 justify-center text-sm">
                <Badge variant="outline" className="text-emerald-700 border-emerald-200">
                  RGB: {result.finalColor.rgb.join(', ')}
                </Badge>
                <Badge variant="outline" className="text-cyan-700 border-cyan-200">
                  HEX: {result.finalColor.hex}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 三宫起卦展示 */}
          <Card className="overflow-hidden border-0 shadow-2xl backdrop-blur-sm bg-white/80">
            <CardHeader className="text-white bg-gradient-to-r from-cyan-600 to-emerald-600">
              <CardTitle className="flex gap-2 items-center text-xl">
                <Zap className="w-5 h-5" />
                三宫起卦
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* 三个宫位展示 */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {result.threeGods.map((god, index) => (
                  <div 
                    key={index}
                    className={`text-center p-4 rounded-lg transition-all duration-500 ${
                      index === currentGodIndex 
                        ? 'bg-gradient-to-br from-emerald-100 to-cyan-100 shadow-lg transform scale-105' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    {/* 宫位序号 */}
                    <div className="mb-2 text-xs text-gray-500">
                      第{['一', '二', '三'][index]}宫
                    </div>
                    
                    {/* 骰子点数 */}
                    <div className="flex justify-center items-center mx-auto mb-2 w-8 h-8 text-sm font-bold bg-white rounded border-2 border-gray-300">
                      {dice[index]}
                    </div>
                    
                    {/* 六神名称 */}
                    <Badge 
                      variant="outline" 
                      className={`mb-2 ${
                        index === currentGodIndex 
                          ? 'border-emerald-400 text-emerald-700 bg-emerald-50' 
                          : 'border-gray-300'
                      }`}
                    >
                      {god.god}
                    </Badge>
                    
                    {/* 颜色展示 */}
                    <div 
                      className="mx-auto mb-2 w-12 h-12 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: god.hex }}
                    ></div>
                    
                    {/* 颜色名称 */}
                    <div className="text-sm font-medium text-gray-700">
                      {god.color}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 当前高亮宫位的详细描述 */}
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg border border-emerald-200">
                <div className="flex gap-2 items-center mb-2">
                  <Eye className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-gray-800">
                    第{['一', '二', '三'][currentGodIndex]}宫·{result.threeGods[currentGodIndex].god}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {result.threeGods[currentGodIndex].description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 卦象解读卡片 */}
        <Card className={`bg-white/80 backdrop-blur-sm border-0 shadow-2xl mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center text-xl text-gray-800">
              <div className="flex gap-2 items-center">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                卦象解读
              </div>
              <Badge variant="outline" className="px-3 py-1 text-lg">
                {result.confidence}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <p className="text-lg leading-relaxed text-gray-700">
                {result.interpretation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 操作按钮 */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {onBackToHome && (
            <Button
              onClick={onBackToHome}
              variant="outline"
              size="lg"
              className="flex gap-2 items-center border-2 hover:bg-blue-50 hover:border-blue-300"
            >
              <Sparkles className="w-4 h-4" />
              回到主页
            </Button>
          )}
          
          <Button
            onClick={onReset}
            variant="outline"
            size="lg"
            className="flex gap-2 items-center border-2 hover:bg-emerald-50 hover:border-emerald-300"
          >
            <RotateCcw className="w-4 h-4" />
            重新投掷
          </Button>
          
          <Button
            onClick={shareResult}
            size="lg"
            className="flex gap-2 items-center bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700"
          >
            <Share2 className="w-4 h-4" />
            分享结果
          </Button>
        </div>

        {/* 底部说明 */}
        <div className="mt-12 text-sm text-center text-gray-500">
          <p className="mb-2">
            * 此算命结果融合传统小六壬与现代色彩学，仅供娱乐参考
          </p>
          <p>
            三骰定色，神机妙算。愿您穿上此色内衣，运势亨通，心想事成！
          </p>
        </div>
      </div>
    </div>
  );
}