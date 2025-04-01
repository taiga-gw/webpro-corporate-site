import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        <div className={styles.textArea}>
          <p className={styles.text}>© WEB PROMOTION. all rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
