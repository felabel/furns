import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='mb-0 w-full h-auto bg-red-500 relative'>
                <div className="absolute grid lg:grid-cols-4 flex gap-6 bg-gray-700 p-14 text-gray-100 w-full mx-auto top-20">
                    <div className="about-us">
                        
                        <p>ABOUT US</p>
                        <div className='mt-4'>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur totam culpa error, alias vero eum!</p> 
                        </div>
                        

                    </div>
                    <div className="in ">
                        <p>INFORMATION</p>
                        <div className='mt-4'>
                            <Link to='/' className='block' ><a>About Us</a></Link>
                            <Link to='/' className='block' ><a>Manufacturers</a></Link>
                            <Link to='/' className='block' ><a>Manufacturers</a></Link>
                            <Link to='/' className='block' ><a>Manufacturers</a></Link>
                            <Link to='/' className='block' ><a>Manufacturers</a></Link> 
                        </div>
                        
                    </div>
                    <div className="in ">
                        <p>My ACCOUNT</p>
                        <div className='capitalize mt-4'>
                            <Link to='/' className='block' ><a>Login</a></Link>
                            <Link to='/' className='block' ><a>my cart</a></Link>
                            <Link to='/' className='block' ><a>wishlist</a></Link>
                            <Link to='/' className='block' ><a>my account</a></Link>
                        </div>
                        
                    </div>

                    <div className="in ">
                        <p>NEWSLETTER</p>
                        <div className='capitalize mt-4'>
                            <form>
                                <input type="text" name="" id="" placeholder='enter email address' className='w-5/6 bg-gray-700 border-2 border-gray-300 p-3 capitalize'/>
                                <button type="submit" className='text-sm capitalize text-white bg-olive-orange py-3 px-10 font-bold mt-4'>subscribe</button>
                            </form>
                        </div>
                        
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default Footer
