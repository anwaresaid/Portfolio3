import React from 'react'

import me from '../anwarsuit.jpg' 
const Aboutme = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={me} alt="me..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        I am a 25 years old Libyan, studied in the UK for a year (foundation program).

                        confident, highly motivated, and ambitious Bilkent Graduate, who's always eager to learn new technologies and apply them in projects.

                         My current goal is to deploy a project that I have a big contribution in.

                        Languages:
                        English(advanced), Turkish(beginner),Arabic(native),Portugues(beginner).

                        Life Time Dream:
                        I aspire to become an entrepreneur.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
