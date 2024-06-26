import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaCheckCircle } from "react-icons/fa";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem, resetCart, incrementQuantity, decrementQuantity } from "../redux/EshopSlice";
import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar.jsx"


const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.EshopReducer.products);
    const [totalPrice, setTotalPrice] = useState("");

    useEffect(()=>{
        let Total = 0;
        products.map((data)=>{
            Total += data.price * data.quantity;
            return Total;
            
    });
    return setTotalPrice(Total.toFixed(2));
    }, [products])
  return (
    <div className='grid place-items-center mt-5 '>
        <Navbar />
        <Link to="/">
                <div className="font-semibold tracking-widest text-3xl uppercase sm:text-4xl pb-5 ">
                <span className='text-primary'>ESh</span>OP
                </div>
            </Link>
    
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden ">
      {products.length > 0 ? (
        <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>
            
            <div className='w-full bg-white dark:bg-gray-900 h-full px-4 col-span-4 my-6'>
                <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400'>
                    <h2 className='text-3xl font-medium'>Shopping Cart</h2>
                    <h4 className='text-xl font-medium'>Subtotal</h4>
                </div>
                {/*Products start here*/}
                <div className=''>
                    {
                        products.map((data)=>(
                            <div key={data.id} className='w-full border-b-gray-300 p-4 flex items-center gap-6  '>
                                <div className='w-full flex items-center justify-between gap-6 border-b-gray-400 border-b-[1px] '>
                                <div className='w-1/5 '>
                                    <img className="w-full h-44 object-contain" src={data.img} alt="ProductImg" />
                                </div>
                                <div className='w-3/5'> 
                                    <h2 className='font-semibold text-lg'>{data.title}</h2>
                                    <p className=' xl:pr-10 text-gray-600 dark:text-gray-400 text-sm'>{data.description}</p>
                                    <p className='text-base'>Unit price: <span className='font-semibold'>${data.price}</span></p>
                                    <div className='bg-primary flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md'>
                                        <p >Qty:</p>
                                        <p onClick={()=>dispatch(decrementQuantity(data.id))}className='cursor-pointer px-1 rounded-md hover:bg-white duration-300'>-</p>
                                        <p>{data.quantity}</p>
                                        <p onClick={()=>dispatch(incrementQuantity(data.id))}className='cursor-pointer px-1 rounded-md hover:bg-white duration-300'>+</p>
                                    </div>
                                    <button onClick={()=>dispatch(deleteItem(data.id))}className='w-36 py-1 rounded-lg text-black bg-gray-100 mt-2 hover:scale-105 duration-300'>
                                        Delete item
                                    </button>
                                </div>
                                <div className="ml-auto w-1/5">
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
            <div className='w-full  bg-white dark:bg-gray-900 h-52 col-span-1 flex flex-col justify-center items-center p-4 my-2'>
                <div>
                    <p className='flex gap-2 items-start text-sm'>
                        <span><FaCheckCircle className='bg-white text-green-500 rounded-full '/></span>
                         Your order qualifies for FREE Shipping. Choose this option at checkout. See details...
                    </p>
                </div>
                <div>
                    <p className='font-semibold px-10 py-1 flex items-center gap-2 justify-between'>Total: <span className='text-lg font-bold'>${totalPrice}</span></p>
                </div>
                <button className='w-full font-titleFont font-medium text-base bg-primary cursor-pointer
    hover:scale-105 duration-300 py-2 px-8 rounded-md relative z-10'>
                    Proceed to Pay
                </button>


            </div>
        </div> ) : (
        
            <div className='flex flex-col items-center justify-center h-screen'>
                <h2 className='text-gray-600 font-bold'>Oops....</h2>
                <p>
                    Seems like your Shopping Cart is empty.
                    To buy one or more items, click on Add to Cart or <Link to="/"><span className='text-amber-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Continue Shopping</span></Link>. 
                </p> 
            </div>

)}

    </div> 
 
     
    </div>
  )
}

export default Cart