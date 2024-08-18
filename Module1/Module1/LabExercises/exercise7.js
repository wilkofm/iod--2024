// this function returns the sum of a + b
function add(a, b) {
  return a + b;
}

try {
  if (add(5, 1) != 5) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (add(5, 3) != 15) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (add(5, 1) != 6) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

// this function returns the sum of a * b
function multiply(a, b) {
  return a * b;
}

try {
  if (multiply(10, 1) != 8) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (multiply(1000, 0.3) != 234) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (multiply(10, 10) != 100) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

// // this function returns the sum of c / d
function divide(c, d) {
  return c / d;
}

try {
  if (divide(10, 2) != 10) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (divide(50.5, 2) != 25) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (divide(21, 3) != 7) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

// // this function returns the sum of a - b

function subtract(a, b) {
  return a - b;
}

try {
  if (subtract(21, 3) != 17) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (subtract(-50, 5) != -56) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (subtract(-1000, 200) != -1200) {
    throw new Error("Error Message");
  }
} catch (e) {
  console.log(e.message);
}

// // this function returns the sentence "hello Max"

function greet(name) {
  return "hello " + name;
}

try {
  if (greet("Max") != "hello Maxxx") {
    throw new Error("This is incorrect");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (greet("Max") != "hello Maxie") {
    throw new Error("This is wrong");
  }
} catch (e) {
  console.log(e.message);
}

try {
  if (greet("Max") != "hello Max") {
    throw new Error("This is terrible");
  }
} catch (e) {
  console.log(e.message);
}
