var sleep = ms => new Promise(r => setTimeout(r, ms))

var repeat = (ms, func, ...args) => {
  var count = 0
  return new Promise(
    resolve => {
      const interval = setInterval(() => {
        func(resolve, interval, ...args, count)
        count++
      }, ms)
    }
  )
}

function removeAnimation(resolve, interval, elem) {
  if(elem.textContent.length === 1) {
    elem.textContent = ''
    clearInterval(interval)
    resolve()
  } else {
    elem.textContent = elem.textContent.slice(0, elem.textContent.length - 1)
  }
}

var writeAnimation = (resolve, interval, elem, to) => {
  if(elem.textContent === to) {
    clearInterval(interval)
    resolve()
  } else {
    elem.textContent = to.slice(0, elem.textContent.length + 1)
  }
}

var reveal = (resolve, interval, elem, count) => {
  if(count === 150) {
    elem.style.zIndex = 1;
    clearInterval(interval)
    resolve()
  } else {
    elem.style.zIndex = 1;
    elem.style.clipPath = `circle(${1.5*count}% at 50% 0%)`
  }
}

var hide = (resolve, interval, elem, count) => {
  elem.style.zIndex = 0;
  if(count === 150) {
    elem.style.clipPath = `circle(0% at 50% 0%)`
    clearInterval(interval)
    resolve()
  }
  elem.style.clipPath = `circle(200% at 50% 0%)`
}

async function animateText(elem, textList) {
  counter = 0
  while(true){
    counter = (counter + 1) % textList.length
    await sleep(2000)
    await repeat(50, removeAnimation, elem)
    await sleep(50)
    await repeat(50, writeAnimation, elem, textList[counter])
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  
  var menu = document.querySelector('.menu')

  async function handleScroll() {
    var scroll_amount = (window.scrollY || window.scrollTop || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
    if(scroll_amount > window.innerHeight - 500){
      for(var i = 0; i < menu.children.length; i++){
        menu.children[i].classList.add("slideIn")
        await sleep(100)
      }
      document.removeEventListener("click", handleScroll)
    }
  }

  menu && document.addEventListener("scroll", handleScroll)

  var jobTitle = document.querySelector('.jobTitle')

  var personalHeader = document.querySelector('.personalClick')
  var workHeader = document.querySelector('.workClick')
  var personal = document.querySelector('.personal')
  var work = document.querySelector('.work')

  var animationRunning = false
  var lastAnimation = 'work'

  personalHeader && personalHeader.addEventListener('click', () => {
    if(!animationRunning && lastAnimation !== 'personal')
    {
      animationRunning = true
      lastAnimation = 'personal'
      personalHeader.style.opacity = 0.3
      workHeader.style.opacity = 1
      Promise.all([
        repeat(5, reveal, personal),
        repeat(5, hide, work)
      ])
      .then(() => {
        animationRunning = false;
      })
    }
  })

  workHeader && workHeader.addEventListener('click', () => {
    if(!animationRunning && lastAnimation !== 'work')
    {
      animationRunning = true
      lastAnimation = 'work'
      personalHeader.style.opacity = 1
      workHeader.style.opacity = 0.3
      Promise.all([
        repeat(5, reveal, work),
        repeat(5, hide, personal)
      ])
      .then(() => {
        animationRunning = false;
      })
    }
  })

  jobTitle && animateText(jobTitle, ["developer", "designer", "student"])
});