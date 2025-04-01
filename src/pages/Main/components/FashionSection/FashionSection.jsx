import React from 'react'

import styles from './FashionSection.module.scss'

export const FashionSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.imageWrapper}>
        <img
          src="https://www.chanel.com/puls-img/c_limit,w_2400/q_auto:good,dpr_auto,f_auto/1742562117322-homepagecorpoonedesktopjpg_3240x5760.jpg"
          alt="Fashion Campaign"
        />
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Fashion</h2>
          <h3 className={styles.subTitle}>The Milano 25 HandBag</h3>
          <button className={styles.button}>See the Campaign</button>
        </div>
      </div>
    </div>
  )
}
