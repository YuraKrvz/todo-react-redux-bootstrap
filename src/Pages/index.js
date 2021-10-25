import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigationbar from '../components/Navigationbar';

const Home = ()=> {

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