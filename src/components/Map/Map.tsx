import React from 'react'
import styles from './Map.module.css'
import Image from 'next/image'
export default function Map() {
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        <div className={styles.content}>
          {/* 会社ロゴ & 住所 */}
          <div className={styles.logo}>
            <Image src="/images/site-logo-map.png" width={561} height={86} alt="logo" />
            <p className={styles.address}>所在地／〒158-0083 東京都世田谷区奥沢5-42-3 tefu 2F D-11</p>
          </div>
          {/* コンテンツ */}
          <div className={styles.map}>
            <Image src="/images/map.png" width={1714} height={685} alt="logo" />
          </div>
          <div className={styles.businessLogo}>
            <Image src="/images/business-logo-ps.png" width={1193} height={249} alt="logo"></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
