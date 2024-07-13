import Buttons from "../../public/components/Buttons"
import img1 from "../assets/Money_Saving_Tips_for_Grocery_Shopping_-removebg-preview 1.png"
import CategoryCard from "./pageData/category/CategoryCard"
import { Icon} from '@iconify/react'
import ProductCard from "./pageData/products/ProductCard"
import img2 from '../assets/Rectangle 48.png'
import img3 from '../assets/Rectangle 93.png'
import { Link, Outlet } from 'react-router-dom';
import { CartContext } from "../../public/context/CartProvider"
import { useContext } from "react"
const LandingPage = () => {
  const { add } = useContext(CartContext)
  return (
    <>
    <div className="sm:mx-auto lg:max-w-[1540px] lg:min-vh ">
        <header className=" lg:flex   sm:justify-between lg:space-x-[60px] bg-white mt-[45px] mb-[22px] ">
            <div className=''>
            <div className=" flex sm:space-x-[140px] justify-between sm:justify-center sm:mx-auto  ml-[36px] text-[13px] text-[#06630F] lg:text-[15px] lg:font-semibold"> <p> NaturesHaven </p>
            <ul className="hidden md:flex space-x-[29px] mr-[40px] sm:flex sm:space-x-[29px] ">
              <li>
              <Link to="/cart">
                <Icon  icon="mdi:cart-outline" className="text-[18px]  text-black"/>
                </Link> 
                <li>
                <p className="-mt-[25px] ml-4 text-[#06630F]">{add}</p>
                </li>
              </li>
              <li>
              <Icon icon="material-symbols:menu" className="text-[18px] text-black"/>
              </li>
              </ul>
               </div> 
            </div>
            <Buttons className='hidden sm:flex  text-[24px] mx-auto mt-2 text-center w-[300px] bg-[#fffF] border-2 border-slate-200  text-slate-300 rounded-lg' icon='material-symbols:search' spanclassName='sm:mt-[4px] ml-[13px]'/>

            <div className='hidden lg:flex lg:space-x-[32px] lg:mr-[20px]  font-bold '>
              <ul className="flex space-x-[20px]">  <li>
                  HOME
                </li>
                <li>
                  ABOUT US
                </li>
                <li>
                   BLOG
                </li>
                <li>
                  CONTACT US
                </li>
                </ul>
                <li className="flex ">
                <Buttons className='text-[24px] -mt-2 text-center h-[2.315rem] w-[21rem] bg-[#fffF] border-2 border-slate-200  text-slate-300 rounded-lg' icon='material-symbols:search' spanclassName='ml-[13px]'/>
                
                
                <Link to="/cart">
                  <Icon icon='mdi:cart-outline' className="text-[33px] -mt-2 ml-[12px] font-bold"/>
                  </Link>
                  <p className="-mt-[15px] text-[#06630F]">{add}</p>
                </li>
            </div>
        </header>
        <main className="mx-auto md:mx-auto bg-[#FFEBD4] max-w-[375px] max-vh    lg:bg-[#FFEBD4] lg:pb-[80px]  lg:max-h-[900px] lg:max-w-[1600px]  lg:mt-[20]">
          <div className="flex space-x-0 pb-[10px] lg:flex lg:space-x-[70px]"   >
           
          <ul className="ml-[17px] lg:pl-[128px]">
            <li className="  text-[20px] pt-[10px] lg:text-[64px] lg:pt-[141px] ">
                <span className="font-semibold">
                <p> Fresh and Healthy </p>
                <p> Vegetables and Fruits </p>
                </span>
               
            </li>
            <li className="  lg:mt-[39px]">
            <span className="text-[12px] lg:text-[24px]">
                <p> They are produced by methods that </p>
                <p> comply with the standard of farming  </p>
                </span> 
            </li>
            <li className="">
                <Buttons label='Shop now' ButtonClassName='-mt-1' className=" lg:text-[24px] text-[13px] text-center mt-[5px]  w-[6rem] h-[1.938rem]  lg:h-[5rem] lg:w-[11.813rem] bg-[#06630F] lg:mt-[61px] text-white rounded-lg"/>
            </li>
          </ul>
         <div className="max-w-[183px] max-h-[226px]  lg:max-w-[1512px] lg:max-h-[666px] "><img src={img1} alt="carriage" className=""/></div> 
          </div>

        
         
        </main>
        <div className="sm:mx-auto   max-w-[375px] max-h-[220px] ">
        <div className="    mt-[23px] mb-[23px] ml-[17px] lg:ml-[125px] lg:mt-[86px] lg:mb-[20px]">
          <div className="">
          <div className=" text-[20px] font-semibold  lg:font-medium lg:text-[36px]">
            <p> Categories </p></div>
           
            </div>
            </div>
            </div>
            <div className="-mt-[20px] mb-[20px]">
            <CategoryCard/>
           
            </div>
            <div className="sm:mx-auto    max-w-[375px] max-h-[220px]">
            <div className=" text-[20px]  lg:text-center ml-[17px] lg:ml-[125px] lg:text-[36px] font-semibold lg:mt-[72px]">
              Our Products
            </div>
            </div>
           <div className="lg:px-[50px]">
            <ProductCard/>
            <div>
        <footer className="mx-auto md:mx-auto max-w-[369px] max-h[178px] lg:max-w-[1512px] lg:max-h-[411px] mt-[20px] lg:flex lg:mt-[100px] lg:mb-[0px]">
        <img src={img2} className=""/>
        {/* <div className=" mt-[64px]">
          <img src={img3}/>
        </div> */}
        </footer>
        </div>
           </div>
    
       
    </div>
    
    </>
  )
}

export default LandingPage