const hero_container = document.querySelector('.hero-container')
const btnPrev = document.querySelector('.hero__nav--prev')
const btnNext = document.querySelector('.hero__nav--next')
const articles = Array.from(hero_container.children)

let currentIndex = 1;

function updateSlide(position) {
  hero_container.style.transform = 'translateX(-' + 33 * position + '%)';
}

document.addEventListener('DOMContentLoaded', () => {
  updateSlide(currentIndex)
})

btnNext.addEventListener('click', () => {
  if (currentIndex < articles.length - 1) {
    currentIndex++;
    updateSlide(currentIndex);
  } else {
    currentIndex = 0;
    updateSlide(currentIndex);
  }
});

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide(currentIndex);
  } else {
    currentIndex = 2;
    updateSlide(currentIndex);
  }
});
