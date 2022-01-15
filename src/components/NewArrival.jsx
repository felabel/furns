import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

const Featured = ({ products }) => {
    return (
        <div className=" ">
            
            <div className="lg:max-w-6xl w-full sm:w-4/5 lg:w-full lg:bg-blue-300 grid grid-cols-2 sm:grid-cols-2  sm:bg-pink-300 md:bg-yellow-400 sm:gap-x-6 lg:grid-cols-4  h-auto mx-auto gap-y-6 gap-x-2    md:pl-12 lg:pl-1 py-4 bg-red-500">
                {products.filter((prod, i) => i < 8 && i >3).map(prod => (
                        <Product Key={prod.id} productData={prod} />
                    ))}
                <div>
                    {/* 
                    {products.filter((prod, i) => i < 4).map(prod => (
                        <Product Key={prod.id} productData={prod} />
                    ))}
                     */}
                    
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.shop.products)
    return {
        // console.log(state)
      products: state.shop.products,
    };
  };

export default connect(mapStateToProps)(Featured)
