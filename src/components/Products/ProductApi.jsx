import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ProductApi = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async()=>{
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data); // Update products state with fetched data
        console.log('Fetched products:', res.data);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
  
    getProducts();
  }, []);
  
  return (
    <div>
    {/*products : [products,setProducts]*/}
    
    </div>
    
  )
}

export default ProductApi