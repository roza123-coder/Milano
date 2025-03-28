import React, { useState } from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Header.module.scss'

export const Header = () => {
  const [inputVal, setInputVal] = useState('')
  const navigate = useNavigate()

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  const handleClick = () => {
    if (inputVal.trim()) {
      navigate(`/catalog?search=${inputVal}`)
    }
  }
  const cartItems = useSelector((state) => state.cart?.items?.length || 0)

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link
          to="/"
          className={styles.header_logo_text}
        >
          Milano
        </Link>
      </div>

      <div className={styles.header_userTools}>
        <div className={styles.header_userTools_search}>
          <input
            placeholder="Поиск..."
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyPress}
            name=""
            id=""
          />
          <button onClick={handleClick}>
            <FaSearch className={styles.searchIcon} />
          </button>
        </div>
        <nav>
          <ul className={styles.header_userTools_nav}>
            <li>
              <Link to="/registration">Регистрация</Link>
            </li>
            <li>
              <Link to="/login">Войти</Link>
            </li>
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>

            <li>
              <Link to="/contacts">Kонтакты</Link>
            </li>
            <Link to="/cart">
              <FaShoppingCart />
              {cartItems > 0 && <span>({cartItems})</span>}
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
