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
      <Carousel interval={null}>
        <Carousel.Item>
          <div class="slide"></div>
          <Carousel.Caption>
            <h3>Education</h3>
            <p>A few highlights from my education. For more detail, see the GitHub/LinkedIn links below.</p>
            <CardDeck class="slide_class">

              <Card style={{ width: '19rem' }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">Makers Academy</Card.Subtitle>
                  <Card.Text class="card_text">
                    <br></br>
                    <ul>
                      <li>OOP, TDD and MVC</li><br></br>
                      <li>Languages: Ruby (Rails), JavaScript (React, jQuery), SQL</li><br></br>
                      <li>Testing frameworks: RSpec, Jasmine</li>
                    </ul>
                  </Card.Text>                  
                </Card.Body>
              </Card>

              <Card style={{ width: '19rem' }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">University of Warwick</Card.Subtitle>
                  <Card.Text class="card_text">
                    <br></br>
                    <ul>
                      <li>MMORSE (Master's in Mathematics, Operational Research, Statistics & Economics) (2:1)</li><br></br>
                      <li>Dissertation: A meta-analysis of the effects of the MMR vaccine on children (1st)</li>
                    </ul>
                  </Card.Text>                  
                </Card.Body>
              </Card>
              
              <Card style={{ width: '19rem' }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">Bancroft's School</Card.Subtitle>
                  <Card.Text class="card_text">
                    <br></br>
                    <ul>
                      <li>Scholarship holder</li><br></br>
                      <li>4 A-levels: All grade A (Mathematics, Further Mathematics, Economics and Biology)</li><br></br>
                      <li>9 GCSEs: All grade A* and A</li>
                    </ul>
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
            <p>A few highlights from my working life. For more detail, see the GitHub/LinkedIn links below.</p>
            <CardDeck class="slide_class">

              <Card style={{ width: '19rem' }}>
                <Card.Body>
                  <Card.Title className="mb-2 text-muted">Brit Insurance</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Enterprise Risk Management Actuary (FIA)</Card.Subtitle>
                  <Card.Text class="card_text">
                    <br></br>
                    <ul>
                      <li>Validation of the Internal Capital Model</li><br></br>
                      <li>Co-ordination of the Risk Oversight Committee</li><br></br>
                    </ul>
                  </Card.Text>                  
                </Card.Body>
              </Card>

              <Card style={{ width: '19rem' }}>
                <Card.Body>
                  <Card.Title className="mb-2 text-muted">Mercer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Investment analyst</Card.Subtitle>
                  <Card.Text class="card_text">
                    <br></br>
                    <ul>
                      <li>Investment Management Certificate holder</li><br></br>
                      <li>Analysis of the investment risk profiles of clients and pension funds</li>
                    </ul>
                  </Card.Text>                  
                </Card.Body>
              </Card>

              <Card style={{ width: '19rem' }}>
                <Card.Body>
                  <Card.Title className="mb-2 text-muted">Suzhou Education Association</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">English teacher (TEFL certified)</Card.Subtitle>
                  <Card.Text class="card_text">
                    <br></br>
                    <ul>
                      <li>Teaching English to middle school students</li><br></br>
                      <li>Received ‘Exceptional performance’ award</li>
                    </ul>
                  </Card.Text> 
                </Card.Body>
              </Card>

            </CardDeck>
          </Carousel.Caption>
        </Carousel.Item>
                      
        <Carousel.Item>
          <div class="slide3"></div>

          <Carousel.Caption>
            <h3>Skills and interests</h3>
            <p>Some of my skillsets and hobbies. For more detail, see the GitHub/LinkedIn links below. Or come have a chat :)</p>
            <CardDeck class="slide_class">

              <Card style={{ width: '29rem' }}>
                <Card.Body>
                  <Card.Title className="mb-2 text-muted">Skills</Card.Title>
                  <Card.Text class="card_text">
                    <br></br>
                    <ul>
                      <li>Excellent communicator, presenter and mentor</li><br></br>
                      <li>Self-reliant individual but effective team member</li><br></br>
                      <li>Fast learner, effective time keeping skills, and experienced project management</li><br></br>
                      <li>Analytical thinker and innovative problem solver</li>
                    </ul>
                  </Card.Text>                  
                </Card.Body>
              </Card>

              <Card style={{ width: '29rem' }}>
                <Card.Body>
                  <Card.Title className="mb-2 text-muted">Interests</Card.Title>
                  <Card.Text class="card_text">
                    <br></br>
                    <ul>
                      <li>Swimming: Captain of the school swimming team, qualified lifeguard and ASA Level 1 swimming teacher</li><br></br>
                      <li>Music: Ex-professional bassist and grade 6 pianist</li><br></br>
                      <li>Travelling and languages: Chinese Mandarin (Basic business proficiency, HSK level 5)</li>
                    </ul>
                  </Card.Text> 
                </Card.Body>
              </Card>

            </CardDeck>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <br></br>
      <div class="container">
          <a href="https://github.com/jasylwong/cv" target="_blank" alt="github"><img src={github} /></a>
          <a href="https://www.linkedin.com/in/jasylwong/" target="_blank" alt="linkedin"><img src={linkedin} /></a>
          <a href="https://www.codewars.com/users/jasylwong" target="_blank" alt="codewars"><img src={codewars} /></a>
          <a href="https://medium.com/@jasylwong" target="_blank" alt="medium"><img src={Monogram} /></a>
      </div>
    </div>
  )
}

export default CV;