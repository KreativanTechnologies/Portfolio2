

import {  Menu,  X } from 'lucide-react';


import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: '', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Visions', href: '/visions' },
    { name: 'My Projects', href: '/projects' },
    { name: 'Contact Me', href: '/contact' ,bgColor:"bg-white",text:"text-black",btnProp:"px-3 py-2 rounded-full"},
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

  return (
    <>
      <div className='relative z-50'>
        <nav className='absolute w-full z-50 text-white flex justify-end items-center p-5 lg:px-20 '>
     

          <div className='hidden md:flex gap-16'>
            {links.map((link) => (
              <div className='flex flex-col items-center' key={link.name}>
                <NavLink
                  to={link.href}
                  className={`${link.bgColor} ${link.text} ${link.btnProp} hover:scale-105 duration-300 font-semibold`}
                >
                  {link.name}
                </NavLink>
               
              </div>
            ))}
          </div>


          {/* Mobile Button */}
          <div className='flex md:hidden'>
            <button className='cursor-pointer' onClick={handleToggle}>
              {isOpen ? <X /> : <Menu className='text-black'/>}
            </button>
          </div>
        </nav>

      
      {/* Mobile Menu */}
{isOpen && (
  <nav className='flex flex-col lg:justify-evenly justify-between items-center p-5 lg:p-2 w-1/2 h-screen bg-black text-white fixed top-0 right-0 z-40 shadow-md'>
    <div className='flex flex-col lg:hidden gap-5 w-full'>
      {links.map((link) => (
        <NavLink
          key={link.name}
          href={link.href}
          className='hover:bg-gray-200 rounded-lg p-2 w-full text-center'
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </NavLink>
      ))}


    </div>
  </nav>
)}


      </div>

    </>
  );
};

export default Navbar;
