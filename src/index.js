import './styles.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './api/fetchCountries';
import temp from './templates/country.hbs';
import countriesList from './templates/countries-list.hbs';

const debounce = require('lodash.debounce');
const inputRef = document.querySelector('input');
const countryRef = document.querySelector('.app')

inputRef.addEventListener('input', debounce(searchHandler, 500));

function renderCountriesHere(data) {
  console.log(data)
  countryRef.innerHTML = '';
  if (data.length === 1) {
    const markUp = temp(data[0]);
    countryRef.insertAdjacentHTML('afterbegin', markUp);
  } else if (data.length > 1 && data.length <= 10) {
    const markUp = countriesList(data);
    countryRef.insertAdjacentHTML('afterbegin', markUp);
  }
}

function searchHandler(e) {
  const name = e.target.value;
  fetchCountries(name)
    .then(data => renderCountriesHere(data))
    .catch(err => {
      console.log(`error: ${err.response}`);
      renderCountries.toError();
    });
}

