(function () {
  'use strict'

  let menu = document.querySelector('.menu')
  let toggleButton = document.querySelector('.menu-toggle')

  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('menu--show')
  })
})()
