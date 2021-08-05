import React from "react";
import '../Style/StarProducts.css'
const StarProducts = ({ starProduct }) => {
    return (
        <div className="starProduct">
            <div><a href={starProduct[0].url}><img src={starProduct[0].image} alt={`0 star product`} /></a></div>
            <div><a href={starProduct[1].url}><img src={starProduct[1].image} alt={`1 star product`} /></a>
                 <a href={starProduct[2].url}><img src={starProduct[2].image} alt={`2 star product`} /></a>
                 <a href={starProduct[3].url}><img src={starProduct[3].image} alt={`3 star product`} /></a>
            
            
            </div>
        </div>
    );
};

export default StarProducts;

