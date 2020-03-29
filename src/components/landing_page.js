import React from 'react';
// import desk from '../images/desk.jpg';
import japan from '../images/japan.JPG';
import Me from '../images/D50_3710.jpg'

function LandingPage() {
  return (
    <div>
      <div>
        <img class="landing_pic" src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="desk" />
      </div>
      <div>
        <img src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="desk" />
      </div>
      <div class="polaroid">
          <img src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="desk" />
          <img src={Me} alt="me"/>
      </div>
    </div>
  )
}

export default LandingPage;