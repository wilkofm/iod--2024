const app = require("./app");
const port = 3000;
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

app.get("/test", (req, res) => {
  res.send("This is a test");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

// app.use("/mytest", testRoutes);
