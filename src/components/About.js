import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackButton } from '../img/back.svg';

import Footer from './Footer';
import profile from '../img/chun-hin-chan2.jpg';
import CV from '../pdf/CV.pdf';
import UCD_logo from '../img/UCD.png';
import HK from '../img/HK2.jpg';
import HK_mobile from '../img/HK2_v2.jpg';
import '../css/About.css';
import '../css/Page.css';
import '../css/Divider.css';
import '../css/Animations.css';


function ScrollBottom() {
  window.scrollTo(0,document.body.scrollHeight);
}

function About(props) {
  return (
    <div id='About'>
      <header>
        <div id='back_button'>
          <Link to='/'>
            <BackButton/>
          </Link>
        </div>

        <div id='profile_container'>
          <img id='profile' src={profile} alt='profile' onLoad={props.onloadFunc} draggable='false'></img>
        </div>

        <h1>Chun Hin Chan</h1>
        <h2>Undergrad Student | Computer Science</h2>
        <nav>
          <p className='active'>About</p>
          <Link to='/projects'>Projects</Link>

          <a href={CV} rel='noopener noreferrer'>CV</a>
        </nav>
      </header>

      <section>
        <hr className='section-break-5 top'/>
        <div id='Page'>
          <div className='side_by_side'>
            <img id='UCD' className='pad_r' src={UCD_logo} alt='UCD' draggable='false'></img>
            <p>
              I am Chun Hin, or Hin for short. I am a 3rd year (turning 4th year) Computer Science undergraduate student at University of California, Davis. If you are interested in what I studied at Davis, I have compiled a list of the <a className='underline' onClick={ScrollBottom}>courses</a> I've taken. I am currently still debating which sub-field to focus on, but I am most interested in becoming a software engineer, game developer, full stack developer. I've also dreamed of working in the field of computer vision, but I am afraid my lack of intuition in linear algebra will get in the way.
            </p>
          </div>

          <div className='spacing'>
            <img className='mobile' src={HK_mobile} alt='HK_mobile' draggable='false'></img>
          </div>

          <div className='side_by_side'>
            <p>
              I am from a very well-known city, Hong Kong. I have been living in America for about 10 years now. Because of my background, I speak fluent English, Cantonese, and Mandarin. And, due to my interest in the Japanese culture, I am able to perform basic communication in Japanese as well.
            </p>
            <img id='HK' className='pad_l' src={HK} alt='HK' draggable='false'></img>
          </div>

          <div className='spacing'></div>

          <div className='side_by_side'>
            <p>
              Currently, I am working at Woodland Senior High School as a tutor. The job is mainly about collaborating with teachers and sort out any questions students may have in class or during class. But, communicating and understanding the student is the most important aspect of this job. Everyone learn at a different pace and with a different method so it is important to figure out what works and what doesn't. And thanks to this job, I get to observe who would soon be my users very closely.
            </p>
          </div>

          <hr className='section-break-5 bottom'/>

          <h2>Skills</h2>
          <ul>
            <li>C, C++, Java, Python3, R, Matlab, Javascript (React.js, Node.js)</li>
            <li>HTML5 / CSS</li>
            <li>SQLite3, OpenGL, Git</li>
          </ul>

          <hr className='section-break-5 bottom'/>

          <h2>Courses Taken</h2>
          <ul>
            <li>ECS 020  -  Discrete Math for CS</li>
            <li>ECS 030  -  Programming & Prob Solving</li>
            <li>ECS 040  -  Software & Obj-Orient Prg</li>
            <li>ECS 050  -  Machine Dependent Prog</li>
            <li>ECS 060  -  Data Structures and Prog</li>
            <li>ECS 120  -  Theory Computation</li>
            <li>ECS 122A -  Algorithm Design</li>
            <li>ECS 140A -  Programming Languages</li>
            <li>ECS 150  -  Operating System</li>
            <li>ECS 152A -  Computer Network</li>
            <li>ECS 154A -  Computer Architecture</li>
            <li>ECS 160  -  Software Engineering (In Progress)</li>
            <li>ECS 162  -  Web Programming</li>
            <li>ECS 174  -  Computer Vision</li>
            <li>ECS 175  -  Computer Graphics</li>
            <li>ECS 189E -  Android and iOS fundamentals (In Progress)</li>
            <li>ECS 189H -  Human Computer Interactions</li>
          </ul>
        </div>
        <hr className='section-break-5 bottom'/>
      </section>
      
      <Footer/>
    </div>
  );
}

export default About;