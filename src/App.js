import React from 'react';

import './App.css';


import NavBar from './components/navbar';
import Main from './components/main';
import LandingPage from './components/landing_page';
import About from './components/about';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
