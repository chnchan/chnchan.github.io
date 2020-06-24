
import React from 'react';
import Tags from '../components/tags';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const repo_link = '';
const gd_link = 'https://drive.google.com/drive/folders/1M7syZaek7dxZx4owtXTWr0N2w3_QMuz5?usp=sharing';
const images = [
    {
        original: 'https://drive.google.com/uc?id=1LEG_KPpnOkh7OojAsuEUy5v4IEilcnY0',
        thumbnail: 'https://drive.google.com/thumbnail?id=1LEG_KPpnOkh7OojAsuEUy5v4IEilcnY0',
        description: ''
    },
    {
        original: 'https://drive.google.com/uc?id=14s1P0oT0v6z45gYJI_YmrV04EjfQYR3D',
        thumbnail: 'https://drive.google.com/thumbnail?id=14s1P0oT0v6z45gYJI_YmrV04EjfQYR3D',
        description: 'Shifted light source from (50, 0, 0) to (-10, -10, 2)'
    },
    {
        original: 'https://drive.google.com/uc?id=1JSH0zIukL3u--8XZCVZSLV8rBUGqES-p',
        thumbnail: 'https://drive.google.com/thumbnail?id=1JSH0zIukL3u--8XZCVZSLV8rBUGqES-p',
        description: 'Half-tone'
    },
    {
        original: 'https://drive.google.com/uc?id=1Met9uJJNJRuZy7U7oXx85IElwnfnVeR-',
        thumbnail: 'https://drive.google.com/thumbnail?id=1Met9uJJNJRuZy7U7oXx85IElwnfnVeR-',
        description: 'Half-tone - Colored'
    }
];


function ProjectionSystem3DLighting(props) {
    return (
        <div className='project_container'>
            <Tags Coursework spacer C__='C++' />
            <ImageGallery items={images} onErrorImageURL={props.onError} showPlayButton={false} autoPlay={false} />

            <p className='pad_bottom'>
                <span role='img' aria-label='package'>&#128230;</span>This project uses:{" "}
                <a target='_blank' className='underline' href='https://www.opengl.org' rel="noopener noreferrer">OpenGL</a>.
            </p>

            <p className='pad_top pad_bottom'>
                Unlike 3D Transformation and Projection System, this program focuses on rastering and illumination displayed in each plane. Meshes are rasterized using Gourand shading and painter's algorithm (to solve the hidden surface problem). Lights are simulated using the Phong lighting model. As a final touch, half-toning were implemented to simulate different brightnesses as if this was on a binary display device. 
            </p>

            <Tags date='Nov 2018' spacer Github={repo_link} GoogleDrive={gd_link} />
        </div>
    );
}

export default ProjectionSystem3DLighting;
