import React from 'react'
import styles from './Vision.module.css'

export default function Vision() {
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        {/* コンテンツ */}
        <div className={styles.textArea}>
          <h1 className={styles.title}>Vision</h1>
          {/* PC */}
          <h2 className={styles.subTitle}>お客様<span>の</span>価値<span>を</span>最大化<span>し</span>、<br />
          持続的<span>な</span>ブランド成長<span>を</span>支援<span>する。</span></h2>
          {/* SP */}
          <h2 className={styles.spSubTitle}>
            デジタル<span>の</span>力<span>で</span><br />お客様<span>の</span>価値<span>を</span>最大化<span>し</span>、<br />
            持続的<span>な</span>ブランド成長<span>を</span>支援<span>する。</span>
          </h2>
          <div className={styles.descContainer}>
            <p className={styles.desc}>私たちは、お客様の価値を最大化し、<br />歯科医院の持続的なブランド成長を支援することを使命としています。</p>
            <p className={styles.desc}>変化の激しい市場の中で、企業やブランドが本来持つ価値を正しく伝え、より多くの人々とつながることが重要です。<br />私たちは、最先端のAI技術とデジタルマーケティングのノウハウを駆使し、データに基づいた最適な戦略を提供します。</p>
            <p className={styles.desc}>ターゲットに響くコミュニケーション、精度の高い認知拡大、顧客体験の向上—これらすべてを統合し、<br />お客様のブランドが長期的に成長し続けるための土台を築きます。</p>
            <p className={styles.desc}>「最適な戦略で、歯科医院の持続可能なブランドの未来を創る。」それが、私たちの約束です。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
