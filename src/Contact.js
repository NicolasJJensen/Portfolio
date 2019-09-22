import React from 'react';

//the stylesheet for this page and badge component
import './stylesheets/css/contact.css'
import Badge from './components/Badge';

// this is the "page that contains how to contact me"
export default function Contact() {

  // the html for the contact page
  return (
    //main tag for semantics and ease of use
    <main class="contact">

      {/* h2 telling users how to contact me */}
      <h2>Contact me through one of the channels below</h2>

      {/* a list of different avenues to contact me through */}
      <ul>
        <li><a href="https://github.com/NicolasJJensen" rel="noopener noreferrer" target="_blank" ><img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="Github" /></a></li>
        <li><a href="https://www.linkedin.com/in/nicolas-jensen-3a0b20193/" rel="noopener noreferrer" target="_blank" ><img src={`${process.env.PUBLIC_URL}/images/linkedIn.svg`} alt="LinkedIn" /></a></li>
        <li><a href="mailto:NicolasJensen9@gmail.com" rel="noopener noreferrer" ><img src={`${process.env.PUBLIC_URL}/images/gmail.svg`} alt="Email" /></a></li>
        <li><a href="https://twitter.com/NicolasJensen" rel="noopener noreferrer" target="_blank" ><img src={`${process.env.PUBLIC_URL}/images/twitter.svg`} alt="Twitter" /></a></li>
      </ul>

      {/* the badge is displayed at the bottom of this page */}
      <Badge />
    </main>
  )
}
