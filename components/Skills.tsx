import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full p-2 lg:h-screen'>
      <div className='flex flex-col justify-center h-full mx-auto max-w-7xl'>
        <p className='text-xl tracking-widest uppercase text-[#709dff]'>
          Skills
        </p>
        <h2>What I Can Do</h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image
                  alt=''
                  src='/../public/skills/HTML5_Badge_256.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image
                  alt=''
                  src='/../public/skills/css.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image
                  alt=''
                  src='/../public/skills/javascript.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image
                  alt=''
                  src='/../public/skills/react.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image
                  alt=''
                  src='/../public/skills/node.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image
                  alt=''
                  src='/../public/skills/mongo.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image
                  alt=''
                  src='/../public/skills/firebase.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
            <div className='grid items-center justify-center grid-cols-2 gap-4'>
              <div className='m-auto'>
                <Image
                  alt=''
                  src='/../public/skills/tailwind.png'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
