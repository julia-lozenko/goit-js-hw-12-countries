const axios = require('axios');

const fetchCountries = name =>
  axios.get(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;languages;flag`)
    .then(res => {
      return res.data;
    });

export default fetchCountries;
