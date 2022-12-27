var navbar = document.getElementById("navbar");
var carousel = document.getElementById("carousel");

window.onscroll = function () {
  if (window.pageYOffset >= carousel.offsetHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonHtml = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;
  });
  carousel.insertAdjacentHTML(
    "beforeend",
    `
<div class="carousel-nav">
  ${buttonHtml.join("")}
  </div>`
  );
  const buttons = carousel.querySelectorAll(".carousel-button");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un select all the items
      items.forEach((item) =>
        item.classList.remove("carousel-item-selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel-button-selected")
      );

      items[i].classList.add("carousel-item-selected");
      buttons[i].classList.add("carousel-button-selected");
    });
  });
});







//  Floating button
function hrefFunction(){
    windows.location.href = "https://zerodha.com/?c=JT1801&s=CONSOLE";
}



const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 4000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();
