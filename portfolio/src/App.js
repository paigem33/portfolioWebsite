import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import ProjectCard from './ProjectCard/ProjectCard';
import SkillSet from './SkillSet/SkillSet';
import ExperienceCard from './ExperienceCard/ExperienceCard';

import AELogo from './images/ae-logo-round.png';
import MKLogo from './images/mk_decision_logo.png';
import ViziLogo from './images/ViziSites-logo.png';

class App extends Component {
  state = {
    projects: [
      {name: 'We need your name!'},
      {age: 'We need your age!'}
    ],
    experience: [
      {
        title: 'Web Developer',
        company: 'Agent Elite',
        logo: AELogo,
        content: 'Learn from fucking criticism. Remember it’s called the creative process, it’s not the creative fucking moment. Design as if your fucking life depended on it. Remember it’s called the creative process, it’s not the creative fucking moment. Must-do is a good fucking master. Don’t worry about what other people fucking think. Paul Rand once said, “The public is more familiar with bad fucking design than good design.'
    },
      {
        title: 'Software Engineer Intern',
        company: 'MK Decision',
        logo: MKLogo,
        content: 'Your rapidograph pens are fucking dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something fucking original. Form follows fucking function. Paul Rand once said, “The public is more familiar with bad fucking design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.'
      },
      {
        title: 'Web Developer Intern',
        company: 'ViziSites',
        logo: ViziLogo,
        content: 'The new becomes threatening, the old reassuring.” A good fucking composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Must-do is a good fucking master. This design is fucking brilliant. This design is fucking brilliant. Don’t worry about what other people fucking think.'
      }
    ]
  }

  render() {

    let experience = this.state.experience;
    experience = experience.map((job, index) => {
      console.log(job);
      return <ExperienceCard title={job.title} company={job.company} logo={job.logo} content={job.content} key={index} />
    })

    return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <SkillSet />
      <section className="Projects" id="Projects">
        <h3 className="ProjectsTitle"><span>Projects</span></h3>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
      <section className="Experience" id="Experience">
        <h3 className="ExperienceTitle"><span>Experience</span></h3>
        {experience}
      </section>
    </>
    );
  }
}

export default App;
