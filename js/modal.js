const modal = document.getElementById('myModal');
const btnOpen = document.getElementById('myModal-open-button');
const btnClose = document.getElementById('myModal-close-button');

function openModal() {
  modal.classList.add('open');
  window.addEventListener('keydown', (e) => {
    console.log(e);

    if (e.key === 'Escape') {
      modal.classList.remove('open');
      window.removeEventListener('keydown', openModal);
      return;
    }
  });
}

function closeModal(e) {
  if (e.target === modal || e.target === btnClose) {
    modal.classList.remove('open');
    // window.removeEventListener('click', closeModal)
    console.log('overlay click');
    return;
  }

  console.log('modal click');
}

btnOpen.addEventListener('click', openModal);

// btnClose.addEventListener('click', closeModal);

modal.addEventListener('click', closeModal);
