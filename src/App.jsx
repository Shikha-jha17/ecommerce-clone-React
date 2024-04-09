import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home.jsx"
//import Services from "./components/Services/Services";
import Hero from "./components/Hero/Hero.jsx";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";
import Image_hp from "./components/headphone2.png"
import Image_hp2 from "./assets/category/smartwatch2-removebg-preview.png"
import Products from "./components/Products/Products.jsx"
import Blogs from "./components/Blogs/Blogs.jsx"
import SignIn from './components/Pages/SignIn.jsx'
import Registration from './components/Pages/Registration.jsx'
import Footer from "./components/Footer/Footer.jsx";
import Cart from './components/Pages/Cart.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { productsData } from "./components/Products/api.jsx"
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';




const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 April to 28 April",
  image: Image_hp,
  title2: "Air Solo Bass",
  title3: "Summer Sale",
  bgColor: "#f42c37", 

};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 April to 28 April",
  image: Image_hp2,
  title2: "Smart Solo",
  title3: "Summer Sale",
  bgColor: "#2dcc6f", 

};

const Layout =()=>{
  return (
    <div>
    <Navbar />
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
  }

const App = ()=> {

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,

      }

    );
    AOS.refresh();
  }, [])
    
      
    

  return(

    
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        
          <Routes>
              <Route path ="/" element={<Layout />} loader={() => productsData()}/>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/cart" element={<Cart />} />
              
              
          </Routes>
          
          
          
          
          
         
          
            
        </div>
        </Router>
        
      
      
    
    
    
  )
};

export default App;
