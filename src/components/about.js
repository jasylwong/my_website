import React from 'react';
import '../App.css'
import Me from '../images/D50_3710.jpg'

function About() {
  return (
    <div>
      <h1 id="about_title">About me</h1>
      <div class="about-container">
        <div class="polaroid">
          <img src={Me} alt="me"/>
          <p>Me!</p>
        </div>
        <div class="about-text">
          <h3>Hello world!</h3>
          <p>
            My name is Jason, and I'm a software developer, who used to be an
            actuary in a past life
            I like swimming.
          </p>
          <p>Favourite food: pizza</p>
          <p>Favourite band: RHCP</p>
          <p>Favourite country: Malaysia</p>
          <p>Favourite film: Pulp Fiction</p>
        </div>
      </div>
    </div>
  )
}

export default About; 