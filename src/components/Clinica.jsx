import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Enfermeria() {
  const [data, setData] = useState([]);
  const Api = "https://apieventos-y9x9.onrender.com/"


  useEffect(() => {
    async function ListarPacientes() {
      try {
          const response = await axios.post(Api + "/ListPacientesDoc"); 
        setData(response.data);
        
      } catch (error) {
        console.error('Error:', error);
      }
    }

    ListarPacientes();
  }, [data]);

  return (
    <div className='container'> <br /><br />
      <h1 className="mb-4">Listado de Pacientes</h1>
      
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>No.</th>
            <th>Primer Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Tipo de Consulta</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(data => (
            <tr key={data.ID}>
              <td>{data.ID}</td>
              <td>{data.NOMBRE1}</td>
              <td>{data.APELLIDO1}</td>
              <td>{data.APELLIDO2}</td>
              <td>{data.MOTIVO}</td>
              <td>{data.ESTADO1 == 2 ? ("Pendiente") : ("Pendiente Resultados")}</td>
              <td><Link to={`/Expediente/${data.ID}`} className="btn btn-outline-primary">Expediente</Link> </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    
  );
}

export default Enfermeria;