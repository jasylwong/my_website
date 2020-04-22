import React from 'react';
import japan from '../images/japan.JPG';


function LandingPage() {
  return (
    <div>
      <div>
        {/* <img class="landing-pic" src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="background" /> */}
        <img class="landing-pic" src={japan} alt="Japan" />
        <div class="white-box fade-in">
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