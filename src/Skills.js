import React, {useState} from 'react';

//stylesheet for skills page and components that are used inside
import SkillWheel from './components/SkillWheel';
import SkillInfo from './components/SkillInfo';
import './stylesheets/css/skills.css'

// the component for the skills "page"
export default function Skills(props) {

  // a list of skills that I have used each containing
  // name
  // img location
  // description
  // my experience with the skill
  var programming = [
    {
      src: `${process.env.PUBLIC_URL}/images/Ruby.svg`,
      name: 'Ruby',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis luctus lectus, at porttitor augue. Fusce non feugiat quam, et elementum dolor. Aliquam mollis, diam et volutpat commodo, magna risus porta velit, et ultricies felis felis ut ipsum. Proin id dui eu nunc facilisis mattis id vitae turpis. Integer quis orci auctor, accumsan ante nec, lobortis neque. Aliquam elementum tortor magna, quis dictum nisi porttitor facilisis. Vestibulum egestas nisi quis ante sodales, vitae semper neque sodales.',
      experience: 'Nulla feugiat massa lacus, sit amet euismod tellus dictum nec. Etiam posuere purus a ligula tincidunt commodo. Fusce nec sollicitudin quam. Donec rutrum id tortor ut pellentesque. Fusce ullamcorper eros turpis, non scelerisque odio tincidunt quis. Maecenas in facilisis sapien. Etiam vitae odio eu ligula imperdiet scelerisque. Pellentesque iaculis consequat risus eget tincidunt.'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Rails.svg`,
      name: 'Ruby on Rails',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis luctus lectus, at porttitor augue. Fusce non feugiat quam, et elementum dolor. Aliquam mollis, diam et volutpat commodo, magna risus porta velit, et ultricies felis felis ut ipsum. Proin id dui eu nunc facilisis mattis id vitae turpis. Integer quis orci auctor, accumsan ante nec, lobortis neque. Aliquam elementum tortor magna, quis dictum nisi porttitor facilisis. Vestibulum egestas nisi quis ante sodales, vitae semper neque sodales.',
      experience: 'Nulla feugiat massa lacus, sit amet euismod tellus dictum nec. Etiam posuere purus a ligula tincidunt commodo. Fusce nec sollicitudin quam. Donec rutrum id tortor ut pellentesque. Fusce ullamcorper eros turpis, non scelerisque odio tincidunt quis. Maecenas in facilisis sapien. Etiam vitae odio eu ligula imperdiet scelerisque. Pellentesque iaculis consequat risus eget tincidunt.'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/JavaScript.svg`,
      name: 'JavaScript',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis luctus lectus, at porttitor augue. Fusce non feugiat quam, et elementum dolor. Aliquam mollis, diam et volutpat commodo, magna risus porta velit, et ultricies felis felis ut ipsum. Proin id dui eu nunc facilisis mattis id vitae turpis. Integer quis orci auctor, accumsan ante nec, lobortis neque. Aliquam elementum tortor magna, quis dictum nisi porttitor facilisis. Vestibulum egestas nisi quis ante sodales, vitae semper neque sodales.',
      experience: 'Nulla feugiat massa lacus, sit amet euismod tellus dictum nec. Etiam posuere purus a ligula tincidunt commodo. Fusce nec sollicitudin quam. Donec rutrum id tortor ut pellentesque. Fusce ullamcorper eros turpis, non scelerisque odio tincidunt quis. Maecenas in facilisis sapien. Etiam vitae odio eu ligula imperdiet scelerisque. Pellentesque iaculis consequat risus eget tincidunt.'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/React.svg`,
      name: 'React JS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis luctus lectus, at porttitor augue. Fusce non feugiat quam, et elementum dolor. Aliquam mollis, diam et volutpat commodo, magna risus porta velit, et ultricies felis felis ut ipsum. Proin id dui eu nunc facilisis mattis id vitae turpis. Integer quis orci auctor, accumsan ante nec, lobortis neque. Aliquam elementum tortor magna, quis dictum nisi porttitor facilisis. Vestibulum egestas nisi quis ante sodales, vitae semper neque sodales.',
      experience: 'Nulla feugiat massa lacus, sit amet euismod tellus dictum nec. Etiam posuere purus a ligula tincidunt commodo. Fusce nec sollicitudin quam. Donec rutrum id tortor ut pellentesque. Fusce ullamcorper eros turpis, non scelerisque odio tincidunt quis. Maecenas in facilisis sapien. Etiam vitae odio eu ligula imperdiet scelerisque. Pellentesque iaculis consequat risus eget tincidunt.'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/Node.svg`,
      name: 'Node JS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis luctus lectus, at porttitor augue. Fusce non feugiat quam, et elementum dolor. Aliquam mollis, diam et volutpat commodo, magna risus porta velit, et ultricies felis felis ut ipsum. Proin id dui eu nunc facilisis mattis id vitae turpis. Integer quis orci auctor, accumsan ante nec, lobortis neque. Aliquam elementum tortor magna, quis dictum nisi porttitor facilisis. Vestibulum egestas nisi quis ante sodales, vitae semper neque sodales.',
      experience: 'Nulla feugiat massa lacus, sit amet euismod tellus dictum nec. Etiam posuere purus a ligula tincidunt commodo. Fusce nec sollicitudin quam. Donec rutrum id tortor ut pellentesque. Fusce ullamcorper eros turpis, non scelerisque odio tincidunt quis. Maecenas in facilisis sapien. Etiam vitae odio eu ligula imperdiet scelerisque. Pellentesque iaculis consequat risus eget tincidunt.'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/HTML5.svg`,
      name: 'HTML 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis luctus lectus, at porttitor augue. Fusce non feugiat quam, et elementum dolor. Aliquam mollis, diam et volutpat commodo, magna risus porta velit, et ultricies felis felis ut ipsum. Proin id dui eu nunc facilisis mattis id vitae turpis. Integer quis orci auctor, accumsan ante nec, lobortis neque. Aliquam elementum tortor magna, quis dictum nisi porttitor facilisis. Vestibulum egestas nisi quis ante sodales, vitae semper neque sodales.',
      experience: 'Nulla feugiat massa lacus, sit amet euismod tellus dictum nec. Etiam posuere purus a ligula tincidunt commodo. Fusce nec sollicitudin quam. Donec rutrum id tortor ut pellentesque. Fusce ullamcorper eros turpis, non scelerisque odio tincidunt quis. Maecenas in facilisis sapien. Etiam vitae odio eu ligula imperdiet scelerisque. Pellentesque iaculis consequat risus eget tincidunt.'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/CSS3.svg`,
      name: 'CSS 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis luctus lectus, at porttitor augue. Fusce non feugiat quam, et elementum dolor. Aliquam mollis, diam et volutpat commodo, magna risus porta velit, et ultricies felis felis ut ipsum. Proin id dui eu nunc facilisis mattis id vitae turpis. Integer quis orci auctor, accumsan ante nec, lobortis neque. Aliquam elementum tortor magna, quis dictum nisi porttitor facilisis. Vestibulum egestas nisi quis ante sodales, vitae semper neque sodales.',
      experience: 'Nulla feugiat massa lacus, sit amet euismod tellus dictum nec. Etiam posuere purus a ligula tincidunt commodo. Fusce nec sollicitudin quam. Donec rutrum id tortor ut pellentesque. Fusce ullamcorper eros turpis, non scelerisque odio tincidunt quis. Maecenas in facilisis sapien. Etiam vitae odio eu ligula imperdiet scelerisque. Pellentesque iaculis consequat risus eget tincidunt.'
    },
    {
      src: `${process.env.PUBLIC_URL}/images/CSharp.svg`,
      name: 'C#',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis luctus lectus, at porttitor augue. Fusce non feugiat quam, et elementum dolor. Aliquam mollis, diam et volutpat commodo, magna risus porta velit, et ultricies felis felis ut ipsum. Proin id dui eu nunc facilisis mattis id vitae turpis. Integer quis orci auctor, accumsan ante nec, lobortis neque. Aliquam elementum tortor magna, quis dictum nisi porttitor facilisis. Vestibulum egestas nisi quis ante sodales, vitae semper neque sodales.',
      experience: 'Nulla feugiat massa lacus, sit amet euismod tellus dictum nec. Etiam posuere purus a ligula tincidunt commodo. Fusce nec sollicitudin quam. Donec rutrum id tortor ut pellentesque. Fusce ullamcorper eros turpis, non scelerisque odio tincidunt quis. Maecenas in facilisis sapien. Etiam vitae odio eu ligula imperdiet scelerisque. Pellentesque iaculis consequat risus eget tincidunt.'
    }
  ]

  // this is run whenever one of the skills is clicked
  var skillClicked = (skill, imgRect) => {
    setSkill({
      info: skill,
      imgRect: imgRect,
      render: true
    })
  }

  // this resets the screen to no longer dispaly the information
  var returned = () => {
    setSkill()
  }

  const [skill, setSkill] = useState(null)

  return (

    //the skillwheel and an initially hidden component with information on the skill
    <main className="skills">
      <SkillWheel skills={programming} skillClicked={skillClicked} />
      <SkillInfo skill={skill && skill.info} imgRect={skill && skill.imgRect} render={skill && skill.render} back={returned}/>
    </main>
  )
}