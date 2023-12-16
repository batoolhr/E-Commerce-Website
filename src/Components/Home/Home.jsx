import React from 'react'
import Header from './Header'

import Products from '../Products/Products'
import HeroSection from './HeroSection'
import Footer from './Footer'

const Home = () => {

  return (
    <>
        <Header/>
        <HeroSection/>
        <Products />
        <Footer/>
    </>
  )
}

export default Home