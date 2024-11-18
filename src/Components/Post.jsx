import React, { useContext, useEffect, useState } from 'react'
import { IoIosHeart } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import Bag from "../assets/bag.png"
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';


function Post({allPage,activeGrid,categoryFilter}) {
    let { info, loading } = useContext(ApiData)
    let [filterShow,setFilterShow] = useState([]);
    let [count,setCount] = useState(true);


    useEffect(()=>{
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter);
    },[categoryFilter]);

    let handleSee = () => {
        setFilterShow(categoryFilter);
        setCount(false);
      };
      let handleSeeless = () => {
        let fiveFilter = categoryFilter.slice(0, 5);
        setFilterShow(fiveFilter);
        setCount(true);
      };


    return (
        <>
        {filterShow.length > 0 ? 
     <>
       <div className="flex flex-wrap">
         {filterShow.map((item)=>(
            
            <div className="w-[32%]">
                <Link to={`/shop/${item.id}`}>
                <div className="">
                    <div className="relative group overflow-hidden">
                        <img className="w-full" src={item.thumbnail} />
                        <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                            <ul className='text-end'>
                                <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>

                                <li className='py-2'>Compare <IoIosGitCompare className='inline-block' /> </li>
                                <li className='py-2'>Add to Cart <FaCartPlus className='inline-block' /> </li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="flex justify-between">
                    <div className="">
                        <h3 className='font-sans text-[16px] font-bold text-[#262626]'>{item.title}</h3>
                        <h5 className='font-sans text-[16px] font-normal text-[#262626]'>{item.brand}</h5>
                    </div>
                    <p className='font-sans text-[16px] font-bold text-[#262626]'>${item.price}</p>
                </div>
       </Link>
            </div>
        ))}
       </div>

       <div className=" mx-auto mt-[20px]">
            {count
              ? categoryFilter.length > 5 && (
                  <div onClick={handleSee} className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300 text-center pt-[13px]">
                    <h2>See more</h2>
                  </div>
                )
              : categoryFilter.length > 5 && (
                  <div onClick={handleSeeless} className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300 text-center pt-[13px]">
                    <h2>See Less</h2>
                  </div>
                )}
          </div>
     </>
    :
    
        <div className={`${activeGrid == "active" ? "w-[100%]" : "flex flex-wrap"}`}>

        {allPage.map((item)=>(
            
            <div className="w-[32%]">
                <Link to={`/shop/${item.id}`}>
                <div className="">
                    <div className="relative group overflow-hidden">
                        <img className="w-full" src={item.thumbnail} />
                        <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                            <ul className='text-end'>
                                <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>

                                <li className='py-2'>Compare <IoIosGitCompare className='inline-block' /> </li>
                                <li className='py-2'>Add to Cart <FaCartPlus className='inline-block' /> </li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="flex justify-between">
                    <div className="">
                        <h3 className='font-sans text-[16px] font-bold text-[#262626]'>{item.title}</h3>
                        <h5 className='font-sans text-[16px] font-normal text-[#262626]'>{item.brand}</h5>
                    </div>
                    <p className='font-sans text-[16px] font-bold text-[#262626]'>${item.price}</p>
                </div>
       </Link>
            </div>
        ))}
        </div>
    }
        </>
    )
}

export default Post
