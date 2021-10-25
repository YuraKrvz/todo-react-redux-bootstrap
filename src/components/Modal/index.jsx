import React from 'react';
import Modal from 'react-bootstrap/Modal';


const ModalWindow = ({children, show, onHide})=> {
 
  return (
   <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
      <Modal.Title>Editing todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      
   </Modal>
  );
}

export default ModalWindow;