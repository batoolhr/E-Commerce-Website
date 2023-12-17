import Header from '../Home/Header';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLimitProducts } from '../../Store/ProductsSlice';
import Footer from '../Home/Footer';
import { addTolist } from '../../Store/CartShoppingSLice';

const ProductDetails = () => {
  const location = useLocation();
  const productData = location.state && location.state.productData;
  const Data=useSelector((state)=>state.products.limitData)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getLimitProducts())
  },[dispatch])
  console.log(Data)
  
 

  if (!productData) {
    // Handle the case where the data is not available
    return <div>Data not available</div>;
  }

  // Render the component with the productData
  return (
    <>
      <div className= 'w-[1220px] mx-auto'>
      <Header />
      <div className='container mx-auto mt-5 flex gap-16 bg-slate-400 h-[80vh] items-center rounded-lg'>
      <div className='ml-10 '>
        <img className=' rounded-[50px] w-[450px] h-[550px]' src={productData.image} alt=''/>
      </div>
        <div className='flex flex-col gap-3 items-start mt-5'>
          <p className='text-2xl text-[#FFF]'>{productData.category}</p>
          <h1 className='text-3xl text-bt-color'>{productData.title}</h1>
          <p className='text-3xl text-bt-color'>${productData.price}</p>
          <p className='w-[550px] text-lg font-serif font-medium text-bt-color'>{productData.description}</p>
          <button onClick={()=> dispatch(addTolist(productData))}
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-bt-color 
              bg-[#E5E4E2] hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
            ADD TO CART
          </button>
        </div>
      </div>

      <h1 className='text-center font-bold text-3xl my-8'> Featured Product </h1>
      <h2 className='text-xl font-semibold text-center text-slate-400 mb-[50px]  '>New Collection New Modern Design</h2>
      <div className='grid grid-cols-4 gap-3 container mx-auto my-5'>
          {
            Data.map((item)=>
            <ProductCard data={item}/> )
          }
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default ProductDetails;
