import React from 'react'
import profile from '../assets/satishpic.jpeg'

function About() {
  return (
    <>
    
    <div id="About" className='bg-blue-950 lg:px-36 px-10 lg:py-0 py-16 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
    
      <div data-aos="fade-left" className="h-full lg:py-28 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className='text-white text-[52px] font-semibold mb-8 leading-normal'>About Me</h1> 
        <p> I'm Nallolu Satish Reddy, a passionate technologist with a keen interest in web application development. As a self-taught learner, I thrive on exploring new technologies and solving complex problems. With expertise in HTML, CSS, JavaScript, and Java, I craft user-friendly web interfaces that make the digital world more accessible. I'm excited to leverage my design skills and coding expertise to build  career in the IT sector. I'm open to exploring various job opportunities that align with my skills and passions."
        </p>  
      </div>
      <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              
             <a href="https://drive.google.com/file/d/1QWo5vDq_O6-2nlIdNOeUIPY8vd1PGXm6/view?usp=drivesdk" target='_blank'><button   className='glow shadow-xl hover:bg-fuchsia-800 hover:shadow-fuchsia-800 text-white border-2 p-2 uppercase border-fuchsia-800 rounded-lg'>Resume</button></a> 
            </div>
          </div>
        </div>    
      
    </div>
    
    </>
  )
}

export default About
