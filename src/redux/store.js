// import { configureStore } from "@reduxjs/toolkit"
// export const store = configureStore({
//   reducer: {
//     // Твои редюсеры
//   },
// })
import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../slices/cartSlice'
// import colorReducer from '../slices/colorSlice'
import productsReducer from '../slices/productsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    // color: colorReducer,
  },
})
