'use strict';

const fetchApi = async () => {
  try {
    const res = await fetch('https://sample.com/api/items');
    if (!res.ok) {
      throw new Error('例外が発生！');
    }

    console.log(typeof res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

fetchApi()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
