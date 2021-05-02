import {fillCard} from './card.js';

const renderCard = (parent, data) => {
  for (let i = 0; i < data.length; i++) {
    parent.appendChild(fillCard(data[i]));
  }
};

export {renderCard}
