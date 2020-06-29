import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import ProjectCard from './ProjectCard/ProjectCard';
import SkillSet from './SkillSet/SkillSet';

class App extends Component {
  render() {
    return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <SkillSet />
      <section className="Projects">
        <h3 className="ProjectsTitle"><span>Projects</span></h3>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
    );
  }
}

export default App;
