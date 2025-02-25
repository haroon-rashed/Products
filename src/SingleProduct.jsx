import React from 'react'
import StarRating from './StarRating'
import ReadMore from './ReadMore'

const SingleProduct = ({brand, rating, thumbnail, title, description, price, discountPercentage }) => {
  return (
    <div>
       <div className="shadow-xl p-4 rounded-md">
      <img src={thumbnail} className='w-full rounded-md border border-amber-400' alt="" />
      <h3 className="text-2xl capitalize">{brand}</h3>
      <p>{title}</p>
      <p>USD {price}</p>
      <p>Discount {discountPercentage} %USD</p>
      <StarRating rating={rating}/>
      <ReadMore description={description}/>
     </div> 
    </div>
  )
}

export default SingleProduct
