import { BsFillTelephoneFill } from "react-icons/bs";
import logo from '../../../assets/img/mealboxlogo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { BsFillBasketFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DrapdownItem from "../../Dropdown/DrapdownItem";
import Accordion from "../../Accordion/Accordion";

import Zoom from 'react-reveal/Zoom';



export default function Header() {


  const menuRef = useRef();
  
  const headerRef = useRef();


  const menuToggle = () => menuRef.current.classList.toggle("menuBoxNone");

const [back,setBack]=useState(false)

useEffect(() => {
window.addEventListener("scroll",()=>{
  if(window.scrollY>100){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('headerChange')
           
          }
          else {
            headerRef.current.classList.remove('headerChange')
          }
    setBack(true)
  }else{
    setBack(false)
  }
})
}, [])

const scrollUp=()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

  return (
    <div ref={headerRef}  className="flex border-b-2  w-full  z-30 fixed bg-white ">
      <div className="boxCenter flex-col-reverse lg:flex-col justify-between  w-full  ">
        <div className='flex w-full backgroundWhite lg:backgroundThme  h-[60px]  containerBox'>
          <div className='flex w-full  item-center h-full justify-between'>
            <div className='md:gap-3 gap-2 flex items-center'>
              <BsFillTelephoneFill className="w-[25px] h-[25px] text-red-600" />
              <Link to='/'><p className='font-bold colors text-xl invisible md:visible md:w-fit w-0'>0850 532 60 62</p></Link>
              <IoLogoWhatsapp className="w-[30px] h-[30px] text-green-500" />
            </div>
            <div className='flex gap-4 items-center'>
              <FaUserAlt className="w-[25px] h-[25px] text-red-600" />
              <div className="flex flex-col gap-1 items-center  relative">
                <span className="bg-red-600 p-1 h-5  w-5 text-[13px] flex items-center justify-center text-white absolute -top-3 rounded-full">0</span>
                <BsFillBasketFill className="w-[25px] h-[25px] colors" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:backgroundWhite backgroundThme  flex">
          <div className=" w-full boxCenter containerBox justify-between ">
          <Zoom left>
            <div className="md:shrink-0 ">
              <img className="h-10  object-contain md:h-full md:w-48 w-32 " src={logo} alt="Modern building architecture" />
            </div>
            </Zoom>
            <div className="flex invisible lg:visible w-0 md:w-fit  items-center justify-center">
              <div className="flex p-2 boxCenter  gap-6 h-full">
                <div className="flex items-center h-ful">
                  <DrapdownItem />
                </div>

              </div>
            </div>
            <div className="flex gap-3 visible lg:invisible lg:w-0  hoverBar" onClick={menuToggle}>
              <AiOutlineMenu

                size={20}
                className="w-[25px] h-[25px] colors "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex menuBox   w-full fixed" ref={menuRef}>
        <div className="w-[60%] backgroundThme p-3 gap-8 flex-col  md:w-[35%] lg:w-[20%] flex h-full  bg-white ">
          <span onClick={menuToggle} className="flex mt-2 w-full items-end justify-end  "><RxCross2 size={25} className="cursor-pointer  p-2 shadow-md w-9 h-9 rounded-full shadow-slate-300 hoverMenuCross" /></span>
          <div className="flex w-full  items-center justify-center">
            <div className="flex flex-col   p-2 w-full gap-12">
              <Accordion />
              <div className="grid grid-cols-2 gap-6">
                <Link to='/hakkimizda' className="linkMenu">Hakkımızda</Link>
                <Link to='/iletisim' className="linkMenu">İletişim</Link>
              </div>

            </div>
          </div>
        </div>
        <div
          className="w-[40%] p-3  md:w-[65%] lg:w-[80%] flex h-full   bg-black bg-opacity-25 "
          onClick={menuToggle}
        ></div>

      </div>
      <div className="flex w-full z-10  py-2 bottom-0 fixed">
        <div className="containerBox justify-between  flex w-full  ">

        {back&&(
            <button onClick={scrollUp} > <FaArrowAltCircleUp className="w-[40px] h-[40px] text-gray-400 bg-white rounded-full" /></button>
        )}
          <IoLogoWhatsapp className="w-[40px] cursor-pointer bg-white rounded-full h-[40px] text-green-500" />
        </div>
      </div>


    </div>
  );
}