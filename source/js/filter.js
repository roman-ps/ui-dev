const FILTER_INPUT = document.querySelector('.form__input')

const changeFilterInputHandler = () => {
  console.log(FILTER_INPUT.value)
}

const events = () => {
  FILTER_INPUT.addEventListener('keydown', changeFilterInputHandler)
}


export {events}
