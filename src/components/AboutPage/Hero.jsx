import React from 'react';

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
    <div className='relative h-screen'>

      <img
        src="/images/realstateimg.png"
        alt="Real Estate"
        className='h-full w-full object-cover'
      />

      
      <div className="absolute inset-0 bg-black/60 z-0"></div>

    
      <div className='absolute top-[40%] md:left-10 text-white md:w-[30%] p-7 md:p-0 z-10'>
        <h1 className='text-4xl sm:text-5xl font-bold'>
          Beautiful homes made for you
        </h1>
        <p className='mt-10'>
          In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.
        </p>
      </div>

      <div className='flex gap-10 absolute bottom-0 right-0 bg-white text-black px-10 py-3 rounded-tl-[50px] shadow-md'>
  {
    data.map((items, index) => (
      <div key={index} className="text-center">
        <p className="text-xl md:text-2xl font-bold">{items.count}</p>
        <p className="text-sm md:text-base text-gray-600">{items.para}</p>
      </div>
    ))
  }
</div>


    </div>
  );
};

export default Hero;
