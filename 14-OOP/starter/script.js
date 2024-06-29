'use strict';
/*
// constructor functions
const Person = function (firstName, birthYear) {
  //Instance properties.
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this. Bad Practice.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const ehsaan = new Person('Ehsaan', 2002);
console.log(ehsaan);

//  CONSTRUCTOR FUNCTIONS.
// 1. New {} is created
// 2. function is called, this={}
// 3. {} linked to prototype
// 4. function automatically return {}(the object)

const danish = new Person('danish', 1998);
console.log(danish);

const jay = 'harry';
console.log(danish instanceof Person);
console.log(jay instanceof Person);

//Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

ehsaan.calcAge();
danish.calcAge();

console.log(ehsaan.__proto__);
console.log(ehsaan.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ehsaan));
console.log(Person.prototype.isPrototypeOf(danish));
console.log(Person.prototype.isPrototypeOf(Person)); //false
console.log(Object.prototype === Person.prototype);
// console.log(Person.__proto__);

Person.prototype.species = 'humans';

console.log(ehsaan.hasOwnProperty('firstName'));
console.log(ehsaan.hasOwnProperty('species'));
console.log(Person.prototype.hasOwnProperty('species')); //species property here belongs to the Prototype of the ehsaan/danish object

console.log(__proto__);

//Object.prototype (top of prototype chain)

console.log(ehsaan.__proto__.__proto__);
console.log(ehsaan.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);
//it is nothing but the prototype constructor itself.

// Prototypal Inheritance on Built-in Objects
const arr = [3, 3, 7, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
//adding the unique method to the built-in Array Prototype.

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
);
//7 levels of Prototypal Inheritance in h1 element of the DOM.

*/
//Challenge 1.
/*
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car2.accelerate();
car2.accelerate();
car1.accelerate();
car1.brake();
car2.brake();
car2.accelerate();
*/

// 🎇ES6 Classes
// 1. Classes are NOT hoisted
// 2. Classes are first- Class Citizens(they can be passed and returned by the functions)
// 3. Classes are executed in strict mode even if not activated.
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  static Hello() {
    console.log('hello');
  }
  static createUser(fullName, birthYear) {
    return new PersonCl(fullName, birthYear);
  }
}
/*
const ehsaan = new PersonCl('Ehsaan Shah', 2002);
const shahie = new PersonCl('Shahie Rashid', 1988);
// console.log(ehsaan, shahie);

ehsaan.calcAge(), shahie.calcAge();
console.log(ehsaan.__proto__ === PersonCl.prototype);
console.log(ehsaan.age);
console.log(ehsaan.fullName);
console.log(shahie.fullName);

const wahid = new PersonCl('Wahid', 1999);
const userMeena = PersonCl.createUser('Meena changa', 1445);

console.log(userMeena.fullName);

// Object.create() Method used here
const PersonProto = {
  inti(name, age) {
    this.name = name;
    this.age = age;
  },
  get info() {
    console.log(`My name is ${this.name} and My age is ${this.age}`);
  },
};
const obj = Object.create(PersonProto);
obj.inti('Hellen', 33);
obj.info;
*/
// Challenge 2
//Challenge 1.
/*
class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
/*
const ford = new CarCl('Ford', 120);
const car2 = new CarCl('Mercedes', 95);

ford.accelerate();
console.log(ford.speedUS); //speed in miles.(USA)
ford.accelerate();
ford.speedUS = 50; //setting speed in miles explicitly
console.log(ford);
*/

// Inheritance using constructor functions
/*
When a function is called with new keyword to create an instance of an object 'this' refers to newly created instance.*/
/*
// Challenge 3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//Linking Prototypes
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} going at ${this.speed}km/h `);
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}km/h, with charge of ${this.charge}%`
  );
};

const ev1 = new EV('Tesla', 120, 23);
ev1.accelerate();
ev1.brake();
ev1.chargeBattery(90);
ev1.accelerate();
*/
/*
// Es6 Classes using Extend keyword
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  calcAge() {
    console.log(this.age + 10);
  }
}
const Malik = new StudentCl('Malik Shahzab', 2012, 'Medical');
Malik.calcAge();
console.log(Malik.fullName);
*/
/*
class jkbank {
  // Private Fields
  // Implementing Encapsulation by hiding the important data fields.
  #Pin;
  #residence = navigator.language;
  #movements = [];

  constructor(owner, Pin, currency) {
    this.owner = owner;
    this.currency = currency;
    this.#Pin = Pin;
  }
  //Public Methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  approveLoan() {
    return this.#movements.length == 0 ? false : true;
  }
  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }
  requestLoan(val) {
    if (this.approveLoan()) {
      this.deposit(val);
      console.log('Loan is Approved');
      return this;
    }
  }
  static helper() {
    console.log('helper');
  }
}
// const own1 = new jkbank('basit', 'lal ', 190023, 400, 'IND');
const own1 = new jkbank('basit', 190023, 'IND');
own1.deposit(300);
own1.withdraw(100);
own1.requestLoan(10000);
console.log(own1);
// console.log(own1.#movements);
// console.log(own1.#Pin);   //Cannot be accessed becz of private fields
// console.log(own1.#residence);
own1.deposit(200).deposit(300).withdraw(88).requestLoan(24000).withdraw(3000);
console.log(own1);
own1.prototype = jkbank.prototype.constructor;
console.dir(own1.__proto__);
console.log(own1.getMovements());
console.log(own1);
console.dir(own1.__proto__);
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this; //return the current object that is calling the function.(for Chaining Methods)
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with charge of ${this.#charge}%`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(50).brake().accelerate().brake();
console.log(rivian.speedUS);
