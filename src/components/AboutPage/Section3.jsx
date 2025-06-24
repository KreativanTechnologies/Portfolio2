import { ArrowRight } from 'lucide-react'
import React from 'react'

const Section3 = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10'>

        {/* left side */}
      <div className='w-full md:w-[60%] rounded-tr-[60px] overflow-hidden shadow-2xl shadow-black/50'>
        <img src="/images/sec3img.png" alt="" />
      </div>

       {/* right side */}
      <div className='w-full md:w-[30%] flex flex-col justify-center space-y-10 p-10 md:p-0'>
        <div className='bg-gradient-to-r from-orange-500 to-black h-[4px] w-32'></div>
        <h3 className='text-xl md:text-3xl font-semibold'>You’re in good hands</h3>
        <p className='text-sm'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
        <button className='w-fit px-4 py-3 flex gap-4 items-center bg-black text-white text-sm rounded-tr-[12px]'>Learn more <ArrowRight className='text-yellow-500'/></button>
      </div>
    </div>
  )
}

export default Section3
