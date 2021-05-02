const MAX_CARD_COUNT = 6;

let rawData = null;

const storeData = (data) => {

  return data.length > MAX_CARD_COUNT
  ? rawData = data.slice(0, MAX_CARD_COUNT)
  : rawData = data.slice();
};

export {storeData}
