
import ProductData from './ProductData'
import { Icon } from '@iconify/react'
import Buttons from '../../../../public/components/Buttons'
// import { Link, Outlet } from 'react-router-dom';
import { ProductContext } from '../../../../public/context/ProductProvider';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../../../public/context/CartProvider';
const ProductCard = () => {
  const products = useContext(ProductContext);
  const { cartItems, addToCart } = useContext(CartContext)
   
   
  return (
    <div className='lg:max-w-[1380px] max-w-[304px] mx-auto'>
     <ul className='grid grid-cols-2 grid-rows-5 lg:grid-cols-5 lg:grid-rows-2  lg:gap-y-[97px] lg:gap-x-[10px] gap-x-[10px] gap-y-[26px]  lg:ml-[10px] lg:mt-[60px] ml-[17px] mt-[20px]'>
      {products.map((products) => (
          <li key={products.id} 
          className=''
          >
           
              <div className= 'p-0 lg:flex-col lg:max-w-[235px]  max-w-[94.01px] border bg-white  rounded-lg'
  >
                <div className=' lg:max-w-[235px] '>
                  <img src={`https://api.timbu.cloud/images/${products.photos[0].url}`}/>
                    <div className='lg:px-[20px] px-[4px] '>
                        <ul className='  lg:mt-[12px] mt-[5.19px]'>
                           
                            <li className='flex justify-between'>
                            <div className=' text-[7px] lg:text-[16px] '>{products.name}</div> 
                            <div>
                    <Icon icon='material-symbols:favorite-outline' className="lg:text-[24px] lg:ml-12 mt-[0.5px] ml-[20px]  text-[#F79E1B] font-bold text-[7px]"/>
                    </div>
                       
                            </li>

                            <li className='flex justify-between space-x-[8x]'>
                            <div>
                            <p className='text-[7px] font-semibold lg:text-[16px] lg:mb-[12px] lg:mt-[17px] mb-[7.61px] mt-[4px]'>${products?.current_price[0]?.NGN[0]}</p>
                         </div>
                   
                    <div className='lg:mt-[2px] sm:flex mt-[15px]'>
                    {/* <Link to="/cart"> */}
                    <div onClick={() => addToCart(products)} className='bg-[#F79E1B] cursor-pointer  rounded-sm p-[2px] text-center max-w-[25px] max-h-[9px] text-[3.5px] text-white lg:mb-[12px] lg:mt-[17px] lg:text-[9px] lg:rounded-lg lg:px-[10px] lg:py-[6px] -mt-[10px]  font-semibold lg:text-white lg:max-w-[72px] lg:max-h-[22px]'>
                    Add To Cart
                        {/* <Buttons label='Add To Cart' className='bg-[#F79E1B]  rounded-sm p-[2px] text-center max-w-[25px] max-h-[9px] text-[3.5px] text-white lg:mb-[12px] lg:mt-[17px] lg:text-[9px] lg:rounded-lg lg:px-[10px] lg:py-[6px] -mt-[10px]  font-semibold lg:text-white lg:max-w-[72px] lg:max-h-[22px]' /> */}
                        </div>
                         {/* </Link> */}

                    </div>
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>
                
              </div>
           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductCard
// {/* <div className='max-w-[1380px]'>
// <ul className='grid grid-cols-3 grid-rows-5 lg:grid-cols-5 lg:grid-rows-5  lg:gap-y-[97px] lg:gap-x-[20px] gap-x-[10px] gap-y-[26px]  lg:ml-[125px] lg:mt-[60px]'>
//  {ProductData.map((val, index) => (
//      <li key={index} 
//      className=''
//      >
//        {/* <Link to={val.link}> */}
//          <div className= 'p-0 flex-col lg:max-w-[235px] max-w-[94.01px] border bg-white  rounded-lg'
// >
//            <div className=' lg:max-w-[235px] max-w-[94.01px]'>{val.img}
//                <div className='px-[20px]'>
//                    <ul className='flex justify-between mt-[12px]'>
//                        <li>
//                        <div className=' text-[7px] lg:text-[16px] '>{val.title}</div> 
                  
//                     <div>
//                        <p className='text-[7px] lg:text-[16px] lg:mb-[12px] lg:mt-[17px]'>{val.price}</p>
//                     </div>
//                        </li>
//                        <li>
//                        <div>
//                <Icon icon='material-symbols:favorite-outline' className="lg:text-[24px] lg:ml-12  text-[#F79E1B] font-bold text-[7px]"/>
//                </div>
//                <div>
//                    <Buttons label='Add To Cart' className='bg-[#F79E1B] max-w-[25px] max-h-[9px] text-[3.5px] text-white lg:mb-[12px] lg:mt-[17px] lg:text-[9px] rounded-lg lg:px-[10px] lg:py-[6px] font-semibold lg:text-white lg:max-w-[72px] lg:max-h-[22px]'/>
//                </div>
//                        </li>
//                    </ul>
                   
//                </div>
               
//            </div>
           
//          </div>
//        {/* </Link> */}
//      </li>
//    ))}
//  </ul>
// </div> */}