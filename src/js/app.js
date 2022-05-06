import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

AOS.init({
  once: true,
  offset: 100,
  duration: 1000,
});


const toggleBtn = document.querySelector('.toggle-btn')
const mobMenu = document.querySelector('.mobile-menu')

toggleBtn.addEventListener('click', () => {
  mobMenu.classList.toggle('active')
  toggleBtn.classList.toggle('active')
  document.querySelector('body').classList.toggle('scroll-hidden')
})