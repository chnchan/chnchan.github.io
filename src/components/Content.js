import React from 'react';
import Divider from './Divider.js';
import CourseList from '../pdf/CoursesWEB.pdf';
import '../css/Content.css';
import '../css/Footer.css'; // underline animation

function Page(props) {
  if (props.page === 'about') {
    return (
      <div id='Page'>
        <p>
          I am Chun Hin, or Hin for short. I am a 3rd year (turning 4th year) Computer Science undergraduate student at University of California, Davis. If you are interested in what I studied at Davis, I have compiled a list of the <a className='underline' href={CourseList}>courses</a> I've taken. I am currently still debating which sub-field to focus on, but I am most interested in becoming a software engineer, game developer, full stack developer. I've also dreamed of working in the field of computer vision, but I am afraid my lack of intuition in linear algebra will gets in the way.
        </p>
        <p>
          I am
        </p>
      </div>
    );
  }
  else {
    return(
      <div id='Page'>
        <div>aaa</div>
      </div>
    );
  }
}


function Content(props) {
  if (props.page === 'home')
    return(
      <div id='Content'>
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