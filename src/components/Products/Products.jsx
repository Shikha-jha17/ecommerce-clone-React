import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../GlobalState.jsx'
//import  products  from '../Products/ProductApi.jsx'
//import ProductList from '../Products/ProductUtils/ProductList.jsx'
import Stars from '../Products/Stars.jsx'
import { Link } from 'react-router-dom'


const Products = () => {
  const { products } = useContext(GlobalState);

  //const products = state.ProductApi.products;
  //const products = Products ? Products.products : [];

  //console.log('Products:', products);
  //const [ products ] = state;

  //const products = state;

  //console.log(state)
  //console.log(products);
  return (
    <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center mx-auto '>
            {/*card section*/}
            {products.map((product) => (
                <div className="group " key={product.id}
                product-aos="fade-up"
                  product-aos-delay={product.aosDelay}>
                  <div className='relative '
                  
                  >
                    <img src={product.image} alt=" " 
                    className="h-[180px] w-[260px] p-4  rounded-md object-contain"
                    />
                    {/*hover-button*/}
                    <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 cursor-pointer' >
                    {/*<button onClick={()=>dispatch(addToCart({
                      id:product.id,
                      image:product.image,
                      title: product.title,
                      description: product.description,
                      price: product.price,
                      quantity: 1
                    }

                    ))}
                    className='bg-primary text-white cursor-pointer
    hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 '>
                      Add to Cart
                  </button>*/}


                        {/*<Button 
                        text={"Add to Cart"}
                        bgColor={"bg-primary"}
                        textColor={"text-white"}
            />*/}
                    </div>
                  </div>
                  <div className='leading-7'>
                    <Link to="/productdetails"> 
                    <p className=' text-md xl:pr-10 line-clamp-1 text-gray-700'>{product.title}</p>
                    </Link>
                    <p> <Stars stars={product.rating.rate} count={product.rating.count}/> </p>
                    <h2 className='font-semibold text-2xl text-gray-800'>${product.price}</h2>
                  </div>


                </div>

            ))}
        
            
        </div>
          
        
    </div>
  )
}

export default Products