import React, { useState } from 'react';
import { IoIosArrowDroprightCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar.jsx"

const Registration = () => {

    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    // Error Message start
    const [errClientName, setErrClientName] = useState(" ")
    const [errEmail, setErrEmail] = useState(" ")
    const [errPassword, setErrPassword] = useState(" ")
    const [errCPassword, setErrCPassword] = useState(" ")


    const handleName=(e)=>{
        setClientName(e.target.value)
        setErrClientName("")
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
        setErrEmail("")
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        setErrPassword("")
    }

    const handleCPassword=(e)=>{
        setCPassword(e.target.value)
        setErrCPassword("")
    }




    const handleRegistration=(e)=>{
        e.preventDefault()
        
        {/*if(!email){
            setErrEmail("Enter your email");
        }else{
            if(!emailValidation(email)){
                setErrEmail("Enter valid email");
            }
        }
        if(!password){
            setErrPassword("Enter your password");
        }else{
            if(password.length < 6){
                setErrPassword("Password must be atleast 6 characters");
            }

        }
        if(!cPassword){
            setErrCPassword("Confirm your password");
        }else{
            if(cPassword !== password){
                setErrCPassword("Password not matched");
            }
        }*/}
    }


//Email validation:
{/*const emailValidation = (email)=>{
    return String(email).toLowerCase().match(`\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b`)
}*/}
  return (
    <div className='w-full'>
        <Navbar />
        <div className='w-full bg-gray-100 dark:bg-gray-900 pb-10 '>
            <form className='w-[350px] mx-auto flex flex-col items-center my-6'>
                <Link to="/">
                    <div className="font-semibold tracking-widest text-3xl uppercase sm:text-4xl pb-5  ">
                    <span className='text-primary'>ESh</span>OP
                    </div>
                </Link>
                
                <div className='w-full border border-zinc-200 p-6'>
                    <h2 className='font-title text-3xl font-medium mb-4'>Create your account</h2>
                    <div className='flex flex-col gap-3'>
                        <div  className="flex flex-col gap-2">
                            <p className='text-sm font-medium'>Enter name</p>
                            <input onClick={handleName} className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none 
                            focus-within:border-[#f42c37] focus-within:shadow-eshopInput duration-100"type="text"/>
                            {/*{
                                errClientName && (
                                    <p className='text-red-600 text-sm font-semibold tracking-wide flex items-center gap-2 -m-1.5 '>
                                        <span className='italic font-titleFont font-extrabold text-base'>
                                            ! 
                                            </span>{" "} {errClientName}</p>
                                )
                            }*/}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-medium'>Email or phone number</p>
                            <input onClick={handleEmail} className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none 
                            focus-within:border-[#f42c37] focus-within:shadow-eshopInput duration-100" type="email"/>
                            {/*{
                                errEmail && (
                                    <p className='text-red-600 text-sm font-semibold tracking-wide flex items-center gap-2 -m-1.5 '> <span className='italic font-titleFont font-extrabold text-base'>!</span> {errEmail}</p>
                                )
                            }*/}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-medium'>Create password</p>
                            <input  onClick={handlePassword}className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none 
                            focus-within:border-[#f42c37] focus-within:shadow-eshopInput duration-100" type="password"/>
                            {/*{
                                errPassword && (
                                    <p className='text-red-600 text-sm font-semibold tracking-wide flex items-center gap-2 -m-1.5 '> <span className='italic font-titleFont font-extrabold text-base'>!</span> {errPassword}</p>
                                )
                            }*/}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-medium'>Re-enter password</p>
                            <input  onClick={handleCPassword} className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none 
                            focus-within:border-[#f42c37] focus-within:shadow-eshopInput duration-100" type="password"/>
                            {/*{
                                errCPassword && (
                                    <p className='text-red-600 text-sm font-semibold tracking-wide flex items-center gap-2 -m-1.5 '> <span className='italic font-titleFont font-extrabold text-base'>!</span> {errCPassword}</p>
                                )
                            }*/}
                            <p className='text-xs text-gray-600 dark:text-white'>Password must be atleast 6 characters</p>
                        </div>
                        <div className="flex flex-col gap-2">
                        <button onClick={handleRegistration} 
                        className='bg-primary text-white cursor-pointer
                        hover:scale-105 duration-300 py-2 px-8 rounded-sm relative z-10'> 
                            Continue
                        </button>
                        </div>
                        <p className='text-sm text-black dark:text-white leading-4 mt-4'>By continuing, you agree to ESHOP's <span className='text-amber-600 cursor-pointer '  >Conditions of Use</span> and <span className='text-amber-600 cursor-pointer '>Privacy Notice.</span> </p>
                    </div>
                    <div>
                        <Link to="/signin">
                        <p className='text-xs text-gray-600 mt-4 group inline-flex space-x-2 items-center '>Already have an account? <span className='text-amber-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer inline-flex items-center mx-1.5'>Sign in <span className='mx-1.5'> <IoMdArrowDroprightCircle /></span></span></p>
                        </Link>
                        

                        <p className='text-xs text-gray-600 mt-4 group inline-flex space-x-2 items-center '>Buying for work? <span className='mx-1.5 text-amber-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 inline-flex items-center cursor-pointer'>Create a free business account</span></p>
                    </div>
                </div>
                
            </form>
        </div>
        <div className='w-full bg-white dark:bg-gray-900 flex flex-col gap-4 items-center justify-center py-10'>
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

export default Registration;