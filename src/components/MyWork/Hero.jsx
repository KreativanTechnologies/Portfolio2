import { ArrowRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
     const data =[
    {
      count:"680",
      para:"Award Winning"
    },
    {
      count:"8K+",
      para:"Happy Customer"
    },
    {
      count:"500+",
      para:"Property Ready"
    },
  ]
  return (
    <div className="relative h-screen w-full">
      <img
        src="/images/myworkimg.jpg"
        alt="Real Estate Hero"
        className="h-full w-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 w-full max-w-xl md:left-[10%] md:translate-x-0 md:px-0 space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
          The <span className="text-[#E7C873]">#1</span> site real estate professionals trust*
        </h1>

        <p className="text-white text-sm sm:text-base">
          From as low as $10 per day with limited time offer discounts.
        </p>

        <button className="flex items-center gap-2 text-[#E7C873] font-semibold  ">
          Browse More Properties <ArrowRight size={18} />
        </button>
      </div>

       <div className='flex gap-10 absolute bottom-0 left-0 bg-[#E7C873] text-black px-10 py-3 rounded-tr-[20px] shadow-md'>
  {
    data.map((items, index) => (
      <div key={index} className="text-center">
        <p className="text-xl md:text-2xl font-bold">{items.count}</p>
        <p className="text-sm  ">{items.para}</p>
      </div>
    ))
  }
</div>
    </div>
  )
}

export default Hero
