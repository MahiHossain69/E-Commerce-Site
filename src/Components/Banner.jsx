import React from 'react'
import BanImg from "../assets/banner.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Banner() {
        const settings = {
            dots: true,
            arrows:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => (
              <div
                style={{
                 
                  borderRadius: "10px",
                  padding: "10px",
                  position:"absolute",
                  top:"50%",
                  left:"50px",
                  transform:"translateY(-50%"
                }}
              >
                <ul style={{ margin: "0px" }}> {dots} </ul>
              </div>
            ),
            customPaging: i => (
              <div
                style={{
                  width: "30px",
                  color: "black",
                  borderRight: "3px solid white",
                  padding:"10px 0",
                  color:"transparent",
                }}
              >
                0{i + 1}
              </div>
            )
          };
  return (
<div className="">
<Slider {...settings}>
<div className="">
 <Link to="/shop">
 <img src={BanImg}/>
 </Link>
   </div>
   <div className="">
   <Link to="/shop">
 <img src={BanImg}/>
 </Link>
   </div>
   <div className="">
   <Link to="/shop">
 <img src={BanImg}/>
 </Link>
   </div>
   <div className="">
   <Link to="/shop">
 <img src={BanImg}/>
 </Link>
   </div>
</Slider>
</div>
  )
}

export default Banner
