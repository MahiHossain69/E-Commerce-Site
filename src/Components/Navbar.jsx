
import React, { useEffect, useRef, useState } from 'react'
import Flex from './Flex'
import Container from './Container'
import { HiBars2 } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCart } from "react-icons/io5";





function Navbar() {
    let cateRef = useRef();
    let[isCateNav,setisCateNav] = useState(false);

    useEffect(() =>{
        document.addEventListener("click", (e) => {
            if(cateRef.current.contains(e.target)) {
              setisCateNav(true);
            }else{
                setisCateNav(false);
            }
        });
    },[setisCateNav])
  return (
    <section className='bg-[#F5F5F3] py-[25px]'>
    <Container>
     <Flex className='items-center'>
        <div className="w-1/4 relative cursor-pointer">
        <div ref={cateRef} className="flex items-center gap-x-2">
        <HiBars2 />

            <h3>Shop by Category</h3>
        </div>
        {isCateNav && (

         <div className="bg-[#262626] w-[300px] absolute left-0 top-[60px] z-[1]">
            <ul className='py-3'>
                <li className='font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#d8d8d8] hover:pl-6 duration-300 ease-in-out'>Accesories</li>
                <li className='font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#d8d8d8]  hover:pl-6 duration-300 ease-in-out'>Furniture</li>
                <li className='font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8]  hover:pl-6 duration-300 ease-in-out'>Electronics</li>
                <li className='font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8]  hover:pl-6 duration-300 ease-in-out'>Clothes</li>
                <li className='font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8]  hover:pl-6 duration-300 ease-in-out'>Bags</li>
                <li className='font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out'>Home appliances</li>
            </ul>
         </div>
        )}

        </div>
        <div className="w-1/2">
       <div className="relative">
       <input type='search' className='py-3 pl-2 w-full outline-none rounded-sm' placeholder='Search'/>
       <BsSearch className='absolute top-[50%] translate-y-[-50%] right-4' />

       </div>
        </div>
        <div className="w-1/4">
        <div className="flex justify-end gap-x-6">
            <div className="flex items-center">
            <FaUser />
            <IoMdArrowDropdown />

            </div>
            <IoCart />

        </div>
        </div>
     </Flex>
    </Container>
    </section>
  )
}

export default Navbar
