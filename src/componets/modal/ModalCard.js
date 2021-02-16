import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


export const ModalCard = ({estado,show, handleClose}) => {

    return (
        <div>
            <Modal show={show} onHide={handleClose} className="modalContent">
                <Modal.Header closeButton>
                    <Modal.Title>{estado.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                   {estado.img}
                   {estado.description}
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Comprar
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
