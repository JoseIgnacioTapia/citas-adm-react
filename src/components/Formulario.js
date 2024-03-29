import React, { Fragment, useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });
  const [error, actualizarError] = useState(false);

  // Función que se ejecuta cada vez que el usuario ejecuta un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  } 

  // Extraer datos de los inputs
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Función que se ejecuta cada vez que el usuario escribe en un input
  const submitCita = e => {
    e.preventDefault();
    
    // Validar
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true);
      return;
    } 

    actualizarError(false);

    // Asignar ID
    cita.id = uuidv4();

    // Crear la cita
    crearCita(cita);

    // Reiniciar form
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  }

  return (
    <Fragment>
      <h1>Crear Cita</h1>

      { error ? <h2 className="alerta-error">Todos los campos son obligatorios</h2> : null }

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Propietario"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          type="text"
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment> 
 );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}
 
export default Formulario;
