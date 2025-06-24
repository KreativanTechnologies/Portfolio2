import { Instagram, Github, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Diagonal  */}
      <div className="absolute inset-0">

<div
  className="absolute inset-0 bg-[#E5E5E5] md:block hidden"
  style={{
    clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
  }}
/>

{/* Black  */}
<div
  className="absolute inset-0 bg-black md:block hidden"
  style={{
    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 40% 100%)",
  }}
/>


   
        <div className="md:hidden absolute inset-0">
          <div className="h-1/2 bg-[#E5E5E5]"></div>
          <div className="h-1/2 bg-black"></div>
        </div>
      </div>

     
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen mt-40 md:mt-0">
        {/* Left Side  */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4 sm:px-6 lg:px-8 py-8 md:py-12 order-1 md:order-1">
          <div className="flex flex-col items-center text-center md:text-left w-full max-w-sm md:max-w-md md:ml-8 lg:ml-16">
            <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 font-medium text-gray-600">Hi, I am</h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-2 sm:mb-4">
              Rahul Mehta
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
              Real Estate Consultant & Property Advisor
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
              <Link
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>

{/* Right Side - Image */}
 <div className="w-full md:w-1/2  flex justify-center items-end   min-h-screen order-2 md:order-2">
      <img
        src="/images/heroImg.png"
        alt="Rahul Mehta - Real Estate Consultant"
        className=" max-h-[400px] sm:max-h-[520px] object-contain"
      />
    </div>


      </div>


    </div>
  )
}

export default Hero
