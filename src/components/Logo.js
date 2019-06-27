import React from 'react';
import logo from '../img/logo.png';
import profile from '../img/chun-hin-chan2.jpg';
import '../css/Logo.css';


function Logo(props) {
  if (props.page === 'home') 
    return (
      <div>
        <img id='logo' src={logo} alt='logo' onLoad={show_logo} draggable='false'></img>
      </div>
    );
  else {
    return (
      <div>
        <img id='profile' src={profile} alt='profile' onLoad={show_profile} onClick={props.func} draggable='false'></img>
        <h1>Chun Hin Chan</h1>
      </div>
    );
  }
}

function show_logo() {
  let logo = document.getElementById('logo');
  logo.classList.add('show');
}

function show_profile() {
  let profile = document.getElementById('profile');
  profile.classList.add('show');
}

export default Logo;