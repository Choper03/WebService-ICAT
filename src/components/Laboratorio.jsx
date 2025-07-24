import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import LaboratorioMod from '../Modales/LaboratorioMod.jsx'

function Laboratorio() {
  const [data, setData] = useState([]);
  const Api = "https://apieventos-y9x9.onrender.com/ApiJornadaICAT/"


  useEffect(() => {
    async function ListarPacientes() {
      try {
          const response = await axios.post(Api + "ListLaboratorioPaciente"); 
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
            <th>Segundo Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(data => (
            <tr key={data.ID}>
              <td>{data.ID}</td>
              <td>{data.NOMBRE1}</td>
              <td>{data.NOMBRE2}</td>
              <td>{data.APELLIDO1}</td>
              <td>{data.APELLIDO2}</td>
              <td>{data.ESTADO == 1 ?("Pendiente") : data.ESTADO == 2 ? ("Realizado") : ("Entregado")}</td>
              <td><LaboratorioMod Id={data.ID} Nombre={data.NOMBRE1} Apellido={data.APELLIDO1} Estado={data.ESTADO} Descripcion={data.DESCRIPCION} Alergias={data.ALERGIAS} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    
  );
}

export default Laboratorio;