import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Асинхронное действие для загрузки товаров
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/products')
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default productsSlice.reducer
