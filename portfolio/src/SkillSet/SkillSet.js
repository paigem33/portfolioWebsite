import React, { Component } from "react";
import './SkillSet.css';

export default class SkillSet extends Component {
  render() {
    return (
      <div className="SkillSet" id="SkillSet">
        <h3><span>Skill Set</span></h3>
          <div>
          <img src={require('./images/bootstrap-png.png')}/>
          
          <img src={require('./images/javascript.png')}/>
          
          <img src={require('./images/jquery-logo.png')}/>
          
          <img src={require('./images/laravel-logo.png')}/>
          
          <img src={require('./images/php-logo.png')}/>
          
          <img src={require('./images/react.png')}/>
          
          <img src={require('./images/ruby.png')}/>
          
          <img src={require('./images/Ruby_On_Rails_Logo.png')}/>
          
          <img src={require('./images/sql.png')}/>
          
          <img src={require('./images/wordpress-logo.png')}/>
          
          <img src={require('./images/git.png')}/>
          
          <img src={require('./images/aws-2.png')}/>
          
          <img src={require('./images/postman.png')}/>
          </div>
        </div>
    );
  }
}