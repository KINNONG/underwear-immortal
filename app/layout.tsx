import type { Metadata } from 'next';
import { Inter, Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const notoSansSC = Noto_Sans_SC({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-sc'
});

export const metadata: Metadata = {
  title: '小六壬算内裤 - 传承千年智慧，探知今日运势',
  description: '基于中国传统小六壬术数，结合姓名生辰，为您推算今日最适宜的内衣颜色。传统文化与现代科技的完美结合。',
  keywords: '小六壬,算命,内裤颜色,运势,传统文化,占卜,六神',
  authors: [{ name: '小六壬算内裤' }],
  creator: '小六壬算内裤',
  publisher: '小六壬算内裤',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xiaoliu.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://xiaoliu.example.com',
    title: '小六壬算内裤 - 传承千年智慧，探知今日运势',
    description: '基于中国传统小六壬术数，结合姓名生辰，为您推算今日最适宜的内衣颜色',
    siteName: '小六壬算内裤',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '小六壬算内裤',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '小六壬算内裤 - 传承千年智慧，探知今日运势',
    description: '基于中国传统小六壬术数，结合姓名生辰，为您推算今日最适宜的内衣颜色',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} ${notoSansSC.className} antialiased`}>
        <div id="root">
          {children}
        </div>
        
        {/* 百度统计或其他分析工具 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 这里可以添加百度统计、Google Analytics 等
              console.log('小六壬算内裤 - 网站加载完成');
            `,
          }}
        />
      </body>
    </html>
  );
}