import React from 'react';
import Project from './project';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import wepick from '../images/wepick.png';
import front_page_news_summary from '../images/front_page_news_summary.png';
import note_app from '../images/note_app.png';
import rps_sl from '../images/rps_sl.png';
import catflap_acebook from '../images/catflap_acebook.png';
import bank_tech_test from '../images/bank_tech_test.png';
import movie_database from '../images/movie_database.png';


import '../App.css'

function Projects() {
  return (
    <div>
      <br></br>
      <h1 class="titles">Projects</h1>
      <br></br>
      <CardDeck>
        <Project title={"WePick"} image={wepick} border={'primary'} bg={'light'} 
          href_app={'https://wepick.herokuapp.com/'} href_code={'https://github.com/jasylwong/wepick'} 
          text={'Our Makers final project! An app to help you and your friends pick which movie to watch in a fun and interactive way.'} 
        />

        <Project title={"News Summary"} image={front_page_news_summary} border={'warning'} bg={'light'} 
          href_app={'http://news-summary-js.surge.sh/'} href_code={'https://github.com/jasylwong/news-summary-challenge'} 
          text={'Extra! Extra! Read all about it! App listing news headlines and summarising the article contents gets deployed!'} 
        />

        <Project title={"Notes App"} image={note_app} border={'success'} bg={'light'} 
          href_app={'http://note-app-js.surge.sh/'} href_code={'https://github.com/jasylwong/noteApp'} 
          text={'Note to self: check out this app for creating a list of notes, which also changes colour on each click.'} 
        />
      </CardDeck>

      <br></br>

      <CardDeck>
        <Project title={"Rock, Paper, Scissors ... Spock, Lizard?"} image={rps_sl} border={'danger'} bg={'light'} 
          href_app={'https://rockpaperscissors-spocklizard.herokuapp.com/'} href_code={'https://github.com/jasylwong/rps-challenge'} 
          text={'A Star Tr-excellent variation on the traditional two player game.'} 
        />

        <Project title={"Acebook"} image={catflap_acebook} border={'info'} bg={'light'} 
          href_app={'http://catflap-acebook.herokuapp.com/'} href_code={'https://github.com/Kefuri/acebook-catflap'} 
          text={'Step through the flap, to experience our app! Our team\'s take on the largest social networking site.'} 
        />

        <Card style={{ width: '18rem' }} border={'secondary'} bg={'light'}>
          <Card.Header as="h5">{"Bank tech test"}</Card.Header>
          <Card.Img variant="top" src={bank_tech_test} />
          <Card.Body>
            <Card.Text>
              'Thank you for opening an account with Jasonwide building society. An app simulating creation og a bank account for a tech test.'
            </Card.Text>
            <div class="card-links">
              <Button variant={'secondary'} href={'https://github.com/jasylwong/bank_tech_test'} target="_blank">The code!</Button>
            </div>
          </Card.Body>
        </Card>
      </CardDeck>
      <br></br>


      <br></br>
    </div>
  )
}

export default Projects;