import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Logo from './Logo'
import Content from './Content'
import Footer from './Footer';
import Resume from '../pdf/ResumeWEB.pdf';
import '../css/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home',
                    about: '',
                    projects: '',
                    resume: '' };
    this.change_page_home = this.change_page_home.bind(this);
    this.change_page_about = this.change_page_about.bind(this);
    this.change_page_projects = this.change_page_projects.bind(this);
    this.change_page_resume = this.change_page_resume.bind(this);
  }


  change_page_home() {
    if (this.state.page !== 'home') { // hide image before changing state to avoid see the residue of the previous state.
      let profile = document.getElementById('profile');
      profile.classList.remove('show');
    }

    this.setState({ page: 'home',
                      about: '',
                      projects: '',
                      resume: '' });
  }

  change_page_about() {
    if (this.state.page === 'home') {
      let logo = document.getElementById('logo');
      logo.classList.remove('show');
    }

    this.setState({ page: 'about',
                      about: 'active',
                      projects: '',
                      resume: '' });
  }

  change_page_projects() {
    if (this.state.page === 'home') {
      let logo = document.getElementById('logo');
      logo.classList.remove('show');
    }

    this.setState({ page: 'projects',
                      about: '',
                      projects: 'active',
                      resume: '' });
  }

  change_page_resume() {
    if (this.state.page === 'home') {
      let logo = document.getElementById('logo');
      logo.classList.remove('show');
    }

    this.setState({ page: 'resume',
                      about: '',
                      projects: '',
                      resume: 'active' });
  }

  render() {
    let whitespace = 'white_space ' + this.state.page;

    return (
      <div id="App" className={this.state.page}>
        <div className={whitespace}></div>
        <header>
          <Logo page={this.state.page} func={this.change_page_home}/>
          <h2>Undergrad Student | Computer Science</h2>
          <nav>
            <p className={this.state.about} onClick={this.change_page_about}>About</p>
            <p className={this.state.projects} onClick={this.change_page_projects}>Projects</p>
            {/* <p id='resume' className={this.state.resume} onClick={this.change_page_resume}>Resume</p> */}
            <a className={this.state.resume} href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
          </nav>
        </header>
        <div className={whitespace}></div>
          
        <Content page={this.state.page}>
          <Footer page={this.state.page}/>
        </Content>
      </div>
    );
  }
}

export default App;
