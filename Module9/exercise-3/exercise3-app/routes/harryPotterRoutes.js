const express = require("express");
const harryPotterRouter = express.Router();
const harryPotterControllers = require("../controllers");

harryPotterRouter.get("/", (req, res) => {
  harryPotterControllers.harryPotterController.getHarryPotter(req, res);
});

module.exports = harryPotterRouter;
