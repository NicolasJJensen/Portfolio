import React, {useState} from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import '../stylesheets/css/nav.css'

export default function Navbar() {

  const [active, setActive] = useState(false)

  const links = [
    {
      name: 'Home',
      src: '/index.html'
    },
    {
      name: 'Skills',
      src: '/skills'
    },
    {
      name: 'Experience',
      src: '/experience'
    },
    {
      name: 'Projects',
      src: '/projects'
    },
    {
      name: 'About Me',
      src: '/about'
    }
  ]

  return (
    <nav class="navBar">
      <div class="logo">
        <h4>Nicolas Jensen</h4>
      </div>
      <ul class={active ? 'navLinks navActive' : 'navLinks'}>
        {links.map(link => (
          <li class={active ? 'fadeIn' : ''}>
            <Link to={link.src}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <button class={active ? 'burger toggle' : 'burger'} onClick={() => setActive(!active)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </nav>
  )
}
