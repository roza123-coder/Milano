import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const signUp = createAsyncThunk(
  'global/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/users`)

      const findedUser = data.find(
        (item) =>
          item.email === userData.email && item.password === userData.password,
      )
      if (findedUser) {
        throw new Error('Пользователь уже существует')
      }

      const resp = await axios.post(`http://localhost:8080/users`, userData)
      return resp.data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

const initialState = {
  isAuth: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      console.log('Work')
    },
    login: (state, action) => {
      state.isAuth = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isAuth = false
      state.user = null
    },
    checkIsAuth: (state) => {
      state.isAuth = localStorage.getItem('isAuth')
    },
  },
})

export const { register, login, logout, checkIsAuth } = authSlice.actions
export default authSlice.reducer
