// src/components/Product.js
import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './Product.module.scss'
import { addToCart } from '@/slices/cartSlice'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div>
      <img
        className={styles.image}
        src={product.image}
        alt={product.title}
        width={200}
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}
