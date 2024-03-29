import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaCheckCircle } from "react-icons/fa";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem, resetCart, incrementQuantity, decrementQuantity } from "../redux/EshopSlice";


const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.EshopReducer.products);
    const [totalPrice, setTotalPrice] = useState("");

    useEffect(()=>{
        let Total = 0;
        products.map((data)=>{
            Total += data.price * data.quantity;
            return setTotalPrice(Total.toFixed(2))
    })
    }, [products])
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>
            <div className='w-full bg-blue-200 h-full px-4 col-span-4'>
                <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400'>
                    <h2 className='text-3xl font-medium'>Shopping Cart</h2>
                    <h4 className='text-xl font-medium'>Subtitle</h4>
                </div>
                {/*Products start here*/}
                <div >
                    {
                        products.map((data)=>(
                            <div key={data.id} className='w-full border-b-gray-300 p-4 flex items-center gap-6  '>
                                <div className='w-full flex items-center gap-6 border-b-gray-400 border-b-[1px] '>
                                <div className='w-1/5 '>
                                    <img className="w-full h-44 object-contain" src={data.img} alt="ProductImg" />
                                </div>
                                <div>
                                    <h2 className='font-semibold text-lg'>{data.title}</h2>
                                    <p className='text-base'>Unit price <span className='font-semibold'>${data.price}</span></p>
                                    <div className='bg-primary/90 flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md'>
                                        <p >Qty:</p>
                                        <p onClick={()=>dispatch(decrementQuantity(data.id))}className='cursor-pointer px-1 rounded-md hover:bg-white duration-300'>-</p>
                                        <p>{data.quantity}</p>
                                        <p onClick={()=>dispatch(incrementQuantity(data.id))}className='cursor-pointer px-1 rounded-md hover:bg-white duration-300'>+</p>
                                    </div>
                                    <button onClick={()=>dispatch(deleteItem(data.id))}className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>
                                        Delete item
                                    </button>
                                </div>
                                <div className="ml-auto">
                                  <p className='text-lg font-titleFont font-semibold'>${data.price * data.quantity}</p>  
                                </div>
                                </div>
                                
                            </div>

                        ))
                    }
                </div>

                {/*<div onClick={()=>dispatch(resetCart())}className='w-full py-2'>
                    <button className='bg-red-500 text-lg px-10 py-2 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>
                        Clear Cart
                    </button>
                </div>*/}

            

            </div>
            <div className='w-full  bg-blue-200 h-52 col-span-1 flex flex-col justify-center items-center p-4'>
                <div>
                    <p className='flex gap-2 items-start text-sm'>
                        <span><FaCheckCircle className='bg-white text-green-500 rounded-full '/></span>
                         Your order qualifies for FREE Shipping. Choose this option at checkout. See details...
                    </p>
                </div>
                <div>
                    <p className='font-semibold px-10 py-1 flex items-center gap-2 justify-between'>Total: <span className='text-lg font-bold'>${totalPrice}</span></p>
                </div>
                <button className='w-full font-titleFont font-medium text-base bg-red-500 hover:bg-red-700 active:bg-red-900 duration-300 py-1.5 rounded-md mt-3'>
                    Proceed to Pay
                </button>


            </div>
        </div>

    </div>
  )
}

export default Cart