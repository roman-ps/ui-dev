import {loadData} from './api.js';
import {renderCard} from './render.js'
import {storeData} from './store.js'

const CATALOG = document.querySelector('.main__catalog');

const handleDataLoadSuccess = (data) => {
  renderCard(CATALOG, storeData(data));
}

const handlePageLoaded = () => {
  loadData()
  .then(handleDataLoadSuccess)
};

handlePageLoaded();
