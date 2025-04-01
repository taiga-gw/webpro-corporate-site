import React from 'react'
import styles from './Contact.module.css'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        {/* コンテンツ */}
        <div className={styles.textArea}>
          <h1 className={styles.title}>Contact</h1>
          <h1 className={styles.subTitle}>お問い合わせ</h1>
          <p className={styles.desc}>サービスのご提供、ご相談を承っております。<br />
          以下よりお問い合わせください。</p>
        </div>
        {/* お問い合わせボタン */}
        <div className={styles.contactButtonArea}>
          <div className={styles.contactButtonInner}>
            <Image src="/images/contact-icon-pc.png" width={56} height={40} alt='contact-button' className={styles.contactButtonIcon} />
            <button 
              type='submit' 
              className={styles.contactButton}
            >
              ご相談はこちら
            </button>
            <Image src="/images/arrow-icon-pc.png" width={63} height={16} alt='contact-button' className={styles.contactButtonIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}
