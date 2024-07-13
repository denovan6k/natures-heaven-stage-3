
import CategoryData from './CategoryData'
// import { prototype } from 'postcss/lib/at-rule'
// import PropTypes from 'prop-types';


function CategoryCard() {
  // onClick,disabled
  return (
    <div> 
           <div className='flex '>
      <ul className='sm:mx-auto lg:justify-center lg:mx-auto lg:grid  lg:grid-cols-3 grid grid-cols-3 gap-x-[12px] lg:gap-x-[35px] mt-[22px] ml-[17px]  lg:mt-[28px] '>
      {CategoryData.map((val, index) => (
          <li key={index} 
          className=''
          >
            {/* <Link to={val.link}> */}
              <div className= 'w-[6.313rem] lg:w-[18rem] h-[8.625rem] lg:h-[23.875rem] text-center flex justify-items-center  border px-[40px] rounded-lg'
 style={{ backgroundColor: val.color }} >
                <div className='mt-[47px] max-w-[200px] lg:max-w-auto'>{val.img}
                <span className='font-medium text-[12px] r lg:text-[24px] mt-[40px]'>{val.title}</span> 
                </div>
                
              </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
  // onClick={onClick}
}

export default CategoryCard

  {/* <button className=''>
      <InlineIcon  icon={icon} className='' />
        <span className=''>
        {label}
        </span>
        <img src={img}/>
      </button>
      disabled={disabled} */}
      // CategoryCard.propTypes = {
//     label: PropTypes.string,
//     name: PropTypes.string,
//     icon: PropTypes.string,
//     className: PropTypes.string,
//     img: PropTypes.string,
  
//     // disabled: PropTypes.bool,
//   };