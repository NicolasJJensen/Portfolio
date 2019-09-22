import React, {useState} from 'react';
import {Link} from "react-router-dom";

//import the css stylings for the navbar
import '../stylesheets/css/nav.css'

// a functional component for the navbar (takes no properties)
export default function Navbar() {

  //set up the state to keep track of whether the navBar is open or closed
  const [active, setActive] = useState(false)

  // a list of links with their names and source
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
      name: 'Blog',
      src: '/blog'
    },
    {
      name: 'Contact',
      src: '/contact'
    }
  ]

  //the html to be rendered
  return (
    // the nav tag is used for semantics
    <nav className="navBar">
      {/* a logo (just my name) to be display on the navbar at all times */}
      <div className="logo">
        <h4>Nicolas Jensen</h4>
      </div>

      {/* a list of links that are created by looping through the array above */}
      <ul className={active ? 'navLinks navActive' : 'navLinks'}>
        {links.map(link => (
          // each item takes a key (more efficent react rendering) and a link
          // the link is for react router so you can have multiple pages
          <li key={link.src} className={active ? 'fadeIn' : ''}>
            <Link onClick={() => setActive(!active)} to={link.src}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* this is a button that will open the menu on smaller screens */}
      <button aria-label="navigation menu" className={active ? 'burger toggle' : 'burger'} onClick={() => setActive(!active)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </nav>
  )
}
