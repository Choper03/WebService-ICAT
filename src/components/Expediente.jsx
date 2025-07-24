import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Medicamento from "../Modales/Medicamento.jsx"
import Examenes from "../Modales/Examenes.jsx"
function Expediente() {

  const [data, setData] = useState([]);
  const [Paciente, setPaciente] = useState([])
  const Api = "https://apieventos-y9x9.onrender.com/ApiJornadaICAT/"
  const {Id} = useParams()
  var Edad =0;  
  useEffect(() => {
    async function fetchData() {
        const response = await axios.post(Api + "ListPacienteDoc", {Id});
        setData(response.data); 
        setPaciente(response.data[0])
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Datos del paciente:</h1>
      <div className='row'>
        <div className='col-sm-12'>
            <div className='mb-8'>
                <h3>Nombre Completo: {Paciente.NOMBRE1} {Paciente.NOMBRE2} {Paciente.APELLIDO1} {Paciente.APELLIDO2}</h3>
            </div>    
            <div className='mb-8'>
                <h3>Edad: {new Date().getFullYear() - new Date(Paciente.NACIMIENTO).getFullYear()} años <br />    Tipo de Consulta: {Paciente.MOTIVO}</h3>
            </div>
            <div>
            <table className="table table-bordered border-primary">
                <thead>
                <tr>
                    <th>Presion</th>
                    <th>Temperatura</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>Alergias</th>
                </tr>
                </thead>
                <tbody>
                {data.map(data => (
                    <tr key={data.ID}>
                    <td>{data.PRESION}</td>
                    <td>{data.TEMPERATURA}º</td>
                    <td>{data.ALTURA} cm</td>
                    <td>{data.PESO} kg</td>
                    <td>{data.ALERGIAS}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className='mb-8'>
                <div className='row'>
                    <div className='col'>
                        <Medicamento Id={Paciente.ID} Nombre={Paciente.NOMBRE1} Apellido={Paciente.APELLIDO1} />
                    </div>
                    <div className='col'>
                    <Examenes Id={Paciente.ID} Nombre={Paciente.NOMBRE1} Apellido={Paciente.APELLIDO1} />
                    </div>
                </div>
                <br /><br />
            </div>
        </div>

      </div>
      

    </div>
  );
}

export default Expediente;