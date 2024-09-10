// 1

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
// NaN

// 2

let three = "3";
3;
let four = "4";
4;
let thirty = "30";
30;
//thirty is not judging by the below

let addition = three + four;
// 34;
let multiplication = three * four;
// 12;
let division = three / four;
// 0.75;
let subtraction = three - four;
// -1;
let lessThan1 = three < four;
// true;
let lessThan2 = thirty < four;
// false;
// this gives a false result as "30" is not less than "4"

// 3

// if (0) console.log("#1 zero is true"); //wont print
// if ("0") console.log("#2 zero is true"); //print
// if (null) console.log("null is true"); //wont print
// if (-1) console.log("negative is true"); //print
// if (1) console.log("positive is true"); //print

// 4

// let a = 2,
//   b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

let a = 12,
  b = 3;
let result = a + b < 10 ? "less than 10" : "greater than 10";

//the += operator concatenates "less than 10" or "greater than ten" to the result and updates the result at the same time

// 5

function getGreeting(name) {
  return "Hello " + name + "!";
}

// console.log(getGreeting("Max"));

//function expression syntax

const getGreetingExpression = function (name) {
  return "Hello " + name + "!";
};

// console.log(getGreetingExpression("Max"));

//arrow function syntax

const getGreetingArrow = (name) => {
  return "Hello " + name + "!";
};

// console.log(getGreetingArrow("Max"));

// 6

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

// 7

const basketballGame = {
  score: 0,
  basket() {
    this.score += 2;
    return this;
  },
  freeThrow() {
    this.score++;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
  },
  fullTime() {
    console.log(
      "Fulltime score is " +
        this.score +
        " with a foul count of " +
        this.foulCount
    );
  },
};

const fouls = {
  foulCount: 0,
  personalFoul() {
    this.foulCount++;
    return this;
  },
  technicalFoul() {
    this.foulCount++;
    return this;
  },
  flagrantFoul() {
    this.foulCount++;
    return this;
  },
  looseFoul() {
    this.foulCount++;
    return this;
  },
  totalFouls() {
    console.log("Total number of fouls are " + this.foulCount);
  },
};

const game = Object.assign({}, basketballGame, fouls);

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

basketballGame.fullTime();

fouls.personalFoul().looseFoul().totalFouls();

game.basket().basket().freeThrow().threePointer().halfTime();
game.flagrantFoul().personalFoul().technicalFoul();
game.basket().freeThrow().threePointer().threePointer().fullTime();

// 8

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const melbourne = {
  traditionalName: "Naarm",
  sight: "NGV",
  restaurant: "Yakimono",
  hotel: "QT Melbourne",
};

// need to print all properties and values in for in loop

for (let properties in sydney) {
  console.log("Property: " + properties);
  console.log("Value: " + sydney[properties]);
}

for (let properties in melbourne) {
  console.log("Property " + properties);
  console.log("Value: " + melbourne[properties]);
}

// 9

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = [...teamSports];
moreSports.push("Basketball");
moreSports.unshift("Running");

let dog2 = dog1;
dog2 = "Felix";

let cat2 = { ...cat1 };
cat2.name = "Charlie";

// console.log(moreSports);
// console.log(dog2);
// console.log(cat2);

console.log(teamSports);
console.log(dog1);
console.log(cat1);
//dog1 name has not been updated but all the others have been, as dog1 is just a string, not an array or object, so the original is not affected.

// 10

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}
Person.prototype.canDrive = function () {
  return this.age >= 16;
};

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    return this.age >= 16;
  }
}

const user1 = new Person("Jennifer", 29);
const user2 = new Person("Henry", 32);
const user3 = new PersonClass("Ellen", 27);

console.log(
  "Name: " + user1.name,
  "Age: " + user1.age,
  "Human: " + user1.human,
  "Can Drive: " + user2.canDrive()
);
console.log(
  "Name: " + user2.name,
  "Age: " + user2.age,
  "Human: " + user2.human,
  "Can Drive: " + user2.canDrive()
);
console.log(
  "Name: " + user3.name,
  "Age: " + user3.age,
  "Human: " + user3.human,
  "Can Drive: " + user3.canDrive()
);
