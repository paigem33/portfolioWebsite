import React, { Component } from "react";
import Slider from "react-slick";
import './SkillSet.css';

export default class SkillSet extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 1500,
      cssEase: "linear"
    };
    return (
        <div className="SkillSet">
        <h3><span>Skill Set</span></h3>
        <Slider {...settings}>
            <div>
            <img src={require('./images/bootstrap-png.png')}/>
            </div>
            <div>
            <img src={require('./images/javascript.png')}/>
            </div>
            <div>
            <img src={require('./images/jquery-logo.png')}/>
            </div>
            <div>
            <img src={require('./images/laravel-logo.png')}/>
            </div>
            <div>
            <img src={require('./images/php-logo.png')}/>
            </div>
            <div>
            <img src={require('./images/react.png')}/>
            </div>
            <div>
            <img src={require('./images/ruby.png')}/>
            </div>
            <div>
            <img src={require('./images/Ruby_On_Rails_Logo.png')}/>
            </div>
            <div>
            <img src={require('./images/sql.png')}/>
            </div>
            <div>
            <img src={require('./images/wordpress-logo.png')}/>
            </div>
        </Slider>
        </div>
    );
  }
}