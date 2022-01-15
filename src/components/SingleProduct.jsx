import React from 'react'

import { connect } from 'react-redux'
import { addToCart  } from '../redux/shopping/shoppingActions'
import Layout from './Layout'

const SingleProduct = ({ currentItem, addToCart }) => {

    return (
        <Layout>
            <div>
            <div className="w-full h-auto mt-24  md:mt-44 ">
                <div className="w-4/5 h-full  mx-auto md:flex gap-2 " >
                    <div className="image w-full h-56 md:w-2/5 md:h-auto bg-brand shadow-md">
                        <img src={currentItem.image} className='w-4/5 mx-auto md:mx-0 md:w-full h-full' alt={currentItem.title}/>
                    </div>
                    <div className=" text w-full md:w-3/5 h-full pt-6 py-2 md:py-8 pl-4 text-gray-800 text-base block">
                        <p className='py-2'><span className='font-semibold'>Availability</span>: out of stock</p>
                        <p className='text-xl md:text-2xl font-semibold md:py-2 capitalize text-black'>{currentItem.title}</p>
                        <p className='text-lg md:text-2xl font-semibold py-2 capitalize text-black'>${currentItem.price}</p>
                        <p className='py-2'>{currentItem.description}

                        </p>
                        <div className='py-4 text-lg block '>
                            <form action="">
                                <label for='size' className='font-semibold block '>Size:</label>
                                <select name="" id="" className='ml-2 mt-3 px-4 py-1 rounded-md w-4/5 h-12 border border-gray-300 bg-white'> Size: 
                                    <option value="size">14 inches</option>
                                    <option value="size">14 inches</option>
                                    <option value="size">14 inches</option>
                                </select>

                                {/* color */}
                                <label for='size' className='font-semibold block'>Size:</label>
                                <select name="" id="" className='ml-2 mt-3 px-4 py-1 rounded-md w-4/5 h-12 border border-gray-300 bg-white'> Color: 
                                    <option value="size">red</option>
                                    <option value="size">blue</option>
                                    <option value="size">14 inches</option>
                                </select>

                                {/* material */}
                                <label for='material' className='font-semibold block'>Material:</label>
                                <select name="" id="" className='ml-2 mt-3 px-4 py-1 rounded-md w-4/5 h-12 border border-gray-300 bg-white'> Size: 
                                    <option value="size">14 inches</option>
                                    <option value="size">14 inches</option>
                                    <option value="size">14 inches</option>
                                </select>
                            </form>
                        </div>
                        <div className=" button md:align-center md:block  w-4/5 h-auto  ">
                            {/* <div className='qty bg-brand w-32 text-center py-4 text-xl font-semibold text-white'>
                                <span className='inline-block w-3/12 bg-olive-orange pb-1 rounded-sm text-2xl shadow-sm'>-</span>
                                <span className='inline-block w-1/2 bg-gray-100 text-black'>1</span>
                                <span className='inline-block w-3/12 bg-olive-orange pb-1 rounded-sm text-2xl shadow-sm'>+</span>
                            </div> */}
                            <div className='add_to cart py-3 mx-auto w-full px-8 md:px-0'>
                                <button onClick={() => addToCart(currentItem.id)} className='btn px-8   rounded-sm shadow-md bg-olive-orange text-base md:text-xl lg:px-10 md:px-4'>
                                    Add To Cart

                                </button>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
        </div>
        </Layout>
        
    )
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
