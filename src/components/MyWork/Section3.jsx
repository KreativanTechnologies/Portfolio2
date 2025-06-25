import React from 'react'

const Section3 = () => {
    const data = [
        {
            count: "$18M",
            para: "Owned from properties transactions"
        },
        {
            count: "15K+",
            para: "Properties for Sell"
        },
        {
            count: "26K+",
            para: "Properties for Buy"
        },
        {
            count: "890",
            para: "Daily completed transactions."
        },
    ]
    return (
        <div className='flex flex-col md:flex-row p-5 mt-20'>

            {/* left side */}
            <div className='w-full md:w-1/2 flex flex-col justify-center space-y-10 p-5 md:p-10 '>
                <h1 className='text-2xl md:text-4xl font-semibold'>We Use Real Estate to Show Our Appreciation of The
                    World</h1>

                <div>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            data.map((items, index) => (
                                <div>
                                    <p className='text-xl md:text-2xl font-semibold'>{items.count}</p>
                                    <p className='text-sm'>{items.para}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
                    <div>
                        <button className='bg-[#E7C873] p-3 rounded-md text-sm'>Learn more</button>
                    </div>
            </div>

            {/* right side */}
            <div className='w-full md:w-1/2 max-h-[400px] md:max-h-[500px] rounded-xl overflow-hidden'>
                <img src="/images/workimg.png" alt="" className='w-full h-full object-cover' />
            </div>

        </div>
    )
}

export default Section3
