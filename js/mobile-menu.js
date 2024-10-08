const burger = document.getElementById('burger');
const burgerMenu = document.querySelector('.header__mobile-row');

burger.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
});
