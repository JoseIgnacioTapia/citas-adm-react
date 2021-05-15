import { Fragment, useState } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  // Array de citas
  const [citas, guardarCitas] = useState([]);

  // Función que tome las citas actuales y agregue as nuevas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }
  
  // Funcion para eliminar una cita por su id
  const eliminarCita = id => {
    const nuevaCita = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevaCita);
  };

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus Citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
