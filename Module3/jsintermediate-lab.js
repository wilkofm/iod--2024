// const sentence = "you've got to be crazy to learn javascript.";

// console.log(sentence.split(" "));
// // console.log(sentence.ucFirstLetters(" "));

function ucFirstLetters(string) {
  // string = 'los angeles'
  let newString = "";
  let words = string.split(" "); // ['los', 'angeles']

  for (let word of words) {
    //get first letter from word and capitalise

    if (newString.length != 0) {
      newString += " "; // adds a space after the first word
    }
    newString += word.charAt(0).toUpperCase() + word.substring(1);
  }

  return newString;
}

console.log(ucFirstLetters("los angeles"));
