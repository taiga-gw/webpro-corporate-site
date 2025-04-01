"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './MainVisual.module.css'

export default function MainVisual() {
  const [isMobile, setIsMobile] = useState(false);

  // クライアントサイドでのみ実行されるウィンドウサイズ検出
  useEffect(() => {
    // 初期チェック
    setIsMobile(window.innerWidth <= 768);

    // リサイズイベントのリスナー
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* ロゴ */}
      <div className={styles.logo}>
        <Image 
          src={isMobile ? "/images/site-logo-sp.png" : "/images/site-logo.png"} 
          width={isMobile ? 315 : 561} 
          height={isMobile ? 48 : 88} 
          alt="logo"
          priority
        />
      </div>
      
      {/* 背景メディア - スマホでは画像、PCでは動画 */}
      <div className={styles.backgroundMediaContainer}>
        {isMobile ? (
          // スマホ用背景画像
          <div className={styles.backgroundImageContainer}>
            <Image
              src="/images/main-visual-sp.png"
              fill
              sizes="100vw"
              alt="背景"
              priority
              className={styles.backgroundImage}
            />
          </div>
        ) : (
          // PC用背景動画
          <video className={styles.backgroundVideo} autoPlay muted loop playsInline>
            <source src="/videos/-42bb-4939-8e6a-2edddd2b9f00.mov" type="video/mp4" />
          </video>
        )}
      </div>
      
      {/* 中央テキスト */}
      <div className={styles.textContainer}>
        <div className={`${styles.verticalText} ${styles.leftText}`}>
          きっかけを創る
        </div>
        <div className={`${styles.verticalText} ${styles.rightText}`}>
          未来への
        </div>
      </div>
    </div>
  )
}