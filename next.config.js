/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 部署不需要 standalone 输出
  // output: 'standalone', // 注释掉，Vercel 自动处理
  poweredByHeader: false,
  compress: true,
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // 暂时移除实验性功能避免构建错误
  // experimental: {
  //   optimizeCss: true,
  // },
  env: {
    CUSTOM_KEY: 'xiaoliu-underwear-divination',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // 可以在这里添加重定向规则
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 优化生产环境构建
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        xiaoliu: {
          name: 'xiaoliu-core',
          chunks: 'all',
          test: /[\\/]lib[\\/]/,
          priority: 10,
        },
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;