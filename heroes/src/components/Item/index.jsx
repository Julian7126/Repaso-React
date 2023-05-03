import React from "react";
import "./styles.scss";
//Card
const Item = ({ product }) => {
  return (
    <>
      <div className="contenedor-hijo">
        <p key={product.id}> <img src={product.image} alt="" /></p>
        <h1 className="name">{product.name}</h1>
        <section>{product.species}</section>
        <h2>{product.status}</h2>
      </div>
    </>
  );
};

export default Item;
