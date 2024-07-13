import React from 'react'
import Buttons from '../../../../public/components/Buttons'
import img1 from '../../../assets/Vector.png'
import { Link, Outlet } from 'react-router-dom';
import { CartContext } from '../../../../public/context/CartProvider';
import { useContext } from 'react';
const Delivery = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, totalgetCartTotal } = useContext(CartContext)
  return (
    <div className=''>
        <div>
            <p className='text-[20px]'>
                Delivery Mode
            </p>
        </div>
        <div className='mt-[15px] mb-[16px]'>
        <div className=' flex space-x-[9px]'>
            <div className='h-[11px] w-[11px]  rounded-full bg-black opacity-50'>
             </div>
            <p className='text-[11px] -mt-1'>Store pickup     FREE</p>
        </div>
        </div> 
        <div>
        <div className='flex space-x-[9px]'>
            <div className='flex justify-center items-center h-[11px] w-[11px] rounded-full bg-red-600 '>
                <img src={img1}/>
             </div>
            <p className='font-semibold text-[11px] -mt-1'>Home delivery ( 2 -4 days)       450</p>
        </div>
        </div>
        
       
        <div className='mb-[22px] font-semibold mt-[46px] text-[11px] max-w-[264px] max-h-[34px] ml-[19px] sm:ml-[0px]'>
            <div className='mb-[22px] flex justify-between'>
            <p> SUBTOTAL </p>
            <p>  ${getCartTotal()}  </p>
            </div>
            <div className='mb-[22px] flex justify-between'>
            <p> SHIPPING </p>
            <p>  $450</p>
            </div>
            <div className='mb-[22px] flex justify-between'>
            <p> TOTAL  </p>
            <p>    ${totalgetCartTotal()} </p>
            </div>
            <Link to="/checkout">
            <Buttons label='Checkout' ButtonClassName='text-[15px] text-white' className='font-semibold text-center mb-[136px] bg-[#06630F] max-w-[264px] max-h-[34px] py-[8px] px-[96px] rounded-lg'/>
            </Link>
        </div>
    </div>
  )
}

export default Delivery