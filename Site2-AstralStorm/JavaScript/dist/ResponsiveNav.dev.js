"use strict";

var toggleButton = document.getElementsByClassName('nav__toggleBtn')[0];
var navList = document.getElementsByClassName('nav__ul')[0];
toggleButton.addEventListener('click', function () {
  navList.classList.toggle('active');
});