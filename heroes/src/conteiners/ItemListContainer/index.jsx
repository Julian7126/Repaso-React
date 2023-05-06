import React, { useEffect, useState } from "react";
import "../ItemListContainer/styles.scss";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  console.log(categoryId);


  useEffect(() => {
    (async () => {
      try {
        let response;
        if (categoryId) {
          response = await fetch(
            `https://rickandmortyapi.com/api/character/?species=${categoryId}`);
        } else {
          response = await fetch(`https://rickandmortyapi.com/api/character`);
        }

        const data = await response.json();

        console.log(data);
        setProducts(data.results);
      } catch {
        <span>La app no esta disponible </span>;
      }
    })();
  }, [categoryId]);

  return (
    <>
      <div className="contenedor-padre">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
