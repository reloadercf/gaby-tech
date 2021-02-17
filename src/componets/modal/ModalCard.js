import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export const ModalCard = ({estado,show, handleClose}) => {

    return (
        <div>
            <Modal show={show} onHide={handleClose} className="modalContent">
                {/*<Modal.Header closeButton className="modalHeader">
                    <Modal.Title>{estado.name}</Modal.Title>
    </Modal.Header>*/}

                <Modal.Body className="modalBody">
                    <img src={estado.img} className="imgCard"/>
                    <p className="title">{estado.name}</p>
                    <p>{estado.description}</p>
                    <h5>{estado.totalOffsets} bonos emitidos </h5>
                </Modal.Body>

                <Modal.Footer className="modalFooter">
                    <Link to="/purchase">
                        <button  onClick={handleClose} className="btn btn-outline-success">
                            Comprar Bonos
                        </button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
