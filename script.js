let swiper;

const swiperContainer = document.querySelector('.mySwiper');
const brandsGrid = document.querySelector('.swiper-wrapper');
const brandsButton = document.querySelector('.brands__expand-button');
const brandsButtonText = brandsButton.querySelector('.expand-button__text');
const brandsButtonIcon = brandsButton.querySelector('.expand-icon');

let expanded = false;
function SH() {
  brandsButtonIcon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
  brandsButtonText.textContent = expanded ? "Показать все" : "Скрыть";
  brandsGrid.style.maxHeight = expanded ? '164px' : '344px';
  swiperContainer.style.maxHeight = expanded ? '164px' : '344px';
  expanded = !expanded;
}
brandsButton.addEventListener('click', SH);

function swiper_Init() {
  swiper = new Swiper(".mySwiper", {
    width: 240,
    spaceBetween: 16,
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiper_Init();

function swiper_Destroy() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}


const container = document.querySelector('.mySwiper');
const ul = container.querySelector('ul');

function handleResize() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      ul.classList.remove('brands');
      swiper_Init();
      if (expanded) {
        SH();
      }
    }
  } else {
    swiper_Destroy();
    ul.classList.add('brands');
  }
}

window.addEventListener('resize', handleResize);
handleResize();