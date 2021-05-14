import React, { Fragment } from 'react';

const Formulario = () => {
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
        />

        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Propietario"
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
        />

        <label>Síntomas</label>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment> 
 );
}
 
export default Formulario;
