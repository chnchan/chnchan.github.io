
import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import Navigation from './Nav';
import Footer from './Footer';
import Tags from './Tags';
import 'rc-collapse/assets/index.css';
import '../css/Projects.css';
import '../css/Modal.css';
import '../css/Divider.css';
import '../css/Animations.css';

import error_img from '../img/error_img.png'
import HassleFree from './projects/Hassle_Free';
import VirtualReceipt from './projects/Virtual_Receipt';
import WeatherForcast from './projects/Weather_Forcast';
import Lango from './projects/Lango';
import PersonalWebsite from './projects/Personal_Website';
import SeamCarving from './projects/Seam_Carving';
import ImageStitcher from './projects/Image_Stitcher';
import DrawingSystem2D from './projects/Drawing_System_2D';
import ProjectionSystem3Dt from './projects/Projection_System_3D_Transformation';
import ProjectionSystem3DLighting from './projects/Projection_System_3D_lighting';


function Projects(props) {
    return (
        <div id='Projects'>
            <Navigation onloadFunc={props.onloadFunc} />

            <div>
                <hr className='section-break-5 top' />
                <div id='Page'>
                    <Collapse accordion={true}>
                        <Panel header='Personal Website' extra={<Tags Web />}><PersonalWebsite onError={error_img} /></Panel>
                        <Panel header='Lango! - the Flashcard Web App' extra={<Tags Web />}><Lango onError={error_img} /></Panel>
                        <Panel header='6 Hour Weather Forcast Web App' extra={<Tags Web />}><WeatherForcast onError={error_img} /></Panel>
                        <Panel header='Virtual Receipt - the Bill Splitter v2' extra={<Tags Web />}><VirtualReceipt onError={error_img} /></Panel>
                        <Panel header='Hassle-Free - the Bill Splitter v1' extra={<Tags Web />}><HassleFree onError={error_img} /></Panel>

                        <Panel header='Image Resizing with Seaming Carving' extra={<Tags Com_Vis='Computer Vision' />}><SeamCarving onError={error_img} /></Panel>
                        <Panel header='Image Stitcher with User Selected Correspondence' extra={<Tags Com_Vis='Computer Vision' />}><ImageStitcher onError={error_img} /></Panel>

                        <Panel header="3D System with Phong Lighting Model, Gourand Shading, and Painter's Algorithm" extra={<Tags Com_Graph='Computer Graphics' />}><ProjectionSystem3DLighting onError={error_img} /></Panel>
                        <Panel header='3D Transformation and Projection System' extra={<Tags Com_Graph='Computer Graphics' />}><ProjectionSystem3Dt onError={error_img} /></Panel>
                        <Panel header='Simple 2D Drawing System' extra={<Tags Com_Graph='Computer Graphics' />}><DrawingSystem2D onError={error_img} /></Panel>

                    </Collapse>

                    {/* <section className='comp_vision'>
                        <h2>Computer Vision:</h2>
                        <Collapse accordion={true}>
                            
                        </Collapse>
                    </section> */}

                </div>
                <hr className='section-break-5 bottom' />
            </div>

            <Footer />
        </div>
    );
}


export default Projects;