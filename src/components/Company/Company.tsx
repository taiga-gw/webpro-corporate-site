import React from 'react'
import styles from './Company.module.css'

export default function Company() {
  return (
    <div className={styles.container}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        {/* コンテンツ */}
        <div className={styles.textArea}>
          <h1 className={styles.title}>Company</h1>
          <h1 className={styles.subTitle}>会社概要</h1>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社ウェブプロモーション</td>
              </tr>
              <tr>
                <th>業種</th>
                <td>歯科医院専門コンサルティング</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>〒158-0083 東京都世田谷区奥沢5-42-3 tefu 2F D-11</td>
              </tr>
              <tr>
                <th>代表取締役</th>
                <td>北本 譲</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2011年1月7日</td>
              </tr>
              <tr>
                <th></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
