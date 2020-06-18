
import React from 'react';
import Tags from '../Tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = 'https://drive.google.com/drive/folders/1Evj0D7l9jV--Omy3aPkP1GjocL4-dcBd?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1cg6ZHcjfgv_v8x5ToogvbrE5gPGT6dIk',
        thumbnail: 'https://drive.google.com/thumbnail?id=1cg6ZHcjfgv_v8x5ToogvbrE5gPGT6dIk',
        description: ''
    },
    {
        original: 'https://drive.google.com/uc?id=1bZWjT9oyx20SUQLpur_Ja6h-B1UZ9a1z',
        thumbnail: 'https://drive.google.com/thumbnail?id=1bZWjT9oyx20SUQLpur_Ja6h-B1UZ9a1z',
        description: ''
    },
    {
        original: 'https://drive.google.com/uc?id=1q7mHXvA0Pqd5tjxf4goXyON49__GucMI',
        thumbnail: 'https://drive.google.com/thumbnail?id=1q7mHXvA0Pqd5tjxf4goXyON49__GucMI',
        description: ''
    }
];


function Lango(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer HTML CSS JavaScript />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                <span role='img' aria-label='package'>&#128230;</span>This project uses:{" "}
                <a target='_blank' className='underline' href='https://github.com/facebook/create-react-app' rel="noopener noreferrer">React.js</a>,{" "}
                <a target='_blank' className='underline' href='https://www.npmjs.com/package/express' rel="noopener noreferrer">Express - Node.js</a>,{" "}
                <a target='_blank' className='underline' href='https://www.npmjs.com/package/passport' rel="noopener noreferrer">Passport</a>,{" "}
                <a target='_blank' className='underline' href='https://www.npmjs.com/package/cookie-session' rel="noopener noreferrer">cookie-session</a>,{" "}
                <a target='_blank' className='underline' href='https://www.npmjs.com/package/sqlite3' rel="noopener noreferrer">SQLite3</a>,{" "}
                <a target='_blank' className='underline' href='https://developers.google.com/apis-explorer/#p/' rel="noopener noreferrer">Google API</a> (Cloud Translation API & OAuth2 API 2.0).
            </p>

            <p className='pad_top pad_bottom'>
                This web app serves as a learning tool for user to pick up a new language. The web app will translate the japanese equivalent of the input and the user can save this mapping as a flashcard. The flashcard will then be stored on the server database under the user's Google ID. User will then have the option to study the flashcards later. 
                <br/><br/>
                Unfortunately, the website was hosted on a school server that was only available for the duration of the course. Therefore, there are no live version of this web app available. Alternatively, <a href='https://drive.google.com/drive/folders/1Evj0D7l9jV--Omy3aPkP1GjocL4-dcBd?usp=sharing' className='underline'>here</a> is a link to a Google Drive containing more pictures of the web app.
            </p>

            <Tags spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default Lango;