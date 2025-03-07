

import { IoIosHeart } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";






function ArrivalComponents({item}) {
 
    return (
        <div className="!w-[95%] mx-2">
            <div className="">
                <div className="">
                    <div className="relative group overflow-hidden">
                        <img className="w-full" src={item.thumbnail} />
                        <div className="bg-[#F5F5F5] absolute left-0 bottom-[-200px] w-full h-[135px] duration-300 ease-in-out group-hover:bottom-[0px] py-2 pr-4">
                        <ul className='text-end'>
                            <li className='py-2'>Add to Wish List <IoIosHeart className='inline-block' /> </li>
                           
                            <li className='py-2'>Compare <IoIosGitCompare  className='inline-block'/> </li>
                            <li className='py-2'>Add to Cart <FaCartPlus  className='inline-block' /> </li>
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
            </div>
        </div>
    )
}

export default ArrivalComponents
