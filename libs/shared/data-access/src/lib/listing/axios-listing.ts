import axios from 'axios';

const Axios = (params: { zpid: number }) =>
  axios.create({
    baseURL: `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch`,
    timeout: 1000,
    params: { ...params },
    headers: {
      'X-RapidAPI-Key': `${process.env['RAPID_API_KEY']}`,
      'X-RapidAPI-Host': `${process.env['RAPID_API_HOST']}`,
    },
  });

export default Axios;
