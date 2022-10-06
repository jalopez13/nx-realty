import axios from 'axios';

export const fetchProperties = async (params) => {
  try {
    const options = {
      method: 'GET',
      url: `${process.env.RAPID_API_HOST_FULL}/propertyExtendedSearch`,
      params: params.params,
      headers: {
        'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
        'X-RapidAPI-Host': `${process.env.RAPID_API_HOST}`,
      },
    };

    const response = await axios.request(options);
    const data = await response.data;

    // if (process.env.NODE_ENV !== 'production') {
    //   console.log('PASSED PARAMS: ', params.params);
    //   console.log('FETCH PROPERTIES DATA: ', data);
    // }

    return data;
  } catch (err) {
    console.error(err);
  }
};
