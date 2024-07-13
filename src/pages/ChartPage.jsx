import ChartCard from './pageData/chart/ChartCard'
import { Icon } from '@iconify/react'
import ChartDelivery from './pageData/chart/ChartDelivery'
import Buttons from '../../public/components/Buttons'
import img1 from "../assets/logos_mastercard.png"
import Delivery from './pageData/products/Delivery'
import { Link, Outlet } from 'react-router-dom';
import { Element } from 'react-scroll';
import { CartContext } from '../../public/context/CartProvider'

import { useContext } from 'react'
// import { CartContext } from '../../public/context/CartProvider'
function ChartPage() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/" className="px-4 py-2 bg-[#06630F] text-white rounded-lg">
          Start Shopping
        </Link>
      </div>
    );
  }
  return (
    <>
    <div className=''>
     <header className='lg:mt-[79px]'>
    <ul className='hidden lg:flex justify-between'>
      <li>
       <p className='lg:text-[48px] font-semibold lg:ml-[128px]'>  My Cart </p>
      </li>
      <li>
      <Link to="/">
       <div className='flex space-x-[23px] ml-[433px] mb-[2px] p-[14px] rounded-2xl border-2 border-slate-200 mr-[68px]'>
        <Icon icon='ep:back' className='text-[24px]'/>
        <p> Continue shopping </p>
       </div>
       </Link>
      </li>
    </ul>
    <div className='sm:ml-[40px] sm:space-x-[20px] ml-[36px] mt-[17px] hidden sm:flex mb-[33px] space-x-[56px]'>
            <div className=''>
            <Link to="/">
                 <Icon icon='ep:back' className='hidden sm:flex text-[24px] '/>
                 </Link>
            </div>
             <div className='mr-[56px]'>
                <p className='text-[20px] font-semibold sm:text-center'> My Cart </p>
             </div>      
        </div>
   
     </header>
     <div className='ml-[36px]  lg:ml-[128px] lg:mr-[68px]'>
      <ChartCard/>
    </div>
    <div className='hidden sm:flex ml-[36px] sm:ml-[0px] sm:justify-center'>
     <Delivery/>
    </div>
    <div className='hidden lg:flex'>

    
    <div className=' lg:ml-[128px] lg:mr-[68px] lg:mt-[115px]   '>
    <ChartDelivery/>
    <Element name='target-component'>
    <div className=' lg:max-w-[873px] lg:max-h[312px] lg:mt-[150px] lg:mb-[200px] lg:py-[76px] lg:pl-[35px] lg:bg-[#EEEDED] lg:rounded-lg'>
   
   
    <div className=''>
          <p className='text-[15px] mb-[14px]'>Card number</p>
      <div className='flex space-x-2'>
          <input
          type="text"
          id=""
          name=""
          placeholder='XXXX XXXX XXXX XXXX'
          
          
          className='flex mb-[14px] text-[12px] text-black -mt-2  space-x-[79px] max-w-[305px] border-slate-300 max-h-[38px] border py-[20px] px-[17px]'/> <img src={img1} className='mt-1 max-w-[27px] max-h-[21px] '/>  </div>


          {/* <button type='input' className='flex mb-[14px]  space-x-[79px] max-w-[305px] border-slate-300 max-h-[38px] border py-[20px] px-[17px]'>
            <p className='text-[12px] text-[#8B8787] -mt-2 opacity-25 '></p>
            
          </button> */}
        </div>
        <div>
           <ul className='flex space-x-[70px]'>
             <li>
                <p className='text-[15px] mb-[14px]'> Expiration </p>
                <input
          type="text"
          id=""
          name=""
          placeholder='07/01'
          
          
          className='py-[12px] px-[10px]  text-center max-w-[97px] max-h-[38px] border border-slate-300'/> 
                {/* <Buttons label='07/01' ButtonClassName='-mt-2 -ml-[8px] text-center' className='py-[12px] px-[36px] text-center max-w-[97px] max-h-[38px] border border-slate-300'/> */}
              </li>
            <li> 
            <p className='text-[15px] mb-[14px]  '> CVC </p>
            <input
          type="text"
          id=""
          name=""
          placeholder='065'
          
          
          className='py-[12px] px-[10px] text-center max-w-[97px]  max-h-[38px] border border-slate-300'/> 
            {/* <Buttons label='065' ButtonClassName='-mt-2' className='py-[12px] px-[36px] max-w-[97px] mb-[77px] text-center max-h-[38px] border border-slate-300'/> */}
            </li>
           </ul>

        </div>
        <Buttons label='Confirm Payment' ButtonClassName='-mt-2' className='px-[84px] py-[14px] mt-4  text-center rounded-lg max-h-[45px] max-w-[302px] bg-[#06630F] text-white '/>

    </div>
    </Element>
    </div>
    </div>
   
    </div>
  
  
  
    
    </>
  )
}

export default ChartPage
