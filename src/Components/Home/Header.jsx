import React from "react"
import { FaShoppingCart } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
const Header=()=>{
  const navigate= useNavigate ()
  const hadnleCartList=()=>{
    navigate('/cart')
  }
  const hadnlenavgaite=()=>{
    navigate('/')
  }
    return (
        // <header className="shadow-md h-16  flex ">
         <header className=" h-16  flex  ">  
        <div className="container mx-auto flex items-center justify-between">
          <a onClick={()=>hadnlenavgaite()} className="uppercase font-semibold text-2xl" href="# ">La Collection</a>
          
          <ul className="list-none flex gap-12 text-lg font-medium">
            <li><a className="" href="#home">Home</a></li>
            <li><a className="" href="#products">Products</a></li>
            <li><a className="" href="#about">About</a></li>
            <li><a className="" href="#contact">Contact</a></li>
          </ul>
      
          <div className="flex gap-3 items-center">
            <button  onClick={()=>hadnleCartList()} className="flex gap-1 bg-[#E5E4E2] p-3 rounded-md">
            <FaShoppingCart size={26}  />
              <span className="text-lg font-medium">Cart</span>
            </button>
          </div>
        </div>
      </header>

    )
}
export default Header