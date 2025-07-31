#!/bin/bash

# 小六壬算内裤网站 - 项目启动脚本
# Setup script for Xiaoliu Underwear Divination Website

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
echo "🔮 小六壬算内裤网站 - 项目启动向导"
echo "========================================"
echo -e "${NC}"

# 检查 Node.js 版本
echo -e "${BLUE}🔍 检查 Node.js 环境...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ 未找到 Node.js，请先安装 Node.js (>=18.0.0)${NC}"
    echo -e "${YELLOW}💡 推荐访问: https://nodejs.org/${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo -e "${RED}❌ Node.js 版本过低 (当前: $NODE_VERSION，需要: >= $REQUIRED_VERSION)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js 版本检查通过: $NODE_VERSION${NC}"

# 检查 npm 版本
echo -e "${BLUE}🔍 检查 npm 环境...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ 未找到 npm${NC}"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo -e "${GREEN}✅ npm 版本: $NPM_VERSION${NC}"

# 安装依赖
echo -e "${BLUE}📦 安装项目依赖...${NC}"
if [ -f "package-lock.json" ]; then
    echo -e "${YELLOW}🗑️  清理现有 lock 文件...${NC}"
    rm package-lock.json
fi

if [ -d "node_modules" ]; then
    echo -e "${YELLOW}🗑️  清理现有 node_modules...${NC}"
    rm -rf node_modules
fi

echo -e "${CYAN}⏳ 正在安装依赖，请稍候...${NC}"
npm install --silent

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 依赖安装成功！${NC}"
else
    echo -e "${RED}❌ 依赖安装失败${NC}"
    exit 1
fi

# 运行类型检查
echo -e "${BLUE}🔍 执行类型检查...${NC}"
npm run type-check --silent

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 类型检查通过！${NC}"
else
    echo -e "${YELLOW}⚠️  类型检查发现问题，但不影响运行${NC}"
fi

# 创建必要的目录
echo -e "${BLUE}📁 创建必要目录...${NC}"
mkdir -p public/images
mkdir -p public/icons

# 显示项目信息
echo -e "${PURPLE}"
echo "========================================"
echo "🎉 项目设置完成！"
echo "========================================"
echo -e "${NC}"

echo -e "${GREEN}📋 项目信息:${NC}"
echo -e "  • 项目名称: 小六壬算内裤"
echo -e "  • 技术栈: Next.js + TypeScript + Tailwind CSS"
echo -e "  • 端口: 3000"
echo -e "  • 访问地址: http://localhost:3000"

echo -e "${GREEN}🚀 启动命令:${NC}"
echo -e "  • 开发模式: ${CYAN}npm run dev${NC}"
echo -e "  • 生产构建: ${CYAN}npm run build${NC}"
echo -e "  • 启动生产: ${CYAN}npm start${NC}"

echo -e "${GREEN}🛠️  其他命令:${NC}"
echo -e "  • 代码检查: ${CYAN}npm run lint${NC}"
echo -e "  • 类型检查: ${CYAN}npm run type-check${NC}"
echo -e "  • 代码格式化: ${CYAN}npm run format${NC}"

echo -e "${YELLOW}💡 提示:${NC}"
echo -e "  • 首次运行建议执行: ${CYAN}npm run dev${NC}"
echo -e "  • 如遇问题请查看: README.md"
echo -e "  • 项目遵循 MIT 开源协议"

echo -e "${PURPLE}"
echo "========================================"
echo "🔮 祝您使用愉快！传承千年智慧 ✨"
echo "========================================"
echo -e "${NC}"

# 询问是否立即启动开发服务器
echo -e "${BLUE}🚀 是否立即启动开发服务器? (y/n)${NC}"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo -e "${GREEN}🎯 正在启动开发服务器...${NC}"
    echo -e "${CYAN}💫 请稍候，服务器启动后会自动打开浏览器${NC}"
    npm run dev
else
    echo -e "${YELLOW}✅ 设置完成！您可以随时运行 ${CYAN}npm run dev${YELLOW} 启动项目${NC}"
fi