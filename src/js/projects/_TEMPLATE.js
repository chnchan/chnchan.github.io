
import React from 'react';
import Tags from '../components/tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = '';
const images = [
    {
        original: '',
        thumbnail: '',
        description: ''
    },
    {
        original: '',
        thumbnail: '',
        description: ''
    },
    {
        original: '',
        thumbnail: '',
        description: ''
    }
];


function ____________(props) {
    return (
        <div className='project_container'>
            <Tags ____________ spacer ____________ />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                <span role='img' aria-label='package'>&#128230;</span>This project uses:{" "}
                <a target='_blank' className='underline' href='' rel="noopener noreferrer">____________</a>,{" "}
            </p>

            <p className='pad_top pad_bottom'>
                ____________
            </p>

            <Tags spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default ____________;