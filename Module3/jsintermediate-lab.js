// 1.

function ucFirstLetters(string) {
  // string = 'los angeles'
  let newString = "";
  let words = string.split(" "); // splits string based on " " ['los', 'angeles']

  for (let word of words) {
    //get first letter from word and capitalise

    if (newString.length != 0) {
      //if the string has more than 0 letters
      newString += " "; // adds a space after the first word
    } //this whole section is a repeating function before the below changes first letter to uppercase
    newString += word.charAt(0).toUpperCase() + word.substring(1);
  }

  return newString;
}

// console.log(ucFirstLetters("los angeles"));

// 2.

function truncate(string, max) {
  if (string.length > max) {
    return string.slice(0, max) + "...";
  }
  return string;
}

// console.log(truncate("This is a string", 5));

function truncate(string, max) {
  return string > max ? string : string.slice(0, max) + "...";
}

// console.log(truncate("This is a string", 12));

// 3.

const animals = ["Tiger", "Giraffe"];
animals.push("Meerkart", "Penguin");
animals.unshift("Monkey", "Sloth");
animals.sort();

function replaceMiddleAnimal(newValue) {
  const middleAnimal = Math.floor(animals.length / 2);
  animals.splice(middleAnimal, 0, newValue);
  return animals;
}

function findMatchingAnimals(beginsWith) {
  const matchingAnimals = animals.filter((animal) =>
    animal.startsWith(beginsWith)
  );
  return matchingAnimals;
}

// console.log(animals);
// console.log(replaceMiddleAnimal("Iguana"));
// console.log(findMatchingAnimals("M"));

// 4.

// Original answer
// function camelCase(cssProp) {
//   const removeHyphen = cssProp.split("-").join("");
//   return removeHyphen;
// }

function camelCase(cssProp) {
  let words = cssProp.split("-"); //splits the two words at the dash
  let camelCaseStr = words[0].toLowerCase(); //first word to lowercase
  for (let i = 1; i < words.length; i++) {
    //runs a loop to end after second word
    camelCaseStr +=
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); //starts on second word (words[i]), turns the first letter (.charAt90)) uppercase, then from the second letter onwards (slice 1) changes to lowercase.
  }

  return camelCaseStr;
}

// console.log(camelCase("margin-left"));
// console.log(camelCase("background-image"));
// console.log(camelCase("display"));

function camelCaseTwo(cssProp) {
  let words = cssProp.split("-");
  let camelCaseStr = words[0].toLowerCase();
  let isFirstWord = true;
  for (const word of words.slice(1)) {
    camelCaseStr += isFirstWord
      ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    isFirstWord = false;
  }

  return camelCaseStr;
}

// console.log(camelCaseTwo("margin-left"));
// console.log(camelCaseTwo("background-image"));
// console.log(camelCaseTwo("display"));

function camelCaseThree(cssProp) {
  let words = cssProp.split("-");
  let camelCaseStr = words[0].toLowerCase();

  for (const index in words) {
    if (index > 0) {
      camelCaseStr +=
        words[index].charAt(0).toUpperCase() +
        words[index].slice(1).toLowerCase();
    }
  }

  return camelCaseStr;
}

// console.log(camelCaseThree("margin-left"));
// console.log(camelCaseThree("background-image"));
// console.log(camelCaseThree("display"));

//5.

// let twentyCents = 0.2;
// let tenCents = 0.1;
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen); //why is this not working?

// this is giving the answer "0.200.10" because it is concatenating "0.20 and 0.10" as 'two fixed(2)' turns the numbers into a string

// function currencyAddition(float1, float2) {
//   let fixedTen = float1.toFixed(2);
//   let fixedTwenty = float2.toFixed(2);
//   let addition = parseFloat(fixedTen) + parseFloat(fixedTwenty);
//   return addition.toFixed(2);
// }

