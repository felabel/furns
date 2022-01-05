import React from 'react'
import styles from "./CartItem.module.css";


const CartItem = () => {
    return (
        <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src= '/images/bed.jpeg'
        alt='bed'
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>Bedroom Exclusive Mattrass</p>
        <p className={styles.details__desc}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
        <p className={styles.details__price}>$ 350</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            
          />
        </div>
        <button
          
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
    )
}

export default CartItem
