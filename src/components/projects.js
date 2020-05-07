import React from 'react';
import Project from './project';

import CardDeck from 'react-bootstrap/CardDeck';

import wepick from '../images/wepick.png';
import front_page_news_summary from '../images/front_page_news_summary.png';
import note_app from '../images/note_app.png';
import rps_sl from '../images/rps_sl.png';
import catflap_acebook from '../images/catflap_acebook.png';
import bank_tech_test from '../images/bank_tech_test.png';
import thermostat from '../images/thermostat.png';

import '../App.css'

function Projects() {
  return (
    <div>
      <h1 class="titles">Projects</h1>
      <br></br>
      <CardDeck>
        <Project title={"WePick"} image={wepick} border={'primary'} bg={'light'} 
          href_app={'https://wepick.herokuapp.com/'} href_code={'https://github.com/jasylwong/wepick'} 
          text={'Our Makers final project! An app to help you and your friends pick which movie to watch in a fun and interactive way.'} 
          stack={'Rails | JavaScript | Travis CI | TMDB API | Heroku'}
        />

        <Project title={"News Summary"} image={front_page_news_summary} border={'warning'} bg={'light'} 
          href_app={'http://news-summary-js.surge.sh/'} href_code={'https://github.com/jasylwong/news-summary-challenge'} 
          text={'Extra! Extra! Read all about it! App listing news headlines and summarising the article contents gets deployed!'} 
          stack={'Ruby | Rails | JavaScript | The Guardian API | Surge'}
        />

        <Project title={"Rock, Paper, Scissors ... Spock, Lizard?"} image={rps_sl} border={'success'} bg={'light'} 
          href_app={'https://rockpaperscissors-spocklizard.herokuapp.com/'} href_code={'https://github.com/jasylwong/rps-challenge'} 
          text={'A Star Tr-excellent variation on the traditional two player game.'} 
          stack={'Ruby | Rails | JavaScript | Travis CI'}
        />
      </CardDeck>

      <br></br>

      <CardDeck>
        <Project title={"Bank tech test"} image={bank_tech_test} border={'danger'} bg={'light'} 
          href_app={null} href_code={'https://github.com/jasylwong/bank_tech_test'} 
          text={'Thank you for opening an account with Jasonwide building society. A TDD app simulating creation of a bank account for a tech test.'} 
          stack={'Ruby | RSpec'}
        />

        <Project title={"Notes App"} image={note_app} border={'info'} bg={'light'} 
          href_app={'http://note-app-js.surge.sh/'} href_code={'https://github.com/jasylwong/noteApp'} 
          text={'Note to self: check out this app for creating a list of notes, which also changes colour on each click.'} 
          stack={'Surge'}
        />

        <Project title={"Acebook"} image={catflap_acebook} border={'secondary'} bg={'light'} 
          href_app={'http://catflap-acebook.herokuapp.com/'} href_code={'https://github.com/Kefuri/acebook-catflap'} 
          text={'Step through the flap, to experience our app! Our team\'s take on the largest social networking site.'} 
          stack={'Rails | Heroku'}
        />
      </CardDeck>

      {/* <br />

      <CardDeck>
        <Project title={"Thermostat"} image={thermostat} border={'primary'} bg={'light'} 
          href_app={"http://thermostat-js.surge.sh/"} href_code={'https://github.com/jasylwong/thermostat'} 
          text={'Crank that dial! A thermostat emulating app which also tells you the temperature of cities around the world using the OpenWeatherMap API.'} 
        />

        <Project title={"The Gilded Rose"} image={front_page_news_summary} border={'warning'} bg={'light'} 
          href_app={'http://news-summary-js.surge.sh/'} href_code={'https://github.com/jasylwong/news-summary-challenge'} 
          text={'Extra! Extra! Read all about it! App listing news headlines and summarising the article contents gets deployed!'} 
        />

        <Project title={"Recip-easy"} image={rps_sl} border={'success'} bg={'light'} 
          href_app={'https://rockpaperscissors-spocklizard.herokuapp.com/'} href_code={'https://github.com/jasylwong/rps-challenge'} 
          text={'Coming soon...'} 
        />
      </CardDeck> */}

      <br></br>
      <br></br>
    </div>
  )
}

export default Projects;