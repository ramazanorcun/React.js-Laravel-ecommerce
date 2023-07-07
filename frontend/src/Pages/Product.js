import React from 'react'
import AdminAddProduct from "../Components/AdminAddProduct";
import { useSelector } from 'react-redux';

const Product = () => {
  const error = useSelector(state => state.product.error);
    
  return (
    <div>
        {error && <div>{error}</div>}
        <AdminAddProduct   />
        
    </div>
  )
}

export default Product
