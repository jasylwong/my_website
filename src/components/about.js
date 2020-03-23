import React from 'react';
import '../App.css'
import Me from '../images/D50_3710.jpg'

function About() {
  return (
    <div>
      <br></br>
      <h1 class="titles">About me</h1>
      <div class="about-container">
        <div class="polaroid">
          <img src={Me} alt="me"/>
          <p>Me trying to smile!</p>
        </div>
        <div class="about-text">
          <h3>Hello world!</h3>
          <br></br>
          <p>
            I am a proactive and dynamic Full Stack Junior Developer, looking for my first role in the tech industry. 
            I am currently enrolled in the software development programme at Makers Academy, one of the most discerning dev bootcamps in the world.
          </p>
          <p>
            At the end of 2018, I qualified as an actuary - a globally recognised qualification that is renowned for being particularly arduous 
            and with a signicantly high drop out rate. With that under my belt, I am now looking for my next challenge - somewhere I can put my 
            driven nature, analytical mind and creative side to use in the tech industry.
          </p>
          <p>
            What attracts me to Software Development is the opportunity to pursue a modern analytical role in a technical and computing environment. 
            Whilst I have always been mathematically inclined, I look forward to exercising my enjoyment of problem solving in an innovative and 
            technology driven atmostphere.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About; 