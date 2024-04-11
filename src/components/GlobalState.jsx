import { createContext } from "react";
import ProductApi from "../components/Products/ProductApi.jsx"
import { useState , useEffect} from 'react'
import axios from 'axios';

export const GlobalState = createContext()

export const DataProvider = ({children}) => {

    //const [token, setToken] = useState(false)
    const [products, setProducts] = useState([]);


    {/*const state = {
        //token: [token, setToken],
        products: [products, setProducts],
        productApi: ProductApi()
    }*/}

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
            console.log('Fetched products:', res.data); // Add this line for debugging
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchProducts();
      }, []);

   
    
    return(
        <GlobalState.Provider value={{ products, setProducts }}>
            {children}
            < ProductApi />
        </GlobalState.Provider>
    )
      
}