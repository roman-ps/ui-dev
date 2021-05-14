import {loadData} from './api.js';
import {renderCard} from './render.js';
import {storeData} from './store.js';
import {addEventListeners} from './filter.js';

const CATALOG = document.querySelector('.main__catalog');

const handleDataLoadSuccess = (data) => {
  renderCard(CATALOG, storeData(data));
  addEventListeners();
}

const handlePageLoaded = () => {
  loadData()
  .then(handleDataLoadSuccess)
};

handlePageLoaded();
