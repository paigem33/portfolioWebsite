import React, { Component } from 'react';
import { ReactNavbar } from "react-responsive-animate-navbar";
import './NavBar.css';

class NavBar extends Component {
    render() {
      return (
        <ReactNavbar
          color="rgba(25, 25, 25,.75)"
          menu={[
            { name: "RESUME", to: "#" },
            { name: "ABOUT ME", to: "#AboutMe" },
            { name: "SKILL SET", to: "#SkillSet" },
            { name: "PROJECTS", to: "#Projects" }
          ]}
          social={[
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/paige-macgregor/",
              icon: ["fab", "linkedin-in"],
            },
            {
              name: "Github",
              url: "https://github.com/paigem33",
              icon: ["fab", "github"],
            }
          ]}
        />
      );
    }
  }

  export default NavBar;