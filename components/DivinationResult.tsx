'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart,
  Palette,
  RotateCcw,
  Share2,
  Sparkles,
  Star,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface DivinationResultProps {
  result: {
    god: string;
    element: string;
    colors: string[];
    primaryColor: string;
    meaning: string;
    fortune: string;
    personality: string;
    advice: string;
  };
  userName: string;
  onReset: () => void;
  onBackToHome?: () => void;
}

export default function DivinationResult({ result, userName, onReset, onBackToHome }: DivinationResultProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // 颜色轮播效果
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % result.colors.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [result.colors.length]);

  const shareResult = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '小六壬算内裤 - 我的运势颜色',
          text: `我今天的幸运颜色是${result.colors[0]}！快来试试小六壬算内裤吧～`,
          url: window.location.href
        });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        console.log('分享被取消');
      }
    } else {
      // 复制到剪贴板
      navigator.clipboard.writeText(
        `小六壬算内裤：我今天的幸运颜色是${result.colors[0]}！${window.location.href}`
      );
      alert('结果已复制到剪贴板');
    }
  };

  return (
    <div className="px-4 py-12 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* 装饰性背景 */}
      <div className="overflow-hidden absolute inset-0 pointer-events-none">
        <div className="absolute right-10 top-20 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute left-20 bottom-40 w-24 h-24 bg-pink-200 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-10 animate-ping"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl">
        {/* 结果标题 */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex justify-center items-center p-4 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
            <Star className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 md:text-4xl">
            {userName} 的运势颜色
          </h1>
          <p className="text-lg text-gray-600">
            小六壬为您揭示今日最佳内衣颜色
          </p>
        </div>

        {/* 主要结果卡片 */}
        <div className={`grid md:grid-cols-2 gap-6 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* 卦象信息 */}
          <Card className="overflow-hidden border-0 shadow-2xl backdrop-blur-sm bg-white/80">
            <CardHeader className="text-white bg-gradient-to-r from-purple-600 to-pink-600">
              <CardTitle className="flex gap-2 items-center text-xl">
                <Zap className="w-5 h-5" />
                卦象解析
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">起得卦象</span>
                  <Badge variant="outline" className="px-3 py-1 text-lg text-purple-700 border-purple-200">
                    {result.god}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">五行属性</span>
                  <Badge variant="outline" className="px-3 py-1 text-lg text-pink-700 border-pink-200">
                    {result.element}
                  </Badge>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="mb-2 font-semibold text-gray-800">卦象含义</h4>
                  <p className="leading-relaxed text-gray-600">{result.meaning}</p>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="mb-2 font-semibold text-gray-800">性格特质</h4>
                  <p className="leading-relaxed text-gray-600">{result.personality}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 颜色展示 */}
          <Card className="overflow-hidden border-0 shadow-2xl backdrop-blur-sm bg-white/80">
            <CardHeader className="text-white bg-gradient-to-r from-pink-600 to-purple-600">
              <CardTitle className="flex gap-2 items-center text-xl">
                <Palette className="w-5 h-5" />
                今日幸运色
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center">
                {/* 颜色圆形展示 */}
                <div 
                  className="mx-auto mb-4 w-32 h-32 rounded-full shadow-lg transition-all duration-500 transform hover:scale-110"
                  style={{ backgroundColor: result.primaryColor }}
                ></div>
                
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  {result.colors[currentColorIndex]}
                </h3>
                
                {/* 所有推荐颜色 */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {result.colors.map((color, index) => (
                    <Badge 
                      key={index}
                      variant={index === currentColorIndex ? "default" : "outline"}
                      className={`transition-all duration-300 ${
                        index === currentColorIndex 
                          ? 'bg-purple-600 text-white transform scale-110' 
                          : 'hover:scale-105'
                      }`}
                    >
                      {color}
                    </Badge>
                  ))}
                </div>
                
                {/* 运势描述 */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="flex gap-2 items-center mb-2">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span className="font-semibold text-gray-800">运势解读</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {result.fortune}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 建议卡片 */}
        <Card className={`bg-white/80 backdrop-blur-sm border-0 shadow-2xl mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardHeader>
            <CardTitle className="flex gap-2 items-center text-xl text-gray-800">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              专属建议
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <p className="text-lg leading-relaxed text-gray-700">
                {result.advice}
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
            className="flex gap-2 items-center border-2 hover:bg-purple-50 hover:border-purple-300"
          >
            <RotateCcw className="w-4 h-4" />
            重新测算
          </Button>
          
          <Button
            onClick={shareResult}
            size="lg"
            className="flex gap-2 items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Share2 className="w-4 h-4" />
            分享结果
          </Button>
        </div>

        {/* 底部说明 */}
        <div className="mt-12 text-sm text-center text-gray-500">
          <p className="mb-2">
            * 此算命结果仅供娱乐参考，请理性看待
          </p>
          <p>
            小六壬传承千年，结合个人信息与时辰推算，为您提供个性化的运势指导
          </p>
        </div>
      </div>
    </div>
  );
}