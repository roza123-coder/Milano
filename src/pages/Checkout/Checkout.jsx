// // import React, { useState } from 'react'
// // import { useSelector } from 'react-redux'
// // import { Link } from 'react-router-dom'
// // export const Checkout = () => {
// //   const cartItems = useSelector((state) => state.cart.items) // Массив товаров в корзине
// //   const totalPrice = cartItems.reduce(
// //     (acc, item) => acc + item.price * item.quantity,
// //     0,
// //   ) // Итоговая сумма
// //   // Состояния для данных формы
// //   const [buyerData, setBuyerData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //   })
// //   const [receiverData, setReceiverData] = useState({
// //     name: '',
// //     address: '',
// //   })
// //   const [paymentMethod, setPaymentMethod] = useState('')
// //   // Обработчики изменения данных
// //   const handleBuyerChange = (e) => {
// //     const { name, value } = e.target
// //     setBuyerData((prevState) => ({ ...prevState, [name]: value }))
// //   }
// //   const handleReceiverChange = (e) => {
// //     const { name, value } = e.target
// //     setReceiverData((prevState) => ({ ...prevState, [name]: value }))
// //   }
// //   const handlePaymentMethodChange = (e) => {
// //     setPaymentMethod(e.target.value)
// //   }
// //   // Обработчик отправки формы
// //   const handleSubmit = (e) => {
// //     e.preventDefault()
// //     // Логика отправки данных (например, API)
// //     alert('Заказ оформлен!')
// //   }
// //   return (
// //     <div>
// //       <h2>Оформление заказа</h2>
// //       {/* Список товаров в корзине */}
// //       <div>
// //         <h3>Товары в корзине</h3>
// //         {cartItems.length === 0 ? (
// //           <p>Корзина пуста</p>
// //         ) : (
// //           <div>
// //             {cartItems.map((item) => (
// //               <div key={item.id}>
// //                 <h4>{item.title}</h4>
// //                 <p>Цена: ${item.price}</p>
// //                 <p>Количество: {item.quantity}</p>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //       {/* Итоговая сумма */}
// //       <div>
// //         <h3>Итоговая сумма: ${totalPrice}</h3>
// //       </div>
// //       {/* Форма для данных покупателя */}
// //       <div>
// //         <h3>Данные покупателя</h3>
// //         <form onSubmit={handleSubmit}>
// //           <div>
// //             <label htmlFor="buyerName">Имя</label>
// //             <input
// //               type="text"
// //               id="buyerName"
// //               name="name"
// //               value={buyerData.name}
// //               onChange={handleBuyerChange}
// //               placeholder="Ваше имя"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="buyerEmail">Email</label>
// //             <input
// //               type="email"
// //               id="buyerEmail"
// //               name="email"
// //               value={buyerData.email}
// //               onChange={handleBuyerChange}
// //               placeholder="Ваша почта"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="buyerPhone">Телефон</label>
// //             <input
// //               type="text"
// //               id="buyerPhone"
// //               name="phone"
// //               value={buyerData.phone}
// //               onChange={handleBuyerChange}
// //               placeholder="Ваш телефон"
// //               required
// //             />
// //           </div>
// //           {/* Форма для данных получателя */}
// //           <div>
// //             <h3>Данные получателя</h3>
// //             <div>
// //               <label htmlFor="receiverName">Имя получателя</label>
// //               <input
// //                 type="text"
// //                 id="receiverName"
// //                 name="name"
// //                 value={receiverData.name}
// //                 onChange={handleReceiverChange}
// //                 placeholder="Имя получателя"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="receiverAddress">Адрес доставки</label>
// //               <input
// //                 type="text"
// //                 id="receiverAddress"
// //                 name="address"
// //                 value={receiverData.address}
// //                 onChange={handleReceiverChange}
// //                 placeholder="Адрес получателя"
// //                 required
// //               />
// //             </div>
// //           </div>
// //           {/* Способ оплаты */}
// //           <div>
// //             <h3>Способ оплаты</h3>
// //             <div>
// //               <label>
// //                 <input
// //                   type="radio"
// //                   value="card"
// //                   checked={paymentMethod === 'card'}
// //                   onChange={handlePaymentMethodChange}
// //                 />
// //                 Картой
// //               </label>
// //             </div>
// //             <div>
// //               <label>
// //                 <input
// //                   type="radio"
// //                   value="cash"
// //                   checked={paymentMethod === 'cash'}
// //                   onChange={handlePaymentMethodChange}
// //                 />
// //                 Наличными
// //               </label>
// //             </div>
// //           </div>
// //           <button type="submit">Оформить заказ</button>
// //         </form>
// //       </div>
// //       {/* Ссылка на главную страницу */}
// //       <Link to="/">Вернуться в магазин</Link>
// //     </div>
// //   )
// }
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
// import axios from 'axios'

// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { Link, useHistory } from 'react-router-dom'

