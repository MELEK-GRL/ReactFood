import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Zoom from 'react-reveal/Zoom';
import dropdownData from '../../data/dropdownData'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DrapdownItem() {
    return (
      <div className='flex w-full gap-4'>
        {dropdownData.map((item,i)=>(
              <Menu key={i} as="div" className="relative inline-block text-left">
              <div>
  
                  <Menu.Button className={`dropdownMenus ${item.styles}`}>
                      <div className='flex gap-1 items-center'>
                      <Zoom left>
                          <span className='colorIcon hoverBar uppercase whitespace-nowrap'>{item.title}</span>
                          </Zoom>
                          <MdOutlineKeyboardArrowDown className="-mr-1  h-5 w-5 text-gray-500" aria-hidden="true" />
                      </div>
                  </Menu.Button>
              </div>
  
              <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
              >
                  <Menu.Items className={`dropdowns ${item.classCase}`}>
                      <div className="p-3 flex w-full gap-2 h-full ">
                          <div className='md:w-[35%] w-full flex-col flex justify-center gap-3 h-full'>
                              <h1 className='text-red-600 font-semibold text-lg'>{item.display}</h1>
                              <div className='flex gap-1 flex-col'>
                                  <span className='truncate font-semibold'>{item.text}</span>
                                  <span className='text-sm'>
                                    {item.taxtCase}
                                  </span>
                                 
                              </div>
                              <button className='btn w-fit'>{item.buttons}</button>
                          </div>
                          <div className='flex md:w-[65%]  w-full   gap-2 h-full rounded-md'>
                             <div className='flex w-full justify-end items-end h-full rounded-md relative flex-col'>
                             <img src={item.img} alt='img1' className='rounded-md h-[220px]  w-full object-cover'/>
                             <span className='h-[30%] bottom-0 text-white  w-full flex absolute items-center bg-gradient-to-r from-black px-2 to-gray-700 text-sm opacity-70 truncate'>{item.imgTextOne}</span>
                             </div>
                            
  
                          </div>
  
                      </div>
                  </Menu.Items>
              </Transition>
          </Menu>
        ))}
      </div>
    )
}
