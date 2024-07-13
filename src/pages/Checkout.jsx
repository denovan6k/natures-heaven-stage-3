import img1 from '../assets/logos_mastercard.png'
import Buttons from '../../public/components/Buttons'
import { Icon } from '@iconify/react'
import { Link, } from 'react-router-dom';
const Checkout = () => {
  return (
    <>
    <div className=' flex justify-center min-h-screen'>
    <div className=' ml-[32px] mt-[17px]'>
        <div className='flex mb-[33px] space-x-[56px]'>
            <div className=']'>
            <Link to="/cart">
                 <Icon icon='ep:back' className='text-[24px] '/>
                 </Link>
            </div>
             <div className='mr-[56px]'>
                <p className='text-[20px] font-semibold sm:text-center'> Payment Details </p>
             </div>      
        </div>
        <div>
          <p className='text-[15px] mb-[14px]'>Card number</p>

          <div className='flex space-x-2'>
          <input
          type="text"
          id=""
          name=""
          placeholder='XXXX XXXX XXXX XXXX'
          
          
          className='flex mb-[14px] text-[12px] text-black -mt-2  space-x-[79px] max-w-[305px] border-slate-300 max-h-[38px] border py-[20px] px-[17px]'/> <img src={img1} className='mt-1 max-w-[27px] max-h-[21px] '/>  </div>



          {/* <button type='input' className='flex mb-[14px]  space-x-[79px] max-w-[305px] border-slate-300 max-h-[38px] border py-[20px] px-[17px]'>
            <p className='text-[12px] text-[#8B8787] -mt-2 opacity-25 '>XXXX XXXX XXXX XXXX</p>
            <img src={img1} className='-mt-2'/> 
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
        <Buttons label='Confirm Payment' ButtonClassName='-mt-2' className='px-[84px] py-[14px] mt-8  text-center rounded-lg max-h-[45px] max-w-[302px] bg-[#06630F] text-white '/>
    </div>
    </div>
    </>
  )
}

export default Checkout