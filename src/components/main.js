import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landing_page'
import About from './about'
import CV from './cv'
import Projects from './projects'
import Collaborations from './collaborations';
import Contact from './contact'


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/cv" component={CV} />
    <Route path="/projects" component={Projects} />
    {/* <Route path="/collaborations" component={Collaborations} /> */}
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;