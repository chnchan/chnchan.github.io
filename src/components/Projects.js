// Component
import React from 'react';
import { Link } from 'react-router-dom';
import Collapse, { Panel } from 'rc-collapse';
import ModalImage from "react-modal-image";
import { ReactComponent as BackButton } from '../img/back.svg';
import Footer from './Footer';
import Tags from './Tags';
// Images
import profile from '../img/chun-hin-chan2.jpg';
import hassle_free_1_1 from '../projects/web/hassle_free_v1_1.png';
import hassle_free_1_2 from '../projects/web/hassle_free_v1_2.png';
import hassle_free_2 from '../projects/web/hassle_free_v2.png';
import weather_app_demo from '../projects/web/weather_app_demo.gif';
import weather_app_mobile from '../projects/web/weather_app_mobile_demo.gif';
import weather_app_tablet from '../projects/web/weather_app_tablet.png';
import lango_login_demo from '../projects/web/lango_login_demo.gif';
import lango_add_demo from '../projects/web/lango_add_demo.gif';
import lango_review_demo from '../projects/web/lango_review_demo.gif';
import lango_user_db from '../projects/web/lango_database1.png';
import lango_flashcard_db from '../projects/web/lango_database2.png';
import my_web_v1_home from '../projects/web/v1_home.png';
import my_web_v1_projects from '../projects/web/v1_projects.png';
import my_web_v1_1_home from '../projects/web/v1.1_home.png';
import my_web_v2_demo from '../projects/web/v2_demo.gif';
import seam_carving_i3 from '../projects/com_vis/seam_carving_i3.jpg';
import seam_carving_i3_w300 from '../projects/com_vis/seam_carving_i3_w300.png';
import seam_carving_i3_t300 from '../projects/com_vis/seam_carving_i3_t300.png';
import seam_carving_i3_e100 from '../projects/com_vis/seam_carving_i3_e100.png';
import seam_carving_failed1 from '../projects/com_vis/seam_carving_failed1.png';
import seam_carving_failed2 from '../projects/com_vis/seam_carving_failed2.png';
import img_stitcher_1_1 from '../projects/com_vis/img_stitcher_a1.jpg';
import img_stitcher_1_2 from '../projects/com_vis/img_stitcher_a2.jpg';
import img_stitcher_1 from '../projects/com_vis/img_stitcher_a_out.png';
import img_stitcher_2_1 from '../projects/com_vis/img_stitcher_b1.jpg';
import img_stitcher_2_2 from '../projects/com_vis/img_stitcher_b2.jpg';
import img_stitcher_2 from '../projects/com_vis/img_stitcher_b_out.png';
import img_stitcher_3_1 from '../projects/com_vis/img_stitcher_c1.jpg';
import img_stitcher_3_2 from '../projects/com_vis/img_stitcher_c2.jpg';
import img_stitcher_3 from '../projects/com_vis/img_stitcher_c_out.png';
import cg_p1 from '../projects/com_graphics/175p1.png';
import cg_p1_rasterize from '../projects/com_graphics/175p1_rasterize.png';
import cg_p1_rotate from '../projects/com_graphics/175p1_rotate.png';
import cg_p1_scale from '../projects/com_graphics/175p1_scale.png';
import cg_p1_menu from '../projects/com_graphics/175p1_menu.png';
import cg_p2 from '../projects/com_graphics/175p2.png';
import cg_p2_rotate from '../projects/com_graphics/175p2_rotate.png';
import cg_p2_menu from '../projects/com_graphics/175p2_menu.png';
import cg_p3 from '../projects/com_graphics/175p3.png';
import cg_p3_menu from '../projects/com_graphics/175p3_menu.png';
import cg_p3_light_shift from '../projects/com_graphics/175p3_light_shift.png';
import cg_p3_halftone from '../projects/com_graphics/175p3_halftone.png';
import cg_p3_halftone_color from '../projects/com_graphics/175p3_halftone_color.png';
import CV from '../pdf/CV.pdf';
import 'rc-collapse/assets/index.css';
import '../css/Projects.css';
import '../css/Modal.css';
import '../css/Divider.css';
import '../css/Animations.css';


