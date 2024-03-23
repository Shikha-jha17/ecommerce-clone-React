import React from 'react'
import Heading from "../Shared/Heading.jsx"
import Img1 from "../Blogs/blog-1.jpg"
import Img2 from "../Blogs/blog-2.jpg"
import Img3 from "../Blogs/blog-3.jpg"



const BlogData = [
    {
        title: "How to choose perfect smartwatch",
        subtitle: "Look for a model that comes with an in-built Pedometer, Accelerometer, Heart Rate Monitor, etc. These features will help you measure and track activities like...",
        published: "July 20, 2023 by Shikha",
        image: Img1,
    },

    {
        title: "How to choose perfect gadget",
        subtitle: "Determine your needs: First, you need to determine your needs and what you want the gadget to do. For example, if you're looking for a laptop, ...",
        published: "July 27, 2023 by Shikha",
        image:Img2 ,
    },

    {
        title: "How to choose perfect VR headset",
        subtitle: "You want to buy a Virtual Reality headset, but you do not know which one to choose? In this article, we will help you guide your choice for the purchase of ...",
        published: "Aug 3, 2023 by Shikha",
        image: Img3,
    },

]

const Blogs = () => {
  return (
    <div className="my-12">
        <div className='container'>
        {/*Header Section*/}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
        {/*Blogs Section*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {/*Blog card*/}
            {BlogData.map((data) => (
                <div key={data.title} className='bg-white dark:bg-gray-900'>
                    {/*image section*/}
                    <div className='overflow-hidden rounded-2xl mb-2'>
                        <img src={data.image} alt=""
                        className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                        />

                    </div>
                    {/*content section*/}
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                   </div>
                
                </div>
                
                ))
            }

        </div>



    </div>
    </div>
    

  )
}

export default Blogs