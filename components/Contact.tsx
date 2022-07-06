import Link from 'next/link';
import React, { useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const promise = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE!,
      process.env.NEXT_PUBLIC_TEMPLATE!,
      form.current!,
      process.env.NEXT_PUBLIC_PUBLIC!
    );
  };

  return (
    <div id='contact' className='flex items-center w-full md:h-screen'>
      <div className='w-full px-2 py-16 m-auto max-w-7xl'>
        <p className='text-xl tracking-widest uppercase text-[#709dff]'>
          Contact
        </p>
        <h2 className='py-4'>Get in Touch</h2>
        <div className='grid gap-8 lg:grid-cols-5'>
          <div className='w-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl'>
            <div className='flex flex-col justify-around h-full lg:p-4'>
              <div>
                <img
                  className='duration-300 ease-in rounded-xl hover:scale-105'
                  src='https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Liam Baldyga</h2>
                <p>Front-End Developer</p>
                <p>
                  I am available for freelance or part-time positions. Contact
                  me and let&apos;s talk!
                </p>
              </div>
              <div>
                <p className='pt-8 text-center uppercase'>Connect With Me</p>
                <div>
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
          </div>

          <div className='w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>Name</label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='name'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>
                      Phone Number
                    </label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='phone'
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Email</label>
                  <input
                    className='flex p-3 border-2 border-gray-300 rounded-lg'
                    type='email'
                    name='email'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Subject</label>
                  <input
                    className='flex p-3 border-2 border-gray-300 rounded-lg'
                    type='text'
                    name='subject'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Message</label>
                  <textarea
                    className='p-3 border-2 border-gray-300 rounded-lg'
                    rows={10}
                    name='message'
                    required
                  ></textarea>
                </div>
                <button
                  className='w-full p-4 mt-4 text-gray-100 button'
                  type='submit'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='p-6 duration-200 ease-in-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:-translate-y-3'>
              <HiOutlineChevronDoubleUp className='text-[#709dff]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
