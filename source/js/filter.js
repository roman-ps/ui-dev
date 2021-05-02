const FILTER_INPUT = document.querySelector('.form__input');

const MIN_SEARCH_SYMBOLS = 2;

const hiddenAllCards = () => {
  const CARDS = document.querySelectorAll('.card');

  CARDS.forEach((card) => {
    card.classList.add('hidden')
  })
};

const showAllCards = () => {
  const CARDS = document.querySelectorAll('.card');

  CARDS.forEach((card) => {
    card.classList.remove('hidden')
  })
};

const filterCards = (value) => {
  const CARDS = document.querySelectorAll('.card');

  CARDS.forEach((card) => {
    const title = card.querySelector('.card__title');

    if (title.textContent.startsWith(value)) {
      card.classList.remove('hidden')
    }
  })
};

const changeFilterInputHandler = () => {
  if (FILTER_INPUT.value.length > MIN_SEARCH_SYMBOLS) {
    hiddenAllCards();
    filterCards(FILTER_INPUT.value);
    return;
  }
  showAllCards();
};

const addEventListeners = () => {
  FILTER_INPUT.addEventListener('input', changeFilterInputHandler);
};


export {addEventListeners}
