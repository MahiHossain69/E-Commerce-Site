import React, { useContext } from 'react'
import Container from "./Container"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ArrivalComponents from './ArrivalComponents'
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className="h-[40px] w-[40px] rounded-full absolute right-0 top-[50%] text-center leading-[35px]  bg-[#979797] translate-y-[-50%] cursor-pointer z-50 text-white"
       
        onClick={onClick}
      ><HiArrowSmallRight className='inline-block' />
</div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return (
      <div
        className="h-[40px] w-[40px] rounded-full absolute left-0 top-[50%] text-center leading-[35px] bg-[#979797] translate-y-[-50%] cursor-pointer z-50 text-white  "
        
        onClick={onClick}
      ><HiArrowSmallLeft className='inline-block' />
</div>
    );
  }


function Newarrivals() {
    let {info,loading} = useContext(ApiData)
    const settings = {
       autoplay: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    }
    return (
        <section>
            <Container>
                <h2 className='font-sans text-[39px] font-bold text-[#262626]'>New Arrivals</h2>
                {loading ? (
                <h2>Loading.....</h2>

                ) : (
                <Slider {...settings}>
                    {info.map((item) => (

                        <Link to="/shop">
                            <ArrivalComponents item={item} />
                        </Link>
                    ))}
                </Slider>
                )}

            </Container>
        </section>
    )
}

export default Newarrivals
