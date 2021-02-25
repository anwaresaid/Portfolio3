import React from 'react'
import Typed from 'react-typed';
import {Link} from 'react-scroll';
export const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>web app and mobile app Development</h1>
                <Typed
                className="typed-text"
                strings={["Web Design", "Web Development", "Mobile Application Development", "games development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Link smooth={true} to="contact"  offset={-100} className="btn-main">contact me</Link>
            </div>
        </div>
    )
}
export default Header;
