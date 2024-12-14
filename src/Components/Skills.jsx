import React from "react";
import { Swiper, SwiperSlide }from "swiper/react";
import { Autoplay} from "swiper/modules";

import {ImHtmlFive2} from "react-icons/im";
import {FaCss3Alt}  from 'react-icons/fa'
import {SiJavascript} from "react-icons/si"
import {GrReactjs} from "react-icons/gr"
import {FaJava} from "react-icons/fa"
import {FaGitAlt} from "react-icons/fa"
import {FaGithub} from "react-icons/fa6"
import {SiTailwindcss} from "react-icons/si"
import {BiLogoSpringBoot} from "react-icons/bi"
import { GrMysql } from "react-icons/gr";



// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"


function Skills() {
  return (
    <>
      <div id="Skills"  className="bg-blue-950 w-full overflow-hidden">
        <h1 className="text-white text-[20px] font-semibold mb-8 leading-normal text-center shadow-2xl ">
          Skills
        </h1>
        <div className=" bg-blue-950  text-white flex items-center justify-evenly pt-12 pb-14">
          <div className="max-w-5xl text-white">
            <Swiper
              spaceBetween={8}
              slidesPerView={5}
              onSlideChange={() => console.log("slide change")}
              loop = {true}
              centeredSlides={true}
              speed={800}
              
              autoplay = {
                {
                    delay:1000,
                }
              }
              
              modules={[Autoplay]}
            >
                
              <SwiperSlide>
                
                <div className="h-52  bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                   <a
                      href=""
                      className="text-orange-400 hover:text-orange-500 rounded-full p-2 "
                    >
                      <ImHtmlFive2 className="text-[48px]" />
                    </a>
                    
                    
                  </div>
                  <div >
                    <h1 className="mt-4 px-4">Html</h1>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-blue-400 hover:text-blue-500 rounded-full p-2"
                    >
                      <FaCss3Alt className="text-[48px] " />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4 px-4">CSS</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-yellow-400 hover:text-yellow-500 rounded-full p-2"
                    >
                      <SiJavascript className="text-[48px]" />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4 px-1">Javascript</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-blue-400 hover:text-blue-500 rounded-full p-2"
                    >
                      <GrReactjs className="text-[48px]" />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4 px-2">Reactjs</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2  border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-orange-500 hover:text-orange-600  rounded-full p-2"
                    >
                      <FaJava className="text-[48px]" />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4 px-4">Java</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-orange-400 hover:text-orange-500 rounded-full p-2"
                    >
                      <FaGitAlt className="text-[48px]" />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4 px-5">Git</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52  bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-slate-600 hover:text-slate-800 rounded-full p-2"
                    >
                      <FaGithub className="text-[48px]" />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4 px-3">Github</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52  bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-blue-400 hover:text-blue-500 rounded-full p-2"
                    >
                      <SiTailwindcss className="text-[48px]" />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4 px-1">Tailwind</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52  bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-green-500 hover:text-green-600 rounded-full p-2"
                    >
                      <BiLogoSpringBoot className="text-[48px]" />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4">Springboot</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52  bg-blue-950 pl-16">
                  <div className="card h-16 w-16 border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href=""
                      className="text-blue-400 hover:text-green-600 rounded-full p-2"
                    >
                      < GrMysql className="text-[48px]" />
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-4 px-4">MySql</h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
      </div>
    </>
  );
}

export default Skills;
