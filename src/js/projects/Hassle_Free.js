
import React from 'react';
import Tags from '../components/tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = 'https://github.com/chnchan/Hassle-Free';
const gd_link = 'https://drive.google.com/drive/folders/1omx8fOcIk31SfDPgCzT9g9WyVpx2g_N8?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1QGh8M2B7PJzjv9PvFnJLLT_h1RA0Bal8',
        thumbnail: 'https://drive.google.com/thumbnail?id=1QGh8M2B7PJzjv9PvFnJLLT_h1RA0Bal8',
        description: ''
    },
    {
        original: 'https://drive.google.com/uc?id=1mOV3OTtyAVJLTsp6LMJAIGKx4j7lSwPo',
        thumbnail: 'https://drive.google.com/thumbnail?id=1mOV3OTtyAVJLTsp6LMJAIGKx4j7lSwPo',
        description: ''
    }
];


function HassleFree(props) {
    return (
        <div className='project_container'>
            <Tags spacer HTML CSS JavaScript />
            <ImageGallery items={images} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>Splitting bill is a somewhat annoying process. This website aims to provide a solution to that. This website is live on <a className='underline' href='https://chnchan.github.io/Hassle-Free/'>https://chnchan.github.io/Hassle-Free/</a>.</p>

            <Tags date='May 2018' spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default HassleFree;