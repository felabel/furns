import {useState, useEffect} from 'react'
import CartItem from './CartItem'
import styles from "./Cart.module.css";
import { connect } from 'react-redux'

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItema] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price
            
        })

        setTotalPrice(price);
        setTotalItema(items)
        // return () => {
        //     cleanup
        // }
    }, [cart, totalPrice, totalItems, setTotalItema, setTotalPrice])
    return (
        <div>
            <div className={styles.cart__items}>
                {cart.map(item => (
                    <CartItem key={item.id} itemData={item} />
                ))}
                {/* <CartItem /> */}
            </div>
            <div className={styles.cart__summary}>
                <h4 className={styles.summary__title}>Cart Summary</h4>
                <div className={styles.summary__price}>
                <span>TOTAL:  {totalItems}</span>
                <span>$ {totalPrice}</span>
                </div>
                <button className={styles.summary__checkoutBtn}>
                Proceed To Checkout
                </button>
            </div>
        </div>
    )
}


// getting the cart from the state
const mapStateToProps = (state) =>{
    return{
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart);
