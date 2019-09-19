import {sleep, repeat} from './helpers.js'

var show = (resolve, interval, elem, width, height, count) => {
  elem.style.zIndex = 1
  var max = 150
  if(count === max) {
    clearInterval(interval)
    resolve()
  }
  elem.style.clipPath = `circle(${(count/max) * 200}% at ${width}px ${height}px)`
}

var moveImg = (resolve, interval, elem, x1, y1, x2, y2, count) => {
  var max = 150
  if(count === max) {
    clearInterval(interval)
    resolve()
  }
  elem.style.left = `${x1 - (x1 - x2)*(count / max)}px`
  elem.style.top = `${y1 - (y1 - y2)*(count / max)}px`
}

var writeAnimation = (resolve, interval, elem, to) => {
  if(elem.textContent === to) {
    clearInterval(interval)
    resolve()
  } else {
    elem.textContent = to.slice(0, elem.textContent.length + 1)
  }
}

async function animation(skill) {
  var infoBox = document.querySelector(".infoBox")
  var infoTitleBar = document.querySelector(".titleBar")
  var infoImg = document.querySelector(".infoImg")
  var infoTitle = document.querySelector(".infoTitle")

  infoImg.style.top = `${skill.firstChild.getBoundingClientRect().top - skill.getBoundingClientRect().height + skill.firstChild.getBoundingClientRect().height}px`
  infoImg.style.left = `${skill.firstChild.getBoundingClientRect().left}px`
  infoImg.src = skill.firstChild.src
  infoImg.classList.add("expand")

  Promise.all([
    repeat(
      5,
      show,
      infoBox,
      skill.getBoundingClientRect().x + skill.getBoundingClientRect().width/2,
      skill.getBoundingClientRect().y
    ),
    repeat(
      5,
      moveImg,
      infoImg,
      skill.firstChild.getBoundingClientRect().left,
      skill.firstChild.getBoundingClientRect().top - skill.getBoundingClientRect().height + skill.firstChild.getBoundingClientRect().height,
      0,
      0
    )
  ])
  .then(() => {
    infoTitle.style.left = `${infoImg.getBoundingClientRect().width}px`
    infoTitleBar.style.height = `${infoImg.getBoundingClientRect().height}px`
    repeat(
      50,
      writeAnimation,
      infoTitle,
      skill.firstChild.alt
    )
  })
}

document.addEventListener("DOMContentLoaded", function(event) {

  var skillButton = document.querySelectorAll(".skill")

  skillButton.forEach(skill => {
    skill.addEventListener("click", () => animation(skill))
  })
})
