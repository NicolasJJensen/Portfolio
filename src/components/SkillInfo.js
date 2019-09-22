import React, {Fragment, useState, useEffect} from 'react';

//stylesheet for the information screen (information about each skill)
import '../stylesheets/css/skillInfo.css'

// the functional component for the skill info screen
export default function SkillInfo(props) {

  // set up state variables to keep track of whether the screen should render
  // and what the current animations are
  const [render, setRender] = useState(props.render)
  const [clipAnim, setClipAnim] = useState(null)
  const [imgPosAnim, setImgPosAnim] = useState(null)

  // this is run when the component is first rendered
  // and on every re-load after that
  // (happens when the state or props change)
  useEffect(() => {

    // here we set the state incase the props were changed
    setRender(props.render)

    // if the component needs to be rendered we set up the animation
    // (this should really be controlled from outside this component now that I think about it)
    if(props.render){

      // the animations are created with interpolation
      setClipAnim (`
        @keyframes clipAnimation {
          0%   { clip-path: circle(0% at ${props.imgRect.left + props.imgRect.width/2}px ${props.imgRect.top}px); }
          100% { clip-path: circle(200% at ${props.imgRect.left + props.imgRect.width/2}px ${props.imgRect.top}px); }
        }
      `)
      setImgPosAnim (`
        @keyframes imgPosAnim {
          0% {
            top: ${props.imgRect.top - 0.8*props.imgRect.height}px;
            left: ${props.imgRect.left}px;
            transform: scale(1.1) translateX(0%);
          } 100% {
            top: 0px;
            left: 50%;
            transform: scale(2) translateX(-50%);
          }
        }
      `)
    }
  }, [props])

  // this is the actual html that is to be rendered
  return (

    // everything is inside a Fragment tag
    // this is an empty tag that doesn't actually exist
    // React just requires each component to only be on container
    // and a style breaks this by returning 2 tags
    <Fragment>

      {/* here we set the animations in an inline style tag so they update based on the props */}
      <style>
        {clipAnim}
        {imgPosAnim}
      </style>

      {/* this is the infobox the main container that is set with the correct animation inline */}
      {/* (this could be done in scss) */}
      <div className="infoBox" style={{animation: "clipAnimation 1s forwards"}}>

        {/* everything else is only rendered if nesseccary */}
        {render && (

          //there is a fragment here because this is considered a returned component by react
          <Fragment>
            
            {/* this button turns the rendering off so that you are returned to the previous screen */}
            {/* it resets the state as well */}
            <button className="backButton" onClick={() => {
              setRender(false)
              setClipAnim(null)
              setImgPosAnim(null)
              props.back()
            }}>
              BACK
            </button>

            {/* this is the titlebar which contains the logo of the skills and the name */}
            <div className="titleBar" style={{height: `calc(${props.imgRect.height * 2}px + 2em)`}}>

              {/* this image is applied an animation based on the props to give a smooth effect of the image travelling to the top */}
              <img className="infoImg"
                src={props.skill.src}
                alt={props.skill.name}
                style={{
                  animation: "imgPosAnim 1s cubic-bezier(.75,-0.15,.25,1) forwards",
                  width: `${props.imgRect.width}px`,
                  height: `${props.imgRect.height}px`
                }}
              />

              {/* this skill name it is in a container so that is can smoothly transition from below the container*/}
              <div className="infoTitleContainer">
                <h1 className="infoTitle moveUp">{props.skill.name}</h1>
              </div>
            </div>

            {/* a linebreak that is animated in */}
            <div className="infoBreak displayLine"></div>

            {/* below is all the information about the skill */}
            {/* all information is gotten through props so it is different for each skill */}
            <div className="info fadeIn">
              <section>
                <p className="technologyDescription">{props.skill.description}</p>
              </section>
              <section className="experience">
                <h2>Experience With <span className="technology">{props.skill.name}</span>:</h2>
                <p className="experienceDescription">{props.skill.experience}</p>
              </section>
              <section className="previousWork">
                <h2>Projects Using <span className="technology">{props.skill.name}</span>:</h2>
                <div className="previousWorkDisplay">

                </div>
              </section>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}