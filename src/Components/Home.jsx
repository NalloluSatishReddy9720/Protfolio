import React, { useEffect } from 'react'
import profile from '../assets/satishpic.jpeg'
import {AiFillGithub} from "react-icons/ai"
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(()=>{
    AOS.init(
      {
        easing: 'ease-out-quart',
        delay : 0,
        duration: 750
      })
  },[1000])
  
  
  return (
    <div id="Home"  className='bg-blue-950 lg:px-36 px-10 lg:py-0 py-10 pt-0 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center overflow-hidden'>
      <div className="h-full lg:py-16 flex flex-col justify-center lg:items-start items-center text-white pt-0">
        <h1 data-aos="fade-right" className='text-white text-[52px] font-semibold mb-8 leading-normal'>Hi,<br></br>I'm <span className='text-yellow-400'>Nallolu Satish Reddy</span> a  <span>Frontend Developer</span></h1>
        <div data-aos="fade-up" className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              <a href="https://github.com/NalloluSatishReddy9720" target='_blank' className='text-pink-600 hover:text-pink-500 rounded-full glow p-2' >
                <AiFillGithub className="text-[28px]"/>
              </a>
              <a href="https://www.linkedin.com/in/nallolu-satish-reddy-nsr9720/" target='_blank' className='text-pink-600 hover:text-pink-500 rounded-full glow p-2' >
                <FaLinkedinIn className="text-[28px]"/>
              </a>
              <a href="" className='text-pink-600 hover:text-pink-500 rounded-full glow p-2' >
                <FaInstagram className="text-[28px]"/>
              </a>
            </div>
          </div>
        </div>      
      </div>
      <img data-aos="fade-down " src={profile} width={250} height={250} className='mt-5 rounded-full pic border-1.5 border-black' alt="" />
    </div>
  )
}

export default Home
