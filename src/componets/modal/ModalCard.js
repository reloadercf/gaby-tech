import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


export const ModalCard = ({estado,show, handleClose}) => {

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{estado.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   {estado.description} ...!!!
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
