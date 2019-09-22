import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

// the stylesheet for the homepage and the badge component
import Badge from './components/Badge';
import './stylesheets/css/home.css';

// the  functional component for my home page
export default function Home() {

  // a list of variables to keep track of writing the correct words:
  //  the word itself
  //  whether to write or delete the word
  //  which word is being displayed
  //  how long to wait before the next command
  const [title, setTitle] = useState('developer')
  const [write, setWrite] = useState(false)
  const [word, setWord] = useState(0)
  const [wait, setWait] = useState(true)

  // state to keep track of whether to slide in the bottom menu
  const [slideIn, setSlideIn] = useState(false)

  // an event listener to keep track of scrolling through the page
  document.addEventListener("scroll", () => {

    // if the use has scrolled far enough down play menu animation
    if(window.scrollY > 65) {
      setSlideIn(true)
    } else {
      setSlideIn(false)
    }
  })

  // list of words to display
  const titles = [
    'developer',
    'designer',
    'student'
  ]

  // the links for the bottom menu
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

  // a function run on every render
  useEffect(() => {

    let timeout

    // this function removes a letter
    function removeLetter() {
      if(title.length === 1){
        setWrite(true)
        setWord(w => (w + 1) % titles.length)
        setTitle('')
        setWait(true)
      } else {
        setWait(false)
        setTitle(title.slice(0, title.length - 1))
      }
    }

    // this function adds a letter
    function addLetter() {
      if(titles[word].slice(0, title.length + 1) === titles[word]){
        setWrite(false)
        setWait(true)
      } else {
        setWait(false)
      }
      setTitle(titles[word].slice(0, title.length + 1))
    }

    // here we set a timer of 50ms and then we remove or add a letter
    if(write){
      timeout = setTimeout(addLetter, wait ? 1000 : 50)
    } else {
      timeout = setTimeout(removeLetter, wait ? 1000 : 50)
    }

    // here return the option to clear the timeout
    // this is called any time the component is unmounted
    return () => clearTimeout(timeout)
  }, [title])

  // the html for the home page
  return (

    //main tag is used for semantics and ease of use
    <main className="home">

      {/* the code for my base information that is displayed */}
      <div className="introduction" >
        <p className="mainIntro">Hi, my name is <span className="name">Nicolas Jensen</span></p>
        <p className="jobDescription">I am a <span className="jobTitle">{title}</span></p>
        <br />
        <p>Currently studying at Coder Academy</p>
      </div>

      {/* the badge that will be fixed at the top of the page */}
      <Badge />

      {/* a ul containing a list of links to other parts of my page */}
      <ul className='menu'>
        {links.map((link, i) => (
          <li
            key={link.src} 
            className={slideIn ? 'fadeIn' : ''}

            // delay for the animation is staggered
            style={{transitionDelay: `${i*0.1}s`}}
          >
            {/* react-router link to other component */}
            <Link to={link.src}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
