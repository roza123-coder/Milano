// // // // src/components/Cart.js
// // // import React from 'react'
// // // import { useSelector, useDispatch } from 'react-redux'
// // // import { removeFromCart, increaseQuantity, decreaseQuantity } from '@/slices/cartSlice'
// // // export const Cart = () => {
// // //   const dispatch = useDispatch()
// // //   const cartItems = useSelector(state => state.cart.items)
// // //   return (
// // //     <div>
// // //       <h2>Cart</h2>
// // //       {cartItems.length === 0 ? (
// // //         <p>Your cart is empty</p>
// // //       ) : (
// // //         <ul>
// // //           {cartItems.map(item => (
// // //             <li key={item.id}>
// // //               <img src={item.image} alt={item.title} width={100} />
// // //               <h3>{item.title}</h3>
// // //               <p>Price: ${item.price}</p>
// // //               <div>
// // //                 <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
// // //                 <span>{item.quantity}</span>
// // //                 <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
// // //               </div>
// // //               <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   )
// // // }
// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { removeFromCart, increaseQuantity, decreaseQuantity } from "@/slices/cartSlice";
// // export const Cart = () => {
// //   const cartItems = useSelector((state) => state.cart.items); // Получаем товары из корзины
// //   const dispatch = useDispatch();
// //   // Функция для удаления товара
// //   const handleRemove = (id) => {
// //     dispatch(removeFromCart(id));
// //   };
// //   // Функция для увеличения количества товара
// //   const handleIncrease = (id) => {
// //     dispatch(increaseQuantity(id));
// //   };
// //   // Функция для уменьшения количества товара
// //   const handleDecrease = (id) => {
// //     dispatch(decreaseQuantity(id));
// //   };
// //   // Вычисление общей стоимости
// //   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// //   return (
// //     <div>
// //       <h2>Корзина</h2>
// //       {cartItems.length === 0 ? (
// //         <p>Корзина пуста</p>
// //       ) : (
// //         <div>
// //           {cartItems.map((item) => (
// //             <div key={item.id}>
// //               <img src={item.image} alt={item.title} width={100} />
// //               <h3>{item.title}</h3>
// //               <p>${item.price}</p>
// //               <div>
// //                 <button onClick={() => handleDecrease(item.id)}>-</button>
// //                 <span>{item.quantity}</span>
// //                 <button onClick={() => handleIncrease(item.id)}>+</button>
// //               </div>
// //               <button onClick={() => handleRemove(item.id)}>Удалить</button>
// //             </div>
// //           ))}
// //           <h3>Общая стоимость: ${totalPrice.toFixed(2)}</h3>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };
// // Cart.jsx
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeFromCart,
// } from '@/slices/cartSlice'
// export const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items)
//   const dispatch = useDispatch()
//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id))
//   }
//   const handleIncrease = (id) => {
//     dispatch(increaseQuantity(id))
//   }
//   const handleDecrease = (id) => {
//     dispatch(decreaseQuantity(id))
//   }
//   // Расчет общей суммы
//   const totalAmount = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   )
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div>
//         {cartItems.map((item) => (
//           <div key={item.id}>
//             <img
//               src={item.image}
//               alt={item.title}
//               width={100}
//             />
//             <h3>{item.title}</h3>
//             <p>${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => handleIncrease(item.id)}>Increase</button>
//             <button onClick={() => handleDecrease(item.id)}>Decrease</button>
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//             <p>Item Total: ${item.price * item.quantity}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3>Total: ${totalAmount.toFixed(2)}</h3>
//       </div>
//     </div>
//   )
// }
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Cart.module.scss'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '@/slices/cartSlice'

// Подключение стилей

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id))
  }

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id))
    }
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-buttons">
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="cart-btn"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDecrease(item.id, item.quantity)}
                    className="cart-btn"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="cart-btn remove"
                  >
                    Remove
                  </button>
                </div>
                <p className="cart-item-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  )
}
