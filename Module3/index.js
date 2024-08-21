// functions

function helloWorld(firstName) {
  //Ternary operators
  firstName
    ? console.log(`hello ${firstName}'s world`)
    : console.log("hello world");
  //   console.log(`hello ${firstName}'s world`);
  //   if (firstName) {
  //     console.log(`hello ${firstName}'s world`);
  //   } else {
  //     console.log("hello world");
  //   }
}
// helloWorld("Max"); //String is true
// helloWorld(); //String is flase
helloWorld("");
