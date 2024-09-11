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

function printMe() {
  console.log("printing debounced message");
}

function debounce(printMe) {
  const wait = 1000;
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      printMe(...args);
    }, wait);
  };
}

const debouncedPrintMe = debounce(printMe);

setTimeout(debouncedPrintMe, 100);
setTimeout(debouncedPrintMe, 200);
setTimeout(debouncedPrintMe, 300);
