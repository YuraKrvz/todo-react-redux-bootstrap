import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigationbar = ()=> {
 
  return (
   <>
   <Navbar bg="dark" variant="dark">
     <Container>
     <Navbar.Brand href="/" className="text-primary">Todo application</Navbar.Brand>
     <Nav className="me-auto">
       <Nav.Link href="/">Home</Nav.Link>
       <Nav.Link href="/add-todo">Adding todo</Nav.Link>
       <Nav.Link href="/todo-list">List todo`s</Nav.Link>
     </Nav>
     </Container>
   </Navbar>
   </>
  );
}

export default Navigationbar;