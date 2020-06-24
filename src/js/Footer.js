import React from 'react';
import { ReactComponent as Facebook } from '../img/facebook.svg';
import { ReactComponent as Linkedin } from '../img/linkedin.svg';
import { ReactComponent as Github } from '../img/github.svg';
import { ReactComponent as Email } from '../img/email.svg';
import '../css/Footer.css';


function Footer(props) {
  return (
    <footer id='Footer' className={props.page}>
      <div className='social_media'>
        <div className='icon'>
          <a href='https://www.facebook.com/hin.chan.7731'><Facebook/></a>
          <span className='icon_txt'>facebook.com/hin.chan</span>
        </div>
        
        <div className='icon'>
          <a href='https://www.linkedin.com/in/chun-hin-chan-a1492b160/'><Linkedin/></a>
          <span className='icon_txt linkedin'>linkedin.com/in/chun-hin-chan</span>
        </div>

        <div className='icon'>
          <a href='https://github.com/chnchan'><Github/></a>
          <span className='icon_txt'>github.com/chnchan</span>
        </div>

        <div className='icon'>
          <a href='mailto:chnchan@ucdavis.edu'><Email/></a>
          <span className='icon_txt'>chnchan@ucdavis.edu</span>
        </div>
      </div>
      <p>Chun Hin Chan © 2020</p>
      <p>Icons by <a className='underline' href='https://www.s-ings.com/typicons/'>Stephen Hutchings</a></p>
      <p>Theme inspired by <a className='underline' href='https://github.com/sergiokopplin/indigo'>Indigo theme</a></p>
      <p className='top'>Ver 3.2.0, Last updated on Jun 16, 2020</p>
    </footer>
  );
}


export default Footer;