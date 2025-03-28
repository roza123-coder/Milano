import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const DetailCatalog = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`)
      const result = await data.json()
      setProduct(result)
    }
    getData()
  }, [])

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
