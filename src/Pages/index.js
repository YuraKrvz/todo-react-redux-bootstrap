import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navigationbar from '../components/Navigationbar';
import {setLocalStorage} from '../components/utils/localStorage';

const Home = ()=> {

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(res => {
      if(localStorage.length < 1){
        setLocalStorage('store', {todos: [...res]})
      }
    })
  }, []);


  return (
    <>
      <Navigationbar /> 
      <Container>
        <h1>don't forget anything</h1>
      </Container>
    </>
  );
}

export default Home;