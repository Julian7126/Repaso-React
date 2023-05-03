import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';





const ItemCount = ({ stock, initial, onAdd }) => {


    const [count, setCount] = useState(initial)


        const handleClickCountMore= () => {

        if (stock > count){
            setCount(count +1);
        }
            

    }


        const handleClickCountLess=()=>{

        if ( count > 1 ){
            setCount(count -1);

        }



    }


        const onAddstock =()=> {
        onAdd(count);

    }





    return (
        <>
            <div>
                <span>Contador</span>
                <div className="mb-2">
                    <Button variant="outline-success" onClick={handleClickCountMore} >+</Button>{' '}

                    <label className='contadorDeStock'>{count}</label>

                    <Button variant="outline-warning" onClick={handleClickCountLess}>-</Button>{' '}

                </div>

                <Button variant="outline-dark" onClick={onAddstock}>Agregar al Carrito </Button>

            </div>

        </>

    );
}

export default ItemCount