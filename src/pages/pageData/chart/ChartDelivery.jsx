
import img1 from '../chart/chartPictures/material-symbols_check.png'
import Buttons from '../../../../public/components/Buttons'
import { Link } from 'react-scroll';
import { useContext } from 'react'
import { CartContext } from '../../../../public/context/CartProvider';
const ChartDelivery = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, totalgetCartTotal } = useContext(CartContext)
  return (
    <> 
      <div className='max-w-[873px] max-h[312px] mt-[115pxpx] rounded-lg'>
        <div className='ml-[35px] mb-[26px] mt-[31px]'>
        <span className='text-[20px] lg:text-[32px] font-semibold lg:mt-[31px]'>
        <p >Delivery mode:</p></span>    
        </div>
         <ul className='flex ml-[35px] '>
            <li>
                <div className='flex text-[12px]  items-center space-x-[5px] mb-[35px]'>
                <div className=" w-[11px] h-[11px] lg:w-[29px] lg:h-[29px] bg-black opacity-20 rounded-full">

                </div>
                <div>
                Store pickup     FREE
                </div>
                </div>
                <div className='flex text-[12px] justify-center items-center space-x-[5px]'>
                <div className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px] items-center bg-red-500  rounded-full">
                    <img src={img1} className='ml-[1.5px] mt-[1.5px]'/>
                </div>
                <div>
                Home delivery ( 2 -4 days)       450
                </div>
                </div>

            </li>
            <li>
                <div className='flex mb-[28px]'>
                    <div className='text-[11px] lg:text-[15px] font-semibold ml-[284px] '>
                        <p> SUBTOTAL </p>
                    </div>
                    <div className='ml-[110px]'>
                    <p>    ${getCartTotal()} </p>
                </div>
                    
                </div>

                <div className='flex mb-[35px]'>
                    <div className='text-[15px] font-semibold ml-[284px]'>
                        <p> SHIPPING </p>
                    </div>
                    <div className='ml-[128px]'>
                    <p>   $450 </p>
                </div>
                    
                </div>

                <div className='flex mb-[23px]'>
                    <div className='text-[15px] font-semibold ml-[284px]'>
                        <p> TOTAL </p>
                    </div>
                    <div className='ml-[140px]'>
                    <p>    ${totalgetCartTotal()} </p>
                </div>
                    
                </div>
                
                <div className='ml-[284px] mb-[43px]'>
                <Link to="target-component" smooth={true} duration={500}>
                    <Buttons label='Checkout' ButtonClassName='py-[15px]' className='text-center rounded-lg text-white bg-[#06630F] px-[84px]  max-w-[261px] max-h-45px]'/>
                    </Link>
                </div>

            </li>
         </ul>
      </div>
    </>
  )
}

export default ChartDelivery