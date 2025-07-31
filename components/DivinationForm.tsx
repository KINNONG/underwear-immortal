'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Sparkles, User } from 'lucide-react';
import { useState } from 'react';

interface DivinationFormProps {
  onSubmit: (data: { name: string; birthDate: Date }) => void;
  loading?: boolean;
}

export default function DivinationForm({ onSubmit, loading = false }: DivinationFormProps) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && birthDate) {
      onSubmit({
        name,
        birthDate: new Date(birthDate)
      });
    }
  };

  return (
    <div className="px-4 py-12 min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50">
      {/* 装饰性背景 */}
      <div className="overflow-hidden absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute right-20 top-40 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-200 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-2xl">
        {/* 网站标题 */}
        <div className="mb-12 text-center">
          <div className="inline-flex justify-center items-center p-4 mb-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-full">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 md:text-5xl">
            小六壬算内裤
          </h1>
          <p className="mb-2 text-lg text-gray-600">
            传承千年智慧，探知今日运势
          </p>
          <p className="text-sm text-gray-500">
            基于《小六壬》古法，为您推算今日最适宜的内衣颜色
          </p>
        </div>

        {/* 输入表单 */}
        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-white/80">
          <CardHeader className="pb-6 text-center">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              请输入您的信息
            </CardTitle>
            <p className="mt-2 text-sm text-gray-600">
              姓名与生辰将用于起卦，请如实填写
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名输入 */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex gap-2 items-center text-base font-medium text-gray-700">
                  <User className="w-4 h-4" />
                  姓名
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="请输入您的姓名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-base border-2 focus:border-red-400 focus:ring-red-200"
                  required
                />
                <p className="text-xs text-gray-500">
                  姓名用于计算个人专属卦象
                </p>
              </div>

              {/* 生日输入 */}
              <div className="space-y-2">
                <Label htmlFor="birthDate" className="flex gap-2 items-center text-base font-medium text-gray-700">
                  <Calendar className="w-4 h-4" />
                  出生日期
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="h-12 text-base border-2 focus:border-red-400 focus:ring-red-200"
                  required
                  max={new Date().toISOString().split('T')[0]}
                />
                <p className="text-xs text-gray-500">
                  生辰八字影响五行属性
                </p>
              </div>

              {/* 提交按钮 */}
              <Button
                type="submit"
                disabled={!name || !birthDate || loading}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-red-600 to-orange-600 transition-all duration-300 transform hover:from-red-700 hover:to-orange-700 hover:scale-105"
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
            <div className="p-4 mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
              <h3 className="flex gap-2 items-center mb-2 font-semibold text-gray-800">
                <Sparkles className="w-4 h-4 text-red-600" />
                小六壬简介
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                小六壬又称「袖里金」，是中国传统占卜术之一。通过「大安、留连、速喜、赤口、小吉、空亡」六神，
                结合姓名、生辰、时辰等要素，推算运势吉凶。本系统将传统智慧与现代科技结合，
                为您提供个性化的颜色运势指导。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 底部装饰 */}
        <div className="mt-8 text-sm text-center text-gray-500">
          <p>© 2025 小六壬算内裤 - 传统文化与现代科技的完美结合</p>
        </div>
      </div>
    </div>
  );
}