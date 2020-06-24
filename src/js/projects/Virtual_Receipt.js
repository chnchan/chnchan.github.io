
import React from 'react';
import Tags from '../components/tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = 'https://github.com/chnchan/Virtual-Receipt';
const gd_link = 'https://drive.google.com/drive/folders/1rGmVlivAOiRSTdsEFVMyblubxc02rpOe?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1EsJSsbDYDcBAxt2l6u0rJvArHoAVB6hs',
        thumbnail: 'https://drive.google.com/thumbnail?id=1EsJSsbDYDcBAxt2l6u0rJvArHoAVB6hs',
        description: ''
    }
];


function VirtualReceipt(props) {
    return (
        <div className='project_container'>
            <Tags spacer HTML CSS JavaScript />
            <ImageGallery items={images} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>Splitting bill is a somewhat annoying process. This website aims to provide a solution to that. This is an improved version of the Hassle-Free - the Bill Splitter. This website is live on <a className='underline' href='https://chnchan.github.io/Virtual-Receipt/'>https://chnchan.github.io/Virtual-Receipt/</a>.</p>

            <Tags date='Aug 2018' spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default VirtualReceipt;