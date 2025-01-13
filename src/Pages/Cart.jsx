import React from 'react'
import Container from "../Components/Container";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncerment, removeProduct } from '../slice/productSlice';
import { motion } from "framer-motion";
import emptyCart from "../assets/emptycart.png"




function Cart() {

  let cartItem = useSelector((state) => state.product.cartItem);
  let cartInfo = useSelector((state) => state.product.cartItem)
  let dispatch = useDispatch()

  let handleIncrement = (i) => {
    dispatch(productIncerment(i))
  }
  let handledecrement = (i) => {
    dispatch(productDecrement(i))
  }
  let handlePremove = (i) => {
    dispatch(removeProduct(i))

  }
  return (
    <section>
      <section className="py-[55px]">
        <Container>
          <div className="">
            <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
              Cart
            </h3>
            <div className="flex items-center py-4">
              <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
                <Link to="/">Home</Link>
              </h2>
              <IoIosArrowForward />
              <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
                <Link to="/shop">Shop</Link>
              </h2>
              <IoIosArrowForward />
              <h2 className="font-sans font-bold text-[12px] text-[#000000] ">
                <Link to="/myaccount">Cart</Link>
              </h2>
            </div>
          </div>
          <div className="flex items-center bg-[#d3d3cb] py-[32px] pl-3 border">
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Product
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Price
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Quantity
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Total
              </h4>
            </div>
          </div>
          {cartItem.length ? (




            cartInfo.map((item, i) => (

              <div className="my-4">
                <div className="flex items-center py-[32px] pl-3 border-[1px] border-[#d3d3cb]">
                  <div className="w-1/4">
                    <div className="">
                      <div className="flex justify-between items-center">
                        <div className="w-[10%]">
                          <button onClick={() => handlePremove(i)}
                            className=""

                          >
                            <ImCross />
                          </button>
                        </div>
                        <div className="w-[25%]">
                          <img src={item.thumbnail} alt="" className="w-full" />
                        </div>
                        <div className="w-[50%]">
                          <h3 className="font-sans font-bold text-[16px] text-[#262626] ">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                      ${item.price}
                    </h4>
                  </div>
                  <div className="w-1/4">
                    <div className="inline-block border-[1px] border-[#cac8c8]">
                      <button onClick={() => handledecrement(i)}

                        className="px-5 py-1 border-none"
                      >
                        -
                      </button>
                      <span className="px-4">{item.qun}</span>
                      <button onClick={() => handleIncrement(i)} className="px-5 py-1 border-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                      ${(item.price * item.qun).toFixed(2)}
                    </h4>
                  </div>
                </div>
              </div>



            ))
          ) : (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
            >
              <div>
                <img className="w-80 rounded-lg p-4 mx-auto" src={emptyCart} alt="emptyCart"/>
              </div>
              <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                <h1 className="font-titleFont text-xl font-bold uppercase">
                  Your Cart feels lonely.
                </h1>
                <p className="text-sm text-center px-10 -mt-2">
                  Your Shopping cart lives to serve. Give it purpose - fill it with
                  books, electronics, videos, etc. and make it happy.
                </p>
                <Link to="/shop">
                  <button className="mt-[20px] w-52 h-10 bg-[#393737] rounded-lg text-white hover:bg-black duration-300">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </motion.div>
          )}







        </Container>
      </section>
    </section>
  )
}

export default Cart
