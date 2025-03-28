import React from 'react'
import styles from './AboutUs.module.css'
import Image from 'next/image'
export default function AboutUs() {
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        {/* コンテンツ */}
        <div className={styles.textArea}>
          <h1 className={styles.title}>About Us</h1>
          <h2 className={styles.subTitle}>私たちが生み出すアイデアやサービスが、<br />
          デンタル分野に関わる人々にとっての新たなスタートとなる。</h2>
          <p className={styles.desc}>私たちはデンタル分野で未来を切り拓くきっかけを提供し、<br />より良い社会の実現に貢献します。</p>
        </div>
        {/* About 画像 */}
        <div className={styles.aboutUsItems}>
          <div className={styles.item01}>
            <Image src="/images/about-us-item01.png" width={214} height={214} alt='about-us01'></Image>
            <p className={styles.itemTitle}>Innovation（革新）</p>
            <p className={styles.itemDesc}>新しいアイデアやサービスを提供し、<br />
            業界の発展を支える。</p>
          </div>
          <div className={styles.item02}>
            <Image src="/images/about-us-item02.png" width={214} height={214} alt='about-us02'></Image>
            <p className={styles.itemTitle}>Empowerment（支援）</p>
            <p className={styles.itemDesc}>関わるすべての人々にとっての<br />
            新たなスタートを後押しし、<br />
            可能性を広げる。</p>
          </div>
          <div className={styles.item03}>
            <Image src="/images/about-us-item03.png" width={214} height={214} alt='about-us03'></Image>
            <p className={styles.itemTitle}>Well-being（幸福）</p>
            <p className={styles.itemDesc}>人々の生活の質を向上させ、<br />
            より良い社会の実現に貢献する。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
