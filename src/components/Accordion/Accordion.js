import accordionData from '../../data/accordionData'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useState } from 'react'

export default function Accordion() {
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
            {accordionData.map((item, i) => (
                <div key={i}  className='flex w-full  flex-col'>
                    <div onClick={() => toggleAccordion(i)} className='justify-between cursor-pointer flex  w-full hover:bg-gray-100'>
                        <div className={`flex w-full justify-between p-2 border-b ${accordion === i ? "active" : ""}`}>
                            <h1 className='text-lg truncate whitespace-nowrap overflow-auto font-semibold text-gray-600'>{item.title}</h1>
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
                       <span className={` whitespace-normal truncate overflow-auto ${accordion===i?"active":"inactive"}`}>{item.answer}</span>
                    </div>
                </div>
            ))}
        </div>

    )
}
