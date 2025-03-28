import React from 'react'

import styles from './Main.module.scss'
import { HeroPromo } from './components/HeroPromo'
import { PopularProducts } from './components/PopularProducts'

export function Main() {
  return (
    <main className={styles.page}>
      <HeroPromo />
      <PopularProducts />
    </main>
  )
}
