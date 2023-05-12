import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import "./styles.scss"

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getProductDetail = async () =>{
        try {
          const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
          const productDetail= await response.json()
          setProductDetail(productDetail)
          
        } catch  {
          <span>Material No disponible</span>
          
        }
    }
     getProductDetail();

  }, [id]);

  return (
    
     <ItemDetail productDetail={productDetail}  />
    
  );
};

export default ItemDetailContainer;
