import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from '../components/Navigationbar';
import AddTodo from '../components/AddTodo';

const AddTodoPage = ()=> {
 
  return (
    <>
      <Navbar />
      <Container>
         <AddTodo />
      </Container>
    </>
  );
}

export default AddTodoPage;