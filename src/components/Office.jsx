import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import Layout from './Layout'

const Office = ({ products, category }) => {
    return (
        <Layout>
         <div className="mt-28 lg:mt-44">
             <div className='mb-4 lg:mb-10 lg:max-w-6xl w-full mx-auto px-2 bg-gray-100 text-center rounded-md'>
                 <p className='py-3 text-xl font-medium text-gray-600 '>furnitures / office furnitures</p>
             </div>
            
            <div className="lg:max-w-6xl w-full sm:w-4/5 lg:w-full  grid grid-cols-2 sm:grid-cols-2   sm:gap-x-6 lg:grid-cols-4  h-auto mx-auto gap-y-6 gap-x-2    md:pl-12 lg:pl-1 py-4 ">
                {products.filter((prod) => prod.category == "office").map(prod => (
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
        </Layout>
        
    )
}

const mapStateToProps = (state) => {
    // console.log(state.shop.products)
    return {
        // console.log(state)
      products: state.shop.products,
      category: state.shop.products.category,
    };
  };

export default connect(mapStateToProps)(Office)















// import { connect } from  'react-redux'
// import {useState, useMemo} from 'react';
// import Product from "./Product";
// import Pagination from "../Pagination"
// import { withRouter, Link } from 'react-router-dom';

// let PageSize = 8 ;


// const Products = ({ products, category, productData  }) => {
   
//     const [currentPage, setCurrentPage] = useState(1);
//     const items = useMemo(() => {
//         const firstPageIndex = (currentPage -1) * PageSize;
//         const lastPageIndex = firstPageIndex + PageSize;
//         return products.slice(firstPageIndex, lastPageIndex)
//     }, [currentPage, products])

//     console.log(currentPage)
//     console.log( 'length is' + products.length)
//     const mappedProducts = items.filter((products) => products.category == 'office').map(products => {
//        return (
//         <div key={products.id}  className="  ">
//             {/* <div className="lg:max-w-6xl  grid grid-cols-2 lg:grid-cols-4 w-full h-auto mx-auto gap-y-6 gap-2  px-1"> */}
//                 {/* {products.map((prod) =>(
//                     <Product key={prod.id} productData={prod} />
//                 ))} */}
//                 <Product productData={products}/>
               
//             {/* </div> */}
            
//         </div>
//         ) 
//     });
    

//     return (
       
//         <section className=" lg:mx-auto w-full">
//             <div className="lg:max-w-6xl mx-auto lg:mt-44 pb-10  grid grid-cols-2 lg:grid-cols-4 w-full h-auto  gap-y-6 gap-2  px-1">


//             { mappedProducts}
//             <div className=' mx-auto lg:mx-96  block bg-yellow-500 w-96 lg:w-full text-center mt-10'>
//                 <Pagination
//                     className="border-olive-orange"
//                     currentPage={currentPage}
//                     totalCount={products.length}
//                     pageSize={5}
//                     onPageChange={page => setCurrentPage(page)}
//                 />
//             </div>
//         </div>
//         </section>
//     )
// }
// const mapStateToProps = (state) => {
//     // console.log(state.shop.products)
//     return {
//         // console.log(state)
//       products: state.shop.products,
//       category: state.shop.products.category
//     };
//   };

// export default connect(mapStateToProps)(Products);
