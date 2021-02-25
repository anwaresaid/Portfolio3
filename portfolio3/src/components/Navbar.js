import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

import logo from '../anwardev2.png';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link smooth={true} to="home" offset={-100}  className="nav-link active" aria-current="page" href="#">Home</Link >
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about" offset={-100}  className="nav-link" href="#">about me</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="services" offset={-100}  className="nav-link" href="#">services</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="experience" offset={-100}  className="nav-link" href="#">Experience</Link >
        </li>
        <li className="nav-item">
          <Link smooth={true} to="port" offset={-100}  className="nav-link" href="#">portfolio</Link >
        </li>
        <li className="nav-item">
          <Link smooth={true} to="contact"  offset={-100} className="nav-link" href="#">contact</Link >
        </li>
      </ul>
    </div>
  </div>
                </div>  
</nav>
    )
}

export default Navbar
