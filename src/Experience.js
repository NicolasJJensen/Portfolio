import React from 'react';

import Badge from './components/Badge';
import './stylesheets/css/experience.css'

export default function App() {

  var experience = [
    {
      employer: 'Channel 7',
      startDate: '20th Oct 2018',
      endDate: '23rd May 2019',
      title: 'Weather Graphics and Master Control',
      description: 'I worked at Channel 7 doing general graphics and weather graphics, before moving on to work in Master Control where I worked to send data between the different stations across the state.'
    },
    {
      employer: 'Tanda',
      startDate: '20th June 2019',
      endDate: '16th Aug 2019',
      title: 'Developer (Intern)',
      description: 'During my time at Tanda I helped develop a new page to streamline the process of connecting integrations, and make debugging issues with integrations easier for the user.'
    }
  ]

  return (
    <main class="experience">
      <Badge />

      <p>Download my resume</p>
      <a href="/images/myw3schoolsimage.jpg" download><img src={`${process.env.PUBLIC_URL}/images/download.svg`} alt="download resume" /></a>

      <h1>Previous Work</h1>

      <br />
      <hr />
      <br />

      {experience.map(job => (
        <section>
          <span>
            <h2>{job.employer}</h2><h4>{job.title}</h4>
            <p>{`${job.startDate} - ${job.endDate}`}</p>
          </span>
          <span>
            <p>{job.description}</p>
          </span>
        </section>
      ))}
    </main>
  )
}