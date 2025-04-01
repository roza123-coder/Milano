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
