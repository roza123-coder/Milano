// import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import styles from './DetailCatalog.module.scss'

export const DetailCatalog = () => {
  const { id } = useParams()
  const products = useSelector((state) => state.products.products)
  const product = products.find((item) => String(item.id) === id)

  return (
    <div>
      <div>{id}</div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <img
        className={styles.largeImage}
        src={product.image}
        alt={product.title}
      />
      <p>{product.description}</p>
      <Link to="/checkout">Перейти к оформлению заказа</Link>
    </div>
  )
}
