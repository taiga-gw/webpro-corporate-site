import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

// 欧文フォント
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 日本語フォント
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  preload: false,
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "未来へのきっかけを創る企業｜ウェブプロモーション",
  description:
    "「私たちが生み出すアイデアやサービスが、デンタル分野に関わる人々にとっての新たなスタートとなる。」を理念に様々なサービスを提供してます。ＷＥＢマーケティング、ＳＥＯ、広告運用、独自ブランディングによる差別化戦略など、「クリニックの価値を最大化」をミッションに掲げてます。",
  keywords: ["ウェブプロモーション"],
  openGraph: {
    title: "未来へのきっかけを創る企業｜ウェブプロモーション",
    description:
      "「私たちが生み出すアイデアやサービスが、デンタル分野に関わる人々にとっての新たなスタートとなる。」を理念に様々なサービスを提供してます。ＷＥＢマーケティング、ＳＥＯ、広告運用、独自ブランディングによる差別化戦略など、「クリニックの価値を最大化」をミッションに掲げてます。",
    url: "https://www.w-pro.jp/",
    siteName: "ウェブプロモーション",
    type: "website",
    images: [
      {
        url: "https://www.w-pro.jp/img/mv-pc.png",
        width: 1200,
        height: 630,
        alt: "未来へのきっかけを創る企業｜ウェブプロモーション",
      },
    ],
  },
  alternates: {
    canonical: "https://www.w-pro.jp/",
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
        <link
          rel="stylesheet"
          href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css"
        />

        {/* Google Tag Manager Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0BZC29QMS9"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MK9PG9V7');`,
          }}
        />
        <style>{`
          @media screen and (min-width: 1280px) {
            .page-title-block {
              margin-top: 96px;
            }
            .home-slider {
              margin-top: 96px;
            }
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} ${notoSerifJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
