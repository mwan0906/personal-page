import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route component={About} />
  </Switch>
);
