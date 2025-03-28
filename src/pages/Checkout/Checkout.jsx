import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Checkout.module.scss'

export const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const [buyerData, setBuyerData] = useState({ name: '', email: '', phone: '' })
  const [receiverData, setReceiverData] = useState({ name: '', address: '' })
  const [paymentMethod, setPaymentMethod] = useState('card')
  const handleChange = (e, setter) => {
    const { name, value } = e.target
    setter((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !buyerData.name ||
      !buyerData.email ||
      !buyerData.phone ||
      !receiverData.name ||
      !receiverData.address
    ) {
      alert('Пожалуйста, заполните все поля')
      return
    }
    alert('Заказ оформлен!')
  }
  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Оформление заказа</h2>
      <div className="checkout-cart">
        <h3>Товары в корзине</h3>
        {cartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="checkout-item"
              >
                <h4>{item.title}</h4>
                <p>Цена: ${item.price.toFixed(2)}</p>
                <p>Количество: {item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="checkout-total">
        Итоговая сумма: ${totalPrice.toFixed(2)}
      </div>
      <form
        onSubmit={handleSubmit}
        className="checkout-form"
      >
        <h3>Данные покупателя</h3>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={buyerData.name}
          onChange={(e) => handleChange(e, setBuyerData)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyerData.email}
          onChange={(e) => handleChange(e, setBuyerData)}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          value={buyerData.phone}
          onChange={(e) => handleChange(e, setBuyerData)}
          required
        />
        <h3>Данные получателя</h3>
        <input
          type="text"
          name="name"
          placeholder="Имя получателя"
          value={receiverData.name}
          onChange={(e) => handleChange(e, setReceiverData)}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Адрес доставки"
          value={receiverData.address}
          onChange={(e) => handleChange(e, setReceiverData)}
          required
        />
        <h3>Способ оплаты</h3>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />{' '}
          Картой
        </label>
        <label>
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />{' '}
          Наличными
        </label>
        <button
          type="submit"
          className="checkout-button"
        >
          Оформить заказ
        </button>
      </form>
      <Link
        to="/"
        className="checkout-back"
      >
        Вернуться в магазин
      </Link>
    </div>
  )
}
