import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'



const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blog",
    },
    
    

]

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },

    {
        id: 2,
        name: "Best selling",
        link: "/#",
    },

    {
        id: 3,
        name: "Top rated",
        link: "/#",
    }
]



const Navbar = () => {
    const products = useSelector(state=>state.EshopReducer.products);
    
  return (
    <nav className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className="py-4">
            <div className="container flex justify-between items-center">
                
                {/*Logo and Links section*/}
                <div className='flex items-center gap-4'>
                    <Link
                        to="#"
                        className="font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                        <span className='text-primary'>ESh</span>OP</Link>
                        

                    
            
                        {/*Menu Items*/}
                        <div className='hidden sm:block'>
                            <ul className="flex items-center gap-4">
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={index}>
                                            <Link to={data.link}
                                            className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                                            >
                                                {" "}
                                                {data.name}</Link>
                                        </li>
                                    ))
                                }
                                {/*Dropdown*/}
                                <li className='relative cursor-pointer group'>
                                    <Link to="#" className='flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black
                                     dark:hover:text-white py-2'>
                                        Quick Links
                                    <span>
                                        <FaCaretDown className="group-hover: rotate-100 duration-300"/>
                                    </span>
                                    </Link>
                                    {/*Dropdown links*/}
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                        <ul className='space-y-2'>
                                            {
                                                DropdownLinks.map((data, index)=>(
                                                    <li>
                                                        <Link
                                                         className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 
                                                         hover:bg-primary/20 rounded-md font-semibold"
                                                         to={data.link}>{data.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>
                {/*Navbar Right section*/}
                <div className='flex justify-between items-center gap-4'>
                    {/*Search bar section*/}
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder="Search" className='
                        search-bar' />
                        <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
                        
                        />
                        </div>       
                    
                    {/*Sign in*/}
                    <div>
                    <Link to="/signin" className='flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black
                                     dark:hover:text-white py-2'>
                                        Sign up
                                    </Link>
                    </div>
                    {/*Order button section*/}
                    <Link to="/cart">
                    <button className="relative p-3">
                        <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                        <div
                            className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs" > {products.length > 0 ? products.length: 0}
                        </div>
                    </button>
                    
                    
                    </Link>
                    


                    {/*Dark mode section*/}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar