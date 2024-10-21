import React from 'react'
import Logo from "../assets/logo.png";
import {FaFacebookF, FaLinkedinIn , FaInstagram  } from "react-icons/fa";
import Container from "./Container";

function Footer() {
  return (
    <section className="bg-[#F5F5F3] mt-[30px] sm:py-20">
    <Container className="overflow-hidden ">
      <div className="flex flex-col lg:flex-row justify-between">
      
        <div className=" mb-6 sm:mb-0 pl-5">
          <h2 className="text-[16px] font-DMs font-bold text-black">MENU</h2>
          <div className="text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3">
            <ul>
                <a href=''><li>Home</li></a>
           <a href=''><li className='mt-2'>Shop</li></a>
            <a href=''><li className='mt-2'>About</li></a>
            <a href=''><li className='mt-2'>Contact</li></a>
            <a href=''><li className='mt-2'>Journal</li></a>
            </ul>
          </div>
        </div>
        
        <div className=" mb-6 sm:mb-0 pl-5">
          <h2 className="text-[16px] font-DMs font-bold text-black">SHOP</h2>
          <div className="text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3">
           <ul>
           <a href=''><li className='mt-2'>Category 1</li></a>
           <a href=''><li className='mt-2'>Category 2</li></a>
           <a href=''><li className='mt-2'>Category 3</li></a>
           <a href=''><li className='mt-2'>Category 4</li></a>
           <a href=''><li className='mt-2'>Category 5</li></a>
           </ul>
          </div>
        </div>
       
        <div className=" mb-6 sm:mb-0 pl-5">
          <h2 className="text-[16px] font-DMs font-bold text-black">HELP</h2>
          <div className="text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3">
            <ul>
            <a href=''><li className='mt-2'>Privacy Policy</li></a>
            <a href=''><li className='mt-2'>Terms & Conditions </li></a>
            <a href=''><li className='mt-2'>Special E-shop</li></a>
            <a href=''><li className='mt-2'>Shipping</li></a>
            <a href=''><li className='mt-2'>Secure Payments</li></a>
            </ul>
          </div>
        </div>
        
        <div className=" mb-6 sm:mb-0 pl-5">
          <h2 className="text-[16px] font-DMs font-bold text-black">
            (052) 611-5711
          </h2>
          <h2 className="text-[16px] font-DMs font-bold text-black">
            company@domain.com
          </h2>
          <p className="text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3">
            575 Crescent Ave. Quakertown, PA 18951
          </p>
        </div>
    
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-6 sm:mb-0 flex justify-center lg:justify-start">
          <img src={Logo} alt="Logo" className="w-[121.9px] h-[28.51px]" />
        </div>
      </div>

     
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10">
        <div className="flex gap-4 text-[20px]">
          <a href=''><FaFacebookF className="text-lg md:text-xl" /></a>
         <a href=''> <FaLinkedinIn  className="text-lg md:text-xl" /></a>
         <a href=''> <FaInstagram  className="text-lg md:text-xl" /></a>
        </div>
        <h2 className="text-[14px] text-[#6D6D6D] font-DMs font-medium mt-3 text-center sm:text-right">
          2024 Orebi Minimal eCommerce Figma Template by Adveits
        </h2>
      </div>

      
    </Container>
  </section>
  )
}

export default Footer
