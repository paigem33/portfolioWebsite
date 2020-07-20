import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = (props) => {

    // alternate images on left or right sides with body text, dates, and tech stack on other 
    // pink background, maybe white cards?


    return(
        <section className="ExperienceCard">
            
            <div className="content">
                <img src="" alt="" />
                <div> 
                    <h4>{props.title}</h4>
                    <p></p>
                </div>
            </div>
        </section>
    )

}

export default ExperienceCard;