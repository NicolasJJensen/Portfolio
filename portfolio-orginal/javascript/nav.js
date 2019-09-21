const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".navLinks")
  const navLinks = document.querySelectorAll(".navLinks li")

  burger.addEventListener("click", () => {
    nav.classList.toggle("navActive")

    navLinks.forEach((link, index) => {
      link.classList.toggle("fadeIn")
      link.style.animationDelay = `${index*0.1}s`
    })

    burger.classList.toggle("toggle")
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  navSlide()
})