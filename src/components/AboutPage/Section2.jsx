import React from 'react';

const Section2 = () => {
  const data = [
    {
      head: "",
      desc: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
      img: "/images/secimg1.png",
    },
    {
      head: "Meet Relator",
      desc: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
      img: "/images/secimg2.png",
    },
    {
      head: "Take The Keys",
      desc: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
      img: "/images/secimg3.png",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
     
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          How It Works? Find a Perfect Home
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {data.map((item, index) => (
          <div key={index} className="max-w-[320px] text-center flex flex-col items-center">
            <img src={item.img} alt="" className="mb-4 w-20 h-20 object-contain" />
            <h4 className="text-lg font-semibold mb-2">{item.head }</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
