import React, {useState} from 'react';

import './stylesheets/css/contact.css'
import Badge from './components/Badge';

export default function Contact(props) {

  return (
    <main class="contact">
      <h2>Contact me through one of the channels below</h2>
      <ul>
        <li><a href="https://github.com/NicolasJJensen" rel="noopener noreferrer" target="_blank" ><img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="Github" /></a></li>
        <li><a href="https://www.linkedin.com/in/nicolas-jensen-3a0b20193/" rel="noopener noreferrer" target="_blank" ><img src={`${process.env.PUBLIC_URL}/images/linkedIn.svg`} alt="LinkedIn" /></a></li>
        <li><a href="mailto:NicolasJensen9@gmail.com" rel="noopener noreferrer" ><img src={`${process.env.PUBLIC_URL}/images/gmail.svg`} alt="Email" /></a></li>
        <li><a href="https://twitter.com/NicolasJensen" rel="noopener noreferrer" target="_blank" ><img src={`${process.env.PUBLIC_URL}/images/twitter.svg`} alt="Twitter" /></a></li>
      </ul>
      <Badge />
    </main>
  )
}
