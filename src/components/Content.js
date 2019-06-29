import Collapse, {Panel} from 'rc-collapse';
import React from 'react';
import Divider from './Divider.js';
import CourseList from '../pdf/CoursesWEB.pdf';
import { ReactComponent as Arrow } from '../img/arrow1.svg';
import UCD_logo from '../img/UCD.png';
import HK from '../img/HK2.jpg';
import HK_mobile from '../img/HK2_v2.jpg';
import Resume from '../pdf/ResumeWEB.pdf';
import '../css/Content.css';
import '../css/Footer.css'; // underline animation
import 'rc-collapse/assets/index.css';
import '../css/MyPanel.css'

function Page(props) {
  if (props.page === 'about') {
    return (
      <div id='Page'>
        <div className='side_by_side'>
          <img id='UCD' className='pad_r' src={UCD_logo} alt='UCD' draggable='false'></img>
          <p>
            I am Chun Hin, or Hin for short. I am a 3rd year (turning 4th year) Computer Science undergraduate student at University of California, Davis. If you are interested in what I studied at Davis, I have compiled a list of the <a className='underline' href={CourseList}>courses</a> I've taken. I am currently still debating which sub-field to focus on, but I am most interested in becoming a software engineer, game developer, full stack developer. I've also dreamed of working in the field of computer vision, but I am afraid my lack of intuition in linear algebra will gets in the way.
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

        <Divider detail='bottom'/>

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
    );
  }
  else if (props.page === 'projects'){
    return (
      <div id='Page'>
        <div className='comp_vision'>
          <h2>Computer Vision:</h2>
          <Collapse accordion={true}>
            <Panel header="Image Resizing with Seaming Carving" disabled={true}>this is panel content</Panel>
            <Panel header="Image Stitcher w/ User Selected Correspondence" disabled={true}>this is panel content2 or other</Panel>
          </Collapse>
        </div>

        {/* <div className='opengl'>
          <h2>OpenGL:</h2>
          <Collapse accordion={true}>
            <Panel header="" disabled={true}>this is panel content</Panel>
            <Panel header="">this is panel content2 or other</Panel>
          </Collapse>
        </div> */}
      </div>
    );
  }
  else {
    return (
      <div id='Page'>
        <iframe src={Resume} title='my resume' width="100%" height="1200px"></iframe>
      </div>
    );
  }
}


function Content(props) {
  if (props.page === 'home')
    return(
      <div id='Content' className={props.page}>
        {props.children}
      </div>
    );
  else {
    return (
      <div id='Content' className='show'>
        <Divider detail='top'/>
        <Page page={props.page}/>
        <Divider detail='bottom'/>
        {props.children}
      </div>
    );
  }
}


export default Content;