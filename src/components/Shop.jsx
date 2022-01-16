import { withRouter } from 'react-router-dom';
import Products from "./Products"

import Layout from "./Layout"
import ProductsTest from './ProductsTest';
const Shop = () => {
    return (
        <Layout>
           <div className="w-full h-auto mx-auto mt-28 md:mt-44">
             <div className='lg:max-w-6xl w-full mx-auto px-2 bg-gray-100 text-center rounded-md mb-4 '>
                 <p className='py-3 text-xl font-medium text-gray-600 '>All Furnitures</p>
             </div>
            <div className='md:mx-10'>
                <ProductsTest />
            </div>
                {/* <Products /> */}
                
            
            </div> 
        </Layout>
        
    )
}

export default withRouter(Shop)
