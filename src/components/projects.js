import React from 'react';
import Project from './project';

import CardDeck from 'react-bootstrap/CardDeck';

import wepick from '../images/wepick.png';
import front_page_news_summary from '../images/front_page_news_summary.png';
import note_app from '../images/note_app.png';
import rps_sl from '../images/rps_sl.png';
import catflap_acebook from '../images/catflap_acebook.png';
import bank_tech_test from '../images/bank_tech_test.png';
import coming_soon from '../images/coming_soon.jpg';
import exercism from '../images/exercism.png';
import recip_easy from '../images/recip_easy.png';
import gilded_rose from '../images/gilded_rose.jpg';
import thermostat from '../images/thermostat.png';
import pig_latin from '../images/pig_latin.png';

import '../App.css'

function Projects() {
  return (
    <div>
      <br />
      <h1 class="titles">Projects</h1>
      <br></br>
      <CardDeck>
        <Project title={"Learning Journal"} image={coming_soon} border={'danger'} bg={'light'} 
          href_app={null} href_code={'https://github.com/Synergise/learning-journal'} 
          text={'Coming soon! A group project using AWS for deployment, React for front end UI, and Rails for the backend.'} 
          // text={'Coming soon! Learning is earning! A central place to help you keep track of all those things you want to learn.'} 
          stack={'AWS | React | Rails | RSpec'}
        />

        <Project title={"WePick"} image={wepick} border={'info'} bg={'light'} 
          href_app={'https://wepick.herokuapp.com/'} href_code={'https://github.com/jasylwong/wepick'} 
          text={'Our Makers final project! An app to help you and your friends pick which movie to watch together in a fun and interactive way.'} 
          stack={'Rails | JavaScript | Travis CI | TMDB API | Heroku'}
        />

        <Project title={"Recip-easy"} image={recip_easy} border={'secondary'} bg={'light'} 
          href_app={'http://recip-easy-dishes.herokuapp.com/'} href_code={'https://github.com/Kefuri/acebook-catflap'} 
          text={'Where finding great dishes to cook is a piece of cake. A web SPA to help you find tasty recipes.'} 
          stack={'React | Edamam API | Heroku'}
        />
      </CardDeck>

      <br />

      <CardDeck>
        <Project title={"Exercism"} image={exercism} border={'primary'} bg={'light'} 
          href_app={null} href_code={'https://github.com/jasylwong/exercism'} 
          text={'An exercism a day, keeps the evil code away! My solutions to the challenges from exercism.io, on the JavaScript track.'} 
          stack={'JavaScript | Node.js | Jest | ESLint'}
        />

        <Project title={"News Summary"} image={front_page_news_summary} border={'warning'} bg={'light'} 
          href_app={'http://news-summary-js.surge.sh/'} href_code={'https://github.com/jasylwong/news-summary-challenge'} 
          text={'Extra! Extra! Read all about it! App summarising news article contents gets deployed!'} 
          stack={'Ruby | Rails | JavaScript | The Guardian API | Surge'}
        />

        <Project title={"Rock, Paper, Scissors ... Spock, Lizard?"} image={rps_sl} border={'success'} bg={'light'} 
          href_app={'https://rockpaperscissors-spocklizard.herokuapp.com/'} href_code={'https://github.com/jasylwong/rps-challenge'} 
          text={'A Star Tr-excellent variation on the traditional two player game.'} 
          stack={'Ruby | Heroku'}
        />
      </CardDeck>

      <br></br>

      <CardDeck>
        <Project title={"Bank tech test"} image={bank_tech_test} border={'danger'} bg={'light'} 
          href_app={null} href_code={'https://github.com/jasylwong/bank_tech_test'} 
          text={'Thank you for opening an account with Jasonwide building society. A TDD app simulating creation of a bank account for a tech test.'} 
          stack={'Ruby | RSpec'}
        />

        <Project title={"The Gilded Rose"} image={gilded_rose} border={'info'} bg={'light'} 
          href_app={null} href_code={'https://github.com/jasylwong/gilded_rose_js'} 
          text={'Leeeeeroy Jeeeenkins!! My attempt at the infamous WoW inspired kata, complete with TDD. Perfect for TAFKAL80ETC fans.'} 
          stack={'JavaScript | Jasmine '}
        />

        <Project title={"Acebook"} image={catflap_acebook} border={'secondary'} bg={'light'} 
          href_app={'http://catflap-acebook.herokuapp.com/'} href_code={'https://github.com/Kefuri/acebook-catflap'} 
          text={'Step through the flap, to experience our app! Our team\'s take on the largest social networking site.'} 
          stack={'Rails | Heroku'}
        />
      </CardDeck>

      <br />

      <CardDeck>
        <Project title={"Thermostat"} image={thermostat} border={'primary'} bg={'light'} 
          href_app={"http://thermostat-js.surge.sh/"} href_code={'https://github.com/jasylwong/thermostat'} 
          text={'Crank that dial! A thermostat emulating app which also tells you the temperature of cities around the world using the OpenWeatherMap API.'} 
          stack={'JavaScript | jQuery | Surge'}
        />

        <Project title={"Notes App"} image={note_app} border={'warning'} bg={'light'} 
          href_app={'http://note-app-js.surge.sh/'} href_code={'https://github.com/jasylwong/noteApp'} 
          text={'Note to self: check out this app for creating a list of notes, which also changes colour on each click.'} 
          stack={'JavaScript | HTML | CSS | Surge'}
        />

        <Project title={"Pig Latin translator"} image={pig_latin} border={'success'} bg={'light'} 
          href_app={null} href_code={'https://github.com/jasylwong/Pig-Latin-translator'} 
          text={'ello-hay orld-way! One of my very first projects! An app to translate English into Pig Latin.'} 
          stack={'Ruby'}
        />
      </CardDeck>

      <br></br>
      <br></br>
    </div>
  )
}

export default Projects;