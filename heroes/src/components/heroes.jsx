import React from 'react'

const Heroes = () => {
    const sujeto1 = {
        nombre: "Superman",
        poder: "Volar",
        edad: 25,
        planeta: "venus"
      };
      const sujeto2 = {
        nombre: "Batman",
        poder: "Manejar",
        edad: 25,
        planeta: "Tierra"
      };
      const sujeto3 = {
        nombre: "Flash",
        poder: "Correr",
        edad: 25,
        planeta: "Tierra"
      };
      const sujeto4 = {
        nombre: "Poseidon",
        poder: "Rey del Mar",
        edad: 25,
        planeta: "Saturno"
      };


    return (
        <>
        <h1>Super Heroes</h1>
                <hr />
            <div className='media'>
                <div className='"media-body'>
                    <h5 className='mt-0'> {sujeto1.nombre} </h5>
                    Esta es la presentacion de super heroes
                    <h6>{sujeto1.poder}</h6>
                    <h6>{sujeto1.planeta}</h6>
                    <h6>{sujeto1.edad}</h6>
                </div>
            </div>


                <hr />
            <div className='media'>
                <div className='"media-body'>
                    <h5 className='mt-0'> {sujeto2.nombre} </h5>
                    Esta es la presentacion de super heroes
                    <h6>{sujeto2.poder}</h6>
                    <h6>{sujeto2.planeta}</h6>
                    <h6>{sujeto2.edad}</h6>
                </div>
            </div>



                <hr />
            <div className='media'>
                <div className='"media-body'>
                    <h5 className='mt-0'> {sujeto3.nombre} </h5>
                    Esta es la presentacion de super heroes
                    <h6>{sujeto3.poder}</h6>
                    <h6>{sujeto3.planeta}</h6>
                    <h6>{sujeto3.edad}</h6>
                </div>
            </div>



                <hr />
            <div className='media'>
                <div className='"media-body'>
                    <h5 className='mt-0'> {sujeto4.nombre} </h5>
                    Esta es la presentacion de super heroes
                    <h6>{sujeto4.poder}</h6>
                    <h6>{sujeto4.planeta}</h6>
                    <h6>{sujeto4.edad}</h6>
                </div>
            </div>


        </>

    )
 }


export default Heroes