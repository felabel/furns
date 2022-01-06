import React from 'react'

import { connect } from 'react-redux'
import { addToCart  } from '../redux/shopping/shoppingActions'

const SingleProduct = ({ currentItem, addToCart }) => {

    return (
        <div>
            <div className="w-full h-auto  mt-12">
                <div className="w-4/5 h-full  mx-auto flex gap-2" >
                    <div className="image w-2/5 h-auto bg-brand shadow-md">
                        <img src={currentItem.image} className='w-full' alt={currentItem.title}/>
                    </div>
                    <div className="text w-3/5 h-full py-8 pl-4 text-gray-800 text-base block">
                        <p className='py-2'><span className='font-semibold'>Availability</span>: out of stock</p>
                        <p className='text-2xl font-semibold py-2 capitalize text-black'>{currentItem.title}</p>
                        <p className='text-2xl font-semibold py-2 capitalize text-black'>{currentItem.price}</p>
                        <p className='py-2'>{currentItem.description}

                        </p>
                        <div className='py-4 text-lg block'>
                            <form action="">
                                <label for='size' className='font-semibold block '>Size:</label>
                                <select name="" id="" className='ml-2 mt-3 px-4 py-1 rounded-md w-4/5 h-12 border border-gray-300 bg-white'> Size: 
                                    <option value="size">14 inches</option>
                                    <option value="size">14 inches</option>
                                    <option value="size">14 inches</option>
                                </select>

                                {/* color */}
                                <label for='size' className='font-semibold block'>Size:</label>
                                <select name="" id="" className='ml-2 mt-3 px-4 py-1 rounded-md w-4/5 h-12 border border-gray-300 bg-white'> Size: 
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
                        <div className="button md:align-center md:block lg:flex w-4/5 shadow-md h-auto justify-around  ">
                            <div className='qty bg-brand w-32 text-center py-4 text-xl font-semibold text-white'>
                                <span className='inline-block w-3/12 bg-yellow-500 pb-1 rounded-sm text-2xl shadow-sm'>-</span>
                                <span className='inline-block w-1/2 bg-gray-100 text-black'>1</span>
                                <span className='inline-block w-3/12 bg-yellow-500 pb-1 rounded-sm text-2xl shadow-sm'>+</span>
                            </div>
                            <div className='add_to cart py-3'>
                                <button onClick={() => addToCart(currentItem.id)} className='btn rounded-sm bg-yellow-500 text-xl lg:px-10 md:px-4'>
                                    Add To Cart

                                </button>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
        </div>
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
