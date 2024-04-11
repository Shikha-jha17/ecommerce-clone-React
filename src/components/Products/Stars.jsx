import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";




const Stars = ({ stars, count }) => {

    const ratingStar = Array.from({length:5}, (elem, index)=>{

        let number = index + 0.5;

        return (
            <span key={index} className='inline-flex'>
                {
                    stars >= index + 1
                    ? <FaStar className="icon fill-amber-500"/>
                    : stars >= number 
                    ? <FaStarHalfAlt className="icon fill-amber-500" />
                    : <AiOutlineStar className="icon fill-amber-500" />
                }
            </span>
        )


    })
    
  return (
    <div>
        <div className="icon-style justify-between items-center">
            {ratingStar}
            <p className=''>  {count} reviews </p>

        </div>
    </div>
        

       
    
  )
}

export default Stars