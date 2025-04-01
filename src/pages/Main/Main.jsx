import React from 'react'

import styles from './Main.module.scss'
import { FashionSection } from './components/FashionSection/FashionSection'
import { HeroPromo } from './components/HeroPromo/HeroPromo'
import { PopularProducts } from './components/PopularProducts/PopularProducts'

// import { Slider } from './components/Slider/Slider'

export function Main() {
  return (
    <main className={styles.page}>
      <HeroPromo />
      <PopularProducts />
      {/* <Slider /> */}
      <FashionSection />
    </main>
  )
}
