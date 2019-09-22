import React, {useState} from 'react';

//import the stylesheet for a carousel of projects
import '../stylesheets/css/projectCarousel.css'

// functional component that takes a list of projects
export default function ProjectCarousel(props) {

  //set up the state to keep track of which item is being shown
  const [index, setIndex] = useState(0)

  // this function updates the index making sure it wraps around when going
  // to an invalid value (num must be within range 0-projectsLength)
  var updateIndex = (i) => {
    let tempIndex = index + i
    if(tempIndex < 0){
      //if project is below 0 wrap around
      tempIndex = props.projects.length - 1
    }
    // get modulo to wrap around for larger numbers
    setIndex(tempIndex % props.projects.length)
  }

  // the html to be returned
  return (
    // the whole carousel is inside it's own container
    <div className="carouselContainer">

      {/* the previous button the go back in the carousel */}
      <button aria-label="previous" onClick={() => updateIndex(-1)}>{"<"}</button>

      {/* a section containing the current project to be showns */}
      <section className="frame" >

        {/* all information display is dynamically based on the current item and the list given */}
        <h2>{props.projects[index].title}</h2>
        <p>{props.projects[index].description}</p>
        <div className="img">
          <img src={props.projects[index].src} alt={`${props.projects[index].title} thumbnail`}/>
        </div>
      </section>

      {/* this is a button to go forward in the carousel */}
      <button aria-label="next" onClick={() => updateIndex(1)} >{">"}</button>
    </div>
  )
}