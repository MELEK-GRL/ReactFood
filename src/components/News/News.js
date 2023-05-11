import { useActionData } from 'react-router-dom'
import newsData from '../../data/newsData'
import { useState } from 'react'
import Shake from 'react-reveal/Shake';


export default function News() {
    const[datas,setDatas]=useState(newsData)
   
    return (
        
        <div className='flex gap-4 flex-col w-full items-center justify-center'>
            <h1 className='text-3xl font-semibold text-gray-800 Basında Meal Box'>
                Basında Meal Box
            </h1>
            
                <div className='grid xl:grid-cols-7 lg:grid-cols-5 gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full '>
                <Shake>
                {datas.map((item, index) => (
                    <div key={index} className='flex  p-2 shadow-md '>
                    <img  src={item.img} alt='imgNews' className='w-full h-14 object-contain ' />
                  </div>
                ))}
                </Shake>
                </div>
          

        </div>
        
    )
}
