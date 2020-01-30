import React from 'react';

import './AboutTheDev.css';

const AboutTheDev = () => {
    return (
        <div className="about-the-dev-section">
            <h1>About the Developer</h1>
            <figure class="icons">
                <a href="https://github.com/DevDW" target="_blank" rel="noopener noreferrer"><img src={require("./GitHub_Logo.png")} width="200" height="82" alt="GitHub logo" /></a>
                <figcaption>My GitHub</figcaption>
            </figure>
            <figure class="icons icon-right">
                <a href="https://www.linkedin.com/in/dajahiwiley/" target="_blank" rel="noopener noreferrer"><img src={require("./In-2C-75px-TM.png")} alt="LinkedIn logo"/></a>
                <figcaption>My LinkedIn</figcaption>
            </figure>          
        </div>
    )
}

export default AboutTheDev;