import React from 'react';
import {FacebookMessengerShareButton,FacebookIcon,LinkedinShareButton,LinkedinIcon,WhatsappIcon,WhatsappShareButton} from 'react-share';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>City: Ankara,Cankaya,Hosdere </p>
                    </div>
                    <div className="d-flex">
                        <a href="tel:555-555-555">+905050909881 </a>
                    </div>
                    <div className="d-flex">
                        <p>anwr.esaid@gmail.com</p>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col"> 
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col"> 
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center"> 
                            <FacebookMessengerShareButton 
                            url={"https://www.facebook.com/anwar.elsaid/"}
                             quote={"Full stack developer"}
                            hashtag="#Developer"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookMessengerShareButton>

                            <WhatsappShareButton 
                            url={"https://www.linkedin.com/in/anwar-esaid-196544a7/"}
                             quote={"Full stack developer"}
                            hashtag="#Developer"
                            >
                                <WhatsappIcon className="mx-3" size={36}/>
                            </WhatsappShareButton>

                            <LinkedinShareButton 
                            url={"https://www.linkedin.com/in/anwar-esaid-196544a7/"}
                             quote={"Full stack developer"}
                            hashtag="#Developer"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;AnwarDev | All rights Reserved
                        </p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

 export default Footer
