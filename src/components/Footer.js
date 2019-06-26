import React, { Component } from 'react';
import { ReactComponent as Facebook } from '../img/facebook.svg';
import { ReactComponent as Linkedin } from '../img/linkedin.svg';
import { ReactComponent as Github } from '../img/github.svg';
import { ReactComponent as Email } from '../img/email.svg';
import '../css/Footer.css';


function Footer(props) {
  if ((props.detail === 'in_container' && props.page === 'home') ||
        props.detail == undefined && props.page !== 'home') {
    return (
      <footer id='Footer'>
        <div className='social_media'>
          <div className='icon'>
            <a href='https://www.facebook.com/hin.chan.7731'><Facebook/></a>
            <span className='icon_txt'>facebook.com/hin.chan</span>
          </div>
          
          <div className='icon'>
            <a href='https://www.linkedin.com/in/chun-hin-chan-a1492b160/'><Linkedin/></a>
            <span className='icon_txt'>linkedin.com/in/chun-hin-chan</span>
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
        <p>Chun Hin Chan © 2019</p>
        <p>Icons by <a className='underline' href='https://www.s-ings.com/typicons/'>Stephen Hutchings</a></p>
        <p>Theme inspired by <a className='underline' href='https://github.com/sergiokopplin/indigo'>Indigo theme</a></p>
      </footer>
    );
  }
  else
    return (null);
}


// class Footer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { }
//   }

//   render() {
//     return (
//       <footer>
//         <div className='social_media'>
//           <div className='icon'>
//             <a href='https://www.facebook.com/hin.chan.7731'><Facebook/></a>
//             <span className='icon_txt'>facebook.com/hin.chan</span>
//           </div>
          
//           <div className='icon'>
//            <a href='https://www.linkedin.com/in/chun-hin-chan-a1492b160/'><Linkedin/></a>
//            <span className='icon_txt'>linkedin.com/in/chun-hin-chan</span>
//           </div>

//           <div className='icon'>
//             <a href='https://github.com/chnchan'><Github/></a>
//             <span className='icon_txt'>github.com/chnchan</span>
//           </div>

//           <div className='icon'>
//             <a href='mailto:chnchan@ucdavis.edu'><Email/></a>
//             <span className='icon_txt'>chnchan@ucdavis.edu</span>
//           </div>
//         </div>
//         <p>Chun Hin Chan © 2019</p>
//         <p>Icons by <a href='https://www.s-ings.com/typicons/'>Stephen Hutchings</a></p>
//         <p>Theme inspired by <a href='https://github.com/sergiokopplin/indigo'>Indigo theme</a></p>
//       </footer>
//     );
//   }
// }

export default Footer;