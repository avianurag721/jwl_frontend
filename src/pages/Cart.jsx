import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
  const { totalItems } = useSelector((state) => state.cart)
  const { cart } = useSelector((state) => state.cart)
  
  console.log("printing cart",cart)
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h1 className=' bg-slate-300 px-4 py-2 my-2 rounded-md'> {cart.length} items in the cart </h1>
      <div className=' bg-red-300 w-[90%] min-h-screen'>fdf</div>
    </div>
  )
}

export default Cart
