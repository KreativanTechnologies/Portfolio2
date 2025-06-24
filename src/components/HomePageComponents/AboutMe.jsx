import React from 'react'

const AboutMe = () => {

    const data =[
        {
            head:"Property Consultation",
            desc:"I help clients identify the right residential or commercial property based on lifestyle, needs, and budget.",
            img:"/images/aboutImg4.png"
        },
        {
            head:"Site Visits & Virtual Tours",
            desc:"From in-person tours to detailed video walk-throughs, I ensure you experience the space before decidin",
            img:"/images/aboutImg3.png"
        },
        {
            head:"Legal & Loan Assistance",
            desc:"End-to-end support with documentation, loan process, and legal verifications for a hassle-free purchase.",
            img:"/images/aboutImg2 (1).png"
        },
    ]
  return (
   <>
    <div className='bg-[#1D1D1D] text-white p-10'>
      <h1 className='uppercase text-xl font-semibold mb-5'>About Me</h1>
      <p>At Rahul Mehta Realty, we specialize in premium residential and commercial properties. With over 5 years of experience in helping families and investors find the perfect home or business space, our approach is personalized, honest, and rooted in local market expertise. Whether you're buying, selling, or leasing—we’re here to guide you through every step.
Let’s find your dream space together.</p>
    </div>

    {/* second scetion */}
    <div className=' mt-20'>
    <div className='flex flex-col items-center'>
            <h3 className=' uppercase border-4 tracking-[7px] font-bold border-black mt-10 w-fit px-6 py-3'>about Me</h3>
        <p className='w-[60%] mt-10'>Real estate isn’t just about property—it’s about people. I bring a client-first approach, market insight, and a passion for finding the right fit for every need. Whether you're buying your first home, looking to upgrade, or investing, I provide end-to-end support for a smooth and informed decision.</p>
        <button className='uppercase mt-5 border-l-2 border-r-2 border-black px-5 py-2'>Explore</button>
    </div>

    <div className='flex justify-center mt-20'>
        <img src="/images/aboutImg.png" alt="" />
    </div>

<div className='flex justify-center mt-20'>
  <div className='grid md:grid-cols-2 gap-20 place-items-center px-10 md:p-0 md:w-[60%]'>
    {
      data.map((items, index) => (
        <div
          key={index}
          className={`max-w-96 relative ${
            index === 2 ? 'md:col-span-2 justify-self-center' : ''
          }`}
        >
          <h3 className='font-bold text-xl tracking-[5px]'>{items.head}</h3>
          <img src={items.img} alt="" className='absolute -top-1 -left-8 w-10' />
          <p>{items.desc}</p>
        </div>
      ))
    }
  </div>
</div>

<div className='flex justify-center mt-20'>
    <img src="/images/aboutImg.png" alt="" />
</div>

    </div>
   </>
  )
}

export default AboutMe
