import React from 'react'
import { withRouter } from 'react-router-dom';


const HeroSection = () => {
    return (
        <div className='w-full'>
            <div className="wrapper w-full h-screen">
                <div className=" slide relative bg-gray-500 bg-[url('/images/slideone.jpg')] bg-no-repeat bg-cover w-full h-full">
                    <div className="overlay w-full h-full absolute bg-light-bg">
                        <div className="text w-1/2 h-full  mx-auto text-center  text-white py-36">
                            <p className='text-2xl font-semibold capitalize pb-4'>New products</p>
                            <p className='text-6xl font-semibold pb-8 capitalize'>flexible chair</p>
                            <p className='text-lg pb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quia quis error dolorem debitis neque adipisci minima in rerum unde.</p>
                            <button className='bg-red-600 btn capitalize mt-8 text-gray-100 px-10 rounded-none text-center text-lg font-semibold hover:bg-gray-100 hover:text-blue-800'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(HeroSection);
