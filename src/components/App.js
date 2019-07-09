import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js'
import '../css/App.css';

function App() {
  return (
    <Router>
      <Route render={({location}) => {
        return (
          <div id='App'>
            <TransitionGroup component={null}>
              <CSSTransition timeout={500} classNames="page" key={location.key}>
                <Switch location={location}>
                  {/* <Route exact path='/' component={Home}/> */}
                  <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
                    <Home onloadFunc={show_logo}/>
                  )}/>
                  {/* <Route exact path='/about' component={About}/> */}
                  <Route exact path={process.env.PUBLIC_URL + '/about'} render={() => (
                    <About onloadFunc={show_profile}/>
                  )}/>
                  {/* <Route exact path='/projects' component={Projects}/> */}
                  <Route exact path={process.env.PUBLIC_URL + '/projects'} render={() => (
                    <Projects onloadFunc={show_profile}/>
                  )}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        );
      }} />
    </Router>
  );
}

function show_logo() {
  let logo = document.getElementById('logo');
  logo.classList.add('show');
}

function show_profile() {
  let profile = document.getElementById('profile');
  profile.classList.add('show');
}

export default App;
