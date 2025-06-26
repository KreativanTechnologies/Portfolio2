import React from 'react'

const Section3 = () => {

    const data =[
        {
            img:"/images/sec4img.png",
            head:"Lorem Ipsum is simply dummy text...",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img:"/images/sec4img.png",
            head:"Lorem Ipsum is simply dummy text...",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img:"/images/sec4img.png",
            head:"Lorem Ipsum is simply dummy text...",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ]
  return (
    <div className='mt-20 md:mt-40'>
       <div className='flex flex-col items-center space-y-4'>
        <div className='h-2 w-20 md:w-32 rounded-full bg-black'></div>
         <h1 className='text-center text-2xl md:text-4xl font-semibold'>LOREM IPS</h1>
        <p className='text-center w-[80%] md:max-w-[50%] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
 standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and
scrambled it to make a type specimen book.</p>
       </div>

<div className='flex justify-center'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-[70%] '>
    {
   data.map((items,index)=>(
    <div key={index} className='  '>
        <div className='h-[100px]'>
            <img src={items.img} alt="" className='h-full w-full object-cover'/>
        </div>
<div className=' p-2 space-y-5'>
            <h4 className='font-semibold'>{items.head}</h4>
        <p className='text-xs'>{items.desc}</p>
        <button className='bg-[#E7C873] text-black p-2 rounded-md'>Learn more</button>
</div>
    </div>
   ))
    }
</div>
</div>
      
    </div>
  )
}

export default Section3
