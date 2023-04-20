
// Header slider

const headerSlidesOffer = document.querySelectorAll('.headerSlideOffer'),
      scrollbars = document.querySelectorAll('.header__scrollbar'),
      headerSlidesImg = document.querySelectorAll('.headerSlideImg');


let i = 0;

const activeSlides = n => {
    for(headerSlideOffer of headerSlidesOffer){
        headerSlideOffer.classList.remove('active');
    }
    headerSlidesOffer[n].classList.add('active');
}

const activeSlidesImg = n => {
    for(headerSlideImg of headerSlidesImg){
        headerSlideImg.classList.remove('active');
    }
    headerSlidesImg[n].classList.add('active');
}

const activeScrollbar = n => {
    for(scrollbar of scrollbars) {
        scrollbar.classList.remove('active');
    }
    scrollbars[n].classList.add('active');
}

const prepareCurrentSlides = ind => {
    activeSlides(ind);
    activeScrollbar(ind);
    activeSlidesImg(ind);
}

const nextSlides = () => {
    if(i == headerSlidesOffer.length - 1){
        i = 0;
        prepareCurrentSlides(i);
    }else{
        i++;
        prepareCurrentSlides(i);
    }
};
const prevSlides = () => {
    if(i == 0){
        i = headerSlidesOffer.length - 1;
        prepareCurrentSlides(i);
    }else{
        i--;
        prepareCurrentSlides(i);
    }
};

scrollbars.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        i = indexDot;
        prepareCurrentSlides(i);
        clearInterval(intervals);
    })
});

const intervals = setInterval(nextSlides, 2500);


// Footer Team Slider

const prevDreamTeamBtn = document.getElementById('dreamTeamBtn-prev'),
      nextDreamTeamBtn = document.getElementById('dreamTeamBtn-next'),
      slidesDreamTeam = document.querySelectorAll('.dreamTeam__slide'),
      scrollbarsDreamTeam = document.querySelectorAll('.dreamTeam__scrollbar');

let index = 0;

const activeSlide = n => {
    for(dreamTeam__slide of slidesDreamTeam){
        dreamTeam__slide.classList.remove('active');
    }
    slidesDreamTeam[n].classList.add('active');
}

const activeDot = n => {
    for(dreamTeam__scrollbar of scrollbarsDreamTeam) {
        dreamTeam__scrollbar.classList.remove('active');
    }
    scrollbarsDreamTeam[n].classList.add('active');
}

const prepareCurrentSlideDreamTeam = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlideDreamTeam = () => {
    if(index == slidesDreamTeam.length - 1){
        index = 0;
        prepareCurrentSlideDreamTeam(index);
    }else{
        index++;
        prepareCurrentSlideDreamTeam(index);
    }
};
const prevSlideDreamTeam = () => {
    if(index == 0){
        index = slidesDreamTeam.length - 1;
        prepareCurrentSlideDreamTeam(index);
    }else{
        index--;
        prepareCurrentSlideDreamTeam(index);
    }
};

scrollbarsDreamTeam.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlideDreamTeam(index);
        clearInterval(intervalDreamTeam);
    })
});

nextDreamTeamBtn.addEventListener('click', nextSlideDreamTeam);
prevDreamTeamBtn.addEventListener('click', prevSlideDreamTeam);

const intervalDreamTeam = setInterval(nextSlideDreamTeam, 2500);

