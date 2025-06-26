import React from 'react'

const Section2 = () => {
  return (
    <div className='flex flex-col md:flex-row'>
  <div className='w-full md:w-1/2 flex flex-col justify-center p-10 space-y-5'>
  <h1 className='text-xl md:text-3xl font-semibold'>LOREM IPSUM</h1>
<div className='text-sm'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s, when an unknown printer took
a galley of type.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to.</p>
</div>
  </div>

     <div className="w-full md:w-1/2 relative flex justify-center items-center h-[60vh] md:h-[70vh]">
 

          <div className="relative w-[90vw] max-w-xl h-full flex justify-center items-center">
            <div className="absolute top-[18%] sm:top-[14%] left-[55%] transform -translate-x-1/2 sm:left-[54%] md:left-[45%] 
              w-[47vw] h-[20vh] sm:w-[39vw] md:w-[28vw] sm:h-[17vw] md:h-[12vw] rounded-lg overflow-hidden  z-10 transition-all duration-300 
              hover:z-[100] hover:scale-110 will-change-transform">
              <img src="/images/sec4img3.png" alt="Himalayan guide" className="object-cover w-full h-full" />
            </div>

            <div className="absolute top-[33%] sm:top-[32%] right-[25%] sm:right-[28%] md:right-[42%] 
              w-[49vw] sm:w-[39vw] md:w-[26vw] rounded-lg overflow-hidden transform  z-20 transition-all duration-300 
              hover:z-[100] hover:scale-110 will-change-transform">
              <img src="/images/sec4img3.png" alt="Scenery" className="object-cover w-full h-full" />
            </div>

            <div className="absolute top-[61%] sm:top-[57%] md:top-[45%] lg:top-[57%] right-[7%] sm:right-[7%] md:right-[3%] 
              w-[57vw] h-[25vh] sm:h-[29vw] md:h-[20vw]  sm:w-[45vw] md:w-[29vw] rounded-lg overflow-hidden z-10 transition-all duration-300 
              hover:z-[100] hover:scale-110 will-change-transform">
              <img src="/images/sec4img3.png" alt="I love NAKO sign" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Section2
