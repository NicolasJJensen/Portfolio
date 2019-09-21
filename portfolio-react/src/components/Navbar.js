import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/css/nav.css'

export default function Navbar() {

  const [active, setActive] = useState(false)

  const links = [
    {
      name: 'Home',
      src: 'index.html'
    },
    {
      name: 'Skills',
      src: 'index.html'
    },
    {
      name: 'Experience',
      src: 'index.html'
    },
    {
      name: 'Projects',
      src: 'index.html'
    },
    {
      name: 'Goals',
      src: 'index.html'
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
            <a href={link.src}>{link.name}</a>
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