const burgerButton = document.getElementById('burger');
const burgerMenu = document.querySelector('.header__mobile-row');

const toggleClass = () => {
  burgerMenu.classList.toggle('active');
};

const openMenu = () => {
  toggleClass();

  burgerMenu.addEventListener('click', changeActiveButton);
};

const changeActiveButton = (e) => {
  const currentActiveLink = document.querySelector(
    '.header__item-mobile--accent'
  );
  const linkData = e.target.dataset.link;
  const newActiveLink = e.target;

  if (linkData === 'menu-link') {
    currentActiveLink.classList.toggle('header__item-mobile--accent');
    newActiveLink.classList.toggle('header__item-mobile--accent');

    burgerMenu.removeEventListener('click', changeActiveButton);
    toggleClass();
  }
};

burgerButton.addEventListener('click', openMenu);
