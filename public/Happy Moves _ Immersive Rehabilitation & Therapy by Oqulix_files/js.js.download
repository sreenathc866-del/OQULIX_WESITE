const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector('.slider-controls ul');
let sectionIndex = 0;
let numberOfSlide = 8;

document.querySelectorAll('.slider-controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', function () {
        sectionIndex = ind;
        updateSlider();
    });
});

rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < numberOfSlide - 1) ? sectionIndex + 1 : 0;
    updateSlider();
});

leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : numberOfSlide - 1;
    updateSlider();
});

function updateSlider() {
    document.querySelector('.slider-controls .selected')?.classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex * -100 / numberOfSlide) + '%)';
}

// Auto-slide every 2 seconds
setInterval(() => {
    sectionIndex = (sectionIndex < numberOfSlide - 1) ? sectionIndex + 1 : 0;
    updateSlider();
}, 4000);
