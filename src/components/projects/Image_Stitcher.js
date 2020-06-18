
import React from 'react';
import Tags from '../Tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = 'https://drive.google.com/drive/folders/1CRw1CmJPB-PuTsoeE7gR7uAyx4S4S2EG?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=17OQsx9Xfl8LvORK7C5buqnqCZtl_aZSr',
        thumbnail: 'https://drive.google.com/thumbnail?id=17OQsx9Xfl8LvORK7C5buqnqCZtl_aZSr',
        description: 'Result from a1, a2'
    },
    {
        original: 'https://drive.google.com/uc?id=1gCxs8036f5eHokrKA_H9gVdnELqWH-w5',
        thumbnail: 'https://drive.google.com/thumbnail?id=1gCxs8036f5eHokrKA_H9gVdnELqWH-w5',
        description: 'Result from c1, c2'
    }
];


function ImageStitcher(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer Matlab />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_top pad_bottom'>
                This matlab script combines two images with overlapping fields of views into one. The script may work if the two images are taken at different angles, but it is not crafted for that. The script will prompt the users to mark items that exists on both images (correspondences). The result are heavily depended on the user marked correspondences.
            </p>

            <Tags spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default ImageStitcher;
