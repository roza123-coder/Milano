// import axios from 'axios'
// import Modal from 'components/modal'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useSearchParams } from 'react-router-dom'
// import styles from './Catalog.module.scss'
// import { addToCart, removeFromCart } from '@/slices/cartSlice'
// export const Catalog = () => {
//   const [filtered, setFiltered] = useState([])
//   const [searchParams, setSearchParams] = useSearchParams()
//   const CartItems = useSelector((state) => state.cart.items)
//   const products = useSelector((state) => state.products.products)
//   const dispatch = useDispatch()
//   useEffect(() => {
//     if (!searchParams.has('search')) {
//       setSearchParams({ search: '' }, { replace: true })
//     }
//   }, [searchParams, setSearchParams])
//   useEffect(() => {
//     const searchValue = searchParams.get('search')?.toLowerCase() || ''
//     const filt = products.filter((item) =>
//       item.title.toLowerCase().includes(searchValue),
//     )
//     setFiltered(filt)
//   }, [searchParams, products])
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const handleOpenModal = () => {
//     setIsModalOpen(true)
//   }
//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//   }
//   return (
//     <div className={styles.root}>
//       <button
//         onClick={handleOpenModal}
//         style={{
//           marginTop: 100,
//         }}
//       >
//         hello
//       </button>
//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       >
//         assda
//       </Modal>
//       <div className={styles.wrapper}>
//         {filtered.map((product) => (
//           <div
//             key={product.id}
//             className={styles.card}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//             />
//             <h3>{product.title}</h3>
//             <p>{product.price}$</p>
//             <div>
//               <p>
//                 {Array.from({ length: Math.round(product.rating.rate) }).map(
//                   (_, index) => (
//                     <span key={index}>★</span>
//                   ),
//                 )}
//               </p>
//               <p>Rated: {product.rating.count}</p>
//             </div>
//             <p>{product.category}</p>
//             <Link to={`/catalog/${product.id}`}>
//               <button>More</button>
//             </Link>
//             {CartItems.find((cartItem) => cartItem.id === product.id) ? (
//               <button onClick={() => dispatch(removeFromCart(product.id))}>
//                 remove
//               </button>
//             ) : (
//               <button onClick={() => dispatch(addToCart(product))}>
//                 Добавить в корзину
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
import axios from 'axios'
import Modal from 'components/modal'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'

import styles from './Catalog.module.scss'
import { addToCart, removeFromCart } from '@/slices/cartSlice'

export const Catalog = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const pageElem = 5
  const [totalPages, setTotalPages] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const CartItems = useSelector((state) => state.cart.items)
  const products = useSelector((state) => state.products.products)
  const [filtered, setFiltered] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    if (!searchParams.has('search')) {
      setSearchParams({ search: '' }, { replace: true })
    }
  }, [searchParams, setSearchParams])

  useEffect(() => {
    const searchValue = searchParams.get('search')?.toLowerCase() || ''
    const filt = products.filter((item) =>
      item.title.toLowerCase().includes(searchValue),
    )
    setTotalPages(Math.ceil(filt.length / pageElem))
    setFiltered(filt)
  }, [searchParams, products])
  return (
    <div className={styles.root}>
      <h1>
        Каталог <br />
        <small>Страница #{pageNumber + 1}</small>
      </h1>
      <div className={styles.wrapper}>
        {filtered
          .slice(pageNumber * pageElem, pageNumber * pageElem + pageElem)
          .map((product) => (
            <div
              key={product.id}
              className={styles.card}
            >
              <img
                src={product.image}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
              <div className={styles.rating}>
                {Array.from({ length: Math.round(product.rating.rate) }).map(
                  (_, index) => (
                    <span key={index}>★</span>
                  ),
                )}
              </div>
              <p>Rated: {product.rating.count}</p>
              <p>{product.category}</p>
              <Link to={`/catalog/${product.id}`}>
                <button className={styles.button}>More</button>
              </Link>
              {CartItems.find((cartItem) => cartItem.id === product.id) ? (
                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className={styles.button}
                >
                  remove
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className={styles.button}
                >
                  Добавить в корзину
                </button>
              )}
            </div>
          ))}
      </div>
      <div className={styles.rating}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Link
            href={`?page=${index}`}
            key={index}
            onClick={() => setPageNumber(index)}
            className={index == pageNumber ? styles.active : ''}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  )
}
