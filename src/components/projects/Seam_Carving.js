
import React from 'react';
import Tags from '../Tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = 'https://drive.google.com/drive/folders/1SspMBV3_aP6vmfuCd53Y7KBfUoyBgx7o?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1Y3k081BKRMz9mwlweZd9DdPNYTAdBDPZ',
        thumbnail: 'https://drive.google.com/thumbnail?id=1Y3k081BKRMz9mwlweZd9DdPNYTAdBDPZ',
        description: 'I1 - Original'
    },
    {
        original: 'https://drive.google.com/uc?id=1Cgeb2ZZQRwNVHKUHDLt-vkZRCp3R6F0d',
        thumbnail: 'https://drive.google.com/thumbnail?id=1Cgeb2ZZQRwNVHKUHDLt-vkZRCp3R6F0d',
        description: 'I1 - Tradition Resize -300 width'
    },
    {
        original: 'https://drive.google.com/uc?id=1uNw2t0nOn-EAf3NdEG8-Off5I4C7A6Gv',
        thumbnail: 'https://drive.google.com/thumbnail?id=1uNw2t0nOn-EAf3NdEG8-Off5I4C7A6Gv',
        description: 'I1 - Seam Carving -300 width'
    },
    {
        original: 'https://drive.google.com/uc?id=1IzwCPXItAqvedsm636kSfyVZlefvIUyV',
        thumbnail: 'https://drive.google.com/thumbnail?id=1IzwCPXItAqvedsm636kSfyVZlefvIUyV',
        description: 'I2 - Original'
    },
    {
        original: 'https://drive.google.com/uc?id=1-aKjQpWhn3H6k_861JLu5N2VLO2iRlpX',
        thumbnail: 'https://drive.google.com/thumbnail?id=1-aKjQpWhn3H6k_861JLu5N2VLO2iRlpX',
        description: 'I2 - Seam Carving'
    },
    {
        original: 'https://drive.google.com/uc?id=1333Y2Et2xw3ikjN3FhTM1ud8yA1xDKUF',
        thumbnail: 'https://drive.google.com/thumbnail?id=1333Y2Et2xw3ikjN3FhTM1ud8yA1xDKUF',
        description: 'Seam Carving Fail 1'
    },
    {
        original: 'https://drive.google.com/uc?id=1xbQ2VWOh900n6NKzOlAUHqhcEErXDe6d',
        thumbnail: 'https://drive.google.com/thumbnail?id=1xbQ2VWOh900n6NKzOlAUHqhcEErXDe6d',
        description: 'Seam Carving Fail 2'
    }
];


function SeamCarvin(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer Matlab />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_top pad_bottom'>
                This matlab script applies the principle of seam carving from <a target='_blank' className='underline' href='https://web.cs.ucdavis.edu/~yjlee/teaching/ecs189g-spring2015/seamcarving.pdf' rel='noopener noreferrer'>this paper</a> to achieve content-aware image resizing. It uses dynamic programming to determine the 'seam' with the least important and remove it (or duplicate it when extending). The process is repeated until the image reaches the desired width / height.
            </p>

            <Tags spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default SeamCarvin;
