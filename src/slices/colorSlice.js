// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// export const fetchColors = createAsyncThunk('colors/fetchColors', async () => {
//   const response = await axios.get('http://localhost:8080')
//   return response.data.colors
// })

// const colorsSlice = createSlice({
//   name: 'colors',
//   initialState: { colors: [], status: 'idle', error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchColors.pending, (state) => {
//         state.status = 'loading'
//       })
//       .addCase(fetchColors.fulfilled, (state, action) => {
//         state.status = 'succeeded'
//         state.colors = action.payload
//       })
//       .addCase(fetchColors.rejected, (state, action) => {
//         state.status = 'failed'
//         state.error = action.error.message
//       })
//   },
// })

// export default colorsSlice.reducer
