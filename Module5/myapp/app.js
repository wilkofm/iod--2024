const express = require("express");
const app = express();

const testRoutes = require("./routes/myTestRoutes");
const userRoutes = require("./routes/userRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");

app.use(express.json());
app.use("/mytest", testRoutes);
app.use("/users", userRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/", express.static("public"));

// export the app
module.exports = app;
