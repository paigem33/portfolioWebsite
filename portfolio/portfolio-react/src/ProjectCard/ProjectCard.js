import React from 'react';
import './ProjectCard.css';

const ProjectCard = () => {

    return(

        <div className="ProjectCard">
            <h3>Project Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .</p>
            <a href="#" className="button">Visit Site</a>
            <a href="#" className="button">View Repo</a>
        </div>
        
    )
    
}

export default ProjectCard;