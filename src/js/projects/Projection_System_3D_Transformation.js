
import React from 'react';
import Tags from '../components/tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = 'https://drive.google.com/drive/folders/1-0qt2SSY-S3v7I6iMgrgt6jcfhMihrDn?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1xwOmwl3FHbLgKHC4R2OOSuoEZcH8B90p',
        thumbnail: 'https://drive.google.com/thumbnail?id=1xwOmwl3FHbLgKHC4R2OOSuoEZcH8B90p',
        description: ''
    },
    {
        original: 'https://drive.google.com/uc?id=1zmuTpqyGRWdhwiyyyKXvUy9Wc24mMDyP',
        thumbnail: 'https://drive.google.com/thumbnail?id=1zmuTpqyGRWdhwiyyyKXvUy9Wc24mMDyP',
        description: ''
    }
];


function ProjectionSystem3Dt(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer C__='C++' />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                <span role='img' aria-label='package'>&#128230;</span>This project uses:{" "}
                <a target='_blank' className='underline' href='https://www.opengl.org' rel="noopener noreferrer">OpenGL</a>.
            </p>

            <p className='pad_top pad_bottom'>
                This program is a simple 3D drawing board with the ability to move, resize, and rotate objects. Objects loaded from a txt file containing coordinates of each mesh.
            </p>

            <Tags date='Oct 2018' spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default ProjectionSystem3Dt;