// -----Variables------//
const cardContainer = document.querySelectorAll ('.sectionCrew__Card-container');
const indivCardCont = document.querySelectorAll('.sectionCrew__Card');
const prevBtn = document.querySelectorAll('.sectionCrew__button--left');
const nextBtn = document.querySelectorAll('.sectionCrew__button--right');



// -----Function------//
cardContainer.forEach((indivCardCont, i)=>{
    prevBtn[i].addEventListener('click', () =>{
        indivCardCont.scrollLeft -= 240;
    })
    nextBtn[i].addEventListener('click', () =>{
        indivCardCont.scrollLeft += 240;
    })
})
