import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        {/* コンテンツ */}
        <div className={styles.textArea}>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  )
}
