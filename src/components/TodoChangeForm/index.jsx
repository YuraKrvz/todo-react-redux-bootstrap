import React,{useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../store/actions';

const TodoChangeForm = ({todo, onHide})=> {
   const dispatch = useDispatch();
   const [todoTitle, setTodoTitle] = useState(todo.title);
   const handlerInput = e => setTodoTitle(e.target.value)
   const handlerChange = ()=> {
      dispatch(editTodo({title: todoTitle, id: todo.id}))
      console.log({title: todoTitle, id: todo.id})
      onHide();
   }
  return (
    <>
    <ListGroup className="mt-3">
         <ListGroup.Item className="d-flex justify-content-between bg-secondary">
            <Form.Control type="text" placeholder="title todo" value={todoTitle} onChange={handlerInput}/>
         </ListGroup.Item>
         <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
               Close
            </Button>
            <Button variant="primary" onClick={handlerChange}>
               Save Changes
            </Button>
         </Modal.Footer>
      </ListGroup>      
    </>
  );
}

export default TodoChangeForm;