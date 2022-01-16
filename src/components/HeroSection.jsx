import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return (
        <div className='w-full md:pt-20'>
            <div className="wrapper w-auto h-120 md:h-120 ">
                <div className=" slide  bg-gray-500 bg-[url('/images/slideone.jpg')] bg-no-repeat bg-cover w-full h-full sm:h-screen md:h-full lg:h-screen xl:h-screen pb-4">
                    <div className="overlay w-full h-auto absolute ">
                        <div className="text fade-up w-full px-4 lg:w-1/2 h-auto  mx-auto text-center  text-white lg:pb-36 pt-36 lg:pt-28 " >
                            <p className='text-2xl font-semibold capitalize pb-1 lg:pb-4 fade-up' data-aos='fade-up'data-aos-duration = '500' >New products</p>
                            <p className='text-3xl lg:text-6xl font-semibold pb-2 pt-2 capitalize fade-up' data-aos='fade-up'>flexible chair</p>
                            <p className='text-lg pb-4 fade-up' data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quia quis error dolorem debitis neque adipisci minima in rerum unde.</p>
                            <div className='mt-8'>
                              <Link to ='/shop' className='bg-olive-orange py-3  capitalize mt-2 text-gray-100 px-10 rounded-none text-center text-lg font-semibold hover:bg-gray-100 hover:text-olive-orange transition transform z-0 fade-up' data-aos='fade-up'>
                                Shop Now
                                </Link>  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(HeroSection);
