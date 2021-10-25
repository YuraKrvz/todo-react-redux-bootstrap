import React, {useState}  from 'react';
import { useDispatch } from 'react-redux';
import {removeTodo, changeCompleted} from '../../store/actions';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from '../Modal';
import TodoChangeForm from '../TodoChangeForm';

const Todo = ({todo})=> {
  const [show, setShow] = useState(false);
  const handlerModal = () => setShow(!show);
  const dispatch = useDispatch();
  const handlerCompleted = () => dispatch(changeCompleted(todo));
  const handlerDelete = (id)=> dispatch(removeTodo(id));
//style={{verticalAlign: 'middle', textAlign: 'center'}}
  return (
    <>
      <ListGroup className="mt-3" key={todo.id}>
         <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light">

              <Form.Check type="checkbox" label="&nbsp;" checked={todo.completed} onChange={()=> handlerCompleted(todo)}/>
              <p className={todo.completed ? 'text-through text-center mt-2' : 'd-flex justify-content-center mt-2'}>{todo.title}</p>

            <div>
              <Button variant="outline-secondary" className="btn btn-warning text-dark" onClick={handlerModal}>edit</Button> 
              <Modal show={show} onHide={handlerModal} >{<TodoChangeForm todo={todo} onHide={handlerModal}/>}</Modal>
              <Button variant="outline-secondary" className="btn btn-danger text-dark" onClick={()=> handlerDelete(todo.id)}>delete</Button> 
            </div>

         </ListGroup.Item>
      </ListGroup>      
    </>
  );
}

export default Todo;