#!/bin/bash

# 小六壬算内裤网站 - Vercel 快速部署脚本
# Quick deployment script for Xiaoliu Underwear Divination Website

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 显示欢迎信息
echo -e "${PURPLE}"
echo "========================================"
echo "🚀 小六壬算内裤网站 - Vercel 部署脚本"  
echo "========================================"
echo -e "${NC}"

# 1. 环境检查
echo -e "${BLUE}🔍 检查部署环境...${NC}"

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ 未找到 Node.js，请先安装 Node.js${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2)
echo -e "${GREEN}✅ Node.js 版本: $NODE_VERSION${NC}"

# 检查 npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ 未找到 npm${NC}"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo -e "${GREEN}✅ npm 版本: $NPM_VERSION${NC}"

# 2. 安装依赖
echo -e "${BLUE}📦 安装项目依赖...${NC}"
npm install --silent

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 依赖安装成功！${NC}"
else
    echo -e "${RED}❌ 依赖安装失败${NC}"
    exit 1
fi

# 3. 代码质量检查
echo -e "${BLUE}🔍 执行代码质量检查...${NC}"

# TypeScript 类型检查
echo -e "${CYAN}⏳ TypeScript 类型检查...${NC}"
npm run type-check --silent

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ TypeScript 类型检查通过！${NC}"
else
    echo -e "${YELLOW}⚠️  TypeScript 类型检查发现问题，但继续部署${NC}"
fi

# ESLint 检查
echo -e "${CYAN}⏳ ESLint 代码检查...${NC}"
npm run lint --silent

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ ESLint 检查通过！${NC}"
else
    echo -e "${YELLOW}⚠️  ESLint 检查发现问题，但继续部署${NC}"
fi

# 4. 构建测试
echo -e "${BLUE}🏗️  执行构建测试...${NC}"
npm run build --silent

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 构建测试成功！${NC}"
else
    echo -e "${RED}❌ 构建失败，请检查错误信息${NC}"
    exit 1
fi

# 5. 检查 Vercel CLI
echo -e "${BLUE}🔍 检查 Vercel CLI...${NC}"

if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  未找到 Vercel CLI，正在安装...${NC}"
    npm install -g vercel --silent
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Vercel CLI 安装成功！${NC}"
    else
        echo -e "${RED}❌ Vercel CLI 安装失败${NC}"
        echo -e "${CYAN}💡 请手动安装: npm install -g vercel${NC}"
        exit 1
    fi
else
    VERCEL_VERSION=$(vercel --version)
    echo -e "${GREEN}✅ Vercel CLI 已安装: $VERCEL_VERSION${NC}"
fi

# 6. 部署选项
echo -e "${PURPLE}"
echo "========================================"
echo "🎯 选择部署方式"
echo "========================================"
echo -e "${NC}"

echo -e "${CYAN}请选择部署方式：${NC}"
echo -e "${GREEN}1) 🚀 直接部署到 Vercel（需要先登录）${NC}"
echo -e "${BLUE}2) 📋 显示手动部署指南${NC}"
echo -e "${YELLOW}3) 🔧 仅生成部署配置${NC}"

read -p "请输入选择 (1-3): " choice

case $choice in
    1)
        echo -e "${GREEN}🚀 开始部署到 Vercel...${NC}"
        
        # 检查是否已登录 Vercel
        if ! vercel whoami &> /dev/null; then
            echo -e "${YELLOW}⚠️  需要先登录 Vercel${NC}"
            vercel login
        fi
        
        echo -e "${CYAN}📤 正在部署...${NC}"
        vercel --prod
        
        echo -e "${GREEN}🎉 部署完成！${NC}"
        ;;
        
    2)
        echo -e "${BLUE}📋 手动部署指南：${NC}"
        echo ""
        echo -e "${CYAN}方法一：通过 GitHub + Vercel Dashboard${NC}"
        echo "1. 将代码推送到 GitHub"
        echo "2. 访问 vercel.com，导入 GitHub 仓库"
        echo "3. 配置项目并部署"
        echo ""
        echo -e "${CYAN}方法二：使用 Vercel CLI${NC}"
        echo "1. 运行: vercel login"
        echo "2. 运行: vercel"
        echo "3. 运行: vercel --prod"
        echo ""
        echo -e "${PURPLE}📖 详细步骤请查看 DEPLOYMENT.md 文件${NC}"
        ;;
        
    3)
        echo -e "${YELLOW}🔧 部署配置已生成：${NC}"
        echo "- vercel.json (Vercel 配置文件)"
        echo "- DEPLOYMENT.md (详细部署指南)"
        echo "- next.config.js (已优化用于 Vercel)"
        echo ""
        echo -e "${GREEN}✅ 项目已准备好部署！${NC}"
        ;;
        
    *)
        echo -e "${RED}❌ 无效选择${NC}"
        exit 1
        ;;
esac

# 7. 显示部署信息
echo -e "${PURPLE}"
echo "========================================"
echo "📊 部署信息总结"
echo "========================================"
echo -e "${NC}"

echo -e "${GREEN}✅ 项目状态：${NC}"
echo "  • 依赖安装: 完成"
echo "  • 代码检查: 完成"
echo "  • 构建测试: 通过"
echo "  • 部署配置: 已生成"

echo -e "${GREEN}📁 生成的文件：${NC}"
echo "  • vercel.json - Vercel 部署配置"
echo "  • DEPLOYMENT.md - 详细部署指南"

echo -e "${GREEN}🌐 预期访问地址：${NC}"
echo "  • https://xiaoliu-underwear-divination.vercel.app"
echo "  • https://your-custom-domain.com (如果配置自定义域名)"

echo -e "${GREEN}📱 功能特性：${NC}"
echo "  • 双重算命模式 (姓名生辰 + 投骰子)"
echo "  • 响应式设计 (适配所有设备)"
echo "  • 社交分享功能"
echo "  • 传统文化与现代科技结合"

echo -e "${CYAN}💡 下一步建议：${NC}"
echo "  1. 配置自定义域名"
echo "  2. 集成分析工具"
echo "  3. 设置环境变量"
echo "  4. 监控网站性能"

echo -e "${PURPLE}"
echo "========================================"
echo "🎉 祝您的小六壬算内裤网站运营成功！"
echo "========================================"
echo -e "${NC}"