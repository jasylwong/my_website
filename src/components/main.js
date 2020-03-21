import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landing_page'
import About from './about'



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
  </Switch>
)

export default Main;