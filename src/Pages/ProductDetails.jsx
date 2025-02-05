import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from '../Components/Container'
import Flex from '../Components/Flex'

import { Rate } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../slice/productSlice'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { IoIosArrowForward } from 'react-icons/io'




function ProductDetails() {
    let [show, setShow] = useState(false)
    let dispatch = useDispatch()
    let productId = useParams()
    let navigate = useNavigate()
    let [singleProduct, setSingleProduct] = useState([])

    let [ship, setShip] = useState(true);
    let getSingleProduct = () => {
        axios.get(`https://dummyjson.com/product/${productId.id}`).then((response) => {
            setSingleProduct(response.data)
        })
    }
    useEffect(() => {
        getSingleProduct()
    }, [productId])

    let clientRating = Array.from({ length: 5 }, (_, index) => {
      let number = index + 0.5;
      return singleProduct.rating > index + 1 ? (
        <FaStar className="text-[#FFD881]" />
      ) : singleProduct.rating > number ? (
        <FaRegStarHalfStroke className="text-[#FFD881]" />
      ) : (
        <FaRegStar className="text-[#FFD881]" />
      );
    });



    let discount = singleProduct.price * singleProduct.discountPercentage / 100
    let newPrice = singleProduct.price - discount

    let handleCart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))
        toast("Wellcome To Cart Page!");
        setTimeout(() => {
            navigate("/cart")
        }, 2000)


    }


   


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!name || !email || !review) {
        alert('Please fill out all fields');
        return;
      }
  
  
      const newReview = {
        reviewerName: name,
        email: email,
        comment: review,
        rating: 5, 
        date: new Date().toISOString(), 
      };
  
    
      console.log(newReview); 
  
     
      setName('');
      setEmail('');
      setReview('');
    };
  
  
    return (
        <div>
            <Container>
                  <div className="flex items-center py-4">
                            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
                              <Link to="/" className='hover:font-bold text-black'>Home</Link>
                            </h2>
                            <IoIosArrowForward />
                            <h2 className="font-sans font-bold text-[12px] text-[#000000] ">
                              Product
                            </h2>
                          </div>

                <Flex className="justify-between pt-8 flex-wrap">
                    {singleProduct?.images?.map((item) => (

                        <div className="w-[48%]">
                            <img className='w-full' src={item}></img>

                        </div>
                    ))}




                </Flex>
                <h3 className='font-bold font-sans  text-[12px] text-[#000000]'>Product</h3>
                <div className="">
                    <div className="flex gap-x-2 font-bold items-center">
                        {clientRating} |
                        
                   <div className=" font-bold">
                   <span>
                {singleProduct.reviews ? singleProduct.reviews.length : 0}{" "}
                 Reviews
              </span>
          </div>
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
                    <button onClick={() => handleCart(singleProduct)} className="flex items-center  gap-[10px] px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                  
                    <IoCartSharp /> Add to Cart
                    </button>
                </div>
                <div className="w-[50%] py-10" onClick={() => setShow(!show)}>
                    <div className="flex justify-between items-center font-bold cursor-pointer">
                        <h3>FEATURES & DETAILS</h3>
                        {show ? <span>-</span> : <span>+</span>}
                    </div>
                    {show && (
                        <p>{singleProduct.description}

                        </p>
                    )}
                </div>
                <div className="w-[50%] py-10" onClick={() => setShip(!ship)}>
                    <div className="flex justify-between items-center font-bold cursor-pointer">
                        <h3>SHIPPING & RETURNS</h3>
                        {ship ? <span>-</span> : <span>+</span>}
                    </div>
                    {ship && (
                        <div className="">
                            <p className="font-sans font-normal text-[16px] text-[#767676] py-1">
                                Shipping Time : {singleProduct.shippingInformation}
                            </p>
                            <p className="font-sans font-normal text-[16px] text-[#767676] py-1">
                                Return Policy : {singleProduct.returnPolicy}
                            </p>
                        </div>
                    )}

                </div>


                {singleProduct &&
                    <Rate disabled value={singleProduct.rating} />
                }


                <div className="pt-[100px]">
                    <div className="w-1/5 flex justify-between items-center">
                        <h4 className="font-bold text-lg">Description</h4>
                        <h4 className="font-bold text-lg">
                            Reviews (
                            {singleProduct.reviews ? singleProduct.reviews.length : 0})
                        </h4>
                    </div>
                </div>



               



                <div className="space-y-4 mt-4">
      {singleProduct.reviews &&
        singleProduct.reviews.map((review, index) => (
          <div
            key={review.id || index}
            className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-md hover:bg-gray-100 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-lg">{review.reviewerName}</h4>
              <div className="flex">
                {/* Display rating stars */}
                {Array.from({ length: 5 }, (_, idx) => {
                  const isFilled = idx < review.rating;
                  return isFilled ? (
                    <FaStar className="text-[#FFD881] mr-1" key={`filled-${idx}`} />
                  ) : (
                    <FaRegStar className="mr-1 text-[#FFD881]" key={`empty-${idx}`} />
                  );
                })}
              </div>
            </div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
            <p className="text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}

      {/* Add a Review Form */}
      <div className="w-full md:w-1/2 mt-8">
        <button className="mt-[20px] mb-[70px] px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">Add a Review</button>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className="font-sans font-bold text-[16px] text-[#262626]"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name here"
              className="  border-transparent border-b border-b-[#080808] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676]"
            />
          </div>

          <div className="flex flex-col py-[23px] mb-4">
            <label
              htmlFor="email"
              className="font-sans font-bold text-[16px] text-[#262626]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email here"
              className="border-transparent border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676]"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="review"
              className="font-sans font-bold text-[16px] text-[#262626]"
            >
              Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="border-transparent border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] resize-none"
              rows="4"
              placeholder="Write your comment here..."
            />
          </div>

          <div className="pt-[30px]">
            <button
              type="submit"
              className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  






                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                />
            </Container>

        </div>
    )
}

export default ProductDetails
