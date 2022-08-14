import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? 'fixed z-50 w-full h-20 shadow-xl bg-[#ecf0f3]'
          : 'fixed z-50 w-full h-20'
      }
    >
      <div className='flex items-center justify-between w-full h-full px-4 2xl:px-16'>
        <Link href='/'>
          <div className='popup text-2xl md:text-4xl font-bold text-[#1f2937] cursor-pointer'>
            &lt;L &#47; B&gt;
          </div>
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase duration-200 ease-in hover:-translate-y-0.5'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase duration-200 ease-in hover:-translate-y-0.5'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase duration-200 ease-in hover:-translate-y-0.5'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase duration-200 ease-in hover:-translate-y-0.5'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase duration-200 ease-in hover:-translate-y-0.5'>
                Contact
              </li>
            </Link>
          </ul>
          <div className='cursor-pointer md:hidden' onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen'
          }
        >
          <div>
            <div className='flex items-center justify-between w-full'>
              <div className='text-2xl font-bold popup-mobile'>
                &lt;L &#47; B&gt;
              </div>
              <div
                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] py-4 text-center'>
                Let&#39;s build something great together.
              </p>
            </div>
          </div>
          <div className='flex flex-col py-4'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm' onClick={handleNav}>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li className='py-4 text-sm' onClick={handleNav}>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li className='py-4 text-sm' onClick={handleNav}>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li className='py-4 text-sm' onClick={handleNav}>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li className='py-4 text-sm' onClick={handleNav}>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
