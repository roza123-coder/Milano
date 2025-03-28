import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './Register.module.scss'
import { registerUser } from '@/features/auth/authSlice'

const Register = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(formData))
  }

  return (
    <div className={styles.registerContainer}>
      <h2>Регистрация</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.registerForm}
      >
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Register
