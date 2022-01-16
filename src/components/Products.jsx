import { connect } from  'react-redux'
import {useState, useMemo} from 'react';
import Product from "./Product"



const Products = ({ products }) => {
    
    // console.log(products)
    return (
        <div className="  md:mt-44 pt-10">
            <div className="lg:max-w-6xl  grid grid-cols-2 lg:grid-cols-4 w-full h-auto mx-auto gap-y-6 gap-2  px-1">
                {products.map((prod) =>(
                    <Product key={prod.id} productData={prod} />
                ))}
                <div>
                    {/* 
                    {products.filter((prod, i) => i < 4).map(prod => (
                        <Product Key={prod.id} productData={prod}
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

export default connect(mapStateToProps)(Products);
