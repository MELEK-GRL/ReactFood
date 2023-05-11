import React from 'react'
import AccordionItem from '../AccordionBanner/AccordionItem'
import bannerData from '../../data/bannerData'
import { useState } from 'react'
import slide1 from '../../assets/img/slide1.png'

export default function AccordionBanner() {
    const[datas,setDatas]=useState(bannerData)
  return (
    <div className='w-full grid gap-6 grid-cols-1 md:grid-cols-2'>
      <div className='flex w-full'>
      
            <AccordionItem />
      
      </div>
      <div className='flex w-full shadow-md border rounded-md '>
        <img src={slide1} alt='banner' className='w-full rounded-md  h-[339px] object-cover'/>
      </div>
    </div>
  )
}
