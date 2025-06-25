import React from 'react'

const Section2 = () => {
    const data=[
        {
            img:"/images/work2img.jpeg",
            head:"Town House",
            para:"2 Properties"
        },
        {
            img:"/images/work2img2.jpeg",
            head:"Modern Villa",
            para:"10 Properties"
        },
        {
            img:"/images/work2img3.jpeg",
            head:"Apartment",
            para:"3 Properties"
        },
        {
            img:"/images/work2img4.jpeg",
            head:"Single Family",
            para:"5 Properties"
        },
        {
            img:"/images/work2img5.jpeg",
            head:"Office",
            para:"3 Properties"
        },
    ]
  return (
    <div className='mt-20 responsivewidth'>
      <div className=' text-center sm:text-left'>
        <h1  className="text-3xl  font-bold  mb-2">Featured Categories</h1>
      <p>Lorem ipsum dolor sit amet</p>
      </div>

      <div className='flex justify-center mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
        {
          data.map((items,index)=>(
         <div className='relative  rounded-xl overflow-hidden'>
             <div className=''>
              <img src={items.img} alt="" className='w-64 h-64 object-cover'/>
              <div className='absolute bg-black/30 inset-0'></div>

            
            </div>
            <div className='absolute top-3 left-4 text-white'>
              <h5 className='font-semibold'>{items.head}</h5>
              <p className='text-xs'>{items.para}</p>
            </div>
         </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Section2
