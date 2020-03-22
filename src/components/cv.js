import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import codewars from '../images/codewars.png';
import Monogram from '../images/Monogram.svg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function CV() {
  return (
    <div>
      <br></br>
      <h1 class="titles">Curriculum Vitae</h1>
      <br></br>
      <div class="container">
          <img src={codewars} />
          <img src={Monogram} />
          <img src={linkedin} />
          <img src={github} />
      </div>


      {/* <Container fluid="md" class="container">
        <Row>
          <col><img src={codewars} /></Col>
          <Col><img src={Monogram} /></Col>
          <Col><img src={linkedin} /></Col>
          <Col><img src={github} /></Col>
        </Row>
      </Container> */}
    </div>
  )
}

export default CV;