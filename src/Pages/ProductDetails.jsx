import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Juri from "../assets/juri.png"
import Sun from "../assets/sunglass.png"
import Hphn from "../assets/headphone.png"
import Tab from "../assets/table.png"
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";



function ProductDetails() {
    let [show,setShow] = useState(false)
    let productId = useParams()
    let [singleProduct, setSingleProduct] = useState([])
    let getSingleProduct = () => {
        axios.get(`https://dummyjson.com/product/${productId.id}`).then((response) => {
            setSingleProduct(response.data)
        })
    }
    useEffect(() => {
        getSingleProduct()
    }, [])

    let clientRating = Array.from({length:5}, (_, index)=>{
        let number = index + 0.5
        return singleProduct.rating > index + 1 ?  <IoIosStar className='text-[#ff791a]' /> : singleProduct.rating > number ? <IoIosStarHalf /> : <IoIosStarOutline />
    })
    return (
        <div>
            <Container>
                <h2 className='text-[#262626] font-normal text-[18px] font-sans pt-8'><Link to="/">Home</Link>  &#62; <Link to="/shop">Products</Link> </h2>

                <Flex className="justify-between pt-8 flex-wrap">
               {singleProduct?.images?.map((item)=>(

                    <div className="w-[48%]">
                        <img className='w-full' src={item}></img>

                    </div>
               ))}

               
                    
                
                </Flex>
                <h3 className='text-[#262626] font-bold text-[18px] font-sans pt-8'>Product</h3>
                <div className="">
                    <div className="flex gap-x-2 items-center">
                        {clientRating}
                        {/* <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                        <IoIosStarOutline /> */}
                        <span>| 1 Review </span>
                    </div>



                </div>

                <div className="">
                    <del>${singleProduct.discountPercentage}</del>
                  <span>${singleProduct.price}</span>
                </div>
                <h3>STATUS:</h3>
                <div className="flex flex-wrap md:flex-nowrap my-5">
                    <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                    Add to Wish List
                    </button>
                    <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                    Add to Cart
                    </button>
                </div>
                <div className="w-[23%] py-10" onClick={()=> setShow(!show)}>
                    <div className="flex justify-between items-center font-bold">
                    <h3>FEATURES & DETAILS</h3>
                   {show ? <span>-</span> : <span>+</span>}
                    </div>
                    {show && (
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>
)}
                </div>
            </Container>

        </div>
    )
}

export default ProductDetails
