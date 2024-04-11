import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data.productId);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product-details'>
      {product.map((product) => (
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

  );
};

export default ProductDetails;
