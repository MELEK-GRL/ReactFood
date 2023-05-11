import React, { useState } from 'react'
import tabOneData from '../../data/tabOneData'
import tabTwoData from '../../data/tabTwoData'
import tabThreData from '../../data/tabThreData'
import Zoom from 'react-reveal/Zoom';
export default function Tab() {
    const [toggles, setToggles] = useState(1)
    const toggleTab = (index) => {
        setToggles(index)
    }
    return (
        <div className='flex w-full items-center justify-center   gap-3'>
            <div className='flex flex-col gap-3  scrollBar md:w-[80%]  lg:w-[85%]  w-full'>
                <div className='flex px-2  justify-center  w-full gap-6  p-2  items-center overflow-x-auto  scrollBar'>
                    <button onClick={() => toggleTab(1)} className={toggles === 1 ? 'boxActiveBorder' : 'boxBorderNone'}>Kurumsal Yemek Servisi</button>
                    <button onClick={() => toggleTab(2)} className={toggles === 2 ? 'boxActiveBorder' : 'boxBorderNone'}>Diyet (Fit) ve Protein Beslenme Paketleri</button>
                    <button onClick={() => toggleTab(3)} className={toggles === 3 ? 'boxActiveBorder' : 'boxBorderNone'}>Evde Yemek Paketi</button>

                </div>
                <div className='w-full flex   relative'>
                    <div className={`boxActive  relative top-0 scrollBar  overflow-auto ${toggles === 1 ? 'tabItem' : 'tabItemNone'}`}>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-6 w-full'>
                          
                        <Zoom left>
                            {
                                tabOneData.map((item, i) => (
                                    <div key={i} className='w-full gap-2  flex flex-col items-center h-[270px]'>
                                        <img src={item.img} className='object-cover w-34 h-28' />
                                        <span className='font-semibold text-lg w-fit text-gray-600 py-1 border-b border-red-500'>{item.title}</span>
                                        <span className='text-sm text-center truncate whitespace-normal overflow-auto text-gray-600'>
                                            {item.text}
                                        </span>
                                    </div>
                                ))
                            }
                            </Zoom>
                        </div>
                    </div>
                    <div className={`boxActive relative  scrollBar  overflow-auto ${toggles === 2 ? 'tabItem ' : 'tabItemNone'}`}>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-6 w-full'>
                        <Zoom left>
                            {
                                tabTwoData.map((item, i) => (
                                    <div key={i} className='w-full gap-2  flex flex-col items-center h-[270px]'>
                                        <img src={item.img} className='object-cover w-34 h-28' />
                                        <span className='font-semibold text-lg w-fit text-gray-600 py-1 border-b border-red-500'>{item.title}</span>
                                        <span className='text-sm text-center truncate whitespace-normal overflow-auto text-gray-600'>
                                            {item.text}
                                        </span>
                                    </div>
                                ))
                            }
                            </Zoom>
                        </div>

                    </div>
                    <div className={`boxActive overflow-hidden relative ${toggles === 3 ? 'tabItem ' : 'tabItemNone'}`}>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-6 '>
                        <Zoom left>
                            {
                                tabThreData.map((item, i) => (
                                    <div key={i} className='w-full gap-2  flex flex-col items-center h-[270px]'>
                                        <img src={item.img} className='object-cover w-34 h-28' />
                                        <span className='font-semibold text-lg w-fit text-gray-600 py-1 border-b border-red-500'>{item.title}</span>
                                        <span className='text-sm text-center truncate whitespace-normal overflow-auto text-gray-600'>
                                            {item.text}
                                        </span>
                                    </div>
                                ))
                            }
                            </Zoom>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}