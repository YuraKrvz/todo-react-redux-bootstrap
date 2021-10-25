import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {addTodo} from '../../store/actions';

const AddTodo = ({handlerModal})=> {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch(); 
  const handlerAddTodo = () => {
    if(inputValue !== ''){
      dispatch(addTodo(inputValue));
      setInputValue('');
      handlerModal();
    }
  };
  const handlerInput = (e)=> setInputValue(e.currentTarget.value);

  return (
    <>
      <InputGroup className="mt-3">
         <FormControl
            placeholder="enter todo"
            aria-label="Recipient's username with two button addons"
            value={inputValue}
            onChange={handlerInput}
         />      
         
      </InputGroup>
      <Modal.Footer>
      <Button variant="outline-secondary" onClick={handlerModal}>Close</Button>
      <Button variant="primary" onClick={handlerAddTodo}>Add</Button>
      </Modal.Footer>
    </>
  );
}

export default AddTodo;