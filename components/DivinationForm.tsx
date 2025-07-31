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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 py-12 px-4">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-200 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        {/* 网站标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            小六壬算内裤
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            传承千年智慧，探知今日运势
          </p>
          <p className="text-sm text-gray-500">
            基于《小六壬》古法，为您推算今日最适宜的内衣颜色
          </p>
        </div>

        {/* 输入表单 */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-800 font-semibold">
              请输入您的信息
            </CardTitle>
            <p className="text-gray-600 text-sm mt-2">
              姓名与生辰将用于起卦，请如实填写
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名输入 */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium text-gray-700 flex items-center gap-2">
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
                <Label htmlFor="birthDate" className="text-base font-medium text-gray-700 flex items-center gap-2">
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
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    正在起卦...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    开始算命
                  </div>
                )}
              </Button>
            </form>

            {/* 说明文字 */}
            <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                小六壬简介
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                小六壬又称「袖里金」，是中国传统占卜术之一。通过「大安、留连、速喜、赤口、小吉、空亡」六神，
                结合姓名、生辰、时辰等要素，推算运势吉凶。本系统将传统智慧与现代科技结合，
                为您提供个性化的颜色运势指导。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 底部装饰 */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2025 小六壬算内裤 - 传统文化与现代科技的完美结合</p>
        </div>
      </div>
    </div>
  );
}