
import React from 'react';
import Tags from '../components/tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = 'https://github.com/chnchan/PixArt';
const gd_link = 'https://drive.google.com/drive/folders/1yCwdW2JAWBHeJC7thC8Iz6HMTb8b9suL?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1HyJ8Msp8vQaCECgKulKLkUNOvCuBa36d',
        thumbnail: 'https://drive.google.com/thumbnail?id=1HyJ8Msp8vQaCECgKulKLkUNOvCuBa36d',
        description: "Creating Pixel Art"
    },
    {
        original: 'https://drive.google.com/uc?id=1blgqu7YkOft7n_95Nfhq9lWws9RkGJCd',
        thumbnail: 'https://drive.google.com/thumbnail?id=1blgqu7YkOft7n_95Nfhq9lWws9RkGJCd',
        description: 'Publishing it'
    },
    {
        original: 'https://drive.google.com/uc?id=1XgCaaRTh0MDlEH_SCanAJXYhyUzV_P1h',
        thumbnail: 'https://drive.google.com/thumbnail?id=1XgCaaRTh0MDlEH_SCanAJXYhyUzV_P1h',
        description: "Browse other people's work"
    },
    {
        original: 'https://drive.google.com/uc?id=1w_2_3huPwiXA2QpflS1jhrA2a4U5roBB',
        thumbnail: 'https://drive.google.com/thumbnail?id=1w_2_3huPwiXA2QpflS1jhrA2a4U5roBB',
        description: 'Navigation menu'
    },
    {
        original: 'https://drive.google.com/uc?id=1kK5MRgL5_fpeq--syuLKSPx1yUojBfIt',
        thumbnail: 'https://drive.google.com/thumbnail?id=1kK5MRgL5_fpeq--syuLKSPx1yUojBfIt',
        description: 'AirDrop supported'
    }
];


function PixArt(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer Swift />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                <span role='img' aria-label='package'>&#128230;</span>This project uses:{" "}
                <a target='_blank' className='underline' href='https://developer.apple.com/documentation/xcode/' rel="noopener noreferrer">Xcode</a>,{" "}
                <a target='_blank' className='underline' href='https://firebase.google.com/docs' rel="noopener noreferrer">Google's Firebase</a>.
            </p>

            <p className='pad_top pad_bottom'>
                PixArt is an online platform where users can jump in and make their fantasy comes true. Users can choose to publish their masterpiece and have other people rate them. Rating is as easy as swiping left and right (And yes, we took inspirations from Tinder). 

                Unfortunately, this app is not on App store as the annual fee is somewhat staggering for a typical student. However, we would hate to have this magical experience goes to waste. Therefore, we decided to set the repo to public so you can test it out! Click the little github icon on the bottom to access the repo.
            </p>

            <Tags date='Dec 2019' spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default PixArt;