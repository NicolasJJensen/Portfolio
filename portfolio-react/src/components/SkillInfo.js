import React, {Fragment, useState, useEffect} from 'react';

import '../stylesheets/css/skillInfo.css'

export default function SkillInfo(props) {

  const [render, setRender] = useState(props.render)
  const [clipAnim, setClipAnim] = useState(null)
  const [imgPosAnim, setImgPosAnim] = useState(null)

  useEffect(() => {
    setRender(props.render)
    if(props.render){
      setClipAnim (`
        @keyframes clipAnimation {
          0%   { clip-path: circle(0% at ${props.imgRect.left + props.imgRect.width/2}px ${props.imgRect.top}px); }
          100% { clip-path: circle(200% at ${props.imgRect.left + props.imgRect.width/2}px ${props.imgRect.top}px); }
        }
      `)
      setImgPosAnim (`
        @keyframes imgPosAnim {
          0% {
            top: ${props.imgRect.top - props.imgRect.height}px;
            left: ${props.imgRect.left}px;
            transform: scale(1) translateX(0%);
          } 100% {
            top: 0px;
            left: 50%;
            transform: scale(2) translateX(-50%);
          }
        }
      `)
    }
  }, [props])

  return (
    <Fragment>
      <style>
        {clipAnim}
        {imgPosAnim}
      </style>
      <div class="infoBox" style={{animation: "clipAnimation 1s forwards"}}>
        {render && (
          <Fragment>
            <button class="backButton" onClick={() => {
              setRender(false)
              setClipAnim(null)
              setImgPosAnim(null)
            }}>
              BACK
            </button>
            <div class="titleBar" style={{height: `calc(${props.imgRect.height * 2}px + 2em)`}}>
              <img class="infoImg"
                src={props.skill.src}
                alt={props.skill.name}
                style={{animation: "imgPosAnim 1s cubic-bezier(.75,-0.15,.25,1) forwards"}}
              />
              <div class="infoTitleContainer">
                <h1 class="infoTitle moveUp">{props.skill.name}</h1>
              </div>
            </div>

            <div class="infoBreak displayLine"></div>

            <div class="info fadeIn">
              <section>
                <p class="technologyDescription">{props.skill.description}</p>
              </section>
              <section class="experience">
                <h2>Experience With <span class="technology">{props.skill.name}</span>:</h2>
                <p class="experienceDescription">{props.skill.experience}</p>
              </section>
              <section class="previousWork">
                <h2>Projects Using <span class="technology">{props.skill.name}</span>:</h2>
                <div class="previousWorkDisplay">

                </div>
              </section>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}