import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from 'react-icons/io'


export default function CartItem({ item }) {
  return (
    
    <div className='flex w-full justify-center'>
      <div className="flex flex-col gap-3 w-full md:w-[80%]  lg:w-[85%] items-center first-letter: justify-center">
        <span className='text-gray-800 font-semibold  text-center w-full items-center justify-center text-3xl'>{item.title}</span>
        <div className='flex  w-full '>
          <span className='text-sm text-center w-full text-gray-600 font-semibold '>{item.text}</span>
        </div>
        <div className='flex w-full h-[200px] md:h-[280px] border rounded-md  border-gray-300'>
          <div className='w-full flex relative rounded-md'>
            <div className='absolute  top-0 bg-gradient-to-tr from-black items-center justify-center  md:items-end md:justify-end  h-full w-full text-white rounded-md flex'>
              <div className=' invisible w-0 h-0  md:visible md:w-[50%]  md:h-full  flex justify-between'>
                <div className='md:w-[50%] items-center justify-center flex flex-col gap-2'>
                  <span className='text-lg font-semibold whitespace-nowrap truncate'>{item.display}</span>
                  <span className='text-sm text-center'>{item.text}</span>
                </div>
                <div className='flex gap-2 md:w-[50%] h-full flex-col items-center justify-center'>
                  <button className='btnGreen whitespace-normal w-[100px]   text-sm '>Hemen Ulaş</button>
                  <button className='btn whitespace-normal w-[100px]  text-sm '>{item.buttons}</button>
                </div>
              </div>
              <div className='flex p-6 flex-col h-full justify-between w-full visible md:invisible md:w-0 md:h-0'>
                <span className='text-xl font-semibold w-full text-center whitespace-nowrap truncate'>{item.display}</span>
                <div className='flex w-full justify-between  '>
                  <div className='flex items-center gap-2'>
                    <span className="bg-red-500 rounded-full p-2 flex items-center">
                      <BsFillTelephoneFill size={18} className=" text-white" />
                    </span>
                    <span className="bg-green-500 rounded-full p-2 flex items-center">
                      <IoLogoWhatsapp size={18} className=" text-white " />
                    </span>

                  </div>
                  <button className="btn">{item.buttons}</button>
                </div>
              </div>
            </div>
            <img src={item.image} className='object-cover w-full h-full rounded-md' />
          </div>

        </div>
      </div>
    </div>
    
  )
}
