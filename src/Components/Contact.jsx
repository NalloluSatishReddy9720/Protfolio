import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {  IoCall } from "react-icons/io5";
import {   MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div id="Contact" className=" w-full p-4 lg:p-20 flex flex-col items-center justify-center bg-blue-950">
        <h1 className="text-white text-[20px] font-semibold mb-8 leading-normal text-center">
          Contact
        </h1>
        <div className=" w-full lg:flex justify-center items-center ">
          <div className="  flex lg:mr-20 items-center">
            <form action="" className="flex flex-col gap-2 ">
              <div className="lg:flex gap-6 lg:gap-4">
                <input
                  className="w-full lg:my-2 my-4 rounded-lg   text-slate-500  bg-slate-900 glow p-4 border-2 border-fuchsia-500"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <input
                  className="w-full lg:my-2 my-4 rounded-lg  text-white bg-slate-900 glow p-4 border-2 border-fuchsia-500"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
              <textarea
                className="w-full my-3 rounded-lg  text-white bg-slate-900 glow p-4 border-2 border-fuchsia-500"
                name=""
                id=""
                cols="20"
                rows="10"
                placeholder="Write Your Message..."
              ></textarea>
              <button
                className="neno-button inline-block shadow-xl hover:shadow-fuchsia-800/500 text-white uppercase bg-fuchsia-400  rounded-lg py-4 px-8 border-2  hover:border-fuchsia-400 glow mb-10"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-20 pl-0 ml-0">
            <div>
            <div  className="ml-0  mb-5 space-y-10">
              <div >
                <div className=" flex-start space-y-6 border-2 p-3 rounded-lg   border-blue-950 hover:card">
                  <div className="flex  items-center">
                  <a
                    href=""
                    className="text-pink-600 hover:text-pink-500 rounded-full glow px-2"
                  >
                    <IoCall className="text-[28px]" />
                  </a>
                  <span className="  text-slate-300  text-[18px]">+91-9347963752</span>
                  </div>
                  <div className="flex  items-center">
                  <a
                    href=""
                    className="text-pink-600 hover:text-pink-500 rounded-full glow p-2"
                  >
                    <MdEmail className="text-[28px]" />
                  </a>
                  <span className=" text-slate-300 text-[18px]">satishreddynallolla@gmail.com</span>
                  </div>
                  <div className="flex  items-center">
                  <a
                    href=""
                    className="text-pink-600 hover:text-pink-500 rounded-full glow p-2"
                  >
                    <IoLocationSharp className="text-[28px]" />
                  </a>
                  <span className=" text-slate-300 text-[18px]">Hyderabad,Telangana</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div  className="flex mt-8 gap-2">
              <div className="flex items-center justify-center">
                <div className="flex space-x-2 ml-4">
                  <a
                    href="https://github.com/NalloluSatishReddy9720" target='_blank'
                    className="text-pink-600 hover:text-pink-500 rounded-full glow p-2"
                  >
                    <AiFillGithub className="text-[28px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nallolu-satish-reddy-nsr9720/" target='_blank'
                    className="text-pink-600 hover:text-pink-500 rounded-full glow p-2"
                  >
                    <FaLinkedinIn className="text-[28px]" />
                  </a>
                  <a
                    href=""
                    className="text-pink-600 hover:text-pink-500 rounded-full glow p-2"
                  >
                    <FaInstagram className="text-[28px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
