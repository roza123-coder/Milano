/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import styles from './styles.module.scss'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div
      className={styles.modal}
      onClick={() => onClose()}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
