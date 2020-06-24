import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CV from '../pdf/CV.pdf';
import logo from '../img/logo.png';
import logoHD from '../img/logoHD.png';
import '../css/Home.css';
import '../css/Animations.css';


function Home(props) {
  return (
    <div id='Home'>
      <div className='whitespace'></div>
      <header>
        <img id='logo' src={logo} alt='logo' onLoad={props.onloadFunc} draggable='false'></img>
        <img id='logoHD' src={logoHD} alt='logo' onLoad={props.onloadFunc2} draggable='false'></img>
        <h2>Computer Scientist</h2>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>

          <a href={CV} rel='noopener noreferrer'>CV</a>
        </nav>
      </header>
      <div className='whitespace'></div>
      <Footer/>
    </div>
  );
}

export default Home;