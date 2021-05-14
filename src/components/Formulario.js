import React, { Fragment, useState } from 'react';

const Formulario = () => {

  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  // Función que se ejecuta cada vez que el usuario ejecuta un input
  const actualizarState = () => {
    console.log('excribiendo...');
  } 

  return (
    <Fragment>
      <h1>Desde Formulario</h1>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
        />

        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Propietario"
          onChange={actualizarState}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />

        <label>Síntomas</label>
        <textarea
          type="text"
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment> 
 );
}
 
export default Formulario;
