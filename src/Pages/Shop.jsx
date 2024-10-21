import React, { useState } from 'react'
import Container from '../Components/Container'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";



import Post from '../Components/Post';



function Shop() {
  let [show,setShow] = useState(false);
  return (
  <section>
    <Container>
      <div className="flex">
      <div className="w-1/5">
      <div className="pr-6 pt-8">
        <div onClick={()=> setShow(!show)} className="flex justify-between items-center">
        <h2  className='font-sans text-[20px] font-bold text-[#262626] cursor-pointer'>Shop by Category</h2>

        {show ? <FaMinus /> : <FaPlus />
  }
        </div>
        {show && (
        <ul>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>
        )}
      </div>
      </div>
      <div className="w-4/5">
      <div className="pt-8 flex justify-end items-center gap-x-10">
       <div className="">
        <label className='pr-3'>Sort by :</label>
        <select className='w-[60px] h-[30px] border-[1px] border-[#262626]' name='' id=''>
          <option >One</option>
          <option >One</option>
          <option >One</option>
          <option>One</option>
        </select>
       </div>

       <div className="">
        <label className='pr-3'>Show :</label>
        <select className='w-[60px] h-[30px] border-[1px] border-[#262626]' name='' id=''>
          <option >One</option>
          <option >One</option>
          <option >One</option>
          <option>One</option>
        </select>
       </div>

      </div>

      <div className="flex justify-between flex-wrap">
        <Post/>
      

          
      </div>
      </div>
      </div>
    </Container>
  </section>
  )
}

export default Shop