function Projects(props) {
  return (
    <div id='Projects'>
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
        <h2>Undergrad Student | Computer Science</h2>
        <nav>
          <Link to='/about'>About</Link>
          <p className='active'>Projects</p>

          <a href={CV} rel='noopener noreferrer'>CV</a>
        </nav>
      </header>

      <div>
        <hr className='section-break-5 top'/>
        <div id='Page'>
          <section className='web_programming'>
            <h2>Web Programming:</h2>
            <Collapse accordion={true}>
              <Panel header='Hassle-Free - the Bill Splitter v1 & v2' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                <p className='pad_bottom'>My interest in web programming all started because my housemates and I are lazy when it comes to splitting the bills. So, I thought to myself that why don't I make something that can make this more convenient. And, the first thing that came to mind is a website.</p>
                <p className='pad_bottom'>I never had any experience in making a website, but it didn't take long for me to learn the basic fundamentals (HTML/CSS/JS) thanks to Youtube and W3Schools. My very first website (besides Hello World of course!) is called Hassle-Free: <a className='underline' href='https://chnchan.github.io/Hassle-Free/'>https://chnchan.github.io/Hassle-Free/</a></p>

                <div className='img_container'>
                  <figure>
                    <ModalImage small={hassle_free_1_1} large={hassle_free_1_1} alt='hassle_free_1_1.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Hassle-free v1 Homepage</figcaption>
                  </figure>
                  <figure>
                    <ModalImage small={hassle_free_1_2} large={hassle_free_1_2} alt='hassle_free_1_2.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Hassle-free v1 Main Page</figcaption>
                  </figure>
                </div>

                <p className='pad_top pad_bottom'>I didn't know there are libraries like React.js that can swap componenets in and out at the time, so I did a bare bone version of it when implementating this website. The website does what I originally wanted and I was very happy, but I eventually got tired of this childish look and wanted something that looks more professional, which is why I made Hassle-free v2: <a className='underline' href='https://chnchan.github.io/Virtual-Receipt/'>https://chnchan.github.io/Virtual-Receipt/</a>. I am really happy how the reciept-looking theme turned out so this would most likely be the last version unless I came up with a better design.</p>

                <div className='img_container'>
                  <figure className='large'>
                    <ModalImage small={hassle_free_2} large={hassle_free_2} alt='hassle_free_2.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Hassle-free v2</figcaption>
                  </figure>
                </div>
              </Panel>
              <Panel header='6 Hour Weather Forcast Web App' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                {/* <p className='pad_bottom'>
                  &#9888; The API has expired. I decided to take the website down from GitHub Pages as it is no longer functional.
                </p> */}
                <p>
                  <span role='img' aria-label='books'>&#128218;</span> This is a course project from <a target='_blank' className='underline' href='https://www.linkedin.com/in/jamie-oka-781a83172/' rel='noopener noreferrer'>Prof. Amenta</a> at UC Davis. The project is designed by course TA, <a target='_blank' className='underline' href='https://www.linkedin.com/in/jamie-oka-781a83172/' rel='noopener noreferrer'>Jamie Oka</a>.
                </p>
                <p className='pad_bottom'>
                  <span role='img' aria-label='package'>&#128230;</span> This project uses:{" "}
                  <a target='_blank' className='underline' href='https://openweathermap.org/api' rel="noopener noreferrer">OpenWeatherMap API</a>.
                </p>

                <p className='pad_top pad_bottom'>
                  Shortly after learning about web programming on my own, I decided to take the web class offered at UC Davis to deepen my understandings and to learn about the back-end aspect of web programming. The emphasis of this project is to practice using API services and enforcing responsiveness. OpenWeatherMap offered their Hourly Forcast API free to use for a month at the time so we went with their API services. We also used the National Weather Service for their doppler radar map.
                </p>

                <div className='img_container'>
                  <figure className='large'>
                    <ModalImage small={weather_app_demo} large={weather_app_demo} alt='weather_app_demo.gif' hideZoom={true}/>
                    <figcaption>&#x25B2; Weather Web App Demo</figcaption>
                  </figure>
                </div>

                <p className='pad_top pad_bottom'>
                  The web app behave as any weather website would (entering the zip code / city name will show the user the current weather and weather for the next 5 hours).
                  Unfortunately, the doppler radar map will always center around Sacramento, CA since converting zip code / city name to their corresponding id in the National Weather Service can be quite time consuming (and we are given a week to implement this). 
                </p>
                
                <div className='img_container height_based'>
                  <figure>
                    <ModalImage small={weather_app_tablet} large={weather_app_tablet} alt='weather_app_tablet.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Tablet View</figcaption>
                  </figure>
                  <figure>
                    <ModalImage small={weather_app_mobile} large={weather_app_mobile} alt='weather_app_mobile.gif' hideZoom={true}/>
                    <figcaption>&#x25B2; Mobile View</figcaption>
                  </figure>
                </div>
              </Panel>
              <Panel header='Lango! - the Flashcard Web App' extra={<Tags t1='HTML' t2='CSS' t3='JS' t4='SQLite3'/>}>
                <p>
                  <span role='img' aria-label='books'>&#128218;</span> This is a course project from <a target='_blank' className='underline' href='https://www.linkedin.com/in/jamie-oka-781a83172/' rel='noopener noreferrer'>Prof. Amenta</a> at UC Davis. The project is designed by course TA, <a target='_blank' className='underline' href='https://www.linkedin.com/in/jamie-oka-781a83172/' rel='noopener noreferrer'>Jamie Oka</a>.
                </p>
                <p className='pad_bottom'>
                  <span role='img' aria-label='package'>&#128230;</span> This project uses:{" "}
                  <a target='_blank' className='underline' href='https://github.com/facebook/create-react-app' rel="noopener noreferrer">React</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/express' rel="noopener noreferrer">Express</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/passport' rel="noopener noreferrer">Passport</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/cookie-session' rel="noopener noreferrer">cookie-session</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/sqlite3' rel="noopener noreferrer">SQLite3</a>,{" "}
                  <a target='_blank' className='underline' href='https://developers.google.com/apis-explorer/#p/' rel="noopener noreferrer">Google API</a> (Cloud Translation API & OAuth2 API 2.0).
                </p>

                <p className='pad_top pad_bottom'>
                  As our final assigment for the web programming course at UC Davis, we were each assigned with a port on the server along with the design of the project in Adobe XD. Our task was to implement Lango such that it follows as closely to the design as possible and that all the functionalities specificied works as intended. Some of the specifications are the following:
                </p>
                <ol className='pad_bottom'>
                  <li>The website should be accessed through <strong className='grey'>http://server162.site:[port]/user/lango.html#</strong> and redirected to <strong className='grey'>http://server162.site:[port]/login.html</strong> if the user is not logged in. The URL should be the only thing the user need to access the web app.</li>
                  <li className='pad_bottom'>User will login via Google.</li>

                  <div className='img_container'>
                    <figure className='large'>
                      <ModalImage small={lango_login_demo} large={lango_login_demo} alt='lango_login_demo.gif' hideZoom={true}/>
                      <figcaption>&#x25B2; Lango! - login</figcaption>
                    </figure>
                  </div>

                  <li>User's input (on the left box) should be translated and displayed on the right box upon pressing {"<"}Enter{">"}.</li>
                  <li className='pad_bottom'>The flashcard should be stored upon pressing the Save button.</li>

                  <div className='img_container'>
                    <figure className='large'>
                      <ModalImage small={lango_add_demo} large={lango_add_demo} alt='lango_add_demo.gif' hideZoom={true}/>
                      <figcaption>&#x25B2; Lango! - adding flashcard</figcaption>
                    </figure>
                  </div>

                  <li>User should be able swap between flashcard creating mode / review mode via button on the top left corner.</li>
                  <li>User should only see flashcards that he or she previously saved.</li>
                  <li className='pad_bottom'>Upon pressing on the flashcard or pressing {"<"}Enter{">"} after inputing the answer, the flashcard should flip and show either Correct! or the correct answer if the user's answer is incorrect.</li>

                  <div className='img_container'>
                    <figure className='large'>
                      <ModalImage small={lango_review_demo} large={lango_review_demo} alt='lango_review_demo.gif' hideZoom={true}/>
                      <figcaption>&#x25B2; Lango! - reviewing flashcard</figcaption>
                    </figure>
                  </div>
                </ol>
                
                <p className='pad_bottom'>
                  Majority of the client/server communication is done via AJAX queries. For example, if the user wants to translate "hello", <strong className='grey'>http://server162.site:[port]/user/translate?english=hello</strong> will be sent to the server. The server will then send the translation request to the Google Translate API and when it comes back, it will return a json consisting the input and the translated text back to the client. The client javascript will take the translated text and update the React state (which React will then update the actual HTML).
                </p>

                <p className='pad_bottom'>
                  Since only user who created the flashcard should see the flashcard, I implemented it by using two databade: one for identifying user from his or her google ID and one for all the flashcards (each flashcards is stored along with their user ID, times seen, and times correct). So, when fetching for flashcard in review mode, the server will only fetch the one with the corresponding user ID. I have also implemented so flashcards with low correct rate or least seen to get picked more likely. I had also added some mechanism to prevent the same flascard (unless it is the only flashcard) to be picked twice in a row as it may looks like the web app glitched and did not fetch a new flashcard.
                </p>

                <div className='img_container'>
                  <figure>
                    <ModalImage small={lango_user_db} large={lango_user_db} alt='lango_user_db.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Users.db stores mapping of Google ID to User ID</figcaption>
                  </figure>

                  <figure className='small'>
                    <ModalImage small={lango_flashcard_db} large={lango_flashcard_db} alt='lango_flashcard_db.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Flashcards.db stores Input Text, Translated Text, User ID, Times Seen, <br/>Times Correct</figcaption>
                  </figure>
                </div>
              </Panel>
              <Panel header='Personal Website' extra={<Tags t1='HTML' t2='CSS' t3='JS'/>}>
                <p className='pad_bottom'>
                  <span role='img' aria-label="package">&#128230;</span> The current version, <strong>V3</strong>, of the project uses:{" "}
                  <a target='_blank' className='underline' href='https://github.com/facebook/create-react-app' rel="noopener noreferrer">React</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/react-router-dom' rel="noopener noreferrer">react-router-dom</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/react-transition-group' rel="noopener noreferrer">react-transition-group</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/react-router-dom' rel="noopener noreferrer">rc-collapse</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/react-modal-image' rel="noopener noreferrer">react-modal-image</a>.
                </p>

                <p className='pad_top pad_bottom'>
                  I started working on my personal website ever since I started learning how to make a website. It grew from a bunch of plain and basic "Hello World" like static pages to a single well-crafted page thanks to react. While I tried to make it look as good as I could possible make it, I couldn't help to think of better design to build upon the smaller things that I made in each design. Being the person that I am, I am sure that there will be more version of this website to come. Instead letting them burried in a folder I would never open again, I thought why not show it to the world. Plus, it may even get my creative juice running when looking back at them!
                </p>

                <p className='pad_top'><strong>V1:</strong> HTML, CSS</p>
                <div className='img_container'>
                  <figure>
                    <ModalImage small={my_web_v1_home} large={my_web_v1_home} alt='my_web_v1_home.png' hideZoom={true}/>
                    <figcaption>&#x25B2; homepage v1</figcaption>
                  </figure>

                  <figure>
                    <ModalImage small={my_web_v1_projects} large={my_web_v1_projects} alt='my_web_v1_projects.png' hideZoom={true}/>
                    <figcaption>&#x25B2; projects page v1</figcaption>
                  </figure>
                </div>
                <div className='img_container left'>
                  <figure>
                    <ModalImage small={my_web_v1_1_home} large={my_web_v1_1_home} alt='my_web_v1_1_home.png' hideZoom={true}/>
                    <figcaption>&#x25B2; homepage v1_1</figcaption>
                  </figure>
                </div>

                <p className='pad_top'><strong>V2:</strong> HTML, CSS</p>
                <div className='img_container'>
                  <figure className='large'>
                    <ModalImage small={my_web_v2_demo} large={my_web_v2_demo} alt='my_web_v2_demo.gif' hideZoom={true}/>
                    <figcaption>&#x25B2; v2 demo</figcaption>
                  </figure>
                </div>
              </Panel>            
            </Collapse>
          </section>

          <section className='comp_vision'>
            <h2>Computer Vision:</h2>
            <Collapse accordion={true}>
              <Panel header='Image Resizing with Seaming Carving' extra={<Tags t1='Matlab'/>}>
                <p>
                  <span role='img' aria-label='books'>&#128218;</span> This is a course project from <a target='_blank' className='underline' href='https://web.cs.ucdavis.edu/~yjlee/' rel='noopener noreferrer'>Prof. Lee</a> at UC Davis.
                </p>

                <p className='pad_top pad_bottom'>
                  In this project, we were asked to implement the Seam Carving Algorithm, a content-aware image resizing algorithm, and apply the algorithm on different images. In short, the algorithm finds the path with the lowest "energy" value from top to bottom or left to right depending if it is a vertical or a horizontal resize. The path with the lowest "energy" value is be considered not important and will be discarded. This process will be repeated for X amount of times until it reaches the dimension specified. For more detail, click <a target='_blank' className='underline' href='https://web.cs.ucdavis.edu/~yjlee/teaching/ecs189g-spring2015/seamcarving.pdf' rel='noopener noreferrer'>here</a>.
                </p>

                <hr className='section-break-5 normal'/>

                <p className='pad_top pad_bottom'>
                  Here is an example of a traditional resize just so we can better compare the results of Seam Carving and traditional resize:
                </p>

                <div className='img_container height_based pad_bottom'>
                  <figure className='small'>
                    <p>Original:</p>
                    <ModalImage small={seam_carving_i3} large={seam_carving_i3} alt='seam_carving_i3.jpg' hideZoom={true}/>
                  </figure>
                  <figure className='small'>
                    <p>Shrink width by 300 pixels:</p>
                    <ModalImage small={seam_carving_i3_t300} large={seam_carving_i3_t300} alt='seam_carving_i3_t300.png' hideZoom={true}/>
                  </figure>
                </div>                

                <hr className='section-break-5 normal'/>

                <p className='pad_bottom'>
                  My results for the same image are as follows:
                </p>
                
                <div className='img_container height_based'>
                  <figure className='small'>
                    <p>Original:</p>
                    <ModalImage small={seam_carving_i3} large={seam_carving_i3} alt='seam_carving_i3.jpg' hideZoom={true}/>
                  </figure>
                </div>
                <div className='img_container height_based pad_bottom'>
                  <figure className='small'>
                    <p>SC Shrink width by 300 pixels:</p>
                    <ModalImage small={seam_carving_i3_w300} large={seam_carving_i3_w300} alt='seam_carving_i3_w300.png' hideZoom={true}/>
                  </figure>
                  <figure className='small'>
                    <p>SC Expand width by 100 pixels:</p>
                    <ModalImage small={seam_carving_i3_e100} large={seam_carving_i3_e100} alt='seam_carving_i3_e100.png' hideZoom={true}/>
                  </figure>
                </div>

                <hr className='section-break-5 normal'/>
                
                <p className='pad_top pad_bottom'>
                  I ran the algorithm on several different images. While some looks great (like the one above), some looks absolutely horrifying. Possible fix would be to allow users to increase the weight on certain parts of the image to prevent important features of an image from getting resized.
                </p>

                <div className='img_container height_based'>
                  <figure className='small'>
                    <ModalImage small={seam_carving_failed1} large={seam_carving_failed1} alt='seam_carving_failed1.png' hideZoom={true}/>
                  </figure>
                  <figure className='small'>
                    <ModalImage small={seam_carving_failed2} large={seam_carving_failed2} alt='seam_carving_failed2.png' hideZoom={true}/>
                  </figure>
                </div>

              </Panel>
              <Panel header='Image Stitcher with User Selected Correspondence' extra={<Tags t1='Matlab'/>}>
                <p>
                  <span role='img' aria-label='books'>&#128218;</span> This is a course project from <a target='_blank' className='underline' href='https://web.cs.ucdavis.edu/~yjlee/' rel='noopener noreferrer'>Prof. Lee</a> at UC Davis.
                </p>

                <p className='pad_top pad_bottom'>
                  In this project, we were asked to implement an image stitcher. However, it would be beyond the scope of this course to auomate the correspondence selection process. Instead, we were told to implement a simple interface for user to manually select the correspondences (points on picture 1 that points to same feature as picture 2). There were a couple approaches to implement the stitcher. I decided to use the inverse-wraping approach as it would create a hole-less and preserving image. The outcome of my implementation are as follows:
                </p>

                <hr className='section-break-5 normal'/>

                <div className='img_container height_based pad_bottom'>
                  <figure className='small'>
                    <p>Picture 1:</p>
                    <ModalImage small={img_stitcher_1_1} large={img_stitcher_1_1} alt='img_stitcher_1_1.jpg' hideZoom={true}/>
                  </figure>
                  <figure className='small'>
                    <p>Picture 2:</p>
                    <ModalImage small={img_stitcher_1_2} large={img_stitcher_1_2} alt='img_stitcher_1_2.jpg' hideZoom={true}/>
                  </figure>
                </div>

                <div className='img_container height_based pad_bottom'>
                  <figure className='small'>
                    <p>Result:</p>
                    <ModalImage small={img_stitcher_1} large={img_stitcher_1} alt='img_stitcher_1.png' hideZoom={true}/>
                  </figure>
                </div>     

                <hr className='section-break-5 normal'/>

                <div className='img_container height_based pad_bottom'>
                  <figure className='small'>
                    <p>Picture 1:</p>
                    <ModalImage small={img_stitcher_2_1} large={img_stitcher_2_1} alt='img_stitcher_2_1.jpg' hideZoom={true}/>
                  </figure>
                  <figure className='small'>
                    <p>Picture 2:</p>
                    <ModalImage small={img_stitcher_2_2} large={img_stitcher_2_2} alt='img_stitcher_2_2.jpg' hideZoom={true}/>
                  </figure>
                </div>

                <div className='img_container height_based pad_bottom'>
                  <figure className='small'>
                    <p>Result:</p>
                    <ModalImage small={img_stitcher_2} large={img_stitcher_2} alt='img_stitcher_2.png' hideZoom={true}/>
                  </figure>
                </div>

                <hr className='section-break-5 normal'/>

                <div className='img_container height_based pad_bottom'>
                  <figure className='small'>
                    <p>Picture 1:</p>
                    <ModalImage small={img_stitcher_3_1} large={img_stitcher_3_1} alt='img_stitcher_3_1.jpg' hideZoom={true}/>
                  </figure>
                  <figure className='small'>
                    <p>Picture 2:</p>
                    <ModalImage small={img_stitcher_3_2} large={img_stitcher_3_2} alt='img_stitcher_3_2.jpg' hideZoom={true}/>
                  </figure>
                </div>

                <div className='img_container height_based pad_bottom'>
                  <figure className='small'>
                    <p>Result:</p>
                    <ModalImage small={img_stitcher_3} large={img_stitcher_3} alt='img_stitcher_3.png' hideZoom={true}/>
                  </figure>
                </div>   
              </Panel>
            </Collapse>
          </section>

          <section className='comp_graphics'>
            <h2>Computer Graphics:</h2>
            <Collapse accordion={true}>
              <Panel header='Simple 2D Drawing System' extra={<Tags t1='C++' t3='OpenGL'/>}>
                <p>
                  <span role='img' aria-label='books'>&#128218;</span> This is a course project from <a target='_blank' className='underline' href='http://graphics.cs.ucdavis.edu/~hamann/' rel='noopener noreferrer'>Prof. Hamann</a> at UC Davis.
                </p>

                <p className='pad_top pad_bottom'>
                  In this project, we were asked to create a simple two-dimensional drawing system. Prof. Hamann wants us to understand how OpenGL works under the hood so he had us draw the pixels pixel by pixel rather than functions like glVertex2f(). We did so by drawing the pixels on an array, called pixel buffer. Then, we use the function glDrawPixels() to flush the pixel buffer onto the drawing board. Anyhow, the main features of this drawing board are as follows:
                </p>

                <div className='img_container'>
                  <figure>
                    <ModalImage small={cg_p1_menu} large={cg_p1_menu} alt='cg_p1_menu.png' hideZoom={true}/>
                  </figure>
                </div>

                <p className='pad_top pad_bottom'>
                  Users can apply the operations to any object by specifying the object ID that appears on top of the function menu. Each object ID is followed by the object's coordinate so the user can identify which object the object ID is refering to.
                </p>

                <hr className='section-break-5 normal'/>                

                <p className='pad_top pad_bottom'>
                  <strong>Results:</strong>
                </p>

                <div className='img_container pad_bottom'>
                  <figure>
                    <ModalImage small={cg_p1} large={cg_p1} alt='cg_p1.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Loaded input and displayed on drawing board</figcaption>
                  </figure>
                </div>

                <div className='img_container pad_bottom'>
                  <figure className='small'>
                    <ModalImage small={cg_p1_rasterize} large={cg_p1_rasterize} alt='cg_p1_rasterize.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Rasterized object 3</figcaption>
                  </figure>
                </div>
            
                <div className='img_container pad_bottom'>
                  <figure className='small'>
                    <ModalImage small={cg_p1_scale} large={cg_p1_scale} alt='cg_p1_scale.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Resized object 1 by scaling factor of (2, 1.2)</figcaption>
                  </figure>
                </div>

                <div className='img_container'>
                  <figure className='small'>
                    <ModalImage small={cg_p1_rotate} large={cg_p1_rotate} alt='cg_p1_rotate.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Rotated object 2 by 30 degrees</figcaption>
                  </figure>
                </div>
              </Panel>
              <Panel header='3D Transformation and Projection System' extra={<Tags t1='C++' t3='OpenGL'/>}>
                <p>
                  <span role='img' aria-label='books'>&#128218;</span> This is a course project from <a target='_blank' className='underline' href='http://graphics.cs.ucdavis.edu/~hamann/' rel='noopener noreferrer'>Prof. Hamann</a> at UC Davis.
                </p>

                <p className='pad_top pad_bottom'>
                  This project is very similar to the 2D Drawing System except that this is three dimensional objects projected to XY, XZ, YZ plane. The features are as follows:
                </p>

                <div className='img_container'>
                  <figure>
                    <ModalImage small={cg_p2_menu} large={cg_p2_menu} alt='cg_p2_menu.png' hideZoom={true}/>
                  </figure>
                </div>

                <hr className='section-break-5 normal'/>                

                <p className='pad_top pad_bottom'>
                  <strong>Results:</strong>
                </p>

                <div className='img_container pad_bottom'>
                  <figure className='large'>
                    <ModalImage small={cg_p2} large={cg_p2} alt='cg_p2.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Loaded input and projected onto the corresponding plane</figcaption>
                  </figure>
                </div>

                <div className='img_container'>
                  <figure className='large'>
                    <ModalImage small={cg_p2_rotate} large={cg_p2_rotate} alt='cg_p2_rotate.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Rotated the object by 65 degrees along the line (0,0,0), (1,1,1)</figcaption>
                  </figure>
                </div>
              </Panel>
              <Panel header="3D System with Phong Lighting Model, Gourand Shading, and Painter's Algorithm" extra={<Tags t1='C++' t3='OpenGL'/>}>
                <p>
                  <span role='img' aria-label='books'>&#128218;</span> This is a course project from <a target='_blank' className='underline' href='http://graphics.cs.ucdavis.edu/~hamann/' rel='noopener noreferrer'>Prof. Hamann</a> at UC Davis.
                </p>

                <p className='pad_top pad_bottom'>
                  In the last project, we implemented a simple 3D projection system. But, it was only displaying the frame of the object. In this project, we will also rasterize shaded triangles with Gourand shading and painter's algorithm (to solve the hidden surface problem). We will also be stimulating light using Phong lighting model. Additionally, we implemented half-toning to simulate different brightnesses on a binary display device. 
                </p>

                <p className='pad_top pad_bottom'>
                  Since there are a lot more parameters for the Phong lighting modeal, the menu got much bigger comapred to previous projects:
                </p>

                <div className='img_container'>
                  <figure>
                    <ModalImage small={cg_p3_menu} large={cg_p3_menu} alt='cg_p3_menu.png' hideZoom={true}/>
                  </figure>
                </div>

                <hr className='section-break-5 normal'/>                

                <p className='pad_top pad_bottom'>
                  <strong>Results:</strong>
                </p>

                <div className='img_container pad_bottom'>
                  <figure className='large'>
                    <ModalImage small={cg_p3} large={cg_p3} alt='cg_p2.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Loaded input and projected onto the corresponding plane</figcaption>
                  </figure>
                </div>

                <div className='img_container pad_bottom'>
                  <figure className='large'>
                    <ModalImage small={cg_p3_light_shift} large={cg_p3_light_shift} alt='cg_p2_rotate.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Shifted light source from (50, 0, 0) to (-10, -10, 2)</figcaption>
                  </figure>
                </div>

                <div className='img_container pad_bottom'>
                  <figure className='large'>
                    <ModalImage small={cg_p3_halftone} large={cg_p3_halftone} alt='cg_p2_rotate.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Half-tone mode (black and white)</figcaption>
                  </figure>
                </div>

                <div className='img_container'>
                  <figure className='large'>
                    <ModalImage small={cg_p3_halftone_color} large={cg_p3_halftone_color} alt='cg_p2_rotate.png' hideZoom={true}/>
                    <figcaption>&#x25B2; Half-tone mode (colored)</figcaption>
                  </figure>
                </div>
              </Panel>
            </Collapse>
          </section>

          <section className='game_dev'>
            <h2>Game Development:</h2>
            <Collapse accordion={true}>
              <Panel disabled={true} header="Argh! It's Lava!" extra={<Tags t1='Unity' t2='3D'/>}>
                this is panel content
              </Panel>
              <Panel disabled={true} header='Basic RPG movement practice' extra={<Tags t1='Unity' t5='2D'/>}>
                this is panel content2 or other
              </Panel>
            </Collapse>
          </section>
        </div>
        <hr className='section-break-5 bottom'/>
      </div>

      <Footer/>
    </div>
  );
}

export default Projects;