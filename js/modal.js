const modalOverlay = document.getElementById('myModal');
const btnOpen = document.getElementById('myModal-open-button');
const btnClose = document.getElementById('myModal-close-button');

function checkEscapePress(e) {
  if (e.key === 'Escape') {
    modalOverlay.classList.remove('open');
    window.removeEventListener('keydown', checkEscapePress);
  }
}

function openModal() {
  modalOverlay.classList.add('open');
  window.addEventListener('keydown', checkEscapePress);
}

function closeModal(e) {
  if (e.target === modalOverlay || e.target === btnClose) {
    modalOverlay.classList.remove('open');
  }
}

btnOpen.addEventListener('click', openModal);
modalOverlay.addEventListener('click', closeModal);
