import React from 'react'
import { faDesktop,faFileCode,faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5"> my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="iconsser" icon={faMobileAlt} size='2x'/></div>
                                <h3>Mobile app development</h3>
                                <p>I make sure your mobile application is smooth and always focus on meeting all the requirments!</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle" ><FontAwesomeIcon className="iconsser" icon={faDesktop} size='2x'/></div>
                                <h3>web design</h3>
                                <p> proffessional looking websites with clean and modern look.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle" ><FontAwesomeIcon className="iconsser" icon={faFileCode} size='2x'/></div>
                                <h3>web development</h3>
                                <p>I try my best to use new proven technologies to implement your website</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Services
 