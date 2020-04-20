import React from 'react';
import background_img from './cactus-yellow.jpg';

const Hero = () => {

    const heroMain = {
        height: '100vh',
        backgroundImage: `url(${background_img})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#333333',
        fontFamily: 'Montserrat'
    }


    return(
        <div className="hero" style={heroMain}>
            <h1 >Paige MacGregor</h1>
            <h2 >Web Developer</h2>
        </div>
    )

}

export default Hero;