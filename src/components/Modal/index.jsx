import React from 'react';
import Modal from 'react-bootstrap/Modal';
import TodoChangeForm from '../TodoChangeForm';

const ModalWindow = ({todo, show, onHide})=> {
 
  return (
   <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
      <Modal.Title>Editing todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>{<TodoChangeForm todo={todo} onHide={onHide}/>}</Modal.Body>
      
   </Modal>
  );
}

export default ModalWindow;