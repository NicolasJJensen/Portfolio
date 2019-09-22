import React, {Fragment, useState} from 'react';

// stylesheet for projects page and components used inside
import './stylesheets/css/project.css'
import Badge from './components/Badge';
import ProjectCarousel from './components/ProjectCarousel';

// the component for the projets "page"
export default function Projects(props) {

  // a list of personal projects
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

  // a list of work related projects
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

  // a component to keep track of which set of projects to display
  const [workSelected, setWorkSelected] = useState(true)

  // the html code the the page
  return (
    <Fragment>
      {/* badge displayed up the top of the page */}
      <Badge />

      {/* main tag is used for main content */}
      <main className="projects">

        {/* heading describing the purpose of the page */}
        <h1 className="heading">Projects</h1>

        {/* the button to change which projects you are currently looking at */}
        <div className="options">
          <button onClick={() => setWorkSelected(false)} aria-label="display personal projects" className="personalClick" disabled={!workSelected} >Personal</button>
          <button onClick={() => setWorkSelected(true)} aria-label="display work projects" className="workClick" disabled={workSelected} >Work</button>
        </div>

        {/* a container containing the carousels of each set of projects
        (only 1 set displayed at a time) */}
        <div className="frames">
          {!workSelected && <ProjectCarousel projects={personal} />}
          {workSelected && <ProjectCarousel projects={work} />}
        </div>
      </main>
    </Fragment>
  )
}
