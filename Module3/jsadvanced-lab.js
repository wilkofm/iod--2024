//1.

// function makeCounter(startFrom = 0, incrementBy = 1) {
//   let currentCount = startFrom;
//   return function () {
//     currentCount += incrementBy;
//     console.log(currentCount);
//     return currentCount;
//   };
// }
// let counter1 = makeCounter(5, 2);
// counter1();
// counter1();

// let counter2 = makeCounter(7, 3);
// counter2();
// counter2();
// counter2();

//2.

// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");

// a) What order will the four tests below print in? Why?
//The test will print in the following order: #4, #3, #2, #1.
//This is because #4 is the least delayed msg (no delay) and #1 is the most delayed (100ms)

//b) rRewrite delayMsg as an arrow function

// let delayMsg = (msg) => {
//   console.log(`This message will be printed after a delay: ${msg}`);
// };

// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");

//c) Add a fifth test which uses a large delay time (greater than 10 seconds)

// let myTimeOut = setTimeout(delayMsg, 11 * 1000, "#5: Delayed by 11s");

//d) Use clearTimeout to prevent the fifth test from printing at all.

// function printMessage(msg) {
//   console.log(`${msg}`);
// }
// let cancelledTimerId = setTimeout(
//   printMessage,
//   1000,
//   "Timeout cancelled so delayMsg #5 never prints"
// );
// clearTimeout(myTimeOut);

//3.

// function printMe() {
//   console.log("printing debounced message");
// }

// function debounce(printMe) {
//   const wait = 1000;
//   let timeout;
//   return function (...args) {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       printMe(...args);
//     }, wait);
//   };
// }

// const debouncedPrintMe = debounce(printMe);

// setTimeout(debouncedPrintMe, 100);
// setTimeout(debouncedPrintMe, 200);
// setTimeout(debouncedPrintMe, 300);

//b)

// function printMe() {
//   console.log("printing debounced message");
// }

// function debounce(printMe, ms) {
//   const wait = 1000;
//   let timeout;
//   return function (...args) {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       printMe(...args);
//     }, ms);
//   };
// }

// const debouncedPrintMe = debounce(printMe, 1000);

// setTimeout(debouncedPrintMe, 100);
// setTimeout(debouncedPrintMe, 200);
// setTimeout(debouncedPrintMe, 300);

//c)

// function printMe(msg) {
//   console.log(`printing debounced message: ${msg}`);
// }

// function debounce(printMe, ms) {
//   const wait = 1000;
//   let timeout;
//   return function (...args) {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       printMe(...args);
//     }, ms);
//   };
// }

// const debouncedPrintMe = debounce(printMe, 1000);

// debouncedPrintMe("No Show 1");
// debouncedPrintMe("No Show 2");
// debouncedPrintMe("Success");

//4.

//a)

// function printFibonacci() {
//   let a = 1;
//   let b = 1;
//   console.log(a);
//   const interval = setInterval(() => {
//     console.log(b);
//     let sum = a + b;
//     a = b;
//     b = sum;
//   }, 1000);
// }

// printFibonacci();

//b)

// function printFibonacciTimeouts() {
//   let a = 1;
//   let b = 1;
//   function printAgain() {
//     console.log(a);
//     let sum = a + b;
//     a = b;
//     b = sum;
//     setTimeout(printAgain, 1000);
//   }
//   setTimeout(printAgain, 1000);
// }

// printFibonacciTimeouts();

//c)

// function printFibonacciTimeouts(limit) {
//   let a = 1;
//   let b = 1;
//   let count = 0;

//   function printAgain() {
//     if (count < limit) {
//       console.log(a);
//       count++;
//       let sum = a + b;
//       a = b;
//       b = sum;
//       setTimeout(printAgain, 1000);
//     }
//   }

//   setTimeout(printAgain, 1000);
// }

// printFibonacciTimeouts(10);

//5.

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
// car.description();
// setTimeout(car.description, 200);

//The setTimeOut call does not work because of the use of 'this' within the console.log, 'this' loses it's context when using setTimeOut as it no longer links to 'car'

//a)

// setTimeout(function () {
//   car.description();
// }, 200);

//b)

let carClone = Object.assign({}, car, { year: 1990 });

console.log(carClone);
carClone.description();

//c)
