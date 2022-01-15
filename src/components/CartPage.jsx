import React from 'react'
import Cart from './Cart'
import Layout from './Layout'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const CartPage = ({cart}) => {
    console.log(cart.length)
    return (
        <div>
            <Layout>
                <>
             {
                cart.length === 0
                ? 
                    <div className='text-center mt-36 mb-10'><p className="p-10">Your cart is empty</p> 
                    <Link to='/shop' className="px-10 tracking-wider mx-4 py-2 hover:text-olive-orange bg-gray-100 border-2 border-olive-orange">
                    Make an Order
                    </Link>
                    </div>
                :
                <div className=" w-full h-auto mx-auto mt-36 shadow-lg">
                    <div className="tit max-w-7xl h-auto mx-auto"><p>Cart {cart.length} Items</p></div>
                        <div className="hidden sm:grid  max-w-6xl h-auto mx-auto  sm:grid-cols-6 overflow-x-auto p-4 font-semibold">
                        <div className="item  col-span-3 grid">Item</div>
                        <div className="details  col-span-1 text-center">Price</div>
                        <div className="price  col-span-1 text-center">Quantity</div>
                        <div className="price  col-span-1 text-center">subtotal</div>


                    </div>
                
                    <Cart />
                
                </div> 
                }
        </>
            
            </Layout>
        </div>
    )
}
// getting the cart from the state
const mapStateToProps = (state) =>{
    return{
        cart: state.shop.cart
    }
}


export default connect( mapStateToProps)(CartPage);

