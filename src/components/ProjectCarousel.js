import React, {useState} from 'react';

import '../stylesheets/css/projectCarousel.css'

export default function ProjectCarousel(props) {

  const [index, setIndex] = useState(0)

  var updateIndex = (i) => {
    let tempIndex = index + i
    if(tempIndex < 0){
      tempIndex = props.projects.length - 1
    }
    setIndex(tempIndex % props.projects.length)
  }

  return (
    <div className="carouselContainer">
      <button aria-label="previous" onClick={() => updateIndex(-1)}>{"<"}</button>
      <section className="frame" >
        <h2>{props.projects[index].title}</h2>
        <p>{props.projects[index].description}</p>
        <div className="img">
          <img src={props.projects[index].src} alt={`${props.projects[index].title} thumbnail`}/>
        </div>
      </section>
      <button aria-label="next" onClick={() => updateIndex(1)} >{">"}</button>
    </div>
  )
}