import React, {useState, useRef} from 'react';

//stylesheet for the skill wheel
import '../stylesheets/css/skillWheel.css'

//this is the skill wheel component, it is a wheel to display
// a list of skills that are passed through props
export default function SkillWheel(props) {

  // the state is set to keep track of whether the skills are being hovered
  // and which skill is selected (might not be needed will have to check later)
  const [mainHover, setMainHover] = useState(false)
  const [skillHover, setSkillHover] = useState(-1)

  const [showSkills, setShowSkills] = useState(false)

  // this is a list of "refs" they are used so that we can get the skills position
  // after it has been rotated (used in skillInfo component animation)
  const refs = useRef([...Array(props.skills.length)].map(() => React.createRef()))

  // this is called if a skills is clicked and it passes data back
  // up to the skills screen which then passes it back down to the skillInfo component
  // (reminder, look into context and providers to make the simpler)
  var skillClicked = (skill) => {
    props.skillClicked(
      props.skills[skill],
      refs.current[skill].current.getBoundingClientRect()
    )
  }

  // the html code to be rendered by the component
  return (
    // the main container that when exited stops showing the skills
    <div onMouseLeave={() => setMainHover(false)} className={`skillWheel ${showSkills || mainHover ? 'show' : ''}`}>
      
      {/* this is a button so that people with only keyboards can access the skill wheel correctly */}
      <button className="wheelTitle"
        onMouseEnter={() => setMainHover(true)}
        onClick={() => setShowSkills(true)}
        onBlur={() => setShowSkills(false)}
      >
        <p>Programming</p>
      </button>

      {/* this skills themselves are put in an unordered list for semantics */}
      <ul className="allSkills">

        {/* all the skills which were passed in are looped through and display a skill for each one */}
        {props.skills.map((skill, i) => (
          <li key={skill.name} className={`skill ${i === skillHover ? 'show': ''}`}>
            <button
              onMouseEnter={() => setSkillHover(i)}
              onMouseLeave={() => setSkillHover(-1)}
              onClick={() => skillClicked(i)}
            >
              <img ref={refs.current[i]} className="skillImg" src={skill.src} alt={skill.name} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}