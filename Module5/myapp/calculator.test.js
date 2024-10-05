const request = require("supertest");
const app = require("./app");

describe("Calculator Routes", () => {
  // generate some random numbers to test the calculator
  let number1 = 50;
  let number2 = 10;

  test("GET /calculator/add => sum of numbers", () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)

      .expect("Content-Type", /json/)
      .expect(200)

      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2,
        });
      });
  });

  test("GET /calculator/subtract => sum of numbers", () => {
    return request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)

      .expect("Content-Type", /json/)
      .expect(200)

      .then((response) => {
        expect(response.body).toEqual({
          result: number1 - number2,
        });
      });
  });

  test("GET /calculator/divide => sum of numbers", () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=${number2}`)

      .expect("Content-Type", /json/)
      .expect(200)

      .then((response) => {
        expect(response.body).toEqual({
          result: number1 / number2,
        });
      });
  });

  test("GET /calculator/multiply => sum of numbers", () => {
    return request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)

      .expect("Content-Type", /json/)
      .expect(200)

      .then((response) => {
        expect(response.body).toEqual({
          result: number1 * number2,
        });
      });
  });
});
