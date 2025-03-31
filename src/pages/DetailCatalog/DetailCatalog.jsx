import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const DetailCatalog = () => {
  const { id } = useParams()
  const products = useSelector((state) => state.products.products)
  const product = products[id - 1]

  return (
    <div>
      <div>{id}</div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <img
        src={product.image}
        alt={product.title}
      />
      <p>{product.description}</p>
      <Link to="/checkout">Перейти к оформлению заказа</Link>
    </div>
  )
}
