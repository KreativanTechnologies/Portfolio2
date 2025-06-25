const Hero = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row min-h-screen bg-hero-gradient">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center text-white mt-20">
        <div className="">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left mt-10 lg:mt-0">
            Ready to Start Your Project?
          </h1>

          <div className="bg-[#FAEDD4CC] rounded-[20px]  shadow-lg text-black p-10 mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">Become a Partner</h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-4 sm:mb-6">
              Break the ice! Let us help you out
            </p>

            <form className="space-y-3 ">
         
              <div>
                <label className="block text-xs sm:text-sm lg:text-base  mb-1 ">
                  What's your name?*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
                  
                />
              </div>

         
              <div>
                <label className="block text-xs sm:text-sm lg:text-base mb-1">
                  What's your phone number?*
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full  border-b border-gray-400 bg-transparent focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
                 
                />
              </div>

        
              <div>
                <label className="block text-xs sm:text-sm lg:text-base  mb-1 ">
                  What's your email?
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full  border-b border-gray-400 bg-transparent focus:outline-none focus:border-black transition-colors text-sm sm:text-base"
                  
                />
              </div>

             
              <div>
                <label className="block text-xs sm:text-sm lg:text-base  mb-1 ">
                  Describe your interest
                </label>
                <textarea
                  name="interest"
                  rows={2}
                  className="w-full  border-b border-gray-400 bg-transparent focus:outline-none focus:border-black transition-colors resize-none text-sm sm:text-base"
                
                />
              </div>

            
              <button
                type="submit"
                className="w-full bg-black text-white py-2 sm:py-3  rounded-full hover:bg-gray-800 active:bg-gray-900 transition-all text-sm sm:text-base lg:text-lg font-medium mt-4 sm:mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right side*/}
      <div className="w-full lg:w-1/2 mt-20">
        <img src="/images/contacthero.png" alt="Contact" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

export default Hero
