import React from 'react'

const Section4 = () => {
    const data=[
        {
            count:"5.2M",
            head:"Owned from properties transactions",
            desc:"Pellentesque egestas elementum egestas faucibus sem."
        },
        {
            count:"7K+",
            head:"Properties For Buy",
            desc:"Pellentesque egestas elementum egestas faucibus sem."
        },
        {
            count:"4K+",
            head:"Properties Buy Sell",
            desc:"Pellentesque egestas elementum egestas faucibus sem."
        },
        {
            count:"221+",
            head:"Daily Completed Transactions",
            desc:"Pellentesque egestas elementum egestas faucibus sem."
        },
    ]
  return (
    <div className='mt-20'>
        <div className='text-center '>
            <h1 className='text-2xl md:text-4xl font-semibold mb-5'>Our mission is to redefine real estate <br /> in the customer's favor.</h1>
        <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-8 '>
            {
                data.map((items,index)=>(
                    <div key={index} className='bg-[#F9F9F9] p-10 space-y-5'>
                        <p className='text-[#EB664E] text-xl md:text-2xl font-semibold'>{items.count}</p>
                        <p className='font-semibold'>{items.head}</p>
                        <p>{items.desc}</p>

                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Section4
