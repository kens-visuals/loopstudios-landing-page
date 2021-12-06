const btn = document.querySelector('.js-btn');
const nav = document.querySelector('.js-nav');
const header = document.querySelector('.js-header');

const toggleMenu = function () {
  if (!header.classList.contains('is-visible')) {
    nav.classList.add('is-visible');
    nav.firstElementChild.classList.add('is-unset');
    header.classList.add('loopstudios__header--mobile', 'is-visible');
  } else {
    nav.classList.remove('is-visible');
    nav.firstElementChild.classList.remove('is-unset');
    header.classList.remove('loopstudios__header--mobile', 'is-visible');
  }
};

btn.addEventListener('click', toggleMenu);
