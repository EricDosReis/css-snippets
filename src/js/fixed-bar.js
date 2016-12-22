(function () {
  'use strict'

  let fixedBar = document.querySelector('.fixed-bar')
  let toggleButton = document.querySelector('.menu-toggle')

  toggleButton.addEventListener('click', (el) => {
    el.classList.toggle('fixed-bar--show')
  })
})()
