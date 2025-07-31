# 小六壬算内裤 🔮

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/xiaoliu-underwear-divination)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 传承千年智慧，探知今日运势  
> 基于中国传统小六壬术数的创新 AI 网站

## 🌟 项目简介

**小六壬算内裤**是一个将中国传统文化与现代科技完美结合的创新项目。通过小六壬古法，结合用户的姓名、生辰等信息，为用户推算今日最适宜的内衣颜色，既有趣又有文化内涵。

### ✨ 核心特色

- 🎯 **传统文化传承** - 基于《小六壬》古法，传承千年智慧
- 🎨 **现代技术实现** - 使用 Next.js + TypeScript + Tailwind CSS
- 📱 **响应式设计** - 完美适配各种设备尺寸
- 🔮 **双重算命模式** - 姓名生辰算运势 + 投骰子算内裤颜色
- 🎲 **投骰子起卦** - 三枚骰子定三宫，颜色智能混合
- 🌈 **五行色彩学** - 基于五行理论的科学配色
- 💫 **精美动效** - 丰富的交互动画和视觉效果

## 🛠️ 技术栈

### 前端框架
- **Next.js 14** - React 全栈框架，支持 SSR/SSG
- **TypeScript** - 类型安全的 JavaScript 超集
- **Tailwind CSS** - 原子化 CSS 框架

### UI 组件
- **Radix UI** - 无障碍的高质量组件库
- **Lucide React** - 精美的图标库
- **Class Variance Authority** - 组件变体管理

### 开发工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **PostCSS** - CSS 后处理器

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 8.0.0

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <your-repo-url>
   cd xiaoliu-underwear-divination
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问应用**
   
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 其他命令

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 类型检查
npm run type-check

# 代码格式化
npm run format
```

## 📁 项目结构

```
xiaoliu-underwear-divination/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页组件
├── components/            # React 组件
│   ├── ui/               # 基础 UI 组件
│   │   ├── button.tsx    # 按钮组件
│   │   ├── input.tsx     # 输入框组件
│   │   ├── card.tsx      # 卡片组件
│   │   ├── label.tsx     # 标签组件
│   │   └── badge.tsx     # 徽章组件
│   ├── DivinationForm.tsx # 占卜表单组件
│   └── DivinationResult.tsx # 结果展示组件
├── lib/                   # 工具库
│   ├── xiaoliu-algorithm.ts # 小六壬算法核心
│   └── utils.ts          # 通用工具函数
├── public/               # 静态资源
├── next.config.js        # Next.js 配置
├── tailwind.config.js    # Tailwind CSS 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目依赖配置
```

## 🔮 核心算法说明

### 小六壬六神

本项目基于传统小六壬的六神体系：

1. **大安（木）** - 静止、安稳，绿色系
2. **留连（水）** - 流动、纠缠，蓝色系  
3. **速喜（火）** - 快速、喜悦，红色系
4. **赤口（金）** - 口舌、争执，白色系
5. **小吉（木）** - 小利、和谐，绿色系
6. **空亡（土）** - 空虚、等待，黄色系

### 姓名生辰算法流程

1. **姓名计算** - 将姓名转换为数值（基于字符编码）
2. **生辰计算** - 提取年月日数值信息
3. **时辰计算** - 当前时间转换为十二时辰
4. **起卦算法** - 综合三个数值进行小六壬起卦
5. **结果映射** - 将卦象映射到对应颜色和寓意

### 投骰子算法流程

1. **投掷骰子** - 用户投掷三枚骰子（1-6点）
2. **三宫起卦** - 从大安开始顺时针数，依次确定三个宫位
   - 第一个骰子：从大安开始数，确定第一宫
   - 第二个骰子：从第一宫开始数，确定第二宫
   - 第三个骰子：从第二宫开始数，确定第三宫
3. **颜色映射** - 将三个宫位映射到对应的六神颜色
   - 大安 → 青绿色、留连 → 黄棕色、速喜 → 红紫色
   - 赤口 → 白金色、小吉 → 黑蓝色、空亡 → 黄白色
4. **颜色混合** - 使用RGB算法将三种颜色智能混合
5. **结果生成** - 生成最终颜色和卦象解读

## 🎯 使用流程

### 模式一：姓名生辰算今日运势
1. **选择模式** → 选择"今日运势色"
2. **用户输入** → 填写姓名和生日
3. **小六壬起卦** → 算法自动计算
4. **结果展示** → 显示运势颜色和建议
5. **社交分享** → 分享个人运势结果

### 模式二：投骰子算内裤颜色
1. **选择模式** → 选择"投骰算内裤"
2. **投掷骰子** → 输入或随机生成三个骰子点数
3. **三宫起卦** → 按小六壬顺时针算法确定三个宫位
4. **颜色混合** → 将三个宫位颜色智能混合
5. **结果展示** → 显示最终内裤颜色和卦象解读
6. **社交分享** → 分享神秘颜色结果

## 🎨 设计理念

### 中国风设计
- 采用中国传统配色方案
- 融入五行色彩理论
- 使用中文字体优化
- 添加传统装饰元素

### 用户体验
- 简洁直观的操作流程
- 丰富的动画效果
- 响应式适配设计
- 无障碍访问支持

## 📱 功能特性

### 核心功能

#### 模式一：姓名生辰算今日运势
- ✅ 用户信息输入（姓名、生日）
- ✅ 小六壬算法计算
- ✅ 运势颜色推荐
- ✅ 详细结果解读
- ✅ 个性化建议

#### 模式二：投骰子算内裤颜色
- ✅ 三枚骰子投掷（1-6点）
- ✅ 三宫起卦算法
- ✅ 六神颜色映射
- ✅ 智能颜色混合
- ✅ 神秘卦象解读
- ✅ 可信度评估

#### 通用功能
- ✅ 模式自由切换
- ✅ 社交分享功能
- ✅ 返回主页导航
- ✅ 响应式界面适配

### 扩展功能（待开发）
- 🔄 每日运势推送
- 🔄 历史记录查看
- 🔄 多种算命模式
- 🔄 用户系统登录
- 🔄 运势统计分析
- 🔄 社区交流功能

## 🚀 部署指南

### 一键部署到 Vercel（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/xiaoliu-underwear-divination)

### 手动部署步骤

#### 方法一：GitHub + Vercel Dashboard
```bash
# 1. 推送代码到 GitHub
git add .
git commit -m "feat: 小六壬算内裤网站"
git push origin main

