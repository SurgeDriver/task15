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

const servicesGrid = document.querySelector('.services');
const servicesButton = document.querySelector('.services__expand-button');
const servicesButtonText = servicesButton.querySelector('.expand-button__text');
const servicesButtonIcon = servicesButton.querySelector('.expand-icon');

let expanded = false;
function SH() {
  servicesButtonIcon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
  servicesButtonText.textContent = expanded ? "Скрыть" : "Показать все";
  servicesGrid.style.maxHeight = expanded ? '164px' : '344px';
  expanded = !expanded;
}

servicesButton.addEventListener('click', SH);