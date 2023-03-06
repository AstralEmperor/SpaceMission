"use strict";

// -----Variables------//
var cardContainer = document.querySelectorAll('.sectionCrew__Card-container');
var indivCardCont = document.querySelectorAll('.sectionCrew__Card');
var prevBtn = document.querySelectorAll('.sectionCrew__button--left');
var nextBtn = document.querySelectorAll('.sectionCrew__button--right'); // -----Function------//

cardContainer.forEach(function (indivCardCont, i) {
  prevBtn[i].addEventListener('click', function () {
    indivCardCont.scrollLeft -= 240;
  });
  nextBtn[i].addEventListener('click', function () {
    indivCardCont.scrollLeft += 240;
  });
});