"use client";
import React, { useEffect, useState } from 'react'
import styles from './OurService.module.css'
import Image from 'next/image'

export default function OurService() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        {/* 半透明のカバー画像 */}
        <div className={styles.cover}></div>
        {/* コンテンツ */}
        <div className={styles.textArea}>
          <h1 className={styles.title}>Our Service</h1>
        </div>
        {/* Our Service 画像 */}
        <div className={styles.ourServiceItems}>
          <div className={styles.item01}>
            <Image 
              src="/images/our-service-item01.png" 
              width={isMobile ? 177 :  271}
              height={isMobile ? 177 : 271} 
              alt='about-us01'
            ></Image>
            <p className={styles.itemTitle}>専門知識と技術力</p>
            <div className={styles.line}></div>
            <p className={styles.itemDesc}>当社は、クライアントのニーズに最適なソリューションを提供するための深い知識と技術力を持っています。SEO、コンテンツマーケティング、広告運用など、多岐にわたる領域での専門性を備えています。</p>
          </div>
          <div className={styles.item02}>
            <Image src="/images/our-service-item02.png" 
              width={isMobile ? 177 : 271} 
              height={isMobile ? 177 : 271} 
              alt='about-us02'
            ></Image>
            <p className={styles.itemTitle}>データ分析</p>
            <div className={styles.line}></div>
            <p className={styles.itemDesc}>データに基づいて戦略を立て、効果を測定し、改善を繰り返す能力が当社の強みです。分析ツールを駆使し、的確なデータ分析を行います</p>
          </div>
          <div className={styles.item03}>
            <Image src="/images/our-service-item03.png" 
              width={isMobile ? 177 : 271} 
              height={isMobile ? 177 : 271} 
              alt='about-us03'
            ></Image>
            <p className={styles.itemTitle}>クリエイティブな発想</p>
            <div className={styles.line}></div>
            <p className={styles.itemDesc}>革新的なアイデアとクリエイティブなアプローチで、デザインやコンテンツ制作、ユーザーエクスペリエンスの改善を行います。創造力を活かして、他にはない価値を提供します。</p>
          </div>
        </div>

        {/* モバイル用のコンテンツ */}
        <div className={styles.spOurServiceItems}>
          <div className={styles.item01}>
            <div className={styles.itemBox}>
              <Image 
                src="/images/our-service-item01.png" 
                width={isMobile ? 155 :  271}
                height={isMobile ? 155 : 271} 
                alt='about-us01'
              ></Image>
              <p className={styles.itemTitle}>専門知識と<br />技術力</p>
            </div>
            <p className={styles.itemDesc}>当社は、クライアントのニーズに最適なソリューションを提供するための深い知識と技術力を持っています。SEO、コンテンツマーケティング、広告運用など、多岐にわたる領域での専門性を備えています。</p>
          </div>
          <div className={styles.item02}>
            <div className={styles.itemBox02}>
              <Image src="/images/our-service-item02.png" 
                width={isMobile ? 155 : 271} 
                height={isMobile ? 155 : 271} 
                alt='about-us02'
              ></Image>
              <p className={styles.itemTitle}>データ分析</p>
            </div>
            <p className={styles.itemDesc}>データに基づいて戦略を立て、効果を測定し、改善を繰り返す能力が当社の強みです。分析ツールを駆使し、的確なデータ分析を行います</p>
          </div>
          <div className={styles.item03}>
           <div className={styles.itemBox}>
            <Image src="/images/our-service-item03.png" 
              width={isMobile ? 155 : 271} 
              height={isMobile ? 155 : 271} 
              alt='about-us03'
            ></Image>
            <p className={styles.itemTitle}>クリエイティブ<br />な発想</p>
            </div>
            <p className={styles.itemDesc}>革新的なアイデアとクリエイティブなアプローチで、デザインやコンテンツ制作、ユーザーエクスペリエンスの改善を行います。創造力を活かして、他にはない価値を提供します。</p>
          </div>
        </div>
        
        {/* Our Service 画像 */}
        <div className={styles.ourServiceItems02}>
          <div className={styles.item01}>
            <Image 
            src="/images/our-service-item04.png" 
              width={isMobile ? 155 : 271} 
              height={isMobile ? 155 : 271} 
              alt='about-us01'
            ></Image>
            <p className={styles.itemTitle}>効果的な<br />コミュニケーション</p>
            <div className={styles.line}></div>
            <p className={styles.itemDesc}>クライアントとの円滑なコミュニケーションと信頼関係の構築を重視し、顧客のニーズに応じた最適な提案を行います。専門家が協力し、チーム全体で最良の結果を追求します。</p>
          </div>
          <div className={styles.item02}>
            <Image 
            src="/images/our-service-item05.png" 
              width={isMobile ? 155 : 271} 
              height={isMobile ? 155 : 271} 
              alt='about-us02'
            ></Image>
            <p className={styles.itemTitle}>迅速な対応力と柔軟性</p>
            <div className={styles.line}></div>
            <p className={styles.itemDesc}>マーケットやクライアントのニーズの変化に迅速に対応し、柔軟に戦略を修正する能力を持っています。どんな状況でも最適な結果を提供します。</p>
          </div>
          <div className={styles.item03}>
            <Image src="/images/our-service-item06.png" 
              width={isMobile ? 155 : 271} 
              height={isMobile ? 155 : 271} 
              alt='about-us03'
            ></Image>
            <p className={styles.itemTitle}>実績と信頼性</p>
            <div className={styles.line}></div>
            <p className={styles.itemDesc}>過去の実績や成功事例は、当社の信頼性の証です。透明性のある業務遂行と高い成果を出し続けることで、クライアントからの信頼を得ています。</p>
          </div>
        </div>

        {/* モバイル用のコンテンツ */}
        <div className={styles.spOurServiceItems02}>
          <div className={styles.item01}>
            <div className={styles.itemBox02}>
              <Image src="/images/our-service-item04.png" 
                width={isMobile ? 155 : 271} 
                height={isMobile ? 155 : 271} 
                alt='about-us01'
              ></Image>
              <p className={styles.itemTitle}>効果的な<br />コミュニケーション</p>
            </div>
            <p className={styles.itemDesc}>クライアントとの円滑なコミュニケーションと信頼関係の構築を重視し、顧客のニーズに応じた最適な提案を行います。専門家が協力し、チーム全体で最良の結果を追求します。</p>
          </div>
          <div className={styles.item02}>
            <div className={styles.itemBox}>
              <Image src="/images/our-service-item05.png" 
                width={isMobile ? 155 : 271} 
                height={isMobile ? 155 : 271} 
                alt='about-us02'
              ></Image>
              <p className={styles.itemTitle}>迅速な<br />対応力と柔軟性</p>
            </div>
            <p className={styles.itemDesc}>マーケットやクライアントのニーズの変化に迅速に対応し、柔軟に戦略を修正する能力を持っています。どんな状況でも最適な結果を提供します。</p>
          </div>
          <div className={styles.item03}>
            <div className={styles.itemBox02}>
              <Image src="/images/our-service-item06.png" 
                width={isMobile ? 155 : 271} 
                height={isMobile ? 155 : 271} 
                alt='about-us03'
              ></Image>
              <p className={styles.itemTitle}>実績と信頼性</p>
            </div>
            <p className={styles.itemDesc}>過去の実績や成功事例は、当社の信頼性の証です。透明性のある業務遂行と高い成果を出し続けることで、クライアントからの信頼を得ています。</p>
          </div>
        </div>
      </div>
    </div>
  )
}