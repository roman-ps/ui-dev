const GETDATA_URL = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';

const loadData = () => {
  return fetch(GETDATA_URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status}, ${response.statusText}`);
  })
};

export {loadData}
