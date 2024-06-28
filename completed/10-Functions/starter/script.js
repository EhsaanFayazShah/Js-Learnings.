'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNumber,
  noOfPassengers = 200,
  price = noOfPassengers * 99
) {
  const booking = {
    flightNumber,
    noOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH54I3', 133);
createBooking('LH54I3', 100);
createBooking('LH54I3');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
  //removes all the spaces in the string and changes the string to lowercase.
};

const upperFirstWord = function (str) {
  let [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Transformer is the a HIGHER ORDER FUNCTION.It takes a function as an argument
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String is: ${fn(str)}`);
  console.log(fn.name);
};
transformer('This is a JS tutorial', upperFirstWord);
transformer('javascript is a JS tutorial', upperFirstWord);
upperFirstWord('coding is a just tutorial');

transformer('Well this is one word', oneWord);

// const high5 = function () {
//   alert('hifi');
// };
// document.body.addEventListener('click', high5);

// ['1', '2', 3].forEach(high5);

const greet = greetings => name => console.log(`${greetings} ${name}`);
// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings} ${name}`);
//   };
// };

greet('Hello')('danish');

// Call & Apply && Bind Methods in JS

const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iatacode}${flightNumber} `,
      name,
    });
  },
};

lufthansa.book(233, 'Ehsaan');
lufthansa.book(933, 'Danish');

const Emirates = {
  airline: 'United Arab Emirates',
  iatacode: 'UAE',
  bookings: [],
};
let book = lufthansa.book;

// book('Emirates','Mirza Ghalib');//this doesn't work because book is a regular function not a method .
book.call(Emirates, 199, 'Abrar Mahajan');
book.call(lufthansa, 199, 'Abrar Mahajan');
console.log(lufthansa);
console.log(Emirates);

//APPLY Mehod.
let details = [873, 'Benaaz badshah'];
book.apply(Emirates, details);

book.call(Emirates, ...details);
console.log(Emirates);

//Bind Method.
const bookEmr = book.bind(Emirates); //this will return a this function which would always point to Emirates.

const bookLuf = book.bind(lufthansa);
bookEmr(23, 'James Clear');
console.log(Emirates.bookings);

const bookEmr23 = book.bind(Emirates, 21113);
// partial application above.
// means that part of the arg. of the original fun
// are already applied / pre-set.
bookEmr23('Meena Kumari');
//using bind method pre setting values .
//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);
  this.planes++;

  console.log(this.planes);
};
// lufthansa.buyPlanes();
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes);
//in the above line the lufthansa.buyplanes is a function attached to the event listener whenever an event occurs.But here the THIS keyword will point to the button (.buy) itself.Becz this function is called upon the particular element not as a object method.
// In event handler function this keyword always points the element on which the event handler is attached.

// document
// .querySelector('.buy')
// .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

//Partial  Application
const addTax = function (rate, value) {
  return value + value * rate;
};
const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));
//bind method returns this keyword.simply
const addTaxs = rate => {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT = addTaxs(0.23);
console.log(addVAT(100));
*/
// Closures
const secureBooking = function () {
  let passengerCount = 44;

  return function () {
    console.log(`Passenger Count is: ${passengerCount}`);
    passengerCount++;
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(() => {
    console.log(`we are now boarding ${n} Passengers`);
    console.log(`there are 3 groups , each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start Boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
