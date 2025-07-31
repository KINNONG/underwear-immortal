# 🚀 小六壬算内裤 - Vercel 部署指南

本指南将帮助您将小六壬算内裤网站部署到 Vercel 平台。

## 📋 部署前准备

### 1. 确保项目完整性

```bash
# 检查项目文件是否完整
ls -la

# 确认所有依赖已安装
npm install

# 本地测试构建
npm run build
npm run start
```

### 2. 代码质量检查

```bash
# 类型检查
npm run type-check

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 🌐 方法一：通过 GitHub + Vercel Dashboard（推荐）

### Step 1: 推送代码到 GitHub

1. **创建 GitHub 仓库**
   ```bash
   # 初始化 Git（如果还没有）
   git init
   
   # 添加所有文件
   git add .
   
   # 提交代码
   git commit -m "feat: 小六壬算内裤网站 - 支持双重算命模式"
   
   # 添加远程仓库（替换为您的仓库地址）
   git remote add origin https://github.com/your-username/xiaoliu-underwear-divination.git
   
   # 推送到 GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Vercel 部署

1. **访问 Vercel**
   - 打开 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择您的 GitHub 仓库 `xiaoliu-underwear-divination`
   - 点击 "Import"

3. **配置项目**
   ```
   Project Name: xiaoliu-underwear-divination
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build (自动检测)
   Output Directory: .next (自动检测)
   Install Command: npm install (自动检测)
   ```

4. **环境变量设置**（可选）
   - 在 "Environment Variables" 部分，可以添加：
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

5. **部署**
   - 点击 "Deploy" 按钮
   - 等待构建完成（通常 2-3 分钟）

## 🛠️ 方法二：通过 Vercel CLI

### Step 1: 安装 Vercel CLI

```bash
# 全局安装 Vercel CLI
npm install -g vercel

# 或者使用 yarn
yarn global add vercel
```

### Step 2: 登录 Vercel

```bash
# 登录到 Vercel
vercel login
```

### Step 3: 部署项目

```bash
# 在项目根目录执行
vercel

# 首次部署会询问以下问题：
# ? Set up and deploy? [Y/n] y
# ? Which scope do you want to deploy to? (选择您的账户)
# ? Link to existing project? [y/N] n
# ? What's your project's name? xiaoliu-underwear-divination
# ? In which directory is your code located? ./
```

### Step 4: 生产部署

```bash
# 部署到生产环境
vercel --prod
```

## 📊 部署后验证

### 1. 功能测试

访问您的部署地址，测试以下功能：

- ✅ **模式选择页面** - 确认两种模式都能正常显示
- ✅ **姓名生辰模式** - 输入姓名和生日，测试算法
- ✅ **投骰子模式** - 测试三个骰子的投掷和计算
- ✅ **结果展示** - 确认颜色、动画、分享功能正常
- ✅ **响应式设计** - 在不同设备上测试界面
- ✅ **页面导航** - 测试各页面间的跳转

### 2. 性能检查

```bash
# 使用 Lighthouse 检查性能
# 访问您的网站，打开 Chrome DevTools
# Performance > Lighthouse > Generate report
```

### 3. SEO 优化验证

- 检查页面标题和描述
- 验证 Open Graph 标签
- 确认结构化数据正确

## 🔧 常见问题解决

### Build 失败

1. **依赖问题**
   ```bash
   # 清理缓存重新安装
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript 错误**
   ```bash
   # 检查类型错误
   npm run type-check
   ```

3. **构建超时**
   - 检查 `vercel.json` 配置
   - 确保没有无限循环或死锁

### 部署后页面空白

1. **检查控制台错误**
   - 打开浏览器开发者工具
   - 查看 Console 和 Network 标签

2. **检查环境变量**
   - 确认生产环境变量设置正确

### 静态资源加载失败

1. **检查 public 目录**
   - 确保图片、图标等文件存在

2. **检查 next.config.js**
   - 验证图片域名配置

## 🚀 部署优化建议

### 1. 自定义域名

1. **购买域名**（推荐）
   - 选择与项目相关的域名，如：`xiaoliu-algorithm.com`

2. **在 Vercel 中配置**
   - Project Settings > Domains
   - 添加自定义域名
   - 配置 DNS 记录

### 2. 性能优化

```bash
# 在 next.config.js 中启用更多优化
const nextConfig = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // ... 其他配置
}
```

### 3. 分析工具集成

```bash
# 安装分析工具
npm install @vercel/analytics

# 在 app/layout.tsx 中集成
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 4. 环境变量管理

在 Vercel Dashboard 中设置：
```
NODE_ENV=production
NEXT_PUBLIC_SITE_NAME=小六壬算内裤
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 📈 监控和维护

### 1. Vercel 内置监控

- **函数执行时间**：查看 Functions 标签
- **带宽使用**：监控流量消耗
- **构建历史**：查看部署记录

### 2. 错误监控

考虑集成第三方监控服务：
- Sentry（错误追踪）
- LogRocket（用户会话回放）
- Google Analytics（访问统计）

### 3. 定期更新

```bash
# 定期更新依赖
npm update

# 检查安全漏洞
npm audit

# 修复安全问题
npm audit fix
```

## 🎉 部署成功！

恭喜！您的小六壬算内裤网站已成功部署到 Vercel。

**您的网站地址：** `https://xiaoliu-underwear-divination.vercel.app`

### 分享您的网站

- 📱 **移动端友好**：完美适配各种设备
- 🚀 **全球 CDN**：Vercel 提供快速访问
- 🔒 **HTTPS 安全**：自动配置 SSL 证书
- 📊 **实时分析**：内置性能监控

---

## 📞 技术支持

如遇到部署问题，请：

1. 查看 [Vercel 官方文档](https://vercel.com/docs)
2. 检查 [Next.js 部署指南](https://nextjs.org/docs/deployment)
3. 在项目 GitHub Issues 中提问

**祝您的小六壬算内裤网站运营成功！** 🎉✨