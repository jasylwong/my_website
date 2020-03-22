import React from 'react';
import '../App.css'
import Me from '../images/D50_3710.jpg'

function About() {
  return (
    <div>
      <div class="about-container">
        <div class="polaroid">
          <img src={Me} alt="me"/>
          <p>Me trying to smile!</p>
        </div>
        <div class="about-text">
          <h1 id="about_title">About me</h1>
          <br></br>
          <h3>Hello world!</h3>
          <br></br>
          <p>
            My name is Jason. I'm a full stack software developer, 
            with experience in Ruby on Rails, React, and TDD.
          </p>
          <p>
            I really enjoy learning new things, especially when it comes to technology
            and programming.
          </p>
          <p>
            I used to be an actuary in a past life, and am particularly interested
            in fintech.
          </p>
          <p>
            When I'm not coding, I like to play the piano, swim, draw, cook
            and go travelling.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About; 