// import './Checkout.module.scss'

// // Импортируем файл стилей

// export const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart.items) // Массив товаров в корзине
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0,
//   ) // Итоговая сумма

//   // Состояния для данных формы
//   const [buyerData, setBuyerData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   })
//   const [receiverData, setReceiverData] = useState({
//     name: '',
//     address: '',
//   })
//   const [paymentMethod, setPaymentMethod] = useState('')
//   const [isLoading, setIsLoading] = useState(false) // Для отображения загрузки
//   const [error, setError] = useState(null) // Для ошибок

//   const history = useHistory() // Для редиректа после успешного оформления заказа

//   // Обработчики изменения данных
//   const handleBuyerChange = (e) => {
//     const { name, value } = e.target
//     setBuyerData((prevState) => ({ ...prevState, [name]: value }))
//   }

//   const handleReceiverChange = (e) => {
//     const { name, value } = e.target
//     setReceiverData((prevState) => ({ ...prevState, [name]: value }))
//   }

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value)
//   }

//   // Обработчик отправки формы
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setIsLoading(true) // Включаем индикатор загрузки

//     // Данные для отправки на сервер
//     const orderData = {
//       buyer: buyerData,
//       receiver: receiverData,
//       paymentMethod,
//       cartItems,
//       totalPrice,
//     }

//     // Отправка данных на сервер с помощью axios
//     axios
//       .post('https://api.example.com/orders', orderData)
//       .then((response) => {
//         setIsLoading(false) // Выключаем индикатор загрузки
//         alert(`Заказ оформлен! Номер заказа: ${response.data.orderId}`)
//         history.push(`/order/${response.data.orderId}`) // Перенаправляем на страницу с номером заказа
//       })
//       .catch((error) => {
//         setIsLoading(false) // Выключаем индикатор загрузки
//         setError('Ошибка при оформлении заказа. Попробуйте снова.')
//       })
//   }

//   return (
//     <div className="checkout-container">
//       <h2>Оформление заказа</h2>

//       {/* Список товаров в корзине */}
//       <div className="cart-items">
//         <h3>Товары в корзине</h3>
//         {cartItems.length === 0 ? (
//           <p>Корзина пуста</p>
//         ) : (
//           <div>
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="cart-item"
//               >
//                 <h4>{item.title}</h4>
//                 <p>Цена: ${item.price}</p>
//                 <p>Количество: {item.quantity}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Итоговая сумма */}
//       <div>
//         <h3>Итоговая сумма: ${totalPrice}</h3>
//       </div>

//       {/* Форма для данных покупателя */}
//       <div className="form-container">
//         <h3>Данные покупателя</h3>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="buyerName">Имя</label>
//             <input
//               type="text"
//               id="buyerName"
//               name="name"
//               value={buyerData.name}
//               onChange={handleBuyerChange}
//               placeholder="Ваше имя"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="buyerEmail">Email</label>
//             <input
//               type="email"
//               id="buyerEmail"
//               name="email"
//               value={buyerData.email}
//               onChange={handleBuyerChange}
//               placeholder="Ваша почта"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="buyerPhone">Телефон</label>
//             <input
//               type="text"
//               id="buyerPhone"
//               name="phone"
//               value={buyerData.phone}
//               onChange={handleBuyerChange}
//               placeholder="Ваш телефон"
//               required
//             />
//           </div>

//           {/* Форма для данных получателя */}
//           <div>
//             <h3>Данные получателя</h3>
//             <div>
//               <label htmlFor="receiverName">Имя получателя</label>
//               <input
//                 type="text"
//                 id="receiverName"
//                 name="name"
//                 value={receiverData.name}
//                 onChange={handleReceiverChange}
//                 placeholder="Имя получателя"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="receiverAddress">Адрес доставки</label>
//               <input
//                 type="text"
//                 id="receiverAddress"
//                 name="address"
//                 value={receiverData.address}
//                 onChange={handleReceiverChange}
//                 placeholder="Адрес получателя"
//                 required
//               />
//             </div>
//           </div>

//           {/* Способ оплаты */}
//           <div>
//             <h3>Способ оплаты</h3>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   value="card"
//                   checked={paymentMethod === 'card'}
//                   onChange={handlePaymentMethodChange}
//                 />
//                 Картой
//               </label>
//             </div>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   value="cash"
//                   checked={paymentMethod === 'cash'}
//                   onChange={handlePaymentMethodChange}
//                 />
//                 Наличными
//               </label>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Оформление заказа...' : 'Оформить заказ'}
//           </button>

//           {/* Ошибка при отправке формы */}
//           {error && <p className="error-message">{error}</p>}
//         </form>
//       </div>

//       {/* Ссылка на главную страницу */}
//       <Link
//         to="/"
//         className="checkout-link"
//       >
//         Вернуться в магазин
//       </Link>
//     </div>
//   )
// }
