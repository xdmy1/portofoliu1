"use client";
import React from 'react'
import Footer from '../components/Footer'
import Image from 'next/image'
import P1 from '/public/p1.png'
import P2 from '/public/p2.png'
import P3 from '/public/b1.svg'

 


const page = () => {
  return (
    <div className='px-4 py-10 md:px-10 lg:px-24 min-h-screen flex flex-col justify-between text-gray-500
    bg-black
      bg-[url(/grain.gif)]
      bg-opacity-5
      w-full
      h-full
      bg-repeat
      absolute
      overflow-x-hidden'>

        <div className='flex flex-col'>
            <p className='text-3xl text-white max-w-[350px] rounded-s'>Projects made using Next.js and Tailwind CSS</p>
            <div className='flex flex-wrap mt-16 gap-10'>
                <div className='px-4 py-4 bg-[#1c1c1c] bg-opacity-40 flex flex-col gap-6 max-w-[350px] min-h-[400px] justify-between rounded-s'>
                    <div className='max-h-[210px]'>
                        <Image src={P1} alt='p1' className='rounded-s'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <p className='text-xl text-white '>GreenBank Prototype</p>
                        <p>Bank Landing Page made using Next.js, Tailwind CSS and Motion</p>
                        <button className='border  border-white text-white px-6 py-1 cursor-not-allowed w-24 mt-6 rounded-s hover:bg-white hover:text-black hover:border-black transition-all'>Visit</button>
                    </div>
                </div>
                <div className='px-4 py-4 bg-[#1c1c1c] bg-opacity-40 flex flex-col gap-6 max-w-[350px] min-h-[400px] justify-between rounded-s'>
                    <div className='max-h-[210px]'>
                        <Image src={P2} alt='p1' className='rounded-s'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <p className='text-xl text-white'>SaaS Landing Page</p>
                        <p>Landing Page made using Next.js, Tailwind CSS, Shad/cn, Motion</p>
                        <button className='border  border-white text-white px-6 py-1 cursor-not-allowed w-24 mt-6 rounded-s hover:bg-white hover:text-black hover:border-black transition-all'>Visit</button>
                    </div>
                </div>
                <div className='px-4 py-4 bg-[#1c1c1c] bg-opacity-40 flex flex-col gap-6 max-w-[350px] min-h-[400px] justify-between rounded-s'>
                    <div className='max-h-[210px]'>
                        <Image src={P3} alt='p1' className='rounded-s max-h-[100%]'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <p className='text-xl text-white'>Updating soon...</p> 
                        <p>Still in process - In making process using Next.js and Tailwind </p>
                        <button className='border  border-white text-white px-6 py-1 cursor-not-allowed w-24 mt-6 rounded-s hover:bg-white hover:text-black hover:border-black transition-all'>Visit</button>
                    </div>
                </div>
            </div>
        </div>


        <div>
      <hr className="mt-24 mb-6" />
      <Footer />
      </div>
    </div>
  )
}

export default page
