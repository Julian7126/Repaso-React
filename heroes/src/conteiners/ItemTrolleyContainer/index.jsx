import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/cartContext";
import Cart from "../../components/Cart";
import "./styles.scss";

const ItemTrolleyContainer = () => {
  const {products} = useContext(Shop);
  return (
    <div>
    {products.map(product => {
      return <Cart key={product.id} item={product} />;
    })}
    ;
  </div>
);

};

export default ItemTrolleyContainer;