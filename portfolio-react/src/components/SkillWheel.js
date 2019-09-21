import React, {useState, useRef} from 'react';

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
    <div className="skillWheel">
      <button className="wheelTitle"
        onMouseEnter={() => setMainHover(true)}
        onMouseLeave={() => setMainHover(false)}
        onClick={() => setShowSkills(true)}
      >
        <p>Programming</p>
      </button>

      <ul className="allSkills">
        {props.skills.map((skill, i) => (
          <li key={skill.name} className="skill">
            <button
              onMouseEnter={() => setSkillHover(i)}
              onMouseLeave={() => setSkillHover(i)}
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