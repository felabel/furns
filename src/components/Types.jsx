import React from 'react'

export const Types = () => {
    return (
        <div className='w-full h-auto bg-white py-14 lg:py-20 z-10 '>
            <div className=" z-0 mx-auto lg:max-w-6xl h-auto w-auto grid grid-cols-5  lg:grid-cols-5 md:grid-cols-5 overflow-x-auto gap-x-48 lg:gap-x-2 md:gap-x-56 px-4 md:px-0">
                <div className="types rounded-full border-2 border-gray-600 h-40 w-40  md:h-48 md:w-48 hover:border-dashed  transform text-center font-semibold">
                    <div className="image align-middle mx-auto w-1/3 h-1/3  my-auto mt-10  static">
                        <img src='/images/bedroom.png' alt='bedroom' className='type-image w-full h-full '/>
                        <p className='mt-5 text-gray-500'>Bedroom</p>
                    </div>
                </div>
                <div className=" z-0 types rounded-full border-2 border-gray-600 h-40 w-40  md:h-48 md:w-48 hover:border-dashed  transform text-center font-semibold">
                    <div className="image align-middle mx-auto w-1/3 h-1/3  my-auto mt-10  static">
                        <img src='/images/living.png' alt='bedroom' className='type-image w-full h-full '/>
                        <p className='mt-5 text-gray-500'>Living</p>
                    </div>
                </div>
                <div className="types rounded-full border-2 border-gray-600 h-40 w-40  md:h-48 md:w-48 hover:border-dashed  transform text-center font-semibold">
                    <div className="image align-middle mx-auto w-1/3 h-1/3  my-auto mt-10  static">
                        <img src='/images/lounge.png' alt='bedroom' className='type-image w-full h-full '/>
                        <p className='mt-5 text-gray-500'>Lounge</p>
                    </div>
                </div>
                <div className="types rounded-full border-2 border-gray-600 h-40 w-40  md:h-48 md:w-48 hover:border-dashed  transform text-center font-semibold">
                    <div className="image align-middle mx-auto w-1/3 h-1/3  my-auto mt-10  static">
                        <img src='/images/dining.jpg' alt='bedroom' className='type-image w-full h-full '/>
                        <p className='mt-5 text-gray-500'>Dining</p>
                    </div>
                </div>
                <div className="types rounded-full border-2 border-gray-600 h-40 w-40  md:h-48 md:w-48 hover:border-dashed  transform text-center font-semibold">
                    <div className="image align-middle mx-auto w-1/3 h-1/3  my-auto mt-10  static">
                        <img src='/images/office.png' alt='bedroom' className='type-image w-full h-full '/>
                        <p className='mt-5 text-gray-500'>Office</p>
                    </div>
                </div>
                
               

            </div>
            
        </div>
    )
}