// console.log(currencyAddition(0.1, 0.2));
// console.log(0.3 == currencyAddition(0.1, 0.2)); // true

// function currencyOperation(float1, float2, operation) {
//   let fixedTen = parseFloat(float1.toFixed(2));
//   let fixedTwenty = parseFloat(float2.toFixed(2));
//   switch (operation) {
//     case "+":
//       result = fixedTen + fixedTwenty;
//   }

//   return parseFloat(result.toFixed(2));
// }

// console.log(currencyOperation(0.1, 0.2, "+"));
// console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true

// function currencyOperation(float1, float2, operation, numDecimals) {
//   if (numDecimals < 1 || numDecimals > 10) {
//     throw new Error("numDecimals needs to be between 1 and 10");
//   }
//   let fixedTen = parseFloat(float1.toFixed(numDecimals));
//   let fixedTwenty = parseFloat(float2.toFixed(numDecimals));
//   switch (operation) {
//     case "+":
//       result = fixedTen + fixedTwenty;
//   }

//   return parseFloat(result.toFixed(numDecimals));
// }

// console.log(currencyOperation(0.1, 0.2, "+", 10));

//6.

// const colours = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "orange",
//   "red",
//   "blue",
//   "yellow",
// ];
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
// const movies = [
//   "aladdin",
//   "tarzan",
//   "lion king",
//   "mulan",
//   "tarzan",
//   "lion king",
// ];

// function unique(duplicatesArray) {
//   return Array.from(new Set(duplicatesArray));
// }

// console.log(unique(colours));
// console.log(unique(testScores));
// console.log(unique(movies));

//7.

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// function getBookTitle(bookId) {
//   const book = books.find((book) => book.id == bookId);
//   return book.title;
// }

// console.log(getBookTitle(1));

// function getOldBooks() {
//   const oldBooks = books.filter((book) => book.year < 1950);
//   return oldBooks;
// }

// console.log(getOldBooks());

// function addGenre() {
//   return books.map((book) => ({ ...book, genre: "Classic" }));
// }

// console.log(addGenre());

// function getTitles(authorInitial) {
//   return books
//     .filter((book) => book.author.startsWith(authorInitial))
//     .map((book) => book.title);
// }

// console.log(getTitles("G"));

// function latestBook() {
//   let latestYear = 0;
//   books.forEach((book) => {
//     if (book.year > latestYear) { //checks if the books year is larger than the current latestYear, which it will be
//       latestYear = book.year;
//     } //if true, then update latestYear with the books current year, this will find the most current/highest year across all books
//   });
//   const latestBook = books.find((book) => book.year == latestYear);
//   return latestBook;
// }

// console.log(latestBook());

//8.

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

//a

const phoneBookDEF = new Map();
phoneBookDEF.set("Dave", "0410000000");
phoneBookDEF.set("Eliza", "0412000000");
phoneBookDEF.set("Fred", "0413000000");

//b

for (let name of phoneBookDEF.keys()) {
  // console.log(name);
}
for (let number of phoneBookDEF.values()) {
  // console.log(number);
}

//c

phoneBookABC.set("Caroline", "0455221183");

// console.log(phoneBookABC);

//d

// function printPhoneBook(contacts) {
//   for (const [name, phoneNumber] of contacts.entries()) {
//     console.log(name + ": " + phoneNumber);
//   }
// }

// printPhoneBook(phoneBookDEF);

//e

let phoneBooksCombined = new Map([...phoneBookABC, ...phoneBookDEF]);

// console.log(phoneBooksCombined);

//f

// for (let names of phoneBooksCombined.keys()) {
//   console.log(names);
// }

//9.

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries() {
  let sum = 0;
  for (let name in salaries) {
    sum += salaries[name];
  }
  return sum;
}

//notes for myself: when using for...in loop you can only access the values through the keys, which is why I'm referencing the names

console.log(sumSalaries());

// function topEarner(salaries) {

// }

// console.log(topEarner());
