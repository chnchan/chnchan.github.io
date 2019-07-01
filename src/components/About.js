import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import profile from '../img/chun-hin-chan2.jpg';
import Resume from '../pdf/ResumeWEB.pdf';
import CourseList from '../pdf/CoursesWEB.pdf';
import UCD_logo from '../img/UCD.png';
import HK from '../img/HK2.jpg';
import HK_mobile from '../img/HK2_v2.jpg';
import '../css/About.css';
import '../css/Page.css';
import '../css/Divider.css';
import '../css/Animations.css';


function About(props) {
  return (
    <div id='About'>
      <header>
        <Link to='/'>
          <img id='profile' src={profile} alt='profile' onLoad={props.onloadFunc} draggable='false'></img>
        </Link>
        <h1>Chun Hin Chan</h1>
        <h2>Undergrad Student | Computer Science</h2>
        <nav>
          <p className='active'>About</p>
          <Link to='/projects'>Projects</Link>

          <a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
        </nav>
      </header>

      <section>
        <hr className='section-break-5 top'/>
        <div id='Page'>
          <div className='side_by_side'>
            <img id='UCD' className='pad_r' src={UCD_logo} alt='UCD' draggable='false'></img>
            <p>
              I am Chun Hin, or Hin for short. I am a 3rd year (turning 4th year) Computer Science undergraduate student at University of California, Davis. If you are interested in what I studied at Davis, I have compiled a list of the <a className='underline' href={CourseList}>courses</a> I've taken. I am currently still debating which sub-field to focus on, but I am most interested in becoming a software engineer, game developer, full stack developer. I've also dreamed of working in the field of computer vision, but I am afraid my lack of intuition in linear algebra will get in the way.
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
            <li>C/C++, Java, R, and Matlab</li>
            <li>HTML/CSS</li>
            <li>Javascript (React.js, Node.js)</li>
            <li>SQLite3</li>
            <li>OpenGL</li>
            <li>Git</li>
          </ul>
        </div>
        <hr className='section-break-5 bottom'/>
      </section>
      
      <Footer/>
    </div>
  );
}

export default About;