import React, { useState, useCallback }from 'react';
import './tours.css';
import Formulario from './formulario.js';


const Tours = ({tours}) => {
  const [readMore, setReadMore] = useState([]);
  const [showFormulario, setShowFormulario] = useState([]);

  /*const cambioFormulario = (index) => {
    setShowFormulario(true);
  }*/

  const MostrarTexto = useCallback(
    index => {
      const readmore = [...readMore]
      readmore[index] = !readMore[index]
      setReadMore(readmore)

    },
    [],
  )
  const cambioFormulario = useCallback(
    index => {
      const mostrarformulario = [...showFormulario]
      mostrarformulario[index] = !showFormulario[index]
      setShowFormulario(mostrarformulario)

    }, [],
  )
   


  return (
    <section className="section">
      <div>
        <h1 className="title">NUESTROS TOURS</h1>
        <div className="linea"/>
      </div>
      <div className="excursiones">
        {tours.map((tour, index)=>
          <div key={tour.id} {...tour} className="excursion">
            <img src={tour.imagen} className="tour-img"/>
            <h2>{tour.nombre}</h2>
            <h4 className="tour-descripcion">
              {readMore[index] ? tour.descripcion:`${tour.descripcion.substring(0,200)} ... `}
              <button className="btn-read" onClick={() => MostrarTexto(index)}>
                {readMore[index] ? ' Show less' : ' Read more'}
              </button>
            </h4>
            <div className="contenedor-price"> 
              <h4 className="tour-price">{tour.price}</h4>
            </div>
            <button className="btn-interest" onClick={() => cambioFormulario(index)}>Solicitar mas información</button>
            {showFormulario[index] ? 
              <div>
                <Formulario/> 
                {/*<button>mostrar menos</button> */}
              </div>
            : <div/>}
              
            
          </div>
        )}
      </div>
    </section>
  )
}

export default Tours
