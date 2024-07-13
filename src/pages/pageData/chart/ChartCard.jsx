import ChartData from "./ChartData"
import { Icon } from '@iconify/react'
import { useContext } from 'react'
import { CartContext } from "../../../../public/context/CartProvider"
const ChartCard = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal,deleteFromCart } = useContext(CartContext)
  
  return (
    <>
    <div className="">
    
    
      </div>
           <ul className="hidden lg:flex lg:text-[16] lg:mt-[38px] lg:font-semibold lg:text-gray-600 ">
            <li>
            PRODUCT DETAILS
            </li>
            <li className="ml-[205px]">
            QUANTITY
              </li>
              <li className="ml-[116px]">
              PRICE
              </li>
              <li className="ml-[116px]">
              TOTAL
              </li>
           </ul>
               <div>
               <ul className=''>
      {cartItems.map((item) => (
          <li key={item.id} 
          className=''
          >
            {/* <Link to={val.link}> */}
              <div className= ''
 >
             <ul className="mb-[20px] sm:justify-center flex lg:flex sm:space-y-4 lg:mt-[23px] lg:mb-[41px]">
                  <li className=" ">
                  <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} className="lg:max-w-[171px] lg:max-h-[134px] max-w-[96px] max-h-[75px] "/>
                  </li>
                   <li>
                    <div className="text-[11px] mt-[18px] ml-[8px] lg:ml-[22px] lg:mt-[38px] lg:text-[16px]">
                 <div> {item.name} </div>   
                  {/* <div className=" mt-[3px]  lg:mt-[10px]">{val.weight}</div> */}
                  <button onClick={() => {
        deleteFromCart(item)
      }}>
                  <span><Icon icon='lets-icons:trash' className="hidden lg:flex lg:text-[28px]  lg:mt-[12px]"/></span>
                  </button>
                 
                 <div className=" hidden sm:flex mt-[6px] font-semibold" > ${item?.current_price[0]?.NGN[0]} </div> 
                    </div>
                   
                   </li>
                   <li className="flex space-x-2 mt-[20px] ml-[73px] lg:ml-[130px] lg:mt-[50px]">
                    <button onClick={() => {
              removeFromCart(item)
            }} className="-mt-[20px] lg:-mt-[60px]"> - </button>
                    <div className="max-w-[32px] lg:-mt-1 sm:mt-2 max-h-[32px] px-[12px] py-[6px] text-center border border-slate-200"> <span className="">{item.quantity} </span></div>
                    <button onClick={() => {
              addToCart(item)
            }} className="-mt-[20px] lg:-mt-[60px]" >+</button>
                   </li>
                   <li className="hidden lg:flex lg:ml-[116px] lg:mt-[54px] lg:font-semibold ">
                   ${item?.current_price[0]?.NGN[0]}
                   </li>
                   <li className="hidden lg:flex lg:ml-[116px] lg:mt-[54px] lg:font-semibold">
                   ${item?.current_price[0]?.NGN[0] * item.quantity}
                   </li>
                   
               </ul>
               {/* <div className="h-0 w-[828px] mt-[42px] border-t border-gray-300"></div> */}
              </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
               </div>
    
    </>
  )
}

export default ChartCard