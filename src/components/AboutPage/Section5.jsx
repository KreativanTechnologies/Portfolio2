import React from 'react'

const Section5 = () => {
    const data = [
        {
            img: "/images/test1.png",
            head: "Cameron Williamson",
            desc: "Designer",
            icon: "/images/testmonials.png",
            para: "Searches for multiplexes, property comparisons,and the loan estimator. Works great. Lorem ipsum dolor sit met, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dores."
        },
        {
            img: "/images/test2.png",
            head: "Esther Howard",
            desc: "Marketing",
            icon: "/images/testmonials.png",
            para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
        },
        {
            img: "/images/test3.png",
            head: "Devon Lane",
            desc: "Developer",
            icon: "/images/testmonials.png",
            para: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est."
        },
    ]

    return (
        <div className='p-10 md:p-20 bg-gray-100 mt-20'>
            <div className='mb-10 text-center'>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">What our customers are saying?</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    data.map((items, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
                            {/* Top-right icon */}
                            <img 
                                src={items.icon} 
                                alt="testimonial icon" 
                                className="absolute top-4 right-4 h-6 w-6"
                            />

                            {/* User Info */}
                            <div className='flex items-center gap-4'>
                                <div className='h-16 w-16 rounded-full overflow-hidden'>
                                    <img src={items.img} alt={items.head} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{items.head}</h3>
                                    <p className="text-sm text-gray-500">{items.desc}</p>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <div className='mt-6'>
                                <p className="text-gray-700 text-sm">{items.para}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section5
