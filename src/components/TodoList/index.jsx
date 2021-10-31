import React from 'react';
import { useSelector } from 'react-redux';
import Navigationbar from '../Navigationbar';
import Container from 'react-bootstrap/Container';
import Todo from '../Todo';

const TodoList = ()=> {
  const todos = useSelector(state => state.mainReducer);
  
  return (
    <>
      <Navigationbar /> 
      <Container className="w-75 p-3">
        {todos.todos.map(todo => <Todo todo={todo} key={todo.id} /> )}
      </Container>
    </>
  );
}

export default TodoList;