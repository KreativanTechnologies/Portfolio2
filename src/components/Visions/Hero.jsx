import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
     
      <img
        src="/images/myworkimg.jpg"
        alt="Hero background"
        className="h-full w-full object-cover"
      />

      
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 md:left-16 px-4 text-white space-y-10">
      <div className='h-2 w-20 md:w-32 rounded-full bg-white'></div>
        <h1 className="text-3xl md:text-5xl font-bold  ">
          Lorem Ipsum is simply <br />
          dummy text of <br />
          the print
        </h1>
        <p className='md:max-w-[50%] w-[80%] text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
scrambled it to</p>

<button className='bg-[#E7C873] text-black p-3 rounded-xl'>Learn more</button>
      </div>
    </div>
  );
};

export default Hero;
