const MAX_CARD_COUNT = 6;

let rawData = null;

const storeData = (data) => {
  if (data.length > MAX_CARD_COUNT) {
    data = data.slice(0, MAX_CARD_COUNT)
  }
  rawData = data;

  return rawData;
};

export {storeData}
