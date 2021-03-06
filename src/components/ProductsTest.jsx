import { connect } from  'react-redux'
import {useState, useMemo} from 'react';
import Product from "./Product";
import Pagination from "./pagination/Pagination"

let PageSize = 8 ;


const Products = ({ products, productData  }) => {
   
    const [currentPage, setCurrentPage] = useState(1);
    const items = useMemo(() => {
        const firstPageIndex = (currentPage -1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, products])
    console.log(currentPage)
    console.log( 'length is' + products.length)
    const mappedProducts = items.map((products, id) => {
       return (
        <div key={products.id}  className="  ">
       
                <Product productData={products}/>
               
            
        </div>
        ) 
    });
    

    return (
       
        <section className=" lg:mx-auto w-full">
            <div className="lg:max-w-6xl mx-auto lg:mt-24 pb-10  grid grid-cols-2 lg:grid-cols-4 w-full h-auto  gap-y-6 gap-x-2 md:gap-x-4 md:w-5/6  ">


            { mappedProducts}
            <div className=' mx-auto lg:mx-96  block  w-96 lg:w-full text-center mt-10'>
                <Pagination
                    className="border-olive-orange"
                    currentPage={currentPage}
                    totalCount={products.length}
                    pageSize={8}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </div>
        </section>
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
