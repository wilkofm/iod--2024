// let globalVariableCat = "cat";
// function myFunction() {
//   let localVariableDog = "dog";
//   return "global function with local scope variable " + localVariableDog;
// }
// console.log(localVariableDog); // ReferenceError: localVariableDog is not defined
// globalEnvironment = {
// environmentRecord: {
// globalVariableCat: 'cat', // has no access to localVariableDog
// myFunction: <reference to function object>,
// }
// outer: null // there is no parent environment here
// }
// localMyFunctionEnvironment = {
// environmentRecord: {
// localVariableDog: 'dog'
// },
// outer: globalEnvironment // can still access everything in global

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.salePrice = price * 0.9; // 10% off
}
function Food(name, price) {
  Product.call(this, name, price); // inherits from Product with custom context
  this.category = "food";
}
const cheese = new Food("cheese", 5);
console.log(
  `${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`
);

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
let rabbit2 = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  jumps: {
    // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: true, // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
  },
});
console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`); // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`); // own properties, then inherited ones

const obj = {}; // simple empty object
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true: its prototype is Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj))); // inherited properties from Object prototype

const arr = []; // simple empty array
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true: its prototype is Array prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr))); //inherited properties from prototype

const date = new Date(); // simple empty date
console.log(Object.getPrototypeOf(date) === Date.prototype); // true: its prototype is Date prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(date))); //inherited properties from prototype

const str = ""; // simple empty string
console.log(Object.getPrototypeOf(str) === String.prototype); // true: its prototype is String prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(str))); //inherited properties from prototype

// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => {
  // resolve/reject are callback functions
  if (Math.random() > 0.5)
    setTimeout(() => resolve("Random number ok"), 250); // success
  else setTimeout(() => reject("Random number too low"), 250); // failure
});
promise // consume the promise by responding to outcomes when they happen
  .finally(() => console.log("Wait is over, promise has settled.")) // always prints
  .then((result) => console.log("Success! " + result)) // prints resolve msg
  .catch((error) => console.log("Error! " + error)); // prints reject msg

//async finction example

async function getData() {
  try {
    const response = await fetch("https://reqres.in/api/users"); // this line won't run until promise resolves
    // console.log("RES", response);

    if (!response.ok) {
      throw new Error(`HTTP error! ${response.status}`);
    } //if the website link is not OK (if website link is broken etc.) we will recieve this error

    const json = await response.json(); // convert stream to JSON
    console.log("JSON", json.data);
  } catch (err) {
    console.log(`Failed: ${err}`); //this will print if there's an error
  } finally {
    console.log("Finished!!"); //this will always print
  }
}

getData();
