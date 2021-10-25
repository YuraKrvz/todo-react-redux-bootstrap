import React, {useState}  from 'react';
import { useDispatch } from 'react-redux';
import {removeTodo, changeCompleted} from '../../store/actions';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from '../Modal';

const Todo = ({todo})=> {
  const [show, setShow] = useState(false);
  const handlerModal = () => setShow(!show);
  const dispatch = useDispatch();
  const handlerCompleted = () => dispatch(changeCompleted(todo));
  const handlerDelete = (id)=> dispatch(removeTodo(id));

  return (
    <>
      <ListGroup className="mt-3" key={todo.id}>
         <ListGroup.Item className="d-flex justify-content-between">
            <p className={todo.completed ? 'text-through text-center' : 'd-flex justify-content-center'}>{todo.title}</p>
            <span>
            <Form.Check type="checkbox" label="has done" checked={todo.completed} onChange={()=> handlerCompleted(todo)}/>
            <Button variant="outline-secondary" onClick={handlerModal}>edit</Button> 
            <Modal todo={todo} show={show} onHide={handlerModal} />
            <Button variant="outline-secondary" onClick={()=> handlerDelete(todo.id)}>delete</Button> 
            </span>
         </ListGroup.Item>
      </ListGroup>      
    </>
  );
}

export default Todo;