import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-router-dom'

import slideData from "../../data/sideData";

function NextBtn(props) {
  const { className, style, onClick } = props;
  return (
    <div className="flex relative">
    <button
      className="bg-gray-400 shadow-lg left-[0px] text-white w-[24px] h-[24px] bottom-[15em] absolute border-none rounded-full p-8"
      style={style}
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowLeft className="  w-[2em] h-[1.8em] top-[-13px] right-[17px] relative" />
    </button>
    </div>
  );
}

function PrevtBtn(props) {
  const { className, style, onClick } = props;
  return (
   <div className="flex relative">
     <button
      className="bg-gray-400 shadow-lg w-[24px] h-[24px] text-white absolute z-10 top-[18.7em] right-[0px] border-none rounded-full p-8"
      style={style}
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowRight className=" w-[2em] h-[1.8em] -top-[12px] right-[13px] relative" />
    </button>
   </div>
  );
}
export default function SliderItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevtBtn />,
    autoplay: true,
    speed: 12000,
    
    

    responsive: [
      {
        breakpoint: 1500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 3.5,
            arrows:false
        }
    },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 3.5,
                arrows:false
            }
        },
        
    ]
  };
  return (
    <div className="w-full md:flex md:flex-row flex flex-col gap-8">
   
      <div className="w-full  flex">
        <div className="w-full">
          <Slider {...settings} >
            {slideData.map((item,i)=>(
             <Link to='#' key={i}>
              <div key={i} className="flex border-none">
             <img
               alt='imgSide'
               src={item.img}
               className=" w-[100%] h-[300px] lg:h-[600px] object-cover border-none"
             />
           </div></Link>
            ))}
          
           
           
          </Slider>
        </div>
      </div>
    </div>
  );
}