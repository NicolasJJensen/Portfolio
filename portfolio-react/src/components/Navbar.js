import React, {useState} from 'react';
import {Link} from "react-router-dom";

import '../stylesheets/css/nav.css'

export default function Navbar() {

  const [active, setActive] = useState(false)

  const links = [
    {
      name: 'Home',
      src: '/'
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
      name: 'About',
      src: '/about'
    }
  ]

  return (
    <nav className="navBar">
      <div className="logo">
        <h4>Nicolas Jensen</h4>
      </div>
      <ul className={active ? 'navLinks navActive' : 'navLinks'}>
        {links.map(link => (
          <li key={link.src} className={active ? 'fadeIn' : ''}>
            <Link onClick={() => setActive(!active)} to={link.src}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <button aria-label="navigation menu" className={active ? 'burger toggle' : 'burger'} onClick={() => setActive(!active)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </nav>
  )
}
