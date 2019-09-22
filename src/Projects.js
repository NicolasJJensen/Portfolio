import React, {Fragment, useState} from 'react';

import ProjectCarousel from './components/ProjectCarousel';

import './stylesheets/css/project.css'
import Badge from './components/Badge';

export default function Projects(props) {

  const personal = [
    {
      title: 'Terminal Graphical Game',
      src: "http://lorempixel.com/300/300",
      description: "placeholder"
    },
    {
      title: 'Terminal Graphical Game',
      src: "http://lorempixel.com/299/300",
      description: "placeholder"
    },
    {
      title: 'Terminal Graphical Game',
      src: "http://lorempixel.com/300/299",
      description: "placeholder"
    }
  ]

  const work = [
    {
      title: 'Terminal Graphical Game',
      src: "http://lorempixel.com/300/300",
      description: "placeholder"
    },
    {
      title: 'Terminal Graphical Game',
      src: "http://lorempixel.com/299/300",
      description: "placeholder"
    },
    {
      title: 'Terminal Graphical Game',
      src: "http://lorempixel.com/300/299",
      description: "placeholder"
    }
  ]

  const [workSelected, setWorkSelected] = useState(true)

  return (
    <Fragment>
      <Badge />
      <main className="projects">

        <h1 className="heading">Projects</h1>

        <div className="options">
          <button onClick={() => setWorkSelected(false)} aria-label="display personal projects" className="personalClick" disabled={!workSelected} >Personal</button>
          <button onClick={() => setWorkSelected(true)} aria-label="display work projects" className="workClick" disabled={workSelected} >Work</button>
        </div>

        <div className="frames">
          {!workSelected && <ProjectCarousel projects={personal} />}
          {workSelected && <ProjectCarousel projects={work} />}
        </div>
      </main>
    </Fragment>
  )
}
