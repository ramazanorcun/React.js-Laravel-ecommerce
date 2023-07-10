import React from 'react'
import AdminProduct from "../Components/Admin/AdminProduct";
import { useSelector } from 'react-redux';

const Product = () => {
  const error = useSelector(state => state.product.error);
    
  return (
    <div>
        {error && <div>{error}</div>}
        <AdminProduct   />
        
    </div>
  )
}

export default Product
