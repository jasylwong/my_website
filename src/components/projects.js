import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import '../App.css'

function Projects() {
  return (
    <div>
      <h1 id="about_title">Projects</h1>
      <CardDeck class="card-deck">
        <Card style={{ width: '18rem' }} border="light" bg="primary">
          {/* <Card.Header as="h5">Movie database</Card.Header> */}
          <Card.Img variant="top" src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555921450/shape/mentalfloss/theterminator.jpg?itok=y0C2LP_j" />
          <Card.Body>
            <Card.Title>Movie database</Card.Title>
            <Card.Text>
              A single-page React app for searching movies, using the OMDB API.
            </Card.Text>
            <div class="card-links">
              <Button variant="light">The app!</Button>
              <Button variant="light">The code!</Button>
            </div>
          </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem' }} border="light" bg="warning">
          <Card.Img variant="top" src="https://parade.com/wp-content/uploads/2018/06/JWFK.jpg" />
          <Card.Body>
            <Card.Title>News summary</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <div class="card-links">
              <Button variant="light" href="#">The app!</Button>
              <Button variant="light">The code!</Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} border="light" bg="success">
          <Card.Img variant="top" src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Toy-Story-2-700x300.jpg" />
          <Card.Body>
            <Card.Title>Notes app</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <div class="card-links">
              <Button variant="light" href="http://note-app-js.surge.sh/">The app!</Button>
              <Button variant="light" href="https://github.com/jasylwong/noteApp">The code!</Button>
            </div>
          </Card.Body>
        </Card>
      </CardDeck>

      <br></br>
    </div>
  )
}

export default Projects;