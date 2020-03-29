import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

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
      <Carousel>
        <Carousel.Item>
          <div class="slide"></div>
          <Carousel.Caption>
            <h3>Education</h3>
            <p>A few highlights from my education. For more detail, see the GitHub/Linkedin links below.</p>
            <CardDeck class="slide_class">
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Makers</Card.Subtitle>
                <Card.Text class="card_text">
                  <ul>
                    <li>OOP, MVC, TDD</li>
                    <li>Languages: Ruby, JavaScript, SQL</li>
                  </ul>
                  Hello
                </Card.Text>
                Hello
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">University of Warwick</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Bancroft's School</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </CardDeck>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div class="slide2"></div>
          <Carousel.Caption>
            <h3>Experience</h3>
            <p>A few highlights from my working life. For more detail, see the GitHub/Linkedin links below.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <div class="slide3"></div>

          <Carousel.Caption>
            <h3>Skills</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <br></br>
      <div class="container">
          <a href="https://github.com/jasylwong/cv" target="_blank"><img src={github} /></a>
          <a href="https://www.linkedin.com/in/jasylwong/" target="_blank"><img src={linkedin} /></a>
          <a href="https://www.codewars.com/users/jasylwong" target="_blank"><img src={codewars} /></a>
          <a href="https://medium.com/@jasylwong" target="_blank"><img src={Monogram} /></a>
      </div>
    </div>
  )
}

export default CV;