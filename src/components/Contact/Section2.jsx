import { ArrowRight } from 'lucide-react'
import React from 'react'

const Section2 = () => {
    const data=[
        {
            img:"/images/Icon.png",
            head:"Town House",
            desc:"2 Properties"
        },
        {
            img:"/images/Icon (1).png",
            head:"Modern Villa",
            desc:"10 Properties"
        },
        {
            img:"/images/Icon (2).png",
            head:"Apartment",
            desc:"3 Properties"
        },
        {
            img:"/images/Icon (3).png",
            head:"Office",
            desc:"3 Properties"
        },
        {
            img:"/images/Icon (4).png",
            head:"Single Family",
            desc:"5 Properties"
        },
        {
            img:"/images/Icon (5).png",
            head:"Shop House",
            desc:"2 Properties"
        },
    ]
  return (
    <div className='bg-[#FDF8F8] pt-10'>
        <div className='responsivewidth   p-5'>
        <h1 className='text-2xl md:text-4xl font-semibold mb-2'>Featured Categories</h1>
        <p>Lorem ipsum dolor sit amet</p>

        <div className='flex justify-end mt-10'>
            <button className='flex justify-end gap-3'>View All Categories <ArrowRight/></button>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-10 gap-5'>
            {
                data.map((items,index)=>(
                    <div className='bg-white px-5 py-10 flex flex-col items-center'>
                        <img src={items.img} alt="" className='w-10'/>
                        <h5 className='font-semibold mt-2'>{items.head}</h5>
                        <p className='text-xs'>{items.desc}</p>
                    </div>
                ))
            }
        </div>
      
    </div>
    </div>
  )
}

export default Section2
