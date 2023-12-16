import React from 'react'

const HeroSection = () => {
  return (
    // <div className='container mx-auto h-[650px] bg-hero-pattern   flex flex-col justify-center items-center text-white  object-cover  '>
    //      <div className='' >
    //         <h1>ll</h1>
    //         <p></p>
    //         <button></button>
    //     </div>
    // </div>

    <div className=" rounded-xl bg-cover mx-auto flex items-center container h-[80vh]  bg-hero-pattern">
 
    <div className=" text-center flex flex-col items-start  gap-2 leading-9  ml-[150px]  text-white"> 
        <h2 className='text-[#333] font-semibold text-xl'>Trade-in-offer</h2>
        <div className='flex flex-col items-start'>
            <h1 className="font-bold text-4xl text-[#002244]">Super Value deals</h1> 
            <h1 className="font-bold text-4xl  text-[#002244] ">On all Products</h1> 
        </div>
        
            <p className=' text-xl'>Save More with coupons & up to 70% off!</p>
    
        <button className=' mt-1 bg-[#a9a9a9] text-[#333] px-5 p-2 font-semibold text-lg rounded-md hover:bg-[#333] hover:text-[#FFF] cursor-pointer'>Shop Now</button>  
    </div>
    
</div>




  )
}

export default HeroSection