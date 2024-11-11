import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { Rate } from "antd";



function ProductDetails() {
    let [show, setShow] = useState(false)
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

    let clientRating = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5
        return singleProduct.rating > index + 1 ? <IoIosStar className='text-[#ff791a]' /> : singleProduct.rating > number ? <IoIosStarHalf /> : <IoIosStarOutline />
    })



    let discount = singleProduct.price * singleProduct.discountPercentage / 100
    let newPrice = singleProduct.price - discount
    return (
        <div>
            <Container>
                <h2 className='text-[#262626] font-normal text-[18px] font-sans pt-8'><Link to="/">Home</Link>  &#62; <Link to="/shop">Products</Link> </h2>

                <Flex className="justify-between pt-8 flex-wrap">
                    {singleProduct?.images?.map((item) => (

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

                <div className="flex gap-x-3 items-center py-2">
                    <del >${singleProduct.price}</del>
                    <p className='font-bold text-[20px]'>${newPrice.toFixed(2)}</p>
                </div>
                <h3 className='font-bold text-[15px]'>STATUS:  {singleProduct.stock}</h3>
                <div className="flex flex-wrap md:flex-nowrap my-5">
                    <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                        Add to Wish List
                    </button>
                    <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                        Add to Cart
                    </button>
                </div>
                <div className="w-[50%] py-10" onClick={() => setShow(!show)}>
                    <div className="flex justify-between items-center font-bold">
                        <h3>FEATURES & DETAILS</h3>
                        {show ? <span>-</span> : <span>+</span>}
                    </div>
                    {show && (
                        <p>{singleProduct.description}

                        </p>
                    )}
                </div>
                <div className="w-[50%] py-10" onClick={() => setShow(!show)}>
                    <div className="flex justify-between items-center font-bold">
                        <h3>SHIPPING & RETURNS</h3>
                        {show ? <span>-</span> : <span>+</span>}
                    </div>
                    {show && (
                        <p>{singleProduct.shippingInformation}

                        </p>
                    )}
                </div>

                {singleProduct &&
                <Rate disabled value={singleProduct.rating}/>
                }
            </Container>

        </div>
    )
}

export default ProductDetails
