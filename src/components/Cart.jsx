import React from 'react'
import CartItem from './CartItem'
import styles from "./Cart.module.css";


const Cart = () => {
    return (
        <div>
            <div className={styles.cart__items}>
                <CartItem />
            </div>
            <div className={styles.cart__summary}>
                <h4 className={styles.summary__title}>Cart Summary</h4>
                <div className={styles.summary__price}>
                <span>TOTAL:  5</span>
                <span>$ 1000</span>
                </div>
                <button className={styles.summary__checkoutBtn}>
                Proceed To Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart
