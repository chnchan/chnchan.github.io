import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackButton } from '../img/back.svg';
import profile from '../img/chun-hin-chan2.jpg';
import CV from '../pdf/CV.pdf';


function Nav(props) {
    return (
        <header>
            <div id='back_button'>
            <Link to='/'>
                <BackButton/>
            </Link>
            </div>

            <div id='profile_container'>
            <img id='profile' src={profile} alt='profile' onLoad={props.onloadFunc} draggable='false'></img>
            </div>

            <h1>Chun Hin Chan</h1>
            <h2>Computer Scientist</h2>
            <nav>
            <Link to='/about' className='about'>About</Link>
            <Link to='/projects' className='projects'>Projects</Link>

            <a href={CV} rel='noopener noreferrer'>CV</a>
            </nav>
        </header>
    );
}

export default Nav;