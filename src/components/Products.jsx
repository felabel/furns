import { connect } from  'react-redux'

import Product from "./Product"

const Products = ({ products }) => {
    console.log(products)
    return (
        <div className=" ">
            <div className="lg:max-w-6xl  grid lg:grid-cols-4 w-full h-auto mx-auto gap-y-6 gap-2  pl-6">
                {products.map((prod) =>(
                    <Product key={prod.id} productData={prod} />
                ))}
                <div>
                    
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
