import { RouterProvider } from 'react-router-dom'

// import { CartProvider } from './context/cartContext'
import { routes } from './routes/routes.jsx'
import './styles/global.scss'

function App() {
  return (
    // <CartProvider>
    <RouterProvider router={routes} />
    // </CartProvider>
  )
}

export default App
