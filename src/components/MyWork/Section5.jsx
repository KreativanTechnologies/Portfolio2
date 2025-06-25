import { Bath, Bed, MapPin, Square } from 'lucide-react'
import React from 'react'

const Section5 = () => {
  const data = [
    {
      img: "/images/work5img.png",
      badges: ["FOR SALE", "FEATURED"],
      title: "Skyper Pool Apartment",
      address: "1020 Bloomingdale Ave",
      price: "$120,000",
      specs: {
        beds: 4,
        baths: 2,
        sqft: 350,
      },
    },
    {
      img: "/images/work5img2.png",
      badges: ["FOR SALE", "FEATURED"],
      title: "North Dillard Street",
      address: "4330 Bell Shoals Rd",
      price: "$120,000",
      specs: {
        beds: 4,
        baths: 2,
        sqft: 350,
      },
    },
    {
      img: "/images/work5img3.png",
      badges: ["FOR SALE", "FEATURED"],
      title: "Eaton Garth Penthouse",
      address: "7722 18th Ave, Brooklyn",
      price: "$120,000",
      specs: {
        beds: 4,
        baths: 2,
        sqft: 350,
      },
    },
  ]

  return (
    <div className="px-4 py-10 bg-white">
      <h1 className="text-3xl font-bold text-center mb-2">Discover Our Best Deals</h1>
      <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet</p>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit">
          {data.map((items, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="relative">
                <img src={items.img} alt={items.title} className="w-full h-64 object-cover rounded-xl" />

                
                <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
                  {items.badges.map((badge, i) => (
 <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs  ${
                    badge === "FOR SALE" ? "bg-[#1F4B43] text-white" : "bg-[#E7C873] text-black"
                  }`}
                >
                  {badge}
                </span>
                  ))}
                </div>
              </div>

              <div className=" space-y-2 mt-4">
                <h5 className="text-lg font-semibold">{items.title}</h5>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{items.address}</span>
                </div>

                <div className="h-[1px] w-full bg-gray-200 mt-3" />

                <div className="flex items-center justify-between pt-3">
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Bed size={16} />
                      <span>{items.specs.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} />
                      <span>{items.specs.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square size={16} />
                      <span>{items.specs.sqft} sqft</span>
                    </div>
                  </div>

                 
                  <p className="text-[#EB664E] font-semibold text-xl">{items.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section5
