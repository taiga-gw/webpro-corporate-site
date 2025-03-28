import React from 'react'
import styles from './Map.module.css'
export default function Map() {
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        {/* 半透明のカバー画像 */}
        <div className={styles.cover}></div>
        {/* コンテンツ */}
        <div className={styles.textArea}>
          {/* 会社ロゴ */}
        </div>
      </div>
    </div>
  )
}
