import React from 'react'
import { Link} from 'react-router-dom';
import Footer from '../Components/Footer';
import { Breadcrumb } from 'antd';
import Container from '../Components/Container';

function Journal() {
  return (
    <div className="">
    <Container>
    <div className="">
          <h2 className="font-sans text-[49px] font-bold text-[#262626] ">
          Journal
          </h2>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item >
              <Link to="/" className='hover:font-bold font-sans font-normal text-[12px] text-[#000000]'> Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className='font-bold font-sans  text-[12px] text-[#000000]'> Journal</Breadcrumb.Item>
          </Breadcrumb>
        </div>
    
      <div className="mt-[50px]">
        <h1 className="max-w-[600px] text-[25px] text-base text-lightText mb-2">
          <span className="font-sans font-semibold text-lg">Orebi</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <Link to="/shop">
          <button className="mt-[20px] w-52 h-10 bg-[#393737] text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
      <Footer/>
      </Container>
    </div>
  )
}

export default Journal
