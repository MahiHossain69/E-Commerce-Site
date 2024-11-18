import React, { useContext, useEffect, useState } from 'react'
import Container from '../Components/Container'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { Breadcrumb } from 'antd'; 
import { FaHome} from "react-icons/fa";

import Post from '../Components/Post';
import { ApiData } from '../Components/ContextApi';
import Pagination from '../Components/Pagination';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';



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
  let [price, setPrice] = useState(false);
  let [priceShow, setPriceShow] = useState([]);
  let [low, setLow] = useState("");
  let [high, setHigh] = useState("");


  let pageNumber = []
  for( let i = 0; i < Math.ceil( categoryFilter.length > 0 ? categoryFilter : info.length / perPage); i++){
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
   
   let handleAll = () => {
    setcategoryfilter("");
  };
   let handleChange = (e) => {
    setPerPage(e.target.value);
  };
  let handleprice = (value) => {
    setLow(value.low);
    setHigh(value.high);
  };
  
  let handlePrice = (value) =>{
    setLow(value.low);
    setHigh(value.high);
    let priceRange = info.filter((item)=> item.price > value.low && item.price < value.high)
    if(priceRange.length > 0){
      setcategoryfilter(priceRange);
    }else{
      setcategoryfilter("")
    }
  }
  return (
  <section>
    <Container>
    <div className="">
          <h2 className="font-sans text-[49px] font-bold text-[#262626] ">
            Products
          </h2>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={FaHome}>
              <Link to="/" className='hover:font-bold font-sans font-normal text-[12px] text-[#000000]'> Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className='font-bold font-sans  text-[12px] text-[#000000]'> Products</Breadcrumb.Item>
          </Breadcrumb>
        </div>

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
           <li
                  onClick={handleAll} className="capitalize text-[#262626] font-sans py-1 mt-[20px] font-bold cursor-pointer"
                >
                  All Product
                </li>
          {category.map((item)=>(

          <li onClick={()=> handleCategory(item)} className='capitalize text-[#262626] font-sans py-1 mt-[20px] font-bold cursor-pointer'>{item}</li>
          ))}
         
        </ul>
        )}
      </div>

      <div className="pr-6 pt-8">
      <div onClick={()=> setPrice(!price)} className="flex justify-between items-center">
        <h2  className='font-sans text-[20px] font-bold text-[#262626] cursor-pointer'>Shop by Price</h2>

        {price ? <FaMinus /> : <FaPlus />
  }
        </div>
        {price && (
        <ul className="cursor-pointer">
                <li
                  onClick={() => handlePrice({ low: 0, high: 10 })}
                  className="capitalize text-[#262626] font-sans py-1 mt-[20px] font-bold cursor-pointer"
                >
                  $0.00 - $9.99
                </li>
                <li
                  onClick={() => handlePrice({ low: 10, high: 20 })}
                  className="capitalize text-[#262626] font-sans py-1 mt-[20px] font-bold cursor-pointer"
                >
                  $10.00 - $19.99
                </li>
                <li
                  onClick={() => handlePrice({ low: 20, high: 9999 })}
                  className="capitalize text-[#262626] font-sans py-1 mt-[20px] font-bold cursor-pointer"
                >
                  $20.00 - $9999.99
                </li>
              </ul>
        )}

      </div>
      
      
      </div>
      <div className="w-4/5 pt-8">
      
    <div className="flex item-center justify-between">
      <div className="">
        <div className="flex item-center gap-x-4">
        <div onClick={()=>setActiveGrid("")} className={`${
                      activeGrid === "active" ? "p-3 hover:bg-[gray] text-[#262626]" : "p-3 bg-[gray] text-[#262626]"
                    }`}>
        <IoGrid />
        </div>

          <div onClick={handleMulti} className={`${
                      activeGrid != "active" ? "p-3 hover:bg-[gray] text-[#262626]" : "p-3 bg-[gray] text-[#262626]"
                    }`}>

        <FaListUl  />
          </div>
        
        </div>

      </div>
      <div className="pt-8 flex justify-end items-center gap-x-10 leading-10 ">
       <div className="">
        <label htmlFor="sort" className='pr-3'>Sort by :</label>
        <select className='w-[200px] h-[30px] text-center p-1 border-[1px] border-[#262626]' name='sort' id='sort'>
        <option value="" className=''>Price Low to High</option>
         <option value="">Price High to Low</option>
         <option value="">Newest First</option>
         <option value="">Oldest First</option>
        </select>
       </div>

       <div className="">
        <label className='pr-3'>Show :</label>
        <select  onChange={handleChange} name="show" id="show" className='w-[60px] p-1 h-[30px] border-[1px] border-[#262626]' >
        <option value="6">6</option>
        <option value="12">12</option>
         <option value="18">18</option>
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
      <Footer/>
    </Container>
  </section>
  )
}

export default Shop
