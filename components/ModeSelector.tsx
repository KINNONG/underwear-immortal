'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Calendar,
    Crown,
    Dice6,
    Eye,
    Sparkles,
    Star,
    User,
    Zap
} from 'lucide-react';

export type DivinationMode = 'fortune' | 'dice';

interface ModeSelectorProps {
  onSelectMode: (mode: DivinationMode) => void;
}

export default function ModeSelector({ onSelectMode }: ModeSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 py-12 px-4">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-float"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 网站标题 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-rose-600 to-indigo-600 rounded-full mb-8 animate-glow">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            小六壬算内裤
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            传承千年智慧，探知运势奥秘
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            基于中国传统小六壬术数，结合现代科技，为您提供两种神奇的算命方式
          </p>
        </div>

        {/* 模式选择卡片 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 姓名生辰算运势模式 */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 text-center pb-6">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-4 group-hover:animate-pulse">
                <Star className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                今日运势色
              </CardTitle>
              <p className="text-gray-600">
                基于姓名生辰，算出今日最佳运势颜色
              </p>
            </CardHeader>
            
            <CardContent className="relative z-10 px-6 pb-8">
              {/* 特色功能列表 */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <User className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>输入姓名与出生日期</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>结合当前时辰起卦</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span>五行属性详细解读</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Eye className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>个性化运势建议</span>
                </div>
              </div>

              {/* 适用人群 */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 mb-6 border border-red-100">
                <h4 className="font-semibold text-gray-800 mb-2">适合人群</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  希望了解每日运势变化，追求个性化指导，相信传统命理学说的朋友
                </p>
              </div>

              <Button
                onClick={() => onSelectMode('fortune')}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  选择此模式
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* 投骰子算内裤颜色模式 */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 text-center pb-6">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 group-hover:animate-pulse">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                投骰算内裤
              </CardTitle>
              <p className="text-gray-600">
                投掷三枚骰子，测算内裤的神秘颜色
              </p>
            </CardHeader>
            
            <CardContent className="relative z-10 px-6 pb-8">
              {/* 特色功能列表 */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Dice6 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>投掷三枚骰子起卦</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Zap className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span>三宫定位精准算法</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span>颜色智能混合调色</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Eye className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span>神秘卦象深度解读</span>
                </div>
              </div>

              {/* 适用人群 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6 border border-blue-100">
                <h4 className="font-semibold text-gray-800 mb-2">适合人群</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  喜欢随机性和惊喜，追求神秘体验，想要快速获得结果的朋友
                </p>
              </div>

              <Button
                onClick={() => onSelectMode('dice')}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Dice6 className="w-5 h-5" />
                  选择此模式
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 小六壬介绍 */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              关于小六壬
            </CardTitle>
          </CardHeader>
          <CardContent className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">传统渊源</h3>
                <p className="leading-relaxed mb-4">
                  小六壬又称"袖里金"，是中国传统占卜术之一。以六神（大安、留连、速喜、赤口、小吉、空亡）
                  为核心，通过时间、方位等要素进行推算，历史悠久，流传至今。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">现代应用</h3>
                <p className="leading-relaxed mb-4">
                  本系统将传统小六壬与现代色彩学相结合，通过科学的算法实现古法新用，
                  既保持了传统文化的神秘色彩，又符合现代人的审美需求。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 底部版权 */}
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            © 2025 小六壬算内裤 - 传统文化与现代科技的完美结合
          </p>
          <p>
            * 本网站内容仅供娱乐，请理性看待算命结果
          </p>
        </div>
      </div>
    </div>
  );
}