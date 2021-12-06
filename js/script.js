const btn = document.querySelector('.js-btn');
const nav = document.querySelector('.js-nav');
const header = document.querySelector('.js-header');

const toggleMenu = function (e) {
  if (!header.classList.contains('is-visible')) {
    nav.classList.add('is-visible');
    e.target.setAttribute('aria-expanded', true);
    nav.firstElementChild.classList.add('is-unset');
    header.classList.add('loopstudios__header--mobile', 'is-visible');
  } else {
    nav.classList.remove('is-visible');
    e.target.setAttribute('aria-expanded', false);
    nav.firstElementChild.classList.remove('is-unset');
    header.classList.remove('loopstudios__header--mobile', 'is-visible');
  }
};

btn.addEventListener('click', toggleMenu);
