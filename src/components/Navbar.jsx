import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { Transition } from "@headlessui/react";

import { connect } from 'react-redux';

import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false);

    // updating cart value
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
        
    }, [cart, cartCount])
    return (
        <div className=' w-full z-50 fixed top-0'>
            <div className="bg-white nav-wrapper  shadow-md w-full z-50">
                <div className="max-w-6xl mx-auto bg-white w-full flex justify-between py-4 lg:py-6 px-2 lg:px-0 z-50">
                    {/* button to display menu */}
                    <div className=" vmobile-menu  lg:hidden ">
                            <button onClick = {() => setIsOpen(!isOpen)}>
                                {!isOpen ? (
                                    <svg
                                        className="block h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="black"
                                        aria-hidden="true"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    ) : (
                                    <svg
                                        className="block h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="black"
                                        aria-hidden="true"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                            {/* menu */}
                            
                        </div>
                    <div className="logo  w-36 md:w-44">
                        <img src='/images/logo.png' />
                    </div>
                    <div className='icons  flex justify-between  gap-4 h-8 my-auto '>
                        <Link to='/cart'>
                            <Icon icon="ant-design:search-outlined" inline={true} className='w-6 h-6 my-auto cursor-pointer hover:text-olive-orange' /> 
                        </Link>
                        <Link to='/cart' className='hidden md:inline'>
                            <Icon icon="ic:outline-account-circle" inline={true} className='w-6 h-6 my-auto cursor-pointer hover:text-olive-orange' />
                        </Link>
                           
                        
                        <Link to='/cart' className='inline'>
                            <Icon icon="ant-design:shopping-cart-outlined" inline={true} className='w-6 h-6 my-auto cursor-pointer hover:text-olive-orange'/>
                            
                        </Link>
                        { cartCount ===0 ? 
                            <span></span>
                        : 
                        <span className='w-5 h-5 text-sm rounded-full bg-olive-orange text-center pb-3 -mt-1 font-semibold text-white -ml-5 '>{cartCount}
                            </span>
                        }
                        
                    </div>
                    {/* mobile menu */}
                  

                    
                   

                </div>
                <div className="nav-items bg-gray-200 w-full hidden md:block">
                    <div className="links text-center mx-auto py-4  text-gray-800">
                        <Link to="/" className='px-6 md:px-4 lg:px-6 xl:px-6 capitalize hover:text-olive-orange transition'>home</Link>
                        <Link to="/" className='px-6 md:px-4 lg:px-6 xl:px-6 capitalize hover:text-olive-orange transition'>About</Link>
                        <Link to="/shop" className='px-6 md:px-4 lg:px-6 xl:px-6 capitalize hover:text-olive-orange transition'>Home furniture</Link>
                        <Link to="/products" className='px-6 md:px-4 lg:px-6 xl:px-6 capitalize hover:text-olive-orange transition'>Office furniture</Link>
                        <Link to="/product" className='px-6 md:px-4 lg:px-6 xl:px-6 capitalize hover:text-olive-orange transition'>Hospital furniture</Link>
                        <Link to="/" className='px-6 md:px-4 lg:px-6 xl:px-6 capitalize hover:text-olive-orange transition'>Contact</Link>
                        
                    </div>
                </div>

                {/* mobile nav */}
                

            </div>
            <Transition
                    show={isOpen}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    >
                        {isOpen && (
                            <div className='relative'>
                                <div className='absolute navwrapper pt-20 bg-white w-full h-screen z-10 overflow-hidden pl-5'>
                                   <div className='block'>
                                       <Link to='/' className='block uppercase py-2 hover:text-olive-orange'>
                                           Home
                                       </Link>
                                       <Link to='/' className='block uppercase py-2 hover:text-olive-orange'>
                                           About
                                       </Link>
                                       <Link to='/' className='block uppercase py-2 hover:text-olive-orange'>
                                           Home Furniture
                                       </Link>
                                       <Link to='/' className='block uppercase py-2 hover:text-olive-orange'>
                                           Office Furniture
                                       </Link>
                                       <Link to='/' className='block uppercase py-2 hover:text-olive-orange'>
                                           Hospital Furniture
                                       </Link>
                                       <Link to='/' className='block  uppercase py-2 hover:text-olive-orange'>
                                           Contact
                                       </Link>
                                   </div>
                                </div>
                            </div>
                                
                            )}

                    </Transition>
            
            
        </div>
    )
}

const mapStateToProps =(state) =>{
    return {
        cart: state.shop.cart
    };
};

export default connect(mapStateToProps)(Navbar);
