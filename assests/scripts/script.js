// Accessing The DOM
let searchBtn = document.getElementById('icon-search')

let userBtn = document.getElementById('icon-user')
let navForm = document.getElementById('form-container')
let toggleBar = document.getElementById('icon-times')
let removeLoginIconBar = document.getElementById('icon-remove')
let LoginWindow = document.querySelector('.login-form-container')
let hamburgerIcon = document.getElementById('hamburger-icon')
let navMenu = document.querySelector('.nav-section')
let bookSection = document.getElementById('book')

// Adding EventListner To The search icon
searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times')
  navForm.classList.toggle('active')
  // bookSection.classList.add('arrangement')
})

// Removing the search section on scrolling the window
window.onscroll = () => {
  searchBtn.classList.remove('fa-times')
  navForm.classList.remove('active')
  navMenu.classList.remove('active')
  LoginWindow.classList.remove('active')
  hamburgerIcon.classList.remove('fa-times')
}

// Adding EventListner To The hamburger menu
hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('fa-times')
  navMenu.classList.toggle('active')
})

// introducing the login container on clicking on the user icon
userBtn.addEventListener('click', () => {
  LoginWindow.classList.add('active')
})

// Removing the login container on clicking on the remove icon
removeLoginIconBar.addEventListener('click', () => {
  LoginWindow.classList.remove('active')
})


