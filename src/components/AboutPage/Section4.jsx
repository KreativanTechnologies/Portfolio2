

import { ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react"

const Section4 = () => {
  const gridData = [
    {
      type: "image",
      img: "/images/sec4img.png",
      alt: "Modern living room interior",
    },
    {
      type: "stats",
      count: "280+",
      title: "Properties",
      description: "Explore our wide variety of properties to find your dream home today",
      bgColor: "bg-[#1A1A1A]",
    },
    {
      type: "image",
      img: "/images/sec4img.png",
      alt: "Minimalist bedroom interior",
    },
  ]

  const featuredProperty = {
    img: "/images/sec4img2.jpg",
    badges: ["FOR SALE", "FEATURED"],
    title: "Villa One Hyde Park",
    address: "2050 Bloomingdale Ave",
    price: "$120,000",
    specs: {
      beds: 4,
      baths: 2,
      sqft: 350,
    },
  }

  return (
    <div className="mt-10 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 lg:mb-10">
        Best Properties
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
        {/* Left Grid Section */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {gridData.map((item, index) => (
              <div
                key={index}
                className={`
                  ${index === 0 ? "sm:col-span-2" : ""} 
                  ${item.type === "stats" ? item.bgColor + " text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-center" : "rounded-2xl overflow-hidden"}
                  ${index === 0 ? "h-[200px] sm:h-[250px]" : index === 1 ? "h-[280px] sm:h-[320px]" : "h-[200px] sm:h-[250px]"}
                `}
              >
                {item.type === "image" ? (
                  <img src={item.img || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
                ) : (
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{item.count}</h2>
                    <h3 className="text-xl sm:text-2xl font-semibold">{item.title}</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xs">{item.description}</p>
                    <button className="mt-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors duration-200">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Featured Property Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
            <img
              src={featuredProperty.img || "/placeholder.svg"}
              alt={featuredProperty.title}
              className="w-full h-full object-cover"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {featuredProperty.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    badge === "FOR SALE" ? "bg-green-600 text-white" : "bg-yellow-500 text-black"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Property Details Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{featuredProperty.title}</h3>

              <div className="flex items-center gap-2 mb-3 text-sm sm:text-base">
                <MapPin size={16} />
                <span>{featuredProperty.address}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold">{featuredProperty.price}</span>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>{featuredProperty.specs.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>{featuredProperty.specs.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square size={16} />
                    <span>{featuredProperty.specs.sqft}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4

