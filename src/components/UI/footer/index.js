import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import logo from '../../../assets/img/mealboxlogo.png'

export default function Footer() {
  return (
    <div className='flex w-full backgroundThme'>
      <div className='flex containerBox py-5  w-full '>
        <div className='grid grid-cols-1 w-full  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
          <div className='gap-3 flex-col flex shadow-md p-2'>
            <div className='w-full flex flex-col gap-[2px]'>
              <span className='text-gray-600 font-semibold text-md truncate whitespace-nowrap '>Bizimle İletişime Geçin</span>
              <span className='border-b-2 border-red-500 w-[10%]'></span>
            </div>
            <div className='flex flex-col gap-2 text-sm text-gray-500'>
              <span>İletişim</span>
              <span>İnsan Kaynakları</span>
            </div>
          </div>
          <div className='gap-3 flex-col flex shadow-md p-2'>
            <div className='w-full flex flex-col gap-[2px]'>
              <span className='text-gray-600 font-semibold text-md truncate whitespace-nowrap '>Hizmetlerimiz</span>
              <span className='border-b-2 border-red-500 w-[10%]'></span>
            </div>
            <div className='flex flex-col gap-2 text-sm text-gray-500'>
              <span>Kurumsal Yemek Aboneliği</span>
              <span>Ofise Sıcak Yemek Aboneliği</span>
              <span>Etkinlik / Organizasyon</span>
              <span>Evde Yemek Paketi</span>
            </div>
          </div>
          <div className='gap-3 flex-col flex shadow-md p-2'>
            <div className='w-full flex flex-col gap-[2px]'>
              <span className='text-gray-600 font-semibold text-md truncate whitespace-nowrap '>Hakkımızda</span>
              <span className='border-b-2 border-red-500 w-[10%]'></span>
            </div>
            <div className='flex flex-col gap-2 text-sm text-gray-500'>
              <span>Hakkımızda</span>
              <span>Basında</span>
              <span>Yorumlar</span>
              <span>Deneyim</span>
              <span>S.S.S</span>
              <span>KVKK Bildirimi</span>
              <span>Sertifikalar</span>
            </div>
          </div>
          <div className='gap-3 flex-col flex shadow-md p-2'>
            <div className='w-full flex flex-col gap-[2px]'>
            <div className="md:shrink-0 ">
              <img className="h-10  object-contain md:h-full  w-28 " src={logo} alt="Modern building architecture" />
            </div>
  
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <div className='flex gap-2 text-sm items-center  text-gray-500'>
                <FaFacebookSquare size={15} className='text-red-500' />
                <span className='truncate whitespace-nowrap'>Facebook</span>
              </div>
              <div className='flex gap-2 text-sm items-center justify-center text-gray-500'>
                <AiFillTwitterSquare size={15} className='text-red-500' />
                <span className='truncate whitespace-nowrap'>Twitter</span>
              </div>
              <div className='flex gap-2 text-sm items-center justify-center text-gray-500'>
                <FaInstagramSquare size={15} className='text-red-500' />
                <span className='truncate whitespace-nowrap'>Instagram</span>
              </div>
              <div className='flex gap-2 text-sm items-center justify-center text-gray-500'>
                <AiFillLinkedin size={15} className='text-red-500' />
                <span className='truncate whitespace-nowrap'>Linkedin</span>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
