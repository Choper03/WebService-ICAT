import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signos from '../Modales/Signos.jsx';

function Enfermeria() {
  const [data, setData] = useState([]);
  const Api = "https://apieventos-y9x9.onrender.com/ApiJornadaICAT/";

  useEffect(() => {
    async function ListarPacientes() {
      try {
        const response = await axios.post(Api + "ListPacientesSignos");
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    ListarPacientes();
  }, []);

  return (
    <div className='container-fluid mt-4'>
      <h1 className="text-center mb-4">Listado de Pacientes</h1>

      <div className="table-responsive">
        <table className="table table-bordered border-primary table-hover align-middle">
          <thead className="table-primary text-center">
            <tr>
              <th>No.</th>
              <th>Primer Nombre</th>
              <th>Primer Apellido</th>
              <th className="d-none d-sm-table-cell">Segundo Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.ID}>
                <td>{index + 1}</td>
                <td>{item.NOMBRE1}</td>
                <td>{item.APELLIDO1}</td>
                <td className="d-none d-sm-table-cell">{item.APELLIDO2}</td>
                <td>
                  <Signos
                    Id={item.ID}
                    Nombre={item.NOMBRE1}
                    Apellido={item.APELLIDO1}
                    Motivo={item.MOTIVO}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Enfermeria;