# 2. 访问 vercel.com 导入项目
# 3. 项目自动检测配置并部署
```

#### 方法二：Vercel CLI
```bash
# 1. 安装并登录 Vercel CLI
npm install -g vercel
vercel login

# 2. 部署到生产环境
vercel --prod
```

#### 方法三：使用部署脚本
```bash
# 运行自动化部署脚本
npm run deploy
```

### 部署配置文件

项目已包含完整的部署配置：
- `vercel.json` - Vercel 部署配置
- `next.config.js` - Next.js 优化配置
- `.vercelignore` - 部署时忽略的文件
- 详细指南请查看 [`DEPLOYMENT.md`](./DEPLOYMENT.md)

### 其他部署平台

- **Netlify** - 支持静态站点托管
- **Railway** - 支持全栈应用部署  
- **阿里云/腾讯云** - 国内服务器部署

## 🤝 贡献指南

我们欢迎各种形式的贡献！

### 如何贡献

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献类型

- 🐛 Bug 修复
- ✨ 新功能开发
- 📝 文档改进
- 🎨 UI/UX 优化
- 🔧 代码重构
- 🌐 国际化支持

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议开源。

## 👥 团队成员

- **项目负责人** - 算法设计与核心开发
- **UI/UX 设计师** - 界面设计与用户体验
- **传统文化顾问** - 小六壬理论指导

## 📞 联系我们

- **项目地址** - [GitHub Repository](https://github.com/your-username/xiaoliu-underwear-divination)
- **问题反馈** - [Issues](https://github.com/your-username/xiaoliu-underwear-divination/issues)
- **功能建议** - [Discussions](https://github.com/your-username/xiaoliu-underwear-divination/discussions)

## 🙏 致谢

感谢所有为中国传统文化传承做出贡献的前辈们，以及现代开源社区的开发者们。

---

> 💡 **免责声明**：本项目仅供娱乐和文化交流使用，算命结果请理性看待。传统文化需要传承，但更需要科学的态度。

**⭐ 如果这个项目对你有帮助，请给我们一个 Star！**