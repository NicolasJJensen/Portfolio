import React from 'react';

import Badge from './components/Badge';
import './stylesheets/css/home.css';

export default function Home() {
  return (
    <main class="home">
      <div class="introduction" >
        <p class="mainIntro">Hi, my name is <span class="name">Nicolas Jensen</span></p>
        <p class="jobDescription">I am a <span class="jobTitle">developer</span></p>
        <br />
        <p>Currently studying at Coder Academy</p>
      </div>

      <Badge />

      <div class="menu">
        <p><a href="skills.html">Skills</a></p>
        <p><a href="experience.html">Experience</a></p>
        <p><a href="projects.html">Projects</a></p>
        <p><a href="goals.html">Goals</a></p>
        <p><a href="contact.html">Contact</a></p>
      </div>
    </main>
  )
}