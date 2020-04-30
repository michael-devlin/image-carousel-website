var indexOfSlides,slides;
function startSlideshow(){
    indexOfSlides = 0;
    slides=document.getElementsByClassName("slide");
    slides[indexOfSlides].style.opacity=1;

}
startSlideshow();
function addSlides(n) {
    slideMover(indexOfSlides+n);
}

function slideMover(n){
    var i;
    var current,next;
    var slideMoverAnimation={
          forCurrent:"",
          forNext:""
    };

    if(n>indexOfSlides) {
        if(n >= slides.length){n=0;}
        slideMoverAnimation.forCurrent="moveCurrentSlideLeft";
        slideMoverAnimation.forNext="moveNextSlideLeft";
    }else if(n<indexOfSlides){
        if(n<0){n=slides.length-1;}
        slideMoverAnimation.forCurrent="moveCurrentSlideRight";
        slideMoverAnimation.forNext="movePrevSlideRight";
    }

    if(n!=indexOfSlides){
        next = slides[n];
        current=slides[indexOfSlides];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "slide";
            slides[i].style.opacity=0;
        }
        current.classList.add(slideMoverAnimation.forCurrent);
        next.classList.add(slideMoverAnimation.forNext);
        indexOfSlides=n;

    }

}

var timer=null;
function timerStart(){
    timer=setInterval(function () {
        addSlides(1) ;
    },3000);
}
timerStart();
