import React from 'react'

const Sale = () => {
    return (
        <div>
            <div className ='wrapper w-full h-auto my-10'>
                <div className="grid lg:grid-cols-2 w-full h-66 md:h-80 gap-4  px-4">
                <div className="left bg-[url('/images/slideone.jpg')] bg-no-repeat bg-cover p-4  md:p-14 relative h-44 md:h-auto">
                    <div className="sale h-16 w-16 md:w-20 md:h-20 bg-olive-orange rounded-t-full rounded-bl-full rounded-br-none text-center pt-2 ring-2 ring-olive-orange">
                        <p className='text-xs font-semibold text-white uppercase'><span className='text-xs'>Upto</span>  <br /> <span className='text-sm  md:text-xl font-bold '>50% </span> <br /> off</p>
                    </div>
                    <div className='absolute  w-48 md:w-56 h-auto capitalize right-5 md:right-14 top-10 md:top-24 text-gray-50 ' >
                        <p className='text-2xl md:text-3xl font-bold '>sale furniture for summer</p>
                        <p className='text-base md:text-xl py-4'>Great discounts here</p>
                    </div>
                </div>
                <div className="right bg-[url('/images/slider2.jpg')] bg-no-repeat bg-cover relative p-4 md:p-14 h-44 md:h-auto">
                    <div className="sale absolute right-5 h-16 w-16 md:w-20 md:h-20 bg-olive-orange rounded-t-full rounded-bl-full rounded-br-none text-center pt-2 ring-2 ring-olive-orange ">
                        <p className='text-xs font-semibold text-white uppercase'><span className='text-xs'>Upto</span>  <br /> <span className='text-sm  md:text-xl font-bold '>50% </span> <br /> off</p>
                    </div>
                    <div className='absolute w-48 md:w-56 h-auto capitalize md:top-24 top-10 text-gray-50' >
                        <p className='text-2xl md:text-3xl font-bold '>sale furniture for summer</p>
                        <p className='text-base md:text-xl py-4'>Great discounts here</p>
                    </div>
                </div>

                </div>

            </div>
        </div>
    )
}

export default Sale
