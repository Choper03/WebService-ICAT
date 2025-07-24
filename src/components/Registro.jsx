import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Registro() {
const [Nombre1, setNombre1] = useState("")
const [Nombre2, setNombre2] = useState("")
const [Apellido1, setApellido1] = useState("")
const [Apellido2, setApellido2] = useState("")
const [DPI, setDPI] = useState("")
const [Nacimiento, setNacimiento] = useState("")
const [Direccion, setDireccion] = useState("")
const [Motivo, setMotivo] = useState("")
const Api = "http://localhost:4000/ApiJornadaICAT/"

const Limpiar = () =>{
    setNombre1("")
    setNombre2("")
    setApellido1("")
    setApellido2("")
    setDPI("")
    setDireccion("")
    setMotivo("")
}

const Guardar = async (event) => {
    event.preventDefault(); 
    if(Nombre1 && Apellido1 && DPI && Nacimiento && Direccion && Motivo){
        const send = await axios.post(Api + '/InsertPaciente', {Nombre1, Nombre2, Apellido1, Apellido2, DPI, Nacimiento, Direccion, Motivo})
        alert(send.data.message)
        Limpiar()
    } else {
        alert("Complete todos los campos que contienen *")
    }
}

  return (
    <div>
      <h1>Registro de Pacientes</h1><br />
      <div className='row'>
        <div className='col-sm-6'>
                <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Primer Nombre *</label>
                    <input
                    type="text"
                    className="form-control"
                    value={Nombre1}
                    onChange={(e) => setNombre1(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Segundo Nombre </label>
                    <input
                    type="text"
                    className="form-control"
                    value={Nombre2}
                    onChange={(e) => setNombre2(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Primer Apellido *</label>
                    <input
                    type="text"
                    className="form-control"
                    value={Apellido1}
                    onChange={(e) => setApellido1(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Segundo Apellido </label>
                    <input
                    type="text"
                    className="form-control"
                    value={Apellido2}
                    onChange={(e) => setApellido2(e.target.value)}
                    required
                    />
                </div>
                <div className='mb-3'>
                    <button className='btn btn-danger' onClick={Limpiar}>Cancelar</button>
                </div>
        </div>
        <div className='col-sm-6'>
                <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">DPI *</label>
                    <input
                    type="number"
                    className="form-control"
                    value={DPI}
                    onChange={(e) => setDPI(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Fecha de Nacimiento *</label>
                    <input
                    type="date"
                    className="form-control"
                    value={Nacimiento}
                    onChange={(e) => setNacimiento(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Direccion *</label>
                    <input
                    type="text"
                    className="form-control"
                    value={Direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Presentacione" className="form-label">Tipo de Consulta *</label>  
                        <select
                        className="form-select"
                        value={Motivo}
                        onChange={(e) => setMotivo(e.target.value) }
                        required
                        >
                        <option value="">Seleccione una opción</option>
                        <option value="Consulta General">Consulta General</option>
                        <option value="Pie Diabetico">Pie Diabetico</option>
                        </select>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-primary' onClick={Guardar}>Guardar</button>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;