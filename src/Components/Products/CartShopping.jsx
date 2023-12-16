import React from 'react'
import { useDispatch } from 'react-redux'
import { DecreaseQuanity, IncreaseQuanity, DeleteItem} from '../../Store/CartShoppingSLice'

const CartShopping = ({item}) => {
const dispatch=useDispatch()
const handleIncrease=(item)=>{
  dispatch(IncreaseQuanity(item))
}
const handleDecrease=(item)=>{
  dispatch(DecreaseQuanity(item))
}
const HandleDeletItem=(item)=>{
  dispatch(DeleteItem(item))
}
  
  return (
    <div className='container mx-auto'>
        <div className='shadow-2xl rounded-md flex  bg-[#FFF] p-5 items-center gap-8 w-[1000px] h-[400px] mx-auto'>
            <img className='w-[300px] h-[300px]' src={item.image} alt=''/>
            <div className='flex flex-col gap-6'>
                <h1 className='w-[300px] text-xl text-bt-color font-bold'>{item.title}</h1>
                <p className='font-semibold text-lg'>${item.price}</p>
                <div className='flex gap-2 items-center'>
                  <button className='py-3 px-3 rounded-md border bg-[#a9a9a9] p-1 hover:scale-[1.2]' onClick={()=>handleIncrease(item)}>+</button>
                  <p className='font-semibold text-lg'>{item.quantity}</p>
                  <button className='py-3 px-3 rounded-md border bg-[#a9a9a9] p-1 hover:scale-[1.2]' onClick={()=>handleDecrease(item)}>-</button>
                </div>
                {/* <button 
                className='font-bold text-xl  bg-[#E5E4E2] py-4 rounded-lg'
                >DELETE</button> */}

                <button onClick={()=>HandleDeletItem(item)} 
                className='w-[100px] mt-1 bg-[#a9a9a9] text-[#333] px-5 p-2 font-semibold text-lg rounded-md 
                hover:bg-[#333] hover:text-[#FFF] cursor-pointer hover:scale-[0.9]'>Delete</button>  

            </div>
        </div>
    </div>
  )
}

export default CartShopping