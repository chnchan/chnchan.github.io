import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import Resume from '../pdf/ResumeWEB.pdf';

import logo from '../img/logo.png';
import '../css/Home.css';
import '../css/Animations.css';


function Home(props) {
  return (
    <div id='Home'>
      <div className='whitespace'></div>
      <header>
        <img id='logo' src={logo} alt='logo' onLoad={props.onloadFunc} draggable='false'></img>
        <h2>Undergrad Student | Computer Science</h2>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>

          <a href={Resume} rel='noopener noreferrer'>Resume</a>
        </nav>
      </header>
      <div className='whitespace'></div>
      <Footer/>
    </div>
  );
}

export default Home;