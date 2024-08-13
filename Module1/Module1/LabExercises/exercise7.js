// this function returns the sum of a + b
function add(a, b) {
  return a + b;
}

if (add(5, 1) != 5) {
  throw error("Error Message");
}

// if (sum(1200, 2) != 1203) {
//   throw error;
// }

// if (sum(-50, 53) != 3) {
//   throw error;
// }

// this function returns the sum of a * b
function sum(a, b) {
  return a * b;
}

// if (sum(5, 0) != 5) {
//   throw error;
// }

// this function returns the sum of c / d
function sum(c, d) {
  return c / d;
}

// if (sum(5, 2) != 5) {
//   throw error;
// }

// this function returns the sum of a - b

function sum(a, b) {
  return a - b;
}

console.log(sum(100.0, 200.5));

if (sum(100.0, 200.5) != -100.5) {
  throw error;
}
