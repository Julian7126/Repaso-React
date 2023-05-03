import React, { useEffect, useState } from "react";
import "../ItemListContainer/styles.scss";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
// import ItemDetailConteiner from "../ItemDetailContainer";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  console.log(categoryId);

  // // UseEffect en montaje

  // useEffect(() => {
  //   console.log("Se ejecuta el montaje");
  // }, []);

  // // UseState

  // const [nombre, setNombre] = useState("Julian");

  // const clicCambioNombre = () => {
  //   if (nombre === "Rodrigo") setNombre("Julian");
  //   else setNombre("Rodrigo");
  // };

  // const onAdd = (cantidad) => {
  //   console.log(`Se agrego ${cantidad}`);
  // };

  // useEffect(() => {
  //   (async () => {
  //     const obtenerProductos = () => {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           resolve(rawProducts);
  //         }, 3000);
  //       });
  //     };

  //     const response = await obtenerProductos();
  //     setProducts(response)
  //   })();
  // }),
  //   [];

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
