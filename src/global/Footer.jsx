import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Hero Section */}
      <div className="px-6 py-12 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Make your dreams a <span className="text-orange-400">reality</span>
          </h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold px-6 py-3 rounded-md transition-colors w-fit">
            Work with us →
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-800 px-6 py-12 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-orange-400 rounded"></div>
              <span className="text-lg font-semibold">LOGOIPSUM</span>
            </div>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Column Heading</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Column Heading</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Column Heading</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Link goes here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
