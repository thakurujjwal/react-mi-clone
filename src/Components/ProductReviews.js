import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../Style/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
    return (
        <div className="ProductReviews">
            {productReviews.map((item, index) => (
                <ProductReviewCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} review={ item.review}/>
           ))} 
            
        </div>
    )
}

export default ProductReviews
