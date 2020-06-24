
import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import Navigation from './Nav';
import Footer from './Footer';
import Tags from './components/tags';
import SwitchButton from './components/switch_button';

import 'rc-collapse/assets/index.css';
import '../css/Projects.css';
import '../css/Modal.css';
import '../css/components/divider.css';
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
import PixArt from './projects/PixArt';
import MixnetMessenger from './projects/Mixnet_Messenger';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
        this.onloadFunc = props.onloadFunc.bind(this);
        this.toggle_checked = this.toggle_checked.bind(this);
    }

    toggle_checked() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        var projects
        if (this.state.checked === false)
            projects = (
                <Collapse accordion={true}>
                    {/* iOS */}
                    <Panel header='PixArt' extra={<Tags iOS />}><PixArt onError={error_img} /></Panel>
                    {/* Security */}
                    <Panel header='Mixnet Messenger' extra={<Tags Web Security />}><MixnetMessenger onError={error_img} /></Panel>
                    {/* Web */}
                    <Panel header='Personal Website' extra={<Tags Web />}><PersonalWebsite onError={error_img} /></Panel>
                    <Panel header='Lango! - the Flashcard Web App' extra={<Tags Web />}><Lango onError={error_img} /></Panel>
                    <Panel header='6 Hour Weather Forcast Web App' extra={<Tags Web />}><WeatherForcast onError={error_img} /></Panel>
                    <Panel header='Virtual Receipt - the Bill Splitter v2' extra={<Tags Web />}><VirtualReceipt onError={error_img} /></Panel>
                    <Panel header='Hassle-Free - the Bill Splitter v1' extra={<Tags Web />}><HassleFree onError={error_img} /></Panel>
                    {/* Computer Vision */}
                    <Panel header='Image Resizing with Seaming Carving' extra={<Tags Com_Vis='Vision' />}><SeamCarving onError={error_img} /></Panel>
                    <Panel header='Image Stitcher with User Selected Correspondence' extra={<Tags Com_Vis='Vision' />}><ImageStitcher onError={error_img} /></Panel>
                    {/* Computer Graphics */}
                    <Panel header="3D System with Phong Lighting Model, Gourand Shading, and Painter's Algorithm" extra={<Tags Com_Graph='Graphics' />}><ProjectionSystem3DLighting onError={error_img} /></Panel>
                    <Panel header='3D Transformation and Projection System' extra={<Tags Com_Graph='Graphics' />}><ProjectionSystem3Dt onError={error_img} /></Panel>
                    <Panel header='Simple 2D Drawing System' extra={<Tags Com_Graph='Graphics' />}><DrawingSystem2D onError={error_img} /></Panel>
                </Collapse>
            );
        else 
            projects = (
                <Collapse accordion={true}>
                    {/* 2020 */}
                    <Panel header='Personal Website' extra={<Tags Web />}><PersonalWebsite onError={error_img} /></Panel>
                    <Panel header='Mixnet Messenger' extra={<Tags Web Security />}><MixnetMessenger onError={error_img} /></Panel>
                    {/* 2019 */}
                    <Panel header='PixArt' extra={<Tags iOS />}><PixArt onError={error_img} /></Panel>
                    <Panel header='Lango! - the Flashcard Web App' extra={<Tags Web />}><Lango onError={error_img} /></Panel>
                    <Panel header='Image Stitcher with User Selected Correspondence' extra={<Tags Com_Vis='Vision' />}><ImageStitcher onError={error_img} /></Panel>
                    <Panel header='6 Hour Weather Forcast Web App' extra={<Tags Web />}><WeatherForcast onError={error_img} /></Panel>
                    <Panel header='Image Resizing with Seaming Carving' extra={<Tags Com_Vis='Vision' />}><SeamCarving onError={error_img} /></Panel>
                    <Panel header="3D System with Phong Lighting Model, Gourand Shading, and Painter's Algorithm" extra={<Tags Com_Graph='Graphics' />}><ProjectionSystem3DLighting onError={error_img} /></Panel>
                    <Panel header='3D Transformation and Projection System' extra={<Tags Com_Graph='Graphics' />}><ProjectionSystem3Dt onError={error_img} /></Panel>
                    {/* 2018 */}
                    <Panel header='Simple 2D Drawing System' extra={<Tags Com_Graph='Graphics' />}><DrawingSystem2D onError={error_img} /></Panel>
                    <Panel header='Virtual Receipt - the Bill Splitter v2' extra={<Tags Web />}><VirtualReceipt onError={error_img} /></Panel>
                    <Panel header='Hassle-Free - the Bill Splitter v1' extra={<Tags Web />}><HassleFree onError={error_img} /></Panel>
                </Collapse>
            );

        return (
            <div id='Projects'>
                <Navigation onloadFunc={this.onloadFunc} />
                <div>
                    <hr className='section-break-5 top' />
                    <div id='Page'>
                        <h2>Featured:</h2>
                        <Collapse accordion={true}>
                            <Panel header='PixArt' extra={<Tags iOS />}><PixArt onError={error_img} /></Panel>
                        </Collapse>
                        <hr className='section-break-5 middle' />

                        <div className='container'>
                            <h2>All Projects:</h2>
                            <div className='sort_container small_text'>
                                <div>Sort by : Field</div>
                                <SwitchButton checked={this.state.checked} callback={this.toggle_checked}/>
                                <div> Latest</div>
                            </div>
                        </div>
                        
                        
                        {projects}
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
}


export default Projects;