import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalComponent({Id, Nombre, Apellido}) {
  const [showModal, setShowModal] = useState(false);
  const Api = "https://apieventos-y9x9.onrender.com/ApiJornadaICAT/"
  const [Descripcion, setDescripcion] = useState("")

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    Limpiar()
    setShowModal(false);
  };

  const Guardar = async () => {
    if(Descripcion){
        try {
            const send = await axios.post(Api + "InsertLaboratorioPaciente", {Id, Descripcion})
            Limpiar()
            alert(send.data.message)
        } catch (error) {
        alert('Error al ejecutar esta accion', error);
        }
    }
    
  }

  const Limpiar = () => {
    setDescripcion("")
  }


  return (
    <div>
      <button type="button" className="btn btn-success" onClick={openModal}>
        Examenes de Laboratorio
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
                Examenes para el paciente {Nombre} {Apellido}
              </h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className='container p-12'>
                <div className='row'>

                        <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripcion:</label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={Descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
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