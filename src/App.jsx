import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    dpi: '',
    edad: '',
    telefono: '',
    direccion: '',
    motivo: '',
    presion: '',
    glucosa: '',
    otros: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://apieventos-y9x9.onrender.com/Api/InsertPacientes',{ nombre: formData.nombre,
        dpi: formData.dpi,
        edad: formData.edad,
        telefono: formData.telefono,
        direccion: formData.direccion,
        motivo: formData.motivo,
        presion: "**",
        glucosa: "**",
        otros: formData.otros})
      console.log(response.data)
      alert("Se agrego correctamente")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mt-5">
      <h3>Datos de Pacientes</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="dpi" className="form-label">DPI</label>
          <input type="text" className="form-control" id="dpi" name="dpi" value={formData.dpi} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad</label>
          <input type="text" className="form-control" id="edad" name="edad" value={formData.edad} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input type="text" className="form-control" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="motivo" className="form-label">Motivo</label>
          <input type="text" className="form-control" id="motivo" name="motivo" value={formData.motivo} onChange={handleChange} />
        </div>
        
        <div className="mb-3">
          <label htmlFor="otros" className="form-label">Otros</label>
          <input type="text" className="form-control" id="otros" name="otros" value={formData.otros} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default App
