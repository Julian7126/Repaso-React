import React, { useState } from "react";
import "./styles.scss";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({ productDetail }) => {

  // const navigateCard=useNavigate();

  const [quantityReset, setQuantityReset] = useState(0)


  const confirmPurchase = (quantity) => {
    console.log(quantity);
    setQuantityReset(quantity);
  };


  return (
    <div className="item-detail">
      <img src={productDetail.image} width={300} alt="" />
      <h1>{productDetail.name}</h1>

    { quantityReset ?  <button as="/card" className="button-carrito"> Go to buy</button> :

      <ItemCount initial={1} stock={50} onAddStock={confirmPurchase} />

    }


    </div>
  );
};

export default ItemDetail;
