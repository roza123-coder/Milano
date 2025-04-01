import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './SignUp.module.scss'
import { register } from '@/slices/authSlice'

export const SignUp = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Тут можно добавить логику для отправки данных на сервер
    console.log('Регистрация:', formData)
  }
  const registration = () => {
    dispatch(register(formData))
  }

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>Регистрация</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.formGroup}>
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Повторить пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          onClick={registration}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}
