import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



function Header() {
  let [show,setShow] = useState(false)
  return (
  <header className='py-6'>
     <Container>
    <Flex className="justify-between items-center">
    <div className="w-1/4">
      <img src={Logo}></img>
    </div>
    <div className='w-3/4'>
      <ul className={`lg:flex lg:static absolute right-0 top-0 justify-center gap-x-[20px] ${show ? ' w-full right-[0] duration-300 ease-in-out top-[50px]' : ' right-[-100px] top-[50px]'}`}>
        <li className='font-sans text-[16px] font-normal text-[#767676] hover:text-[#262626] hover:font-bold  duration-500 ease-in-out text-center py-2'>Home</li>
        <li className='font-sans text-[16px] font-normal text-[#767676] hover:text-[#262626] hover:font-bold  duration-500 ease-in-out text-center py-2'>Shop</li>
        <li  className='font-sans text-[16px] font-normal text-[#767676] hover:text-[#262626] hover:font-bold  duration-500 ease-in-out text-center py-2'>About</li>
        <li  className='font-sans text-[16px] font-normal text-[#767676] hover:text-[#262626] hover:font-bold  duration-500 ease-in-out text-center py-2'>Contacts</li>
        <li  className='font-sans text-[16px] font-normal text-[#767676] hover:text-[#262626] hover:font-bold  duration-500 ease-in-out text-center py-2'>Journal</li>
      </ul>
    </div>
    <div className="lg:hidden" onClick={()=> setShow(!show)}>
      {show ?<RxCross2 /> : <FaBarsStaggered />}
    
    


    </div>
    </Flex>
   </Container>
  </header>
  )
}

export default Header