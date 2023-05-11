import React from 'react'
import SliderItem from '../components/Sliders/SliderItem'
import News from '../components/News/News'
import Cart from '../components/Cart/Cart'
import Tab from '../components/Tab/Tab'
import AccordionBanner from '../components/AccordionBanner/AccordionBanner'
export default function HomeSection() {
  return (
    <div className='w-full flex  flex-col gap-6'>
      <SliderItem/>
      <News/>
      <Cart/>
      <Tab/>
      <AccordionBanner/>
    </div>
  )
}
