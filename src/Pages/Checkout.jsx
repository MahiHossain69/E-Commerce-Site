import React from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

function Cheakout() {
  let cartInfo = useSelector((state) => state.product.cartItem)
  let { totalPrice, totalQuantity } = cartInfo.reduce((acc, item) => {
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun

    return acc
  }, { totalPrice: 0, totalQuantity: 0 })

 let onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
  return (
    <div>
      <Container>
        <div className="w-full">
          <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Checkout</h2>
          <ul className='flex items-center text-[12px] font-DMs font-normal text-[#767676] cursor-pointer'>
            <Link to="/" className='hover:font-bold font-sans font-normal text-[12px] text-[#000000]'>Home</Link>
            <li><IoIosArrowForward /></li>
            <Link to="/shop" className='font-bold font-sans  text-[12px] text-[#000000]'>Shop</Link>
          </ul>
        </div>
        <div className="w-full pt-10">
          <div className="flex ">
            <h4 className='text-[16px] text-[#767676] font-DMs font-normal '>Have a coupon? </h4>
            <h5 className='text-[16px] text-[#262626] font-DMs font-normal'>Click here to enter your code</h5>
          </div>
        </div>

        <div className="">
          <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Billing Details</h2>
        </div>
        <div className="flex gap-10">
          <div className="w-[30%] pt-10">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>First Name *</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='First Name' />
          </div>
          <div className="w-[30%] pt-10">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Last Name*</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='Last Name ' />
          </div>

        </div>
        <div className="w-[63%] pt-8">
          <div className="">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Companye Name (optional)</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='Companye Name ' />
          </div>
        </div>
        <div className="w-[63%] pt-8">
          <h4 className='text-[18px] font-DMs font-bold text-[#262626]'>Country</h4>
          <select className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676]  '>
            <option value="" disabled className="text-gray-400">Please select</option>
            <option value="USA">Please select</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div className="w-[63%] pt-8">
          <div className="">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Street Address *</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='House number and street name ' />
            <input className='mt-[20px] border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='Apartment, suite, unit etc. (optional)' />
          </div>
        </div>
        <div className="w-[63%] pt-8">
          <div className="">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Town/City *</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='Town/City  ' />
          </div>
        </div>
        <div className="w-[63%] pt-8">
          <div className="">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>County (optional)</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='County  ' />
          </div>
        </div>
        <div className="w-[63%] pt-8">
          <div className="">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Post Code *</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='Post Code  ' />
          </div>
        </div>
        <div className="w-[63%] pt-8">
          <div className="">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Phone *</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='Phone ' />
          </div>
        </div>
        <div className="w-[63%] pt-8">
          <div className="">
            <h4 className='text-[16px] font-DMs font-bold text-[#262626] '>Email Address *</h4>
            <input className='border-transparent w-full border-b border-b-[#000000] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0] font-sans font-normal text-[14px] text-[#767676] ' type="text" placeholder='Email Address ' />
          </div>
        </div>

        <div className="pt-10">
          <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Additional Information</h2>
          <p className='text-[16px] text-[#262626] font-DMs font-normal'>Other Notes (optional)</p>
          <p className='text-[14px] text-[#767676] font-DMs font-normal'>Notes about your order, e.g. special notes for delivery.</p>
        </div>

        <div className="">
          <h2 className='text-[39px] font-DMs font-bold text-[#262626] pt-10'>Your Order</h2>


          <div class="relative overflow-x-auto sm:rounded-lg pt-5 ">
            <table class="w-[30%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-l border-b border-r border-t ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 font-bold text-[18px]">
                    Product
                  </th>

                  <th scope="col" className="px-6 py-3 text-[18px]">
                    Total
                  </th>

                </tr>
              </thead>
              <tbody>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Quantity
                  </th>
                  <td class="px-6 py-4">
                    {totalQuantity}
                  </td>

                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Total
                  </th>
                  <td class="px-6 py-4">
                    $ {totalPrice.toFixed(2)}
                  </td>

                </tr>
              </tbody>
            </table>
           
            <StripeCheckout
        token={onToken}
        stripeKey="my_PUBLISHABLE_stripekey"
        className='mt-[20px]  w-[200px]  '
      />
          </div>

        </div>
      

       
       
      </Container>
    </div>
  )
}

export default Cheakout
