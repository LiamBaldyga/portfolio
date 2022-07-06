import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import facebookImg from '../public/projects/facebook.png';
import ProjectItem from './ProjectItem';
import mediumImg from '../public/projects/medium.png';
import resumeImg from '../public/projects/resume.png';
import tictactoeImg from '../public/projects/tictactoe.png';

const Projects = () => {
  return (
    <div id='projects' className='flex items-center w-full md:h-screen'>
      <div className='px-2 py-16 mx-auto max-w-7xl'>
        <p className='text-xl tracking-widest uppercase text-[#709dff]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <ProjectItem
            title='Facebook Clone'
            img={facebookImg}
            url='https://github.com/LiamBaldyga/fb-clone'
            skills='React, TailwindCSS, Firebase, NextJS'
          />
          <ProjectItem
            title='Medium Clone'
            img={mediumImg}
            url='https://github.com/LiamBaldyga/medium-clone'
            skills='React, TailwindCSS, NextJS, Sanity, Typescript'
          />
          <ProjectItem
            title='Resume Maker'
            img={resumeImg}
            url='https://github.com/LiamBaldyga/cv-project'
            skills=''
          />
          <ProjectItem
            title='Tic Tac Toe'
            img={tictactoeImg}
            url='https://github.com/LiamBaldyga/Tic-Tac-Toe'
            skills='HTML, CSS, Javascript'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
