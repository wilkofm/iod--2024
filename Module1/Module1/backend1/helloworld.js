// const Sentiment = require("sentiment");
// const sentiment = new Sentiment();
// const result = sentiment.analyze("Cats are stupid.");
// console.log(result);

// function getSentimentScore(sentence) {
//   const result = sentiment.analyze(sentence);
//   return result.score;
// }
// const sentence = "Max is learning and happy";
// const score = getSentimentScore(sentence);
// console.log(`Sentiment score: ${score}`);

// // function sayHello() {
// //   console.log("Hello" + "Max");
// // }
// // sayHello();

// // function greet(name) {
// //   console.log("Hello " + name);
// // }

// // // Example usage:
// // greet("Max");
// console.log("this is a Message");
// console.info("this is info");
// console.warn("this is a warning");
// console.error("this is an error");

// let groups = ["flo", "pinkpantheress", "cubsport", "newjeans", "charlixcx"];
// groups[1] = "yves";
// groups[4] = "troye";
// // let indexToReplace = 1;
// // let newValue = "yves";
// // groups[indexToReplace] = newValue;
// groups.unshift("xg");
// let lastGroup = groups.pop();
// console.log(groups);

// objects in javascript contain keys (or properties) with corresponding values
// const user = {
//   first_name: "Max",
//   last_name: "Wilkinson",
//   age: 34,
//   followers: 0,
// };

// console.log(user.first_name);
// console.log(user.last_name);

// user.location = "Sydney";
// console.log(user.location);

// const book = {
//   title: "Death In Her Hands",
//   description: "A thriller where a woman finds a note from a serial killer",
//   author: "Ottessa Moshfegh",
//   numberOfPages: 272,
// };

// console.log(book.title);
// console.log(book.description);
// console.log(book.author);
// console.log(book.numberOfPages);

// this function returns the sum of a + b
// function sum(a, b) {
//   return a + b;
// }

// this function returns the sum of a * b
// function sum(a, b) {
//   return a * b;
// }

// console.log(sum(5, 1));

// if (sum(5, 1) != 5) {
//   throw error;
// }

// this function returns the sum of c / d
function sum(c, d) {
  return c / d;
}

console.log(sum(5, 2));

if (sum(5, 2) != 5) {
  throw error;
}

// this function returns the sum of a - b

function sum(a, b) {
  return a - b;
}

console.log(sum(100.0, 200.5));

if (sum(100.0, 200.5) != -100.5) {
  throw error;
}
