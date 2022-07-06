import React from 'react';

const About = () => {
  return (
    <div id='about' className='flex items-center w-full p-2 py-16 md:h-screen'>
      <div className='grid-cols-3 gap-8 m-auto max-w-7xl md:grid'>
        <div className='col-span-2 md:text-xl'>
          <p className='uppercase text-xl tracking-widest text-[#709dff]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Ever since my parents first brought home the Nintendo Wii, I have
            been in love with technology. I went from just playing games, to
            wanting to understand how everything worked. Throughout high school
            I took IT courses and learned more about the physical side of
            technology. While in my first year of college I learned what my real
            passion is; tricking a rock into thinking (programming).
          </p>
          <p className='py-2 text-gray-600'>
            Shortly after taking my first programming class in college on C#, I
            knew I needed to learn more. I started teaching myself python
            through books and free websites, but I wanted something I could show
            off to others. The easiest way to show something to anyone around
            the world is through a website. I started with The Odin Project,
            where I got halfway through in a few months before burning out. I
            wanted to learn more about the current technologies, rather than
            vanila Javascript. I turned to FullStackOpen and this is where I
            learned React, Redux, Node.js, MongoDB, GraphQL and Typescript.
          </p>
        </div>
        <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
          <img
            src='https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            alt='/'
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
