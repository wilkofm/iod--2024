const express = require("express");
const app = express();
const port = 3000;
const testRoutes = require("./routes/myTestRoutes");

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

app.use("/", express.static("public"));

app.use("/mytest", testRoutes);
