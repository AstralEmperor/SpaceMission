const toggleButton = document.getElementsByClassName('nav__toggleBtn')[0]
const navList = document.getElementsByClassName('nav__ul')[0]

toggleButton.addEventListener('click',() =>{
    navList.classList.toggle('active')
})