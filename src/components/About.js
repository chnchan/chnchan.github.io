import React from 'react';

import Navigation from './Nav';
import Footer from './Footer';
import HK from '../img/HK.jpg';
import HK_mobile from '../img/HK_mobile.jpg';
import '../css/About.css';
import '../css/Page.css';
import '../css/Divider.css';
import '../css/Animations.css';


// function ScrollBottom() {
//   window.scrollTo(0,document.body.scrollHeight);
// }

function About(props) {
  return (
    <div id='About'>
      <Navigation onloadFunc={props.onloadFunc}/>

      <section>
        <hr className='section-break-5 top'/>
        <div id='Page'>
          <div className='side_by_side'>
            <p>
              I am from a very well-known city, Hong Kong. I have been living in America for more than 10 years now. Because of my background, I speak fluent English, Cantonese, and Mandarin. And, due to my interest in the Japanese culture, I am also able to perform basic communication in Japanese.
            </p>
            <img id='HK' className='pad_l' src={HK} alt='HK' draggable='false'></img>
          </div>

          <div className='spacing'>
            <img className='mobile' src={HK_mobile} alt='HK_mobile' draggable='false'></img>
          </div>

          <div className='side_by_side'>
            <p>
              I graduated from University of California, Davis with a bachelor degree in Computer Science on June 2020. Computer Science has always been something I wanted to pursuit ever since my first programming class in high school. I am very grateful that my passion for it was genuine and that I didn't feel burned out after the intensive curriculum at UCD. In fact, I think I enjoy it a little too much to the point where I would sacrifice my sleep time if I find the project interesting. I know I really shouldn't do that, but I just can't help it.
            </p>
          </div>

          <hr className='section-break-5 short bottom'/>

          <h2>Skills</h2>
          <ul>
            <li>C, C++, Java, HTML5, CSS, Javascript, Python3, R, Matlab, Swift</li>
            <li>SQLite3, OpenGL, Git</li>
          </ul>

          <hr className='section-break-5 short bottom'/>

          <h2>Courses Taken at UCD</h2>
          <ul>
            <li>ECS 020   -   Discrete Math for CS</li>
            <li>ECS 030   -   Programming & Prob Solving</li>
            <li>ECS 040   -   Software & Obj-Orient Prg</li>
            <li>ECS 050   -   Machine Dependent Prog</li>
            <li>ECS 060   -   Data Structures and Prog</li>
            <li>ECS 120   -   Theory Computation</li>
            <li>ECS 122A  -   Algorithm Design</li>
            <li>ECS 132   -   Probability & Statistical Modeling for Computer Science</li>
            <li>ECS 140A  -   Programming Languages</li>
            <li>ECS 145   -   Scripting Languages</li>
            <li>ECS 150   -   Operating System</li>
            <li>ECS 152A  -   Computer Network</li>
            <li>ECS 153   -   Computer Security</li>
            <li>ECS 154A  -   Computer Architecture</li>
            <li>ECS 160   -   Software Engineering</li>
            <li>ECS 162   -   Web Programming</li>
            <li>ECS 174   -   Computer Vision</li>
            <li>ECS 175   -   Computer Graphics</li>
            <li>ECS 189E  -   Android and iOS fundamentals</li>
            <li>ECS 189H  -   Human Computer Interactions</li>
            <li>ECS 193A/B  -   <a className='underline' href='https://drive.google.com/drive/folders/1wj9ndik93FwypmXHKgx87hcymJ1BBaW-?usp=sharing'>Senior Design Project</a></li>
          </ul>
        </div>
        <hr className='section-break-5 bottom'/>
      </section>
      
      <Footer/>
    </div>
  );
}

export default About;