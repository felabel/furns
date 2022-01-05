import React, {useEffect} from 'react'

import { withRouter } from 'react-router-dom';
import { Icon } from '@iconify/react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/shoppingActions';

const Product = ({ productData, addToCart }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div >
            {/* card */}
            <div className=' mx-auto '>
                <div className="pro">
                   
                    
                    <div className="product-card w-64 h-auto bg-brand pt-8 relative fade-up shadow-sm hover:shadow-md">
                         {/* like and discounte */}
                        <div className='w-full flex h-auto justify-between  -mt-8 py-2 px-6  absolute  text-gray-800  '>
                            <div>-10%</div>
                            <div className='tooltip'>
                            <Icon icon="icon-park-outline:like" inline={true} className='w-9 h-9 bg-white p-2 rounded-full hover:bg-yellow-500 text-gray-800 hover:text-white'/>
                            <span className='tooltiptext text-sm'>Add to wishlist</span>
                            </div>
                        </div>
                        

                        <div className="relative  w-3/4 h-4/5 mx-auto mt-5 ">
                            <div className='w-full h-56 '>
                                <img src={productData.image} alt={productData.title} className='h-full w-full bg-red-500'/>
                            </div>
                            
                            <button onClick={() => addToCart(productData.id)} className='add_to_cart_btn text-base absolute bottom-2  w-full h-auto bg-white left-0 py-2 shadow-md flex px-9 hover:text-yellow-500 flip-left' data-aos='flip-left' data-aos-delay='250' data-aos-duration='1000'>
                                <span>
                                <Icon icon="ant-design:shopping-cart-outlined" inline={true} className='w-5 h-5 '/>
                                </span>
                                <span className='pl-2'>Add To Cart</span>
                            </button>
                            
                        </div>
                        <div className="text-center bg-white w-full py-4 text-gray-800">
                                <p>{ productData.title}</p>
                                <p className="price">${productData.price}</p>
                            </div>
               
                    

                    </div>
                </div>

            </div>
        </div>
        
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
} 

export default connect(null, mapDispatchToProps)(Product)
