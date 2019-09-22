import React from 'react';

//the stylesheet for the experience page and badge component
import Badge from './components/Badge';
import './stylesheets/css/experience.css'

// the experience component 
export default function Experience() {

  // a list of places I've worked at ind information about my time there
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

  // the html code for the experience "page"
  return (
    // main tag for semantics and ease of use
    <main class="experience">

      {/* the badge to be displayed at the top of the screen */}
      <Badge />

      {/* a call to action and button to download my resume */}
      <p>Download my resume</p>
      <a href="/images/myw3schoolsimage.jpg" download><img src={`${process.env.PUBLIC_URL}/images/download.svg`} alt="download resume" /></a>

      {/* title telling users what the page is about */}
      <h1>Previous Work</h1>

      <br />
      <hr />
      <br />

      {/* a loop to display the information about each job I've had in a specific format */}
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