import React from 'react';

import './ProjectBackground.css';

const ProjectBackground = () => {
    return (
        <div className="background-paragraph">
            <h1>About This Project</h1>
            <blockquote class="blockquote text-left">
                <p class="mb-0">
                    "There are approximately ten thousand species of birds on the planet and no single individual has seen them all."
                </p>
                <footer class="blockquote-footer">Bernd Brunner</footer>
            </blockquote>
            <p class="text-justify">
                For millennia, humans have looked towards the skies and seen birds soar among the clouds. Birds' example is what inspired human ingenuity to achieve flight. As a nature photography hobbyist and someone who has an interest in birdwatching and bird behavior, the shots that I catch of birds are always some of my favorites. I have been fascinated by the annual mass migrations of birds since I learned about it as a child.
                <br /><br />
                My conceptualization of this project started with deciding which technologies I wanted to further expand my skills and gain experience with. My primary goal was to apply my deeper understanding of <strong>React</strong> after having worked through a large portion of Stephen Grider's Udemy course, "Modern React with Redux."
                <br /><br />
                Two other technologies, <strong>d3.js</strong> and <strong>Bootstrap</strong>, had been on my list of things to work with for about a year, and I knew I wanted to incorporate them into my next portfolio project. Shortly after beginning work on the project, I decided to also use <strong>Jest</strong> for unit testing, as I recognized that testing was an area I needed direct, hands-on experience in to grow as a developer.
                <br /><br />
                After running through a few possibilities of what data I could visualize with d3.js, I settled on mapping bird migrations and put together a project that uses the technologies I wanted to build my skills with and allowed me to learn more about bird species and bird behavior.
                <br /><br />
                On the back-end, I used Node.js with Express.
                <br /><br />
                The bird migration data is sourced from MoveBank.
            </p>
        </div>
    )
}

export default ProjectBackground;