"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react'
import Disk from '/public/semicerc.png';
import Disk2 from '/public/cilindru.png';
import { TypewriterEffect } from "./ui/typewriter-effect";
import { once } from 'events';

const MotionImage = motion(Image);

const Hero = () => {
  return (
    <div className='text-gray-500 text-2xl flex flex-col gap-8 mt-32 md:text-3xl min-h-[40vh] md:min-h-auto relative'>
      <MotionImage
      src={Disk}
       alt="Disk"
       className='w-32 md:w-40 absolute z-10 -top-48 -left-10'
       animate={{
        y: ["0%", "-5%", "0%"], // Moves up and down
        scale: [1, 1.02, 1], // Slight scale change for added effect
      }}
      transition={{
        duration: 7, // Animation duration
        ease: "easeInOut", // Smooth easing
        repeat: Infinity, // Repeats infinitely
        repeatType: "loop", // Loop the animation
      }}

       />
      <MotionImage
      src={Disk2}
       alt="Disk"
       className='w-32 md:w-40 absolute z-10 -bottom-32 -right-20'
       animate={{
        y: [0, -10, 0, 10, 0], // Complex bounce pattern
        x: [0, 5, -5, 5, -5, 0], // Slight side-to-side movement
        rotate: [0, 5, -5, 2, -2, 0], // Gentle rotation
        scale: [1, 1.05, 1], // Slight scaling
      }}
      transition={{
        duration: 10, // Smooth loop takes 6 seconds
        ease: "easeInOut", // Smooth easing
        repeat: Infinity, // Repeats forever
        repeatType: "loop", // Loops seamlessly
      }}
       />
      <p>
        <Link href="/info">
        <span className='text-white underline cursor-pointer'>Damian</span> 
        </Link>
        {' '}is a front-end developer that uses Next.js
        </p>
      <TypewriterEffect className='text-start text-white text-l' words={[
        {
          text: "He"
        },
        {
          text: "designs"
        },
        {
          text: "and"
        },
        {
          text: "develops"
        },
        {
          text: "websites"
        },
        {
          text: "that"
        },
        {
          text: "get"
        },
        {
          text: "you"
        },
        {
          text: "clients.",
          className: "text-white"
        },
      ]}/>
      <div className='flex'>
      <p>
      See him in{' '}
      <Link href="/work">
        <span className="underline cursor-pointer">action.</span>
      </Link>
    </p>
    </div>
    </div>
  )
}

export default Hero
