// Custom Cursor

// let cursor = document.querySelector('.cursor');

// window.addEventListener('mousemove',function(e){
//   cursor.setAttribute('style',`top:${e.pageY - 10}px;left:${e.pageX - 10}px;`)
// })

// SLIDE SHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


// FIXED MENU OPEN AND CLOSE


let menuBtn = document.getElementById('openMenuBtn');
let menuBtnClose = document.getElementById('closeMenuBtn');
let footer = document.getElementById('footer');
let fixedMenu = document.getElementById('fixedMenu');

let footerY = footer.getBoundingClientRect().bottom;


menuBtn.addEventListener('click',openMenu)
menuBtnClose.addEventListener('click',closeMenu)

function openMenu(){
  window.scrollTo(0, footerY);
  document.body.classList.add('menuopen')
}
function closeMenu(){
  window.scrollTo(0, 0);
  document.body.classList.remove('menuopen')
}


// ADDING CLASS TO ALL DROPDOWN ITEMS
