import React from 'react';
// import desk from '../images/desk.jpg';
import japan from '../images/japan.JPG';
import Me from '../images/D50_3710.jpg'

function LandingPage() {
  return (
    <div>
      <div>
        <img class="landing-pic" src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="desk" />
        {/* <img class="landing-pic" src={japan} alt="desk" /> */}
        <div class="white-box">
          <br></br>
          <div class="white-box-name">Jason Wong</div><br></br>
          <div class="white-box-job">Full stack software developer</div>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;