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

//Test Answer
// function camelCase(cssProp) {
//   const addUppercase = cssProp
//     .replace("-" + 1)
//     .charAt(4)
//     .toUpperCase();
//   return addUppercase;
// }

//Practice Answer 1
// function camelCase(cssProp) {
//   const removeHyphen = cssProp
//     .split("-")
//     .map(camelCase (word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join("");
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

// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

//5.

let twentyCents = 0.2;
let tenCents = 0.1;
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen); //why is this not working?

// this is giving the answer "0.200.10" because it is concatenating "0.20 and 0.10" as 'two fixed(2)' turns the numbers into a string

function currencyAddition(float1, float2) {
  let tenCents = float1.toFixed(2);
  let twentyCents = float2.toFixed(2);
  let addition = parseFloat(tenCents) + parseFloat(twentyCents);
  return addition.toFixed(2);
}

// console.log(currencyAddition(0.1, 0.2));
// console.log(0.3 == currencyAddition(0.1, 0.2)); // true

function currencyOperation(float1, float2, operation) {
  let tenCents = float1.toFixed(2);
  let twentyCents = float2.toFixed(2);
  switch (operation) {
    case "+":
      return tenCents + twentyCents;
  }
}

console.log(currencyOperation(0.1, 0.2, "+"));
