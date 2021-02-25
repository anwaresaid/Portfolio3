import React from 'react'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PopupboxManager,PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css'

import port1 from '../port1.png';
import port2 from '../port2.png';
import port3 from '../port3.png';
import boxing from '../boxing.jpg';
import avatar from '../avatar.jpg';
import school from '../school.png';
const Portfolio = () => {

    var check1=false;
    var check2=false;
    var check3=false;
    var check4=false;
    var check5=false;
    var check6=false;
    //port1
    const openPopupboxPort1=()=>{
        const content=(
            
            <>
            <img className="port-img-popup" src={port1} alt="portfolio number 1"/>
            <p>In this project I focused mostly on react, functions and a bit server side.</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/anwaresaid/anwarPort/")}>https://github.com/anwaresaid/anwarPort/</a>
            <br />    
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://anwr-dev-ly.web.app/")}>https://anwr-dev-ly.web.app/</a>
       </>
        )
        check1=true;
        check2=false;
        check3=false;
        check4=false;
        check5=false;
        check6=false;
        PopupboxManager.open({content})
        
    }
    const popupboxconfigport1={
        titleBar:{
            enable:true,
            text:"React Portfolio",
        },
        fadeIn:true,
        fadeInSpeed:500,

    }


    //port2
    const openPopupboxPort2=()=>{
        const content=(

            <>
            <img className="port-img-popup" src={port2} alt="portfolio number 2"/>
            <p>In this project I tested Gatsby, created a Portfolio using Gatsby tools.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://peaceful-clarke-6796bd.netlify.app/")}>https://peaceful-clarke-6796bd.netlify.app</a>
        </>
        )
        
        PopupboxManager.open({content})
    }
    const popupboxconfigport2={
        titleBar:{
            enable:true,
            text:"Gatsby Portfolio",
        },
        fadeIn:true,
        fadeInSpeed:500,

    }


    //port3
    const openPopupboxPort3=()=>{
        const content=(

            <>
            <img className="port-img-popup" src={port3} alt="portfolio number 1"/>
            <p>In this project I focused mostly on making a professional website, I focused on all aspects front-end and back-end and tried my best on the css part.</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/anwaresaid/Portfolio3/")}>https://github.com/anwaresaid/anwarPort/</a>
            <br />    
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://anwr-dev-ly.web.app/")}>https://anwr-dev-ly.web.app/</a>
       </>
        )
        
        PopupboxManager.open({content})
    }
    const popupboxconfigport3={
        titleBar:{
            enable:true,
            text:"Professional Portfolio",
        },
        fadeIn:true,
        fadeInSpeed:500,

    }


    //boxingApp
    const openPopupboxBoxing=()=>{
        const content=(

            <>
            <img className="port-img-popup" src={boxing} alt="Boxing app"/>
            <p>Boxing app built with android studio</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/anwaresaid/BoxerApp/")}>https://github.com/anwaresaid/BoxerApp/</a>
        </>
        )
        
        PopupboxManager.open({content})
    }
    const popupboxconfigBoxing={
        titleBar:{
            enable:true,
            text:"Boxing app",
        },
        fadeIn:true,
        fadeInSpeed:500,

    }

    //School Registartion system
    const openPopupboxSchool=()=>{
        const content=(

            <>
            <img className="port-img-popup" src={school} alt="School registration system"/>
            <p>The project emphasized the usage of various design patterns to master their adequate usage in a complex system.Note: UI is not implemented</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/anwaresaid/BoxerApp/")}>https://github.com/anwaresaid/BoxerApp/</a>
        </>
        )
        
        PopupboxManager.open({content})
    }
    const popupboxconfigschool={
        titleBar:{
            enable:true,
            text:"School registration system",
        },
        fadeIn:true,
        fadeInSpeed:500,

    }

    //School Registartion system
    const openPopupboxHurdles=()=>{
        const content=(

            <>
            <img className="port-img-popup" src={avatar} alt="Hurdles Unity"/>
            <p>The aim of the project is to incorporate motion sensing using Kinect Camera and Unity3D to encourage physical exercise utilizing a game-like setting.</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://dev.azure.com/hurdles-senior-project/_git/Hurdles")}>https://dev.azure.com/hurdles-senior-project/_git/Hurdles</a>
        </>
        )
        
        PopupboxManager.open({content})
    }
    const popupboxconfigHurdles={
        titleBar:{
            enable:true,
            text:"Hurdles Unity",
        },
        fadeIn:true,
        fadeInSpeed:500,

    }

    

    return (
        <div id="port" className="port-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    Portfolio & Projects
                </h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="port-img-box" onClick={openPopupboxPort1}>
                        <img className="port-img" src={port1} alt="my first portfolio"/>
                        <FontAwesomeIcon className="port-icon" icon={faSearchPlus}/>
                        <div className="overflow"></div>
                       
                    </div>
                {/* --- */}
                    <div className="port-img-box" onClick={openPopupboxPort2}>
                        <img className="port-img" src={port2} alt="my second portfolio"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="port-icon" icon={faSearchPlus}/>
                    </div>
                {/* --- */}
                    <div className="port-img-box" onClick={openPopupboxPort3}>
                        <img className="port-img" src={port3} alt="my third portfolio"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="port-icon" icon={faSearchPlus}/>
                    </div>

                    {/* --- */}
                    <div className="port-img-box" onClick={openPopupboxBoxing}>
                        <img className="port-img" src={boxing} alt="boxing android app"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="port-icon" icon={faSearchPlus}/>
                    </div>
                    {/* --- */}
                    <div className="port-img-box" onClick={openPopupboxSchool}>
                        <img className="port-img" src={school} alt="School Registration system (No UI)"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="port-icon" icon={faSearchPlus}/>
                    </div>
                    {/* --- */}
                    <div className="port-img-box" onClick={openPopupboxHurdles}>
                        <img className="port-img" src={avatar} alt="Hurdles Unity"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="port-icon" icon={faSearchPlus}/>
                    </div>
            </div>
            </div>
             <div>
              
            <PopupboxContainer {...popupboxconfigport1}/>
            <PopupboxContainer {...popupboxconfigport2}/>
            <PopupboxContainer {...popupboxconfigport3}/>
            <PopupboxContainer {...popupboxconfigBoxing}/>
            <PopupboxContainer {...popupboxconfigschool}/>
            <PopupboxContainer {...popupboxconfigHurdles}/>
              
            </div>               
            
        </div>
    )
}

export default Portfolio
