import React, {Fragment, useState, useRef} from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/css/skillWheel.css'

export default function SkillWheel(props) {

  const [mainHover, setMainHover] = useState(false)
  const [skillHover, setSkillHover] = useState(-1)

  const [showSkills, setShowSkills] = useState(false)

  const refs = useRef([...Array(props.skills.length)].map(() => React.createRef()))

  var skillClicked = (skill) => {
    props.skillClicked(
      props.skills[skill],
      refs.current[skill].current.getBoundingClientRect()
    )
  }

  return (
    <div class="skillWheel">
      <button class="wheelTitle"
        onMouseEnter={() => setMainHover(true)}
        onMouseLeave={() => setMainHover(false)}
        onClick={() => setShowSkills(true)}
      >
        <p>Programming</p>
      </button>

      <ul class="allSkills">
        {props.skills.map((skill, i) => (
          <li class="skill">
            <button
              onMouseEnter={() => setSkillHover(i)}
              onMouseLeave={() => setSkillHover(i)}
              onClick={() => skillClicked(i)}
            >
              <img ref={refs.current[i]} class="skillImg" src={skill.src} alt={skill.name} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}