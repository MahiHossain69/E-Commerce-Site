import React from 'react'
import Container from './Container'
import Bag from "../assets/bag.png"
import Bag2 from "../assets/bag2.png"
import Mosolla from "../assets/mosolla.png"
import Jog from "../assets/jog.png"
import Flex from './Flex'
import DownBan from "../assets/downban.png"
import { IoIosHeart } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

function BestSeller() {
  return (
    <section>
        <Container>
            <h2 className='font-sans text-[39px] font-bold text-[#262626]'>Our Bestsellers</h2>

         <Flex className='justify-between'>
         <div className="!w-[24%] mt-[30px]">
                <div className="relative group overflow-hidden">
                    <img src={Jog}></img>

                    <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                        <ul className='text-end'>
                            <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>
                           
                            <li className='py-2'>Compare <IoIosGitCompare  className='inline-block'/> </li>
                            <li className='py-2'>Add to Cart <FaCartPlus  className='inline-block' /> </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-[15px]">
                    <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Home Decor</h2>
                    <p className='font-sans text-[16px] font-bold text-[#262626]'>$35.00</p>
                </div>
                <div className="mt-[10px]">
                    <h3 className='font-sans text-[16px] font-normal text-[#262626]'>White</h3>
                </div>
            </div>

            <div className="!w-[24%] mt-[30px]">
                <div className="relative group overflow-hidden">
                    <img src={Bag}></img>

                    <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                        <ul className='text-end'>
                            <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>
                           
                            <li className='py-2'>Compare <IoIosGitCompare  className='inline-block'/> </li>
                            <li className='py-2'>Add to Cart <FaCartPlus  className='inline-block' /> </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-[15px]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626]'>15 Laptop Luggage Casual</h2>
                <p className='font-sans text-[16px] font-bold text-[#262626]'>$40.00</p>
                </div>
                <div className="mt-[10px]">
                <h3 className='font-sans text-[16px] font-normal text-[#262626]'>Gray</h3>
                </div>
            </div>

            <div className="!w-[24%] mt-[30px]">
                <div className="relative group overflow-hidden">
                    <img src={Mosolla}></img>

                    <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                        <ul className='text-end'>
                            <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>
                           
                            <li className='py-2'>Compare <IoIosGitCompare  className='inline-block'/> </li>
                            <li className='py-2'>Add to Cart <FaCartPlus  className='inline-block' /> </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-[15px]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626]'>White Marble Mortar and Pestle </h2>
                <p className='font-sans text-[16px] font-bold text-[#262626]'>$39.00</p>
                </div>
                <div className="mt-[10px]">
                <h3 className='font-sans text-[16px] font-normal text-[#262626]'>White</h3>
                </div>
            </div>

               <div className="!w-[24%] mt-[30px]">
                <div className="relative group overflow-hidden">
                    <img src={Bag2}></img>

                    <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                        <ul className='text-end'>
                            <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>
                           
                            <li className='py-2'>Compare <IoIosGitCompare  className='inline-block'/> </li>
                            <li className='py-2'>Add to Cart <FaCartPlus  className='inline-block' /> </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-[15px]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Shoulder Laptop Backpack</h2>
                    <p className='font-sans text-[16px] font-bold text-[#262626]'>$53.00</p>
                </div>
                <div className="mt-[10px]">
                <h3 className='font-sans text-[16px] font-normal text-[#262626]'>Black</h3>
                </div>
            </div>
         </Flex>
         <div className="mt-[50px]">
            <img src={DownBan}></img>
         </div>
        </Container>
    </section>
  )
}

export default BestSeller
