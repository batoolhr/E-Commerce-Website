import React from 'react'
import Header from './Header'

import Products from '../Products/Products'
import HeroSection from './HeroSection'
import Footer from './Footer'

const Home = () => {

  return (
   <>
   
   <div className='w-[1200px] mx-auto'>
        <Header/>
        <HeroSection/>
        <Products />
        
    </div>
    <Footer/>
   </>
    
  )
}

export default Home