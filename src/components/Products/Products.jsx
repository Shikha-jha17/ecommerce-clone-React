import React from 'react'
import Heading from "../Shared/Heading.jsx"
import ProductCard from './ProductCard.jsx'
import Img1 from "../../assets/product/p-1.jpg"
import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"
import Img5 from "../../assets/product/p-5.jpg"
import Img6 from "../../assets/product/p-7.jpg"
import Img7 from "../../assets/product/p-9.jpg"
import { useDispatch } from 'react-redux';

const ProductsData =[
  {
    id: 1,
    img: Img1, 
    title: "Boat Rockerz 450",
    description: "boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Don't just be loud, be loud and clear.",
    price: "120",
    aosDelay: "0",
  }, 
  {
    id: 2,
    img: Img2, 
    title: "Boat SmartWatch 350",
    description: "Boat SmartWatch 350 provides the best user experience. Way to go to live your best and productive life through this smart watch.",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3, 
    title: "Gateway Heaven",
    description: "Gateway to Heaven headphones are designed to play Up to 16 hours. It has a High Definition Sound. Don't just be loud, be loud and clear.",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4, 
    title: "Plain Simple",
    description: "Plain and Simple headphones allow you to enjoy heavenly music without putting a dent on your pocket.",
    price: "220",
    aosDelay: "600",
  },

]

const ProductsData2 =[
  {
    id: 1,
    img: Img5, 
    title: "Boat Classic",
    description: "boAt Classic bluetooth headphones are designed to play Up to 16 hours. It has a High Definition Sound. Gives vintage feel with modern technology",
    price: "120",
    aosDelay: "0",
  }, 
  {
    id: 2,
    img: Img6, 
    title: "Rocky Mountain",
    description: "boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Don't just be loud, be loud and clear.",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7, 
    title: "Sleek phones",
    description: "These bluetooth headphones won't give you a run for your money, but others run for your class.",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4, 
    title: "Boat Rockerz 550",
    description: "boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Don't just be loud, be loud and clear.",
    price: "220",
    aosDelay: "600",
  },

]

const Products = () => {
  
  return (
    <div className='container'>
        {/*Header Section*/}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/*Body Section*/}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
    </div>
  )
}

export default Products