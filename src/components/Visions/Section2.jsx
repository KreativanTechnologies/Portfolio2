import React from 'react'

const Section2 = () => {
  return (
    <div>
       <div className=" relative w-full h-[70vw] md:h-full flex justify-end p-[5vw]">
                    <div className="absolute w-[35vw] h-[32vw] md:w-[14vw] md:h-[13vw] overflow-hidden left-0 md:left-2/12 top-5/12 md:top-3/12 z-20 rounded-[1vw] hover:z-40 cursor-pointer hover:scale-110 duration-1000">
                        <img
                            className="w-full h-full object-cover object-center"
                            src='images/sec4img.png'
                            alt=""
                        />
                    </div>
                    <div className="w-[70vw] h-[60vw] md:w-[28vw] md:h-[25vw] overflow-hidden rounded-[1vw] hover:z-40 cursor-pointer hover:scale-110 duration-1000">
                        <img
                            className="w-full h-full object-cover object-center"
                             src='images/sec4img.png'
                            alt=""
                        />
                    </div>
                    <div className="absolute w-[60vw] h-[50vw] md:w-[24vw] md:h-[20vw] overflow-hidden bottom-0 left-1/12 md:left-3/12 z-10 rounded-[1vw] hover:z-40 cursor-pointer hover:scale-110 duration-1000">
                        <img
                            className="w-full h-full object-cover object-center"
                             src='images/sec4img.png'
                            alt=""
                        />
                    </div>
                </div>
    </div>
  )
}

export default Section2
