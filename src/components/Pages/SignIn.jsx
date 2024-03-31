import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom'
import Registration from './Registration'
import Navbar from "../Navbar/Navbar.jsx"

const SignIn = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className='w-full bg-gray-100 pb-10 pt-5'>
        <form className='w-[350px] mx-auto flex flex-col items-center my-4'>
                <Link to="/">
                    <div className="font-semibold tracking-widest text-3xl uppercase sm:text-4xl pb-5 ">
                    <span className='text-primary'>ESh</span>OP
                    </div>
                </Link>
          
          <div className='w-full border border-zinc-200 p-6'>
            <h2 className='font-title text-3xl font-medium mb-4'>Sign In</h2>
            <div className='flex flex-col gap-3'>
              <div className="flex flex-col gap-2">
                <p className='text-sm font-medium'>Email or mobile phone number</p>
                <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none 
                focus-within:border-[#f42c37] focus-within:shadow-eshopInput duration-100" type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <p className='text-sm font-medium'>Password</p>
                <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none 
                focus-within:border-[#f42c37] focus-within:shadow-eshopInput duration-100" type="password" />
              </div>
              <div className="flex flex-col gap-2">
                  <button onClick={(e)=>e.preventDefault()}className=" bg-primary text-white cursor-pointer
                  hover:scale-105 duration-300 py-2 px-8 rounded-sm relative z-10"> 
                      Continue
                  </button>
              </div>
              <div>
                <p className='text-sm text-black leading-4 mt-4'>By continuing, you agree to ESHOP's <span className='text-amber-600 cursor-pointer '  >Conditions of Use</span> and <span className='text-amber-600 cursor-pointer '>Privacy Notice.</span> </p>
                <p className='text-xs text-gray-600 mt-4 cursor-pointer group inline-flex space-x-2 items-center'><IoIosArrowDroprightCircle /><span className='text-amber-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need help?</span></p>
                
              </div>
              
            </div>
          </div>
          <p className='w-full text-sm text-gray-600 mt-4 flex items-center'>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
            <span className='w-1/3 text-center'>New to ESHOP?</span>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
          </p>
          <Link className="w-full" to='/registration'>
          <button className=' bg-black text-white cursor-pointer w-full rounded-sm
                  hover:scale-105 duration-300 py-2 mt-4 relative z-10'>
            Create your ESHOP account
          </button>
          </Link>
        </form>
      </div>
      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 items-center justify-center py-10'>
          <div className='flex items-center gap-6'>
            <p className='text-xs text-amber-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer duration-100 '>
              Conditions of Use
            </p>
            <p className='text-xs text-amber-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer duration-100'>
              Privacy Notice
            </p>
            <p className='text-xs text-amber-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer duration-100'>
              Help
            </p>
          </div>
          <p className='text-xs text-gray-600'>© 2024, Eshop.com, Inc. or its affiliates</p>
      </div>
    </div>
    
  )
}

export default SignIn