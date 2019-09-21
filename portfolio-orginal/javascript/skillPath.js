import {sleep, repeat, easing} from './helpers.js'

var show = (resolve, interval, elem, width, height, count) => {
  elem.style.zIndex = 1
  var max = 100
  if(count > max) {
    clearInterval(interval)
    resolve()
  }
  elem.style.clipPath = `circle(${(count/max) * 200}% at ${width}px ${height}px)`
}

var moveImg = (resolve, interval, elem, x1, y1, count) => {
  var max = 100
  if(count > max) {
    clearInterval(interval)
    resolve()
  }
  elem.style.left = `${x1 - (x1 - (window.innerWidth/2 - elem.getBoundingClientRect().width/2))*easing(count / max)}px`
  elem.style.transform = `scale(${easing(count/max) + 1})`
  elem.style.top = `${y1 - (y1 - 0)*easing(count / max)}px`
}

var displayText = (resolve, interval, elem, height, count) => {
  var max = 50
  if(count > max) {
    clearInterval(interval)
    resolve()
  } else {
    elem.style.height = `${height*(count/max)}px`
  }
}

async function animation(skill) {
  var infoBox = document.querySelector(".infoBox")
  var infoImg = document.querySelector(".infoImg")

  // Place img in same position as clicked img
  infoImg.style.top = `${skill.firstChild.getBoundingClientRect().top - skill.getBoundingClientRect().height + skill.firstChild.getBoundingClientRect().height}px`
  infoImg.style.left = `${skill.firstChild.getBoundingClientRect().left}px`
  infoImg.src = skill.firstChild.src

  // wait for animations to finish with promise
  Promise.all([
    //animation for clip-path
    repeat(
      5,
      show,
      infoBox,
      skill.getBoundingClientRect().x + skill.getBoundingClientRect().width/2,
      skill.getBoundingClientRect().y
    ),
    //animation for moving the image to the top of the screen
    repeat(
      5,
      moveImg,
      infoImg,
      skill.firstChild.getBoundingClientRect().left,
      skill.firstChild.getBoundingClientRect().top - skill.getBoundingClientRect().height + skill.firstChild.getBoundingClientRect().height
    )
  ])
  //once the above animations are done run textAnimations
  .then(() => textAnimations(skill, infoImg))
}

function setupSkillInfo(skill) {
  var techName = document.querySelectorAll(".technology")
  var techDesc = document.querySelector(".technologyDescription")
  var expDesc = document.querySelector(".experienceDescription")
  var preWork = document.querySelector(".previousWorkDisplay")

  techName.forEach(tech => tech.textContent = skill.firstChild.alt)
  techDesc.textContent = 'This technology was created in (xxxx) by (random corporation) for (some weird af reason). It\'s a good technology for various reasons, mainly because I use it'
  expDesc.textContent = 'I have used this technology for (x) years\nIt was used when I worked at \n(some job)\n(some other job)\netc'

}

// function to make text appear on screen correctly
async function textAnimations(skill, img) {

  //get all elements that are needed
  var infoTitleBar = document.querySelector(".titleBar")
  var infoTitle = document.querySelector(".infoTitle")
  var infoTitleContainer = document.querySelector(".infoTitleContainer")
  var infoBreak = document.querySelector(".infoBreak")

  //set the height of the titlebar to correct height (scale doesn't affect height so it must be done manually)
  infoTitleBar.style.height = `${img.getBoundingClientRect().height + infoTitle.getBoundingClientRect().height}px`

  //add the displayLine class to the line break so it will animate in
  infoBreak.classList.add("displayLine")

  //wait 0.1s 
  await sleep(100)

  //animation the title text in
  infoTitle.textContent = skill.firstChild.alt
  repeat(
    5,
    displayText,
    infoTitleContainer,
    infoTitle.getBoundingClientRect().height + 10
  )

  await sleep(200)

  setupSkillInfo(skill)

  document.querySelector(".info").classList.add("show")
}

function hover(skill) {
  var main = document.querySelector(".main p")
  main.textContent = skill.firstChild.alt
}

function hoverOut(skill) {
  var main = document.querySelector(".main p")
  main.textContent = "Programming"
}

document.addEventListener("DOMContentLoaded", function(event) {

  var skillButton = document.querySelectorAll(".skill")

  skillButton.forEach(skill => {
    skill.addEventListener("click", () => animation(skill))
    skill.addEventListener("mouseenter", () => hover(skill))
    skill.addEventListener("mouseleave", () => hoverOut(skill))
  })

  document.querySelector(".backButton").addEventListener("click", () => location.reload())
})
