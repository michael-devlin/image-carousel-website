var indexOfSlides,slides,dot;
function startSlides(){
    indexOfSlides = 0;
    slides=document.getElementsByClassName("slide");
    slides[indexOfSlides].style.opacity=1;
}

startSlides();
