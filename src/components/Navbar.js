import React, { useState } from 'react';
import Logo from '../assets/logo.png';

import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a0a0a] text-gray-300'>
      <div className='text-4xl cursor-pointer'>
      <Link to='home' smooth={true} duration={500}>
      OZONE3  Studio
          </Link>
      </div>
      <div> <img src={Logo} alt='Logo Image' style={{ width: '50px' }} /></div>
  
      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='cursor-pointer'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='about' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='work' smooth={true} duration={500}>
            Our Works
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='contact' smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
  
      {/* Sign Up and Sign In buttons */}
      <div className='hidden md:flex'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mx-2'>
        <a id
          href="http://localhost:8000/auth/register"  >Sign Up </a>
        </button>
        <button className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mx-2'>
        <a id
          href="http://localhost:8000/auth/login"  >Sign In </a>
        </button>
      </div>
  
      <div onClick={handleClick} className='md:hidden z-10'>
        <svg className='w-8 h-8 text-white cursor-pointer' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </div>
  
      <ul
        className={
          !nav
            ? 'hidden'
            : 'fixed top-[80px] left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl mx-4'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className='py-6 text-4xl mx-4'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Our Works
          </Link>
        </li>
        <li className='py-6 text-4xl mx-4'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
        {/* Sign Up and Sign In buttons */}
        <div className='flex flex-col items-center'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 my-2'>
            Sign Up
          </button>
          <button className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 my-2'>
            Sign In
          </button>
        </div>
      </ul>
  
      {nav && <div className='fixed top-[80px] left-0 w-full h-screen bg-black opacity-50 z-10' onClick={handleClick}></div>}
  
      <style>{`
        @media (min-width: 768px) {
          /* show the menu on screens wider than 768px */
          .hidden.md\\:flex {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
