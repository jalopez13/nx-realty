import axios from 'axios';

export const fetchProperty = async (params) => {
  try {
    const options = {
      method: 'GET',
      url: `${process.env.RAPID_API_HOST_FULL}/property`,
      params: { ...params },
      headers: {
        'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
        'X-RapidAPI-Host': `${process.env.RAPID_API_HOST}`,
      },
    };

    const response = await axios.request(options);
    const data = await response.data;

    if (process.env.NODE_ENV !== 'production') {
      console.log('FETCH PROPERTY DATA: ', data);
    }
    console.log('PROPS ==> ', params);
    return data;
  } catch (err) {
    console.error(err);
  }
};
