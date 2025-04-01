"use client";
import Image from 'next/image';
import styles from './MainVisual.module.css'

export default function MainVisual() {

  return (
    <div className={styles.container}>
      {/* ロゴ */}
      <div className={styles.logo}>
        <Image src="/images/site-logo.png" width={561} height={88} alt="logo"></Image>
      </div>
      {/* 背景動画 */}
      <div className={styles.backgroundVideoContainer}>
        <video className={styles.backgroundVideo} autoPlay muted loop playsInline>
          <source src="/videos/-42bb-4939-8e6a-2edddd2b9f00.mov" type="video/mp4" />
        </video>
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
