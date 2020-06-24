
import React from 'react';
import Tags from '../components/tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = 'https://drive.google.com/drive/folders/1qdMf1drYnwOrhMVvK5sTOgFNdnmLKw64?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1iXyQw0_zUWr2rlV2WpOmo3Au9QdPALQl',
        thumbnail: 'https://drive.google.com/thumbnail?id=1iXyQw0_zUWr2rlV2WpOmo3Au9QdPALQl',
        description: ''
    },
    {
        original: 'https://drive.google.com/uc?id=1-evfWI6S2cvi2wwEXwCfNS3CT0OPKPgt',
        thumbnail: 'https://drive.google.com/thumbnail?id=1-evfWI6S2cvi2wwEXwCfNS3CT0OPKPgt',
        description: 'Rasterized Hexagon'
    },
    {
        original: 'https://drive.google.com/uc?id=1A7d0K57r1uzF0FhJazB1mnQeKBJ4NgdS',
        thumbnail: 'https://drive.google.com/thumbnail?id=1A7d0K57r1uzF0FhJazB1mnQeKBJ4NgdS',
        description: 'Rotated Triangle'
    }
];


function DrawingSystem2D(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer C__='C++' />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                <span role='img' aria-label='package'>&#128230;</span>This project uses:{" "}
                <a target='_blank' className='underline' href='https://www.opengl.org' rel="noopener noreferrer">OpenGL</a>.
            </p>

            <p className='pad_top pad_bottom'>
                This program is a simple 2D drawing board with the ability to draw, rasterize, move, resize, and rotate objects. However, the rasterize feature only supports convex polygons. Note that the course professor prohibited student from using advanced function like glVertex2() for this project.
            </p>

            <Tags date='Oct 2018'spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default DrawingSystem2D;
