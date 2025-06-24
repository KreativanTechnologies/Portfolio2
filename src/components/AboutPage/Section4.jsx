import { ArrowRight } from 'lucide-react';
import React from 'react';

const Section4 = () => {
  const data = [
    {
      img: '/images/sec4img.png',
    },
    {
      count: '280 +',
      head: 'Properties',
      desc: 'Explore our wide variety of properties to find your dream home today',
      icon: <ArrowRight />,
      css: 'bg-[#1A1A1A] text-white p-8 rounded-xl',
    },
    {
      img: '/images/sec4img.png',
      css2: 'w-full max-w-[400px]',
    },
  ];

  const data2=[
    {
        img:"/images/sec4img2.jpg"
    }
  ]

  return (
    <div className="mt-20">
      <h1 className="text-center text-2xl md:text-4xl font-semibold mb-10">Best Properties</h1>

      <div className="flex flex-col items-center md:flex-row md:justify-center overflow-hidden">
        {/* Grid container with responsive handling */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-10">
          {data.map((items, index) => (
            <div
              key={index}
              className={`w-full ${items.css || ''} ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Image content */}
              {items.img && (
                <div className="w-full flex justify-center">
                  <img
                    src={items.img}
                    alt=""
                    className={`rounded-xl ${items.css2 || 'w-full max-w-md'} max-w-full h-auto`}
                  />
                </div>
              )}

           
              {items.count && (
                <div className="flex flex-col space-y-4 mt-6 md:mt-0">
                  <h1 className="text-3xl font-bold">{items.count}</h1>
                  <h2 className="text-xl font-semibold">{items.head}</h2>
                  <p className="text-sm text-white">{items.desc}</p>
                <button className="mt-4 flex justify-end text-black p-3 rounded-full bg-white w-fit">
  {items.icon}
</button>

                </div>
              )}
            </div>
          ))}
        </div>

        <div className='w-full md:w-1/2'>
        {
            data2.map((items,index)=>(
                <div key={index}>
                    <img src={items.img} alt="" className='max-w-[600px]'/>
                </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Section4;
