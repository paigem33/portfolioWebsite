import React, { Component } from 'react';
import './App.css';
import Hero from './Hero/Hero'
import ProjectCard from './ProjectCard/ProjectCard'

class App extends Component {
  render() {
    return (
    <>
      <Hero />
      <section className="Projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
    );
  }
}

export default App;
