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

function camelCase(cssProp) {
  const removeHyphen = cssProp.split("-").join("");
  return removeHyphen;
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

//function needs to Uppercase first letter of each word after dash

//test answer

// function camelCase(cssProp) {
//   const addUppercase = cssProp.replace("-" + 1).toUpperCase;
//   return addUppercase;
// }
