const testRoutes = require("./routes/myTestRoutes");
const express = require("express");
const app1 = express();
const port3000 = 3000;

app.use("/mytest", testRoutes);

app1.get("/", (req, res) => {
  res.send("Hello from server port 3000!");
});

app1.get("/test", (req, res) => {
  res.send("This is a test");
});

app1.listen(port3000, () => {
  console.log(`Example app listening
at http://localhost:${port3000}`);
});

const app2 = express();
const port80 = 80;

app2.get("/", (req, res) => {
  res.send("Hello from server port 80!");
});

app2.get("/test", (req, res) => {
  res.send("This is a test");
});

app2.listen(port80, () => {
  console.log(`Example app listening
at http://localhost:${port80}`);
});

const app3 = express();
const port1500 = 1500;

app3.get("/", (req, res) => {
  res.send("Hello from server 1500!");
});

app3.get("/test", (req, res) => {
  res.send("This is a test");
});

app3.listen(port1500, () => {
  console.log(`Example app listening
at http://localhost:${port1500}`);
});
