import React from 'react'
import Button from "../Shared/Button.jsx"
import { Link } from 'react-router-dom'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },


]

const HelpYou = [
    {
        title: "Your Account",
        link: "/#",
    },
    {
        title: "Your Orders",
        link: "/#",
    },
    {
        title: "Shipping Rates and Policies",
        link: "/#",
    },
    {
        title: "Returns and Replacements",
        link: "/#",
    },
    {
        title: "Help",
        link: "/#",
    },


]

const MakeMoney = [
    {
        title: "Sell Products on ESHOP",
        link: "/#",
    },
    {
        title: "Become an Affiliate",
        link: "/#",
    },
    {
        title: "Advertise your Products",
        link: "/#",
    },
    {
        title: "Host an ESHOP Hub",
        link: "/#",
    },
    

]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/*company details*/}
                <div className='py-8 px-4'>
                    <Link
                            to="#"
                            className="font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            <span className='text-primary'>ESH</span>OP
                    </Link>
                    <p className='text-gray-600 lg:pr-24 pt-3'>
                        Grab the best deals in wearable technology today!
                    </p>
                    <p className='text-gray-500 mt-4'> 
                        Follow for more on our Youtube Channel!
                    </p>
                    <Link
                    to="#" target="_blank" className='inline-block bg-primary/90 text-white py-2 px-4 mt-4
                    text-sm rounded-full'>
                    Visit Youtube channel
                    </Link>
                </div>
                
                    {/*FooterLinks*/}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>
                            Important Links
                        </h1>
                        <ul className='space-y-3'>
                            {
                              FooterLinks.map((data, index)=> (
                                <li key={index}>
                                    <Link
                                    to={data.link}
                                    className='text-gray-600 hover:text-black duration-300'
                                    >
                                    {data.title}

                                    </Link>
                                    
                                </li>
                              ))
                            }
                            
                        </ul>
                    </div>
                
                

                    {/*Make Money With Us*/}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3 pr-24'>
                            Make Money With Us
                        </h1>
                        <ul className='space-y-3'>
                            {
                              MakeMoney.map((data, index)=> (
                                <li key={index}>
                                    <Link
                                    to={data.link}
                                    className='text-gray-600 hover:text-black duration-300'
                                    >
                                    {data.title}

                                    </Link>
                                    
                                </li>
                              ))
                            }
                            
                        </ul>
                    </div>
                

                    {/*Let us help you*/}
                    <div className='col-span-2 grid grid-cols-2 pl-10 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>
                                Let Us Help You
                            </h1>
                            <ul className='space-y-3'>
                                {
                                HelpYou.map((data, index)=> (
                                    <li key={index}>
                                        <Link
                                        to={data.link}
                                        className='text-gray-600 hover:text-black duration-300'
                                        >
                                        {data.title}

                                        </Link>
                                        
                                    </li>
                                ))
                                }
                                
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer