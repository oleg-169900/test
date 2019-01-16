const form = document.querySelector('.form');
const showAll = document.querySelector('.show-all');
const tableRows = Array.from(form.querySelectorAll('.table__row'));
const formBtns = Array.from(form.querySelectorAll('.form__btn'));
const popup = document.querySelector('.popup');
const filter = document.querySelector('.filter');

const showAllHandler = () => tableRows.forEach(v => v.classList.remove('hidden'));
const formBtnHandler = evt => {
  if (evt.target.classList.contains('form__btn')) {
    popup.classList.remove('hidden');
    filter.classList.remove('hidden');
  }
}

showAll.addEventListener('click', showAllHandler);
form.addEventListener('click', formBtnHandler);
