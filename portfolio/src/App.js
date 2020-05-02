import React, { Component } from 'react';
import './App.css';
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe';
import ProjectCard from './ProjectCard/ProjectCard';

class App extends Component {
  render() {
    return (
    <>
      <Hero />
      <AboutMe />
      <section className="Projects">
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