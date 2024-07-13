import img1 from './chartPictures/Rectangle 53.png'
import img2 from './chartPictures/Rectangle 54.png'
import img3 from './chartPictures/Rectangle 55.png'
const ChartData = [{
    title:'Almond fruit',
    img: <img src={img1} alt=''/>,
    price: 'N 2000',
    number: '1',
    weight: '100g',
    total: 'N 2000',
    
},
{
    title:'Curry Powder',
    img: <img src={img2} alt=''/>,
    price: 'N 700',
    number: '2',
    weight: '100g',
    total: 'N 1400',
    
},
{
    title:'Curry Powder',
    img: <img src={img3} alt='' className='max-width: 100%;'/>,
    price: 'N 1200',
    number: '2',
    weight: '100g',
    total: 'N 2400',

},



]
export default ChartData