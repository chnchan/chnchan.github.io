import React from 'react';
import { Link } from 'react-router-dom';
import Collapse, { Panel } from 'rc-collapse';

import Footer from './Footer';
import Tags from './Tags';
import profile from '../img/chun-hin-chan2.jpg';
import hassle_free_1_1 from '../projects/web/hassle_free_v1_1.png';
import hassle_free_1_2 from '../projects/web/hassle_free_v1_2.png';
import hassle_free_2 from '../projects/web/hassle_free_v2.png';
import weather_app_demo from '../projects/web/weather_app_demo.gif';
import weather_app_mobile from '../projects/web/weather_app_mobile_demo.gif';
import weather_app_tablet from '../projects/web/weather_app_tablet.png';
import com_vis_ps1 from '../projects/com_vis/ps1.pdf';
import com_vis_ps2 from '../projects/com_vis/ps2.pdf';
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

          <a href={Resume} rel='noopener noreferrer'>Resume</a>
        </nav>
      </header>

      <section>
        <hr className='section-break-5 top'/>
        <div id='Page'>
          <div className='web_programming'>
            <h2>Web Programming:</h2>
            <Collapse accordion={true}>
              <Panel header='Hassle-Free - the Bill Splitter' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                <p className='pad_bottom'>My interest in web programming all started because my housemates and I are lazy when it comes to splitting the bills. So, I thought to myself that why don't I make something that can make this more convenient. And, the first thing that came to mind is a website.</p>
                <p className='pad_bottom'>I never had any experience in making a website, but it didn't take long for me to learn the basic fundamentals (HTML/CSS/JS) thanks to Youtube and W3Schools. My very first website (besides Hello World of course!) is called Hassle-Free: <a href='https://chnchan.github.io/Hassle-Free/'>https://chnchan.github.io/Hassle-Free/</a></p>

                <div className='img_container'>
                  <figure>
                    <img src={hassle_free_1_1} alt='hassle-free-v1-1'></img>
                    <figcaption>&#x25B2; Hassle-free v1 Homepage</figcaption>
                  </figure>
                  <figure>
                    <img src={hassle_free_1_2} alt='hassle-free-v1-2'></img>
                    <figcaption>&#x25B2; Hassle-free v1 Main Page</figcaption>
                  </figure>
                </div>

                <p className='pad_top pad_bottom'>I didn't know there are libraries like React.js that can swap componenets in and out at the time, so I did a bare bone version of it when implementating this website. The website does what I originally wanted and I was very happy, but I eventually got tired of this childish look and wanted something that looks more professional, which is why I made Hassle-free v2: <a href='https://chnchan.github.io/Virtual-Receipt/'>https://chnchan.github.io/Virtual-Receipt/</a>. I am really happy how the reciept-looking theme turned out so this would most likely be the last version unless I came up with a better design.</p>

                <div className='img_container'>
                  <figure>
                    <img src={hassle_free_2} alt='hassle_free_2'></img>
                    <figcaption>&#x25B2; Hassle-free v2</figcaption>
                  </figure>
                </div>
              </Panel>
              <Panel header='6 Hour Weather Forcast Website w/ OpenWeatherMap API' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                <p className='pad_bottom'>
                  &#9888; The API has expired. I decided to take the website down from GitHub Pages as it is no longer functional.
                </p>

                <p className='pad_top pad_bottom'>
                  &#128161; This is a course project at UC Davis designed by Jamie Oka.
                </p>

                <p className='pad_top pad_bottom'>
                  Shortly after learning about web programming on my own, I decided to take the web class offered at UC Davis to deepen my understandings and to learn about the back-end aspect of web programming. The emphasis of this project is to practice using API services and enforcing responsiveness. OpenWeatherMap offered their Hourly Forcast API free to use for a month at the time so we went with their API services. We also used the National Weather Service for their doppler radar map.
                </p>

                <div className='img_container'>
                  <figure>
                    <img src={weather_app_demo} alt='weather_app_demo'></img>
                    <figcaption>&#x25B2; Weather Web App Demo</figcaption>
                  </figure>
                </div>

                <p className='pad_top pad_bottom'>
                  The web app behave as any weather website would (entering the zip code / city name will show the user the current weather and weather for the next 5 hours).
                  Unfortunately, the doppler radar map will always center around Sacramento, CA since converting zip code / city name to their corresponding id in the National Weather Service can be quite time consuming (and we are given a week to implement this). 
                </p>
                
                <div className='img_container height_based'>
                  <figure>
                    <img src={weather_app_mobile} alt='weather_app_mobile'></img>
                    <figcaption>&#x25B2; Weather Web App Mobile View</figcaption>
                  </figure>
                  <figure>
                    <img src={weather_app_tablet} alt='weather_app_tablet'></img>
                    <figcaption>&#x25B2; Weather Web App Tablet View</figcaption>
                  </figure>
                </div>
              </Panel>
              <Panel disabled='true' header='Lango! - the Flashcard Web App w/ Node.js, React.js, Google Translate API' extra={<Tags t1='HTML' t2='CSS' t3='JS' t4='SQLite3'/>}>
                this is panel content2 or other
              </Panel>
              <Panel disabled='true' header='My Personal Website w/ React.js' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                this is panel content2 or other
              </Panel>            
            </Collapse>
          </div>

          <div className='comp_vision'>
            <h2>Computer Vision:</h2>
            <Collapse accordion={true}>
              <Panel header='Image Resizing with Seaming Carving' extra={<Tags t1='Matlab'/>}>
                <iframe title='temp' src={com_vis_ps1} width='100%' height='600px'></iframe>
              </Panel>
              <Panel header='Image Stitcher w/ User Selected Correspondence' extra={<Tags t1='Matlab'/>}>
              <iframe title='temp2' src={com_vis_ps2} width='100%' height='600px'></iframe>
              </Panel>
            </Collapse>
          </div>

          <div className='comp_graphics'>
            <h2>Computer Graphics:</h2>
            <Collapse accordion={true}>
              <Panel disabled='true' header='Simple 2D Drawing System' extra={<Tags t1='C++' t3='OpenGL'/>}>
                this is panel content
              </Panel>
              <Panel disabled='true' header='3D Transformation and Projection System' extra={<Tags t1='C++' t3='OpenGL'/>}>
                this is panel content2 or other
              </Panel>
              <Panel disabled='true' header="3D System with Phong Lighting Model, Gourand Shading, and Painter's Algorithm" extra={<Tags t1='C++' t3='OpenGL'/>}>
                this is panel content2 or other
              </Panel>
            </Collapse>
          </div>

          <div className='game_dev'>
            <h2>Game Development:</h2>
            <Collapse accordion={true}>
              <Panel disabled='true' header="Argh! It's Lava!" extra={<Tags t1='Unity' t2='3D'/>}>
                this is panel content
              </Panel>
              <Panel disabled='true' header='Basic RPG movement practice' extra={<Tags t1='Unity' t5='2D'/>}>
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