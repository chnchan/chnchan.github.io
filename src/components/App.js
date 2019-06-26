import React, { Component } from 'react';
import Logo from './Logo'
import Content from './Content'
import Footer from './Footer';
import Resume from '../pdf/ResumeWEB.pdf';
import '../css/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home',
                    last_page: '',
                    about: '',
                    projects: '' };
    this.change_page_home = this.change_page_home.bind(this);
    this.change_page_about = this.change_page_about.bind(this);
    this.change_page_projects = this.change_page_projects.bind(this);
  }

  render() {
    let whitespace = 'white_space '+ this.state.page;

    return (
      <div className="App">
        <div className={whitespace}></div>
        <header>
          <Logo page={this.state.page} func={this.change_page_home}/>
          <h2>Undergrad Student | Computer Science</h2>
          <nav>
            <p className={this.state.about} onClick={this.change_page_about}>About</p>
            <p className={this.state.projects} onClick={this.change_page_projects}>Projects</p>
            <a href={Resume}>Resume</a>
          </nav>
        </header>
        <div className={whitespace}></div>
          
        <Content page={this.state.page}>
          <Footer last_page={this.state.last_page}/>
        </Content>
      </div>

      // <div className="App">
      //   <div className={whitespace}></div>
      //   <header>
      //     <Logo page={this.state.page} func={this.change_page_home}/>
      //     <h2>Undergrad Student | Computer Science</h2>
      //     <nav>
      //       <p className={this.state.about} onClick={this.change_page_about}>About</p>
      //       <p className={this.state.projects} onClick={this.change_page_projects}>Projects</p>
      //       <a href={Resume}>Resume</a>
      //     </nav>
      //   </header>
      //   <div className={whitespace}></div>
          
      //   <Content page={this.state.page}/>

      //   <Footer last_page={this.state.last_page}/>
      // </div>
    );
  }

  change_page_home() {
    this.setState({ page: 'home',
                      last_page: this.state.page,
                      about: '',
                      projects: '' });
  }

  change_page_about() {
    this.setState({ page: 'about',
                      last_page: this.state.page,
                      about: 'active',
                      projects: '' });
  }

  change_page_projects() {
    this.setState({ page: 'projects',
                      last_page: this.state.page,
                      about: '',
                      projects: 'active' });
  }
}

export default App;
