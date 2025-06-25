import { ArrowLeft, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ Get current route path

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: '', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Visions', href: '/visions' },
    { name: 'My Projects', href: '/work' },
    {
      name: 'Contact Me',
      href: '/contact',
      bgColor: 'bg-white',
      text: 'text-black',
      btnProp: 'px-3 py-2 rounded-full',
    },
  ];

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  // ✅ Unified logic: text-white icon for /contact and /visions
  const whiteTextPaths = ['/contact', '/visions'];
  const menuIconColor = whiteTextPaths.includes(location.pathname)
    ? 'text-white'
    : 'text-black';

  return (
    <div className="relative z-50">
      <nav className="absolute w-full z-50 text-white flex justify-between items-center p-5 lg:px-10">
        {/* Logo / Home Link */}
        <div>
          <NavLink to="/">
            <ArrowLeft className="bg-white text-black h-6 w-6 rounded-full" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-16">
          {links.map((link) => (
            <div className="flex flex-col items-center" key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `hover:scale-105 duration-300 font-semibold 
                   
                      ${link.bgColor} ${link.text || ''} ${link.btnProp || ''}
                      
                  `
                }
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button onClick={handleToggle}>
            {isOpen ? (
              <X className={menuIconColor} />
            ) : (
              <Menu className={menuIconColor} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <nav className="flex flex-col justify-between items-center p-5 w-1/2 h-screen bg-black text-white fixed top-0 right-0 z-40 shadow-md">
          <div className="flex flex-col gap-5 w-full">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `hover:bg-gray-200 hover:text-black rounded-lg p-2 w-full text-center ${
                    isActive ? 'bg-white text-black' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
