import React from 'react'
import Featured from './Featured'
import Products from './Products'
import Tabs from './Tabs'

const FeaturedProduct = () => {
    return (
        <div className="w-full h-auto mx-auto mt-6 lg:mt-10">
          <div className='text-center full lg:w-1/2 mx-auto capitalize px-4'>
                <p className='text-3xl lg:text-4xl text-gray-800 font-semibold py-4'>Our products</p>
                <p className='pt-2 pb-6 text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque quasi rem qui. Accusamus sint consectetur</p>
            </div>  
        <Tabs className='z-0'/>
    
    </div> 
    )
}

export default FeaturedProduct
