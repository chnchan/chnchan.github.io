import React from 'react';
import { Link } from 'react-router-dom';
import Collapse, { Panel } from 'rc-collapse';

import Footer from './Footer';
import Tags from './Tags';
import profile from '../img/chun-hin-chan2.jpg';
import Resume from '../pdf/ResumeWEB.pdf';
import 'rc-collapse/assets/index.css';
import '../css/Projects.css';
import '../css/Divider.css';
import '../css/Animations.css';


function Projects(props) {
  return (
    <div id='Projects'>
      <header>
        <Link to='/'>
          <img id='profile' src={profile} alt='profile' onLoad={props.onloadFunc} draggable='false'></img>
        </Link>
        <h1>Chun Hin Chan</h1>
        <h2>Undergrad Student | Computer Science</h2>
        <nav>
          <Link to='/about'>About</Link>
          <p className='active'>Projects</p>

          <a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
        </nav>
      </header>

      <section>
        <hr className='section-break-5 top'/>
        <div id='Page'>
          <div className='web_programming'>
            <h2>Web Programming:</h2>
            <Collapse accordion={true}>
              <Panel header='Simple website design' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                this is panel content
              </Panel>
              <Panel header='6 Hour Weather Forcast Website w/ OpenWeatherMap API' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                this is panel content
              </Panel>
              <Panel header='Lango! - the Flashcard Web App w/ Node.js, React.js, Google Translate API' extra={<Tags t1='HTML' t2='CSS' t3='JS' t4='SQLite3'/>}>
                this is panel content2 or other
              </Panel>
              <Panel header='My Personal Website w/ React.js' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                this is panel content2 or other
              </Panel>            
            </Collapse>
          </div>

          <div className='comp_vision'>
            <h2>Computer Vision:</h2>
            <Collapse accordion={true}>
              <Panel header='Image Resizing with Seaming Carving' extra={<Tags t1='Matlab'/>}>
                this is panel content
              </Panel>
              <Panel header='Image Stitcher w/ User Selected Correspondence' extra={<Tags t1='Matlab'/>}>
                this is panel content2 or other
              </Panel>
            </Collapse>
          </div>

          <div className='comp_graphics'>
            <h2>Computer Graphics:</h2>
            <Collapse accordion={true}>
              <Panel header='Simple 2D Drawing System' extra={<Tags t1='C++' t3='OpenGL'/>}>
                this is panel content
              </Panel>
              <Panel header='3D Transformation and Projection System' extra={<Tags t1='C++' t3='OpenGL'/>}>
                this is panel content2 or other
              </Panel>
              <Panel header="3D System with Phong Lighting Model, Gourand Shading, and Painter's Algorithm" extra={<Tags t1='C++' t3='OpenGL'/>}>
                this is panel content2 or other
              </Panel>
            </Collapse>
          </div>

          <div className='game_dev'>
            <h2>Game Development:</h2>
            <Collapse accordion={true}>
              <Panel header="Argh! It's Lava!" extra={<Tags t1='Unity' t2='3D'/>}>
                this is panel content
              </Panel>
              <Panel header='Basic RPG movement practice' extra={<Tags t1='Unity' t5='2D'/>}>
                this is panel content2 or other
              </Panel>
            </Collapse>
          </div>
        </div>
        <hr className='section-break-5 bottom'/>
      </section>

      <Footer/>
    </div>
  );
}

export default Projects;