import React, {useEffect} from 'react'

import { withRouter, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ToolTip from './ToolTip';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { connect } from 'react-redux';
import { addToCart,  loadCurrentItem} from '../redux/shopping/shoppingActions';

const Product = ({ productData, addToCart, loadCurrentItem }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div >
            {/* card */}
            <div className=' mx-auto '>
                <div className="pro">
                   
                    
                    <div className="product-card w-42 md:w-64 h-auto bg-brand pt-8 relative fade-up shadow-sm hover:shadow-md">
                         {/* like and discounte */}
                        <div className='w-full flex h-auto justify-between  -mt-8 py-2 px-4  absolute  text-gray-800  '>
                            <div className='pt-1'><p className='bg-red-500 px-2 py-1 text-white rounded-md h-auto text-xs font-semibold '>-10%</p></div>
                            {/* <div className='tooltip'>
                            <Icon icon="icon-park-outline:like" inline={true} className='w-9 h-9 bg-white p-2 rounded-full hover:bg-olive-orange text-gray-800 hover:text-white'/>
                            <span className='tooltiptext text-sm'>Add to wishlist</span>
                            </div> */}
                            <ToolTip />
                        </div>
                        

                        <div className="relative w-3/4 h-28 sm:h-40  md:w-3/4 md:h-4/5 mx-auto mt-5 bg-red-300">
                            <Link to={`/product/${productData.id}`}>
                                <div className='w-full h-28 sm:h-40 md:h-56 ' onClick={() => loadCurrentItem(productData)}>
                                    <img src={productData.image} alt={productData.title} className='h-full w-full '/>
                                </div>
                            </Link>
                            
                            
                            <button onClick={() => addToCart(productData.id)} className='hidden md:flex add_to_cart_btn text-base absolute bottom-2  w-full h-auto bg-white left-0 py-2 shadow-md  px-9 hover:text-olive-orange flip-left ' data-aos='flip-left' data-aos-delay='250' data-aos-duration='1000'>
                                <span>
                                <Icon icon="ant-design:shopping-cart-outlined" inline={true} className='w-5 h-5 '/>
                                </span>
                                <span className='pl-2'>Add To Cart</span>
                            </button>
                            
                        </div>
                        <div className="text-center bg-white w-full  md:py-4 text-gray-800">
                                <p>{ productData.title}</p>
                                <p className="price">${productData.price}</p>
                        </div>

                        {/* for small screens */}
                        <button onClick={() => addToCart(productData.id)} className='md:hidden bottom-10 text-base  bottom-2  w-full h-auto bg-olive-orange text-white py-2 shadow-md flex px-6 flip-left block' data-aos='flip-left' data-aos-delay='250' data-aos-duration='1000'>
                                <span>
                                    <Icon icon="ant-design:shopping-cart-outlined" inline={true} className='w-5 h-5 '/>
                                </span>
                                <span className='pl-2'>Add To Cart</span>
                        </button>
               
                    

                    </div>
                </div>

            </div>
        </div>
        
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
} 

export default connect(null, mapDispatchToProps)(Product)
