import React, { useState } from "react";
import {Link} from "react-scroll"
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import logo from '../assets/logo1.png'

function Nav() {
    const [click,setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-12 w-1/4 left-15  right-0 bg-blue-950 overflow-hidden">
        <ul className="text-center text-sm p-0">
          <Link spy={true} smooth={true} to="Home">
            <li  className="my-1 py-1 border-b border-blue-900 hover:bg-blue-900 hover:rounded hover:cursor-pointer">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-1 py-1 border-b border-blue-900 hover:bg-blue-900 hover:rounded hover:cursor-pointer" >About</li>
          </Link>
          <Link spy={true} smooth={true} to="Skills">
            <li className="my-1 py-1 border-b border-blue-900 hover:bg-blue-900 hover:rounded hover:cursor-pointer" >Skills</li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-1 py-1 border-b border-blue-900 hover:bg-blue-900 hover:rounded hover:cursor-pointer" >Projects</li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-1 py-1 border-b border-blue-900 hover:bg-blue-900 hover:rounded hover:cursor-pointer" >Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <nav className="bg-blue-950">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-16 py-4 border-b border-slate-900">
          <div className="flex items-center flex-1">
            <span><img src={logo} className="h-14 " alt="" /></span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8  text-[10px]">
                <Link spy={true} smooth={true} to="Home">
                  <li className="hover:text-blue-600  transition border-b-2 border-blue-950 hover:border-blue-600 cursor-pointer">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                  <li className="hover:text-blue-600  transition border-b-2 border-blue-950 hover:border-blue-600 cursor-pointer">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Skills">
                  <li className="hover:text-blue-600  transition border-b-2 border-blue-950 hover:border-blue-600 cursor-pointer">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                  <li className="hover:text-blue-600  transition border-b-2 border-blue-950 hover:border-blue-600 cursor-pointer">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                  <li className="hover:text-blue-600 transition border-b-2 border-blue-950 hover:border-blue-600 cursor-pointer">Contact</li>
                </Link>
              </ul>
            </div>
            
          </div>
          <div>
            {click && content}
          </div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes/> : <CiMenuFries/> }
          </button>
        </div>
      </nav>

      
    </>
  );
}

export default Nav;
