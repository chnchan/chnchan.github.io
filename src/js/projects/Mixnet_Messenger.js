
import React from 'react';
import Tags from '../components/tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = 'https://github.com/chnchan/Mixnet-Messager';
const gd_link = 'https://drive.google.com/drive/folders/1tiPc7JId6WRc9I-qV7uXqInQjBBSVUkk?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1NjZRilz2YzXvqLahKPv8b9xB21Z3jrRl',
        thumbnail: 'https://drive.google.com/thumbnail?id=1NjZRilz2YzXvqLahKPv8b9xB21Z3jrRl',
        description: ''
    },
    {
        original: 'https://drive.google.com/uc?id=1gqo_LSj112zQ1gnufwjst82v66_7S1tK',
        thumbnail: 'https://drive.google.com/thumbnail?id=1gqo_LSj112zQ1gnufwjst82v66_7S1tK',
        description: 'Hosting Server'
    },
    {
        original: 'https://drive.google.com/uc?id=1aUQa5mixPgfEpWV2nd1X6DYlfPpl3lmP',
        thumbnail: 'https://drive.google.com/thumbnail?id=1aUQa5mixPgfEpWV2nd1X6DYlfPpl3lmP',
        description: "Mixnet Server"
    },
    
];


function MixnetMessenger(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer Python />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                <span role='img' aria-label='package'>&#128230;</span>This project uses:{" "}
                <a target='_blank' className='underline' href='https://flask.palletsprojects.com/en/1.1.x/' rel="noopener noreferrer">Flask</a>,{" "}
                <a target='_blank' className='underline' href='https://flask-socketio.readthedocs.io/en/latest/' rel="noopener noreferrer">Flask-SocketIO</a>,{" "}
                <a target='_blank' className='underline' href='https://pycryptodome.readthedocs.io/en/latest/' rel="noopener noreferrer">PyCryptodome</a>,{" "}
                <a target='_blank' className='underline' href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' rel="noopener noreferrer">Web Crypto API</a>,{" "}
                <a target='_blank' className='underline' href='https://apscheduler.readthedocs.io/en/stable/' rel="noopener noreferrer">Advanced Python Scheduler</a>,{" "}
                <a target='_blank' className='underline' href='https://requests.readthedocs.io/en/master/' rel="noopener noreferrer">Requests</a>.
            </p>

            <p className='pad_top pad_bottom'>
                In most modern messenger application, encryption are enforced to protect people's conversation from being leaked to an attacker. However, our metadata are still easily obtained by attackers. Our mixnet messenger aims to solve this problem while maintaining a smooth and seamless experience for the users. Our implmentation uses onion routing where the hosting server and mixnet servers will each 'peel' off a layer until it gets to the intended recipient.
                <br/><br/>
                The repo is set to public so you can try it on your machine as well! You can find the instructions on the Readme file on the repo.
            </p>

            <Tags date='May 2020' spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default MixnetMessenger;