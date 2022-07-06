import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='flex items-center justify-center w-full h-full max-w-screen-xl p-2 mx-auto'>
        <div>
          <p className='text-sm tracking-widest uppercase'>
            Let&apos;s Build Something Together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#709dff]'>Liam</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Fullstack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I specialze in building (and sometimes designing) fast and clean
            digital experiences. Currently, I&apos;m focused on learning more
            about front-end design principles and technologies.
          </p>
          <div className='flex items-center justify-between max-w-xs py-4 m-auto'>
            <div className='p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:-translate-y-3'>
              <FaLinkedinIn />
            </div>
            <div className='p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:-translate-y-3'>
              <FaGithub />
            </div>
            <div className='p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:-translate-y-3'>
              <AiOutlineMail />
            </div>
            <div className='p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:-translate-y-3'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
