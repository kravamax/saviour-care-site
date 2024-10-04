console.log('Modal script');

const modal = document.getElementById('myModal');
const btnOpen = document.getElementById('myModal-open-button');
const btnClose = document.getElementById('myModal-close-button');

btnOpen.addEventListener('click', (e) => {
    modal.classList.add("open");
})

btnClose.addEventListener('click', (e) => {
    modal.classList.remove('open')
})

modal.addEventListener('click', e => {
    if(e.target === modal) {
        // removeEventListener(e, this);
        modal.classList.remove('open')
    }
})
