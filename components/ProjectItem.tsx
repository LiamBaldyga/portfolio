import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { URL } from 'url';

interface Props {
  title: string;
  img: StaticImageData;
  url: string;
  skills: string;
}

const ProjectItem = ({ title, img, url, skills }: Props) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image className='rounded-xl group-hover:opacity-10' src={img} alt='/' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl tracking-wider text-center text-white'>
          {title}
        </h3>
        <p className='pt-2 pb-4 text-center text-white'>{skills}</p>
        <Link
          href={{
            pathname: url,
          }}
        >
          <p className='py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
