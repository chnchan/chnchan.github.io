import React from 'react';
import logo from '../img/logo.png';
import profile from '../img/chun-hin-chan2.jpg';
import '../css/Logo.css';


function Logo(props) {
  if (props.page === 'home') 
    return (
      <div className='home'>
        <img src={logo} alt='logo' draggable='false'></img>
      </div>
    );
  else {
    return (
      <div>
        <img id='profile' src={profile} alt='logo' onLoad={unhide_image} onClick={props.func} draggable='false'></img>
        <h1>Chun Hin Chan</h1>
      </div>
    );
  }
}

function unhide_image() {
  let profile = document.getElementById('profile');
  profile.classList.add('show');
}

export default Logo;