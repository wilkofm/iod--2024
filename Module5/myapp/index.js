const testRoutes = require("./routes/myTestRoutes");
const express = require("express");
const app = express();
const port = 3000;

app.use("/mytest", testRoutes);

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

// app.use("/", express.static("public"));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

// app.use("/mytest", testRoutes);
