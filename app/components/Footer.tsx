import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-6 text-gray-500 md:flex-row justify-between md:text-l lg:text-xl'>
      <div className='text-white'>
        <a href="/info"><p className='underline'>Bobernaga Damian</p></a>
        <p>Portofoliu 2024 v0.1</p>
      </div>
      <div>
        <p>Website Designer</p>
        <p>Front-end developer</p>
      </div>
      <p>All rights reserved.</p>
      <div>
        <p>Let&apos;s chat</p>
        <a href="mailto:damian.bobernaga@gmail.com"><p className='text-white cursor-pointer'>contact me</p></a>
      </div>
      <div className='underline'>
        <p>Resume</p>
        <a  href="https://md.linkedin.com/in/bobernaga-damian-263629273"><p className='text-white cursor-pointer'>Linkedin</p></a>
        <a  href="https://t.me/damiqqn"><p className='text-white cursor-pointer'>Telegram</p></a>
      </div>
    </div>
  )
}

export default Footer
