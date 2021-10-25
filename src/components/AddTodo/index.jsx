import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {addTodo} from '../../store/actions';

const AddTodo = ()=> {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch(); 
  const handlerAddTodo = () => {
    dispatch(addTodo(inputValue));
    setInputValue('');
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
         <Button variant="outline-secondary" onClick={handlerAddTodo}>Add</Button>
      </InputGroup>
      {}
    </>
  );
}

export default AddTodo;