// // import { createSlice } from "@reduxjs/toolkit"
// // const initialState = {
// //   items: [],
// // }
// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState,
// //   reducers: {
// //     addToCart: (state, action) => {
// //       state.items.push(action.payload)
// //     },
// //     removeFromCart: (state, action) => {
// //       state.items = state.items.filter((item) => item.id !== action.payload)
// //     },
// //     clearCart: (state) => {
// //       state.items = []
// //     },
// //   },
// // })
// // export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
// // export default cartSlice.reducer
// // src/store/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit'
// export const initialState = {
//   items: [],
// }
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingProduct = state.items.find(item => item.id === action.payload.id)
//       if (existingProduct) {
//         existingProduct.quantity += 1
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 })
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload)
//     },
//     increaseQuantity: (state, action) => {
//       const product = state.items.find(item => item.id === action.payload)
//       if (product) product.quantity += 1
//     },
//     decreaseQuantity: (state, action) => {
//       const product = state.items.find(item => item.id === action.payload)
//       if (product && product.quantity > 1) {
//         product.quantity -= 1
//       }
//     },
//   },
// })
// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
// export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existingItem = state.items.find((i) => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      state.items = state.items.filter((item) => item.id !== id)
    },
    increaseQuantity: (state, action) => {
      const id = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item) item.quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item && item.quantity > 1) item.quantity -= 1
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions
export default cartSlice.reducer
