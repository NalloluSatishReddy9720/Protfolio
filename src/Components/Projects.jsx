import React from 'react'
import { Swiper, SwiperSlide }from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"
import tictactoe from '../assets/tictactoe.png'
import lighteffect from '../assets/lighteffect.png'
import amazonclone from '../assets/amazon.png'
import myntraclone from '../assets/myntra.png'
import digitalclock from '../assets/digitalclock.png'
import portfolio from '../assets/portfolio.png'



function Projects() {
  return (
    <>
      <div id="Projects" className="bg-blue-950 w-full overflow-hidden">
        <h1 className="text-white text-[20px] font-semibold mb-8 leading-normal text-center">
          Projects
        </h1>
        <div className=" bg-blue-950  text-white flex items-center justify-evenly pt-12 pb-14">
          <div className="max-w-5xl text-white">
            <Swiper
              spaceBetween={8}
              slidesPerView={3}
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
                  <div className="card h-32 w-52  border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                   <a
                      href="https://github.com/NalloluSatishReddy9720/Tic-Tac-Toe-game" target='_blank'
                      className="text-orange-400 hover:text-orange-500 rounded-full p-2 "
                    >
                        <img className='w-full ' src={tictactoe} alt="" />
                      
                    </a>
                    
                    
                  </div>
                  <div >
                    <h1 className="mt-4 px-16">Tic Tac Toe</h1>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-32 w-52   border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href="https://github.com/NalloluSatishReddy9720/3D-lighting-cube" target='_blank'
                      className="text-blue-400 hover:text-blue-500 rounded-full p-2"
                    >
                      <img className='w-full ' src={lighteffect} alt="" />
                    </a>
                  </div>
                  <div >
                    <h1 className="mt-4 px-16">3DLighteffect</h1>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-32 w-52   border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href="https://github.com/NalloluSatishReddy9720/Protfolio" target='_blank'
                      className="text-yellow-400 hover:text-yellow-500 rounded-full p-2"
                    >
                      <img className='w-full ' src={portfolio} alt="" />
                     
                    </a>
                  </div>
                  <div >
                    <h1 className="mt-4 px-16">Portfolio</h1>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-32 w-52   border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href="https://github.com/NalloluSatishReddy9720/Amazon-clone" target='_blank'
                      className="text-yellow-400 hover:text-yellow-500 rounded-full p-2"
                    >
                      <img className='w-full ' src={amazonclone} alt="" />
                     
                    </a>
                  </div>
                  <div >
                    <h1 className="mt-4 px-16">Amazonclone</h1>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-32 w-52   border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href="https://github.com/NalloluSatishReddy9720/myntraclone" target='_blank'
                      className="text-blue-400 hover:text-blue-500 rounded-full p-2"
                    >
                      <img className='w-full ' src={myntraclone} alt="" />
                      
                    </a>
                  </div>
                  <div >
                    <h1 className="mt-4 px-16">Myntraclone</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-52 bg-blue-950 pl-16">
                  <div className="card h-32 w-52   border-2 border-pink-400 rounded-lg glow items-center flex justify-center">
                    <a
                      href="https://github.com/NalloluSatishReddy9720/Digital-clock" target='_blank'
                      className="text-orange-500 hover:text-orange-600 rounded-full p-2"
                    >
                       <img className='w-full ' src={digitalclock} alt="" />
                      
                    </a>
                  </div>
                  <div >
                    <h1 className="mt-4 px-16">Digitalclock</h1>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
        </div>
      </div>
      </div>
    </>
  )
}

export default Projects
