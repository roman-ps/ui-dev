import {getNodes} from './utils.js';

const CARD_TEMPLATE = document.querySelector('#tmpl');

const Urls = {
  IMG: 'https://via.placeholder.com/380x227/D8D8FF/FFFFFF?text=card ',
  CARD: '/details/',
};

const CardTypes = {
  IndependentLiving: 'card__type--independent',
  SupportAvailable: 'card__type--support',
};

const Selectors = {
  CARD: '.card',
  IMG: '.card__img',
  TYPE: '.card__type',
  TITLE: '.card__title',
  ADDRESS: '.card__address',
  PRICE: '.card__price',
};

const fillCardType = (node, data) => {
  node.classList.add(CardTypes[data]);
  node.textContent = data;
}

const fillCard = (data) => {
  const card = CARD_TEMPLATE.content.cloneNode(true);
  const cardNodes = getNodes(card, Selectors);
  const {CARD, IMG, TYPE, TITLE, ADDRESS, PRICE} = cardNodes;

  CARD.href = Urls.CARD + data.id;
  IMG.src = Urls.IMG + data.id;
  fillCardType(TYPE, data.type)
  TITLE.textContent = data.title;
  ADDRESS.textContent = data.address;
  PRICE.textContent = data.price;

  return card;
};

export {fillCard}
