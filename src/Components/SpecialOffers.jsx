import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Cap from "../assets/cap.png"
import Table from "../assets/table.png"
import Headphone from "../assets/headphone.png"
import Sunglass from "../assets/sunglass.png"

import { IoIosHeart } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

function SpecialOffers() {
    return (
        <section className="mt-[30px]">
            <Container>
                <h2 className='font-sans text-[39px] font-bold text-[#262626]'>Our Bestsellers</h2>

                <Flex className='justify-between'>
                    <div className="!w-[24%] mt-[30px]">
                        <div className="relative group overflow-hidden">
                            <img src={Cap}></img>

                            <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                                <ul className='text-end'>
                                    <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>

                                    <li className='py-2'>Compare <IoIosGitCompare className='inline-block' /> </li>
                                    <li className='py-2'>Add to Cart <FaCartPlus className='inline-block' /> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between mt-[15px]">
                            <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Sunset Hat</h2>
                            <p className='font-sans text-[16px] font-bold text-[#262626]'>$40.00</p>
                        </div>
                        <div className="mt-[10px]">
                            <h3 className='font-sans text-[16px] font-normal text-[#262626]'>Gray</h3>
                        </div>
                    </div>

                    <div className="!w-[24%] mt-[30px]">
                        <div className="relative group overflow-hidden">
                            <img src={Table}></img>

                            <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                                <ul className='text-end'>
                                    <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>

                                    <li className='py-2'>Compare <IoIosGitCompare className='inline-block' /> </li>
                                    <li className='py-2'>Add to Cart <FaCartPlus className='inline-block' /> </li>
                                </ul>
                            </div>


                        </div>
                        <div className="flex justify-between mt-[15px]">
                            <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Solid Wood Table Dining Set</h2>
                            <p className='font-sans text-[16px] font-bold text-[#262626]'>$115.00</p>
                        </div>
                        <div className="mt-[10px]">
                            <h3 className='font-sans text-[16px] font-normal text-[#262626]'>	Dark brown</h3>
                        </div>
                    </div>

                    <div className="!w-[24%] mt-[30px]">
                        <div className="relative group overflow-hidden">
                            <img src={Headphone}></img>

                            <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                                <ul className='text-end'>
                                    <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>

                                    <li className='py-2'>Compare <IoIosGitCompare className='inline-block' /> </li>
                                    <li className='py-2'>Add to Cart <FaCartPlus className='inline-block' /> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between mt-[15px]">
                            <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Computer headphone </h2>
                            <p className='font-sans text-[16px] font-bold text-[#262626]'>$50.00</p>
                        </div>
                        <div className="mt-[10px]">
                            <h3 className='font-sans text-[16px] font-normal text-[#262626]'>Maroon</h3>
                        </div>
                    </div>

                    <div className="!w-[24%] mt-[30px]">
                        <div className="relative group overflow-hidden">
                            <img src={Sunglass}></img>


                            <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                                <ul className='text-end'>
                                    <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>

                                    <li className='py-2'>Compare <IoIosGitCompare className='inline-block' /> </li>
                                    <li className='py-2'>Add to Cart <FaCartPlus className='inline-block' /> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between mt-[15px]">
                            <h2 className='font-sans text-[16px] font-bold text-[#262626]'>Sunglasses</h2>
                            <p className='font-sans text-[16px] font-bold text-[#262626]'>$5.00</p>
                        </div>
                        <div className="mt-[10px]">
                            <h3 className='font-sans text-[16px] font-normal text-[#262626]'>Black</h3>
                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default SpecialOffers
