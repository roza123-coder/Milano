import axios from 'axios'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { routes } from './routes/routes.jsx'
import { getProducts } from './slices/productsSlice'
import './styles/global.scss'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    // <CartProvider>
    <RouterProvider router={routes} />
    // </CartProvider>
  )
}

export default App
