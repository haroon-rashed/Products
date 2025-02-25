import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

const Products = () => {

    const api = "https://dummyjson.com/products";
    const [products ,setProducts ] =  useState([]);

    const getProducts = async () =>{
        const response = await fetch(api);
        const data = await response.json();
        setProducts(data.products);
    }
    
    useEffect(() => {
        getProducts();
    });

  return (
    <>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
      {products?.map((item, index) =>{
        return(
            <SingleProduct {...item}  key={index}/>
        )
      })}
    </div>
    </>
  )
}

export default Products
