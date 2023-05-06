import React from 'react'
import "./styles.scss";

const ItemDetail = ({productDetail}) => {
  console.log(productDetail);
  return (
    <div className='item-detail'>
  
            
      <img src={productDetail.image} width={300} alt="" /> 
       <h1>{productDetail.name}</h1>

    </div>
  
  )
}

export default ItemDetail