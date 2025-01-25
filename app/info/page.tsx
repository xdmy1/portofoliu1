"use client";
import React from 'react'
import Footer from '../components/Footer'
import { motion } from "motion/react"
import Image from 'next/image'
import Pfp from '/public/pfp.jpg'
import Prog from '/public/prog.jpg'
import Link from 'next/link'
import Spirala from '/public/spirala.png'
import Star from '/public/star.png'


const MotionImage = motion(Image);

const page = () => {
  return (
  

    <div className='pt-32 px-4 pb-6 md:px-10 lg:px-16 
    bg-black
      bg-[url(/grain.gif)]
      bg-opacity-5
      w-full
      h-full
      bg-repeat
      absolute
      overflow-x-hidden
    '>
        
        <MotionImage src={Star} alt="spirala"
        className='absolute w-40 rotate-6 -left-4 top-0 
        '
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        ></MotionImage>
            <div className='flex flex-col lg:flex-row items-center '>
        <div className='flex flex-col text-gray-500 gap-6 text-5xl lg:max-w-[50%] lg:gap-10'>
            <p>Hi ,I am Jiacheng Yang. Raised in the <span className='text-white'>Gobi Desert</span>, I was a curious kid who discovered the world through video games.</p>
            <p>Moving to <span className='text-white'>Shanghai</span> to study Civil Engineering at Tongji University, I used every opportunity to build digital connections.</p>
            <p>While still in college, I developed a platform that fostered peer-to-peer knowledge sharing and started my journey in Interaction Design.</p>
            <p>Working in fast-paced, collaborative environments, I combine <span className='text-white'>UX</span>, <span className='text-white'>UI</span>, product and <span className='text-white'>3D Design</span>, creating elevated, playful and tangible products and experiences that empower us to move into the digital future. </p>
        </div>

        <div className="flex flex-col mt-16 gap-6">
            <Image  src={Pfp} alt='pfp' />
            <Image src={Prog} alt='prog' />
            
            
        </div>
        
        </div>
        <MotionImage src={Spirala} alt="spirala"
        className='absolute w-40 rotate-45 md:right-2 sm:w-32 bottom-24 -right-20'
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        />
        <hr className="mt-24 mb-6" />
        
        <Footer />
    </div>
  )
}

export default page
