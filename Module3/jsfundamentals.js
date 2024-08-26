"" + 1 + 0;
// 1
"" - 1 + 0;
// -1
true + false;
// false
!true;
// false
6 / "3";
// 2
"2" * "3";
// 6
4 + 5 + "px";
// 9px
"$" + 4 + 5;
// $9
"4" - 2;
// 2
"4px" - 2;
// 2px
" -9 " + 5;
// -4
" -9 " - 5;
// -14
null + 1;
// 1
undefined + 1;
// 1
undefined == null;
// true
undefined === null;
// false
" \t \n" - 2;
// unsure

// Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?

let three = "3";
3;
let four = "4";
4;
let thirty = "30";
30;
//thirty is not judging by the below

//what is the value of the following expressions?
let addition = three + four;
34;
let multiplication = three * four;
12;
let division = three / four;
0.75;
let subtraction = three - four;
-1;
let lessThan1 = three < four;
true;
let lessThan2 = thirty < four;
true; // why

// if (0) console.log("#1 zero is true"); //wont print
// if ("0") console.log("#2 zero is true"); //print
// if (null) console.log("null is true"); //wont print
// if (-1) console.log("negative is true"); //print
// if (1) console.log("positive is true"); //print

// Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// and b. What does the ‘+=’ do?

// let a = 2,
//   b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

// let a = 12,
//   b = 3;
// let result = a + b < 10 ? "less than 10" : "greater than 10";

// Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("Max"));

//function expression syntax

const getGreetingExpression = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreetingExpression("Max"));

//arrow function syntax

const getGreetingArrow = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreetingArrow("Max"));

// Complete the inigo object by adding a lastName property and including it in the
// greeting.

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  //   getCatchPhrase(person) {
  //     if (person.numFingers > 5) {
  //       return "You killed my father. Prepare to die.";
  //     } else {
  //       return "Nice to meet you.";
  //     }
  //   },
  getCatchPhrase: (person) => {
    return person.numFingers > 5
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);
