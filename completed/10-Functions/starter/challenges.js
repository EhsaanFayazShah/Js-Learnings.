/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let ans = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')} \n Write your option`
      )
    );
    //short form of if statement (if one of the expression below is false && operator will short-circuit and will return false.)
    //register Answer
    typeof ans === 'number' && ans < this.options.length && this.answers[ans]++;

    // if (ans >= 0 && ans < 4) this.answers[ans]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
//bonus section of manually setting an this keyword to specific object using call method
poll.displayResults.call({ answers: [1, 2, , 3, 4, , 2, , 34, 45, 23, 99] });
poll.displayResults.call(
  { answers: [1, 2, , 3, 4, , 2, , 34, 45, 23, 99] },
  String
);
poll.displayResults.call({ answers: [1, 2, , 3, 4, , 2, , 34, 45, 23, 99] });

*/
// Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation
/*const obj = {
  time: 77,
  second: 23,
  minute: 12,
  page(greet) {
    this.time = 99;
    this.second = 99;
    this.minute = 99;
    console.log(this.time);
    console.log(greet);
  },
};
const obj2 = {
  time: 77,
  second: 23,
  minute: 12,
  page(greet) {
    this.time = 9111;
    this.second = 99;
    this.minute = 99;
    console.log(this.time);
    console.log(greet);
  },
};

const objs = obj.page.bind(obj, 'hello');
const objs2 = obj2.page.bind(obj2);

console.log(
  `cool ${setTimeout(() => {
    objs();
  }, 100)}`
);
console.log(
  `cool2 ${setTimeout(() => {
    objs2('he');
    }, 1000)}`
);
console.log(obj.time);
console.log(obj2.time);
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
