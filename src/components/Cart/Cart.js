import CartItem from "./CartItem"
import { useState } from "react"
import cartData from '../../data/cartData'
import Zoom from 'react-reveal/Zoom';

export default function Cart() {
    const[carts,setCarts]=useState(cartData)
  return (
    <div className='grid grid-rows-4 w-full gap-4'>
      <Zoom left>
     {carts.map((item,i)=>(
         <CartItem key={i} item={item}/>
     ))}
     </Zoom>
    </div>
  )
}
