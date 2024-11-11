import React, { useContext, useEffect, useState } from 'react'
import Container from '../Components/Container'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { FaListUl } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";


import Post from '../Components/Post';
import { ApiData } from '../Components/ContextApi';
import Pagination from '../Components/Pagination';



function Shop() {
  let {info,Loading} = useContext(ApiData)
  let [show,setShow] = useState(false);
  let [currentPage,setCurrentPage] = useState(1)
  let [perPage,setPerPage] = useState(6)
  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage
let [activeGrid,setActiveGrid] = useState("")
  let allPage = info.slice(firstPage,lastPage)
  let [category,setCategory] = useState([])
  let [categoryFilter,setcategoryfilter] = useState([])


  let pageNumber = []
  for( let i = 0; i < Math.ceil(info.length / perPage); i++){
    pageNumber.push(i)
  }


  let paginate = (paginate)=> {
    setCurrentPage(paginate + 1)
   };
   let next = ()=> {
   if(currentPage < pageNumber.length){
    setCurrentPage((state)=> state + 1);
   }
   };
   let prev = ()=> {
    if(currentPage > 1){
      setCurrentPage((state)=> state - 1);
    }
   }

   let handleMulti = ()=>{
    setActiveGrid("active")
   }

   useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
   },[info]);



   let handleCategory = (citem) =>{
   let filterItem = info.filter((item)=> item.category == citem)
   setcategoryfilter(filterItem)
   }
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
          {category.map((item)=>(

          <li onClick={()=> handleCategory(item)} className='capitalize text-[#262626] font-sans py-1 mt-[20px] font-bold'>{item}</li>
          ))}
         
        </ul>
        )}
      </div>
      </div>
      <div className="w-4/5 pt-8">
      
    <div className="flex item-center justify-between">
      <div className="">
        <div className="flex item-center gap-x-4">
        <div onClick={()=>setActiveGrid("")} className="p-3 hover:bg-gray-500 text-[#262626]">
        <IoGrid />
        </div>

          <div onClick={handleMulti} className="p-3 hover:bg-gray-500 text-[#262626]">

        <FaListUl  />
          </div>
        
        </div>

      </div>
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
    </div>

      <div className="flex justify-between flex-wrap">
        <Post allPage={allPage} activeGrid={activeGrid} categoryFilter={categoryFilter}/>
        
      <div className="py-10 flex justify-center w-full">
        <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage}/>
      </div>

          
      </div>
      </div>
      </div>
    </Container>
  </section>
  )
}

export default Shop
