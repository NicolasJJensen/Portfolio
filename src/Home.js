import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import Badge from './components/Badge';
import './stylesheets/css/home.css';

export default function Home() {

  const [title, setTitle] = useState('developer')
  const [write, setWrite] = useState(false)
  const [word, setWord] = useState(0)
  const [wait, setWait] = useState(true)
  const [slideIn, setSlideIn] = useState(false)

  document.addEventListener("scroll", () => {
    if(window.scrollY > 65) {
      setSlideIn(true)
    } else {
      setSlideIn(false)
    }
  })

  const titles = [
    'developer',
    'designer',
    'student'
  ]

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

  useEffect(() => {

    let timeout

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

    function addLetter() {
      if(titles[word].slice(0, title.length + 1) === titles[word]){
        setWrite(false)
        setWait(true)
      } else {
        setWait(false)
      }
      setTitle(titles[word].slice(0, title.length + 1))
    }

    if(write){
      timeout = setTimeout(addLetter, wait ? 1000 : 50)
    } else {
      timeout = setTimeout(removeLetter, wait ? 1000 : 50)
    }

    return () => clearTimeout(timeout)
  }, [title])

  return (
    <main className="home">
      <div className="introduction" >
        <p className="mainIntro">Hi, my name is <span className="name">Nicolas Jensen</span></p>
        <p className="jobDescription">I am a <span className="jobTitle">{title}</span></p>
        <br />
        <p>Currently studying at Coder Academy</p>
      </div>

      <Badge />

      <ul className='menu'>
        {links.map((link, i) => (
          <li
            key={link.src} 
            className={slideIn ? 'fadeIn' : ''}
            style={{transitionDelay: `${i*0.1}s`}}
          >
            <Link to={link.src}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
