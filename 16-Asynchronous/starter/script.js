'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// const renderError = function (errMsg) {
//   countriesContainer.insertAdjacentText('beforeend', errMsg);
//   // countriesContainer.style.opacity = 1;
// };
///////////////////////////////////////
/*
const renderCountry = function (data, className = '') {
  // console.log(data);
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
            ).toFixed(1)}million</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[language[0]]
            }</p>
            <p class="country__row"><span>💰</span>
           
               ${data.currencies[currency[0]].name}
    </p>   
            </div>
            </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
*/
/*
// const getCountryAndNeighbour = function (country) {
//   //asynchronous non-blocking behavior.
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     //render country 1.
//     renderCountry(data);
//     console.log(data);

//     //get neighbour country
//     const [neighbour] = data.borders; // data.border is an array so we use destructuring the first Element
//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     //using alpha code search for country
//     request2.send();

//     request2.addEventListener('load', function () {
//       // console.log(this.responseText);
//       const [data2] = JSON.parse(this.responseText);
//       //render country 2
//       renderCountry(data2, 'neighbour');
//       console.log(data2);
//     });
//   });
// };
// getCountryAndNeighbour('saudi arabia');
// getCountryAndNeighbour('pakistan');
// // getCountryAndNeighbour('UAE');
// getCountryAndNeighbour('Bharat');
//DEPENDING ON THE ONE WHICH WILL FIRE FIRST WILL BE LOADED TO THE WEBPAGE
//Basically if we do want to get the more data about the neighbour countries we would encounter a Callback helll.
// So to tackle that we use Promises

//this below method will return json only when the response for that particular country is found

const getJSON = function (url, errorMsg = 'Something Went wrong ') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// 🎈Promises
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country Not Found')
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) throw new Error('No neighbour was Found(Island)');

      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country Not Found'
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err =>
      renderError(`Something Went Wrong  ${err.message}.Try Again!`)
    )
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('qatar');
  // getCountryData('dfjsdlf');
});
*/

// const getCountry(lat,lng){

// }

//Challenge 1 🧨🧨🧨🧨🧨🧨🧨🧨
/*
const renderCountry = function (data, className = '') {
  // console.log(data);
  // const language = Object.keys(data.languages);
  // const currency = Object.keys(data.currencies);
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="./img/img-1.jpg" />
          <div class="country__data"> 
            <h3 class="country__name">${data.country}</h3>
            <h4 class="country__region">${data.state}</h4>
            <h4 class="country__region">${data.city}</h4>
            <p class="country__row"><span>👫</span>${data.postal}</p>
            <p class="country__row"><span>🗣️</span>${data.class}</p>
            <p class="country__row"><span>💰</span>
           
               ${data.timezone}
    </p>   
            </div>
            </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const whereAmI = function (lat, lng) {
  // const data = fetch(
  //   `https://api.bigdatacloud.net/data/reverse-geocode-client?${lat}&${lng}&localityLanguage=en`
  // )
  const data = fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=	251834749864577934507x125842`
  )
    .then(response => {
      if (!response.ok) throw new Error(`not found, ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (!data) throw new Error(`cannot found, ${data.status}`);
      console.log(data);

      console.log(`You are in ${data.city}, ${data.country}`);
      renderCountry(data);
    })
    .catch(err => {
      prompt('Data Not found', err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
      console.log('Thank You for visiting');
    });
};
// “You are in Berlin, Germany”
// whereAmI(34.13232449177568, 74.83038748465819);
btn.addEventListener('click', function () {});
whereAmI(34.13232449177568, 74.83038748465819);
whereAmI(50.85415323892241, 4.204419612888511);
*/
/*
// 🧨🧨Promises Resolve🧨🧨
console.log('Test Start');
setTimeout(() => {
  console.log('timer hit.');
}, 0);
Promise.resolve('Resolved 1').then(res => {
  console.log(res);
});
Promise.resolve('Resolved 2').then(res => {
  for (let i = 0; i < 1000000; i++);
  console.log(res);
  setTimeout(() => {
    console.log('Inside promise timer');
  }, 0);
});

console.log('Test End');
//we dont recommend to use timeres for doing some of the sensitive tasks. Bcz they have the lower priority.
*/
/*
//🧨🧨executor function.🧨🧨
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery Is Being Processed');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You Losed the Game'));
    }
  }, 2000);
});
lotteryPromise
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });
  */
