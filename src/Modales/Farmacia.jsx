import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ModalComponent({Id, Nombre, Apellido, Estado, Descripcion, Alergias}) {
  const [showModal, setShowModal] = useState(false);
  const Api = "https://apieventos-y9x9.onrender.com/"

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const Guardar = async () => {
    if(Descripcion){
        try {
            const send = await axios.post(Api + "RealizarExamenes", {Id, Estado})
            closeModal()
            alert(send.data.message)
        } catch (error) {
        alert('Error al ejecutar esta accion', error);
        }
    }
    
  }

  return (
    <div>
      <button type="button" className="btn btn-success" onClick={openModal}>
        Ver
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
                Medicamento para el paciente {Nombre} {Apellido}
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
                            required
                        />
                        </div>
                </div>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={Guardar}>Entregados</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;