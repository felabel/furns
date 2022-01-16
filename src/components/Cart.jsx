import {useState, useEffect} from 'react'
import CartItem from './CartItem'
import styles from "./Cart.module.css";
import { connect } from 'react-redux'
import { clearCart } from '../redux/shopping/shoppingActions';

const Cart = ({clearCart, cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price
            
        })

        setTotalPrice(price);
        setTotalItems(items)
        // return () => {
        //     cleanup
        // }
    }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice])
    console.log('total is'+ cart.length)
    return (
        <div>
            <div className={styles.cart__items}>
                {cart.map(item => (
                    <CartItem key={item.id} itemData={item} />
                ))}
                {/* <CartItem /> */}
            </div>
            
            <div className='total-container text-left my-8 w-full '>
                <div className='total p-6 w-full md:w-1/2 lg:w-1/3 mx-auto shadow-lg rounded-md'>
                    <h1 className="text-2xl font-semibold text-gray-900">Order Summary</h1>
                    <p className="py-2 text-gray-700 text-xl">Total Items: {totalItems}</p>
                    <p className="py-2 text-gray-900 font-semibold text-lg">{`Total: $${totalPrice}`}</p>
                    <div className='checkout flex space-x-4 mt-4 text-base '>
                    <button className='btn text-base  text-gray-100 text-olive-orange bg-gray-100 font-semibold' >CHECKOUT</button>
                    <button className='btn text-base bg-red-600 text-gray-100' onClick={() => clearCart() }>CLEAR</button>
                    </div>
                </div>
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
const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: (cart) => dispatch(clearCart(cart))
    }
} 


export default connect( mapStateToProps, mapDispatchToProps)(Cart);
