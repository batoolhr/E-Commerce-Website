import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Store/CategoriesSlice';

  const Categories = ({HandleSelectCategory}) => {
  const Category = useSelector((state) => state.Categories.cat);
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCategories())
  },[dispatch])

  return (
    <div className='w-full max-w-[890px] mx-auto '>
       <h1 className='text-center text-bt-color font-bold text-2xl my-9'>LATEST PRODUCTS </h1>
      <div className='flex gap-2 items-center'>
      <div  onClick={()=>HandleSelectCategory('All')} className="flex hover:cursor-pointer" >
            <span
              
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-bt-color bg-[#E5E4E2] hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              ALL
            </span>
          </div>
        {Category.map((item, index) => (
          <div  onClick={()=>HandleSelectCategory(item)} className="flex  hover:cursor-pointer" key={index} >
            <span 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-bt-color bg-[#E5E4E2] hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
