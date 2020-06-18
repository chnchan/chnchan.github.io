
import React from 'react';
import Tags from '../Tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = 'https://drive.google.com/drive/folders/1reIGptEFIwWw_BL-vZ3k7X4Z4mGc5XBh?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1GSooC540xIEKbWEqY8RtwpHSWVUr4c49',
        thumbnail: 'https://drive.google.com/thumbnail?id=1GSooC540xIEKbWEqY8RtwpHSWVUr4c49',
        description: 'Version 1 Home View'
    },
    {
        original: 'https://drive.google.com/uc?id=1mtoHERVMJwCnXPS1GiW17YP1ENNGDJwe',
        thumbnail: 'https://drive.google.com/thumbnail?id=1mtoHERVMJwCnXPS1GiW17YP1ENNGDJwe',
        description: 'Version 1 Projects View'
    },
    {
        original: 'https://drive.google.com/uc?id=1IEASx1ICdf4igkxnnPKy80xfzR2rmeZG',
        thumbnail: 'https://drive.google.com/thumbnail?id=1IEASx1ICdf4igkxnnPKy80xfzR2rmeZG',
        description: 'Version 1.1 Home View'
    },
    {
        original: 'https://drive.google.com/uc?id=1hrcPpTtaih4p8QzmeHX5vcB-FuehpYxM',
        thumbnail: 'https://drive.google.com/thumbnail?id=1hrcPpTtaih4p8QzmeHX5vcB-FuehpYxM',
        description: 'Version 2'
    },
    {
        original: 'https://drive.google.com/uc?id=1TyT7A-kUg7PVBKjb79nP3-lEvA8ARwe3',
        thumbnail: 'https://drive.google.com/thumbnail?id=1TyT7A-kUg7PVBKjb79nP3-lEvA8ARwe3',
        description: 'Version 3.0'
    }
];


function PersonalWebsite(props) {
    return (
        <div className='project_container'>
            <Tags spacer HTML CSS JavaScript />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                  <span role='img' aria-label="package">&#128230;</span> The current version of this project uses:{" "}
                  <a target='_blank' className='underline' href='https://github.com/facebook/create-react-app' rel="noopener noreferrer">React</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/react-router-dom' rel="noopener noreferrer">react-router-dom</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/react-transition-group' rel="noopener noreferrer">react-transition-group</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/react-router-dom' rel="noopener noreferrer">rc-collapse</a>,{" "}
                  <a target='_blank' className='underline' href='https://www.npmjs.com/package/react-modal-image' rel="noopener noreferrer">react-image-gallery</a>.
            </p>

            <p className='pad_top pad_bottom'>
                While this is something I started for fun, I have been maintaining and improving the website in ways that I see fitting. These are the major iterations of the website.
            </p>

            <Tags spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default PersonalWebsite;