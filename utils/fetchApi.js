import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '58a1c1eb11msha3cd32b60ba503cp15e44cjsnf30fd5e40e85',
    },
  });

  return data;
};
