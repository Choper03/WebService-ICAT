import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalComponent({Id, Nombre, Apellido}) {
  const [showModal, setShowModal] = useState(false);
  const Api = "http://localhost:4000/ApiJornadaICAT/"
  const [Presion, setPresion] = useState("")
  const [Temperatura, setTemperatura] = useState("")
  const [Altura, setAltura] = useState("")
  const [Peso, setPeso] = useState("")
  const [Alergias, setAlergias] = useState("")

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    Limpiar()
    setShowModal(false);
  };

  const Guardar = async () => {
    if(Presion && Temperatura && Altura && Peso && Alergias){
        try {
            const send = await axios.post(Api + "InsertSignos", {Id, Presion, Temperatura, Altura, Peso, Alergias})
            Limpiar()
            alert(send.data.message)
        } catch (error) {
        alert('Error al ejecutar esta accion', error);
        }
    }
    
  }

  const Limpiar = () => {
    setPresion("")
    setTemperatura("")
    setPeso("")
    setAltura("")
    setAlergias("")
  }


  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Completar
      </button>

      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" >
                Complete la siguiente información del paciente {Nombre} {Apellido}
              </h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className='container p-12'>
                <div className='row'>

                        <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Presion:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Presion}
                            onChange={(e) => setPresion(e.target.value)}
                            required
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Temperatura:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={Temperatura}
                            onChange={(e) => setTemperatura(e.target.value)}
                            required
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Altura en centímetros:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={Altura}
                            onChange={(e) => setAltura(e.target.value)}
                            required
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Peso en kilos:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={Peso}
                            onChange={(e) => setPeso(e.target.value)}
                            required
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Alergias:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Alergias}
                            onChange={(e) => setAlergias(e.target.value)}
                            required
                        />
                        </div>
                </div>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={Guardar}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;