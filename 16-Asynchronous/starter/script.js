'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const language = Object.keys(data.languages);
  const currency = Object.keys(data.currencies);
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data"> 
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[language[0]]
            }</p>
            <p class="country__row"><span>💰</span>
           
               ${data.currencies[currency[0]].name}
    </p>   
            </div>
            </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //asynchronous non-blocking behavior.
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    //render country 1.
    renderCountry(data);
    console.log(data);

    //get neighbour country
    const [neighbour] = data.borders; // data.border is an array so we use destructuring the first Element
    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    //using alpha code search for country
    request2.send();

    request2.addEventListener('load', function () {
      // console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      //render country 2
      renderCountry(data2, 'neighbour');
      console.log(data2);
    });
  });
};
getCountryAndNeighbour('saudi arabia');
getCountryAndNeighbour('pakistan');
getCountryAndNeighbour('UAE');
// getCountryData('Bharat');
//DEPENDING ON THE ONE WHICH WILL FIRE FIRST WILL BE LOADED TO THE WEBPAGE
//Basically if we do want to get the more data about the neighbour countries we would encounter a Callback helll.
// So to tackle that we use Promises
