import bannerData from '../../data/bannerData'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useState } from 'react'

export default function AccordionItem() {
    const [accordion, setAccordion] = useState(-1)

    function toggleAccordion(i) {
       if(i===accordion){
        setAccordion(-1)
        return;
       }
       setAccordion(i)
    }
    return (

        <div className='flex  w-full flex-col gap-2 '>
            {bannerData.map((item, i) => (
                <div key={i}  className='flex w-full  flex-col'>
                    <div onClick={() => toggleAccordion(i)} className='justify-between cursor-pointer flex  w-full hover:bg-gray-100'>
                        <div className={`flex w-full justify-between p-2 border-b ${accordion === i ? "active" : ""}`}>
                            <span className='text-md truncate whitespace-nowrap overflow-auto font-semibold text-gray-500'>{item.title}</span>
                            <div className='flex items-center'>
                        {accordion===i?(
                            <>
                            <span className='bg-slate-50  flex items-center justify-center w-6 h-6 shadow-lg shadow-slate-200 text-gray-600 rounded-full'><MdOutlineKeyboardArrowDown size={25}/></span>
                            </>
                        ):(
                            <>
                             <span className='bg-slate-50  flex items-center justify-center w-6 h-6 shadow-lg shadow-slate-200 text-gray-600 rounded-full'><MdOutlineKeyboardArrowRight size={25}/></span>
                            </>
                        )
                    }
                       </div>
                        </div>
                      
                    </div>
                    <div className='flex  w-full  invisible'>
                       <span className={` whitespace-normal text-gray-500 truncate overflow-auto text-sm ${accordion===i?"active":"inactive"}`}>{item.answer}</span>
                    </div>
                </div>
            ))}
        </div>

    )
}
