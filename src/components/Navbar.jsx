import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';


const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0)

    // updating cart value
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
        
    }, [cart, cartCount])
    return (
        <div className=' w-full'>
            <div className=" nav-wrapper ">
                <div className="max-w-6xl mx-auto bg-white w-full flex justify-between py-6 ">
                
                    <div className="logo">
                        <img src='/images/logo.png' />
                    </div>
                    <div className='icons flex justify-between  gap-4 h-8 my-auto'>
                        <Link to='/cart'>
                            <Icon icon="ant-design:search-outlined" inline={true} className='w-6 h-6 my-auto cursor-pointer hover:text-yellow-500' /> 
                        </Link>
                        <Link to='/cart'>
                            <Icon icon="ic:outline-account-circle" inline={true} className='w-6 h-6 my-auto cursor-pointer hover:text-yellow-500' />
                        </Link>
                           
                        
                        <Link to='/cart' className='inline'>
                            <Icon icon="ant-design:shopping-cart-outlined" inline={true} className='w-6 h-6 my-auto cursor-pointer hover:text-yellow-500'/>
                            
                        </Link>
                        <span className='w-5 h-5 text-sm rounded-full bg-yellow-500 text-center pb-3 -mt-1 font-semibold text-white -ml-5 '>{cartCount}
                            </span>
                    </div>

                </div>
                <div className="nav-items bg-gray-200 w-full">
                    <div className="links text-center mx-auto py-4  text-gray-800">
                        <Link to="/" className='px-6 capitalize hover:text-yellow-600 transition'>home</Link>
                        <Link to="/" className='px-6 capitalize hover:text-yellow-600 transition'>About</Link>
                        <Link to="/shop" className='px-6 capitalize hover:text-yellow-600 transition'>Home furniture</Link>
                        <Link to="/products" className='px-6 capitalize hover:text-yellow-600 transition'>Office furniture</Link>
                        <Link to="/product" className='px-6 capitalize hover:text-yellow-600 transition'>Hospital furniture</Link>
                        <Link to="/" className='px-6 capitalize hover:text-yellow-600 transition'>Contact</Link>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

const mapStateToProps =(state) =>{
    return {
        cart: state.shop.cart
    };
};

export default connect(mapStateToProps)(Navbar);
