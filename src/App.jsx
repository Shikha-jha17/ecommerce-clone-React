import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
//import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Image_hp from "./components/headphone2.png"
import Image_hp2 from "./assets/category/smartwatch2-removebg-preview.png"
import Products from "./components/Products/Products.jsx"
import Blogs from "./components/Blogs/Blogs.jsx"



const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Image_hp,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  bgColor: "#f42c37", 

};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: Image_hp2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  bgColor: "#2dcc6f", 

};


const App = ()=> {
  return(
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar/>
      <Hero />
      <Category />
      <Category2 />
      <Banner data={BannerData}/>
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  )
};

export default App;
