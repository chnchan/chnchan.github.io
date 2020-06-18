
import React from 'react';
import Tags from '../Tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = 'https://drive.google.com/drive/folders/1nNhNPM0eA_FFx5afxziqV5PYBHbbOZYJ?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=17uSUJ2eeDJUR2m5VS9VgwpuD9eIDVzwi',
        thumbnail: 'https://drive.google.com/thumbnail?id=17uSUJ2eeDJUR2m5VS9VgwpuD9eIDVzwi',
        description: ''
    },
    {
        original: 'https://drive.google.com/uc?id=1C-ZpOn3shGbiJxRXiE115rs-kRI-hACQ',
        thumbnail: 'https://drive.google.com/thumbnail?id=1C-ZpOn3shGbiJxRXiE115rs-kRI-hACQ',
        description: 'Mobile View'
    }
];


function WeatherForcast(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer HTML CSS JavaScript />
            <ImageGallery items={images} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                <span role='img' aria-label='package'>&#128230;</span> This project uses:{" "}
                <a target='_blank' className='underline' href='https://openweathermap.org/api' rel="noopener noreferrer">OpenWeatherMap API</a>.
            </p>

            <p className='pad_top pad_bottom'>
                This web app shows the local weather forcast in the next 6 hours. It fetches weather data through OpenWeatherMap's API and doppler radar map from <a className='underline' href='https://www.weather.gov/jetstream/ridge_download'>National Weather Service</a>. 
                <br/><br/>
                Unfortunately, the OpenWeatherMap API only offers one month of free access. Instead of hosting the website with limited capability, I decided to not host it at all. Therefore, there are no live version of this web app available.
            </p>

            <Tags spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default WeatherForcast;