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
    <div className="px-4 py-12 min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
      {/* 装饰性背景 */}
      <div className="overflow-hidden absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 w-24 h-24 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute right-20 top-40 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-float"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* 网站标题 */}
        <div className="mb-16 text-center">
          <div className="inline-flex justify-center items-center p-6 mb-8 bg-gradient-to-r from-rose-600 to-indigo-600 rounded-full animate-glow">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-indigo-600 md:text-6xl">
            小六壬算内裤
          </h1>
          <p className="mb-4 text-xl text-gray-600">
            传承千年智慧，探知运势奥秘
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
            基于中国传统小六壬术数，结合现代科技，为您提供两种神奇的算命方式
          </p>
        </div>

        {/* 模式选择卡片 */}
        <div className="grid gap-8 mb-12 md:grid-cols-2">
          {/* 姓名生辰算运势模式 */}
          <Card className="overflow-hidden border-0 shadow-2xl backdrop-blur-sm transition-all duration-500 transform bg-white/80 hover:shadow-3xl hover:scale-105 group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <CardHeader className="relative z-10 pb-6 text-center">
              <div className="inline-flex justify-center items-center p-4 mx-auto mb-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full group-hover:animate-pulse">
                <Star className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="mb-2 text-2xl font-bold text-gray-800">
                今日运势色
              </CardTitle>
              <p className="text-gray-600">
                基于姓名生辰，算出今日最佳运势颜色
              </p>
            </CardHeader>
            
            <CardContent className="relative z-10 px-6 pb-8">
              {/* 特色功能列表 */}
              <div className="mb-6 space-y-3">
                <div className="flex gap-3 items-center text-gray-700">
                  <User className="flex-shrink-0 w-5 h-5 text-red-500" />
                  <span>输入姓名与出生日期</span>
                </div>
                <div className="flex gap-3 items-center text-gray-700">
                  <Calendar className="flex-shrink-0 w-5 h-5 text-orange-500" />
                  <span>结合当前时辰起卦</span>
                </div>
                <div className="flex gap-3 items-center text-gray-700">
                  <Zap className="flex-shrink-0 w-5 h-5 text-yellow-500" />
                  <span>五行属性详细解读</span>
                </div>
                <div className="flex gap-3 items-center text-gray-700">
                  <Eye className="flex-shrink-0 w-5 h-5 text-green-500" />
                  <span>个性化运势建议</span>
                </div>
              </div>

              {/* 适用人群 */}
              <div className="p-4 mb-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
                <h4 className="mb-2 font-semibold text-gray-800">适合人群</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  希望了解每日运势变化，追求个性化指导，相信传统命理学说的朋友
                </p>
              </div>

              <Button
                onClick={() => onSelectMode('fortune')}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 transform hover:from-red-600 hover:to-orange-600 hover:scale-105"
              >
                <div className="flex gap-2 items-center">
                  <Star className="w-5 h-5" />
                  选择此模式
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* 投骰子算内裤颜色模式 */}
          <Card className="overflow-hidden border-0 shadow-2xl backdrop-blur-sm transition-all duration-500 transform bg-white/80 hover:shadow-3xl hover:scale-105 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <CardHeader className="relative z-10 pb-6 text-center">
              <div className="inline-flex justify-center items-center p-4 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:animate-pulse">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="mb-2 text-2xl font-bold text-gray-800">
                投骰算内裤
              </CardTitle>
              <p className="text-gray-600">
                投掷三枚骰子，测算内裤的神秘颜色
              </p>
            </CardHeader>
            
            <CardContent className="relative z-10 px-6 pb-8">
              {/* 特色功能列表 */}
              <div className="mb-6 space-y-3">
                <div className="flex gap-3 items-center text-gray-700">
                  <Dice6 className="flex-shrink-0 w-5 h-5 text-blue-500" />
                  <span>投掷三枚骰子起卦</span>
                </div>
                <div className="flex gap-3 items-center text-gray-700">
                  <Zap className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                  <span>三宫定位精准算法</span>
                </div>
                <div className="flex gap-3 items-center text-gray-700">
                  <Sparkles className="flex-shrink-0 w-5 h-5 text-purple-500" />
                  <span>颜色智能混合调色</span>
                </div>
                <div className="flex gap-3 items-center text-gray-700">
                  <Eye className="flex-shrink-0 w-5 h-5 text-pink-500" />
                  <span>神秘卦象深度解读</span>
                </div>
              </div>

              {/* 适用人群 */}
              <div className="p-4 mb-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                <h4 className="mb-2 font-semibold text-gray-800">适合人群</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  喜欢随机性和惊喜，追求神秘体验，想要快速获得结果的朋友
                </p>
              </div>

              <Button
                onClick={() => onSelectMode('dice')}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 transform hover:from-blue-600 hover:to-purple-600 hover:scale-105"
              >
                <div className="flex gap-2 items-center">
                  <Dice6 className="w-5 h-5" />
                  选择此模式
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 小六壬介绍 */}
        <Card className="mb-8 border-0 shadow-xl backdrop-blur-sm bg-white/90">
          <CardHeader className="text-center">
            <CardTitle className="flex gap-2 justify-center items-center text-2xl font-bold text-gray-800">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              关于小六壬
            </CardTitle>
          </CardHeader>
          <CardContent className="mx-auto max-w-4xl">
            <div className="grid gap-8 text-gray-700 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800">传统渊源</h3>
                <p className="mb-4 leading-relaxed">
                  小六壬又称&ldquo;袖里金&rdquo;，是中国传统占卜术之一。以六神（大安、留连、速喜、赤口、小吉、空亡）
                  为核心，通过时间、方位等要素进行推算，历史悠久，流传至今。
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800">现代应用</h3>
                <p className="mb-4 leading-relaxed">
                  本系统将传统小六壬与现代色彩学相结合，通过科学的算法实现古法新用，
                  既保持了传统文化的神秘色彩，又符合现代人的审美需求。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 底部版权 */}
        <div className="text-sm text-center text-gray-500">
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