/*
//🧨🧨Promisfying setTimeout.🧨🧨
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * seconds);
  });
};

wait(2)
  .then(() => {
    console.log('1 Second Passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 Second Passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 Second Passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 Second Passed');
    return wait(1);
  });

// setTimeout(() => {
//   console.log('1 Second Passed');
//   setTimeout(() => {
//     console.log('2 Second Passed');
//     setTimeout(() => {
//       console.log('3 Second Passed');
//       setTimeout(() => {
//         console.log('4 Second Passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('Problem!').catch(x => console.error(x));
*/
// 🧨🧨🧨🧨Challenge 2🧨🧨🧨🧨
// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// // position => resolve(position),
// // err => reject(err)
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=251834749864577934507x125842`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);

//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       // return fetch(`https://restcountries.com/v3.1/name/Bharat`, {
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`, {
//         mode: 'no-cors',
//       });
//     })
//     .then(res => {
//       // if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.error(`${err} 💥`));
// };
// btn.addEventListener('click', whereAmI);
/*
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[Object.keys(data.languages)[0]]
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[Object.keys(data.currencies)[0]].name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      // const { latitude: lat, longitude: lng } = ['19.037', '72.873'];

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=251834749864577934507x125842`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      const countryName = data.country;
      // const countryName = 'Bharat';
      const proxy = 'https://api.allorigins.win/get?url=';
      return fetch(
        `${proxy}${encodeURIComponent(
          `https://restcountries.com/v3.1/name/${countryName}`
        )}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      const parsedData = JSON.parse(data.contents); // allorigins proxy returns the data under 'contents'
      // console.log(parsedData[0]);
      renderCountry(parsedData[0]);
    })
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
*/
/*
let currentImg;
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * seconds);
  });
};

let img;
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    img = document.createElement('img');
    img.src = imgPath;

    img.onload = () => {
      document.querySelector('.images').appendChild(img);
      resolve(img);
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
  });
}
// Example usage:🧨🧨
createImage('./img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image loaded successfully:', currentImg);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(() => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(error => {
    console.error('Error loading image:', error);
  });
*/
// 🧨🧨🧨Asyn/Await 🧨🧨🧨
// https://restcountries.com/v3.1/name/${countryName}
/*

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} Million people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.urd}</p>
        <p class="country__row"><span>💰</span>${data.currencies.PKR.name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// position => resolve(position),
// err => reject(err)
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (countryName) {
  try {
    const pos = await getPosition();
    let { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=251834749864577934507x125842`
    );
    if (!resGeo) throw new Error('Not able to get location Data');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    if (!res) throw new Error('Not able to get Country Data');
    // console.log(res);
    const data = await res.json();
    // console.log(data[0]);
    renderCountry(data[0]);
    return `You are  in the ${data[0].name.common}`;
  } catch (err) {
    renderError(`🎇 ${err.message}`);

    //Reject the Promise returned from the async function
    throw err;
  }
};
console.log(`1: will get the location`);
// const city = whereAmI('pakistan'); //here the fulfilled promise is returned. bcz of async function.
// console.log(city);
/*
//Traditional way of handling a Promise using then clause
whereAmI('pakistan')
  .then(city => {})
  .catch(err => {
    console.error(`2.${err.message}`);
  })
  .finally(() => {
    console.log(`3: finished execution`);
  });
*/
/*
//the above code can be written using async await like below:
(async function () {
  try {
    const city = await whereAmI('pakistan');
    console.log(`2. ${city}`);
  } catch (err) {
    console.error(`2.${err.message}`);
  }
  console.log(`3: finished execution`);
})();
*/
// Promise ALL function 🦺
// const getJSON = function (url, errorMsg = 'Something Went wrong ') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    //Here the ajax call is executed sequentially meaning that one ajax call waits for other to be finished, Hence taking a lot of time for execution.we can over come from this problem using Promise.all() where all the ajax are to be executed in parallel.Promise combinator function -> Promise.all() that runs multiple Promises at one time.
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    data.map(d => console.log(d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('pakistan', 'canada', 'usa');

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setInterval(() => {
      reject(new Error('Request took to long'));
    }, 1000 * sec);
  });
};

Promise.race([getJSON(`https://restcountries.com/v3.1/name/china`), timeout(5)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('done'),
  Promise.reject('dana'),
  Promise.resolve('done'),
]).then(res => console.log(res));

// Promise.any
Promise.any([
  Promise.resolve('done'),
  Promise.reject('dana'),
  Promise.resolve('done'),
]).then(res => console.log(res));
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Challenge 3
/*
// Utility function to create an image element and return a promise
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
  });
};

// Utility function to wait for a given number of seconds
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

// Async function to load an image and pause
const loadNPause = async function (path) {
  try {
    const img = await createImage(path);
    document.body.appendChild(img); // Append the image to the DOM for visibility
    console.log('Image loaded');
    await wait(2); // Wait for 2 seconds
    console.log('Waited for 2 seconds');
    return img;
  } catch (error) {
    console.error(error);
  }
};

// Calling the async function and handling the result
// (async function () {
const imgs = loadNPause('./img/img-1.jpg');
console.log(imgs);
// })();
// (async function () {
//   const imgs = await loadNPause('./img/img-2.jpg');
//   console.log(imgs);
// })();
// (async function () {
//   const imgs = await loadNPause('./img/img-3.jpg');
//   console.log(imgs);
// })();

*/

// Joy Sahab Asynchronous JS
let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};
let order = call_Production => {
  console.log('Order placed. Please call production');
  call_Production();
};
let production = () => {
  console.log('Production has been Started');
};

order(production);
