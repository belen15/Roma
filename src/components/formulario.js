import React, { useState, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import './formulario.css';

const Formulario = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [Entradas, setEntradas] = useState([])

  const onSubmit = useCallback((data, e) => {
    console.log(data);
    setEntradas([
      ...Entradas,
      data
    ])
    e.target.reset();
    reset();
  }, [Entradas])

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="nombre"
          placeholder="Ingrese Nombre"
          className="form-control form-nombre"
          autoComplete="off"
          {...register("nombre", {
            required: { value: true, message: 'Ingrese nombre' },
            minLength: { value: 3, message: 'Minimo 3 caracteres' },
          })}
        ></input>
        

        <input
          name="telefono"
          type="number"
          placeholder="Ingrese Telefono"
          className="form-control form-numero"
          autoComplete="off"
          {...register("telefono", {
            required: { value: true, message: 'Ingrese telefono' },
            minLength: { value: 9, message: 'El numero ingresado no es correcto' },
            maxLength: { value: 9, message: 'El numero ingresado no es correcto' },
          })}
        />
        <div className="errores">
          <span className="error">{errors.nombre?.message}</span>
          <span className="error">{errors.telefono?.message}</span>
        </div>
        
        <button className="btn-form">Agregar</button>
        
      </form>
    </div>
  )
}

export default Formulario;
