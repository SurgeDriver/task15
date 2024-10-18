var swiper = new Swiper(".mySwiper", {
  width: 240,
  spaceBetween: 16,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const servicesGridItems = document.querySelectorAll('.services li');
const servicesButton = document.querySelector('.services__expand-button');
const servicesButtonText = servicesButton.querySelector('.expand-button__text');
const servicesButtonIcon = servicesButton.querySelector('.expand-icon');

let isExpanded = false;
let limit = 6;

function updateWithLimit() {
  servicesGridItems.forEach((item, index) => { item.classList.remove('hidden'); });
  for (let i = limit; i < servicesGridItems.length; i++) {
    servicesGridItems[i].classList.add('hidden');
  }
}

function screenChanged() {
  limit = window.innerWidth <= 1120 ? 6 : 8;
  if (!isExpanded) {
    updateWithLimit();
  }
}

window.addEventListener('resize', screenChanged);

function showHide() {
  isExpanded = !isExpanded;
  servicesButtonIcon.style.transform = !isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
  servicesButtonText.textContent = isExpanded ? "Скрыть" : "Показать все";
  limit = window.innerWidth <= 1120 ? 6 : 8;
  for (let i = limit; i < servicesGridItems.length; i++) {
    servicesGridItems[i].classList.toggle('hidden');
  }
}

limit = window.innerWidth <= 1120 ? 6 : 8;
for (let i = limit; i < servicesGridItems.length; i++) {
  servicesGridItems[i].classList.toggle('hidden');
}

servicesButton.addEventListener('click', showHide);