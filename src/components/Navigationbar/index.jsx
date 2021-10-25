import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from '../Modal';
import AddTodo from '../AddTodo';

const Navigationbar = ()=> {
  const [show, setShow] = useState(false);
  const handlerModal = () => setShow(!show);

  return (
   <>
   <Navbar bg="dark" variant="dark">
     <Container>
     <Navbar.Brand href="/" className="text-primary">Todo application</Navbar.Brand>
     <Nav className="me-auto">
       <Nav.Link href="/">Home</Nav.Link>
       <Modal show={show} onHide={handlerModal} >{<AddTodo handlerModal={handlerModal} />}</Modal>
       <Button variant="outline-primary secondary" onClick={handlerModal} >Create todo</Button>
       <Nav.Link href="/todo-list">List todo`s</Nav.Link>
       
     </Nav>
     </Container>
   </Navbar>
   </>
  );
}

export default Navigationbar;